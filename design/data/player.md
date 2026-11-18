```mermaid
---
  title: Player Domain Model
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
%%    namespace "player"
%%    import "design/data/game/Game" as Game
    class Player {
        <<entity>>
        String ID <<key>>
        String name
        Date dateRegistered
    }

    class RegisteredGame {
        String edition
        Integer gamesPlayed
        Proficiency initialProficiency
        Proficiency currentProficiency
    }

    Player *-- RegisteredGame : registeredGames
    RegisteredGame --> Game : game

    class Proficiency {
        <<enumeration>>
        1 "NotPlayed"
        2 "Beginner"
        3 "Intermediate"
        4 "Advanced"
        5 "Expert"
    }
```