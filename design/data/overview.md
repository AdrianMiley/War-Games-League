---
title: Integrated Domain Model Overview
layout: default
parent: Application Design
nav_order: 1
---
#   Gaming League Integrated Domain Model Overview

```mermaid
---
  title: Gaming League Domain Model Overview
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
    namespace  game {
        class Game {
            <<entity>>
        }
    }

    namespace player {
        class Player {
            <<entity>>
        }
        class RegisteredGame {
        }
    }

    namespace match {
        class Match {
            <<entity>>
        }
    }
        
    namespace league {
        class LeagueTable {
            <<entity>>
        }

        class LeaguePosition {
        }
    }
    LeagueTable *-- "1..*" LeaguePosition : position
    LeaguePosition --> "1" Player : player
    Match --> Player : participants
    Player *-- RegisteredGame : registeredGames
    RegisteredGame --> Game : game
```

| Namespace        | Root Entity | Description                                                                           |
|------------------|-------------|---------------------------------------------------------------------------------------|
| [Game](game)     | Game        | The Game domain contains the definition of a game and its type.                       |
| [Player](player) | Player      | The Player domain contains the definition of a player and their attributes.           |
| [Match](match)   | Match       | The Match domain contains the definition of a match and its details.                  |
| [League](league) | LeagueTable | The LeagueTable domain contains the definition of the league table and its structure. |
