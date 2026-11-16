export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'flatwork',
    title: 'Concrete Flatwork',
    shortTitle: 'Flatwork',
    blurb: 'Driveways, patios, and slabs poured on compacted base — flat, square, and jointed so they stay that way.',
    detail:
      'Flatwork fails from below, so we treat the prep like the product: excavate to grade, compact structural base in lifts, set forms square, and pour air-entrained mixes built for Utah freeze-thaw. Joints are laid out and saw-cut on schedule, edges finished clean, and cure done right — not rushed for the next job.',
    items: [
      'Driveways & extensions',
      'Patios, walkways & steps',
      'Garage & shop slabs',
      'RV pads & approaches',
      'Stamped & broom finishes',
      'Curb, gutter & aprons',
    ],
  },
  {
    slug: 'foundations',
    title: 'Foundations & Structural',
    shortTitle: 'Foundations',
    blurb: 'Footings, walls, and structural concrete formed to the drawings and inspected without drama.',
    detail:
      'From footings and foundation walls to grade beams and pads, we form, reinforce, and pour to the engineering — rebar placed per schedule, anchor bolts where the plans say, and inspections scheduled ahead so your framer isn\'t waiting. Shops, garages, additions, and full residences.',
    items: [
      'Footings & foundation walls',
      'Garage & shop foundations',
      'Grade beams, piers & pads',
      'Retaining walls',
      'Window wells & egress',
      'Tear-out & replacement',
    ],
  },
  {
    slug: 'excavation',
    title: 'Excavation & Dirt Work',
    shortTitle: 'Excavation',
    blurb: 'Site prep, digs, trenching, and grading — the dirt work that makes everything above it possible.',
    detail:
      'We run our own iron, so the dig and the pour are one schedule instead of two subcontractors pointing at each other. Basement and foundation digs cut to grade, utility trenches bedded and backfilled to spec, building pads compacted and proof-rolled, and final grade set to drain away from the structure.',
    items: [
      'Site prep & rough grading',
      'Basement & foundation digs',
      'Utility trenching & backfill',
      'Building pads & compaction',
      'Demolition & haul-off',
      'Final grade & drainage',
    ],
  },
];
