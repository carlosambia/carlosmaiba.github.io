#!/usr/bin/env python3
"""Turn the HackerTube data export into small static files for this site.

Usage:
    curl -LO https://hackertube.org/download/hackertube-data.zip && unzip hackertube-data.zip
    python3 scripts/build_data.py path/to/hackertube-data

Writes:
    data/videos.json     every video, compact, with up to 12 "up next" neighbours
    data/taxonomy.json   areas and categories
    data/m/<c>.json      HN comments, sharded by the first character of the video id

Needs numpy (for the embedding neighbours). Data: ODC-By 1.0, credit HackerTube
(https://hackertube.org) and open-index/hacker-news.
"""
import json
import os
import shutil
import sys

import numpy as np

SRC = sys.argv[1] if len(sys.argv) > 1 else "hackertube-data"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
NEIGHBOURS = 12
MENTIONS_PER_VIDEO = 8
MENTION_CHARS = 700
STANCE_ORDER = {"strong_rec": 0, "rec": 1, "reference": 2, "critical": 3, "joke": 4}
TYPE_CODES = ["talk", "explainer", "demo", "comedy", "commentary", "documentary", "interview",
              "lecture", "other", "news", "music", "tutorial", "podcast", "course"]


def jsonl(name):
    with open(os.path.join(SRC, name), encoding="utf-8") as f:
        return [json.loads(line) for line in f if line.strip()]


def dump(path, obj):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, separators=(",", ":"))


videos = jsonl("videos.jsonl")
index = {v["vid"]: i for i, v in enumerate(videos)}

# --- up-next neighbours: shared HN recommenders first, then embedding similarity ---
related = {r["vid"]: [x["vid"] for x in r["related"]] for r in jsonl("related.jsonl")}
emb = np.load(os.path.join(SRC, "embeddings.npy")).astype(np.float32)
ids = json.load(open(os.path.join(SRC, "embedding_ids.json")))
order = np.array([index[v] for v in ids])
mat = np.zeros_like(emb)
mat[order] = emb  # row i now belongs to videos[i]
sims = mat @ mat.T
np.fill_diagonal(sims, -1)
top = np.argsort(-sims, axis=1)[:, : NEIGHBOURS * 2]


def norm_title(t):
    return "".join(ch for ch in t.lower() if ch.isalnum())


titles = [norm_title(v["title"]) for v in videos]
neighbours = []
for i, v in enumerate(videos):
    # interleave: content similarity first, then videos recommended by the same HN people
    sim = [int(j) for j in top[i] if titles[int(j)] != titles[i]]
    co = [index[x] for x in related.get(v["vid"], [])[:8] if x in index]
    out = []
    for pair in zip(sim, co + [None] * len(sim)):
        for j in pair:
            if j is not None and j not in out and j != i:
                out.append(j)
    neighbours.append(out[:NEIGHBOURS])

# --- taxonomy ---
tax = json.load(open(os.path.join(SRC, "taxonomy.json")))
cat_ids = [c["id"] for a in tax["areas"] for c in a["categories"]]
cat_index = {c: i for i, c in enumerate(cat_ids)}
taxonomy = {
    "areas": [
        {"id": a["id"], "name": a["name"],
         "cats": [{"i": cat_index[c["id"]], "id": c["id"], "name": c["name"],
                   "desc": c.get("description", "")} for c in a["categories"]]}
        for a in tax["areas"]
    ]
}

# --- videos ---
compact = []
for i, v in enumerate(videos):
    hn = v["hn"]
    q = v.get("quote") or {}
    compact.append({
        "v": v["vid"],
        "t": v["title"],
        "c": v["channel"],
        "s": v["summary"],
        "w": v["why_hn"],
        "k": TYPE_CODES.index(v["content_type"]) if v["content_type"] in TYPE_CODES else 8,
        "l": v["shelf_life"][0],  # e / d / n
        "p": v["primary_topic"],
        "g": v["tags"][:6],
        "x": [cat_index[c["id"]] for c in v["categories"] if c["id"] in cat_index],
        "q": [q["text"], q["year"]] if q.get("text") else None,
        "r": hn["recommenders"],
        "sr": hn["strong_recs"],
        "y": [hn["first_year"], hn["last_year"]],
        "sc": v["score"],
        "n": neighbours[i],
    })

os.makedirs(OUT, exist_ok=True)
dump(os.path.join(OUT, "videos.json"), {"types": TYPE_CODES, "videos": compact})
dump(os.path.join(OUT, "taxonomy.json"), taxonomy)

# --- HN comments, sharded ---
by_vid = {}
for m in jsonl("mentions.jsonl"):
    by_vid.setdefault(m["vid"], []).append(m)
shards = {}
for vid, ms in by_vid.items():
    ms.sort(key=lambda m: (STANCE_ORDER.get(m["stance"], 9), m["month"]))
    rows = []
    for m in ms[:MENTIONS_PER_VIDEO]:
        text = m["text"]
        if len(text) > MENTION_CHARS:
            text = text[:MENTION_CHARS].rsplit(" ", 1)[0] + "…"
        rows.append([m["hn_comment_id"], m["author"], m["month"], m["stance"], text, m["story_title"]])
    shards.setdefault(vid[0], {})[vid] = rows

mdir = os.path.join(OUT, "m")
shutil.rmtree(mdir, ignore_errors=True)
os.makedirs(mdir)
for ch, obj in shards.items():
    # first char of a YouTube id is [A-Za-z0-9_-]; keep file names case-safe
    name = ("u" + ch.lower()) if ch.isupper() else ch
    dump(os.path.join(mdir, name + ".json"), obj)

print(f"{len(compact)} videos, {len(cat_ids)} categories, {len(shards)} comment shards -> {os.path.abspath(OUT)}")
