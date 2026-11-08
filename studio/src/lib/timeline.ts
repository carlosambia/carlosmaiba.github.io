import type {AdSpec, Transition} from '../schema';

export const DEFAULT_TRANSITION: Transition = {type: 'slide', duration: 0.35, direction: 'from-right'};

/** Frame math for a spec: scene lengths, transition overlaps, scene start frames, total. */
export const timeline = (spec: AdSpec) => {
  const fps = spec.fps;
  const scenes = spec.scenes.map((s) => Math.max(1, Math.round(s.duration * fps)));
  const transitions = spec.scenes.slice(0, -1).map((s, i) => {
    const tr = s.transition ?? DEFAULT_TRANSITION;
    if (tr.type === 'cut') return 0;
    // Never longer than either neighbour (Remotion requirement)
    return Math.min(Math.round(tr.duration * fps), scenes[i] - 1, scenes[i + 1] - 1);
  });
  const starts: number[] = [];
  let cursor = 0;
  scenes.forEach((len, i) => {
    starts.push(cursor);
    cursor += len - (transitions[i] ?? 0);
  });
  const total = scenes.reduce((a, b) => a + b, 0) - transitions.reduce((a, b) => a + b, 0);
  return {fps, scenes, transitions, starts, total};
};
