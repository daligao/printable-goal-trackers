import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { templates } from "../src/data/templates.mjs";

const exec = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const expected = { "A4.pdf": [595, 842], "US-Letter.pdf": [612, 792] };
for (const template of templates) {
  const folder = resolve(root, "templates", template.id);
  for (const name of ["README.md", "template.json", ...Object.keys(expected)]) await access(resolve(folder, name));
  const source = JSON.parse(await readFile(resolve(folder, "template.json"), "utf8"));
  if (source.id !== template.id || !source.title) throw new Error(`Invalid template data: ${template.id}`);
  for (const [name, [width, height]] of Object.entries(expected)) {
    const { stdout } = await exec("pdfinfo", [resolve(folder, name)]);
    const pages = Number(stdout.match(/^Pages:\s+(\d+)/m)?.[1]);
    const match = stdout.match(/^Page size:\s+([\d.]+) x ([\d.]+) pts/m);
    if (pages !== 1 || !match) throw new Error(`Invalid PDF structure: ${template.id}/${name}`);
    const actual = match.slice(1).map(Number);
    if (Math.abs(actual[0] - width) > 1 || Math.abs(actual[1] - height) > 1) throw new Error(`Wrong paper size: ${template.id}/${name} (${actual})`);
  }
  const preview = resolve(root, "previews", `${template.id}.png`);
  await access(preview);
  const { stdout } = await exec("file", [preview]);
  if (!stdout.includes("PNG image data")) throw new Error(`Invalid preview: ${template.id}`);
}
const files = await readdir(resolve(root, "previews"));
if (files.filter((name) => name.endsWith(".png")).length !== templates.length) throw new Error("Preview count mismatch");
console.log(`Verified ${templates.length} templates, ${templates.length * 2} one-page PDFs, and ${templates.length} PNG previews.`);
