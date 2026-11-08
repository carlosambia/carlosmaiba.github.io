import React from 'react';
import type {SceneOf} from '../schema';
import {SceneFrame} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Chip, Eyebrow} from '../components/ui';
import {Cutout, PhotoCard} from '../components/layers';
import {alpha, useTheme} from '../lib/theme';
import {usePop} from '../lib/motion';
import {useLayout, isTall} from '../lib/layout';

/**
 * HERO / SOLUTION. Job: introduce the fix and the human behind it (faces build trust),
 * stack 2-3 concrete benefits as chips. Cutout = layered parallax, not a flat frame.
 */
export const HeroScene: React.FC<{scene: SceneOf<'hero'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const side = L.orientation !== 'portrait';
  const hDelay = scene.eyebrow ? 6 : 2;
  const intro = headlineIntro(scene.headline, 'rise', hDelay);
  const textW = side ? L.box.w * 0.54 : L.box.w;

  // Subject placement per format
  const subjH = side ? L.height * 0.92 : isTall(L) ? L.height * 0.6 : L.height * 0.56;
  const subjAspect = 1080 / 1482; // typical portrait cutout; image keeps its own aspect
  const subjW = subjH * subjAspect;
  const subjX = side ? L.width - L.safe.right - subjW + 40 : (L.width - subjW) / 2 + (isTall(L) ? 0 : L.width * 0.16);
  const subjY = L.height - subjH + (side ? 0 : 10);

  const stage = (
    <>
      {scene.cutout && <Cutout src={scene.cutout} height={subjH} delay={4} style={{left: subjX, top: subjY}} />}
      {!scene.cutout && scene.photo && (
        <PhotoCard
          src={scene.photo}
          width={side ? L.box.w * 0.38 : L.box.w * 0.7}
          height={side ? L.box.h * 0.9 : L.height * 0.42}
          delay={4}
          rotate={3}
          style={side ? {right: L.safe.right, top: L.safe.top + L.box.h * 0.05} : {left: (L.width - L.box.w * 0.7) / 2, top: L.height * 0.5}}
        />
      )}
      {scene.nameTag && (
        <NameTag
          name={scene.nameTag.name}
          role={scene.nameTag.role}
          delay={intro + 4}
          style={
            side
              ? {left: subjX - 40, top: L.safe.top + L.box.h * 0.78}
              : {left: L.safe.left, top: L.safe.top + L.box.h - 150}
          }
        />
      )}
    </>
  );

  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify={side ? 'center' : 'flex-start'} gap={side ? 26 : 30} stage={stage}>
      {scene.eyebrow && <Eyebrow text={scene.eyebrow} delay={2} size={side ? 28 : 32} />}
      <Headline text={scene.headline} maxWidth={textW} maxSize={side ? 104 : 116} animation="rise" delay={hDelay} />
      {scene.chips.length > 0 && (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, maxWidth: textW, flexDirection: side ? 'column' : 'row', alignItems: 'flex-start'}}>
          {scene.chips.map((c, i) => (
            <Chip key={i} text={c} delay={intro + i * 6} size={side ? 32 : 32} />
          ))}
        </div>
      )}
    </SceneFrame>
  );
};

const NameTag: React.FC<{name: string; role: string; delay: number; style: React.CSSProperties}> = ({name, role, delay, style}) => {
  const t = useTheme();
  const s = usePop(delay, 14, 180);
  return (
    <div
      style={{
        position: 'absolute',
        padding: '18px 28px 18px 22px',
        borderRadius: 20,
        background: t.colors.primary,
        color: t.colors.onPrimary,
        boxShadow: `0 20px 50px ${alpha('#000', 0.45)}`,
        borderLeft: `10px solid ${t.colors.text}`,
        scale: String(s),
        transformOrigin: 'left center',
        rotate: '-2deg',
        ...style,
      }}
    >
      <div style={{fontFamily: t.displayFamily, fontWeight: 800, fontSize: 44, lineHeight: 1}}>{name}</div>
      <div style={{fontFamily: t.bodyFamily, fontWeight: 700, fontSize: 28, marginTop: 6, letterSpacing: '0.04em', textTransform: 'uppercase'}}>{role}</div>
    </div>
  );
};
