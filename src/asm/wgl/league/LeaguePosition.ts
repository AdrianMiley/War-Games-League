export class LeaguePosition {
  constructor(
    private position: number,
    private won: number,
    private drawn: number,
    private lost: number,
    private proficiencyPoints: number,
    private handicapPoints: number,
    private totalPoints: number,
    private playerID: string,
    private matchesPlayed: number = won + drawn + lost,
    private bonusPoints: number = proficiencyPoints + handicapPoints
  ) {}

  getPosition(): number { return this.position; }
  setPosition(value: number): void { this.position = value; }
  getWon(): number { return this.won; }
  setWon(value: number): void { this.won = value; }
  getDrawn(): number { return this.drawn; }
  setDrawn(value: number): void { this.drawn = value; }
  getLost(): number { return this.lost; }
  setLost(value: number): void { this.lost = value; }
  getProficiencyPoints(): number { return this.proficiencyPoints; }
  setProficiencyPoints(value: number): void { this.proficiencyPoints = value; }
  getHandicapPoints(): number { return this.handicapPoints; }
  setHandicapPoints(value: number): void { this.handicapPoints = value; }
  getTotalPoints(): number { return this.totalPoints; }
  setTotalPoints(value: number): void { this.totalPoints = value; }
  getMatchesPlayed(): number { return this.matchesPlayed; }
  setMatchesPlayed(value: number): void { this.matchesPlayed = value; }
  getBonusPoints(): number { return this.bonusPoints; }
  setBonusPoints(value: number): void { this.bonusPoints = value; }
  getPlayer(): string { return this.playerID; }
  getPlayerID(): string { return this.playerID; }
  setPlayer(playerID: string): void { this.playerID = playerID; }
  setPlayerID(playerID: string): void { this.playerID = playerID; }
}
