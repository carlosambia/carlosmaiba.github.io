import React, {useMemo} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fitText} from '@remotion/layout-utils';
import {parseRich, plain, words} from '../lib/rich';
import {useTheme} from '../lib/theme';
import {EASE, clamp} from '../lib/motion';

export type HeadlineAnimation = 'slam' | 'rise' | 'stack' | 'fade';

type Props = {
  text: string;
  maxWidth: number;
  maxSize: number;
  minSize?: number;
  /** Optional box height: all lines shrink proportionally if the stack would overflow it. */
  maxHeight?: number;
  /** uniform: every line same size. stack: each line fitted to the width (poster look). */
  fit?: 'uniform' | 'stack';
  align?: 'left' | 'center' | 'right';
  animation?: HeadlineAnimation;
  delay?: number;
  color?: string;
  lineHeight?: number;
  family?: 'display' | 'body';
  weight?: number;
  upper?: boolean;
};

const STAGGER = {slam: 3, rise: 5, stack: 6, fade: 2} as const;

/** How many frames until the headline has fully landed (use to sequence what comes next). */
export const headlineIntro = (text: string, animation: HeadlineAnimation = 'slam', delay = 0) => {
  const lines = parseRich(text);
  const count = animation === 'slam' || animation === 'fade' ? lines.flatMap(words).filter((w) => !w.space).length : lines.length;
  return delay + count * STAGGER[animation] + 14;
};

/**
 * Kinetic, auto-fitting headline with *highlight* support.
 * Size is measured from the real font, so copy changes never break the layout.
 */
export const Headline: React.FC<Props> = ({
  text,
  maxWidth,
  maxSize,
  minSize = 40,
  maxHeight,
  fit = 'uniform',
  align = 'left',
  animation = 'slam',
  delay = 0,
  color,
  lineHeight = 1.0,
  family = 'display',
  weight,
  upper,
}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fontFamily = family === 'display' ? t.displayFamily : t.bodyFamily;
  const fontWeight = weight ?? (family === 'display' ? t.fonts.displayWeight : 700);
  const isUpper = upper ?? (family === 'display' && t.fonts.displayCase === 'upper');
  const tracking = family === 'display' ? t.fonts.displayTracking : 0;
  const box = t.style.highlight === 'box';

  const lines = useMemo(() => parseRich(text), [text]);
  const sizes = useMemo(() => {
    const raw = lines.map((line) => {
      const s = plain(line.map((x) => x.text).join(''));
      const hasHl = line.some((x) => x.hl);
      const {fontSize} = fitText({
        text: s.trim() || 'M',
        withinWidth: maxWidth * (hasHl && box ? 0.93 : 0.985),
        fontFamily,
        fontWeight,
        letterSpacing: `${tracking}em`,
        textTransform: isUpper ? 'uppercase' : 'none',
      });
      return Math.max(minSize, Math.min(maxSize, fontSize));
    });
    const sized = fit === 'uniform' ? raw.map(() => Math.min(...raw)) : raw;
    if (maxHeight) {
      const total = sized.reduce((a, sz) => a + sz * (lineHeight + 0.06), 0);
      if (total > maxHeight) return sized.map((sz) => sz * (maxHeight / total));
    }
    return sized;
  }, [lines, maxWidth, maxSize, minSize, maxHeight, lineHeight, fit, fontFamily, fontWeight, tracking, isUpper, box]);

  let wordIndex = 0;
  const stagger = STAGGER[animation];

  return (
    <div style={{width: maxWidth, textAlign: align, color: color ?? t.colors.text}}>
      {lines.map((line, li) => {
        const lineDelay = delay + li * stagger;
        const lp = interpolate(frame, [lineDelay, lineDelay + 16], [0, 1], {...clamp, easing: EASE.out});
        const ls = spring({frame: frame - lineDelay, fps, config: {damping: 13, stiffness: 160}});
        const lineStyle: React.CSSProperties =
          animation === 'rise'
            ? {translate: `0 ${(1 - lp) * 105}%`}
            : animation === 'stack'
              ? {scale: String(interpolate(ls, [0, 1], [0.55, 1])), opacity: Math.min(1, ls * 2), rotate: `${(1 - ls) * -4}deg`}
              : {};

        // Group consecutive tokens so a highlight box wraps the whole phrase.
        return (
          <div
            key={li}
            style={{
              overflow: animation === 'rise' ? 'hidden' : 'visible',
              lineHeight,
              fontSize: sizes[li],
              fontFamily,
              fontWeight,
              letterSpacing: `${tracking}em`,
              textTransform: isUpper ? 'uppercase' : 'none',
              whiteSpace: 'nowrap',
              paddingBottom: '0.04em',
            }}
          >
            <div style={{display: 'inline-block', transformOrigin: align === 'center' ? '50% 80%' : '0% 80%', ...lineStyle}}>
              {line.map((tok, ti) => {
                const ws = words([tok]);
                const firstIdx = wordIndex;
                const rendered = ws.map((w, wi) => {
                  if (w.space) return <span key={wi}>{w.text}</span>;
                  const myIdx = wordIndex++;
                  const d = delay + myIdx * stagger;
                  if (animation === 'slam') {
                    const s = spring({frame: frame - d, fps, config: {damping: 14, stiffness: 220, mass: 0.7}});
                    return (
                      <span
                        key={wi}
                        style={{
                          display: 'inline-block',
                          scale: String(interpolate(s, [0, 1], [1.9, 1])),
                          opacity: interpolate(s, [0, 0.35], [0, 1], clamp),
                          filter: `blur(${(1 - Math.min(1, s)) * 14}px)`,
                        }}
                      >
                        {w.text}
                      </span>
                    );
                  }
                  if (animation === 'fade') {
                    const p = interpolate(frame, [d, d + 10], [0, 1], clamp);
                    return (
                      <span key={wi} style={{display: 'inline-block', opacity: p, translate: `0 ${(1 - p) * 0.25}em`}}>
                        {w.text}
                      </span>
                    );
                  }
                  return <span key={wi}>{w.text}</span>;
                });
                if (!tok.hl) return <React.Fragment key={ti}>{rendered}</React.Fragment>;

                // highlight phrase
                const lastIdx = Math.max(firstIdx, wordIndex - 1);
                const hlStart =
                  (animation === 'slam' || animation === 'fade' ? delay + lastIdx * stagger : lineDelay) + 8;
                const hp = interpolate(frame, [hlStart, hlStart + 12], [0, 1], {...clamp, easing: EASE.out});
                if (!box) {
                  return (
                    <span key={ti} style={{color: t.colors.primary, position: 'relative', display: 'inline-block'}}>
                      {rendered}
                      {t.style.highlight === 'underline' && (
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: '-0.02em',
                            height: '0.1em',
                            background: t.colors.primary,
                            transformOrigin: 'left',
                            scale: `${hp} 1`,
                          }}
                        />
                      )}
                    </span>
                  );
                }
                return (
                  <span
                    key={ti}
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      padding: '0 0.12em',
                      margin: '0 0.02em',
                      color: hp > 0.45 ? t.colors.onPrimary : t.colors.text,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '0.08em',
                        bottom: '0.02em',
                        background: t.colors.primary,
                        transformOrigin: 'left center',
                        scale: `${hp} 1`,
                        rotate: '-1.2deg',
                        borderRadius: '0.06em',
                        boxShadow: `0 0 ${0.4 * hp}em ${t.colors.primary}55`,
                      }}
                    />
                    <span style={{position: 'relative'}}>{rendered}</span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
