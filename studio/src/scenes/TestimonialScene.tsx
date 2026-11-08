import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import type {SceneOf} from '../schema';
import {SceneFrame} from './SceneFrame';
import {Panel, Stars} from '../components/ui';
import {Icon} from '../components/Icon';
import {parseRich, words} from '../lib/rich';
import {alpha, useTheme} from '../lib/theme';
import {clamp, usePop} from '../lib/motion';
import {useLayout} from '../lib/layout';

/** SOCIAL PROOF. Job: a real customer says the promise for you. Quote verbatim, attribute it. */
export const TestimonialScene: React.FC<{scene: SceneOf<'testimonial'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(2, 16, 140);
  const side = L.orientation === 'landscape';
  const cardW = side ? L.box.w * 0.78 : L.box.w;
  const lines = useMemo(() => parseRich(scene.quote), [scene.quote]);
  const all = lines.map(words);
  const totalWords = all.flat().filter((w) => !w.space).length;
  // Reveal words over ~45% of the scene so the viewer can read along.
  const revealEnd = Math.max(20, durationInFrames * 0.45);
  const len = scene.quote.length;
  const fontSize = Math.round(Math.max(40, Math.min(side ? 58 : 62, 78 - len * 0.18)));
  let wi = 0;

  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify="center" align="center">
      <Panel
        style={{
          width: cardW,
          padding: side ? '56px 70px' : '56px 54px',
          translate: `0 ${(1 - s) * 220}px`,
          opacity: Math.min(1, s * 1.6),
          rotate: `${(1 - s) * 3}deg`,
          position: 'relative',
        }}
      >
        <div style={{position: 'absolute', top: -46, left: 40, background: t.colors.primary, borderRadius: 24, padding: 14}}>
          <Icon name="quote" size={64} color={t.colors.onPrimary} stroke={3} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, marginTop: 10}}>
          <Stars rating={scene.rating} size={52} delay={10} />
          {scene.meta && (
            <div style={{fontFamily: t.bodyFamily, fontWeight: 600, fontSize: 28, color: t.colors.muted}}>{scene.meta}</div>
          )}
        </div>
        <div style={{fontFamily: t.bodyFamily, fontWeight: 600, fontSize, lineHeight: 1.32, color: t.colors.text}}>
          {all.map((line, li) => (
            <div key={li}>
              {line.map((w, k) => {
                if (w.space) return <span key={k}>{w.text}</span>;
                const at = 12 + (wi++ / totalWords) * revealEnd;
                const o = interpolate(frame, [at, at + 6], [0.12, 1], clamp);
                return (
                  <span key={k} style={{opacity: o, color: w.hl ? t.colors.primary : undefined, fontWeight: w.hl ? 800 : undefined}}>
                    {w.text}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 34}}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: alpha(t.colors.primary, 0.18),
              border: `3px solid ${t.colors.primary}`,
              display: 'grid',
              placeItems: 'center',
              fontFamily: t.displayFamily,
              fontWeight: 800,
              fontSize: 34,
              color: t.colors.primary,
            }}
          >
            {scene.author.slice(0, 1).toUpperCase()}
          </div>
          <div style={{fontFamily: t.displayFamily, fontWeight: 700, fontSize: 40, color: t.colors.text}}>{scene.author}</div>
        </div>
      </Panel>
    </SceneFrame>
  );
};
