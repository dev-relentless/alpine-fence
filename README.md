# Alpine + Harlow monorepo

Two independent Next.js sites in one repo, deployed as two Vercel projects.

| App                          | Path                  | Domain                                | Stack              |
| ---------------------------- | --------------------- | ------------------------------------- | ------------------ |
| Alpine Fence & Deck          | `apps/alpine-fence`   | `alpinefenceanddeck.com`              | Next 14, Tailwind  |
| Harlow & Stone Landscapes    | `apps/harlow-stone`   | `harlowandstonelandscapes.com`        | Next 14, Tailwind  |

## Develop

```bash
# From the repo root:
npm install                        # installs both workspaces

npm run dev --workspace=apps/alpine-fence   # http://localhost:3000
npm run dev --workspace=apps/harlow-stone   # http://localhost:3001
```

## Vercel

Each app is a separate Vercel project with its **Root Directory** set to its `apps/*` folder.
