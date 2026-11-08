import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {alpha, useTheme} from '../lib/theme';
import {EASE, clamp, usePop, useProgress} from '../lib/motion';
import {Icon, type IconName} from './Icon';

/** Small uppercase label above a headline: sets context in < 0.5s. */
export const Eyebrow: React.FC<{text: string; delay?: number; size?: number; icon?: IconName}> = ({
  text,
  delay = 0,
  size = 34,
  icon = 'bolt',
}) => {
  const t = useTheme();
  const p = useProgress(delay, 14);
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.4,
        padding: `${size * 0.32}px ${size * 0.6}px`,
        borderRadius: 999,
        border: `${Math.max(2, size * 0.07)}px solid ${alpha(t.colors.primary, 0.9)}`,
        background: alpha(t.colors.primary, 0.1),
        color: t.colors.primary,
        fontFamily: t.bodyFamily,
        fontWeight: 700,
        fontSize: size,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        opacity: p,
        translate: `${(1 - p) * -40}px 0`,
        whiteSpace: 'nowrap',
      }}
    >
      <Icon name={icon} size={size * 1.05} color={t.colors.primary} fill={t.colors.primary} stroke={1.5} />
      {text}
    </div>
  );
};

/** Benefit / trust chip with a check. */
export const Chip: React.FC<{text: string; delay?: number; size?: number; icon?: IconName}> = ({
  text,
  delay = 0,
  size = 36,
  icon = 'check',
}) => {
  const t = useTheme();
  const s = usePop(delay, 14, 200);
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.45,
        padding: `${size * 0.42}px ${size * 0.75}px ${size * 0.42}px ${size * 0.45}px`,
        borderRadius: 999,
        background: alpha(t.colors.surface, 0.92),
        border: `2px solid ${alpha(t.colors.text, 0.12)}`,
        color: t.colors.text,
        fontFamily: t.bodyFamily,
        fontWeight: 600,
        fontSize: size,
        scale: String(interpolate(s, [0, 1], [0.6, 1])),
        opacity: Math.min(1, s * 2),
        boxShadow: `0 12px 30px ${alpha('#000000', 0.35)}`,
        whiteSpace: 'nowrap',
      }}
    >
      <div
        style={{
          width: size * 1.25,
          height: size * 1.25,
          borderRadius: '50%',
          background: t.colors.primary,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Icon name={icon} size={size * 0.8} color={t.colors.onPrimary} stroke={3} />
      </div>
      {text}
    </div>
  );
};

/** Animated star rating. */
export const Stars: React.FC<{rating?: number; size?: number; delay?: number; color?: string}> = ({
  rating = 5,
  size = 48,
  delay = 0,
  color,
}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const c = color ?? t.colors.primary;
  return (
    <div style={{display: 'flex', gap: size * 0.18}}>
      {new Array(5).fill(0).map((_, i) => {
        const d = delay + i * 3;
        const p = interpolate(frame, [d, d + 10], [0, 1], {...clamp, easing: EASE.snap});
        const filled = i + 1 <= Math.round(rating);
        return (
          <div key={i} style={{scale: String(0.4 + 0.6 * p), opacity: p}}>
            <Icon name="star" size={size} color={c} fill={filled ? c : 'none'} stroke={1.6} />
          </div>
        );
      })}
    </div>
  );
};

/** Number that counts up. */
export const Counter: React.FC<{
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  dur?: number;
  style?: React.CSSProperties;
}> = ({value, decimals = 0, prefix = '', suffix = '', delay = 0, dur = 30, style}) => {
  const p = useProgress(delay, dur, EASE.out);
  const v = (value * p).toFixed(decimals);
  return (
    <span style={{fontVariantNumeric: 'tabular-nums', ...style}}>
      {prefix}
      {v}
      {suffix}
    </span>
  );
};

/** Primary CTA button with a breathing glow and a "tap" at `tapAt`. */
export const Button: React.FC<{text: string; delay?: number; size?: number; tapAt?: number}> = ({
  text,
  delay = 0,
  size = 46,
  tapAt,
}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 11, 170);
  const breathe = 1 + Math.sin((frame - delay) / 7) * 0.018 * Math.min(1, s);
  const tap = tapAt === undefined ? 0 : interpolate(frame, [tapAt, tapAt + 4, tapAt + 10], [0, 1, 0], clamp);
  const ring = tapAt === undefined ? 0 : interpolate(frame, [tapAt, tapAt + 22], [0, 1], clamp);
  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      {ring > 0 && ring < 1 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 999,
            border: `4px solid ${t.colors.primary}`,
            scale: String(1 + ring * 0.35),
            opacity: 1 - ring,
          }}
        />
      )}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: size * 0.45,
          padding: `${size * 0.55}px ${size * 1.05}px`,
          borderRadius: 999,
          background: t.colors.primary,
          color: t.colors.onPrimary,
          fontFamily: t.displayFamily,
          fontWeight: 800,
          fontSize: size,
          letterSpacing: '0.01em',
          scale: String(interpolate(s, [0, 1], [0.5, 1]) * breathe * (1 - tap * 0.06)),
          opacity: Math.min(1, s * 2),
          boxShadow: `0 0 ${size * 1.2}px ${alpha(t.colors.primary, 0.45)}, 0 ${size * 0.3}px ${size * 0.8}px ${alpha('#000000', 0.4)}`,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
        <Icon name="arrow" size={size * 0.95} color={t.colors.onPrimary} stroke={3} />
      </div>
    </div>
  );
};

/** Glass card used by testimonial / offer / listicle rows. */
export const Panel: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => {
  const t = useTheme();
  return (
    <div
      style={{
        background: `linear-gradient(160deg, ${alpha(t.colors.surface, 0.96)}, ${alpha(t.colors.bg, 0.94)})`,
        border: `2px solid ${alpha(t.colors.text, 0.1)}`,
        borderRadius: t.style.radius,
        boxShadow: `0 30px 80px ${alpha('#000000', 0.45)}, inset 0 1px 0 ${alpha(t.colors.text, 0.08)}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
