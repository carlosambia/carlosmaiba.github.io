---
name: ad-render
description: Final renders and delivery for ads - render the format/variant matrix in the background, produce web-optimised copies and poster frames for landing pages, verify outputs, and write delivery notes. Use when the user wants final MP4s, exports, or a landing-page embed.
argument-hint: <ad-id|campaign|all> [--formats ...]
---

# Stage 6: render & deliver

1. Validate first: `npm run sync` (in `studio/`) must show ✓ for everything being rendered.
2. Render in the background (Bash `run_in_background`):
   `npm run render -- <target> --web` → `out/<client>/<id>-<format>.mp4`, `-web.mp4`, `-poster.jpg`.
   About 1 min per 20 s of 1080p video on 4 cores. Variants and formats render sequentially.
3. Verify each file with `ffprobe` (duration, size, fps) and spot-check one frame per file.
4. Delivery notes (in chat, or `campaigns/<slug>/delivery.md` if asked):
   file | placement | duration | safe-zone profile | hook variant | landing page.
   Include the `<video>` embed snippet from `docs/platform-specs.md` for landing-page files.
5. Offer upload to Google Drive (connector) or a share artifact. Don't upload anywhere without asking.
6. Remind about `campaigns/<slug>/results.md` to log CTR/hook-rate per variant id.
