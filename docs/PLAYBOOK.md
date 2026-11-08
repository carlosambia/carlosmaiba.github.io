# Ad Studio Playbook: ads & animated scenes with Claude Code

**Prompts produce pixels. Specs produce systems.**
This studio treats every ad as a *versioned design document* (JSON) rendered by code (Remotion),
with Claude Code doing the research, strategy, copy, assembly and QA, and AI generators
(Higgsfield, Magnific) supplying **layers**, not finished videos.

---

## 1. Why not "animate a starting frame with a prompt"?

| Image-to-video prompting | This studio |
|---|---|
| Every change = regenerate and hope | Change one JSON field, re-render, deterministic |
| Text garbles, phone numbers mutate | Type is real type in the brand font |
| One aspect ratio | One spec → 9:16, 4:5, 1:1, 16:9, each re-composed |
| Brand drifts shot to shot | Brand tokens (colours, fonts, radius, motion) enforced in code |
| No variants without re-prompting | Hook A/B = a 10-line `extends` patch |
| Can't review, diff or roll back | Git history, PR reviews, QA contact sheets |
| You pay per attempt | You pay once per *asset* (a plate, a cutout, a music bed) |

AI generation is still used, for what it is great at: background plates, b-roll clips,
cutouts/segmentation, upscaling, music, voiceover, SFX. Each comes back as a layer under
brand-controlled typography and layout.

---

## 2. The pipeline

```
 ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌────────┐
 │1 RESEARCH│ → │2 CONCEPTS│ → │ 3 SPEC   │ → │ 4 ASSETS │ → │ 5 QA LOOP│ → │6 RENDER  │ → │7 LEARN │
 │brand.json│   │ brief.md │   │ ads/*.json│  │ layers   │   │ stills + │   │ matrix + │   │results │
 │research.md   │ hook bank│   │ variants │   │ manifest │   │ rubric   │   │ web/embed│   │  .md   │
 └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └────────┘
   subagents      human ✔         hook auto-      credits ✔     Claude looks     background     feeds next
   in parallel    checkpoint      validates       checkpoint    at every frame   renders        round
```

Run everything with **`/ad-pipeline <client-url> <goal>`**, or stage by stage:

| Stage | Skill | Output | Human checkpoint |
|---|---|---|---|
| 1 | `/ad-research <url>` | `brand.json`, `research.md` (claims ledger, voice of customer, angles), `assets.manifest.json` | Approve claims ledger |
| 2 | `/ad-concepts` | `brief.md`: objective, audience, 3 angles, 10+ scored hooks, formula choice | Pick angle + hooks |
| 3 | `/ad-spec` | `ads/<id>.json` + `extends` variants | Read the script table |
| 4 | `/ad-assets` | Filled asset gaps (client → stock → AI), audio | Approve any paid generation |
| 5 | `/ad-qa` | Contact sheets per format + rubric score, fixes applied | Review in Studio |
| 6 | `/ad-render` | MP4 matrix, web copies, posters, delivery notes | Sign-off |
| 7 | (manual) | `results.md`: which hook/format won → next brief | — |

Special path: **`/poster-to-motion`** turns a flat poster or key visual into a layered,
editable `layers` scene (see the City Rock y Ramen example).

---

## 3. Repo map

```
CLAUDE.md                 ← operating manual Claude reads every session
.claude/
  skills/                 ← /ad-pipeline, /ad-research, /ad-concepts, /ad-spec, /ad-assets, /ad-qa, /ad-render, /poster-to-motion
  agents/                 ← brand-researcher, audience-researcher, copy-chief, creative-director
  settings.json           ← permissions + PostToolUse hook that validates specs on every edit
docs/                     ← this playbook, formulas.md, platform-specs.md
campaigns/
  _shared/fonts/          ← self-hosted brand fonts (OFL)
  <client>/
    brand.json            ← tokens: colours, fonts, logo, contact, style
    research.md           ← findings + CLAIMS LEDGER (every on-screen claim → source)
    brief.md              ← strategy, angles, hook bank
    assets.manifest.json  ← where every asset came from + licence (raw files git-ignored)
    ads/*.json            ← THE SPECS (one file per ad / variant)
studio/                   ← Remotion project (the renderer)
  src/schema.ts           ← the contract: Brand + AdSpec + scene types
  src/scenes/             ← hook, listicle, hero, stats, testimonial, offer, statement, cta, layers
  src/components/         ← headline engine, background, chips, buttons, cutouts, captions…
  scripts/                ← sync, assets, render, stills (QA), luma-key
out/                      ← renders + QA sheets (git-ignored)
```

---

## 4. Daily commands

```bash
cd studio
npm install                 # once
npm run assets              # pull client assets listed in manifests
npm run sync                # register + validate all specs (the hook also does this on edit)
npm run dev                 # Remotion Studio: live preview, scrub, edit props in the side panel
npm run stills -- <ad-id>   # QA contact sheets (safe zones in red) → out/<client>/qa/
npm run render -- <ad-id|client|all> [--formats 9x16,16x9] [--web]
```

---

## 5. How to talk to Claude in this repo

Good prompts are about **intent and constraints**. The system handles the pixels.

* "Research alphalinkelectrical.com.au and set up the campaign." → `/ad-research`
* "Give me 12 hooks for switchboard upgrades for older-home owners, score them." → `/ad-concepts`
* "Make a 15s PAS version for EV charger installs, 9:16 and 4:5." → `/ad-spec` (formula F1)
* "Hook B is winning. Make 3 more variants of it, same body." → `extends` patches
* "The client changed their number to …" → one edit in `brand.json`, re-render everything
* "Make it calmer and more premium." → `brand.json` `style.energy: "calm"`, highlight `color`
* "Turn this poster into a 10s Reel, and make the date editable." → `/poster-to-motion`

### Edit cheat-sheet

| Change | Where |
|---|---|
| Words, order, timing of scenes | `campaigns/<c>/ads/<id>.json` |
| Colours, fonts, logo, phone, URL | `campaigns/<c>/brand.json` (every ad updates) |
| Hook-only A/B | new file with `"extends": "<id>", "patch": {"scenes": {"0": {...}}}` |
| A new scene layout / animation style | `studio/src/scenes/*` or `components/*` (applies to all clients) |
| Safe zones, formats | `studio/src/formats.ts` |

---

## 6. Getting the most out of Claude Code (Max 20x)

1. **Fan out research.** `/ad-research` runs `brand-researcher` and `audience-researcher`
   subagents in parallel (site + reviews + competitors + search demand). You keep the
   conclusions, not the page dumps.
2. **Generate wide, select hard.** `copy-chief` writes 10-20 hooks. `creative-director` scores them
   against the rubric. Only the top 2-3 become specs.
3. **Variants are cheap.** A hook test = tiny patch files. For big matrices
   (5 hooks × 3 formats × 2 offers), ask for it with "use a workflow": Claude Code can orchestrate
   many agents deterministically.
4. **Let Claude see its own work.** `npm run stills` produces one contact sheet per format with
   safe zones drawn. Claude reads the image, fixes overlaps and legibility, and re-checks. That
   loop is what turned the first AlphaLink draft into the final one.
5. **Guardrails run automatically.** The PostToolUse hook validates every spec edit and reports
   schema errors back to Claude immediately.
6. **Render in the background** while Claude writes the next variant or the delivery notes.
7. **Paid generation is always quoted first.** Higgsfield/Magnific tools cost credits; the
   skills require a cost estimate and your OK before any generation call.
8. **Use Plan mode for new campaigns** (shift+tab) so you approve the brief before any work.

### Connectors this workspace already has

| Connector | Use in this pipeline |
|---|---|
| **Higgsfield** | AI b-roll / plates (`generate_video`, `generate_image`), `remove_background`, `upscale_*`, `virality_predictor` as an extra QA signal on finished MP4s |
| **Magnific** | `design_auto_layers` (flat poster → layers), `images_segment` (SAM masks), `images_remove_background`, `images_upscale`, `audio_music_generate`, `audio_tts`, `audio_sfx_generate`, `brand_kit_scrape_url` |
| **Figma** | Pull design tokens / key visuals from a client file; push storyboards back |
| **Ahrefs** | Search demand + wording ("switchboard upgrade melbourne") to pick angles that match intent |
| **Google Drive / Slides** | Deliver renders and the brief to clients |

---

## 7. Licensing & compliance notes

* **Remotion** is free for individuals and companies with up to 3 people. Larger for-profit
  teams need a Company License (remotion.pro). Check before agency-scale use.
* **Fonts** in `campaigns/_shared/fonts` are SIL OFL. Client-licensed fonts go in the client's
  `assets/fonts/` (git-ignored).
* **Client assets** are listed in `assets.manifest.json` with source + licence. Raw files are
  git-ignored so they never land in a public repo.
* **Reviews** are quoted verbatim (trimmed with "…") and attributed. Never invent or edit meaning.
* **Third-party IP** (e.g. anime characters on an event poster) is the promoter's responsibility.
  Don't generate new imagery of trademarked characters. Animate the supplied artwork only.
