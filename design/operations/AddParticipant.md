---
title: Add Participant
layout: default
parent: Operations
nav_order: 3
---

# Add Participant

## Input

- Match selector: game name, date played, and the names of the existing participants
- Player name to add

## Processing

1. Resolve the match by its game name, date, and existing participant names, and resolve the new participant by name. Use case-insensitive lookups for names; reject missing or ambiguous matches.
2. Require the match to be `Arranged` and the player to be `Active`.
3. Reject the operation if the player is already a participant in the match.
4. Add the player to the match participants.
5. Confirm the participant count does not exceed the associated game's maximum player count.
6. Save the updated match.

## Result

The arranged match includes the new participant. Its participant IDs remain unique.

## Example input message

```yaml
message: addParticipant
match:
  game: Agricola
  datePlayed: 2026-12-05
  participants:
    - Alex Morgan
    - Jamie Lee
playerName: Taylor Kim
```

## Example generated data

Given that the selector resolves to one arranged match and the names resolve to the players shown:

```yaml
match:
  id: match-204
  status: Arranged
  participants:
    - player-1001
    - player-1002
    - player-1003
  results: []
```
