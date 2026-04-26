import fs from "fs";
import path from "path";

export function loadJson(fileName: string) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}
