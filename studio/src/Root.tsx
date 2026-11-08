import React from 'react';
import {AbsoluteFill, Composition, Folder, type CalculateMetadataFunction} from 'remotion';
import {AdProps, AdSpec, Brand, type FormatId} from './schema';
import {FORMATS} from './formats';
import {timeline} from './lib/timeline';
import {resolveSpec} from './lib/resolve';
import {CAMPAIGNS} from './generated/registry';
import {Ad} from './Ad';

const calculateMetadata: CalculateMetadataFunction<AdProps> = ({props}) => {
  const {width, height} = FORMATS[props.format];
  const tl = timeline(props.spec);
  return {durationInFrames: tl.total, fps: props.spec.fps, width, height};
};

const ErrorCard: React.FC<{message: string}> = ({message}) => (
  <AbsoluteFill style={{background: '#300', color: '#fff', padding: 60, fontSize: 36, fontFamily: 'monospace', whiteSpace: 'pre-wrap'}}>
    {message}
  </AbsoluteFill>
);

/**
 * Registers <campaign>/<ad>-<format> for every spec in campaigns/<campaign>/ads/*.json.
 * Run `npm run sync` after adding/removing spec files (edits hot-reload automatically).
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {CAMPAIGNS.map((c) => {
        const brand = Brand.safeParse(c.brand);
        return (
          <Folder key={c.slug} name={c.slug}>
            {c.ads.map((raw, i) => {
              let spec: AdSpec;
              try {
                const resolved = resolveSpec(raw as Record<string, unknown>, c.ads as Record<string, unknown>[]);
                const parsed = AdSpec.safeParse(resolved);
                if (!parsed.success) throw new Error(parsed.error.issues.map((x) => `${x.path.join('.')}: ${x.message}`).join('\n'));
                if (!brand.success) throw new Error('brand.json: ' + brand.error.issues.map((x) => `${x.path.join('.')}: ${x.message}`).join('\n'));
                spec = parsed.data;
              } catch (e) {
                const id = `${c.slug}-invalid-${i}`.replace(/[^a-zA-Z0-9-]/g, '-');
                return (
                  <Composition
                    key={id}
                    id={id}
                    component={ErrorCard}
                    defaultProps={{message: `Spec ${String((raw as {id?: string}).id)} is invalid:\n\n${(e as Error).message}`}}
                    durationInFrames={30}
                    fps={30}
                    width={1080}
                    height={1080}
                  />
                );
              }
              return spec.formats.map((format: FormatId) => (
                <Composition
                  key={`${spec.id}-${format}`}
                  id={`${spec.id}-${format}`}
                  component={Ad}
                  schema={AdProps}
                  defaultProps={{format, brand: brand.data!, spec}}
                  calculateMetadata={calculateMetadata}
                  durationInFrames={timeline(spec).total}
                  fps={spec.fps}
                  width={FORMATS[format].width}
                  height={FORMATS[format].height}
                />
              ));
            })}
          </Folder>
        );
      })}
    </>
  );
};
