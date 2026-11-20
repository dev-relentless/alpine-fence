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
| `american-timber-shade` | americantimbershade.com | Nov 2026 |
| `arizona-pergola-experts` | arizonapergolaexperts.com (the state-site template) | Nov 2026 |
| `colorado-pergola-experts` | coloradopergolaexperts.com | Nov 2026 |
| `idaho-pergola-experts` | idahopergolaexperts.com | Nov 2026 |
| `nevada-pergola-experts` | nevadapergolaexperts.com | Nov 2026 |
| `relentless-equipment` | relentlessequipment.com | Nov 2026 |
| `spravek-reserve` | spravekreserve.com (placeholder) | Nov 2026 |
| `utah-pergola-experts` | utahpergolaexperts.com | Nov 2026 |
| `utah-pool-experts` | — | Nov 2026 |
| `washington-pergola-experts` | washingtonpergolaexperts.com | Nov 2026 |
| `wyoming-pergola-experts` | wyomingpergolaexperts.com | Nov 2026 |

Also archived here: `new-pergola-state.mjs` (the state-site generator — ran against
`apps/arizona-pergola-experts`, now `archive/arizona-pergola-experts`) and `brand/`
(logo/brand assets for ATS and Spravek Reserve).

To revive one: `git mv archive/<app> apps/<app>`, add its `dev:`/`build:`
scripts back to the root `package.json`, re-add it to `scripts/vercel-projects.mjs`,
and run `npm install`. Remember to delete or pause the corresponding Vercel
project so it stops redeploying from this repo.
