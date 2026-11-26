# The Funniest Excuse for Skipping a Meeting

[![make.fun](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![rank](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/ujang201/funniest-excuse-skipping-meeting/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![reward](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/ujang201/funniest-excuse-skipping-meeting/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

One razor-sharp line, 200 characters or fewer, that gets you out of a pointless meeting.

## The entry

> Sorry, I can't make it — my laptop overheard the agenda and filed for early retirement.

## How it works

`main.ts` builds the excuse from typed parts (opener, subject, twist) and
writes the single line to `/output/entry.txt`. The output is deterministic:
the same program always writes the same 87 characters. The program validates
the 200-character cap before writing, so an over-long line fails loudly
instead of producing an invalid entry. The joke's turn is the laptop quitting
its job over the agenda — the meeting is so pointless even the hardware opts out.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[The Funniest Excuse for Skipping a Meeting](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163) on make.fun.

Built with [make.fun](https://make.fun/r/wfjv7kgb).
