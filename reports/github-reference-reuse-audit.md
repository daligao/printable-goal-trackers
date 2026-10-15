# GitHub reference reuse audit

Seven public repositories were reviewed at README, license, stack-summary, and necessary-directory level. No third-party code or assets were copied.

| Repo | Reference | Existing coverage | License | Decision |
| --- | --- | --- | --- | --- |
| the-book-of-secret-knowledge | Scannable sections | Four-item table is sufficient | MIT | REFERENCE ONLY |
| awesome | Concise contribution/licensing links | Already present | CC0 | REFERENCE ONLY |
| build-your-own-x | Task-first guidance | Downloads and build commands present | Not verified | REFERENCE ONLY |
| planner-generator | Explicit print scale/paper guidance | Present; PDF license wording required correction | MIT | ADOPT |
| Print_List | Markdown import / print preview | CutDone `/todo/` already accepts checkboxes, bullets, numbers, Any/In Order | MIT | REJECT |
| habit-template-gen | Treat PDF limits as test risks | Dual-paper one-page checks already present | MIT | REFERENCE ONLY |
| DailyPlanly | Printable-first/no-account positioning | Already present | Not verified | REFERENCE ONLY |

## Highest-value references

Keep a direct download path, state paper size/100% scale clearly, and avoid a large-list taxonomy for four templates.

## Actual change

PDF footers said "Free for personal use" while `CONTENT-LICENSE.md` grants CC BY 4.0. The shared renderer now says "Original content: CC BY 4.0". All eight PDFs and the ZIP were regenerated.

No queue, editor, icon library, Markdown importer, local-storage layer, or dependency was added. CutDone already provides conversion plus Any Order/In Order; this project stays downloads-first.
