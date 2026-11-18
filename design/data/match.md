```mermaid
---
  title: Match Domain Model
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
    direction LR
%%    namespace "match"
%%    import "design/data/game/Game" as Game
%%    import "design/data/player/Player" as Player
%%  ToDo: Add more detailed descriptions for each class and attribute
%%  ToDo: Decide how best to represent the result of a Multi-Player Match
    class Match {
        <<entity>>
    }
    Match --> "1..*" Player : participants

    class MatchRound {
    }
    MatchRound --* Match
    MatchRound --> Game : game
    MatchRound --> Player : homePlayer

    class MatchResult {
        <<entity>>
        Integer pointsScored
        Boolean isWinner
    }
    MatchResult --> Player : player
    MatchResult --* MatchRound

%%    class MatchOutcome {
%%        <<enumeration>>
%%        HomeWin
%%        AwayWin
%%        Draw
%%    }

```

| Class       | Type   | Description                                              |
|-------------|--------|----------------------------------------------------------|
| Match       | Entity | An arrangement between two or more players to play Games |
| MatchRound  | Entity |                                                          |
| MatchResult | Entity |                                                          |
