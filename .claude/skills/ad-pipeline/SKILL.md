---
name: ad-pipeline
description: End-to-end ad / promo video production for a client - research, concepts, JSON spec, assets, visual QA and renders - with human checkpoints. Use when the user asks to "make an ad / promo video / reel / landing page video" for a business or URL.
argument-hint: <client url or campaign slug> <goal, e.g. "leads for switchboard upgrades">
---

# Ad pipeline (orchestrator)

Run the stages in order. Stop at each ✔ checkpoint and show the user a compact summary
(tables, not walls of text) before continuing, unless they said "run it all".

1. **Research**: invoke `/ad-research` with the URL. Spawn `brand-researcher` and
   `audience-researcher` subagents **in parallel** (one message, two Agent calls).
   ✔ Show: brand tokens, top 5 customer pains (verbatim), claims ledger. Ask the user to confirm the claims.
2. **Concepts**: invoke `/ad-concepts`. ✔ Show 3 angles + the top 6 scored hooks; user picks.
3. **Spec**: invoke `/ad-spec` with the chosen formula/angle. Write the main spec + 1-2 hook
   variants via `extends`. ✔ Show a script table: time | scene | on-screen copy | source of claim.
4. **Assets**: invoke `/ad-assets`. List gaps. ✔ Quote any paid generation before running it.
5. **QA loop**: invoke `/ad-qa`. Iterate until rubric ≥ 40/50 with no hard fails in every format.
6. **Render**: invoke `/ad-render` (background). Deliver paths, durations, and the landing-page embed snippet.
7. Offer to start `campaigns/<slug>/results.md` to log performance for the next round.

Scale tips: for large variant matrices or multiple services at once, suggest a Workflow
("use a workflow") and give the user a cost/agent estimate first.
