import React from 'react';
import type {SceneOf} from '../schema';
import {SceneFrame, Sub} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Eyebrow} from '../components/ui';
import {SparkBurst} from '../components/layers';
import {Switchboard, BoltGraphic, WarningGraphic} from '../graphics/Switchboard';
import {useLayout, isTall} from '../lib/layout';

/**
 * HOOK (0-3s). Job: stop the scroll. One idea, huge type, a pattern interrupt (spark), brand visible.
 */
export const HookScene: React.FC<{scene: SceneOf<'hook'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const side = L.orientation !== 'portrait';
  const textW = side ? L.box.w * 0.56 : L.box.w;
  const eyebrowDelay = 2;
  const hDelay = scene.eyebrow ? 6 : 2;
  const intro = headlineIntro(scene.headline, scene.animation, hDelay);

  const gW = side ? Math.min(L.box.h * 0.72, L.box.w * 0.36) : isTall(L) ? L.width * 0.5 : L.width * 0.34;
  const gH = gW * 1.3;
  // 9:16 = graphic centred under the copy; 4:5 = tucked bottom-right (no vertical room); 1:1/16:9 = right column
  const gx = side ? L.width - L.safe.right - gW : isTall(L) ? (L.width - gW) / 2 : L.width - L.safe.right - gW + 30;
  const gy = side ? (L.height - gH) / 2 : isTall(L) ? L.height - gH - 110 : L.height - gH * 0.92;

  const Graphic = scene.graphic === 'switchboard' ? Switchboard : scene.graphic === 'bolt' ? BoltGraphic : scene.graphic === 'warning' ? WarningGraphic : null;

  return (
    <SceneFrame
      media={scene.media}
      durationInFrames={durationInFrames}
      justify={side ? 'center' : 'flex-start'}
      gap={side ? 28 : 36}
      stage={
        Graphic && (
          <>
            <div style={{position: 'absolute', left: gx, top: gy}}>
              <Graphic width={scene.graphic === 'switchboard' ? gW : gW * 0.8} delay={intro - 6} />
            </div>
            <SparkBurst x={gx + gW * 0.48} y={gy + gH * 0.76} at={intro} size={gW * 0.5} />
          </>
        )
      }
    >
      {scene.eyebrow && <Eyebrow text={scene.eyebrow} delay={eyebrowDelay} size={side ? 30 : 34} />}
      <Headline text={scene.headline} maxWidth={textW} maxSize={side ? 150 : 210} minSize={56} fit="stack" lineHeight={0.98} animation={scene.animation} delay={hDelay} />
      {scene.sub && <Sub text={scene.sub} size={side ? 40 : 46} delay={intro} maxWidth={textW} />}
    </SceneFrame>
  );
};
