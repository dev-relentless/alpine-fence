export interface HarlowProject {
  slug: string;
  title: string;
  location: string;
  year: number;
  scope: string[];
  summary: string;
  hero: string;
}

export const harlowProjects: HarlowProject[] = [
  {
    slug: 'alpine-bench-residence',
    title: 'Alpine Bench Residence',
    location: 'Alpine, UT',
    year: 2026,
    scope: ['Master plan', 'Hardscape', 'Planting', 'Lighting'],
    summary:
      'A terraced rear landscape with a board-formed concrete spa surround, drystack stone walls, and a perennial meadow that opens to the Lone Peak ridgeline.',
    hero: '/harlow/projects/alpine-bench-residence.jpg',
  },
  {
    slug: 'holladay-courtyard',
    title: 'Holladay Courtyard',
    location: 'Holladay, UT',
    year: 2025,
    scope: ['Hardscape', 'Water feature', 'Planting'],
    summary:
      'A walled entry courtyard anchored by a basalt scupper basin and a single multi-trunk serviceberry.',
    hero: '/harlow/projects/holladay-courtyard.jpg',
  },
  {
    slug: 'park-city-meadow',
    title: 'Park City Meadow',
    location: 'Park City, UT',
    year: 2025,
    scope: ['Master plan', 'Native restoration', 'Irrigation'],
    summary:
      'A 1.4-acre site reframed as native meadow with mowed sight-lines, a stone fire ring, and a cor-ten retaining edge.',
    hero: '/harlow/projects/park-city-meadow.jpg',
  },
];
