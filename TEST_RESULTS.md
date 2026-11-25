# TEST_RESULTS.md — Dad Joke Showdown

Run: 2026-11-26 ~00:55 WIB (2026-11-25 17:55 UTC), Node v24.22.1 local
(grader runs Node 22.23.4; main.ts runs as-is on Node 22.18+).

## Commands and results

1. `node --check main.ts` (syntax check) → exit 0, SYNTAX OK.
2. `MAKEFUN_OUTPUT_DIR=/tmp/qa-joke1 node main.ts`
   → `Wrote 82 characters (82 bytes) to /tmp/qa-joke1/entry.txt`
3. `MAKEFUN_OUTPUT_DIR=/tmp/qa-joke2 node main.ts`
   → `Wrote 82 characters (82 bytes) to /tmp/qa-joke2/entry.txt`
4. Clean-directory run: copied only `main.ts`, `LICENSE`, `README.md` to
   `/tmp/clean-joke`, ran `MAKEFUN_OUTPUT_DIR=/tmp/clean-joke/out node main.ts`
   → `Wrote 82 characters (82 bytes) to /tmp/clean-joke/out/entry.txt`

## Determinism

SHA256 of `/output/entry.txt` across all three runs (two local + one clean-dir):

```
b34f53d3925e10e0d71e0d3e05fbd4e2ca047b7d2c2336e0bee03b2c52344776
```

Byte-identical 3/3.

## Gate check (from the kit: UTF-8, 1–200 characters, not only white space)

- Characters: 82 (limit 200) — PASS
- Bytes: 82 (limit 200) — PASS
- Whitespace-only: false — PASS
- Control characters: none (checked in code before writing) — PASS
- Trailing newline: none — the file is exactly the joke text.

## Kit verification

- Kit downloaded from `https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5/kit`
  (8,251,091 bytes); all 8 file SHA256 match the `get_kit` manifest
  (RULES.txt, competition.yaml, cli/makefun.mjs, cli/site.json,
  harness/CODE.sha256, harness/SOURCES.sha256,
  harness/harness-src.tar.gz, harness/harness-src.tar.gz.sha256).
  Bundle SHA256 from manifest: `ab67a7255934941f66b9b1db260f051af7120036e300bb1b143df50803d41dea`.

## Entry text (82 characters)

> I hung a mirror by the front door for our guests; now they can see themselves out.

## Local judging (gpt-6.1-sol Mode MAX, house judge brief from the kit)

- 8 candidates, all 80–93 characters, all verified by local count.
- Quarter-finals (each pair once): #1 chicken stock beat #8 (margin 2),
  #2 dog heel beat #7 (margin 2), #3 mirror beat #6 (margin 3),
  #4 salt water beat #5 (margin 2).
- Semi-finals (each pair in both orders): #1 beat #4 2–0 (margin 2),
  #3 beat #2 2–0 (margin 2).
- Final (both orders): #3 beat #1 2–0 (margin 2). House-judge score for
  the winner: 78/100 (honest score — not 95; the noted weakness is that
  "see themselves out" is a familiar gag).
- Polish check: 3 fresher mirror variants drafted; V1 "reflects badly"
  (78 chars) and V2 "shattered my self-image" (72 chars) each beat #1 by
  margin 1 in a single-order check, V3 lost margin 3. Decider (both
  orders): the original #3 beat V1 2–0 (margin 2) and V2 2–0 (margin 2),
  so the tournament-winning wording stands exactly as judged.

## SolAPI calls (all HTTP 200, finish_reason stop)

- Candidates: 1 call (output_tokens 20,692, reasoning 20,484).
- QF judge: 1 call. SF judge: 1 call. Final judge: 1 call.
- Polish draft: 1 call — first attempt died on a service restart
  (0-byte output file); retried once, succeeded.
- Polish check judge: 1 call. Decider judge: 1 call.
- Total: 7 SolAPI calls, all HTTP 200.
