import { readCsv, writeCsv, writeCsvAsync } from "../csv";
import { LeagueTable } from "./LeagueTable";
import { LeaguePosition } from "./LeaguePosition";

export class LeagueTableManager {
  constructor(private filePath: string) {}

  create(positions: LeaguePosition[] = []): LeagueTable { return new LeagueTable(positions); }
  getAll(): LeagueTable[] {
    const rows = readCsv(this.filePath);
    if (rows.length < 2) return [new LeagueTable()];
    const positions = rows.slice(1).filter(row => row.length >= 8).map(row => {
      const won = Number(row[3]);
      const drawn = Number(row[4]);
      const lost = Number(row[5]);
      const bonusPoints = Number(row[6]);
      const position = new LeaguePosition(Number(row[1]), won, drawn, lost,
        bonusPoints, 0, Number(row[7]), row[0]);
      position.setMatchesPlayed(Number(row[2]));
      position.setBonusPoints(bonusPoints);
      return position;
    });
    return [new LeagueTable(positions)];
  }
  get(): LeagueTable { return this.getAll()[0]; }
  save(tableOrNothing?: LeagueTable): void {
    const table = tableOrNothing ?? this.get();
    this.saveTable(table);
  }
  async saveAsync(tableOrNothing?: LeagueTable): Promise<void> {
    const table = tableOrNothing ?? this.get();
    await this.saveTableAsync(table);
  }
  delete(_table?: LeagueTable): boolean { this.save(new LeagueTable()); return true; }
  remove(_positionOrPlayerID?: LeaguePosition | string): boolean {
    const table = this.get();
    if (_positionOrPlayerID) table.removePosition(_positionOrPlayerID);
    this.save(table); return true;
  }
  private saveTable(table: LeagueTable): void {
    writeCsv(this.filePath,
      ["playerID", "position", "matchesPlayed", "won", "drawn", "lost", "bonusPoints", "totalPoints"],
      table.getPositions().map(p => [p.getPlayerID(), p.getPosition(), p.getMatchesPlayed(), p.getWon(), p.getDrawn(),
        p.getLost(), p.getBonusPoints(), p.getTotalPoints()]));
  }
  private async saveTableAsync(table: LeagueTable): Promise<void> {
    await writeCsvAsync(this.filePath,
      ["playerID", "position", "matchesPlayed", "won", "drawn", "lost", "bonusPoints", "totalPoints"],
      table.getPositions().map(p => [p.getPlayerID(), p.getPosition(), p.getMatchesPlayed(), p.getWon(), p.getDrawn(),
        p.getLost(), p.getBonusPoints(), p.getTotalPoints()]));
  }
}
