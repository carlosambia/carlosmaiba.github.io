import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {Media} from '../schema';
import {asset} from '../lib/assets';
import {alpha, useTheme} from '../lib/theme';
import {EASE, clamp, usePop, useProgress} from '../lib/motion';
import {useLayout} from '../lib/layout';

/**
 * Full-bleed background plate (client photo, stock or AI b-roll) with camera motion and a
 * brand-tinted darkening gradient so copy on top always passes contrast.
 */
export const MediaLayer: React.FC<{media: Media; durationInFrames: number}> = ({media, durationInFrames}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], clamp);
  const motion: Record<Media['motion'], React.CSSProperties> = {
    'zoom-in': {scale: String(1.04 + p * 0.1)},
    'zoom-out': {scale: String(1.16 - p * 0.1)},
    'pan-left': {scale: '1.15', translate: `${(0.5 - p) * 6}% 0`},
    'pan-right': {scale: '1.15', translate: `${(p - 0.5) * 6}% 0`},
    none: {},
  };
  const common: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: media.focus,
    ...motion[media.motion],
  };
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      {media.kind === 'video' ? (
        <OffthreadVideo src={asset(media.src)} muted style={common} />
      ) : (
        <Img src={asset(media.src)} style={common} />
      )}
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, ${alpha(t.colors.bg, media.dim * 0.7)} 0%, ${alpha(t.colors.bg, media.dim)} 55%, ${alpha(t.colors.bg, Math.min(1, media.dim + 0.3))} 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};

/** A transparent cutout (person / product) that rises in, then floats with a brand rim-light. */
export const Cutout: React.FC<{
  src: string;
  height: number;
  delay?: number;
  style?: React.CSSProperties;
}> = ({src, height, delay = 0, style}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 16, 120);
  const float = Math.sin((frame - delay) / 28) * 6;
  return (
    <div
      style={{
        position: 'absolute',
        height,
        translate: `0 ${(1 - s) * 140 + float}px`,
        opacity: Math.min(1, s * 1.6),
        ...style,
      }}
    >
      {/* glow puddle behind the subject */}
      <div
        style={{
          position: 'absolute',
          left: '10%',
          right: '10%',
          top: '20%',
          bottom: '-5%',
          borderRadius: '50%',
          background: `radial-gradient(closest-side, ${alpha(t.colors.primary, 0.35)}, transparent)`,
          filter: 'blur(30px)',
        }}
      />
      <Img
        src={asset(src)}
        style={{
          position: 'relative',
          height: '100%',
          filter: `drop-shadow(0 30px 40px ${alpha('#000000', 0.55)}) drop-shadow(0 0 2px ${alpha(t.colors.primary, 0.6)})`,
        }}
      />
    </div>
  );
};

/** Rounded photo card with slow push-in. */
export const PhotoCard: React.FC<{
  src: string;
  width: number;
  height: number;
  delay?: number;
  rotate?: number;
  style?: React.CSSProperties;
  focus?: string;
}> = ({src, width, height, delay = 0, rotate = -2, style, focus = '50% 30%'}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 15, 140);
  return (
    <div
      style={{
        position: 'absolute',
        width,
        height,
        borderRadius: t.style.radius * 1.2,
        overflow: 'hidden',
        border: `6px solid ${t.colors.primary}`,
        boxShadow: `0 40px 90px ${alpha('#000000', 0.55)}, 0 0 60px ${alpha(t.colors.primary, 0.25)}`,
        rotate: `${rotate * s}deg`,
        scale: String(interpolate(s, [0, 1], [0.7, 1])),
        opacity: Math.min(1, s * 1.5),
        ...style,
      }}
    >
      <Img
        src={asset(src)}
        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: focus, scale: String(1.05 + (frame - delay) * 0.0006)}}
      />
    </div>
  );
};

/** Persistent small logo: brand present from the first second (Google ABCD: "Brand early"). */
export const LogoBug: React.FC<{src: string; aspect: number; hideFrom: number}> = ({src, aspect, hideFrom}) => {
  const {safe, format} = useLayout();
  const frame = useCurrentFrame();
  const inP = useProgress(4, 16);
  const out = interpolate(frame, [hideFrom - 8, hideFrom], [1, 0], clamp);
  const h = format === '16x9' ? 64 : 70;
  return (
    <div
      style={{
        position: 'absolute',
        left: safe.left,
        top: safe.top - (format === '9x16' ? 0 : 0),
        height: h,
        width: h * aspect,
        opacity: inP * out,
        translate: `0 ${(1 - inP) * -20}px`,
      }}
    >
      <Img src={asset(src)} style={{height: '100%'}} />
    </div>
  );
};

/** Radial spark burst for emphasis moments. */
export const SparkBurst: React.FC<{x: number; y: number; at: number; size?: number; color?: string}> = ({
  x,
  y,
  at,
  size = 220,
  color,
}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const p = interpolate(frame, [at, at + 14], [0, 1], {...clamp, easing: EASE.out});
  if (p <= 0 || p >= 1) return null;
  const c = color ?? t.colors.primary;
  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`}
      style={{position: 'absolute', left: x - size, top: y - size, pointerEvents: 'none'}}
    >
      {new Array(12).fill(0).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 + (i % 2) * 0.12;
        const r1 = size * (0.25 + p * 0.55);
        const r2 = size * (0.35 + p * 0.65) * (i % 2 ? 0.8 : 1);
        return (
          <line
            key={i}
            x1={Math.cos(a) * r1}
            y1={Math.sin(a) * r1}
            x2={Math.cos(a) * r2}
            y2={Math.sin(a) * r2}
            stroke={c}
            strokeWidth={8 * (1 - p) + 1}
            strokeLinecap="round"
            opacity={1 - p}
          />
        );
      })}
      <circle r={size * 0.2 * (1 - p)} fill={c} opacity={0.8 * (1 - p)} />
    </svg>
  );
};

/** Burned-in caption pill inside the safe zone (most feeds autoplay muted). */
export const CaptionBar: React.FC<{text: string; durationInFrames: number}> = ({text, durationInFrames}) => {
  const t = useTheme();
  const {safe, height, width} = useLayout();
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 6, durationInFrames - 6, durationInFrames], [0, 1, 1, 0], clamp);
  return (
    <div
      style={{
        position: 'absolute',
        left: safe.left,
        right: safe.right,
        top: height - safe.bottom - 120,
        display: 'flex',
        justifyContent: 'center',
        opacity: o,
      }}
    >
      <div
        style={{
          maxWidth: width - safe.left - safe.right,
          padding: '14px 26px',
          borderRadius: 18,
          background: alpha('#000000', 0.62),
          color: '#fff',
          fontFamily: t.bodyFamily,
          fontWeight: 700,
          fontSize: 40,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const ProgressBar: React.FC = () => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const {width} = useLayout();
  return (
    <div style={{position: 'absolute', left: 0, top: 0, height: 8, width: (frame / durationInFrames) * width, background: t.colors.primary}} />
  );
};
