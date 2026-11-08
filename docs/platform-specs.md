# Platform specs & delivery

> Platform specs change. These are working defaults. Verify in the ad platform's own spec
> pages before a big launch (Claude can re-check them during `/ad-research`).

## Formats the studio renders

| Format id | Pixels | Use | Safe-zone profile |
|---|---|---|---|
| `9x16` | 1080×1920 | Reels, Stories, TikTok, Shorts, mobile landing hero | `reels` (default), `stories`, `tiktok`, `none` |
| `4x5` | 1080×1350 | Meta & LinkedIn feed | 64/72 px margins |
| `1x1` | 1080×1080 | Feed fallback, Google Display, marketplace | 64/72 px margins |
| `16x9` | 1920×1080 | YouTube in-stream, website/landing embed | 80-110 px margins |

One spec renders every format. Scenes re-compose per orientation; nothing is cropped.

## Safe zones (9:16)

| Profile | Top | Bottom | Sides | Source |
|---|---|---|---|---|
| `reels` | 14% (269 px) | 35% (672 px) | 6% (65 px) | Meta Reels ads guidance (widely republished) |
| `stories` | 14% | 20% | 6% | Commonly cited. Meta may have unified this with Reels; verify |
| `tiktok` | 160 px | 480 px | 64 px left / 150 px right | Approximate; verify in TikTok Ads Manager |

QA sheets (`npm run stills`) draw the active safe zone in red. **Text, logos and buttons stay
inside; imagery can bleed.**

## Duration guidance

| Placement | Sweet spot | Notes |
|---|---|---|
| Reels / TikTok / Shorts | 9-20 s | Hook in first 1-3 s. Loopable endings help |
| Stories | 5-15 s | One idea |
| Meta feed | 10-20 s | 4:5 beats 1:1 for screen share |
| YouTube bumper | 6 s | Non-skippable, ≤ 12 words |
| YouTube in-stream | 15-30 s | Brand before the 5 s skip |
| Landing hero loop | 8-12 s | Muted, no CTA button, ≤ 3 MB |

## Files

* Master: H.264, yuv420p, CRF 18, 30 fps, AAC audio (`npm run render`).
* Web copy (`--web`): H.264 CRF 26, `+faststart`, no audio, plus a poster JPG.
* Naming: `<ad-id>-<format>.mp4`, e.g. `switchboard-3-signs-9x16.mp4`. Variants carry their own id
  (`switchboard-3-signs-hook-b-9x16.mp4`), so results map back to a spec file.

## Landing-page embed (muted autoplay hero)

```html
<video
  autoplay muted loop playsinline preload="metadata"
  poster="/media/switchboard-3-signs-16x9-poster.jpg"
  style="width:100%;height:auto;border-radius:16px">
  <source src="/media/switchboard-3-signs-16x9-web.mp4" type="video/mp4">
</video>
```

Use the `9x16` web file inside a `<source media="(max-width: 640px)">` for mobile.
To embed an interactive, data-driven player instead of an MP4, use `@remotion/player`
with the same `Ad` component and spec.
