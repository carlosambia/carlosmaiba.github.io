/**
 * Tiny markup for on-screen copy:
 *   "Is your switchboard\na *fire risk?*"  -> 2 lines, "fire risk?" highlighted.
 */
export type Token = {text: string; hl: boolean};
export type Line = Token[];

export const parseRich = (input: string): Line[] =>
  input.split('\n').map((line) => {
    const out: Token[] = [];
    const re = /\*([^*]+)\*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(line))) {
      if (m.index > last) out.push({text: line.slice(last, m.index), hl: false});
      out.push({text: m[1], hl: true});
      last = m.index + m[0].length;
    }
    if (last < line.length) out.push({text: line.slice(last), hl: false});
    return out;
  });

export const plain = (input: string) => input.replace(/\*/g, '');

/** Split tokens into words while keeping highlight flags (for word-by-word animation). */
export const words = (line: Line) =>
  line.flatMap((t) =>
    t.text
      .split(/(\s+)/)
      .filter((w) => w.length > 0)
      .map((w) => ({text: w, hl: t.hl, space: /^\s+$/.test(w)})),
  );
