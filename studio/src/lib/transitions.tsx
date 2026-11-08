import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import type {TransitionPresentation, TransitionPresentationComponentProps} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import type {Transition} from '../schema';

type FlashProps = {color: string};

const FlashPresentation: React.FC<TransitionPresentationComponentProps<FlashProps>> = ({
  children,
  presentationDirection,
  presentationProgress: p,
  passedProps,
}) => {
  const entering = presentationDirection === 'entering';
  const visible = entering ? p >= 0.5 : p < 0.5;
  const flash = 1 - Math.min(1, Math.abs(p - 0.5) * 2.4);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{opacity: visible ? 1 : 0, scale: String(entering ? 1.06 - (p - 0.5) * 0.12 : 1 + p * 0.1)}}>{children}</AbsoluteFill>
      {entering && <AbsoluteFill style={{background: passedProps.color, opacity: flash * 0.9, mixBlendMode: 'screen'}} />}
    </AbsoluteFill>
  );
};

const ZoomPresentation: React.FC<TransitionPresentationComponentProps<Record<string, never>>> = ({
  children,
  presentationDirection,
  presentationProgress: p,
}) => {
  const entering = presentationDirection === 'entering';
  return (
    <AbsoluteFill
      style={{
        opacity: entering ? interpolate(p, [0, 0.6], [0, 1], {extrapolateRight: 'clamp'}) : 1 - p,
        scale: String(entering ? 0.82 + 0.18 * p : 1 + 0.35 * p),
        filter: `blur(${(entering ? 1 - p : p) * 10}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const flash = (color: string): TransitionPresentation<FlashProps> => ({component: FlashPresentation, props: {color}});
export const zoom = (): TransitionPresentation<Record<string, never>> => ({component: ZoomPresentation, props: {}});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const presentationFor = (tr: Transition, flashColor: string): TransitionPresentation<any> => {
  switch (tr.type) {
    case 'fade':
      return fade();
    case 'slide':
      return slide({direction: tr.direction});
    case 'wipe':
      return wipe({direction: tr.direction});
    case 'flash':
      return flash(flashColor);
    case 'zoom':
      return zoom();
    default:
      return fade();
  }
};
