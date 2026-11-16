# Archive

Sites retired from active development. Kept for reference; not part of the npm
workspaces, not built in CI, not listed in `scripts/vercel-projects.mjs`.

| App | Former domain | Archived |
| --- | --- | --- |
| `alpine-fence` | alpinefenceanddeck.com (business closed; was a noindex placeholder) | Nov 2026 |
| `apex-concrete` | apexconcreteutah.com (placeholder) | Nov 2026 |
| `braddock-concrete` | — | Nov 2026 |
| `harlow-landscapes` | harlowlandscapes.com | Nov 2026 |
| `spx-construction` | spxconstruction.com | Nov 2026 |

To revive one: `git mv archive/<app> apps/<app>`, add its `dev:`/`build:`
scripts back to the root `package.json`, re-add it to `scripts/vercel-projects.mjs`,
and run `npm install`. Remember to delete or pause the corresponding Vercel
project so it stops redeploying from this repo.
