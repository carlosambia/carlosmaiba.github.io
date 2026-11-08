/**
 * THE CONTRACT.
 *
 * Every ad is a JSON spec (campaigns/<client>/ads/<id>.json) validated by AdSpec,
 * rendered with a brand (campaigns/<client>/brand.json) validated by Brand.
 *
 * Claude edits JSON. Designers edit JSON or use Remotion Studio's props panel.
 * Nobody re-prompts a video model to change a word, a colour or a phone number.
 */
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

/* ------------------------------------------------------------------ formats */

export const FORMAT_IDS = ['9x16', '4x5', '1x1', '16x9'] as const;
export const FormatId = z.enum(FORMAT_IDS);
export type FormatId = z.infer<typeof FormatId>;

export const SafeZoneProfile = z.enum(['reels', 'stories', 'tiktok', 'feed', 'none']);
export type SafeZoneProfile = z.infer<typeof SafeZoneProfile>;

/* -------------------------------------------------------------------- brand */

export const Brand = z.object({
  name: z.string(),
  tagline: z.string().optional(),
  colors: z.object({
    bg: zColor().describe('Deepest background'),
    surface: zColor().describe('Cards / panels'),
    primary: zColor().describe('Signature accent (highlights, buttons)'),
    onPrimary: zColor().describe('Text on primary'),
    text: zColor(),
    muted: zColor(),
    accent: zColor().describe('Secondary accent (glows, lines)'),
    danger: zColor().default('#FF5A3C'),
    success: zColor().default('#2BD46B'),
  }),
  fonts: z
    .object({
      display: z.string().default('Poppins'),
      displayWeight: z.number().default(800),
      displayCase: z.enum(['upper', 'none']).default('upper'),
      displayTracking: z.number().default(-0.01).describe('em'),
      body: z.string().default('DM Sans'),
      bodyWeight: z.number().default(500),
      /**
       * Self-hosted font files (recommended: renders never depend on a CDN, and licensed
       * brand fonts work). If empty, the family is loaded from Google Fonts by name.
       */
      files: z
        .array(
          z.object({
            family: z.string(),
            src: z.string().describe('Path under campaigns/, e.g. _shared/fonts/poppins-latin-800.woff2'),
            weight: z.string().default('400').describe('"800" or a variable range like "100 1000"'),
            style: z.enum(['normal', 'italic']).default('normal'),
          }),
        )
        .default([]),
    })
    .prefault({}),
  logo: z.object({
    full: z.string().describe('Path under campaigns/ (public dir) or URL'),
    mark: z.string().optional(),
    /** Natural aspect ratio (w/h) of the full logo, used for layout. */
    fullAspect: z.number().default(2.85),
  }),
  contact: z
    .object({
      phone: z.string().optional(),
      url: z.string().optional(),
      area: z.string().optional(),
    })
    .prefault({}),
  style: z
    .object({
      background: z.enum(['circuit', 'grid', 'gradient', 'solid']).default('circuit'),
      highlight: z.enum(['box', 'color', 'underline']).default('box'),
      radius: z.number().default(28),
      energy: z.enum(['calm', 'balanced', 'punchy']).default('punchy'),
      grain: z.number().min(0).max(0.3).default(0.06),
    })
    .prefault({}),
});
export type Brand = z.infer<typeof Brand>;

/* ------------------------------------------------------------ scene pieces */

export const Media = z.object({
  src: z.string().describe('Path under campaigns/ or URL (image or mp4/webm)'),
  kind: z.enum(['image', 'video']).default('image'),
  motion: z.enum(['zoom-in', 'zoom-out', 'pan-left', 'pan-right', 'none']).default('zoom-in'),
  focus: z.string().default('50% 50%').describe('CSS object-position'),
  dim: z.number().min(0).max(1).default(0.55).describe('Darkening overlay so text stays legible'),
});
export type Media = z.infer<typeof Media>;

export const Transition = z.object({
  type: z.enum(['cut', 'fade', 'slide', 'wipe', 'flash', 'zoom']).default('slide'),
  duration: z.number().min(0).max(1.5).default(0.35),
  direction: z.enum(['from-left', 'from-right', 'from-top', 'from-bottom']).default('from-right'),
});
export type Transition = z.infer<typeof Transition>;

const base = {
  /** Seconds this scene is on screen (including the outgoing transition overlap). */
  duration: z.number().min(0.5).max(30),
  /** Transition INTO the next scene. */
  transition: Transition.optional(),
  /** Burned-in caption / voiceover line for this scene (sound-off viewing). */
  caption: z.string().optional(),
  /** Optional background plate: client photo, stock, or AI-generated b-roll. */
  media: Media.optional(),
  /** Free-form note for humans/agents (why this scene exists). Not rendered. */
  note: z.string().optional(),
};

/** Text fields support *highlight* markup and \n line breaks. */
const Rich = z.string();

export const HookScene = z.object({
  type: z.literal('hook'),
  ...base,
  eyebrow: z.string().optional(),
  headline: Rich,
  sub: z.string().optional(),
  graphic: z.enum(['none', 'switchboard', 'bolt', 'warning']).default('none'),
  animation: z.enum(['slam', 'rise', 'stack']).default('slam'),
});

export const ListicleScene = z.object({
  type: z.literal('listicle'),
  ...base,
  title: Rich,
  items: z
    .array(
      z.object({
        title: z.string(),
        sub: z.string().optional(),
        icon: z.enum(['fuse', 'flicker', 'flame', 'bolt', 'check', 'clock', 'shield', 'dollar', 'star', 'home', 'ev']).default('bolt'),
      }),
    )
    .min(1)
    .max(5),
  tone: z.enum(['warning', 'positive']).default('warning'),
});

export const HeroScene = z.object({
  type: z.literal('hero'),
  ...base,
  eyebrow: z.string().optional(),
  headline: Rich,
  chips: z.array(z.string()).max(4).default([]),
  /** Transparent cutout (PNG/WebP with alpha) of a person/product. */
  cutout: z.string().optional(),
  /** Rectangular photo shown as a card when there is no cutout. */
  photo: z.string().optional(),
  nameTag: z.object({name: z.string(), role: z.string()}).optional(),
});

export const StatsScene = z.object({
  type: z.literal('stats'),
  ...base,
  headline: Rich.optional(),
  stats: z
    .array(
      z.object({
        value: z.number(),
        decimals: z.number().int().min(0).max(2).default(0),
        prefix: z.string().default(''),
        suffix: z.string().default(''),
        label: z.string(),
        stars: z.boolean().default(false),
      }),
    )
    .min(1)
    .max(3),
  badges: z.string().optional().describe('Image strip of accreditation badges'),
});

export const TestimonialScene = z.object({
  type: z.literal('testimonial'),
  ...base,
  quote: Rich,
  author: z.string(),
  meta: z.string().optional().describe('e.g. "Google review · Box Hill North"'),
  rating: z.number().min(0).max(5).default(5),
});

export const OfferScene = z.object({
  type: z.literal('offer'),
  ...base,
  eyebrow: z.string().optional(),
  headline: Rich,
  sub: z.string().optional(),
  sticker: z.string().optional(),
  terms: z.string().optional(),
});

export const StatementScene = z.object({
  type: z.literal('statement'),
  ...base,
  eyebrow: z.string().optional(),
  headline: Rich,
  sub: z.string().optional(),
  align: z.enum(['center', 'bottom', 'top']).default('center'),
});

export const CtaScene = z.object({
  type: z.literal('cta'),
  ...base,
  headline: Rich,
  button: z.string(),
  showPhone: z.boolean().default(true),
  showUrl: z.boolean().default(true),
  area: z.string().optional(),
  badges: z.string().optional(),
});

/**
 * LAYERS: a designed artwork (poster, key visual, Figma/PSD export) rebuilt as independent layers.
 * Coordinates are in the artwork's own pixel space (`canvas`). Each layer animates on its own,
 * and text layers are LIVE type (edit the date in JSON, re-render - no regeneration).
 */
export const Layer = z.object({
  name: z.string(),
  /** Image layer source (transparent PNG/WebP cutout, or a flat image combined with `crop`). */
  src: z.string().optional(),
  /** Use only this region of `src` (artwork px). Lets you lift rectangular elements off a flat poster. */
  crop: z.object({x: z.number(), y: z.number(), w: z.number(), h: z.number()}).optional(),
  /** Live text layer (supports *highlight* and \n). */
  text: z.string().optional(),
  textStyle: z
    .object({
      family: z.enum(['display', 'body']).default('display'),
      color: z.string().optional(),
      background: z.string().optional(),
      align: z.enum(['left', 'center', 'right']).default('center'),
      weight: z.number().optional(),
      maxSize: z.number().default(200),
      radius: z.number().default(0),
      padding: z.number().default(0),
      upper: z.boolean().default(true),
      lineHeight: z.number().default(1),
    })
    .prefault({}),
  x: z.number(),
  y: z.number(),
  w: z.number(),
  h: z.number(),
  /** 0 = far background, 1 = closest. Drives parallax strength. */
  depth: z.number().min(0).max(1).default(0.5),
  enter: z.enum(['none', 'fade', 'rise', 'drop', 'pop', 'slide-left', 'slide-right', 'light-up', 'zoom-out']).default('fade'),
  /** Seconds after scene start. */
  at: z.number().min(0).default(0),
  loop: z.enum(['none', 'float', 'flicker', 'pulse', 'sway', 'glow']).default('none'),
  glow: z.string().optional().describe('Glow colour for light-up / glow loops'),
  opacity: z.number().min(0).max(1).default(1),
  /** Static brightness multiplier (e.g. 0.3 for a "lights off" copy of the artwork). */
  brightness: z.number().min(0).max(3).default(1),
  /** Soft edge in px for crop layers, so lifted regions blend into the base. */
  feather: z.number().min(0).default(0),
  blend: z.enum(['normal', 'screen', 'multiply', 'overlay', 'lighten']).default('normal'),
});
export type Layer = z.infer<typeof Layer>;

export const LayersScene = z.object({
  type: z.literal('layers'),
  ...base,
  canvas: z.object({width: z.number(), height: z.number()}),
  /** contain = whole artwork visible (blurred fill behind); cover = fill frame, may crop edges. */
  fit: z.enum(['contain', 'cover']).default('contain'),
  camera: z.enum(['push-in', 'pull-out', 'drift-up', 'none']).default('push-in'),
  layers: z.array(Layer).min(1),
});

export const Scene = z.discriminatedUnion('type', [
  HookScene,
  ListicleScene,
  HeroScene,
  StatsScene,
  TestimonialScene,
  OfferScene,
  StatementScene,
  CtaScene,
  LayersScene,
]);
export type Scene = z.infer<typeof Scene>;
export type SceneOf<T extends Scene['type']> = Extract<Scene, {type: T}>;

/* ---------------------------------------------------------------- the spec */

export const AdSpec = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'lowercase, digits and dashes only'),
  title: z.string(),
  /** Which formula from docs/formulas.md this ad follows (for QA traceability). */
  formula: z.string().optional(),
  objective: z.string().optional(),
  audience: z.string().optional(),
  /** The landing page this ad sends traffic to. Its H1/offer must match the ad's promise. */
  landingPage: z.string().optional(),
  fps: z.number().int().min(24).max(60).default(30),
  formats: z.array(FormatId).min(1).default(['9x16']),
  safeZone: SafeZoneProfile.default('reels'),
  logoBug: z.boolean().default(true),
  progressBar: z.boolean().default(false),
  captions: z.boolean().default(false),
  audio: z
    .object({
      music: z.string().optional(),
      musicVolume: z.number().min(0).max(1).default(0.35),
      voiceover: z.string().optional(),
      voiceoverVolume: z.number().min(0).max(1).default(1),
      sfxTransition: z.string().optional(),
      sfxVolume: z.number().min(0).max(1).default(0.5),
    })
    .prefault({}),
  scenes: z.array(Scene).min(1),
});
export type AdSpec = z.infer<typeof AdSpec>;

/* ------------------------------------------------------ composition props */

export const AdProps = z.object({
  format: FormatId,
  brand: Brand,
  spec: AdSpec,
});
export type AdProps = z.infer<typeof AdProps>;
