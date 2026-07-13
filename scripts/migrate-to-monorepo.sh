#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Migrate the Alpine Fence & Deck app into a monorepo layout.
#
#   /                     ← workspace root (this repo)
#   /apps/alpine-fence    ← existing Alpine Next.js app (moved here)
#   /apps/harlow-landscapes    ← already scaffolded
#
# Run ONCE from the repo root:
#
#     bash scripts/migrate-to-monorepo.sh
#
# After it finishes:
#   1. In the existing Alpine Vercel project, set
#        Settings → General → Root Directory = apps/alpine-fence
#      and redeploy.
#   2. Create a NEW Vercel project for Harlow Landscapes with
#        Root Directory = apps/harlow-landscapes
#      and attach the harlowlandscapes.com domain.
# ---------------------------------------------------------------------------
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

if [[ -d apps/alpine-fence/src ]]; then
  echo "apps/alpine-fence already populated — nothing to do."
  exit 0
fi

mkdir -p apps/alpine-fence

# Items to move into apps/alpine-fence/. Anything not in this list stays at the root.
ITEMS=(
  src
  public
  next.config.js
  next-env.d.ts
  tsconfig.json
  tailwind.config.ts
  postcss.config.js
  package.json
  package-lock.json
  .eslintrc.json
  LANDSCAPE_EXPANSION_PLAN.md
  PHOTO_SHOT_LIST.md
)

for item in "${ITEMS[@]}"; do
  if [[ -e "$item" ]]; then
    echo "moving $item → apps/alpine-fence/"
    git mv "$item" "apps/alpine-fence/$item"
  fi
done

# Replace the root README with a monorepo-aware version.
cat > README.md <<'EOF'
# Alpine + Harlow monorepo

Two independent Next.js sites in one repo, deployed as two Vercel projects.

| App                          | Path                  | Domain                                | Stack              |
| ---------------------------- | --------------------- | ------------------------------------- | ------------------ |
| Alpine Fence & Deck          | `apps/alpine-fence`   | `alpinefenceanddeck.com`              | Next 14, Tailwind  |
| Harlow Landscapes    | `apps/harlow-landscapes`   | `harlowlandscapes.com`        | Next 14, Tailwind  |

## Develop

```bash
# From the repo root:
npm install                        # installs both workspaces

npm run dev --workspace=apps/alpine-fence   # http://localhost:3000
npm run dev --workspace=apps/harlow-landscapes   # http://localhost:3001
```

## Vercel

Each app is a separate Vercel project with its **Root Directory** set to its `apps/*` folder.
EOF

# Write the root workspace package.json.
cat > package.json <<'EOF'
{
  "name": "alpine-harlow-monorepo",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev:alpine": "npm run dev --workspace=apps/alpine-fence",
    "dev:harlow": "npm run dev --workspace=apps/harlow-landscapes",
    "build:alpine": "npm run build --workspace=apps/alpine-fence",
    "build:harlow": "npm run build --workspace=apps/harlow-landscapes",
    "lint": "npm run lint --workspaces --if-present"
  }
}
EOF

git add README.md package.json

echo
echo "✓ Migration complete."
echo "  Next steps:"
echo "    1. rm -rf node_modules && npm install"
echo "    2. Update Vercel project Root Directory for the Alpine project → apps/alpine-fence"
echo "    3. Create a new Vercel project for Harlow with Root Directory → apps/harlow-landscapes"
echo "    4. Commit: git commit -m 'chore: migrate to monorepo (apps/alpine-fence + apps/harlow-landscapes)'"
