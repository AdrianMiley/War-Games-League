---
title: Player
layout: default
parent: Integrated Domain Model
nav_order: 3
---
#    Player Domain Model

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
        String contactDetails
        String membershipNumber <<optional>>
        Date dateRegistered
        PlayerStatus status := Active
    }

    class RegisteredGame {
        String edition
        Integer timesPlayed := 0
        Proficiency initialProficiency
        Proficiency currentProficiency
    }

    Player *-- "1..*" RegisteredGame : registeredGames
    RegisteredGame --> Game : game

    class Proficiency {
        <<enumeration>>
        1 : "Novice"
        2 : "Beginner"
        3 : "Intermediate"
        4 : "Advanced"
        5 : "Expert"
    }
    class PlayerStatus {
        <<enumeration>>
        Active
        Inactive
        Deleted
    }
```

##  State Machine

```mermaid
---
title: Match State Machine
---
stateDiagram-v2
    direction LR
    state Registered {
        Active
        Inactive
    }
    [*] --> Registered : registerPlayer
    Active --> Inactive : deactivatePlayer
    Inactive --> Active : activatePlayer
    Registered --> Registered : amendRegisteredGame
    Registered --> [*] : deletePlayer
```

| operation             | Summary of operation                                                                                                                                                                    |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Register Player       |                                                                                                                                                                                         |
| Amend Registered Game | adds or removed a Game from the Player's Registered Games list. It does **not** amend the details of the Registered Game itself.                                                        |
| Delete Player         | Removes a Player from the Player dataset only if they have not played a Match. Players that have played a Match are recorded as "Deleted" and not physically removed frpom the dataset. |
| Deactivate Player     |                                                                                                                                                                                         |
| Activate PLayer       |                                                                                                                                                                                         |