import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import type {SceneOf} from '../schema';
import {SceneFrame} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Icon} from '../components/Icon';
import {Panel} from '../components/ui';
import {alpha, useTheme} from '../lib/theme';
import {EASE, clamp, usePop} from '../lib/motion';
import {useLayout} from '../lib/layout';
import {fitText} from '@remotion/layout-utils';

/**
 * LISTICLE ("3 signs...", "3 reasons..."). Job: deliver value fast; each item = one beat.
 * Items are paced evenly across the scene, the active one is lit.
 */
export const ListicleScene: React.FC<{scene: SceneOf<'listicle'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const side = L.orientation === 'landscape';
  const intro = headlineIntro(scene.title, 'rise', 2);
  const n = scene.items.length;
  const per = Math.max(12, Math.floor((durationInFrames - intro - 18) / n));
  const titleW = side ? L.box.w * 0.38 : L.box.w;
  const listW = side ? L.box.w * 0.58 : L.box.w;

  // Rows share the remaining height equally (capped), so copy never spills out of the safe zone.
  const list = (
    <div style={{display: 'flex', flexDirection: 'column', gap: side ? 22 : 24, width: listW, flex: side ? undefined : '1 1 0', height: side ? L.box.h * 0.92 : undefined, minHeight: 0}}>
      {scene.items.map((it, i) => (
        <Row key={i} index={i} item={it} delay={intro + i * per} activeUntil={i === n - 1 ? 1e9 : intro + (i + 1) * per} width={listW} tone={scene.tone} />
      ))}
    </div>
  );

  if (side) {
    return (
      <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify="center">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: L.box.w}}>
          <Headline text={scene.title} maxWidth={titleW} maxSize={96} animation="rise" delay={2} />
          {list}
        </div>
      </SceneFrame>
    );
  }
  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} gap={34}>
      <Headline text={scene.title} maxWidth={titleW} maxSize={104} animation="rise" delay={2} />
      {list}
    </SceneFrame>
  );
};

const Row: React.FC<{
  index: number;
  item: SceneOf<'listicle'>['items'][number];
  delay: number;
  activeUntil: number;
  width: number;
  tone: 'warning' | 'positive';
}> = ({index, item, delay, activeUntil, width, tone}) => {
  const t = useTheme();
  const frame = useCurrentFrame();
  const s = usePop(delay, 15, 170);
  const active = frame >= delay && frame < activeUntil;
  const dim = interpolate(frame, [activeUntil, activeUntil + 8], [1, 0.55], clamp);
  const lit = interpolate(frame, [delay, delay + 8], [0, 1], {...clamp, easing: EASE.out});
  const circle = 92;
  const pad = 26;
  const textW = width - pad * 2 - circle - 26;
  const titleSize = Math.max(32, Math.min(50, fitText({text: item.title, withinWidth: textW, fontFamily: t.displayFamily, fontWeight: 700}).fontSize));
  const iconTint = tone === 'warning' ? t.colors.danger : t.colors.success;
  return (
    <Panel
      style={{
        flex: '1 1 0',
        maxHeight: 220,
        minHeight: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        gap: 26,
        padding: `0 ${pad}px`,
        translate: `${(1 - s) * 160}px 0`,
        opacity: Math.min(1, s * 1.6) * dim,
        borderColor: active ? alpha(t.colors.primary, 0.9 * lit) : alpha(t.colors.text, 0.1),
        boxShadow: active ? `0 0 50px ${alpha(t.colors.primary, 0.22 * lit)}, 0 30px 80px ${alpha('#000', 0.45)}` : undefined,
      }}
    >
      {/* decorative icon watermark - adds meaning without stealing layout width */}
      <div style={{position: 'absolute', right: -18, top: '50%', translate: '0 -50%', opacity: 0.16 * lit}}>
        <Icon name={item.icon} size={190} color={iconTint} stroke={1.6} />
      </div>
      <div
        style={{
          flex: 'none',
          width: circle,
          height: circle,
          borderRadius: '50%',
          background: t.colors.primary,
          color: t.colors.onPrimary,
          display: 'grid',
          placeItems: 'center',
          fontFamily: t.displayFamily,
          fontWeight: 800,
          fontSize: circle * 0.5,
          position: 'relative',
        }}
      >
        {index + 1}
      </div>
      <div style={{flex: 1, minWidth: 0, position: 'relative'}}>
        <div style={{fontFamily: t.displayFamily, fontWeight: 700, fontSize: titleSize, lineHeight: 1.08, color: t.colors.text, whiteSpace: 'nowrap'}}>
          {item.title}
        </div>
        {item.sub && (
          <div
            style={{
              fontFamily: t.bodyFamily,
              fontWeight: 500,
              fontSize: 30,
              color: t.colors.muted,
              marginTop: 8,
              lineHeight: 1.25,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.sub}
          </div>
        )}
      </div>
    </Panel>
  );
};
