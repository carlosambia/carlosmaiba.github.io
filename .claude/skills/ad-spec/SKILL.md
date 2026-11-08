---
name: ad-spec
description: Write or edit ad spec JSON files (campaigns/<slug>/ads/*.json) from a brief and formula - scenes, copy, timing, transitions, formats, and hook variants via extends/patch. Use for any "make a 15s version", "change the hook", "new variant", "shorter cut" request.
argument-hint: [campaign-slug] [formula / angle / change request]
---

# Stage 3: spec

Source of truth for fields: `studio/src/schema.ts`. Look at an existing spec
(e.g. `campaigns/alphalink-electrical/ads/switchboard-3-signs.json`) before writing a new one.

## Rules
* Follow the timing table of the chosen formula in `docs/formulas.md`. Set `formula`, `objective`,
  `audience`, `landingPage`.
* Copy limits: hook ≤ 7 words; scene headline ≤ 8 words; chips ≤ 5 words; button = landing page's CTA label.
* Use `*highlight*` on the 1-2 words that carry the meaning; choose `\n` breaks deliberately (poster-style
  stacks read faster: short line, long line, highlight line).
* Each claim must be in the claims ledger. Put the source reasoning in the scene `note`.
* Transitions: `flash` for energy beats (after hook, before CTA), `slide` between information beats.
* `caption` on every scene (sound-off + accessibility). Set `captions: true` if there's no VO.
* Formats: Reels/TikTok → `9x16`; feed → `4x5`; YouTube/landing → `16x9`.
* Variants: create `<id>-hook-b.json` with `"extends": "<id>"` and a `patch` touching only scene 0.
  This isolates the variable being tested.

## After writing
1. The PostToolUse hook validates automatically. Fix any reported errors.
2. Run `npm run stills -- <id>` in `studio/` and Read the sheets → hand off to `/ad-qa`.
3. Show the user a script table: time | scene | copy | claim source.
