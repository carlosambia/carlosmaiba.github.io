// Render ads to MP4.
//   npm run render -- alphalink-electrical                # every ad + format in a campaign
//   npm run render -- switchboard-3-signs --formats 9x16  # one ad, chosen formats
//   npm run render -- all --web                           # + web-optimised poster + faststart for landing pages
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition, openBrowser} from '@remotion/renderer';
import {STUDIO, CAMPAIGNS, OUT, loadAll, parseArgs, selectAds, browserOptions, timeline} from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const ads = selectAds(loadAll(), args._);
if (!ads.length) {
  console.error('No matching ads. Usage: npm run render -- <campaign|ad-id|all> [--formats 9x16,16x9] [--web] [--crf 18]');
  process.exit(1);
}
const broken = ads.filter((a) => a.error);
broken.forEach((a) => console.error(`✗ ${a.slug}/${a.id}: ${a.error}`));
if (broken.length) process.exit(1);

console.log('Bundling…');
const serveUrl = await bundle({entryPoint: path.join(STUDIO, 'src/index.ts'), publicDir: CAMPAIGNS});
const browser = await openBrowser('chrome', browserOptions());

for (const ad of ads) {
  const formats = args.formats ? String(args.formats).split(',').filter((f) => ad.spec.formats.includes(f)) : ad.spec.formats;
  for (const format of formats) {
    const id = `${ad.id}-${format}`;
    const dir = path.join(OUT, ad.slug);
    fs.mkdirSync(dir, {recursive: true});
    const outputLocation = path.join(dir, `${id}.mp4`);
    const composition = await selectComposition({serveUrl, id, puppeteerInstance: browser});
    const t0 = Date.now();
    let last = -1;
    await renderMedia({
      composition,
      serveUrl,
      codec: 'h264',
      crf: args.crf ? Number(args.crf) : 18,
      pixelFormat: 'yuv420p',
      audioCodec: 'aac',
      outputLocation,
      puppeteerInstance: browser,
      onProgress: ({progress}) => {
        const pct = Math.floor(progress * 10) * 10;
        if (pct !== last) {
          last = pct;
          process.stdout.write(`\r${id}: ${pct}%   `);
        }
      },
    });
    console.log(`\r✓ ${path.relative(process.cwd(), outputLocation)}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);

    if (args.web) {
      // Poster frame = the moment the hook headline has landed (first ~1.6s).
      const tl = timeline(ad.spec);
      const posterFrame = Math.min(Math.round(1.6 * tl.fps), tl.scenes[0] - 1);
      const poster = path.join(dir, `${id}-poster.jpg`);
      await renderStill({composition, serveUrl, frame: posterFrame, output: poster, imageFormat: 'jpeg', jpegQuality: 85, puppeteerInstance: browser});
      // Web copy: smaller, moov atom up front so it starts playing instantly.
      const web = path.join(dir, `${id}-web.mp4`);
      try {
        execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', outputLocation, '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-movflags', '+faststart', '-an', web]);
        console.log(`  ↳ web: ${path.relative(process.cwd(), web)} + poster`);
      } catch {
        console.log('  ↳ (system ffmpeg not found; skipped web copy - poster written)');
      }
    }
  }
}
await browser.close({silent: true});
