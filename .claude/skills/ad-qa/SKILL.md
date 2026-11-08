---
name: ad-qa
description: Visual QA loop for ad renders - render contact sheets of key frames with safe zones drawn, read them, score against the rubric in docs/formulas.md, fix specs/scenes, and repeat until every format passes. Use after any spec or scene change and before declaring an ad done.
argument-hint: <ad-id> [formats]
---

# Stage 5: QA loop

1. In `studio/`: `npm run stills -- <ad-id>` (all formats in the spec). For timing-heavy pieces
   add `--at` with explicit seconds (e.g. `--at 0.4,1.2,2.5,4,7`).
2. Read each `out/<client>/qa/<ad-id>-<format>-sheet.png`. Frame 1 = what a scroller sees at 0.6 s;
   the rest = each scene once settled. The red box is the safe zone.
3. Check, per frame: clipping/overflow · overlaps (logo bug vs copy, graphic vs text) · text outside
   red box · contrast/legibility at phone size · hierarchy (one focal point) · brand consistency ·
   copy matches claims ledger.
4. For a second opinion, give the sheet paths to the **creative-director** subagent (it scores the
   rubric without seeing your reasoning).
5. Fix at the right level:
   - copy too long / bad line breaks → spec JSON
   - one format composes badly → scene layout branch for that orientation in `studio/src/scenes/*`
   - systemic (all clients) → component, then `npm run typecheck`
6. Re-run stills for affected formats only (`--formats`). Repeat until ≥ 40/50, no hard fails.
7. Optional for finished MP4s: Higgsfield `virality_predictor` (needs upload; costs credits, so ask first).
8. Report: score table per format + what you changed.
