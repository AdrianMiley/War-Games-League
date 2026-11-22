import { LeaguePosition } from "./LeaguePosition";

export class LeaguePositionManager {
  constructor() {}
  create(position: number, won: number, drawn: number, lost: number, proficiencyPoints: number,
    handicapPoints: number, totalPoints: number, playerID: string): LeaguePosition {
    return new LeaguePosition(position, won, drawn, lost, proficiencyPoints, handicapPoints, totalPoints, playerID);
  }
  delete(_position: LeaguePosition): boolean { return true; }
  save(): void {}
}
