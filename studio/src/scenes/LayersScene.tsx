import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import type {Layer, SceneOf} from '../schema';
import {Headline} from '../components/Headline';
import {asset} from '../lib/assets';
import {useTheme} from '../lib/theme';
import {EASE, clamp} from '../lib/motion';
import {useLayout} from '../lib/layout';

/**
 * LAYERS. Rebuilds a designed artwork (poster / key visual) as independent animated layers:
 * camera move + per-layer parallax + per-layer entrances/loops + live text.
 * This is the opposite of "prompt an AI model over a flat starting frame": every element stays
 * addressable, editable and re-timeable.
 */
export const LayersScene: React.FC<{scene: SceneOf<'layers'>; durationInFrames: number}> = ({scene, durationInFrames}) => {
  const L = useLayout();
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {width: cw, height: ch} = scene.canvas;
  const k = scene.fit === 'contain' ? Math.min(L.width / cw, L.height / ch) : Math.max(L.width / cw, L.height / ch);
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {...clamp, easing: EASE.inOut});
  const cam: React.CSSProperties =
    scene.camera === 'push-in'
      ? {scale: String(1 + 0.06 * p)}
      : scene.camera === 'pull-out'
        ? {scale: String(1.08 - 0.08 * p)}
        : scene.camera === 'drift-up'
          ? {translate: `0 ${(0.5 - p) * 30}px`, scale: '1.03'}
          : {};
  const base = scene.layers.find((l) => l.src && !l.crop);
  const bars = scene.fit === 'contain' && (Math.abs(L.width / cw - L.height / ch) > 0.01);

  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      {bars && base?.src && (
        <AbsoluteFill>
          <Img src={asset(base.src)} style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(40px) brightness(0.45)', scale: '1.2'}} />
        </AbsoluteFill>
      )}
      <div
        style={{
          position: 'absolute',
          left: (L.width - cw * k) / 2,
          top: (L.height - ch * k) / 2,
          width: cw * k,
          height: ch * k,
          ...cam,
        }}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: cw, height: ch, scale: String(k), transformOrigin: '0 0'}}>
          {scene.layers.map((layer, i) => (
            <Sequence key={i} from={Math.round(layer.at * fps)} layout="none" name={layer.name}>
              <LayerView layer={layer} canvas={scene.canvas} camP={p} cam={scene.camera} />
            </Sequence>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const LayerView: React.FC<{layer: Layer; canvas: {width: number; height: number}; camP: number; cam: string}> = ({layer, canvas, camP, cam}) => {
  const t = useTheme();
  const f = useCurrentFrame(); // local to the layer's `at`
  const {fps} = useVideoConfig();
  const s = spring({frame: f, fps, config: {damping: 14, stiffness: 150, mass: 0.8}});
  const lin = interpolate(f, [0, 14], [0, 1], {...clamp, easing: EASE.out});

  // ---- entrance
  let opacity = layer.opacity;
  let translate = [0, 0];
  let scale = 1;
  let brightness = layer.brightness;
  let glowPx = 0;
  switch (layer.enter) {
    case 'fade':
      opacity *= lin;
      break;
    case 'rise':
      opacity *= lin;
      translate = [0, (1 - s) * 90];
      break;
    case 'drop':
      opacity *= Math.min(1, s * 2);
      translate = [0, (1 - s) * -140];
      break;
    case 'pop':
      opacity *= Math.min(1, s * 2);
      scale = 0.6 + 0.4 * s;
      break;
    case 'slide-left':
      opacity *= lin;
      translate = [(1 - s) * 220, 0];
      break;
    case 'slide-right':
      opacity *= lin;
      translate = [(1 - s) * -220, 0];
      break;
    case 'zoom-out':
      opacity *= lin;
      scale = 1.3 - 0.3 * s;
      break;
    case 'light-up': {
      // neon tube striking: stutter, overshoot, settle
      const pattern = [0, 0.7, 0.05, 0.9, 0.2, 1, 0.6, 1];
      const step = Math.floor(f / 2);
      opacity *= step < pattern.length ? pattern[step] : 1;
      brightness *= interpolate(f, [0, 16, 30], [1.6, 1.35, 1], clamp);
      glowPx = interpolate(f, [0, 16, 40], [40, 30, 12], clamp);
      break;
    }
    default:
      break;
  }

  // ---- loops
  let rotate = 0;
  switch (layer.loop) {
    case 'float':
      translate = [translate[0], translate[1] + Math.sin(f / 26) * 7];
      break;
    case 'flicker':
      if (f > 20 && random(`fl-${layer.name}-${Math.floor(f / 3)}`) > 0.94) opacity *= 0.45;
      break;
    case 'pulse':
      scale *= 1 + Math.sin(f / 11) * 0.018;
      break;
    case 'sway':
      rotate = Math.sin(f / 38) * 1.4;
      break;
    case 'glow':
      glowPx = Math.max(glowPx, 14 + Math.sin(f / 9) * 9);
      break;
  }

  // ---- parallax: deeper layers move more with the camera
  const cx = layer.x + layer.w / 2 - canvas.width / 2;
  const cy = layer.y + layer.h / 2 - canvas.height / 2;
  const par = layer.depth;
  const parX = cam === 'push-in' || cam === 'pull-out' ? cx * 0.05 * par * (cam === 'push-in' ? camP : 1 - camP) : 0;
  const parY = cam === 'drift-up' ? -60 * par * camP : cam === 'push-in' || cam === 'pull-out' ? cy * 0.05 * par * (cam === 'push-in' ? camP : 1 - camP) : 0;

  const glowColor = layer.glow ?? t.colors.accent;
  const style: React.CSSProperties = {
    position: 'absolute',
    left: layer.x,
    top: layer.y,
    width: layer.w,
    height: layer.h,
    opacity,
    translate: `${translate[0] + parX}px ${translate[1] + parY}px`,
    scale: String(scale),
    rotate: `${rotate}deg`,
    mixBlendMode: layer.blend,
    filter: `brightness(${brightness})${glowPx > 0 ? ` drop-shadow(0 0 ${glowPx}px ${glowColor})` : ''}`,
  };

  if (layer.text !== undefined) {
    const ts = layer.textStyle;
    return (
      <div
        style={{
          ...style,
          background: ts.background,
          borderRadius: ts.radius,
          padding: ts.padding,
          display: 'flex',
          alignItems: 'center',
          justifyContent: ts.align === 'center' ? 'center' : ts.align === 'right' ? 'flex-end' : 'flex-start',
          boxSizing: 'border-box',
        }}
      >
        <Headline
          text={layer.text}
          maxWidth={layer.w - ts.padding * 2}
          maxSize={ts.maxSize}
          maxHeight={layer.h - ts.padding * 2}
          minSize={12}
          fit="stack"
          align={ts.align}
          animation="fade"
          delay={2}
          color={ts.color ?? t.colors.text}
          family={ts.family}
          weight={ts.weight}
          upper={ts.upper}
          lineHeight={ts.lineHeight}
        />
      </div>
    );
  }

  if (!layer.src) return null;
  if (layer.crop) {
    // Lift a rectangular region off a flat artwork (src is assumed to be canvas-sized).
    const sx = layer.w / layer.crop.w;
    const sy = layer.h / layer.crop.h;
    return (
      <div
        style={{
          ...style,
          overflow: 'hidden',
          ...(layer.feather > 0
            ? {
                maskImage: `linear-gradient(to right, transparent, #000 ${layer.feather}px, #000 calc(100% - ${layer.feather}px), transparent), linear-gradient(to bottom, transparent, #000 ${layer.feather}px, #000 calc(100% - ${layer.feather}px), transparent)`,
                maskComposite: 'intersect',
              }
            : {}),
        }}
      >
        <Img
          src={asset(layer.src)}
          style={{position: 'absolute', left: -layer.crop.x * sx, top: -layer.crop.y * sy, width: canvas.width * sx, height: canvas.height * sy, maxWidth: 'none'}}
        />
      </div>
    );
  }
  return <Img src={asset(layer.src)} style={{...style, objectFit: 'contain'}} />;
};
