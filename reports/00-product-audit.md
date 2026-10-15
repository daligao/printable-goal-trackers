# CutDone product audit and open-source direction

**Date:** 2026-10-15  
**Scope:** read-only review of `/Users/mym6/Projects/AI-Web-Business/sites/cutdone.com/project`. No CutDone source, configuration, database, or deployment state was changed.

## Evidence-based product summary

CutDone is a print-first goal-strip designer: users create a board, print it,
then cut or tear off completed steps. Its own product specification identifies
individual goal/challenge users as the primary audience. The production source
is static HTML and vanilla JavaScript, hosted with Cloudflare Pages; a Cloudflare
Worker provides selected APIs and paid entitlement functionality.

Verified routes include `/`, `/2027`, `/goal-breakdown`, `/designer`,
`/designerpro-any-order`, and `/designerpro-in-order`. The source also contains
template landing pages such as `templates/declutter-30-things/`.

## Free and paid boundary

`js/pro/pro-tier.js` documents that free Classic designs support design, print,
PNG, PDF, QR code, custom colors, and Classic palettes. Pro is a $4.99 one-time
purchase for styled themes, decorative marks/stickers, certain header styles,
and expanded AI-goal-breakdown usage. `js/pro/pro-export.js` enforces this
boundary before exporting a design using premium features. Payment, entitlement,
Worker, D1, AI-provider, analytics, and trial code are private implementation
and are excluded from the new project.

## Candidate-template assessment

| Template | Public suitability | Direction |
| --- | --- | --- |
| 30-Day Habit Challenge | Suitable | Original 30-day check-in grid and practical use guide. |
| 2027 Goals Tracker | Suitable | Original goal/action/milestone/progress worksheet; do not copy existing 2027 copy or layouts. |
| 7-Day Declutter Challenge | Suitable | Original, bounded home-organization prompts with no safety/medical claims. |
| Reading Challenge | Suitable | Original reading-goal and reading-log worksheet. |

All four can be independently useful as fixed, printable files. They should be
newly written rather than exports of CutDone templates, avoiding uncertain
copyright ownership and product-feature coupling.

## Audience and conversion fit

The closest GitHub audience is a technically comfortable person looking for a
reproducible, printer-ready tracker, a contributor who wants to add a template,
or someone who prefers downloadable files. CutDone's direct audience is broader:
individuals planning goals and challenges, many of whom will not use GitHub.
The repository therefore needs plain PDF downloads and clear usage instructions,
not a developer-only workflow. A truthful, occasional link to CutDone is a
reasonable conversion path when a user needs to customize text, layout, or their
own goal; downloading and using every free PDF must remain account-free.

## Recommended technical direction

Use a small Node project with original structured content, HTML/CSS layouts, and
Playwright/Chromium rendering. It provides one source of truth for printable
layout, native CSS `@page` support for both A4 and US Letter, PDF output, and
PNG previews. This is simpler and more maintainable than porting the browser
application's client-side canvas/PDF code, and it keeps the repository separate
from CutDone's runtime and dependencies.

## Public-content and security rules

- Include only newly authored template text, layouts, and locally generated PDFs/previews.
- Do not include CutDone source code, Pro styles, stickers, logos/brand graphics,
  existing template copy, private APIs, payment/entitlement code, analytics IDs,
  Worker/D1 configuration, tokens, or trial operations material.
- Treat CutDone as a trademark/attribution reference only; later licensing must
  state that the name and logo are not granted for reuse.
- Avoid health, legal, financial, or safety claims in free-template instructions.

## Package-A plan

1. Create a reusable data-to-HTML-to-PDF/PNG generator and prove it with one
   complete template.
2. Generate the other three templates from the same engine and verify print
   dimensions, overflow, and previews.
3. Add repository documentation and a static GitHub Pages site only after the
   generated files are real and validated.
