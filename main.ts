// Dad Joke Showdown — one dad joke, told out loud at the front door.
//
// The program writes exactly one text to entry.txt and nothing else.
// The file is what the judge reads; console output is only a log.
//
// Picked by a local head-to-head tournament run on gpt-6.1-sol Mode MAX
// with the kit's house-judge brief: 8 candidates, quarter-finals,
// semi-finals, final, each pair judged in both orders. This joke won its
// quarter-final 1–0 (margin 3), semi-final 2–0 (margin 2) and final 2–0
// (margin 2), then beat two polished variants 2–0 each in a decider, so
// the tournament wording stands exactly as judged. House-judge score
// for the winner: 78/100 — honest, not 95; the noted weakness is that
// "see themselves out" is a familiar gag, and both fresher variants
// built to fix it lost the decider anyway.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, 82 characters. Setup: a mirror hangs by the front door for
// guests. Turn: "see themselves out" is both the polite phrase for
// showing guests the door and, literally, what a mirror lets them do —
// see themselves, on their way out. One pun, no explanation needed, and
// the punchline lands on the last three words.
const JOKE =
  "I hung a mirror by the front door for our guests; now they can see themselves out.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// white space. The file holds exactly the text — no trailing newline — so
// the byte count the leaderboard shows is the text itself, which also
// helps the size tie-break (fewer bytes wins an exact tie on win rate).
const byteLength = Buffer.byteLength(JOKE, "utf8");
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}.`);
}
if (byteLength > 200) {
  throw new Error(`Joke must be at most 200 bytes, got ${byteLength}.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only white space.");
}
// The gate reads the file as UTF-8 text; a stray control character would
// survive the length check but read as garbage, so refuse it here.
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(JOKE)) {
  throw new Error("Joke must not contain control characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters (${byteLength} bytes) to ${entryPath}`);
