// News-image entry program (Node 22, standard library only).
//
// The finished front page lives in this repository as entry.png. This
// program's only job is to place an exact copy of it where the grader
// looks: $MAKEFUN_OUTPUT_DIR/entry.png, or /output/entry.png when the
// environment variable is unset. The grader runs the program twice with
// no network access, and both runs must write identical bytes — reading
// the file and writing it back unchanged guarantees that.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), bytes);
