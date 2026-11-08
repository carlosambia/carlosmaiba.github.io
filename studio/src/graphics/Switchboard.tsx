import React from 'react';
import {interpolate, random, useCurrentFrame} from 'remotion';
import {alpha, useTheme} from '../lib/theme';
import {clamp, usePop} from '../lib/motion';

/**
 * Code-drawn illustration of an old ceramic-fuse switchboard with an arcing fuse.
 * Vector = infinitely editable (colours follow the brand, no regeneration needed).
 */
export const Switchboard: React.FC<{width: number; delay?: number}> = ({width, delay = 0}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 14, 130);
  const height = width * 1.3;

  // Arc / flicker: bursts every ~40 frames, deterministic.
  const cycle = Math.floor((frame - delay) / 6);
  const arcOn = frame > delay + 10 && random(`arc-${cycle}`) > 0.55;
  const heat = 0.55 + 0.45 * Math.sin(frame / 5);
  const fuses = [0, 1, 2, 3, 4, 5];

  return (
    <div
      style={{
        width,
        height,
        scale: String(interpolate(s, [0, 1], [0.75, 1])),
        opacity: Math.min(1, s * 1.5),
        rotate: `${(1 - s) * 6}deg`,
        filter: `drop-shadow(0 40px 60px ${alpha('#000', 0.6)})`,
      }}
    >
      <svg viewBox="0 0 400 520" width={width} height={height}>
        <defs>
          <linearGradient id="sb-metal" x1="0" x2="1">
            <stop offset="0" stopColor="#3B4554" />
            <stop offset="0.5" stopColor="#525E70" />
            <stop offset="1" stopColor="#2E3643" />
          </linearGradient>
          <linearGradient id="sb-board" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5B4232" />
            <stop offset="1" stopColor="#3E2C22" />
          </linearGradient>
          <radialGradient id="sb-hot">
            <stop offset="0" stopColor="#FFB547" stopOpacity="0.95" />
            <stop offset="0.5" stopColor="#FF5A1F" stopOpacity="0.5" />
            <stop offset="1" stopColor="#FF5A1F" stopOpacity="0" />
          </radialGradient>
          <filter id="sb-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* enclosure */}
        <rect x="10" y="10" width="380" height="500" rx="18" fill="url(#sb-metal)" stroke="#1C222B" strokeWidth="6" />
        <rect x="34" y="34" width="332" height="452" rx="8" fill="url(#sb-board)" stroke="#20160F" strokeWidth="4" />

        {/* meter */}
        <rect x="120" y="56" width="160" height="120" rx="10" fill="#1E242C" stroke="#11161C" strokeWidth="4" />
        <circle cx="200" cy="116" r="44" fill="#D9D3C2" stroke="#9C9582" strokeWidth="4" />
        <rect x="170" y="104" width="60" height="16" rx="3" fill="#2A2A2A" />
        <line
          x1="200"
          y1="150"
          x2={200 + Math.cos(frame / 9) * 16}
          y2={150 + Math.sin(frame / 9) * 4}
          stroke="#B23B2E"
          strokeWidth="4"
        />

        {/* label strip */}
        <rect x="60" y="200" width="280" height="18" rx="3" fill="#C8BFA8" opacity="0.6" />

        {/* ceramic fuses: two rows of three */}
        {fuses.map((i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 76 + col * 90;
          const y = 236 + row * 120;
          const hot = i === 4;
          return (
            <g key={i}>
              <rect x={x - 6} y={y - 6} width="68" height="104" rx="8" fill="#2B1E16" />
              <rect x={x} y={y} width="56" height="92" rx="10" fill="#EFEAE0" stroke="#BDB6A6" strokeWidth="3" />
              <rect x={x + 12} y={y + 10} width="32" height="12" rx="3" fill={['#C0392B', '#2E6FD8', '#E3B21C'][col]} />
              <rect x={x + 22} y={y + 34} width="12" height="40" rx="3" fill="#CFC7B6" />
              {hot && (
                <>
                  <ellipse cx={x + 28} cy={y + 40} rx="70" ry="70" fill="url(#sb-hot)" opacity={heat} />
                  <ellipse cx={x + 30} cy={y + 64} rx="20" ry="26" fill="#2A1A10" opacity="0.55" />
                  <ellipse cx={x + 26} cy={y + 18} rx="22" ry="12" fill="#2A1A10" opacity="0.35" />
                </>
              )}
            </g>
          );
        })}

        {/* wires */}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M ${104 + i * 90} 470 C ${104 + i * 90} 500, ${150 + i * 50} 505, ${180 + i * 20} 520`}
            stroke={i === 1 ? '#111' : '#B5302A'}
            strokeWidth="10"
            fill="none"
          />
        ))}

        {/* arcing sparks on the hot fuse */}
        {arcOn && (
          <g filter="url(#sb-glow)">
            {new Array(7).fill(0).map((_, k) => {
              const a = random(`a-${cycle}-${k}`) * Math.PI * 2;
              const r = 30 + random(`r-${cycle}-${k}`) * 60;
              const cx = 76 + 90 + 28;
              const cy = 236 + 120 + 40;
              return (
                <line
                  key={k}
                  x1={cx}
                  y1={cy}
                  x2={cx + Math.cos(a) * r}
                  y2={cy + Math.sin(a) * r}
                  stroke={k % 2 ? '#FFFFFF' : t.colors.primary}
                  strokeWidth={4}
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx={76 + 90 + 28} cy={236 + 120 + 40} r="12" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    </div>
  );
};

/** Big glowing bolt (generic "electric" hero graphic). */
export const BoltGraphic: React.FC<{width: number; delay?: number}> = ({width, delay = 0}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 10, 160);
  const flick = interpolate(Math.sin(frame / 3) + random(`b${Math.floor(frame / 4)}`), [-1, 2], [0.75, 1], clamp);
  return (
    <svg viewBox="0 0 24 24" width={width} height={width} style={{scale: String(s), opacity: flick, overflow: 'visible'}}>
      <defs>
        <filter id="bolt-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill={t.colors.primary} filter="url(#bolt-glow)" />
    </svg>
  );
};

export const WarningGraphic: React.FC<{width: number; delay?: number}> = ({width, delay = 0}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 9, 170);
  const pulse = 1 + Math.sin(frame / 5) * 0.03;
  return (
    <svg viewBox="0 0 24 24" width={width} height={width} style={{scale: String(s * pulse), overflow: 'visible'}}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" fill={t.colors.primary} />
      <path d="M12 9v4.5M12 17h.01" stroke={t.colors.onPrimary} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
};
