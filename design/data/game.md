---
title: Game
layout: default
parent: Data Domain Models
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
        String ID 
        GameType type
        String name
        String description
    }
    class BoardGame {
        Integer minimumPlayers
        Integer maximumPlayers
    }
%%    class BaseGame {}
%%    class Expansion {}
    Game <|-- BoardGame 
    Game <|-- CardGame 
    Game <|-- WarGame
    BoardGame <|-- BaseGame
    BoardGame <|-- Expansion 
    Expansion --> BaseGame : baseGame
```