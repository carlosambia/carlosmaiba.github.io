# Workflow options: Alphalink switchboard landing campaign

_Options and usage ideas, not ads (as requested). Based on `research.md` (landing teardown) and
the full report `reports/Generative image and video tools 2026.md` (8 Nov 2026). Prices USD, excl. GST._

## The principle for this client

**Real-first, generate-around.** The 2026 landing page sells *Jimmy + real jobs + 85 real reviews*
on warm paper with hand-drawn marks. Anything that says "this is us / we did this" must be real.
AI only builds the set: backgrounds, plates, cleanup, illustrative explainers, silent b-roll.
All text, prices, phone numbers and reviews are live type in code. Research backs this: disclosed
or obvious AI cuts trust most for *handmade/skilled* work (Patil & Rice 2026), and ACL penalties
reach A$100M for misleading impressions (from 28 Mar 2026).

## Decisions for this week

| Decision | Option A (recommended) | Option B | Option C |
|---|---|---|---|
| Higgsfield "buy until Nov 9" promo | **Don't buy annual for it.** Measure real monthly burn first (`balance`/`transactions` via MCP) | Use an already-active unlimited window for web-only image exploration | Stay on Ultra only if you burn ~3,000 credits/mo on Kling 4.0 / Seedance |
| Main generation seat | **Magnific Plus annual** ($33.75/mo, credits valid 12 months, already connected via MCP with `simulate_cost`) | Magnific Pro annual ($82.50/mo) once heavy video months are routine | Higgsfield Ultra (best only at full monthly use) |
| Bursts & specialist models | Pay-per-use: Gemini API (Nano Banana 2.1 ≈ $0.05/2K image, Omni 1.2 ≈ $0.07/s), Runway API or fal (Kling 4.0, Seedance) | — | — |
| Code renderer | Remotion (free while ≤ 3 staff) | Pilot HyperFrames: the landing page is HTML/CSS, so its components could be reused directly | — |

## What we have vs. what we need

| Landing section | Have (approved) | Gap | How to fill |
|---|---|---|---|
| Hero | Dark switchboard close-up (1600 px) | Full-res original; a 6-8 s silent loop | Original from client; loop cut from the **raw** fit-off clip |
| Problem cards | Ceramic fuses (600 px ⚠), new board, EV charger | Hi-res + motion | Originals or Magnific **Precision** upscale (never "creative"); 3 s Ken-Burns in code |
| Meet Jimmy | Clean cutout (776×1404), brush "A" mark | Jimmy on camera (10-20 s) | **Shoot it** (list below) |
| Alphalink at work | 20 s fit-off (720p, CapCut watermark ⚠), 4 job photos | Raw clip, before/after pair | Ask for the phone original; shoot a matched before/after |
| Reviews | 85 Google reviews | — | Live type + animated brush highlights (code) |
| Local | 15 suburbs | Local texture | Real street photos > generated plates from local references |
| Explainer (new) | — | Old fuse board vs RCD board | Recraft V4.1 SVG ($0.08/vector) or hand-drawn, animated stroke by stroke; electrician checks accuracy |

## The 30-minute phone shoot (highest ROI in this whole plan)

Shoot on Jimmy's phone at 4K 30 fps with exposure locked and the lens wiped. Mostly vertical, plus a few horizontals.
**Send the original files** (AirDrop/Drive), never CapCut exports.

1. **Before/after pair**: old ceramic fuse board, then the new board, same angle, phone on a tripod or wall (5 s each). This becomes a match-cut.
2. **Hands at work, macro**: tester on a fuse, breaker being clipped in, safety-switch test button pressed (3-5 s each).
3. **Board door open → reveal** (slow, 5 s).
4. **Jimmy to camera, 15-20 s**, in his own words, around the landing promise: *old fuse box, tripping, new appliance → "I'll check it, explain the options and quote before the work."* Do 3 takes and keep them loose.
5. **Arrival**: van pulls up / Jimmy walks to a meter box (wide, 5 s).
6. **Explaining to a homeowner** (only with their written consent; backs to camera is fine).
7. **Dusk exterior**: a house's lights coming on (if a real job allows).
8. **Room tone and sound**: 30 s each of the breaker click, panel door, van door, tools, and quiet house ambience.

Plus signed **consent** (face/voice, paid ads, platforms, duration, AI processing) for Jimmy and Tony.

## Motion language options (matched to the 2026 design)

| Option | Look | Built from | Studio work needed |
|---|---|---|---|
| **A. Drawn** (recommended) | Yellow brush strokes *draw themselves*, real photos sit like paper cards with torn edges, handwritten Gochi Hand notes ("That's Jimmy.") write on | Brand-library SVG/PNG strokes, paper/grain textures, real photos | New scene/components: `brushReveal` (SVG path draw-on), `paperCard`, `handNote`, paper background style |
| **B. Documentary** | Raw phone clips, live captions, minimal graphics, real sound | The shoot above | New `clip` scene (trim, speed, captions) |
| **C. Explainer** | Vector cutaway of old vs new board, labelled live | Recraft SVG or hand drawing | `svgAnimate` scene (stroke-by-stroke) |
| **D. Hybrid set** | Real subject composited over AI-generated plates (seasons, weather) | Real cutout + Nano Banana 2.1 plates | Existing `hero` scene + `media` plate |

The current studio's navy "circuit" style belongs to the **old** site. For this project, add a `paper`
background style and switch `brand.json` `style.background` to it when the ad phase starts.

## Tool picks for this project (Nov 2026)

| Job | Pick | Cost guide | Guardrail |
|---|---|---|---|
| Clean/relight real photos | GPT Image 2.5 Sunburst or FLUX 3 pixel-locked edits | ~$0.04-0.05/edit | Owner confirms nothing about the *work* changed |
| Faithful upscale | Magnific Precision / SeedVR2 on fal | $0.06-0.09 / ~$0.01 | Never creative upscalers on faces or labels |
| Generic plates (suburbs, interiors, dusk) | Nano Banana 2.1 with real Melbourne reference photos | ~$0.05/2K ($0.025 batch) | No text in image; no specific addresses |
| Silent b-roll from real stills | Gemini Omni 1.2 (720p) or Kling 3.0 audio-off | ~$0.21-0.45 per 3-5 s insert | No sparks/fire (contradicts calm-expert tone) |
| Hardware close-ups (no faces) | Seedance 2.5 / 2.0 | ~$1.15-2.30 per 5 s | Real-face uploads blocked; reroll-heavy |
| Mattes for layered motion | Runway SAM3 / Higgsfield `remove_background` | credits | Check edges on brush art |
| Voice | Jimmy's real voice (preferred) | — | Clone only with written consent |
| Music | Licensed tier covering paid social (e.g. Epidemic Business) | ~$30/mo | Not Epidemic Creator for ads |

## Never for this client
AI-made staff, customers, completed jobs, before/afters, vans or reviews · text, logos or licence
numbers inside generated pixels · AI watermark removal · fear imagery · uploading Jimmy's face to
tools that train on uploads (Higgsfield non-Enterprise, Runway non-Enterprise).

## Budget guide (this campaign alone)
* **Lean month** (real-first: 30 images, 6 kept clips, 10 upscales): ~$10-25 in usage on top of a $33.75 seat.
* **Launch month** (shoot edit + 15 kept AI inserts + explainer): ~$40-90 usage. Most cost is human editing time, not generation.

## Next steps (in order)
1. Send the client the open questions in `README.md` (originals, raw clip, logo files, consent).
2. Book the 30-minute shoot.
3. Pick a motion language (A-D). I'll then add the needed scene types to the studio and build
   style frames (stills) for approval, still before any ads.
4. Decide the seat (Magnific Plus vs staying on Higgsfield) at your Higgsfield renewal date, not the promo date.
