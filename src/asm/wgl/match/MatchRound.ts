export class MatchRound {
  private id: string;
  private datePlayed: Date;
  private homePlayerID: string;
  private gameID: string;
  private matchID: string;

  constructor(id: string, datePlayed: Date, homePlayerID: string, gameID: string, matchID: string) {
    this.id = id;
    this.datePlayed = datePlayed;
    this.homePlayerID = homePlayerID;
    this.gameID = gameID;
    this.matchID = matchID;
  }

  getId(): string { return this.id; }
  getID(): string { return this.id; }
  setId(id: string): void { this.id = id; }
  setID(id: string): void { this.id = id; }

  getDatePlayed(): Date { return new Date(this.datePlayed); }
  setDatePlayed(datePlayed: Date): void { this.datePlayed = new Date(datePlayed); }
  getHomePlayer(): string { return this.homePlayerID; }
  getHomePlayerID(): string { return this.homePlayerID; }
  setHomePlayer(playerID: string): void { this.homePlayerID = playerID; }
  setHomePlayerID(playerID: string): void { this.homePlayerID = playerID; }
  getGame(): string { return this.gameID; }
  getGameID(): string { return this.gameID; }
  setGame(gameID: string): void { this.gameID = gameID; }
  setGameID(gameID: string): void { this.gameID = gameID; }
  getMatch(): string { return this.matchID; }
  getMatchID(): string { return this.matchID; }
  setMatch(matchID: string): void { this.matchID = matchID; }
  setMatchID(matchID: string): void { this.matchID = matchID; }
}
