import { readCsv, writeCsv, writeCsvAsync } from "../csv";
import { Match } from "./Match";

export class MatchManager {
  constructor(private filePath: string) {}

  create(id: string, dateScheduled = new Date(), participants: string[] = []): Match {
    const match = new Match(id, dateScheduled, participants);
    return match;
  }

  getAll(): Match[] {
    const rows = readCsv(this.filePath);
    if (rows.length < 2) return [];
    return rows.slice(1).filter(row => row.length >= 3).map(row =>
      new Match(row[0], new Date(row[2]), row[1] ? row[1].split("|").filter(Boolean) : [])
    );
  }

  get(id: string): Match | undefined { return this.getAll().find(match => match.getId() === id); }
  add(match: Match): void {
    const matches = this.getAll();
    matches.push(match);
    this.saveMatches(matches);
  }
  delete(idOrMatch: string | Match): boolean {
    const id = typeof idOrMatch === "string" ? idOrMatch : idOrMatch.getId();
    const matches = this.getAll();
    const remaining = matches.filter(match => match.getId() !== id);
    if (remaining.length === matches.length) return false;
    this.saveMatches(remaining);
    return true;
  }
  remove(idOrMatch: string | Match): boolean { return this.delete(idOrMatch); }
  save(): void { this.saveMatches(this.getAll()); }
  async saveAsync(): Promise<void> { await this.saveMatchesAsync(this.getAll()); }
  private saveMatches(matches: Match[]): void {
    writeCsv(this.filePath, ["ID", "participants", "dateScheduled"], matches.map(match => [
      match.getId(), match.getParticipants().join("|"), match.getDateScheduled().toISOString()
    ]));
  }
  private async saveMatchesAsync(matches: Match[]): Promise<void> {
    await writeCsvAsync(this.filePath, ["ID", "participants", "dateScheduled"], matches.map(match => [
      match.getId(), match.getParticipants().join("|"), match.getDateScheduled().toISOString()
    ]));
  }
}
