import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { templates } from "../src/data/templates.mjs";
const root = resolve(import.meta.dirname, "..");
for (const t of templates) {
  const target = resolve(root, "docs", "downloads", t.id);
  await mkdir(target, { recursive: true });
  for (const file of ["A4.pdf", "US-Letter.pdf"]) await cp(resolve(root, "templates", t.id, file), resolve(target, file));
}
console.log("Static download files built.");
