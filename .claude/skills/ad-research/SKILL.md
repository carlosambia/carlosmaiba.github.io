---
name: ad-research
description: Research a client for advertising - extract brand tokens and assets from their website, mine reviews for voice-of-customer, scan competitors and search demand, and build a claims ledger. Creates campaigns/<slug>/brand.json, research.md and assets.manifest.json.
argument-hint: <website url> [campaign-slug]
---

# Stage 1: research

Goal: everything later stages need, with sources. Nothing creative yet.

## Run in parallel (single message, two Agent calls)
* **brand-researcher**: URL + slug. Returns brand tokens (hex colours by role, fonts, logo files,
  radius/feel), asset URLs (logo, cutouts, team/job photos, badges), contact details, services,
  landing pages (H1 + CTA label + offer per page), and every factual claim on the site with its URL.
* **audience-researcher**: business name + location + main service. Returns customer pains/desires
  in **verbatim** review language (Google reviews on the site, plus public sources), objections,
  competitor positioning (3-5 local competitors: their promise, offer, proof), and search phrases.
  If the Ahrefs connector is available, pull volumes for 10-20 service+location keywords.

## Then write (you, not the subagents)
1. `campaigns/<slug>/brand.json`: valid against `Brand` in `studio/src/schema.ts`. Roles:
   bg (deepest), surface, primary (signature accent), onPrimary, text, muted, accent. Fonts: download
   OFL woff2 files to `campaigns/_shared/fonts/` and list them in `fonts.files`.
2. `campaigns/<slug>/assets.manifest.json`: every asset with `file`, `url`, `role`, `license`.
   Then run `npm run assets <slug>` in `studio/`. Raw assets are git-ignored.
3. `campaigns/<slug>/research.md` with these sections:
   - Snapshot (who, where, what, proof assets)
   - Landing pages table (URL | H1 | primary CTA | offer)
   - Voice of customer (verbatim quotes + what they reveal)
   - Pains → desires → objections
   - Competitor matrix
   - Search demand (if available)
   - **Claims ledger** (claim | exact wording allowed | source URL). The ONLY claims ads may use.
   - Risks (compliance, things not to say)
4. Run `npm run sync` to confirm brand.json validates.
