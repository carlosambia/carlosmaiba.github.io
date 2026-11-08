/**
 * Variant system: a spec may `extends` another spec of the same campaign and `patch` it.
 *   { "id": "x-hook-b", "extends": "x", "patch": { "scenes": { "0": { "headline": "..." } } } }
 * Objects merge deeply; for arrays, an object with numeric keys patches by index, an array replaces.
 * This is how you A/B test hooks without duplicating whole ads.
 */
type Json = unknown;
const isObj = (v: Json): v is Record<string, Json> => typeof v === 'object' && v !== null && !Array.isArray(v);

export const deepPatch = (base: Json, patch: Json): Json => {
  if (Array.isArray(base) && isObj(patch) && Object.keys(patch).every((k) => /^\d+$/.test(k))) {
    const out = [...base];
    for (const [k, v] of Object.entries(patch)) out[Number(k)] = deepPatch(out[Number(k)], v);
    return out;
  }
  if (isObj(base) && isObj(patch)) {
    const out: Record<string, Json> = {...base};
    for (const [k, v] of Object.entries(patch)) out[k] = k in base ? deepPatch(base[k], v) : v;
    return out;
  }
  return patch === undefined ? base : patch;
};

export const resolveSpec = (raw: Record<string, Json>, siblings: Record<string, Json>[], depth = 0): Record<string, Json> => {
  if (!raw.extends) return raw;
  if (depth > 5) throw new Error(`extends chain too deep at ${String(raw.id)}`);
  const parent = siblings.find((s) => s.id === raw.extends);
  if (!parent) throw new Error(`Spec "${String(raw.id)}" extends unknown spec "${String(raw.extends)}"`);
  const resolvedParent = resolveSpec(parent, siblings, depth + 1);
  const {extends: _e, patch, ...own} = raw;
  const merged = deepPatch(resolvedParent, patch ?? {}) as Record<string, Json>;
  return {...merged, ...own};
};
