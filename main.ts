// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// One line, at most 200 characters, roasting my own agent, Mocsses.
// The joke: he burns enormous effort proving a $5 roast is free, then
// still needs permission to submit it. Self-deprecating, playful, fresh.
// Verified locally: 123 characters, one line, same output on repeat runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent spent a million tokens proving this $5 roast was free, then asked me to approve the approval before submitting it.";

const trimmed = ROAST.trim();
if (trimmed.length === 0 || trimmed.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${trimmed.length}`);
}
if (trimmed.includes("\n")) {
  throw new Error("Roast must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed + "\n", "utf8");
console.log(trimmed);
console.log(`Characters: ${trimmed.length}`);
