---
title: Record Result
layout: default
parent: Operations
nav_order: 9
---

# Record Result

## Input

- Match selector: game name, date played, and participant names
- One or more result entries, each containing a participant name and points scored

## Processing

1. Resolve the match using its game name, date, and participant names with case-insensitive name lookups. Reject missing or ambiguous matches, or a match whose status is not `Arranged` or `Played`.
2. For each result entry, resolve the participant name case-insensitively and confirm the player is a participant in the match.
3. Reject duplicate resolved player IDs within the submitted entries.
4. Add each new result. If an entry already exists for a submitted participant, replace that participant's points rather than creating a duplicate result.
5. If results now exist for fewer than all participants, set the match status to `Played` and save the match.
6. If results now exist for every participant, process [Update League](UpdateLeague) in the same transaction. Commit the results, league changes, and completed match status together; if league processing fails, leave all of them unchanged.

## Result

The match records the submitted participant scores. A match with partial results is `Played`; a match with a complete result set is finalized by updating the league.

## Example input message

```yaml
message: recordResult
match:
  game: Agricola
  datePlayed: 2026-12-05
  participants:
    - Alex Morgan
    - Jamie Lee
results:
  - playerName: Alex Morgan
    pointsScored: 12
```

## Example generated data

Given that the match selector resolves to one arranged match with Alex Morgan and Jamie Lee as participants, this partial result leaves the match in `Played`:

```yaml
match:
  id: match-204
  status: Played
  participants:
    - player-1001
    - player-1002
  results:
    - playerId: player-1001
      pointsScored: 12
```
