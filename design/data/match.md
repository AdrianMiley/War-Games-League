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
        Date dateScheduled
    }
    Match --> "2..*" Player : participants
    
    class MatchRound{
        Date datePlayed        
    }
    MatchRound --> Player : homePlayer
    MatchRound --* Match
    MatchRound --> Game : game
    
    class MatchResult {
        <<entity>>
        Integer pointsScored
    }
    MatchResult --> Player : player
    MatchResult --> MatchRound
```