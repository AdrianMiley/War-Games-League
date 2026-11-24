--
title: Register Player
layout: default
parent: Operations
nav_order: 1
---

#   Register Player

## Input

- Player name and contact details
- Optional membership number
- One or more registered games, including game name, edition when applicable, and times played

## Processing

1. Reject the operation if the player is already registered.
2. Resolve each submitted game and edition to a game in the Games dataset. Reject unknown or ambiguous references.
3. Set each registered game's `timesPlayed`, defaulting to `0` when omitted, and calculate its initial proficiency from the play history and game complexity using the configured proficiency policy.
4. Set `dateRegistered` to the current date and `status` to `Active`.
5. Validate the player and all registered-game entries, then save the player.

## Example input message

```yaml
message: registerPlayer
name: John Smith
contactDetails: Facebook
membershipNumber: "1000"
registeredGames:
  - game: Agricola
    edition: "2016"
    timesPlayed: 2
  - game: Pandemic
    timesPlayed: 0
```

## Example generated data

Assuming these games resolve uniquely and the configured proficiency policy classifies two plays of mediumweight Agricola as `Beginner` and no plays of mediumweight Pandemic as `Novice`:

```yaml
player:
  id: player-1001
  name: John Smith
  contactDetails: Facebook
  membershipNumber: "1000"
  dateRegistered: 2026-11-24
  status: Active
  registeredGames:
    - gameId: agricola
      edition: "2016"
      timesPlayed: 2
      initialProficiency: Beginner
      currentProficiency: Beginner
    - gameId: pandemic
      edition: null
      timesPlayed: 0
      initialProficiency: Novice
      currentProficiency: Novice
```

The generated ID and proficiency values are illustrative; ID assignment and the proficiency policy are provided by the application.
