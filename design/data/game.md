```mermaid
classDiagram
    class Game {
        <<entity>>
        String ID <<key>>
        String name }

    class GameType {
        <<enumeration>>
        WarGame
        BoardGame
        CardGame
    }
```