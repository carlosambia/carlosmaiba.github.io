# City Rock y Ramen: poster-to-motion example

Flat event poster → layered motion piece (`ads/poster-lightup.json`, formula F7).
The poster itself is **not committed** (supplied artwork; contains third-party characters).
To reproduce: put the poster at `assets/poster.jpg` and follow `assets.manifest.json`.

What's editable without touching the artwork:
* `date (LIVE TEXT)`: change "Viernes\n20\nNoviembre" and re-render.
* `urgency sticker`: "¡Últimas entradas!" → "SOLD OUT" / "2x1 hasta el jueves" etc.
* Timing (`at`), entrance styles, glow colours, camera move, formats (9:16 native, 4:5 auto-filled).

Upgrade path: get the PSD/Figma layers from the designer (or Magnific `design_auto_layers`) so
performers, characters and props can move independently with real parallax.
