export interface SpxService {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
}

export const spxServices: SpxService[] = [
  {
    slug: 'general-contracting',
    title: 'Residential General Contracting',
    shortTitle: 'General Contracting',
    blurb: 'One licensed GC holding the schedule, the trades, and the inspections — start to finish.',
    detail:
      'Full-scope residential construction management: permits, engineering coordination, scheduling, trade supervision, and inspections. One contract, one accountable builder, one number to call — from the first site walk to the final punch list.',
  },
  {
    slug: 'home-additions',
    title: 'Home Additions',
    shortTitle: 'Additions',
    blurb: 'Main-level additions, second stories, and bump-outs that read like they were always there.',
    detail:
      'Footings to finish: excavation, foundation, framing, roofline tie-ins, mechanical extensions, and matched exterior finishes. We engineer the connection to the existing structure properly so the addition performs — and looks — like original construction.',
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    shortTitle: 'Basements',
    blurb: 'Code-compliant basement builds — bedrooms, baths, kitchens, theaters, and rental suites.',
    detail:
      'Complete basement finishes: framing, electrical, plumbing, HVAC extension, insulation, drywall, trim, and flooring. Egress compliance, moisture detailing, and sound isolation handled as construction basics — not upgrades. Rental-suite and ADU configurations available where zoning allows.',
  },
  {
    slug: 'basement-walkouts',
    title: 'Basement Walkouts & Entrances',
    shortTitle: 'Walkouts',
    blurb: 'Cut-in walkout doors, stairwells, and egress windows — engineered, excavated, and finished.',
    detail:
      'We cut and reinforce the foundation, excavate and retain the grade, set drainage, and build the stairwell, areaway, and door system — engineered and permitted. A walkout turns a dark basement into a daylight level and adds a separate entrance for suites and ADUs.',
  },
  {
    slug: 'structural-concrete',
    title: 'Structural & Concrete Work',
    shortTitle: 'Structural',
    blurb: 'Foundation cuts, beam and post replacement, wall removals, and flatwork done to the letter of the engineering.',
    detail:
      'Load-bearing wall removals, steel and LVL beam installs, foundation repair and underpinning, window well cuts, and structural concrete. Stamped engineering on every structural scope, inspected and documented.',
  },
  {
    slug: 'garages-shops',
    title: 'Garages & Detached Structures',
    shortTitle: 'Garages',
    blurb: 'Attached and detached garages, shops, and accessory buildings — slab to roof.',
    detail:
      'Site prep, flatwork, framing, roofing, electrical service, and finishes for garages, shops, and accessory structures — built on proper footings with the same permit-and-inspection discipline as the house itself.',
  },
];
