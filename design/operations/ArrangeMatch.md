---
title: Arrange Match
layout: default
parent: Operations
nav_order: 5
---

# Arrange Match

## Input

- Game name
- Planned date played
- At least two participant player names

## Processing

1. Find the game and each participant by name using case-insensitive lookups. Reject missing or ambiguous names.
2. Generate a new unique Match ID for the stored match.
3. Require every participant to be `Active`, and require all resolved participant IDs to be unique.
4. Confirm the participant count is within the game's minimum and maximum player counts.
5. Create the match with the supplied game, date, and participants; initialize results as empty and status as `Arranged`.
6. Save the new match.

## Result

A new arranged match exists with no recorded results and at least two valid participants.

## Example input message

```yaml
message: arrangeMatch
game: Agricola
datePlayed: 2026-12-05
participants:
  - Alex Morgan
  - Jamie Lee
```

## Example generated data

Given that the game and both names resolve uniquely to active players, and two is within the game's player limits:

```yaml
match:
  id: match-204
  gameId: agricola
  datePlayed: 2026-12-05
  status: Arranged
  participants:
    - player-1001
    - player-1002
  results: []
```
