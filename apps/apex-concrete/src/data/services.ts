export type ServiceSlug =
  | 'flatwork'
  | 'foundations'
  | 'excavation'
  | 'decorative'
  | 'commercial'
  | 'repair'
  | 'retaining-walls';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  /** Short line used in nav, cards, and meta descriptions. */
  blurb: string;
  /** Longer paragraph for the service page intro. */
  detail: string;
  /** Second paragraph — how we do it. */
  method: string;
  items: string[];
  /** Spec callouts shown as a "ticket" on the service page. */
  specs: { k: string; v: string }[];
  faqs: ServiceFaq[];
  /** Keywords folded into page metadata. */
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: 'flatwork',
    title: 'Driveways, Patios & Slabs',
    shortTitle: 'Flatwork',
    blurb: 'Driveways, patios, walkways, and garage slabs poured on compacted base — flat, square, and jointed to stay that way.',
    detail:
      'Flatwork is the concrete people live on, so it has to look right and last. We excavate to grade, place and compact structural base in lifts, set forms to string lines, and pour air-entrained mixes built for Wasatch Front winters. Edges are tooled clean, finishes are consistent, and control joints are laid out before the truck arrives — not improvised afterward.',
    method:
      'Every driveway and patio gets the same spec sheet: 4,000+ PSI air-entrained concrete, 4–6 inches of compacted road base, steel placed on chairs so it stays in the middle of the slab, and joints saw-cut within 24 hours. We finish for the use — broom texture for traction on driveways, a tighter finish for covered patios — and seal when the slab has cured.',
    items: [
      'Driveways, extensions & approaches',
      'Patios, walkways & steps',
      'Garage, shop & basement slabs',
      'RV pads & parking strips',
      'Sidewalks, curb & gutter',
      'Hot-tub pads & equipment pads',
    ],
    specs: [
      { k: 'Mix', v: '4,000+ PSI · air-entrained' },
      { k: 'Thickness', v: '4" patios · 5–6" driveways' },
      { k: 'Base', v: '4–6" compacted road base' },
      { k: 'Steel', v: '#4 rebar or fiber per spec' },
      { k: 'Joints', v: 'Saw-cut ≤ 24 hrs' },
    ],
    faqs: [
      {
        q: 'How thick should a concrete driveway be in Utah?',
        a: 'For passenger vehicles, 5 inches over 4–6 inches of compacted base. If you park a trailer, RV, or heavy truck, we spec 6 inches with #4 rebar on 18-inch centers.',
      },
      {
        q: 'When can I drive on a new driveway?',
        a: 'Foot traffic after 24–48 hours, passenger vehicles after 7 days, and heavy vehicles after 28 days when the concrete reaches design strength.',
      },
      {
        q: 'Will my new concrete crack?',
        a: 'Concrete shrinks as it cures, so hairline cracks are controlled with saw-cut joints placed on a tight grid. Proper base compaction, steel, and air-entrainment keep slabs from heaving or spalling through freeze-thaw.',
      },
    ],
    keywords: ['concrete driveway Utah', 'concrete patio Salt Lake City', 'garage slab Utah', 'RV pad concrete Utah', 'concrete walkway Wasatch Front'],
  },
  {
    slug: 'foundations',
    title: 'Footings & Foundations',
    shortTitle: 'Foundations',
    blurb: 'Footings, stem walls, and structural slabs formed to the drawings, inspected on schedule, and ready for your framer.',
    detail:
      'From footings and foundation walls to grade beams, piers, and monolithic slabs, we form, reinforce, and pour to the engineering. Rebar is placed per schedule and tied, anchor bolts and hold-downs land where the plans say, and inspections are scheduled ahead so your framer is not waiting on us.',
    method:
      'We shoot grades from the survey, dig to frost depth, and compact the footing subgrade before a form goes in. Walls are plumb and braced, snap ties are set so the wall reads clean when stripped, and we waterproof and damp-proof below grade before backfill. Shops, garages, ADUs, additions, and full residences.',
    items: [
      'Footings & stem walls',
      'Monolithic & turned-down slabs',
      'Garage, shop & ADU foundations',
      'Grade beams, piers & pads',
      'Window wells & egress',
      'Foundation repair & underpinning',
    ],
    specs: [
      { k: 'Frost depth', v: '30" min. per Utah code' },
      { k: 'Mix', v: '3,000–4,000 PSI per plan' },
      { k: 'Steel', v: 'Placed & tied per schedule' },
      { k: 'Anchors', v: 'Bolts & hold-downs per plan' },
      { k: 'Inspections', v: 'Scheduled before pour' },
    ],
    faqs: [
      {
        q: 'Do you handle permits and inspections?',
        a: 'We coordinate footing, foundation, and slab inspections with the jurisdiction and pour only after sign-off. Permits are typically pulled by the general contractor or owner; we provide what the city needs from us.',
      },
      {
        q: 'How deep do footings need to be on the Wasatch Front?',
        a: 'Most Wasatch Front jurisdictions require a 30-inch frost depth; benches and canyon lots can be deeper. We follow the engineered drawings and local code.',
      },
    ],
    keywords: ['foundation contractor Utah', 'footings and foundations Salt Lake City', 'garage foundation Utah', 'ADU foundation Utah', 'stem wall concrete Utah'],
  },
  {
    slug: 'excavation',
    title: 'Excavation & Grading',
    shortTitle: 'Excavation',
    blurb: 'Site prep, digs, trenching, and finish grade — the dirt work that decides how long everything above it lasts.',
    detail:
      'We run our own equipment, so the dig and the pour are one schedule instead of two subcontractors pointing at each other. Foundation and basement digs are cut to grade, utility trenches are bedded and backfilled to spec, and pads are compacted and proof-rolled before any concrete shows up.',
    method:
      'Grading sets up drainage, and drainage decides whether a slab or a foundation lives a long life. We set final grade to fall away from the structure, cut swales where water needs a path, and compact in lifts with a plate or roller — then test it. Haul-off and import are priced in writing up front.',
    items: [
      'Site prep & rough grading',
      'Foundation & basement digs',
      'Utility trenching & backfill',
      'Building pads & compaction',
      'Demolition & concrete haul-off',
      'Final grade & drainage',
    ],
    specs: [
      { k: 'Compaction', v: '95% standard Proctor' },
      { k: 'Lifts', v: '6–8" compacted' },
      { k: 'Drainage', v: '6" fall in first 10 ft' },
      { k: 'Utilities', v: 'Blue Stakes located first' },
      { k: 'Haul-off', v: 'Priced in writing' },
    ],
    faqs: [
      {
        q: 'Do I need excavation before a new driveway or patio?',
        a: 'Usually yes. Topsoil and organic material have to come out and be replaced with compacted base, or the slab settles. The excavation is part of our flatwork bid.',
      },
      {
        q: 'Can you remove and haul off my old concrete?',
        a: 'Yes — demolition, loading, and haul-off are part of nearly every replacement job. We recycle concrete where facilities accept it.',
      },
    ],
    keywords: ['excavation contractor Utah', 'grading contractor Salt Lake City', 'utility trenching Utah', 'concrete demolition Utah', 'site prep Wasatch Front'],
  },
  {
    slug: 'decorative',
    title: 'Stamped, Colored & Exposed Aggregate',
    shortTitle: 'Decorative',
    blurb: 'Stamped patterns, integral color, exposed aggregate, and polished finishes — concrete that looks like it belongs with the house.',
    detail:
      'Decorative concrete is where the craft shows. Stamped slate, flagstone, and wood-plank patterns; integral and broadcast color; exposed and seeded aggregate; borders, bands, and saw-cut patterns — all poured on the same structural spec as our plain flatwork, because a beautiful finish over a bad base is still a bad job.',
    method:
      'We sample colors and patterns against your house before the pour, time the stamping to the set so impressions are crisp and consistent, and seal with a UV-stable sealer rated for Utah sun and salt. Joints are laid into the pattern so they read as part of the design instead of an afterthought.',
    items: [
      'Stamped patios, walks & driveways',
      'Integral & broadcast color',
      'Exposed & seeded aggregate',
      'Borders, bands & saw-cut patterns',
      'Polished & troweled interior floors',
      'Resealing & color refresh',
    ],
    specs: [
      { k: 'Patterns', v: 'Slate · flagstone · plank · ashlar' },
      { k: 'Color', v: 'Integral + release/antique' },
      { k: 'Sealer', v: 'UV-stable, salt-resistant' },
      { k: 'Reseal', v: 'Every 2–3 years' },
    ],
    faqs: [
      {
        q: 'Does stamped concrete hold up to Utah winters?',
        a: 'Yes, when it is poured air-entrained on compacted base and sealed properly. We recommend resealing every two to three years and avoiding rock-salt deicers in the first winter.',
      },
      {
        q: 'How much more does decorative concrete cost than plain?',
        a: 'Stamped and colored work typically runs 1.5–2.5× the price of broom-finished concrete depending on pattern complexity and color layers. We price both options in the same estimate so you can compare.',
      },
    ],
    keywords: ['stamped concrete Utah', 'exposed aggregate Salt Lake City', 'colored concrete patio Utah', 'decorative concrete Wasatch Front', 'stamped concrete driveway Utah'],
  },
  {
    slug: 'commercial',
    title: 'Commercial & Light Industrial',
    shortTitle: 'Commercial',
    blurb: 'Shop floors, dock aprons, dumpster pads, sidewalks, and ADA work for builders, property managers, and owners.',
    detail:
      'Commercial concrete lives on a schedule and a spec, and we bid it that way. Warehouse and shop floors, loading-dock aprons and approaches, dumpster and equipment pads, ADA ramps and sidewalks, curb and gutter, bollards, and tenant-improvement slabs — coordinated with your GC and inspected per the plans.',
    method:
      'We submit mix designs, coordinate testing with your inspector, and pour to flatness and tolerance requirements where the drawings call for them. Phasing, after-hours pours, and traffic control are planned up front so an occupied site keeps operating.',
    items: [
      'Warehouse & shop floors',
      'Dock aprons & approaches',
      'Dumpster & equipment pads',
      'ADA ramps, sidewalks & curb',
      'Bollards & light-pole bases',
      'Tenant-improvement slabs',
    ],
    specs: [
      { k: 'Submittals', v: 'Mix designs & cut sheets' },
      { k: 'Testing', v: 'Coordinated with inspector' },
      { k: 'Tolerance', v: 'FF/FL per drawings' },
      { k: 'Scheduling', v: 'Phased & after-hours available' },
      { k: 'Insurance', v: 'COI on request' },
    ],
    faqs: [
      {
        q: 'Do you work with general contractors as a sub?',
        a: 'Yes. Most of our commercial work is as a concrete subcontractor to GCs and builders. We carry commercial liability and workers’ comp and can provide a COI with your contract.',
      },
    ],
    keywords: ['commercial concrete contractor Utah', 'concrete subcontractor Salt Lake City', 'warehouse slab Utah', 'ADA ramp concrete Utah', 'dumpster pad concrete Utah'],
  },
  {
    slug: 'repair',
    title: 'Repair, Leveling & Removal',
    shortTitle: 'Repair',
    blurb: 'Settled slabs lifted, spalled surfaces resurfaced, and failed concrete torn out and replaced — with the cause fixed, not just the symptom.',
    detail:
      'Not every slab needs replacing. Settled walks and steps can be lifted, spalled or scaled surfaces can be resurfaced, and cracked sections can be cut out and replaced to match. We start by figuring out why it failed — usually drainage, base, or salt — so the repair holds.',
    method:
      'When replacement is the right answer, we saw-cut clean lines, remove and haul off the old concrete, correct the base and drainage, and pour new sections jointed to the existing work. When it is not, we tell you so and bid the smaller fix.',
    items: [
      'Slab leveling & lifting',
      'Section cut-out & replacement',
      'Spall & surface resurfacing',
      'Crack routing & sealing',
      'Tear-out, removal & haul-off',
      'Drainage correction',
    ],
    specs: [
      { k: 'Diagnosis', v: 'Cause first, then fix' },
      { k: 'Cut lines', v: 'Saw-cut, straight & square' },
      { k: 'Match', v: 'Finish & color blended' },
      { k: 'Haul-off', v: 'Included in bid' },
    ],
    faqs: [
      {
        q: 'Should I repair or replace my cracked driveway?',
        a: 'If the slab is sound and the cracks are tight, routing and sealing or section replacement makes sense. If it has settled, heaved, or spalled over large areas, replacement over corrected base is the better long-term value. We will tell you which.',
      },
      {
        q: 'Why is my concrete flaking?',
        a: 'Surface scaling is usually caused by deicing salt on young or non-air-entrained concrete, or by finishing while bleed water was still on the surface. Resurfacing fixes the look; the spec on new work prevents it.',
      },
    ],
    keywords: ['concrete repair Utah', 'concrete removal Salt Lake City', 'slab leveling Utah', 'concrete resurfacing Utah', 'driveway replacement Wasatch Front'],
  },
  {
    slug: 'retaining-walls',
    title: 'Retaining Walls & Hardscape',
    shortTitle: 'Walls',
    blurb: 'Poured and block retaining walls, steps, and seat walls that hold the grade and drain the way they should.',
    detail:
      'Wasatch Front lots have grade, and grade needs holding. We build poured-in-place concrete walls, segmental block walls, and steps and seat walls that are engineered for the soil behind them — with footings below frost, drainage behind the wall, and backfill that will not push it over in ten years.',
    method:
      'Walls over four feet or carrying a surcharge get engineered drawings. Every wall gets a compacted footing, perforated drain pipe in washed rock, filter fabric, and weep paths — because hydrostatic pressure, not soil, is what fails most walls. Finishes range from board-form and smooth-rubbed to veneer-ready.',
    items: [
      'Poured-in-place concrete walls',
      'Segmental block walls',
      'Steps, stoops & landings',
      'Seat walls & planters',
      'Board-form & architectural finishes',
      'Wall drainage & backfill',
    ],
    specs: [
      { k: 'Footing', v: 'Below frost · compacted' },
      { k: 'Drainage', v: '4" perf pipe in washed rock' },
      { k: 'Engineering', v: '> 4 ft or surcharge' },
      { k: 'Finish', v: 'Board-form · rubbed · veneer' },
    ],
    faqs: [
      {
        q: 'Do retaining walls need a permit in Utah?',
        a: 'Most Wasatch Front cities require a permit and engineering for walls over four feet or walls supporting a driveway, structure, or slope. We will tell you what your city requires and build to the engineering.',
      },
    ],
    keywords: ['retaining wall contractor Utah', 'concrete retaining wall Salt Lake City', 'block retaining wall Utah', 'concrete steps Utah', 'seat wall concrete Utah'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
