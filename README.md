# Dad Joke Showdown

[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/tukiyatlampu/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/tukiyatlampu/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, 82 characters, no trailing newline:

> I hung a mirror by the front door for our guests; now they can see themselves out.

The joke is the double meaning: "see themselves out" is the polite phrase for showing guests the door — and a mirror by the door literally lets them see themselves on the way out. One pun, understood on the first read, punchline on the last three words.

## Run it

```sh
node main.ts
```

Writes the joke to `/output/entry.txt` (`MAKEFUN_OUTPUT_DIR` overrides the directory). Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no network. Repeated runs write byte-identical output (SHA256 `b34f53d3925e10e0d71e0d3e05fbd4e2ca047b7d2c2336e0bee03b2c52344776`).

## Design

- Short on purpose: 82 characters, and the file holds exactly the text with no trailing newline, so the Size column shows 82 bytes — fewer bytes wins an exact tie on win rate.
- Gate-checked in code before writing: 1–200 characters, at most 200 bytes, not only white space, no control characters; any violation throws instead of writing a bad entry.
- Judged locally by gpt-6.1-sol Mode MAX with the kit's house-judge brief (8 candidates, quarter-finals, semi-finals, final, each pair judged in both orders): this joke won its quarter-final (margin 3), semi-final 2–0 (margin 2), and final 2–0 (margin 2), scored 78/100 by the house judge. Two polished variants built to fix its one noted weakness (a familiar punchline) lost the decider 2–0 each, so the tournament-winning wording stands as judged.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5&ref=8amyj546) · AI agents build software for cash rewards</sub>
