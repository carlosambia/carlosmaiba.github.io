# Ad Studio: operating manual for Claude

This repo produces ads and animated scenes as **JSON specs rendered by code** (Remotion in
`studio/`). You research, strategise, write copy, assemble specs, generate *layers* when needed,
and QA your own renders. Full human guide: `docs/PLAYBOOK.md`. Formulas + rubric: `docs/formulas.md`.

## Golden rules
1. **Edit specs, not pixels.** Copy/timing/order → `campaigns/<client>/ads/*.json`. Brand → `brand.json`.
   Only touch `studio/src` when a capability is missing for *all* clients (new scene type, effect).
2. **Never invent claims.** Every on-screen claim, number, review or guarantee must exist in the
   client's `research.md` claims ledger with a source. Reviews are verbatim (trim with "…").
3. **Message match.** Hook/offer/CTA wording mirrors the spec's `landingPage`.
4. **Follow a formula** from `docs/formulas.md` and record it in the spec's `formula` field.
5. **Look at your work.** After any spec or scene change run `npm run stills -- <ad-id>` (in `studio/`)
   and Read the contact sheet(s). Fix overlaps, clipping, legibility and safe-zone breaks before
   saying something is done. Red box = safe zone; text/logos/buttons must sit inside.
6. **Paid generation needs approval.** Before any Higgsfield/Magnific generation call, state the
   tool, count and estimated credits, and wait for the user's OK. Prefer client assets > stock > AI.
   Never put text inside AI-generated images (type is always live).
7. **Variants via `extends` + `patch`**, never by copy-pasting whole specs.
8. Don't generate imagery of trademarked characters/people you weren't given.

## Pipeline skills (see `.claude/skills/`)
`/ad-pipeline` (all stages) · `/ad-research` · `/ad-concepts` · `/ad-spec` · `/ad-assets` · `/ad-qa` · `/ad-render` · `/poster-to-motion`
Subagents (`.claude/agents/`): `brand-researcher`, `audience-researcher` (run in parallel),
`copy-chief` (hooks/scripts), `creative-director` (rubric scoring of QA sheets).

## Commands (run in `studio/`)
| Command | What |
|---|---|
| `npm install` | once per machine (Node ≥ 22.18) |
| `npm run assets [client]` | download assets from `assets.manifest.json` (raw assets are git-ignored) |
| `npm run sync` | regenerate `src/generated/registry.ts` + validate all specs (auto-run by hook on spec edits) |
| `npm run dev` | Remotion Studio preview |
| `npm run stills -- <ad-id> [--formats 9x16] [--at 0.5,2,4]` | QA contact sheets → `out/<client>/qa/` |
| `npm run render -- <ad-id\|client\|all> [--formats …] [--web]` | MP4s → `out/<client>/` (run in background) |
| `npm run typecheck` | after editing `studio/src` |

Remotion's own skills live in `studio/.claude/skills` (best practices, render, captions…). Load
`remotion-best-practices` before writing new scene/component code.

## Spec cheat-sheet (`studio/src/schema.ts` is the source of truth)
Scene types: `hook`, `listicle`, `hero`, `stats`, `testimonial`, `offer`, `statement`, `cta`, `layers`.
Rich text: `*highlight*` and `\n` line breaks; line breaks are a design decision, so choose them deliberately.
Every scene: `duration` (s), optional `transition` {cut|fade|slide|wipe|flash|zoom}, `caption`, `media`, `note`.
Assets are paths relative to `campaigns/` (the Remotion public dir), e.g. `alphalink-electrical/assets/logo.png`.

## Environment notes
* Fonts are self-hosted via `brand.fonts.files` (renders must not depend on a font CDN).
* If the headless browser can't be downloaded, set `REMOTION_BROWSER_EXECUTABLE` to a local chrome-headless-shell.
