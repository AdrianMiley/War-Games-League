import * as fs from "node:fs";
import * as path from "node:path";

export function escapeCsv(value: unknown): string {
  if (value === null || value === undefined) return "";
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"'; i++;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field); field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = "";
    } else {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field.replace(/\r$/, "")); rows.push(row);
  }
  return rows;
}

export function ensureParentDirectory(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

export function writeCsv(filePath: string, headers: string[], records: unknown[][]): void {
  ensureParentDirectory(filePath);
  const lines = [headers.map(escapeCsv).join(",")];
  for (const record of records) lines.push(record.map(escapeCsv).join(","));
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

export async function writeCsvAsync(filePath: string, headers: string[], records: unknown[][]): Promise<void> {
  ensureParentDirectory(filePath);
  const lines = [headers.map(escapeCsv).join(",")];
  for (const record of records) lines.push(record.map(escapeCsv).join(","));
  await fs.promises.writeFile(filePath, `${lines.join("\n")}\n`, "utf8");
}

export function readCsv(filePath: string): string[][] {
  if (!fs.existsSync(filePath)) return [];
  return parseCsv(fs.readFileSync(filePath, "utf8"));
}
