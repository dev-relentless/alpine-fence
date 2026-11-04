# Spravek family monorepo

Independent Next.js sites in one repo, each deployed as its own Vercel project.

| App                  | Path                        | Domain                     | Stack             |
| -------------------- | --------------------------- | -------------------------- | ----------------- |
| Alpine Fence & Deck  | `apps/alpine-fence`         | `alpinefenceanddeck.com`   | Next 14, Tailwind |
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
```

## State pergola sites

`apps/arizona-pergola-experts` is the parameterized template for the "<State> Pergola Experts" family; Idaho, Nevada, Washington, and Colorado are stamped from it. Every geo/climate phrase reads from `src/data/brand.ts`, which is generated. To add or update a state, edit the config table in `scripts/new-pergola-state.mjs` and run:

```bash
npm run new:pergola-state -- colorado   # one state
npm run new:pergola-state -- --all      # re-propagate template changes to every state
```

## Vercel

Each app is a separate Vercel project with its **Root Directory** set to its `apps/*` folder.
