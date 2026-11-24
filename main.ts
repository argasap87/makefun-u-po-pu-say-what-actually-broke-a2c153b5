// Say What Actually Broke — one line of error copy, at most 200 characters.
//
// The hook: the error message tells the brutal truth twice. First, the
// program confesses it crashed — not a crash report, a confession. Then
// the reason: it realised it was just a glorified spreadsheet, which is
// the secret fear of every over-engineered app. The joke lands because
// it is true: strip away the frameworks and most software is a table
// with delusions of grandeur. Honest, funny, and specific enough that
// any developer recognises their own codebase in it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fatal exception: the program crashed when it realised it was just a glorified spreadsheet.";

// Gate guard: the entry must be non-blank, 1-200 characters, exactly
// one line — the sealed scorer rejects anything else with Valid 0, so
// refuse loudly here instead of writing an invalid entry.
if (LINE.trim().length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Gate failed: entry must be 1-200 characters, one line, got ${LINE.length} chars`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
