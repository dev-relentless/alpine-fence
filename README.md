# Spravek family monorepo

Independent Next.js sites in one repo, each deployed as its own Vercel project.

| App                  | Path                        | Domain                     | Stack             |
| -------------------- | --------------------------- | -------------------------- | ----------------- |
| Alpine Fence & Deck  | `apps/alpine-fence`         | `alpinefenceanddeck.com` (closed — noindex placeholder) | Next 14, Tailwind |
| Harlow Landscapes    | `apps/harlow-landscapes`    | `harlowlandscapes.com`     | Next 14, Tailwind |
| SPX Construction     | `apps/spx-construction`     | `spxconstruction.com`      | Next 14, Tailwind |
| Relentless Equipment | `apps/relentless-equipment` | `relentlessequipment.com`  | Next 14, Tailwind |
| Braddock Concrete    | `apps/braddock-concrete`    | —                          | Next 14, Tailwind |
| Utah Pergola Experts | `apps/utah-pergola-experts` | `utahpergolaexperts.com`   | Next 14, Tailwind |
| Utah Pool Experts    | `apps/utah-pool-experts`    | —                          | Next 14, Tailwind |
| American Timber Shade| `apps/american-timber-shade`| `americantimbershade.com`  | Next 14, Tailwind |
| Arizona Pergola Experts | `apps/arizona-pergola-experts`| `arizonapergolaexperts.com` | Next 14, Tailwind |
| Idaho Pergola Experts | `apps/idaho-pergola-experts`| `idahopergolaexperts.com`  | Next 14, Tailwind |
| Nevada Pergola Experts | `apps/nevada-pergola-experts`| `nevadapergolaexperts.com` | Next 14, Tailwind |
| Washington Pergola Experts | `apps/washington-pergola-experts`| `washingtonpergolaexperts.com` | Next 14, Tailwind |
| Colorado Pergola Experts | `apps/colorado-pergola-experts`| `coloradopergolaexperts.com` | Next 14, Tailwind |
| Apex Concrete        | `apps/apex-concrete`        | — (placeholder `apexconcreteutah.com`) | Next 14, Tailwind |
| Spravek Reserve      | `apps/spravek-reserve`      | — (placeholder `spravekreserve.com`) | Next 14, Tailwind |

## Develop

```bash
# From the repo root:
npm install                        # installs all workspaces

npm run dev:alpine       # http://localhost:3000
npm run dev:harlow       # http://localhost:3001
npm run dev:spx          # http://localhost:3002
npm run dev:relentless   # http://localhost:3003
npm run dev:braddock     # http://localhost:3004
npm run dev:pergola      # http://localhost:3005
npm run dev:pool         # http://localhost:3006
npm run dev:ats          # http://localhost:3007
npm run dev:arizona      # http://localhost:3008
npm run dev:idaho        # http://localhost:3009
npm run dev:nevada       # http://localhost:3010
npm run dev:washington   # http://localhost:3011
npm run dev:colorado     # http://localhost:3012
npm run dev:apex         # http://localhost:3013
npm run dev:reserve      # http://localhost:3014
```

## American Timber Shade + Pergola Experts (the site family)

`apps/american-timber-shade` is the **national brand**; the six `apps/<state>-pergola-experts`
sites are its state arms — the SynLawn model (synlawn.com → synlawnutah.com): one national
hub with a `/locations` directory, and a full standalone site per state (own phone, service
area, quote flow) that shares the brand and links back.

`apps/arizona-pergola-experts` is the parameterized template; **Utah**, Idaho, Nevada, Washington,
and Colorado are stamped from it. Every geo/climate phrase reads from `src/data/brand.ts`, and
the list of every site in the family lives in `src/data/network.ts` — both are generated into
each state app *and* into ATS. To add or update a state, edit the config table in
`scripts/new-pergola-state.mjs` and run:

```bash
npm run new:pergola-state -- colorado   # one state
npm run new:pergola-state -- --all      # re-propagate template changes to every state + ATS network.ts
```

How the sites link (kept deliberately within Google's spam policies — no keyword-rich
sitewide footer blasts, no funnelling to one page, nothing hidden):

| Where | State site | ATS |
| --- | --- | --- |
| Header | thin bar: "Pergola Experts is the *State* arm of **American Timber Shade**" + "Other states →" | `Locations` nav item |
| `/locations` | you-are-here card, sibling states (region, cities, phone, link), ATS block; `ItemList` JSON-LD | every state site with region/cities/phone; `ItemList` JSON-LD |
| Footer | "Pergola Experts" column — state names only, current state unlinked; ATS + Spravek in the bottom bar | "Pergola Experts" column — state names + "All locations" |
| JSON-LD | `Organization.parentOrganization` → `https://americantimbershade.com#organization` | `Organization.subOrganization` → each `https://<state>pergolaexperts.com#organization` |
| `llms.txt` | generated route; names ATS + sister states | generated route; lists all state sites |

Each state site also carries its own genuinely state-specific content (climate engineering,
counties, cities, FAQ) and per-page canonicals, so the family reads as one business with real
local arms rather than a doorway network.

Before launch, the five new state phones (`555-01xx`) are placeholders — fake NAP data across
multiple sites is itself a spam signal, so replace them in the script before the sites index.

## Vercel

Each app is a separate Vercel project with its **Root Directory** set to its `apps/*` folder. Vercel does **not** create projects for new folders automatically — a new app needs a project before its first deploy.

`scripts/vercel-projects.mjs` creates/links the projects (root directory, framework, GitHub link, production domain) and triggers a first production deployment from `main`:

```bash
VERCEL_TOKEN=<token from vercel.com/account/tokens> node scripts/vercel-projects.mjs            # all new apps
VERCEL_TOKEN=... VERCEL_TEAM=<team slug or id> node scripts/vercel-projects.mjs ats colorado   # subset, under a team
```

Or manually in the dashboard: **Add New → Project → Import `dev-relentless/alpine-fence`**, set Root Directory to the app folder, Framework = Next.js, then add the domain under Settings → Domains.
