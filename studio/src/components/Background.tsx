import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate, random, useCurrentFrame} from 'remotion';
import {alpha, useTheme} from '../lib/theme';
import {useLayout} from '../lib/layout';

/**
 * Persistent brand plate that lives UNDER every scene, so cuts feel like one world.
 * Styles: circuit (traces + travelling current), grid, gradient, solid.
 */
export const Background: React.FC = () => {
  const t = useTheme();
  const {width, height} = useLayout();
  const frame = useCurrentFrame();
  const style = t.style.background;

  const orbX = interpolate(Math.sin(frame / 90), [-1, 1], [width * 0.25, width * 0.75]);
  const orbY = interpolate(Math.cos(frame / 120), [-1, 1], [height * 0.3, height * 0.6]);

  return (
    <AbsoluteFill style={{backgroundColor: t.colors.bg, overflow: 'hidden'}}>
      {style !== 'solid' && (
        <AbsoluteFill
          style={{
            background: `radial-gradient(120% 80% at 50% 0%, ${t.colors.surface} 0%, ${t.colors.bg} 70%)`,
          }}
        />
      )}
      {style !== 'solid' && (
        <div
          style={{
            position: 'absolute',
            left: orbX - width * 0.6,
            top: orbY - width * 0.6,
            width: width * 1.2,
            height: width * 1.2,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(t.colors.accent, 0.22)} 0%, ${alpha(t.colors.accent, 0)} 60%)`,
          }}
        />
      )}
      {(style === 'circuit' || style === 'grid') && <Grid />}
      {style === 'circuit' && <Traces />}
      <AbsoluteFill
        style={{background: `radial-gradient(110% 90% at 50% 45%, transparent 55%, ${alpha('#000000', 0.55)} 100%)`}}
      />
      {t.style.grain > 0 && <Grain amount={t.style.grain} />}
    </AbsoluteFill>
  );
};

const CELL = 90;

const Grid: React.FC = () => {
  const t = useTheme();
  const {width, height} = useLayout();
  return (
    <svg width={width} height={height} style={{position: 'absolute', inset: 0}}>
      <defs>
        <pattern id="bg-grid" width={CELL} height={CELL} patternUnits="userSpaceOnUse">
          <path d={`M ${CELL} 0 L 0 0 0 ${CELL}`} fill="none" stroke={alpha(t.colors.text, 0.05)} strokeWidth={1.5} />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#bg-grid)" />
    </svg>
  );
};

/** Deterministic orthogonal "circuit" traces with pulses of current travelling along them. */
const Traces: React.FC = () => {
  const t = useTheme();
  const {width, height} = useLayout();
  const frame = useCurrentFrame();

  const traces = useMemo(() => {
    const cols = Math.ceil(width / CELL);
    const rows = Math.ceil(height / CELL);
    return new Array(9).fill(0).map((_, i) => {
      let x = Math.floor(random(`tx${i}`) * cols) * CELL;
      let y = Math.floor(random(`ty${i}`) * rows) * CELL;
      const pts = [`M ${x} ${y}`];
      let len = 0;
      for (let s = 0; s < 6; s++) {
        const horizontal = s % 2 === (i % 2);
        const steps = (1 + Math.floor(random(`ts${i}-${s}`) * 4)) * (random(`td${i}-${s}`) > 0.5 ? 1 : -1);
        if (horizontal) x = Math.min(width, Math.max(0, x + steps * CELL));
        else y = Math.min(height, Math.max(0, y + steps * CELL));
        pts.push(`L ${x} ${y}`);
        len += Math.abs(steps) * CELL;
      }
      return {d: pts.join(' '), len, speed: 4 + random(`sp${i}`) * 6, offset: random(`of${i}`) * 2000, end: {x, y}};
    });
  }, [width, height]);

  return (
    <svg width={width} height={height} style={{position: 'absolute', inset: 0}}>
      <defs>
        <filter id="trace-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {traces.map((tr, i) => {
        const pulse = 160;
        const dashOffset = -((frame * tr.speed + tr.offset) % (tr.len + pulse * 3));
        return (
          <g key={i}>
            <path d={tr.d} fill="none" stroke={alpha(t.colors.text, 0.07)} strokeWidth={2} />
            <circle cx={tr.end.x} cy={tr.end.y} r={5} fill={alpha(t.colors.text, 0.12)} />
            <path
              d={tr.d}
              fill="none"
              stroke={i % 3 === 0 ? t.colors.primary : t.colors.accent}
              strokeOpacity={0.55}
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray={`${pulse} ${tr.len + pulse * 2}`}
              strokeDashoffset={dashOffset}
              filter="url(#trace-glow)"
            />
          </g>
        );
      })}
    </svg>
  );
};

const Grain: React.FC<{amount: number}> = ({amount}) => {
  const frame = useCurrentFrame();
  const {width, height} = useLayout();
  return (
    <svg width={width} height={height} style={{position: 'absolute', inset: 0, opacity: amount, mixBlendMode: 'overlay'}}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={frame % 12} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width={width} height={height} filter="url(#grain)" />
    </svg>
  );
};
