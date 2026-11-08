// Shared helpers for the CLI scripts. Imports the studio's own TS modules directly
// (Node >= 22.18 strips types), so validation/timing rules have ONE source of truth.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {AdSpec, Brand} from '../src/schema.ts';
import {resolveSpec} from '../src/lib/resolve.ts';
import {timeline} from '../src/lib/timeline.ts';
import {FORMATS, safeZone} from '../src/formats.ts';

export const STUDIO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ROOT = path.resolve(STUDIO, '..');
export const CAMPAIGNS = path.join(ROOT, 'campaigns');
export const OUT = path.join(ROOT, 'out');

export {FORMATS, safeZone, timeline};

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

/** Every campaign folder that has a brand.json. */
export const listCampaigns = () =>
  fs
    .readdirSync(CAMPAIGNS, {withFileTypes: true})
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && fs.existsSync(path.join(CAMPAIGNS, d.name, 'brand.json')))
    .map((d) => d.name)
    .sort();

export const listAdFiles = (slug) => {
  const dir = path.join(CAMPAIGNS, slug, 'ads');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().map((f) => path.join(dir, f));
};

/** Load + resolve + validate every spec. Returns [{slug, id, file, spec, brand, error}] */
export const loadAll = () => {
  const out = [];
  for (const slug of listCampaigns()) {
    const brandRaw = readJson(path.join(CAMPAIGNS, slug, 'brand.json'));
    const brand = Brand.safeParse(brandRaw);
    const files = listAdFiles(slug);
    const raws = files.map(readJson);
    raws.forEach((raw, i) => {
      let spec = null;
      let error = null;
      try {
        const parsed = AdSpec.safeParse(resolveSpec(raw, raws));
        if (!parsed.success) error = parsed.error.issues.map((x) => `${x.path.join('.')}: ${x.message}`).join('; ');
        else spec = parsed.data;
      } catch (e) {
        error = e.message;
      }
      if (!brand.success) error = 'brand.json: ' + brand.error.issues.map((x) => `${x.path.join('.')}: ${x.message}`).join('; ');
      out.push({slug, id: raw.id, file: files[i], spec, brand: brand.success ? brand.data : null, error});
    });
  }
  return out;
};

/** Parse "--key value" / "--flag" / positional args. */
export const parseArgs = (argv) => {
  const args = {_: []};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=');
      if (v !== undefined) args[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith('--')) args[k] = argv[++i];
      else args[k] = true;
    } else args._.push(a);
  }
  return args;
};

/** Select ads by positional filters: "alphalink-electrical" (whole campaign), "ad-id", or "campaign/ad-id". */
export const selectAds = (all, filters) => {
  if (!filters.length || filters.includes('all')) return all;
  return all.filter((a) => filters.some((f) => f === a.slug || f === a.id || f === `${a.slug}/${a.id}`));
};

export const browserOptions = () =>
  process.env.REMOTION_BROWSER_EXECUTABLE ? {browserExecutable: process.env.REMOTION_BROWSER_EXECUTABLE} : {};
