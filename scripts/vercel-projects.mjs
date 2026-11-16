#!/usr/bin/env node
/**
 * Create (or verify) a Vercel project for each app in this monorepo, linked to
 * the GitHub repo with the correct Root Directory, then trigger a first
 * deployment from `main`.
 *
 *   VERCEL_TOKEN=... node scripts/vercel-projects.mjs            # all apps below
 *   VERCEL_TOKEN=... node scripts/vercel-projects.mjs ats idaho  # a subset
 *   VERCEL_TOKEN=... VERCEL_TEAM=team_xxx node scripts/vercel-projects.mjs
 *
 * Token: https://vercel.com/account/tokens (scope it to the team that owns the
 * existing sites). VERCEL_TEAM is the team id or slug if the projects live
 * under a team rather than your personal account. Safe to re-run — existing
 * projects are left alone and only re-deployed.
 */

const REPO = 'dev-relentless/alpine-fence';
const BRANCH = 'main';

/** key → { project name on Vercel, app folder, production domain } */
const APPS = {
  ats:        { name: 'american-timber-shade',      dir: 'apps/american-timber-shade',      domain: 'americantimbershade.com' },
  arizona:    { name: 'arizona-pergola-experts',    dir: 'apps/arizona-pergola-experts',    domain: 'arizonapergolaexperts.com' },
  idaho:      { name: 'idaho-pergola-experts',      dir: 'apps/idaho-pergola-experts',      domain: 'idahopergolaexperts.com' },
  nevada:     { name: 'nevada-pergola-experts',     dir: 'apps/nevada-pergola-experts',     domain: 'nevadapergolaexperts.com' },
  washington: { name: 'washington-pergola-experts', dir: 'apps/washington-pergola-experts', domain: 'washingtonpergolaexperts.com' },
  colorado:   { name: 'colorado-pergola-experts',   dir: 'apps/colorado-pergola-experts',   domain: 'coloradopergolaexperts.com' },
  wyoming:    { name: 'wyoming-pergola-experts',    dir: 'apps/wyoming-pergola-experts',    domain: 'wyomingpergolaexperts.com' },
  reserve:    { name: 'spravek-reserve',            dir: 'apps/spravek-reserve',            domain: 'spravekreserve.com' },
};

const token = process.env.VERCEL_TOKEN;
if (!token) {
  console.error('VERCEL_TOKEN is required. Create one at https://vercel.com/account/tokens');
  process.exit(1);
}
const team = process.env.VERCEL_TEAM;
const teamQuery = team ? (team.startsWith('team_') ? `teamId=${team}` : `slug=${team}`) : '';

async function api(method, path, body) {
  const url = `https://api.vercel.com${path}${teamQuery ? (path.includes('?') ? '&' : '?') + teamQuery : ''}`;
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = json?.error?.message || res.statusText;
    const err = new Error(`${method} ${path} → ${res.status} ${msg}`);
    err.code = json?.error?.code;
    throw err;
  }
  return json;
}

async function ensureProject(app) {
  try {
    const existing = await api('GET', `/v9/projects/${app.name}`);
    console.log(`  • project exists (${existing.id})`);
    if (existing.rootDirectory !== app.dir) {
      await api('PATCH', `/v9/projects/${app.name}`, { rootDirectory: app.dir, framework: 'nextjs' });
      console.log(`  • root directory corrected → ${app.dir}`);
    }
    if (!existing.link) {
      await api('POST', `/v9/projects/${app.name}/link`, { type: 'github', repo: REPO });
      console.log(`  • linked to github.com/${REPO}`);
    }
    return existing;
  } catch (e) {
    if (!String(e.message).includes('404')) throw e;
  }
  const created = await api('POST', '/v11/projects', {
    name: app.name,
    framework: 'nextjs',
    rootDirectory: app.dir,
    gitRepository: { type: 'github', repo: REPO },
  });
  console.log(`  • created project ${created.id}, root ${app.dir}, linked to ${REPO}`);
  return created;
}

async function ensureDomain(app) {
  try {
    await api('POST', `/v10/projects/${app.name}/domains`, { name: app.domain });
    console.log(`  • domain added: ${app.domain}`);
  } catch (e) {
    if (e.code === 'domain_already_in_use' || String(e.message).includes('already')) {
      console.log(`  • domain already attached: ${app.domain}`);
    } else {
      console.log(`  ! domain not added (${e.message}) — add it in the dashboard`);
    }
  }
}

async function deploy(app, project) {
  const repoId = project.link?.repoId;
  if (!repoId) {
    console.log('  ! no git link on project; push a commit to trigger the first deploy');
    return;
  }
  const dep = await api('POST', '/v13/deployments', {
    name: app.name,
    project: app.name,
    target: 'production',
    gitSource: { type: 'github', repoId, ref: BRANCH },
  });
  console.log(`  • deploying ${BRANCH} → https://${dep.url}`);
}

const keys = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(APPS);
for (const key of keys) {
  const app = APPS[key];
  if (!app) {
    console.error(`unknown app "${key}" — known: ${Object.keys(APPS).join(', ')}`);
    process.exit(1);
  }
  console.log(`\n${app.name}`);
  try {
    const project = await ensureProject(app);
    await ensureDomain(app);
    await deploy(app, project);
  } catch (e) {
    console.error(`  ✗ ${e.message}`);
  }
}
console.log('\nDone. Point each domain\u2019s DNS at Vercel (A 76.76.21.21 or CNAME cname.vercel-dns.com) if not already.');
