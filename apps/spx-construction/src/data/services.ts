export interface SpxService {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
}

export const spxServices: SpxService[] = [
  {
    slug: 'design-build',
    title: 'Design · Build Delivery',
    shortTitle: 'Design · Build',
    blurb: 'One team from first sketch to final walk-through — design, engineering, budget, and build under a single roof.',
    detail:
      'Architecture and interiors coordinated with the people who will actually build them. Design development, stamped engineering, transparent budgets, permits, scheduling, and construction — one contract, one accountable team, and no gap between the drawing and the jobsite.',
  },
  {
    slug: 'custom-homes',
    title: 'New Custom Residences',
    shortTitle: 'Custom Homes',
    blurb: 'Ground-up homes built the way they were drawn — quietly, precisely, on schedule.',
    detail:
      'Site work, foundation, frame, envelope, and finish — self-performed where it matters most, supervised everywhere else. We build a small number of residences at a time, so each one carries a principal\u2019s attention from excavation to keys.',
  },
  {
    slug: 'renovations',
    title: 'Whole-Home Renovations',
    shortTitle: 'Renovations',
    blurb: 'Structural reconfigurations that make an existing house live like it was designed this decade.',
    detail:
      'Wall removals, reframed floor plans, new kitchens and primary suites, and systems brought quietly to current code. Every structural move carries stamped engineering; every finish is matched or deliberately contrasted — never approximated.',
  },
  {
    slug: 'additions',
    title: 'Additions & Second Stories',
    shortTitle: 'Additions',
    blurb: 'Expansions that read like original construction — from footings to matched rooflines.',
    detail:
      'Excavation, foundation, framing, roofline tie-ins, mechanical extensions, and exterior finishes matched in material and shadow line. The connection to the existing structure is engineered properly, so the addition performs — and reads — as if it were always there.',
  },
  {
    slug: 'lower-levels',
    title: 'Lower Levels & Walkouts',
    shortTitle: 'Lower Levels',
    blurb: 'Daylight lower levels — theaters, wine rooms, guest suites, and engineered walkout entrances.',
    detail:
      'Complete lower-level design and build: framing, systems, moisture detailing, sound isolation, and finish work — plus the structural scope most firms decline: foundation cuts, engineered walkout stairwells, egress, and separate entrances for suites and ADUs where zoning allows.',
  },
  {
    slug: 'structures',
    title: 'Garages, Structures & Site',
    shortTitle: 'Structures',
    blurb: 'Detached garages, pavilions, and structural site work — slab to roofline, drawn and delivered.',
    detail:
      'Accessory buildings and the heavy site scopes that support them: flatwork, retaining, structural concrete, steel and LVL installs, and load-path corrections — engineered, permitted, and inspected with the same discipline as the main house.',
  },
];
