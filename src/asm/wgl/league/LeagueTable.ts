import { LeaguePosition } from "./LeaguePosition";

export class LeagueTable {
  private positions: LeaguePosition[];
  constructor(positions: LeaguePosition[] = []) { this.positions = [...positions]; }

  getPositions(): LeaguePosition[] { return [...this.positions]; }
  setPositions(positions: LeaguePosition[]): void { this.positions = [...positions]; }
  addPosition(position: LeaguePosition): void { this.positions.push(position); }
  removePosition(positionOrPlayerID: LeaguePosition | string): void {
    const playerID = typeof positionOrPlayerID === "string" ? positionOrPlayerID : positionOrPlayerID.getPlayerID();
    this.positions = this.positions.filter(position => position.getPlayerID() !== playerID);
  }
}
