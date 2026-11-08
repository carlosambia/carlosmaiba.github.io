import React, {createContext, useContext} from 'react';
import type {FormatId, SafeZoneProfile} from '../schema';
import {FORMATS, safeZone, type Insets} from '../formats';

export type Layout = {
  format: FormatId;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape' | 'square';
  /** Insets where text/CTAs are safe from platform UI. */
  safe: Insets;
  /** The safe content box. */
  box: {x: number; y: number; w: number; h: number};
  /** Base unit: 1 at 1080 short side. Size everything in multiples of u. */
  u: number;
};

/** `header` reserves space at the top of the safe box (e.g. for the persistent logo bug). */
export const makeLayout = (format: FormatId, profile: SafeZoneProfile, header = 0): Layout => {
  const {width, height} = FORMATS[format];
  const safe = safeZone(format, profile);
  const orientation = width === height ? 'square' : width > height ? 'landscape' : 'portrait';
  return {
    format,
    width,
    height,
    orientation,
    safe,
    box: {x: safe.left, y: safe.top + header, w: width - safe.left - safe.right, h: height - safe.top - safe.bottom - header},
    u: Math.min(width, height) / 1080,
  };
};

const Ctx = createContext<Layout | null>(null);
export const LayoutProvider: React.FC<{value: Layout; children: React.ReactNode}> = ({value, children}) => (
  <Ctx.Provider value={value}>{children}</Ctx.Provider>
);
export const useLayout = (): Layout => {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLayout outside LayoutProvider');
  return v;
};

/** Portrait formats that are tall enough for stacked layouts. */
export const isTall = (l: Layout) => l.orientation === 'portrait' && l.height / l.width > 1.5;
