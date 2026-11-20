# Client sites monorepo

A factory for building and deploying client websites — independent Next.js 14 +
Tailwind sites in one repo, each deployed as its own Vercel project.

**The system and rules live in [PLAYBOOK.md](./PLAYBOOK.md).** Read it before
starting a site. It distills everything learned from the previous site families
(now in [`archive/`](./archive), kept as reference implementations).

## Active sites

| App | Path | Domain | Dev |
| --- | --- | --- | --- |
| Vitalea Wellness Center | `apps/vitalea-spa` | `vitaleaspa.com` | `npm run dev:vitalea` → http://localhost:3003 |

## Develop

```bash
npm install            # installs all workspaces
npm run dev:<key>      # see table above
npm run lint
```

## Deploy

One Vercel project per app (Root Directory = the app folder). Create/link
projects and trigger the first deploy with:

```bash
VERCEL_TOKEN=... node scripts/vercel-projects.mjs            # all apps
VERCEL_TOKEN=... VERCEL_TEAM=... node scripts/vercel-projects.mjs vitalea
```

Details, ignore-step behavior, and DNS are in the [playbook](./PLAYBOOK.md#7-vercel-deployment-system).

## Archived

`archive/` holds every retired site (the pergola family, American Timber Shade,
Relentless Equipment, and the older placeholders) plus their generator script
and brand assets. They're excluded from npm workspaces and from
`scripts/vercel-projects.mjs`; see `archive/README.md` for the revival steps.
