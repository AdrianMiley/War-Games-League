export class MatchResult {
  private id: string;
  private pointsScored: number;
  private playerID: string;
  private matchRoundID: string;

  constructor(id: string, pointsScored: number, playerID: string, matchRoundID: string) {
    this.id = id;
    this.pointsScored = pointsScored;
    this.playerID = playerID;
    this.matchRoundID = matchRoundID;
  }

  getId(): string { return this.id; }
  getID(): string { return this.id; }
  setId(id: string): void { this.id = id; }
  setID(id: string): void { this.id = id; }
  getPointsScored(): number { return this.pointsScored; }
  setPointsScored(points: number): void { this.pointsScored = points; }
  getPlayer(): string { return this.playerID; }
  getPlayerID(): string { return this.playerID; }
  setPlayer(playerID: string): void { this.playerID = playerID; }
  setPlayerID(playerID: string): void { this.playerID = playerID; }
  getMatchRound(): string { return this.matchRoundID; }
  getMatchRoundID(): string { return this.matchRoundID; }
  setMatchRound(matchRoundID: string): void { this.matchRoundID = matchRoundID; }
  setMatchRoundID(matchRoundID: string): void { this.matchRoundID = matchRoundID; }
}
