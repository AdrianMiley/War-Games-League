---
title: Deactivate Player
layout: default
parent: Operations
nav_order: 7
---

# Deactivate Player

## Input

- Player name

## Processing

1. Find the player by name using a case-insensitive lookup. Reject missing or ambiguous names.
2. Require the player's status to be `Active`; reject inactive or deleted players.
3. Set the player's status to `Inactive` and save the updated player.

## Result

The player remains registered but inactive.

## Example input message

```yaml
message: deactivatePlayer
playerName: Alex Morgan
```

## Example generated data

Given that `Alex Morgan` resolves case-insensitively to one active player:

```yaml
player:
  id: player-1001
  status: Inactive
```
