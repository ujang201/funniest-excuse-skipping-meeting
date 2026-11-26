// The Funniest Excuse for Skipping a Meeting — entry program.
//
// Writes one razor-sharp excuse line (<= 200 chars) to /output/entry.txt.
// The line is assembled from typed parts so the wording stays deliberate
// and the program stays deterministic: same input, same bytes, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

type ExcuseParts = {
  opener: string;
  subject: string;
  twist: string;
};

const parts: ExcuseParts = {
  opener: "Sorry, I can't make it",
  subject: "my laptop overheard the agenda",
  twist: "filed for early retirement",
};

// One tight line: opener, em dash, subject + twist. No throat-clearing.
// The em dash does the comic pause: the apology, then the absurd reason.
function buildExcuse(p: ExcuseParts): string {
  return `${p.opener} — ${p.subject} and ${p.twist}.`;
}

const excuse = buildExcuse(parts);

if (excuse.length > 200) {
  throw new Error(`excuse is ${excuse.length} chars, over the 200-char cap`);
}
if (!excuse.trim()) {
  throw new Error("excuse must not be empty");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, excuse, "utf8");
console.log(`wrote ${excuse.length} chars to ${outPath}`);
