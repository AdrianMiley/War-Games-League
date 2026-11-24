---
title: Delete Player
layout: default
parent: Operations
nav_order: 8
---

# Delete Player

## Input

- Player name

## Processing

1. Find the player by name using a case-insensitive lookup. Reject missing or ambiguous names, or a player already deleted.
2. Set the player's status to `Deleted` and save the updated player.
3. Retain the player record and its registered-game details so existing match and league references remain valid; exclude the player from future operations that require an active player.

## Result

The player is logically deleted and cannot be reactivated.

## Example input message

```yaml
message: deletePlayer
playerName: Alex Morgan
```

## Example generated data

Given that `Alex Morgan` resolves case-insensitively to one registered player who is not already deleted:

```yaml
player:
  id: player-1001
  status: Deleted
  registeredGames:
    - gameId: agricola
      edition: "2016"
      timesPlayed: 5
```

The existing player and registered-game fields are retained; only the status changes.
