import { mkdir, writeFile, rm, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";
import { templates } from "../src/data/templates.mjs";
import { renderTemplate } from "../src/generator/render.mjs";

const root = resolve(import.meta.dirname, "..");
const paperSizes = [{ name: "A4", width: "210mm", height: "297mm" }, { name: "US-Letter", width: "8.5in", height: "11in" }];
const templateReadme = (template) => `# ${template.title}\n\n${template.purpose}\n\n## Print and use\n\n${template.instructions.map((item, index) => `${index + 1}. ${item}`).join("\n")}\n\nPrint at **100% / Actual Size**. Both A4 and US Letter PDFs are included.\n\nThe worksheet is an original, printer-friendly resource from the printable-goal-trackers project.\n`;

await rm(resolve(root, "tmp", "render"), { recursive: true, force: true });
await mkdir(resolve(root, "tmp", "render"), { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const template of templates) {
    const target = resolve(root, "templates", template.id);
    await mkdir(target, { recursive: true });
    await writeFile(resolve(target, "template.json"), `${JSON.stringify(template, null, 2)}\n`);
    await writeFile(resolve(target, "README.md"), templateReadme(template));
    for (const paper of paperSizes) {
      const html = renderTemplate(template, paper.name === "A4" ? "A4" : "Letter");
      const htmlPath = resolve(root, "tmp", "render", `${template.id}-${paper.name}.html`);
      await writeFile(htmlPath, html);
      const page = await browser.newPage({ viewport: { width: 1240, height: 1754 }, deviceScaleFactor: 1 });
      await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
      const overflow = await page.evaluate(() => ({ body: document.documentElement.scrollHeight > document.documentElement.clientHeight + 2, elements: [...document.querySelectorAll(".sheet *")].filter((el) => el.scrollWidth > el.clientWidth + 2).map((el) => `${el.tagName}.${el.className}`).slice(0, 5) }));
      if (overflow.body || overflow.elements.length) throw new Error(`${template.id} ${paper.name} has layout overflow: ${JSON.stringify(overflow)}`);
      await page.pdf({ path: resolve(target, `${paper.name}.pdf`), width: paper.width, height: paper.height, printBackground: true, preferCSSPageSize: true, margin: { top: "0", right: "0", bottom: "0", left: "0" } });
      if (paper.name === "A4") await page.screenshot({ path: resolve(root, "previews", `${template.id}.png`), fullPage: true });
      await page.close();
    }
  }
  await mkdir(resolve(root, "docs", "assets", "previews"), { recursive: true });
  for (const template of templates) await cp(resolve(root, "previews", `${template.id}.png`), resolve(root, "docs", "assets", "previews", `${template.id}.png`));
} finally { await browser.close(); }
console.log(`Generated ${templates.length} templates, ${templates.length * paperSizes.length} PDFs, and ${templates.length} previews.`);
