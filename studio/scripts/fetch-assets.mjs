// Downloads client assets listed in campaigns/<slug>/assets.manifest.json into campaigns/<slug>/assets/.
// Raw client assets are git-ignored on purpose: the manifest (source + licence) is the record.
import fs from 'node:fs';
import path from 'node:path';
import {CAMPAIGNS, listCampaigns, parseArgs} from './lib.mjs';

const args = parseArgs(process.argv.slice(2));
const slugs = args._.length ? args._ : listCampaigns();
for (const slug of slugs) {
  const mf = path.join(CAMPAIGNS, slug, 'assets.manifest.json');
  if (!fs.existsSync(mf)) continue;
  const manifest = JSON.parse(fs.readFileSync(mf, 'utf8'));
  for (const a of manifest.assets) {
    const dest = path.join(CAMPAIGNS, slug, a.file);
    if (fs.existsSync(dest) && !args.force) {
      console.log(`= ${slug}/${a.file}`);
      continue;
    }
    if (!a.url) {
      console.log(`! ${slug}/${a.file}  (no url - add it manually: ${a.note ?? ''})`);
      continue;
    }
    const res = await fetch(a.url);
    if (!res.ok) {
      console.log(`✗ ${slug}/${a.file}  HTTP ${res.status}`);
      continue;
    }
    fs.mkdirSync(path.dirname(dest), {recursive: true});
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`↓ ${slug}/${a.file}`);
  }
}
