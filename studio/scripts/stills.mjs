// Visual QA: renders the "settled" frame of every scene (+ a mid-hook frame) and tiles them
// into one contact sheet with the platform safe zone drawn in red. Claude reads ONE image
// per format to review layout, legibility and safe zones - cheap, fast, repeatable.
//   npm run stills -- switchboard-3-signs [--formats 9x16] [--no-safe] [--at 0.5,1.2,3]
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition, openBrowser} from '@remotion/renderer';
import {STUDIO, CAMPAIGNS, OUT, loadAll, parseArgs, selectAds, browserOptions, timeline, safeZone, FORMATS} from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const ads = selectAds(loadAll(), args._);
if (!ads.length) {
  console.error('Usage: npm run stills -- <campaign|ad-id|all> [--formats 9x16] [--no-safe]');
  process.exit(1);
}
const serveUrl = await bundle({entryPoint: path.join(STUDIO, 'src/index.ts'), publicDir: CAMPAIGNS});
const browser = await openBrowser('chrome', browserOptions());

for (const ad of ads) {
  if (ad.error) {
    console.error(`✗ ${ad.slug}/${ad.id}: ${ad.error}`);
    continue;
  }
  const tl = timeline(ad.spec);
  // frame 0.6s into the hook (what the scroller sees first) + each scene once settled
  let frames = [Math.min(Math.round(0.6 * tl.fps), tl.scenes[0] - 1)];
  tl.starts.forEach((st, i) => frames.push(st + Math.floor((tl.scenes[i] - (tl.transitions[i] ?? 0)) * 0.82)));
  // --at 0.5,1.2,3  -> explicit timestamps (seconds) instead of the per-scene defaults
  if (args.at) frames = String(args.at).split(',').map((x) => Math.min(tl.total - 1, Math.round(Number(x) * tl.fps)));
  const formats = args.formats ? String(args.formats).split(',') : ad.spec.formats;
  for (const format of formats) {
    if (!ad.spec.formats.includes(format)) continue;
    const id = `${ad.id}-${format}`;
    const dir = path.join(OUT, ad.slug, 'qa', id);
    fs.mkdirSync(dir, {recursive: true});
    const composition = await selectComposition({serveUrl, id, puppeteerInstance: browser});
    const files = [];
    for (const [k, frame] of frames.entries()) {
      const f = path.join(dir, `${String(k).padStart(2, '0')}-f${frame}.png`);
      await renderStill({composition, serveUrl, frame, output: f, puppeteerInstance: browser, scale: 0.5});
      files.push(f);
    }
    const {width, height} = FORMATS[format];
    const sz = safeZone(format, ad.spec.safeZone);
    const s = 0.5;
    const box = `drawbox=x=${sz.left * s}:y=${sz.top * s}:w=${(width - sz.left - sz.right) * s}:h=${(height - sz.top - sz.bottom) * s}:color=red@0.85:t=3`;
    const cols = format === '16x9' ? 3 : files.length;
    const rows = Math.ceil(files.length / cols);
    const sheet = path.join(OUT, ad.slug, 'qa', `${id}-sheet.png`);
    try {
      const inputs = files.flatMap((f) => ['-i', f]);
      const per = files.map((_, i) => `[${i}:v]${args['no-safe'] ? 'null' : box},scale=${format === '16x9' ? 640 : 360}:-1[v${i}]`).join(';');
      const pads = files.map((_, i) => `[v${i}]`).join('');
      const filter =
        files.length === 1
          ? `${per};[v0]null[out]`
          : `${per};${pads}xstack=inputs=${files.length}:layout=${layoutString(files.length, cols, format === '16x9' ? 640 : 360, format === '16x9' ? 360 : Math.round((360 * height) / width))}:fill=white[out]`;
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', filter, '-map', '[out]', sheet]);
      console.log(`✓ ${path.relative(process.cwd(), sheet)}  (${files.length} frames: ${frames.join(', ')}; ${rows} row(s))`);
    } catch (e) {
      console.log(`✓ stills in ${path.relative(process.cwd(), dir)} (contact sheet needs system ffmpeg: ${e.message.split('\n')[0]})`);
    }
  }
}
await browser.close({silent: true});

function layoutString(n, cols, w, h) {
  const gap = 10;
  return new Array(n)
    .fill(0)
    .map((_, i) => `${(i % cols) * (w + gap)}_${Math.floor(i / cols) * (h + gap)}`)
    .join('|');
}
