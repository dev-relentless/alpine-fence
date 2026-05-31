export interface HarlowProject {
  slug: string;
  title: string;
  location: string;
  year: number;
  scope: string[];
  summary: string;
  hero?: string; // /harlow/projects/<slug>.jpg — fill in once photography is available
}

export const harlowProjects: HarlowProject[] = [
  {
    slug: 'alpine-bench-residence',
    title: 'Alpine Bench Residence',
    location: 'Alpine, UT',
    year: 2026,
    scope: ['Master plan', 'Hardscape', 'Planting', 'Lighting'],
    summary:
      'A terraced rear garden with a board-formed concrete spa surround, drystack stone walls, and a perennial meadow that opens to the Lone Peak ridgeline.',
  },
  {
    slug: 'holladay-courtyard',
    title: 'Holladay Courtyard',
    location: 'Holladay, UT',
    year: 2025,
    scope: ['Hardscape', 'Water feature', 'Planting'],
    summary:
      'A walled entry courtyard anchored by a basalt scupper basin and a single multi-trunk serviceberry.',
  },
  {
    slug: 'park-city-meadow',
    title: 'Park City Meadow',
    location: 'Park City, UT',
    year: 2025,
    scope: ['Master plan', 'Native restoration', 'Irrigation'],
    summary:
      'A 1.4-acre site reframed as native meadow with mowed sight-lines, a stone fire ring, and a cor-ten retaining edge.',
  },
];
