import React from 'react';
import {Img} from 'remotion';
import type {SceneOf} from '../schema';
import {SceneFrame} from './SceneFrame';
import {Headline, headlineIntro} from '../components/Headline';
import {Button} from '../components/ui';
import {Icon, type IconName} from '../components/Icon';
import {asset} from '../lib/assets';
import {useTheme} from '../lib/theme';
import {usePop, useProgress} from '../lib/motion';
import {useLayout} from '../lib/layout';

/** CTA / END CARD. Job: one action, zero friction. Logo + verb button + contact. */
export const CtaScene: React.FC<{scene: SceneOf<'cta'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const t = useTheme();
  const side = L.orientation === 'landscape';
  const logo = usePop(2, 14, 150);
  const intro = headlineIntro(scene.headline, 'rise', 8);
  const logoH = side ? 120 : 150;
  const contact: {icon: IconName; text: string}[] = [];
  if (scene.showPhone && t.contact.phone) contact.push({icon: 'phone', text: t.contact.phone});
  if (scene.showUrl && t.contact.url) contact.push({icon: 'globe', text: t.contact.url});
  const area = scene.area ?? t.contact.area;
  if (area) contact.push({icon: 'pin', text: area});
  const badgeP = useProgress(intro + 24, 16);

  return (
    <SceneFrame media={scene.media} durationInFrames={durationInFrames} justify="center" align="center" gap={side ? 30 : 40}>
      <div style={{height: logoH, scale: String(logo), opacity: Math.min(1, logo * 1.5)}}>
        <Img src={asset(t.logo.full)} style={{height: '100%'}} />
      </div>
      <Headline text={scene.headline} maxWidth={side ? L.box.w * 0.75 : L.box.w} maxSize={side ? 96 : 104} align="center" animation="rise" delay={8} />
      <Button text={scene.button} delay={intro} size={side ? 44 : 50} tapAt={Math.round(durationInFrames * 0.62)} />
      <div style={{display: 'flex', flexDirection: side ? 'row' : 'column', gap: side ? 50 : 16, alignItems: 'center', marginTop: 6}}>
        {contact.map((c, i) => (
          <ContactLine key={i} icon={c.icon} text={c.text} delay={intro + 8 + i * 5} big={c.icon === 'phone'} />
        ))}
      </div>
      {scene.badges && <Img src={asset(scene.badges)} style={{height: side ? 90 : 110, opacity: badgeP, marginTop: 8}} />}
    </SceneFrame>
  );
};

const ContactLine: React.FC<{icon: IconName; text: string; delay: number; big?: boolean}> = ({icon, text, delay, big}) => {
  const t = useTheme();
  const p = useProgress(delay, 14);
  const size = big ? 54 : 36;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        opacity: p,
        translate: `0 ${(1 - p) * 20}px`,
        fontFamily: big ? t.displayFamily : t.bodyFamily,
        fontWeight: big ? 800 : 600,
        fontSize: size,
        color: big ? t.colors.text : t.colors.muted,
        letterSpacing: big ? '0.02em' : 0,
      }}
    >
      <Icon name={icon} size={size * 0.9} color={t.colors.primary} fill={icon === 'phone' ? t.colors.primary : 'none'} />
      {text}
    </div>
  );
};
