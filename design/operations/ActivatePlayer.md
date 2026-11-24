---
title: Activate Player
layout: default
parent: Operations
nav_order: 2
---

# Activate Player

## Input

- Player name

## Processing

1. Find the player by name using a case-insensitive lookup. Reject the operation if no matching player exists or if the name matches more than one player.
2. Require the player's status to be `Inactive`; reject active or deleted players.
3. Set the player's status to `Active` and save the updated player.

## Result

The player is active and can participate in league operations.

## Example input message

```yaml
message: activatePlayer
playerName: Alex Morgan
```

## Example generated data

Given that `Alex Morgan` resolves case-insensitively to one player with status `Inactive`:

```yaml
player:
  id: player-1001
  status: Active
```
