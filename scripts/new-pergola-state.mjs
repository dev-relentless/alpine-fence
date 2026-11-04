#!/usr/bin/env node
/**
 * Stamp out a "<State> Pergola Experts" site from the parameterized template.
 *
 *   node scripts/new-pergola-state.mjs arizona            # one state
 *   node scripts/new-pergola-state.mjs --all              # every state in STATES
 *
 * The template is apps/arizona-pergola-experts: every geo/climate phrase in it
 * reads from src/data/brand.ts, so a new state only needs a config entry below.
 * The script copies the template (minus build output), then writes brand.ts,
 * package.json and README.md from the config. Re-running is safe — it only
 * overwrites those three generated files plus any template files that changed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE = 'arizona-pergola-experts';
const SKIP = new Set(['node_modules', '.next', 'next-env.d.ts', 'tsconfig.tsbuildinfo', '.vercel']);

const parentNote = 'Part of a Western construction family with two decades of building behind it. A Spravek company.';

/** @type {Record<string, StateConfig>} */
const STATES = {
  arizona: {
    port: 3008,
    state: 'Arizona', abbr: 'AZ',
    region: 'Valley of the Sun', regionLine: 'Phoenix · Scottsdale · the Valley',
    locality: 'Scottsdale',
    phone: '(602) 555-0101',
    geo: { lat: 33.4942, lng: -111.9261 },
    counties: ['Maricopa County', 'Pinal County', 'Pima County', 'Yavapai County'],
    cities: ['Scottsdale', 'Phoenix', 'Paradise Valley', 'Mesa', 'Chandler', 'Gilbert', 'Tempe', 'Glendale', 'Peoria', 'Queen Creek', 'Cave Creek', 'Fountain Hills', 'Goodyear', 'Surprise', 'Tucson'],
    climate: {
      snow: false,
      elements: 'sun, heat, and monsoon wind',
      sun: 'desert sun',
      engineeredTag: 'Wind-rated engineered',
      footings: 'posts set in deep concrete footings',
      spans: 'spans braced for monsoon wind',
      roofNote: 'close watertight for monsoon rain and shrug off the wind',
      durabilityQ: 'Will it hold up to Arizona heat and monsoon season?',
      durabilityA: 'Yes. Timber is kiln-dried and finished with UV-stable stains that don\u2019t bake off in 115° summers, frames are braced and anchored for monsoon gusts, and louvered roofs close watertight when the storm rolls in. Connections are thru-bolted rather than kit brackets.',
      keyword: 'heat resistant pergola Arizona',
    },
  },
  idaho: {
    port: 3009,
    state: 'Idaho', abbr: 'ID',
    region: 'Treasure Valley', regionLine: 'Boise · Treasure Valley · North Idaho',
    locality: 'Boise',
    phone: '(208) 555-0102',
    geo: { lat: 43.615, lng: -116.2023 },
    counties: ['Ada County', 'Canyon County', 'Kootenai County', 'Bonneville County', 'Twin Falls County', 'Blaine County'],
    cities: ['Boise', 'Meridian', 'Eagle', 'Nampa', 'Caldwell', 'Kuna', 'Star', 'Middleton', 'Twin Falls', 'Idaho Falls', 'Pocatello', 'Coeur d\u2019Alene', 'Post Falls', 'Sandpoint', 'Ketchum'],
    climate: {
      snow: true,
      elements: 'sun, wind, and snow',
      sun: 'high-desert sun',
      engineeredTag: 'Snow-load engineered',
      footings: 'footings below frost line',
      spans: 'spans that carry the snow',
      roofNote: 'close watertight for rain and shed snow like a solid roof',
      durabilityQ: 'Will it hold up to Idaho snow and wind?',
      durabilityA: 'Yes. Spans are sized for local snow loads, posts sit in concrete footings below frost line, and connections are thru-bolted rather than kit brackets. Louvered roofs close watertight and shed snow like a solid roof.',
      keyword: 'snow rated pergola Idaho',
    },
  },
  nevada: {
    port: 3010,
    state: 'Nevada', abbr: 'NV',
    region: 'Las Vegas Valley', regionLine: 'Las Vegas · Henderson · Reno',
    locality: 'Henderson',
    phone: '(702) 555-0103',
    geo: { lat: 36.0395, lng: -114.9817 },
    counties: ['Clark County', 'Washoe County', 'Carson City', 'Douglas County', 'Lyon County', 'Nye County'],
    cities: ['Henderson', 'Las Vegas', 'Summerlin', 'North Las Vegas', 'Boulder City', 'Mesquite', 'Reno', 'Sparks', 'Carson City', 'Minden', 'Gardnerville', 'Incline Village', 'Pahrump', 'Elko', 'Fernley'],
    climate: {
      snow: false,
      elements: 'sun, heat, and wind',
      sun: 'desert sun',
      engineeredTag: 'Wind-rated engineered',
      footings: 'posts set in deep concrete footings',
      spans: 'spans braced for desert wind',
      roofNote: 'close watertight for rain and shrug off the wind',
      durabilityQ: 'Will it hold up to Nevada heat and wind?',
      durabilityA: 'Yes. Timber is kiln-dried and finished with UV-stable stains built for 110° summers, frames are braced and anchored for valley wind, and louvered roofs close watertight when weather moves in. Up north, Reno and Tahoe structures are sized for snow load as well.',
      keyword: 'heat resistant pergola Las Vegas',
    },
  },
  washington: {
    port: 3011,
    state: 'Washington', abbr: 'WA',
    region: 'Puget Sound', regionLine: 'Seattle · Eastside · Spokane',
    locality: 'Bellevue',
    phone: '(425) 555-0104',
    geo: { lat: 47.6101, lng: -122.2015 },
    counties: ['King County', 'Snohomish County', 'Pierce County', 'Thurston County', 'Spokane County', 'Clark County', 'Yakima County'],
    cities: ['Bellevue', 'Seattle', 'Kirkland', 'Redmond', 'Sammamish', 'Issaquah', 'Mercer Island', 'Tacoma', 'Olympia', 'Everett', 'Spokane', 'Spokane Valley', 'Liberty Lake', 'Vancouver', 'Yakima'],
    climate: {
      snow: true,
      elements: 'rain, wind, and snow',
      sun: 'Northwest weather',
      engineeredTag: 'Rain & snow engineered',
      footings: 'footings below frost line',
      spans: 'spans that carry the snow',
      roofNote: 'close watertight for rain and shed snow like a solid roof',
      durabilityQ: 'Will it hold up to Washington rain and snow?',
      durabilityA: 'Yes. Timber is cedar or fir finished for wet winters, flashing and drainage are detailed so water never sits on a joint, spans are sized for snow where it falls, and connections are thru-bolted rather than kit brackets. Louvered roofs close watertight and shed both rain and snow.',
      keyword: 'covered patio pergola Washington',
    },
  },
  colorado: {
    port: 3012,
    state: 'Colorado', abbr: 'CO',
    region: 'Front Range', regionLine: 'Denver · Boulder · the Front Range',
    locality: 'Denver',
    phone: '(303) 555-0105',
    geo: { lat: 39.7392, lng: -104.9903 },
    counties: ['Denver County', 'Jefferson County', 'Arapahoe County', 'Douglas County', 'Boulder County', 'Larimer County', 'El Paso County', 'Summit County', 'Eagle County'],
    cities: ['Denver', 'Boulder', 'Fort Collins', 'Colorado Springs', 'Castle Rock', 'Highlands Ranch', 'Littleton', 'Parker', 'Golden', 'Broomfield', 'Longmont', 'Loveland', 'Evergreen', 'Breckenridge', 'Vail'],
    climate: {
      snow: true,
      elements: 'sun, wind, and snow',
      sun: 'high-altitude sun',
      engineeredTag: 'Snow-load engineered',
      footings: 'footings below frost line',
      spans: 'spans that carry the snow',
      roofNote: 'close watertight for rain and shed snow like a solid roof',
      durabilityQ: 'Will it hold up to Colorado snow and wind?',
      durabilityA: 'Yes. Spans are sized for Front Range and mountain snow loads, posts sit in concrete footings below frost line, and connections are thru-bolted rather than kit brackets. Louvered roofs close watertight and shed snow like a solid roof.',
      keyword: 'snow rated pergola Colorado',
    },
  },
};

/**
 * @typedef {{
 *  port:number, state:string, abbr:string, region:string, regionLine:string, locality:string,
 *  phone:string, geo:{lat:number,lng:number}, counties:string[], cities:string[],
 *  climate:{snow:boolean, elements:string, sun:string, engineeredTag:string, footings:string,
 *           spans:string, roofNote:string, durabilityQ:string, durabilityA:string, keyword:string}
 * }} StateConfig
 */

function slugOf(stateKey) {
  return `${stateKey}-pergola-experts`;
}

function phoneRaw(phone) {
  return `+1${phone.replace(/\D/g, '')}`;
}

function brandTs(key, c) {
  const name = `${c.state} Pergola Experts`;
  const domain = `${key}pergolaexperts.com`;
  const q = (s) => JSON.stringify(s);
  const list = (arr, indent) => arr.map((x) => `${indent}${q(x)},`).join('\n');
  return `/**
 * GENERATED by scripts/new-pergola-state.mjs — edit the config there, not here.
 * Every geo/climate phrase on the site reads from this object.
 */
export const BRAND = {
  name: ${q(name)},
  shortName: 'Pergola Experts',
  state: ${q(c.state)},
  stateAbbr: ${q(c.abbr)},
  /** Short regional name without article, e.g. "Front Range". */
  region: ${q(c.region)},
  /** Hero eyebrow: the metro areas served. */
  regionLine: ${q(c.regionLine)},
  tagline: ${q(`Outdoor rooms, built for ${c.state}.`)},
  description:
    ${q(`${name} designs and builds pergolas, louvered roofs, and pavilions across ${c.state} — timber structures with real footings, engineering for ${c.state} ${c.climate.elements}, and finishes made for ${c.climate.sun}. The best room in the house isn't in the house.`)},
  shortDescription:
    ${q(`Pergolas, louvered roofs & pavilions in ${c.state} — engineered for ${c.climate.elements}. Design-build, quotes in writing.`)},
  domain: ${q(domain)},
  url: ${q(`https://${domain}`)},
  // TODO: replace placeholder with the production number before launch.
  phone: ${q(c.phone)},
  phoneRaw: ${q(phoneRaw(c.phone))},
  smsBody: ${q(`Hi ${name} — I'd like a quote on a pergola.`)},
  address: {
    region: ${q(`${c.state} — ${c.region}`)},
    locality: ${q(c.locality)},
    state: ${q(c.abbr)},
    country: 'US',
    serviceArea: [
${list(c.counties, '      ')}
    ],
    cities: [
${list(c.cities, '      ')}
    ],
  },
  geo: {
    region: ${q(`US-${c.abbr}`)},
    placename: ${q(`${c.locality}, ${c.state}`)},
    lat: ${c.geo.lat},
    lng: ${c.geo.lng},
  },
  /** Climate language — keeps "snow load" copy off desert sites and vice versa. */
  climate: {
    snow: ${c.climate.snow},
    elements: ${q(c.climate.elements)},
    sun: ${q(c.climate.sun)},
    engineeredTag: ${q(c.climate.engineeredTag)},
    footings: ${q(c.climate.footings)},
    spans: ${q(c.climate.spans)},
    roofNote: ${q(c.climate.roofNote)},
    durabilityQ: ${q(c.climate.durabilityQ)},
    durabilityA: ${q(c.climate.durabilityA)},
    keyword: ${q(c.climate.keyword)},
  },
  parent: {
    name: 'Alpine Fence & Deck',
    note: ${q(parentNote)},
    url: 'https://alpinefenceanddeck.com',
  },
  spravekUrl: 'https://spravek.com',
  founded: '2026',
  priceRange: '$$',
} as const;
`;
}

function packageJson(key, c) {
  return JSON.stringify(
    {
      name: slugOf(key),
      version: '0.1.0',
      private: true,
      scripts: {
        dev: `next dev -p ${c.port}`,
        build: 'next build',
        start: `next start -p ${c.port}`,
        lint: 'next lint',
      },
      dependencies: { clsx: '^2.1.1', next: '^14.2.35', react: '^18.3.1', 'react-dom': '^18.3.1' },
      devDependencies: {
        '@types/node': '^20.17.0',
        '@types/react': '^18.3.11',
        '@types/react-dom': '^18.3.1',
        autoprefixer: '^10.4.20',
        eslint: '^8.57.1',
        'eslint-config-next': '14.2.25',
        postcss: '^8.4.47',
        tailwindcss: '^3.4.14',
        typescript: '^5.6.3',
      },
    },
    null,
    2
  ) + '\n';
}

function readme(key, c) {
  const slug = slugOf(key);
  const domain = `${key}pergolaexperts.com`;
  return `# ${c.state} Pergola Experts

Pergola, louvered roof & pavilion brand for ${c.state}. Standalone Next 14 app, deployed independently to Vercel at \`${domain}\`.

Generated from the parameterized template (\`apps/arizona-pergola-experts\`) by
\`scripts/new-pergola-state.mjs\`. **Do not hand-edit \`src/data/brand.ts\`,
\`package.json\`, or this README** — change the state config in the script and
re-run \`node scripts/new-pergola-state.mjs ${key}\`. Everything else (pages,
components) is shared template code; edit it in the template and re-run
\`--all\` to propagate.

## Develop

\`\`\`bash
# from the repo root
npm install
npm run dev:${key}      # http://localhost:${c.port}
\`\`\`

## Deploy (Vercel)

- **Root Directory:** \`apps/${slug}\`
- **Framework Preset:** Next.js
- **Domain:** \`${domain}\`

## Before launch

- Phone in \`scripts/new-pergola-state.mjs\` → \`${key}.phone\` is a **placeholder**.
- Drop the production logo at \`public/pergola/logo.svg\` and point \`src/components/Logo.tsx\` at it (an inline SVG mark is used until then).
- Wire \`src/app/api/quote/route.ts\` to the inbox / CRM.
- \`/lp/pergola\` is the ad landing page — paste the GHL form URL into \`src/data/landing.ts\`.
`;
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function stamp(key) {
  const c = STATES[key];
  if (!c) throw new Error(`Unknown state "${key}". Known: ${Object.keys(STATES).join(', ')}`);
  const slug = slugOf(key);
  const dst = path.join(ROOT, 'apps', slug);
  const src = path.join(ROOT, 'apps', TEMPLATE);
  if (slug !== TEMPLATE) copyDir(src, dst);
  fs.writeFileSync(path.join(dst, 'src/data/brand.ts'), brandTs(key, c));
  fs.writeFileSync(path.join(dst, 'package.json'), packageJson(key, c));
  fs.writeFileSync(path.join(dst, 'README.md'), readme(key, c));
  console.log(`✓ apps/${slug}  (port ${c.port}, ${c.phone})`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: node scripts/new-pergola-state.mjs <state|--all>');
  process.exit(1);
}
const keys = args.includes('--all') ? Object.keys(STATES) : args;
// Always stamp the template first so copies pick up its generated files.
for (const key of [TEMPLATE.replace('-pergola-experts', ''), ...keys.filter((k) => slugOf(k) !== TEMPLATE)]) {
  if (keys.includes(key) || slugOf(key) === TEMPLATE) stamp(key);
}
