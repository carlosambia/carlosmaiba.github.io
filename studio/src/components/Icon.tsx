import React from 'react';

export type IconName =
  | 'bolt' | 'check' | 'x' | 'fuse' | 'flicker' | 'flame' | 'clock' | 'shield' | 'dollar' | 'star'
  | 'home' | 'ev' | 'phone' | 'globe' | 'pin' | 'warning' | 'arrow' | 'quote';

/** Stroke icon set on a 24px grid. Colour via `color`, size via `size`. */
export const Icon: React.FC<{name: IconName; size: number; color: string; stroke?: number; fill?: string}> = ({
  name,
  size,
  color,
  stroke = 2.2,
  fill = 'none',
}) => {
  const p = {fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const};
  const paths: Record<IconName, React.ReactNode> = {
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" {...p} fill={fill} />,
    check: <path d="m4 12.5 5 5L20 6.5" {...p} />,
    x: <path d="M6 6l12 12M18 6 6 18" {...p} />,
    fuse: (
      <g {...p}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 7h4M10 17h4M12 9.5c-1.5 1 1.5 2 0 3s1.5 2 0 3" />
      </g>
    ),
    flicker: (
      <g {...p}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
        <path d="M3 4l2 1.5M21 4l-2 1.5M1.5 10.5H4M22.5 10.5H20" />
      </g>
    ),
    flame: <path d="M12 22c4 0 7-2.7 7-6.8 0-3.2-2-5.6-3.6-7.4-.4 2-1.6 3.3-3 3.6.4-3.4-1-6.6-3.9-9.4.1 3.6-2.5 6-3.8 8.4C3.9 12 5 14 5 15.2 5 19.3 8 22 12 22z" {...p} fill={fill} />,
    clock: (
      <g {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </g>
    ),
    shield: (
      <g {...p}>
        <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </g>
    ),
    dollar: (
      <g {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9c-.5-1-1.6-1.5-3-1.5-1.8 0-3 .9-3 2.2 0 3.3 6 1.6 6 4.6 0 1.3-1.3 2.2-3 2.2-1.5 0-2.6-.6-3.1-1.6M12 6v1.5M12 16.5V18" />
      </g>
    ),
    star: <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8z" {...p} fill={fill} />,
    home: (
      <g {...p}>
        <path d="M3 11 12 3l9 8" />
        <path d="M5 9.5V21h14V9.5M10 21v-6h4v6" />
      </g>
    ),
    ev: (
      <g {...p}>
        <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h14" />
        <path d="M11 7l-2 4h3l-2 4M15 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-2-3" />
      </g>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" {...p} fill={fill} />,
    globe: (
      <g {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </g>
    ),
    pin: (
      <g {...p}>
        <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </g>
    ),
    warning: (
      <g {...p}>
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" fill={fill} />
        <path d="M12 9v4M12 17h.01" />
      </g>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" {...p} />,
    quote: <path d="M9.5 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2.5v1c0 1.7-1 3-2.5 3.5M20 7h-3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2H19v1c0 1.7-1 3-2.5 3.5" {...p} />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{display: 'block', overflow: 'visible'}}>
      {paths[name]}
    </svg>
  );
};
