export class Match {
  private id: string;
  private dateScheduled: Date;
  private participants: string[];

  constructor(id: string, dateScheduled: Date = new Date(), participants: string[] = []) {
    this.id = id;
    this.dateScheduled = dateScheduled;
    this.participants = [...participants];
  }

  getID(): string { return this.id; }
  setID(id: string): void { this.id = id; }
  getId(): string { return this.id; }
  setId(id: string): void { this.id = id; }
  getDateScheduled(): Date { return new Date(this.dateScheduled); }
  setDateScheduled(dateScheduled: Date): void { this.dateScheduled = new Date(dateScheduled); }
  getParticipants(): string[] { return [...this.participants]; }
  setParticipants(participants: string[]): void { this.participants = [...participants]; }
  addParticipant(playerID: string): void {
    if (!this.participants.includes(playerID)) this.participants.push(playerID);
  }
  removeParticipant(playerID: string): void {
    this.participants = this.participants.filter(id => id !== playerID);
  }
}
