import React from 'react';
import {AbsoluteFill} from 'remotion';
import type {Media} from '../schema';
import {MediaLayer} from '../components/layers';
import {useLayout} from '../lib/layout';
import {useTheme} from '../lib/theme';
import {useProgress} from '../lib/motion';

/** Every scene = optional media plate + content laid out inside the platform safe zone. */
export const SceneFrame: React.FC<{
  media?: Media;
  durationInFrames: number;
  children: React.ReactNode;
  /** Content box flex settings */
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: number;
  /** Elements positioned absolutely relative to the full canvas (cutouts, graphics). */
  stage?: React.ReactNode;
}> = ({media, durationInFrames, children, justify = 'flex-start', align = 'flex-start', gap = 32, stage}) => {
  const {box} = useLayout();
  return (
    <AbsoluteFill>
      {media && <MediaLayer media={media} durationInFrames={durationInFrames} />}
      {stage}
      <div
        style={{
          position: 'absolute',
          left: box.x,
          top: box.y,
          width: box.w,
          height: box.h,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: justify,
          alignItems: align,
          gap,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

/** Body copy paragraph with fade-up. */
export const Sub: React.FC<{text: string; size: number; delay: number; color?: string; align?: 'left' | 'center'; maxWidth?: number}> = ({
  text,
  size,
  delay,
  color,
  align = 'left',
  maxWidth,
}) => {
  const t = useTheme();
  const p = useProgress(delay, 16);
  return (
    <div
      style={{
        fontFamily: t.bodyFamily,
        fontWeight: t.fonts.bodyWeight,
        fontSize: size,
        lineHeight: 1.3,
        color: color ?? t.colors.muted,
        opacity: p,
        translate: `0 ${(1 - p) * 24}px`,
        textAlign: align,
        maxWidth,
      }}
    >
      {text}
    </div>
  );
};
