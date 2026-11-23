---
title: Game
layout: default
parent: Integrated Domain Model
nav_order: 2
---
#   Game Domain Model

```mermaid
---
  title: Game Domain Model
  config:
    class:
      hideEmptyMembersBox: true
---
%%    namespace "game"
classDiagram
    class GameType {
        <<enumeration>>
        WarGame
        BoardGame
        CardGame
    }
    class Game {
        <<entity>>
        String ID <<key>>
        GameType type
        String name
        GameComplexity complexity := Unspecified
        Integer minimumPlayers := 2
        Integer maximumPlayers := 2
        Boolean hasVariants := false
    }
    Game --> "0..1" Game : expands 

    class GameComplexity {
        0 : "Unspecified"
        1 : "Lightweight"
        2 : "Mediumweight"
        3 : "Heavyweight"
    } 
```