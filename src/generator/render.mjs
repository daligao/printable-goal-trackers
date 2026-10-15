const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[char]));

const fieldMarkup = (fields) => fields.map((field) => `<label class="field"><span>${escapeHtml(field)}</span><i></i></label>`).join("");

function habitBody(template) {
  const days = Array.from({ length: template.days }, (_, index) => {
    const day = index + 1;
    return `<div class="day"><b>${day}</b><span aria-hidden="true"></span><small>Done</small></div>`;
  }).join("");
  return `<section class="habit-grid" aria-label="30 daily check-ins">${days}</section>
    <section class="weekly-notes"><h2>Weekly check-in</h2>${[1, 2, 3, 4].map((week) => `<div><b>Week ${week}</b><i></i></div>`).join("")}</section>`;
}

function goalsBody() {
  return `<section class="goal-table" aria-label="Goals table"><div class="goal-head"><b>Goal</b><b>Why it matters</b><b>Next action</b><b>Milestone / progress</b></div>${Array.from({ length: 4 }, () => '<div class="goal-row"><i></i><i></i><i></i><i></i></div>').join("")}</section><section class="review-box"><h2>Quarterly review</h2><p>What is working? What needs to change? What is the next kind action?</p><i></i><i></i></section>`;
}

function declutterBody(template) {
  return `<section class="task-list" aria-label="Seven daily declutter tasks">${template.tasks.map(([day, area, action]) => `<article><b>${escapeHtml(day)}</b><div><strong>${escapeHtml(area)}</strong><span>${escapeHtml(action)}</span></div><em aria-label="Completion box"></em></article>`).join("")}</section>`;
}

function readingBody() {
  return `<section class="reading-table" aria-label="Reading log"><div class="reading-head"><b>#</b><b>Book / author</b><b>Started</b><b>Finished</b><b>One note</b></div>${Array.from({ length: 10 }, (_, index) => `<div class="reading-row"><b>${index + 1}</b><i></i><i></i><i></i><i></i></div>`).join("")}</section><section class="review-box"><h2>Reading reflection</h2><p>A book I want to remember, share, or revisit:</p><i></i></section>`;
}

function bodyFor(template) {
  if (template.type === "habit") return habitBody(template);
  if (template.type === "goals") return goalsBody(template);
  if (template.type === "declutter") return declutterBody(template);
  return readingBody(template);
}

export function renderTemplate(template, paper) {
  const paperLabel = paper === "A4" ? "A4" : "US Letter";
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(template.title)} - ${paperLabel}</title><style>
@page { size: ${paper}; margin: 0; }
* { box-sizing: border-box; } body { margin: 0; color: #161616; background: #e7e7e7; font-family: Arial, Helvetica, sans-serif; } .sheet { width: ${paper === "A4" ? "210mm" : "8.5in"}; min-height: ${paper === "A4" ? "297mm" : "11in"}; margin: 0 auto; padding: 12mm; background: #fff; display: flex; flex-direction: column; gap: 5mm; } .eyebrow { margin: 0; font-size: 8pt; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; } h1 { margin: 0; max-width: 160mm; font-family: Georgia, serif; font-size: 27pt; line-height: 1; letter-spacing: -.035em; } .subtitle { margin: 0; font-size: 11pt; line-height: 1.35; } .purpose { border-left: 2.4pt solid #111; padding-left: 3mm; font-size: 9pt; line-height: 1.35; } .fields { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; } .field span { display: block; font-size: 7.7pt; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; } i { display: block; border-bottom: 1pt solid #161616; min-height: 6mm; } .habit-grid { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1pt solid #161616; border-left: 1pt solid #161616; } .day { min-height: 21mm; padding: 2.5mm; border-right: 1pt solid #161616; border-bottom: 1pt solid #161616; display: grid; grid-template-columns: 1fr auto; grid-template-rows: auto 1fr auto; } .day b { font-size: 11pt; } .day span { width: 5mm; height: 5mm; border: 1pt solid #161616; border-radius: 50%; } .day small { grid-column: 1 / -1; align-self: end; font-size: 7pt; letter-spacing: .08em; text-transform: uppercase; } h2 { margin: 0; font-size: 10pt; text-transform: uppercase; letter-spacing: .08em; } .weekly-notes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3mm 6mm; } .weekly-notes h2 { grid-column: 1 / -1; } .weekly-notes div { display: flex; gap: 2mm; align-items: end; font-size: 8pt; } .weekly-notes i { flex: 1; } .goal-table, .reading-table { border: 1pt solid #161616; } .goal-head, .goal-row { display: grid; grid-template-columns: 1.25fr 1.25fr 1.15fr 1.2fr; } .goal-head, .reading-head { background: #f1f1f1; font-size: 7.5pt; text-transform: uppercase; letter-spacing: .06em; } .goal-head b, .reading-head b, .goal-row > *, .reading-row > * { padding: 2.6mm; border-right: 1pt solid #161616; } .goal-head > *:last-child, .goal-row > *:last-child, .reading-head > *:last-child, .reading-row > *:last-child { border-right: 0; } .goal-row { min-height: 24mm; border-top: 1pt solid #161616; } .goal-row i { min-height: auto; border-bottom: 0; } .review-box { border: 1pt solid #161616; padding: 3.5mm; display: grid; gap: 2mm; } .review-box p { margin: 0; font-size: 8pt; line-height: 1.3; } .task-list { border-top: 1pt solid #161616; } .task-list article { display: grid; grid-template-columns: 19mm 1fr 8mm; gap: 3mm; align-items: center; min-height: 24mm; padding: 3mm 0; border-bottom: 1pt solid #161616; } .task-list article > b { font-size: 9pt; text-transform: uppercase; letter-spacing: .07em; } .task-list strong, .task-list span { display: block; } .task-list strong { font-size: 10pt; } .task-list span { font-size: 8.6pt; line-height: 1.3; margin-top: 1mm; } .task-list em { width: 6mm; height: 6mm; border: 1pt solid #161616; } .reading-head, .reading-row { display: grid; grid-template-columns: 9mm 1.6fr 19mm 19mm 1.1fr; } .reading-row { min-height: 13.5mm; border-top: 1pt solid #161616; } .reading-row b { font-size: 8pt; text-align: center; } .reading-row i { min-height: auto; border-bottom: 0; } .footer { margin-top: auto; padding-top: 3mm; border-top: .7pt solid #777; display: flex; justify-content: space-between; font-size: 7pt; letter-spacing: .04em; } @media screen { .sheet { box-shadow: 0 3mm 12mm #999; margin: 10mm auto; } } @media print { body { background: #fff; } .sheet { box-shadow: none; margin: 0; } }
</style></head><body><main class="sheet"><p class="eyebrow">Free printable worksheet - ${paperLabel}</p><header><h1>${escapeHtml(template.title)}</h1><p class="subtitle">${escapeHtml(template.subtitle)}</p></header><p class="purpose">${escapeHtml(template.purpose)}</p><section class="fields">${fieldMarkup(template.fields)}</section>${bodyFor(template)}<footer class="footer"><span>Print at 100% / Actual Size</span><span>Free for personal use</span></footer></main></body></html>`;
}
