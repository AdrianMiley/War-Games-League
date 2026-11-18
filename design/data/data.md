```mermaid
classDiagram
    namespace  Game {
        class Game {
        }
    }

    namespace Player {
        class Player {
            <<entity>>
        }
        class RegisteredGame {
            Proficiency initialProficiency
            Proficiency currentProficiency
        }
    }

    namespace match {
        class Match {
            <<entity>>
        }
    }

    namespace League {
        class LeagueTable {
            <<entity>>
        }

        class LeaguePosition {
        }
    }
```