import test from "node:test";
import assert from "node:assert/strict";
import { templates } from "../src/data/templates.mjs";
import { renderTemplate } from "../src/generator/render.mjs";

test("the initial library contains four original templates", () => {
  assert.equal(templates.length, 4);
  assert.equal(new Set(templates.map(({ id }) => id)).size, 4);
  for (const template of templates) {
    assert.match(template.id, /^[a-z0-9-]+$/);
    assert.ok(template.title.length > 5);
    assert.equal(template.instructions.length, 3);
  }
});

test("every template renders A4 and Letter print markup", () => {
  for (const template of templates) {
    for (const paper of ["A4", "Letter"]) {
      const html = renderTemplate(template, paper);
      assert.match(html, new RegExp(template.title));
      assert.match(html, new RegExp(`size: ${paper}`));
      assert.match(html, /@media print/);
    }
  }
});
