import {staticFile} from 'remotion';

/** Resolve a spec/brand asset path: URLs pass through, everything else is relative to campaigns/. */
export const asset = (p: string): string => (/^(https?:|data:)/.test(p) ? p : staticFile(p.replace(/^\/+/, '')));
