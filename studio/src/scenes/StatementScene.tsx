import React from 'react';
import type {SceneOf} from '../schema';
import {SceneFrame, Sub} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Eyebrow} from '../components/ui';
import {useLayout} from '../lib/layout';

/**
 * STATEMENT. Big line over a media plate. This is where AI-generated b-roll
 * (Higgsfield / Magnific video) slots in - as a LAYER under brand typography.
 */
export const StatementScene: React.FC<{scene: SceneOf<'statement'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const side = L.orientation === 'landscape';
  const intro = headlineIntro(scene.headline, 'slam', scene.eyebrow ? 6 : 2);
  const justify = scene.align === 'top' ? 'flex-start' : scene.align === 'bottom' ? 'flex-end' : 'center';
  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify={justify} align="center" gap={30}>
      {scene.eyebrow && <Eyebrow text={scene.eyebrow} delay={2} />}
      <Headline text={scene.headline} maxWidth={side ? L.box.w * 0.8 : L.box.w} maxSize={side ? 130 : 150} align="center" animation="slam" delay={scene.eyebrow ? 6 : 2} />
      {scene.sub && <Sub text={scene.sub} size={44} delay={intro} align="center" maxWidth={L.box.w * 0.9} />}
    </SceneFrame>
  );
};
