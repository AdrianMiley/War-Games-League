import { readCsv, writeCsv, writeCsvAsync } from "../csv";
import { MatchResult } from "./MatchResult";

export class MatchResultManager {
  constructor(private filePath: string) {}

  create(id: string, pointsScored: number, playerID: string, matchRoundID: string): MatchResult {
    return new MatchResult(id, pointsScored, playerID, matchRoundID);
  }
  getAll(): MatchResult[] {
    const rows = readCsv(this.filePath);
    if (rows.length < 2) return [];
    return rows.slice(1).filter(row => row.length >= 4).map(row =>
      new MatchResult(row[0], Number(row[3]), row[2], row[1])
    );
  }
  get(id: string): MatchResult | undefined { return this.getAll().find(result => result.getId() === id); }
  add(result: MatchResult): void { const results = this.getAll(); results.push(result); this.saveResults(results); }
  delete(idOrResult: string | MatchResult): boolean {
    const id = typeof idOrResult === "string" ? idOrResult : idOrResult.getId();
    const results = this.getAll();
    const remaining = results.filter(result => result.getId() !== id);
    if (remaining.length === results.length) return false;
    this.saveResults(remaining); return true;
  }
  remove(idOrResult: string | MatchResult): boolean { return this.delete(idOrResult); }
  save(): void { this.saveResults(this.getAll()); }
  async saveAsync(): Promise<void> { await this.saveResultsAsync(this.getAll()); }
  private saveResults(results: MatchResult[]): void {
    writeCsv(this.filePath, ["ID", "matchRoundID", "playerID", "pointsScored"], results.map(result => [
      result.getId(), result.getMatchRoundID(), result.getPlayerID(), result.getPointsScored()
    ]));
  }
  private async saveResultsAsync(results: MatchResult[]): Promise<void> {
    await writeCsvAsync(this.filePath, ["ID", "matchRoundID", "playerID", "pointsScored"], results.map(result => [
      result.getId(), result.getMatchRoundID(), result.getPlayerID(), result.getPointsScored()
    ]));
  }
}
