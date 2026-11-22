---
title: League Table
layout: default
parent: Integrated Domain Model
nav_order: 5
---
#   League Table Domain Model

```mermaid
---
  title: League Domain Model
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
%%    namespace "league"
    class LeagueTable {
        <<entity>>
    }

    class LeaguePosition {
        <<entity>>
        Integer position
        Integer won
        Integer drawn
        Integer lost
        Integer proficiencyPoints
        Integer handicapPoints
        Integer totalPoints
    }
    LeagueTable *-- "1..*" LeaguePosition : position
    LeaguePosition --> "1" Player : player
```