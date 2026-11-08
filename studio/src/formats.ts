import type {FormatId, SafeZoneProfile} from './schema';

export type Insets = {top: number; right: number; bottom: number; left: number};

export const FORMATS: Record<FormatId, {width: number; height: number; label: string; use: string}> = {
  '9x16': {width: 1080, height: 1920, label: 'Vertical 9:16', use: 'Reels, Stories, TikTok, Shorts, mobile landing hero'},
  '4x5': {width: 1080, height: 1350, label: 'Portrait 4:5', use: 'Meta & LinkedIn feed'},
  '1x1': {width: 1080, height: 1080, label: 'Square 1:1', use: 'Feed fallback, marketplace, Google Display'},
  '16x9': {width: 1920, height: 1080, label: 'Landscape 16:9', use: 'YouTube in-stream, landing-page embed, website hero'},
};

/**
 * Areas where platform UI (handles, captions, buttons) covers the video.
 * Text, logos and CTAs stay INSIDE; imagery may bleed outside.
 * Reels numbers = Meta's published ad guidance (14% top / 35% bottom / 6% sides).
 * TikTok numbers are approximate - verify in TikTok Ads Manager before launch.
 */
export const safeZone = (format: FormatId, profile: SafeZoneProfile): Insets => {
  const {width: w, height: h} = FORMATS[format];
  if (format === '9x16') {
    switch (profile) {
      case 'reels':
        return {top: Math.round(h * 0.14), bottom: Math.round(h * 0.35), left: Math.round(w * 0.06), right: Math.round(w * 0.06)};
      case 'stories':
        return {top: Math.round(h * 0.14), bottom: Math.round(h * 0.2), left: Math.round(w * 0.06), right: Math.round(w * 0.06)};
      case 'tiktok':
        return {top: 160, bottom: 480, left: 64, right: 150};
      case 'none':
        return {top: 60, bottom: 60, left: 60, right: 60};
      default:
        return {top: 96, bottom: 96, left: 72, right: 72};
    }
  }
  if (format === '16x9') return {top: 80, bottom: 90, left: 110, right: 110};
  return {top: 64, bottom: 64, left: 72, right: 72};
};
