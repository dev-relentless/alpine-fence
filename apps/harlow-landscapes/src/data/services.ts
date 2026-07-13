export interface HarlowService {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
}

export const harlowServices: HarlowService[] = [
  {
    slug: 'full-landscape-install',
    title: 'Full Landscape Installation',
    shortTitle: 'Full Install',
    blurb: 'Complete outdoor environments — site to finish, drawn once and built whole.',
    detail:
      'Turn-key installations across the property: grading, drainage, hardscape, structures, planting, lighting, irrigation, and finish. One firm, one schedule, one accountability line — from rough earthwork to the day the last fixture is aimed.',
  },
  {
    slug: 'landscape-design',
    title: 'Landscape Design & Master Planning',
    shortTitle: 'Design',
    blurb: 'Considered master plans rooted in the architecture of the home and the grade of the site.',
    detail:
      'Site analysis, concept development, construction documents, and material palettes — a complete vision your property can be built to, in phases or as a single season of work.',
  },
  {
    slug: 'retaining-walls',
    title: 'Retaining Walls & Site Structures',
    shortTitle: 'Retaining Walls',
    blurb: 'Engineered walls — drystack stone, board-formed concrete, segmental block, and steel.',
    detail:
      'Structural retaining walls designed for the slope, soil, and load. Hand-laid natural stone, architectural block, cor-ten steel edges, and poured concrete — all set on engineered footings with drainage detailed in. Built once, built right.',
  },
  {
    slug: 'hardscape',
    title: 'Hardscape & Masonry',
    shortTitle: 'Hardscape',
    blurb: 'Stone terraces, paver courtyards, fire features, outdoor kitchens, and built-in seating.',
    detail:
      'We work in natural stone, full-bed veneer, large-format porcelain, and architectural-grade pavers — set on engineered bases that last decades, not seasons.',
  },
  {
    slug: 'sport-courts',
    title: 'Sport Courts',
    shortTitle: 'Sport Courts',
    blurb: 'Tournament-grade pickleball, basketball, and multi-sport courts — sited, lit, and finished.',
    detail:
      'Engineered base, post-tensioned concrete or asphalt, modular sport surfacing, custom striping, fencing, and low-glare lighting. Integrated into the larger landscape so the court reads as part of the property — not bolted onto it.',
  },
  {
    slug: 'softscape',
    title: 'Planting & Softscape',
    shortTitle: 'Planting',
    blurb: 'Layered, climate-honest plantings designed for year-round presence.',
    detail:
      'Specimen trees, structural shrubs, perennial drifts, and ornamental grasses chosen for the Wasatch Front and detailed for low long-term care.',
  },
  {
    slug: 'outdoor-lighting',
    title: 'Outdoor & Architectural Lighting',
    shortTitle: 'Lighting',
    blurb: 'Low-voltage architectural lighting, layered for depth and tuned for warmth.',
    detail:
      'Path, uplight, downlight, step, and accent fixtures specified to architectural-grade standards. Glare-free, scene-zoned, and integrated with home automation when desired.',
  },
  {
    slug: 'water-features',
    title: 'Water Features',
    shortTitle: 'Water',
    blurb: 'Reflecting basins, scuppers, pondless spillways, and sculptural fountains.',
    detail:
      'Engineered for quiet circulation, easy maintenance, and clean winter drainability — designed as architectural objects, not pond kits.',
  },
  {
    slug: 'irrigation',
    title: 'Irrigation & Water Management',
    shortTitle: 'Irrigation',
    blurb: 'Smart, zoned irrigation tuned for Utah water and your microclimate.',
    detail:
      'Drip and rotor zones, controller integration, rain/freeze sensors, and seasonal programming designed to meet local conservation requirements.',
  },
  {
    slug: 'estate-care',
    title: 'Estate Stewardship',
    shortTitle: 'Stewardship',
    blurb: 'Ongoing care of the landscapes we build — by the people who built them.',
    detail:
      'Stewardship is how a landscape stays at its peak. Mowing, edging, fertility, pruning by our horticulturists, irrigation tuning, lighting service, hardscape inspection, and replanting refinements as the property matures. Full-service maintenance — by the same firm that built it.',
  },
];
