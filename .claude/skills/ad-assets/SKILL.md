---
name: ad-assets
description: Plan and source visual/audio layers for an ad - client photos and cutouts, stock, AI-generated plates/b-roll (Higgsfield, Magnific), background removal, poster decomposition, music/VO/SFX - always as layers under live brand typography. Use when a spec needs media it doesn't have yet.
argument-hint: [campaign-slug] [ad-id]
---

# Stage 4: assets (layers, not finished videos)

## Priority
1. **Client originals** (ask for PSD/Figma/AI layered files, raw photos, footage). Best quality, zero IP risk.
2. **Client website assets** (already in `assets.manifest.json`).
3. **Stock** (Magnific `stock_search` / `stock_download`) for generic b-roll.
4. **AI generation** for what doesn't exist: plates, environments, b-roll, product shots.

## AI generation rules
* **Quote first**: list each call (tool, model, count, est. credits), get the user's OK.
* Never ask the model for text, logos, phone numbers or UI. Type is added by the studio.
* Generate **plates** (backgrounds with negative space where copy goes) and **elements**
  (subjects you will cut out), not "the whole ad".
* Keep consistency: reuse the same reference images and seed, and describe palette with the brand hexes.
* Cutouts: Higgsfield `remove_background` or Magnific `images_remove_background`; masks via Magnific `images_segment` (SAM).
* Flat poster → layers: Magnific `design_auto_layers` (2-10 layers) or `/poster-to-motion` (crop + key fallback).
* Upscale low-res client photos before use (Magnific `images_upscale` / Higgsfield `upscale_image`).
* Video b-roll goes in scene `media` with `kind: "video"`. Keep clips 3-6 s, no baked-in text.

## Audio
* Music bed: Magnific `audio_music_generate` (prompt: genre, BPM, mood, "no vocals") → `campaigns/<slug>/assets/audio/`.
* Voiceover: Magnific `audio_tts` (or ElevenLabs). Write VO from the scene `caption`s; time scenes to it.
* SFX: Magnific `audio_sfx_generate` ("short electric zap whoosh") → `audio.sfxTransition`.
* Wire into the spec's `audio` block. Music volume 0.25-0.4 under VO.

## Record everything
Add every new file to `assets.manifest.json` with `role`, `license` (`client-owned`, `stock:<id>`,
`ai:<tool>/<model>`) and the prompt used, so assets can be regenerated or audited.
