import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import type {AdProps, Scene} from './schema';
import {ThemeProvider} from './lib/theme';
import {LayoutProvider, makeLayout} from './lib/layout';
import {asset} from './lib/assets';
import {timeline, DEFAULT_TRANSITION} from './lib/timeline';
import {presentationFor} from './lib/transitions';
import {Background} from './components/Background';
import {CaptionBar, LogoBug, ProgressBar} from './components/layers';
import {HookScene} from './scenes/HookScene';
import {ListicleScene} from './scenes/ListicleScene';
import {HeroScene} from './scenes/HeroScene';
import {StatsScene} from './scenes/StatsScene';
import {TestimonialScene} from './scenes/TestimonialScene';
import {OfferScene} from './scenes/OfferScene';
import {StatementScene} from './scenes/StatementScene';
import {CtaScene} from './scenes/CtaScene';
import {LayersScene} from './scenes/LayersScene';

const renderScene = (scene: Scene, durationInFrames: number) => {
  switch (scene.type) {
    case 'hook':
      return <HookScene scene={scene} durationInFrames={durationInFrames} />;
    case 'listicle':
      return <ListicleScene scene={scene} durationInFrames={durationInFrames} />;
    case 'hero':
      return <HeroScene scene={scene} durationInFrames={durationInFrames} />;
    case 'stats':
      return <StatsScene scene={scene} durationInFrames={durationInFrames} />;
    case 'testimonial':
      return <TestimonialScene scene={scene} durationInFrames={durationInFrames} />;
    case 'offer':
      return <OfferScene scene={scene} durationInFrames={durationInFrames} />;
    case 'statement':
      return <StatementScene scene={scene} durationInFrames={durationInFrames} />;
    case 'cta':
      return <CtaScene scene={scene} durationInFrames={durationInFrames} />;
    case 'layers':
      return <LayersScene scene={scene} durationInFrames={durationInFrames} />;
  }
};

/**
 * One component renders every ad, in every format.
 * Layering (bottom -> top): brand background > scene media plates > scene content > logo bug > captions > audio.
 */
export const Ad: React.FC<AdProps> = ({format, brand, spec}) => {
  const layout = makeLayout(format, spec.safeZone, spec.logoBug ? (format === '16x9' ? 84 : 104) : 0);
  const tl = timeline(spec);
  const {durationInFrames} = useVideoConfig();
  const ctaIndex = spec.scenes.findIndex((s) => s.type === 'cta');
  const hideLogoFrom = ctaIndex >= 0 ? tl.starts[ctaIndex] : durationInFrames + 10;

  return (
    <ThemeProvider brand={brand}>
      <LayoutProvider value={layout}>
        <AbsoluteFill style={{backgroundColor: brand.colors.bg}}>
          <Background />
          <TransitionSeries>
            {spec.scenes.flatMap((scene, i) => {
              const items = [
                <TransitionSeries.Sequence key={`s${i}`} durationInFrames={tl.scenes[i]} name={`${i + 1}. ${scene.type}`}>
                  {renderScene(scene, tl.scenes[i])}
                </TransitionSeries.Sequence>,
              ];
              if (i < spec.scenes.length - 1 && tl.transitions[i] > 0) {
                const tr = scene.transition ?? DEFAULT_TRANSITION;
                items.push(
                  <TransitionSeries.Transition
                    key={`t${i}`}
                    presentation={presentationFor(tr, brand.colors.primary)}
                    timing={linearTiming({durationInFrames: tl.transitions[i]})}
                  />,
                );
              }
              return items;
            })}
          </TransitionSeries>

          {spec.logoBug && <LogoBug src={brand.logo.full} aspect={brand.logo.fullAspect} hideFrom={hideLogoFrom} />}
          {spec.progressBar && <ProgressBar />}
          {spec.captions &&
            spec.scenes.map((s, i) =>
              s.caption ? (
                <Sequence key={`c${i}`} from={tl.starts[i]} durationInFrames={tl.scenes[i] - (tl.transitions[i] ?? 0)} layout="none">
                  <CaptionBar text={s.caption} durationInFrames={tl.scenes[i] - (tl.transitions[i] ?? 0)} />
                </Sequence>
              ) : null,
            )}

          {spec.audio.music && (
            <Audio
              src={asset(spec.audio.music)}
              loop
              volume={(f) =>
                spec.audio.musicVolume *
                interpolate(f, [0, 10, durationInFrames - 30, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
              }
            />
          )}
          {spec.audio.voiceover && <Audio src={asset(spec.audio.voiceover)} volume={spec.audio.voiceoverVolume} />}
          {spec.audio.sfxTransition &&
            tl.starts.slice(1).map((st, i) => (
              <Sequence key={`sfx${i}`} from={Math.max(0, st - 3)} durationInFrames={30} layout="none">
                <Audio src={asset(spec.audio.sfxTransition!)} volume={spec.audio.sfxVolume} />
              </Sequence>
            ))}
        </AbsoluteFill>
      </LayoutProvider>
    </ThemeProvider>
  );
};
