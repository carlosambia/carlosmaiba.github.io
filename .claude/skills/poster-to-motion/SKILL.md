---
name: poster-to-motion
description: Turn a flat poster, flyer or key visual into a layered, editable motion piece (Reel/Story/feed) using the `layers` scene type - talent/title/info as separate layers with light-up, parallax and live re-typeset text. Use when the user supplies a poster image and wants it animated, or wants event promo videos.
argument-hint: <path to poster image> [event / campaign slug]
---

# Poster → motion (layered, not prompted)

The point: every element stays addressable. Dates, venues, prices and urgency stickers are
**live text** you can change and re-render in seconds.

## 1. Get layers (best → fallback)
1. Ask for the designer's **PSD / Figma / AI** file and export layers as PNGs with their x/y.
2. **Magnific `design_auto_layers`** on the flat image (quote credits first) → layer PNGs.
3. **SAM masks** via Magnific `images_segment` for specific objects (title, people, props).
4. **Free fallback (no credits)**:
   - rectangular elements (framed panels, info boxes, footers) → `crop` layers with `feather`
   - glowing/neon type → `python3 studio/scripts/luma-key.py poster.jpg title-key.png x y w h`
   - a dark copy of the poster (`brightness: 0.28`) as the "lights off" base

## 2. Map coordinates
Draw a 100 px grid over the poster (PIL) and Read it to measure element boxes in artwork pixels.
`canvas` = the poster's pixel size. Layer x/y/w/h are in that space.

## 3. Choreograph (formula F7 in docs/formulas.md)
Base dark → talent panels `light-up` (0.4 s apart) → title `light-up` + `flicker` loop → full
artwork `light-up` → info box `rise` → live date `pop` → urgency sticker `pop` + `pulse`.
Depth: background 0.1, panels 0.6, title 0.9, stickers 1.0 (drives parallax with `camera: push-in`).

## 4. Live text over original type
Cover the original text with a `text` layer: same box, matching background colour, a similar
font (download an OFL lookalike to `campaigns/_shared/fonts`), `maxSize` + automatic fit to width/height.

## 5. QA
`npm run stills -- <id> --at 0.3,0.9,1.5,2.3,3,4,5,8 --no-safe`. Check crop seams during movement,
key halos, live-text fit. Render `9x16` (native) and `4x5` (blurred fill is automatic with `fit: contain`).

Example: `campaigns/city-rock-y-ramen/ads/poster-lightup.json`.
Don't generate new imagery of trademarked characters. Only animate the supplied artwork.
