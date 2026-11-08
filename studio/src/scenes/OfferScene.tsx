import React from 'react';
import {interpolate} from 'remotion';
import type {SceneOf} from '../schema';
import {SceneFrame, Sub} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Eyebrow} from '../components/ui';
import {useTheme} from '../lib/theme';
import {usePop} from '../lib/motion';
import {useLayout} from '../lib/layout';

/** OFFER. Job: give a reason to act now (risk reversal, bonus, deadline). */
export const OfferScene: React.FC<{scene: SceneOf<'offer'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const t = useTheme();
  const side = L.orientation === 'landscape';
  const intro = headlineIntro(scene.headline, 'stack', 6);
  const st = usePop(intro, 9, 190);
  return (
    <SceneFrame
      media={scene.media}
      durationInFrames={durationInFrames}
      justify="center"
      align={side ? 'flex-start' : 'center'}
      gap={30}
      stage={
        scene.sticker && (
          <div
            style={{
              position: 'absolute',
              right: L.safe.right + (side ? 60 : 10),
              top: side ? L.height * 0.22 : L.safe.top + 20,
              width: side ? 300 : 250,
              height: side ? 300 : 250,
              borderRadius: '50%',
              background: t.colors.primary,
              color: t.colors.onPrimary,
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              fontFamily: t.displayFamily,
              fontWeight: 800,
              fontSize: side ? 52 : 44,
              lineHeight: 1,
              padding: 30,
              scale: String(st),
              rotate: `${interpolate(st, [0, 1], [-40, 12])}deg`,
              boxShadow: `0 0 80px ${t.colors.primary}66`,
              textTransform: 'uppercase',
            }}
          >
            {scene.sticker}
          </div>
        )
      }
    >
      {scene.eyebrow && <Eyebrow text={scene.eyebrow} delay={2} />}
      <Headline text={scene.headline} maxWidth={side ? L.box.w * 0.7 : L.box.w} maxSize={side ? 130 : 150} fit="stack" animation="stack" delay={6} align={side ? 'left' : 'center'} />
      {scene.sub && <Sub text={scene.sub} size={44} delay={intro} align={side ? 'left' : 'center'} maxWidth={L.box.w * 0.9} />}
      {scene.terms && <Sub text={scene.terms} size={26} delay={intro + 6} align={side ? 'left' : 'center'} />}
    </SceneFrame>
  );
};
