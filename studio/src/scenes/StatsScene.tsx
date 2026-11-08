import React from 'react';
import {Img} from 'remotion';
import type {SceneOf} from '../schema';
import {SceneFrame} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Counter, Panel, Stars} from '../components/ui';
import {asset} from '../lib/assets';
import {useTheme} from '../lib/theme';
import {usePop, useProgress} from '../lib/motion';
import {useLayout} from '../lib/layout';

/** PROOF. Job: make the claim believable with numbers + third-party marks. */
export const StatsScene: React.FC<{scene: SceneOf<'stats'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const t = useTheme();
  const row = L.orientation !== 'portrait';
  const intro = scene.headline ? headlineIntro(scene.headline, 'rise', 2) : 4;
  const n = scene.stats.length;
  const cardW = row ? (L.box.w - 30 * (n - 1)) / n : L.box.w;
  const badgeP = useProgress(intro + n * 8 + 6, 18);
  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify="center" align={row ? 'center' : 'flex-start'} gap={40}>
      {scene.headline && <Headline text={scene.headline} maxWidth={L.box.w} maxSize={row ? 96 : 110} animation="rise" delay={2} align={row ? 'center' : 'left'} />}
      <div style={{display: 'flex', flexDirection: row ? 'row' : 'column', gap: 26, width: L.box.w}}>
        {scene.stats.map((st, i) => (
          <StatCard key={i} stat={st} delay={intro + i * 8} width={cardW} compact={!row} />
        ))}
      </div>
      {scene.badges && (
        <Img
          src={asset(scene.badges)}
          style={{height: row ? 110 : 130, opacity: badgeP, translate: `0 ${(1 - badgeP) * 30}px`, alignSelf: row ? 'center' : 'flex-start', filter: `drop-shadow(0 10px 20px ${t.colors.bg})`}}
        />
      )}
    </SceneFrame>
  );
};

const StatCard: React.FC<{stat: SceneOf<'stats'>['stats'][number]; delay: number; width: number; compact: boolean}> = ({stat, delay, width, compact}) => {
  const t = useTheme();
  const s = usePop(delay, 14, 170);
  return (
    <Panel
      style={{
        width,
        padding: compact ? '26px 36px' : '36px 30px',
        display: 'flex',
        flexDirection: compact ? 'row' : 'column',
        alignItems: compact ? 'center' : 'center',
        gap: compact ? 30 : 10,
        scale: String(0.7 + 0.3 * s),
        opacity: Math.min(1, s * 1.6),
      }}
    >
      <div style={{fontFamily: t.displayFamily, fontWeight: 800, fontSize: compact ? 120 : 130, lineHeight: 1, color: t.colors.primary, minWidth: compact ? 260 : undefined}}>
        <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} delay={delay} dur={26} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: compact ? 'flex-start' : 'center'}}>
        {stat.stars && <Stars size={compact ? 44 : 40} delay={delay + 10} />}
        <div style={{fontFamily: t.bodyFamily, fontWeight: 600, fontSize: compact ? 40 : 36, color: t.colors.text, textAlign: compact ? 'left' : 'center', lineHeight: 1.2}}>{stat.label}</div>
      </div>
    </Panel>
  );
};
