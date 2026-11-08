import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

/** House easings. One motion language across every ad = cohesion. */
export const EASE = {
  out: Easing.bezier(0.16, 1, 0.3, 1), // expo-out: confident, premium
  inOut: Easing.bezier(0.65, 0, 0.35, 1),
  snap: Easing.bezier(0.2, 1.4, 0.4, 1), // slight overshoot
};

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** 0 -> 1 progress after `delay` frames over `dur` frames, expo-out. */
export const useProgress = (delay: number, dur: number, easing = EASE.out) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, delay + Math.max(1, dur)], [0, 1], {...clamp, easing});
};

/** Physically based pop (0 -> 1 with overshoot), for stickers, badges, buttons. */
export const usePop = (delay: number, damping = 12, stiffness = 180) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: frame - delay, fps, config: {damping, stiffness, mass: 0.8}});
};

/** Seconds -> frames honouring the brand tempo (punchy brands move faster). */
export const useSec = () => {
  const {fps} = useVideoConfig();
  return (s: number) => Math.round(s * fps);
};
