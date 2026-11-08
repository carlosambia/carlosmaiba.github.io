// Claude Code PostToolUse hook: after Claude edits a brand.json or an ad spec, regenerate the
// registry and validate. Errors are returned to Claude (exit 2 + stderr) so it fixes them at once.
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const studio = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let input = '';
try {
  input = fs.readFileSync(0, 'utf8');
} catch {
  process.exit(0);
}
let file = '';
try {
  const data = JSON.parse(input);
  file = data?.tool_input?.file_path ?? '';
} catch {
  process.exit(0);
}
if (!/campaigns\/[^/]+\/(brand\.json|ads\/[^/]+\.json)$/.test(file.split(path.sep).join('/'))) process.exit(0);
if (!fs.existsSync(path.join(studio, 'node_modules'))) process.exit(0); // not installed yet: stay quiet

try {
  execFileSync(process.execPath, [path.join(studio, 'scripts/sync-specs.mjs')], {cwd: studio, stdio: 'pipe'});
  process.exit(0);
} catch (e) {
  const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.split('\n').filter((l) => l.startsWith('✗') || /Error/.test(l)).join('\n');
  process.stderr.write(`Spec validation failed after editing ${path.basename(file)}:\n${out || e.message}\nFix the JSON to match studio/src/schema.ts.\n`);
  process.exit(2);
}
