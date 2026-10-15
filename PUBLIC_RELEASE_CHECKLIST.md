# Public release checklist

## Proposed repository

`printable-goal-trackers` — create only after owner approval.

## Verify before publishing

1. Confirm the intended GitHub account and that no existing repository will be overwritten.
2. Review the tracked files, particularly `templates/`, `previews/`, `docs/`, licenses, workflows, and release ZIP.
3. Run `npm run build && npm test && npm run verify` on a clean checkout.
4. Confirm original content is CC BY 4.0, code is MIT, and CutDone branding is not granted for reuse.
5. Rescan for credentials, personal data, private CutDone code, and third-party assets.
6. Push only after explicit approval; then enable Pages using the `docs/` artifact workflow.
7. Create the v1.0.0 Release and attach `printable-goal-trackers-v1.0.0.zip` only after checking its contents.
8. Verify live Pages downloads, mobile layout, CTA UTM parameters, and Release assets.

## Rollback

Disable Pages, remove or unpublish the Release, and make the repository private if an accidental disclosure or licensing defect is found. Rotate any exposed credential outside this repository immediately.
