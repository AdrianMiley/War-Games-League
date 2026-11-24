---
title: Amend Registered Game
layout: default
parent: Operations
nav_order: 4
---

# Amend Registered Game

## Input

- Player name
- Current registered game's name and edition
- Any amended registered-game details: edition, times played, initial proficiency, or current proficiency

## Processing

1. Find the player by name using a case-insensitive lookup. Reject missing or ambiguous names, and require the player not to be deleted.
2. Find the registered-game entry by case-insensitive game-name lookup and edition on that player's record. Reject missing or ambiguous entries.
3. If the edition is being changed, confirm the referenced game exists and update the edition on that entry.
4. Apply the supplied changes to the registered-game entry. Keep fields not supplied unchanged.
5. Validate the amended values against their declared types and proficiency enumeration.
6. Save the updated player, preserving the requirement that the player has at least one registered game.

## Result

The player's existing registered-game entry contains the amended details without creating a duplicate entry for the same game.

When times played or game complexity changes, calculate initial proficiency using the same policy as [Register Player](RegisterPlayer). The data model does not define the calculation, so that policy must be provided by the application.

## Example input message

```yaml
message: amendRegisteredGame
playerName: Alex Morgan
registeredGame:
  game: Agricola
  edition: "2016"
changes:
  timesPlayed: 5
  currentProficiency: Intermediate
```

## Example generated data

Given that `Alex Morgan` resolves to one player whose matching entry previously had two plays and `Beginner` initial/current proficiency:

```yaml
player:
  id: player-1001
  registeredGames:
    - gameId: agricola
      edition: "2016"
      timesPlayed: 5
      initialProficiency: Beginner
      currentProficiency: Intermediate
```
