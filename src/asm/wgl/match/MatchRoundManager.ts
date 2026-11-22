import { readCsv, writeCsv, writeCsvAsync } from "../csv";
import { MatchRound } from "./MatchRound";

export class MatchRoundManager {
  constructor(private filePath: string) {}

  create(id: string, datePlayed: Date, homePlayerID: string, gameID: string, matchID: string): MatchRound {
    return new MatchRound(id, datePlayed, homePlayerID, gameID, matchID);
  }
  getAll(): MatchRound[] {
    const rows = readCsv(this.filePath);
    if (rows.length < 2) return [];
    return rows.slice(1).filter(row => row.length >= 5).map(row =>
      new MatchRound(row[0], new Date(row[4]), row[2], row[3], row[1])
    );
  }
  get(matchID: string): MatchRound[] { return this.getAll().filter(round => round.getMatchID() === matchID); }
  add(round: MatchRound): void { const rounds = this.getAll(); rounds.push(round); this.saveRounds(rounds); }
  delete(matchID: string, datePlayed?: Date): boolean {
    const rounds = this.getAll();
    const remaining = rounds.filter(round =>
      round.getMatchID() !== matchID ||
      (datePlayed !== undefined && round.getDatePlayed().getTime() !== datePlayed.getTime())
    );
    if (remaining.length === rounds.length) return false;
    this.saveRounds(remaining);
    return true;
  }
  remove(matchID: string, datePlayed?: Date): boolean { return this.delete(matchID, datePlayed); }
  save(): void { this.saveRounds(this.getAll()); }
  async saveAsync(): Promise<void> { await this.saveRoundsAsync(this.getAll()); }
  private saveRounds(rounds: MatchRound[]): void {
    writeCsv(this.filePath, ["ID", "matchID", "homePlayerID", "gameID", "datePlayed"], rounds.map(round => [
      round.getID(), round.getMatchID(), round.getHomePlayerID(), round.getGameID(), round.getDatePlayed().toISOString()
    ]));
  }
  private async saveRoundsAsync(rounds: MatchRound[]): Promise<void> {
    await writeCsvAsync(this.filePath, ["ID", "matchID", "homePlayerID", "gameID", "datePlayed"], rounds.map(round => [
      round.getID(), round.getMatchID(), round.getHomePlayerID(), round.getGameID(), round.getDatePlayed().toISOString()
    ]));
  }
}
