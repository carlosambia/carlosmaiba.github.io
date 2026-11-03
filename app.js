"use strict";
// HN.tv: a static, login-free video browser over the HackerTube data export.
// All personal state (likes, watch later, history, settings) lives in localStorage.

const $ = (s, r = document) => r.querySelector(s);
const main = $("#main");
const PAGE = 24;
const DEEP_TYPES = new Set(["talk", "lecture", "course", "documentary", "podcast", "interview"]);

let VIDEOS = [], TYPES = [], AREAS = [], CATS = [];
const BYVID = new Map();
const shardCache = new Map();
let observer = null;

// ---------- persistent state ----------
const KEY = "hntv-state";
const DEFAULT_SETTINGS = { hideNews: true, hideCited: true };
const S = loadState();

function loadState() {
  let raw = {};
  try { raw = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch {}
  return {
    likes: Array.isArray(raw.likes) ? raw.likes : [],
    dislikes: Array.isArray(raw.dislikes) ? raw.dislikes : [],
    later: Array.isArray(raw.later) ? raw.later : [],
    history: Array.isArray(raw.history) ? raw.history : [],
    settings: { ...DEFAULT_SETTINGS, ...(raw.settings || {}) },
  };
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {}
}
function sessionSeed(reset = false) {
  let seed = 0;
  try { seed = Number(sessionStorage.getItem("hntv-seed")) || 0; } catch {}
  if (!seed || reset) {
    seed = (Math.random() * 2 ** 31) | 0 || 1;
    try { sessionStorage.setItem("hntv-seed", String(seed)); } catch {}
  }
  return seed;
}
const has = (list, vid) => list.includes(vid);
function toggle(list, vid) {
  const i = list.indexOf(vid);
  if (i >= 0) list.splice(i, 1); else list.push(vid);
  return i < 0;
}
function seenSet() { return new Set(S.history.map((h) => h.v)); }

// ---------- helpers ----------
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9+#]+/g, " ").trim();
const recs = (v) => `${v.r} rec${v.r === 1 ? "" : "s"}`;
const typeName = (v) => TYPES[v.k] || "video";
const years = (v) => (v.y[0] === v.y[1] ? `${v.y[0]}` : `${v.y[0]}–${v.y[1]}`);
const visible = (v) => !(S.settings.hideNews && v.l === "n") && !(S.settings.hideCited && v.r === 0);
const inArea = (v, area) => !area || v.x.some((c) => CATS[c].area === area);

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}
function shardName(vid) {
  const c = vid[0];
  return c >= "A" && c <= "Z" ? "u" + c.toLowerCase() : c;
}
function hue(str) {
  let h = 0;
  for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}

// ---------- recommendations ----------
// Score = HN quality + affinity to the categories you like + closeness to videos you liked/watched
// + seeded noise for variety. Watched and disliked videos sink or disappear.
function personalOrder(filterFn) {
  const rng = mulberry32(sessionSeed());
  const N = VIDEOS.length;
  const catAff = new Float32Array(CATS.length);
  const near = new Float32Array(N);
  const feed = (vid, cw, nw) => {
    const v = BYVID.get(vid);
    if (!v) return;
    v.x.forEach((c, k) => { catAff[c] += cw / (k + 1); });
    v.n.forEach((j, k) => { near[j] += nw * (1 - k / (v.n.length + 4)); });
  };
  S.likes.forEach((vid) => feed(vid, 1, 1.2));
  S.later.forEach((vid) => feed(vid, 0.5, 0.5));
  S.history.slice(0, 60).forEach((h) => feed(h.v, 0.35, 0.4));
  S.dislikes.forEach((vid) => feed(vid, -1.5, -0.8));

  const seen = seenSet();
  const disliked = new Set(S.dislikes);
  const out = [];
  for (const v of VIDEOS) {
    if (disliked.has(v.v) || !visible(v) || !filterFn(v)) continue;
    let aff = 0;
    v.x.forEach((c, k) => { aff += catAff[c] / (k + 1); });
    const u = Math.max(rng(), 1e-9);
    const s = 1.4 * Math.log1p(v.sc)
      + 1.3 * Math.tanh(aff / 3)
      + 0.8 * Math.max(-2, Math.min(near[v.i], 3))
      - (seen.has(v.v) ? 3 : 0)
      + 0.8 * -Math.log(-Math.log(u));
    out.push([s, v]);
  }
  out.sort((a, b) => b[0] - a[0]);
  return out.map((p) => p[1]);
}

// ---------- search ----------
function prepSearch(v) {
  if (v._t !== undefined) return;
  v._t = " " + norm(v.t) + " ";
  v._c = " " + norm(v.c) + " ";
  v._k = " " + norm([v.p, ...v.g, ...v.x.map((c) => CATS[c].name), typeName(v)].join(" ")) + " ";
  v._s = " " + norm(v.s + " " + v.w) + " ";
}
function search(q) {
  const terms = norm(q).split(" ").filter(Boolean);
  if (!terms.length) return [];
  const run = (needAll) => {
    const res = [];
    for (const v of VIDEOS) {
      prepSearch(v);
      let score = 0, matched = 0;
      for (const t of terms) {
        const w = " " + t;
        let ts = 0;
        if (v._t.includes(w)) ts += 6; else if (v._t.includes(t)) ts += 2;
        if (v._c.includes(w)) ts += 4;
        if (v._k.includes(w)) ts += 3;
        if (v._s.includes(w)) ts += 1;
        if (ts) matched++;
        score += ts;
      }
      if (!matched || (needAll && matched < terms.length)) continue;
      if (S.settings.hideNews && v.l === "n") score *= 0.6;
      res.push([score * (1 + Math.log1p(v.sc) / 3), v]);
    }
    return res.sort((a, b) => b[0] - a[0]).map((p) => p[1]);
  };
  const all = run(true);
  return all.length ? all : run(false);
}

// ---------- rendering ----------
function card(v, { why = false, seen } = {}) {
  const id = esc(v.v);
  return `<a class="card" href="#/v/${id}">
    <div class="thumb">
      <img loading="lazy" alt="" src="https://i.ytimg.com/vi/${id}/hq2.jpg"
        onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'">
      <span class="badge">${esc(typeName(v))}</span>
      ${v.r ? `<span class="recs" title="Distinct HN commenters who recommended it">${recs(v)}</span>` : ""}
      ${seen && seen.has(v.v) ? `<span class="seen-bar"></span>` : ""}
    </div>
    <div class="meta">
      <h3 title="${esc(v.t)}">${esc(v.t)}</h3>
      <p>${esc(v.c)} · HN ${years(v)}</p>
      ${why ? `<p class="why">${esc(v.w)}</p>` : ""}
    </div>
  </a>`;
}

function mini(v) {
  const id = esc(v.v);
  return `<a class="mini" href="#/v/${id}">
    <div class="thumb"><img loading="lazy" alt="" src="https://i.ytimg.com/vi/${id}/hq2.jpg"
      onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${id}/mqdefault.jpg'"></div>
    <div class="meta"><h3 title="${esc(v.t)}">${esc(v.t)}</h3><p>${esc(v.c)}</p><p>${v.r ? `${recs(v)} · ` : ""}${esc(typeName(v))}</p></div>
  </a>`;
}

function infinite(container, list, opts = {}) {
  if (observer) observer.disconnect();
  const seen = seenSet();
  let off = 0;
  const grid = document.createElement("div");
  grid.className = "grid";
  const sentinel = document.createElement("div");
  sentinel.className = "sentinel";
  container.append(grid, sentinel);
  const more = () => {
    if (off >= list.length) { observer && observer.disconnect(); return; }
    grid.insertAdjacentHTML("beforeend", list.slice(off, off + PAGE).map((v) => card(v, { ...opts, seen })).join(""));
    off += PAGE;
  };
  more();
  observer = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) more(); }, { rootMargin: "800px" });
  observer.observe(sentinel);
}

function areaChips(base, current) {
  const chip = (id, name) =>
    `<a class="chip ${current === id ? "on" : ""}" href="${base}${id ? `?a=${encodeURIComponent(id)}` : ""}">${esc(name)}</a>`;
  return `<div class="chips">${chip("", "All")}${AREAS.map((a) => chip(a.id, a.name)).join("")}</div>`;
}

function setNav(name) {
  document.querySelectorAll(".side a").forEach((a) => a.classList.toggle("on", a.dataset.nav === name));
}

function emptyState(title, text) {
  return `<div class="empty"><h2>${esc(title)}</h2><p>${text}</p></div>`;
}

// ---------- pages ----------
function pageFeed(params, deep) {
  setNav(deep ? "deep" : "home");
  const area = params.get("a") || "";
  const base = deep ? "#/deep" : "#/";
  const list = personalOrder((v) => inArea(v, area) && (!deep || DEEP_TYPES.has(typeName(v))));
  const tuned = S.likes.length + S.history.length > 0;
  main.innerHTML = `
    <div class="bar">
      <h1>${deep ? "Deep dives" : tuned ? "For you" : "What HN keeps recommending"}</h1>
      <button class="btn" id="shuffle"><svg viewBox="0 0 24 24"><path d="M10.6 9.2 5.4 4 4 5.4l5.2 5.2zM14.5 4l2 2L4 18.6 5.4 20 18 7.5l2 2V4zm.3 9.4-1.4 1.4 3.1 3.1-2 2H20v-5.5l-2 2z"/></svg>Shuffle</button>
    </div>
    <p class="sub">${deep
      ? "Talks, lectures, documentaries and long conversations: the stuff worth an evening."
      : tuned
        ? "Ranked by how often HN recommends a video, nudged toward what you like and away from what you've seen."
        : "Videos Hacker News commenters keep pointing each other to, across 20 years. Like a few to tune this feed; everything stays in your browser."}</p>
    ${areaChips(base, area)}`;
  $("#shuffle").onclick = () => { sessionSeed(true); route(); };
  infinite(main, list);
}

function pageExplore() {
  setNav("explore");
  const count = new Map();
  for (const v of VIDEOS) if (visible(v)) v.x.forEach((c) => count.set(c, (count.get(c) || 0) + 1));
  main.innerHTML = `
    <div class="bar"><h1>Topics</h1></div>
    <p class="sub">${CATS.length} categories in ${AREAS.length} areas.</p>
    <div class="areas">${AREAS.map((a) => `
      <section class="area">
        <h2><a href="#/?a=${esc(a.id)}">${esc(a.name)}</a></h2>
        <ul>${a.cats.map((c) => `<li><a href="#/c/${esc(c.id)}" title="${esc(c.desc)}"><span>${esc(c.name)}</span><span>${count.get(c.i) || 0}</span></a></li>`).join("")}</ul>
      </section>`).join("")}
    </div>`;
}

function pageCategory(id, params) {
  setNav("explore");
  const cat = CATS.find((c) => c.id === id);
  if (!cat) return notFound();
  const sort = params.get("s") || "top";
  let list = VIDEOS.filter((v) => visible(v) && v.x.includes(cat.i) && !S.dislikes.includes(v.v));
  if (sort === "recent") list.sort((a, b) => b.y[1] - a.y[1] || b.sc - a.sc);
  else if (sort === "foryou") list = personalOrder((v) => v.x.includes(cat.i));
  else list.sort((a, b) => b.sc - a.sc);
  const chip = (s, name) => `<a class="chip ${sort === s ? "on" : ""}" href="#/c/${esc(id)}?s=${s}">${name}</a>`;
  main.innerHTML = `
    <div class="bar"><h1>${esc(cat.name)}</h1></div>
    <p class="sub"><a href="#/?a=${esc(cat.area)}">${esc(cat.areaName)}</a> · ${list.length} videos · ${esc(cat.desc)}</p>
    <div class="chips">${chip("top", "Most recommended")}${chip("recent", "Recently discussed")}${chip("foryou", "For you")}</div>`;
  infinite(main, list, { why: true });
}

function pageSearch(params) {
  setNav("");
  const q = params.get("q") || "";
  $("#q").value = q;
  const list = search(q);
  main.innerHTML = `<div class="bar"><h1>${list.length ? `${list.length} results` : "No results"} for “${esc(q)}”</h1></div><p class="sub"></p>`;
  if (!list.length) { main.insertAdjacentHTML("beforeend", emptyState("Nothing matched", "Try a broader word, a channel name, or browse <a href='#/explore'>Topics</a>.")); return; }
  infinite(main, list, { why: true });
}

function pageList(kind) {
  setNav(kind);
  const titles = { liked: "Liked videos", later: "Watch later", history: "History" };
  const vids = kind === "history" ? S.history.map((h) => h.v) : (kind === "liked" ? S.likes : S.later).slice().reverse();
  const list = vids.map((v) => BYVID.get(v)).filter(Boolean);
  main.innerHTML = `
    <div class="bar"><h1>${titles[kind]}</h1>
      ${list.length ? `<button class="btn" id="clear">Clear ${kind === "history" ? "history" : "list"}</button>` : ""}</div>
    <p class="sub">${list.length} videos, saved in this browser only.</p>`;
  if (!list.length) {
    main.insertAdjacentHTML("beforeend", emptyState("Nothing here yet",
      kind === "history" ? "Videos you open show up here." : "Use the buttons under a video to add it here."));
    return;
  }
  $("#clear").onclick = () => {
    if (!confirm(`Clear ${titles[kind].toLowerCase()}?`)) return;
    if (kind === "history") S.history = []; else if (kind === "liked") S.likes = []; else S.later = [];
    save(); route();
  };
  infinite(main, list);
}

async function loadComments(vid) {
  const name = shardName(vid);
  if (!shardCache.has(name)) {
    shardCache.set(name, fetch(`data/m/${name}.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({})));
  }
  return (await shardCache.get(name))[vid] || [];
}

const STANCE_LABEL = { strong_rec: "Strong rec", rec: "Recommends", reference: "Cites", joke: "Joke", critical: "Critical" };

function pageVideo(vid) {
  setNav("");
  const v = BYVID.get(vid);
  if (!v) return notFound();
  S.history = [{ v: vid, at: Date.now() }, ...S.history.filter((h) => h.v !== vid)].slice(0, 500);
  save();
  if (observer) observer.disconnect();

  const cats = v.x.map((c) => CATS[c]);
  const next = v.n.map((i) => VIDEOS[i]).filter((x) => x && !S.dislikes.includes(x.v));
  if (next.length < 10) {
    const extra = VIDEOS.filter((x) => x !== v && x.x[0] === v.x[0] && visible(x) && !next.includes(x)).slice(0, 10 - next.length);
    next.push(...extra);
  }
  document.title = `${v.t} · HN.tv`;
  const id = esc(vid);
  main.innerHTML = `
    <div class="watch">
      <div>
        <div class="player"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
          title="${esc(v.t)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
        <h1>${esc(v.t)}</h1>
        <div class="actions">
          <div class="who"><b>${esc(v.c)}</b> · ${esc(typeName(v))}</div>
          <div class="row">
            <button class="btn" data-act="like"></button>
            <button class="btn" data-act="dislike"></button>
            <button class="btn" data-act="later"></button>
            <a class="btn" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">YouTube ↗</a>
          </div>
        </div>
        <div class="panel">
          <p class="stats">${v.r ? `${v.r} HN commenters recommended it${v.sr ? ` (${v.sr} enthusiastically)` : ""}` : "Cited on HN"} · discussed ${years(v)}</p>
          <p>${esc(v.s)}</p>
          <p><b>Why HN points to it:</b> ${esc(v.w)}</p>
          ${v.q ? `<blockquote>“${esc(v.q[0])}”<cite>HN commenter, ${esc(v.q[1])}</cite></blockquote>` : ""}
          <div class="tags">${cats.map((c) => `<a class="chip" href="#/c/${esc(c.id)}">${esc(c.name)}</a>`).join("")}</div>
          <div class="tags">${v.g.map((t) => `<a class="tag" href="#/search?q=${encodeURIComponent(t)}">#${esc(t.replace(/\s+/g, ""))}</a>`).join("")}</div>
        </div>
        <section class="comments" id="comments"><h2>What HN said</h2><div class="spinner"></div></section>
      </div>
      <aside class="upnext">
        <h2>Up next</h2>
        ${next.slice(0, 14).map(mini).join("")}
      </aside>
    </div>`;

  const paint = () => {
    const btn = (act, on, label, onLabel) => {
      const b = $(`[data-act="${act}"]`);
      b.classList.toggle("on", on);
      b.textContent = on ? onLabel : label;
    };
    btn("like", has(S.likes, vid), "👍 Like", "👍 Liked");
    btn("dislike", has(S.dislikes, vid), "👎 Not for me", "👎 Hidden");
    btn("later", has(S.later, vid), "＋ Watch later", "✓ Saved");
  };
  main.querySelectorAll("[data-act]").forEach((b) => {
    b.onclick = () => {
      const act = b.dataset.act;
      if (act === "like") { if (toggle(S.likes, vid)) S.dislikes = S.dislikes.filter((x) => x !== vid); }
      if (act === "dislike") { if (toggle(S.dislikes, vid)) S.likes = S.likes.filter((x) => x !== vid); }
      if (act === "later") toast(toggle(S.later, vid) ? "Saved to Watch later" : "Removed from Watch later");
      save(); paint();
    };
  });
  paint();

  loadComments(vid).then((rows) => {
    const box = $("#comments");
    if (!box || location.hash !== `#/v/${vid}`) return;
    box.innerHTML = `<h2>What HN said <span class="sub">(${rows.length})</span></h2>` + (rows.length ? rows.map(([cid, author, month, stance, text, story]) => `
      <div class="comment">
        <div class="avatar" style="background:hsl(${hue(author)} 55% 45%)">${esc(author[0] || "?")}</div>
        <div>
          <div class="head"><b>${esc(author)}</b><span>${esc(month)}</span><span class="stance ${esc(stance)}">${STANCE_LABEL[stance] || esc(stance)}</span>
            <a class="hnlink" href="https://news.ycombinator.com/item?id=${Number(cid)}" target="_blank" rel="noopener">on HN ↗</a></div>
          <div class="body">${esc(text).replace(/\[VIDEO\]/g, "<i>[this video]</i>").replace(/\[LINK\]/g, "<i>[link]</i>")}</div>
          ${story ? `<div class="story">in “${esc(story)}”</div>` : ""}
        </div>
      </div>`).join("") : `<p class="sub">No comments in the export for this one.</p>`);
  });
}

function pageSettings() {
  setNav("settings");
  const sw = (key, title, desc) => `
    <div class="setting"><div><b>${title}</b><p>${desc}</p></div>
      <label class="switch"><input type="checkbox" data-set="${key}" ${S.settings[key] ? "checked" : ""}><span></span></label></div>`;
  main.innerHTML = `
    <div class="prose">
      <div class="bar"><h1>Settings</h1></div>
      <p class="sub">Everything is stored in this browser. Nothing is sent anywhere.</p>
      ${sw("hideNews", "Hide news clips", "Videos that only mattered around one event (about 400).")}
      ${sw("hideCited", "Hide videos that were only cited", "About a quarter of videos were linked on HN but never actually recommended.")}
      <div class="setting"><div><b>Your data</b><p>${S.likes.length} liked · ${S.later.length} saved · ${S.history.length} watched · ${S.dislikes.length} hidden</p></div>
        <div class="row" style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn" id="export">Export</button>
          <label class="btn" style="cursor:pointer">Import<input type="file" id="import" accept="application/json" hidden></label>
          <button class="btn" id="reset">Reset all</button>
        </div></div>
    </div>`;
  main.querySelectorAll("[data-set]").forEach((i) => { i.onchange = () => { S.settings[i.dataset.set] = i.checked; save(); }; });
  $("#export").onclick = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], { type: "application/json" }));
    a.download = "hntv-state.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  $("#import").onchange = async (e) => {
    try {
      const d = JSON.parse(await e.target.files[0].text());
      for (const k of ["likes", "dislikes", "later", "history"]) if (Array.isArray(d[k])) S[k] = d[k].filter((x) => BYVID.has(typeof x === "string" ? x : x && x.v));
      if (d.settings) S.settings = { ...DEFAULT_SETTINGS, ...d.settings };
      save(); toast("Imported"); route();
    } catch { toast("That file didn't look right"); }
  };
  $("#reset").onclick = () => {
    if (!confirm("Forget all likes, saved videos, history and settings?")) return;
    Object.assign(S, { likes: [], dislikes: [], later: [], history: [], settings: { ...DEFAULT_SETTINGS } });
    save(); route();
  };
}

function pageAbout() {
  setNav("about");
  const recs = VIDEOS.filter((v) => v.r > 0).length;
  main.innerHTML = `
    <div class="prose">
      <div class="bar"><h1>About</h1></div>
      <p>HN.tv is a YouTube front end without YouTube's recommendations. It only shows
        <b>${VIDEOS.length.toLocaleString()}</b> videos that Hacker News commenters linked, over and over, between 2007 and 2026
        (${recs.toLocaleString()} of them were actively recommended).</p>
      <ul>
        <li><b>No login.</b> Likes, watch later and history stay in your browser's local storage. Export them from Settings.</li>
        <li><b>The ranking</b> is mostly how many separate months HN recommended a video, nudged toward topics and neighbours of what you like,
          with some randomness so the feed doesn't go stale. Use Shuffle for a fresh order.</li>
        <li><b>Thumbnails</b> are an automatic frame from the middle of each video, not the uploader's click-optimised image.</li>
        <li><b>Up next</b> shows videos recommended by the same HN people, then videos with similar content.</li>
      </ul>
      <h2>Credits</h2>
      <p>The data comes from <a href="https://hackertube.org" target="_blank" rel="noopener">HackerTube</a> by Andrej Karpathy
        (<a href="https://hackertube.org/data" target="_blank" rel="noopener">data export</a>), built on the
        <a href="https://huggingface.co/datasets/open-index/hacker-news" target="_blank" rel="noopener">open-index/hacker-news</a> archive,
        and is used under the <a href="https://opendatacommons.org/licenses/by/1-0/" target="_blank" rel="noopener">ODC-By 1.0</a> license.
        Hacker News data is provided by Y Combinator; comments belong to their authors; videos, titles and channel names belong to their creators.
        Labels and summaries were written by an LLM, so a few will be off.</p>
      <p>Not affiliated with YouTube, Google, Hacker News or Y Combinator. Videos play through YouTube's privacy-enhanced embed (youtube-nocookie.com).</p>
    </div>`;
}

function notFound() {
  setNav("");
  main.innerHTML = emptyState("Not found", "That page or video isn't here. <a href='#/'>Go home</a>.");
}

// ---------- router ----------
function route() {
  const [path, qs] = (location.hash.slice(1) || "/").split("?");
  const params = new URLSearchParams(qs || "");
  const parts = path.split("/").filter(Boolean);
  document.title = "HN.tv";
  document.body.classList.remove("drawer");
  if (parts[0] !== "search") $("#q").value = "";
  window.scrollTo(0, 0);
  switch (parts[0]) {
    case undefined: return pageFeed(params, false);
    case "deep": return pageFeed(params, true);
    case "explore": return pageExplore();
    case "c": return pageCategory(decodeURIComponent(parts[1] || ""), params);
    case "search": return pageSearch(params);
    case "v": return pageVideo(parts[1] || "");
    case "liked": case "later": case "history": return pageList(parts[0]);
    case "settings": return pageSettings();
    case "about": return pageAbout();
    default: return notFound();
  }
}

// ---------- chrome ----------
$("#searchForm").onsubmit = (e) => {
  e.preventDefault();
  const q = $("#q").value.trim();
  if (q) location.hash = `#/search?q=${encodeURIComponent(q)}`;
};
$("#menuBtn").onclick = () => {
  if (matchMedia("(max-width: 860px)").matches) document.body.classList.toggle("drawer");
  else {
    document.body.classList.toggle("collapsed");
    try { localStorage.setItem("hntv-collapsed", document.body.classList.contains("collapsed") ? "1" : ""); } catch {}
  }
};
$("#scrim").onclick = () => document.body.classList.remove("drawer");
$("#themeBtn").onclick = () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("hntv-theme", root.dataset.theme); } catch {}
};
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); $("#q").focus(); }
});
try { if (localStorage.getItem("hntv-collapsed")) document.body.classList.add("collapsed"); } catch {}

// ---------- boot ----------
Promise.all([fetch("data/videos.json").then((r) => r.json()), fetch("data/taxonomy.json").then((r) => r.json())])
  .then(([db, tax]) => {
    TYPES = db.types;
    VIDEOS = db.videos;
    VIDEOS.forEach((v, i) => { v.i = i; BYVID.set(v.v, v); });
    AREAS = tax.areas;
    for (const a of AREAS) for (const c of a.cats) CATS[c.i] = { ...c, area: a.id, areaName: a.name };
    window.addEventListener("hashchange", route);
    route();
  })
  .catch((err) => {
    main.innerHTML = emptyState("Couldn't load the catalogue", esc(err.message));
  });
