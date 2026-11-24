---
title: Cancel Match
layout: default
parent: Operations
nav_order: 6
---

# Cancel Match

## Input

- Match selector: game name, date played, and participant names

## Processing

1. Resolve the match using its game name, date, and participant names with case-insensitive name lookups. Reject missing or ambiguous matches.
2. Require the match status to be `Arranged`; reject matches that are already played, completed, or cancelled.
3. Set the match status to `Cancelled` and save the updated match.

## Result

The match remains recorded with its participants and is no longer available for result recording.

## Example input message

```yaml
message: cancelMatch
match:
  game: Agricola
  datePlayed: 2026-12-05
  participants:
    - Alex Morgan
    - Jamie Lee
```

## Example generated data

Given that the selector resolves to one arranged match:

```yaml
match:
  id: match-204
  status: Cancelled
  participants:
    - player-1001
    - player-1002
  results: []
```
