# Print quality verification

Date: 2026-10-15

## Automated checks

The Playwright generator successfully rendered all four original templates into
both A4 and US Letter output. The generator rejects document-height overflow and
horizontal content overflow before saving a PDF. `scripts/verify-output.mjs`
confirmed every file exists, each PDF has one page, page sizes match the intended
paper within one point, and each preview is a valid PNG.

| Template | A4 | US Letter | Preview | Result |
| --- | --- | --- | --- | --- |
| 30-Day Habit Challenge | 1 page, 595 x 842 pt | 1 page, 612 x 792 pt | PNG | Pass |
| 2027 Goals Tracker | 1 page, 595 x 842 pt | 1 page, 612 x 792 pt | PNG | Pass |
| 7-Day Declutter Challenge | 1 page, 595 x 842 pt | 1 page, 612 x 792 pt | PNG | Pass |
| Reading Challenge | 1 page, 595 x 842 pt | 1 page, 612 x 792 pt | PNG | Pass |

## Visual inspection

Rendered A4 PDF pages for all four templates were inspected at 150 DPI. Titles,
tables, check boxes, footer, and writable areas are legible; content stays inside
the 12 mm paper-safe margin; no clipped text, unintended page break, missing
footer, or color-dependent instruction was observed. The designs are grayscale
and suitable for ordinary monochrome printing.

## Remaining physical-printer limit

This verifies browser PDF output, not a particular physical printer's scaling or
non-printable edge. Each worksheet tells users to choose 100% / Actual Size.
