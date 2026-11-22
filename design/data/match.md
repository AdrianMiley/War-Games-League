---
title: Match
layout: default
parent: Integrated Domain Model
nav_order: 4
---
#   Match Domain Model 

```mermaid
---
  title: Match Domain Model
  config:
    class:
      hideEmptyMembersBox: true
---
%%    namespace "match"
%%    import "design/data/game/Game" as Game
%%    import "design/data/player/Player" as Player
classDiagram
    class Match{
        <<entity>>
        String ID <<key>>
        Date datePlayed    
        MatchStatus status := Arranged
    }
    Match --> Game : game
    Match --> "2..*" Player : participants
    
    class MatchResult {
        Integer pointsScored
    }
    Match *-- MatchResult : results
    MatchResult --> Player : player
    
    class MatchStatus {
        <<enumeration>>
        Arranged
        Played
        Completed
    }
```
Validation Rules:
-    Each Match::participants::ID is unique 
-    Each Match::results::ID is unique
-    Each Match::results::player is in Match.participants
-    When number of Match::results is 0 then Match.status is Arranged
-    When number of Match::results is greater than 0 then  Match.status is Played
-    When number of Match::results equals number of Match::participants then Match.status is Completed.
