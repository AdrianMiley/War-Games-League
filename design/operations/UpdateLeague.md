---
title: Update League
layout: default
parent: Operations
nav_order: 10
---

# Update League

## Input

- Match selector: game name, date played, and participant names
- League table name and season

## Processing

1. Resolve the match using its game name, date, and participant names with case-insensitive name lookups. Resolve the league table by name and season. Reject missing or ambiguous matches or league tables.
2. Require the match to be `Played` and to have exactly one result for every participant. Confirm result player IDs are unique and belong to the match.
3. Apply the league's scoring and ranking rules to the match results. Update the affected players' league-position statistics, total points, proficiency points, and positions as required by those rules.
4. Set the match status to `Completed`.
5. Save the league table and completed match together. If either update fails, persist neither.

## Result

The league table reflects the completed match, and the match transitions from `Played` to `Completed`.

The data model identifies the league statistics to maintain but does not define scoring thresholds, point allocation, or tie-breaking rules. Those rules must be supplied by the league configuration before this operation can calculate updated values.

## Example input message

```yaml
message: updateLeague
match:
  game: Agricola
  datePlayed: 2026-12-05
  participants:
    - Alex Morgan
    - Jamie Lee
league:
  name: Spring League
  season: 2026
```

## Example generated data

Given that the match selector resolves to one played match with complete results (Alex Morgan scored 12 and Jamie Lee scored 8), and the configured scoring policy assigns the following totals and ranking:

```yaml
match:
  id: match-204
  status: Completed
leagueTable:
  name: Spring League
  season: 2026
  positions:
    - playerId: player-1001
      position: 1
      decisiveWin: 1
      closeWin: 0
      drawn: 0
      closeLoss: 0
      decisiveLoss: 0
      proficiencyPoints: 2
      totalPoints: 3
    - playerId: player-1002
      position: 2
      decisiveWin: 0
      closeWin: 0
      drawn: 0
      closeLoss: 0
      decisiveLoss: 1
      proficiencyPoints: 1
      totalPoints: 0
```

These example statistics depend on the configured scoring and ranking policy; the domain model alone does not determine them.
