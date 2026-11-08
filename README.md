# Ad Studio

**Spec-driven ads and animated scenes, built with Claude Code + Remotion.**
Every ad is a JSON spec rendered by code: editable, versioned, multi-format and on-brand.
AI generators supply *layers* (plates, b-roll, cutouts, music, voice), never the whole frame.

```
research → concepts → spec (JSON) → assets (layers) → visual QA loop → render matrix → learn
```

* **Playbook:** [`docs/PLAYBOOK.md`](docs/PLAYBOOK.md): the full workflow and how to drive it with Claude Code
* **Formulas:** [`docs/formulas.md`](docs/formulas.md): rules, hook bank, timing tables, QA rubric
* **Specs:** [`docs/platform-specs.md`](docs/platform-specs.md): formats, safe zones, delivery, embed
* **Operating manual for Claude:** [`CLAUDE.md`](CLAUDE.md)
* **Research (Nov 2026):** [`reports/Generative image and video tools 2026.md`](reports/Generative%20image%20and%20video%20tools%202026.md): models, platforms and pricing (Higgsfield vs alternatives), licensing in Australia, non-AI-look craft, workflows

## Quick start

```bash
cd studio
npm install            # Node >= 22.18
npm run assets         # fetch client assets listed in campaigns/*/assets.manifest.json
npm run sync           # register + validate specs
npm run dev            # Remotion Studio preview
npm run stills -- switchboard-3-signs          # QA contact sheets → out/
npm run render -- alphalink-electrical --web   # MP4s + web copies + posters → out/
```

In Claude Code: `/ad-pipeline https://example.com "leads for <service>"`, or any single stage:
`/ad-research`, `/ad-concepts`, `/ad-spec`, `/ad-assets`, `/ad-qa`, `/ad-render`, `/poster-to-motion`.

## Examples
* `campaigns/alphalink-switchboard-landing`: **separate project** for the 2026 landing redesign: teardown, 2026 design tokens, asset audit, workflow options (no ads yet).
* `campaigns/alphalink-electrical`: research + claims ledger, brief + scored hook bank, a 20 s
  listicle ad in 9:16 / 4:5 / 16:9, a Hook-B variant (10-line patch), and a 6 s bumper.
* `campaigns/city-rock-y-ramen`: a flat event poster rebuilt as a layered "city lights up" Reel
  with live, editable date text.

Remotion is free for individuals and teams of up to 3; larger companies need a license (remotion.pro).
