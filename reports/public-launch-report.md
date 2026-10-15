# Public launch report: v1.0.0

## Published endpoints

- Repository: https://github.com/daligao/printable-goal-trackers
- Pages: https://daligao.github.io/printable-goal-trackers/
- Release: https://github.com/daligao/printable-goal-trackers/releases/tag/v1.0.0
- Tag: `v1.0.0` -> `2a2c4fe3b654dd933978b789a499b31973df26c7`

## Release checks

- Public repository: `main` is the default branch; description, homepage, and six
  relevant topics are configured.
- CI run `38747068501` passed on the tagged commit after installing Poppler for the
  existing PDF metadata check.
- Pages run `38747068532` passed on the tagged commit. The workflow was corrected
  to use a valid block-style `environment` expression and the official Pages setup
  action before deployment.
- Live Pages returned HTTP 200. Desktop and 390px browser checks found four loaded
  previews, four cards, no horizontal overflow, no broken responses, and the
  expected CutDone CTA/UTM URL.
- All eight live downloads returned HTTP 200 with `application/pdf` and `%PDF`
  signatures; A4 and US Letter paths were distinct.
- GitHub's rendered README loaded its preview image. The Release asset downloaded,
  passed `unzip -t`, and matched GitHub's SHA-256:
  `ef7a7fa02f398d87a4ec66cf7f794462a6802034db05b07c0f6c66203ec84b92`.

## License and scope

The source remains MIT; original worksheet content, PDFs, and previews remain CC
BY 4.0. The Release notes state that CutDone's name and logo are excluded. No
CutDone production system, payment service, database, DNS, or social account was
changed.

## Remaining limitation

No physical-printer Actual Size test was performed. Browser-rendered PDF and live
download checks passed; physical printing remains user-side validation.
