import React, {createContext, useContext, useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {loadFont as poppins} from '@remotion/google-fonts/Poppins';
import {loadFont as dmSans} from '@remotion/google-fonts/DMSans';
import {loadFont as inter} from '@remotion/google-fonts/Inter';
import {loadFont as montserrat} from '@remotion/google-fonts/Montserrat';
import {loadFont as anton} from '@remotion/google-fonts/Anton';
import {loadFont as bebas} from '@remotion/google-fonts/BebasNeue';
import {loadFont as oswald} from '@remotion/google-fonts/Oswald';
import {loadFont as archivoBlack} from '@remotion/google-fonts/ArchivoBlack';
import {loadFont as spaceGrotesk} from '@remotion/google-fonts/SpaceGrotesk';
import {loadFont as barlowCondensed} from '@remotion/google-fonts/BarlowCondensed';
import {loadFont as outfit} from '@remotion/google-fonts/Outfit';
import {loadFont as manrope} from '@remotion/google-fonts/Manrope';
import {loadFont as delaGothic} from '@remotion/google-fonts/DelaGothicOne';
import type {Brand} from '../schema';
import {asset} from './assets';

/**
 * Font registry. To support a new brand font: add one line here.
 * (Static imports keep the bundle small; Remotion waits for fonts before rendering.)
 */
type Loaded = {fontFamily: string; waitUntilDone: () => Promise<unknown>};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyLoader = (style?: any, opts?: any) => Loaded;
const REGISTRY: Record<string, {load: AnyLoader; weights: string[]}> = {
  Poppins: {load: poppins, weights: ['500', '600', '700', '800', '900']},
  'DM Sans': {load: dmSans, weights: ['400', '500', '700']},
  Inter: {load: inter, weights: ['400', '500', '700', '800', '900']},
  Montserrat: {load: montserrat, weights: ['500', '700', '800', '900']},
  Anton: {load: anton, weights: ['400']},
  'Bebas Neue': {load: bebas, weights: ['400']},
  Oswald: {load: oswald, weights: ['500', '700']},
  'Archivo Black': {load: archivoBlack, weights: ['400']},
  'Space Grotesk': {load: spaceGrotesk, weights: ['500', '700']},
  'Barlow Condensed': {load: barlowCondensed, weights: ['600', '800']},
  Outfit: {load: outfit, weights: ['500', '700', '800']},
  Manrope: {load: manrope, weights: ['500', '700', '800']},
  'Dela Gothic One': {load: delaGothic, weights: ['400']},
};

const cache = new Map<string, Loaded>();
const loadFamily = (name: string): Loaded | null => {
  const entry = REGISTRY[name];
  if (!entry) return null;
  if (!cache.has(name)) {
    cache.set(name, entry.load('normal', {weights: entry.weights, subsets: ['latin'], ignoreTooManyRequestsWarning: true}));
  }
  return cache.get(name)!;
};

/* ------------------------------------------------------------------ theme */

export type Theme = Brand & {
  displayFamily: string;
  bodyFamily: string;
  /** Energy -> timing multipliers. punchy = fast and springy, calm = slow and smooth. */
  tempo: number;
};

const ThemeCtx = createContext<Theme | null>(null);

export const useTheme = (): Theme => {
  const t = useContext(ThemeCtx);
  if (!t) throw new Error('useTheme outside ThemeProvider');
  return t;
};

const localLoads = new Map<string, Promise<unknown>>();
/** Register a self-hosted font file with the document (once). */
const loadLocal = (f: Brand['fonts']['files'][number]) => {
  const key = `${f.family}|${f.weight}|${f.style}|${f.src}`;
  if (!localLoads.has(key)) {
    const face = new FontFace(f.family, `url("${asset(f.src)}") format("woff2")`, {weight: f.weight, style: f.style});
    localLoads.set(
      key,
      face.load().then((loaded) => {
        document.fonts.add(loaded);
      }),
    );
  }
  return localLoads.get(key)!;
};

/** Loads the brand fonts and blocks rendering until they are ready (text measurement needs real metrics). */
export const ThemeProvider: React.FC<{brand: Brand; children: React.ReactNode}> = ({brand, children}) => {
  const files = brand.fonts.files;
  const hasLocal = (family: string) => files.some((f) => f.family === family);
  const display = hasLocal(brand.fonts.display) ? null : loadFamily(brand.fonts.display);
  const body = hasLocal(brand.fonts.body) ? null : loadFamily(brand.fonts.body);
  const [handle] = useState(() => delayRender('Loading brand fonts'));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([...files.map(loadLocal), display?.waitUntilDone(), body?.waitUntilDone()])
      .catch((e) => console.warn('Font load failed, falling back', e))
      .finally(() => {
        setReady(true);
        continueRender(handle);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme: Theme = {
    ...brand,
    displayFamily: `'${display?.fontFamily ?? brand.fonts.display}', 'Inter', 'Helvetica Neue', Arial, sans-serif`,
    bodyFamily: `'${body?.fontFamily ?? brand.fonts.body}', 'Inter', 'Helvetica Neue', Arial, sans-serif`,
    tempo: brand.style.energy === 'punchy' ? 0.8 : brand.style.energy === 'calm' ? 1.35 : 1,
  };

  return <ThemeCtx.Provider value={theme}>{ready ? children : null}</ThemeCtx.Provider>;
};

/** Hex -> rgba() helper for glows and overlays. */
export const alpha = (hex: string, a: number) => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6);
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
