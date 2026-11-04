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
```

## Vercel

Each app is a separate Vercel project with its **Root Directory** set to its `apps/*` folder.
