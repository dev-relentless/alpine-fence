export interface HarlowService {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
}

export const harlowServices: HarlowService[] = [
  {
    slug: 'landscape-design',
    title: 'Landscape Design',
    shortTitle: 'Design',
    blurb: 'Master plans rooted in the architecture of your home and the character of the site.',
    detail:
      'Site analysis, concept development, planting plans, and construction documents — delivered as a cohesive vision you can build in phases or all at once.',
  },
  {
    slug: 'hardscape',
    title: 'Hardscape & Masonry',
    shortTitle: 'Hardscape',
    blurb: 'Stone terraces, paver courtyards, dry-stack walls, fire features, and built-in seating.',
    detail:
      'We work in natural stone, full-bed veneer, large-format porcelain, and quality concrete pavers — set on engineered bases that last decades.',
  },
  {
    slug: 'softscape',
    title: 'Softscape & Planting',
    shortTitle: 'Planting',
    blurb: 'Layered, climate-honest plantings designed for year-round presence.',
    detail:
      'Specimen trees, structural shrubs, perennial drifts, and ornamental grasses chosen for the Wasatch Front and detailed for low long-term care.',
  },
  {
    slug: 'irrigation',
    title: 'Irrigation & Water Management',
    shortTitle: 'Irrigation',
    blurb: 'Smart, zoned irrigation tuned for Utah water and your microclimate.',
    detail:
      'Drip and rotor zones, controller integration, rain/freeze sensors, and seasonal programming. Designed to meet local conservation requirements.',
  },
  {
    slug: 'outdoor-lighting',
    title: 'Outdoor Lighting',
    shortTitle: 'Lighting',
    blurb: 'Low-voltage architectural and landscape lighting, layered for depth.',
    detail:
      'Path, uplight, downlight, step, and accent fixtures specified to architectural-grade standards. Warm, glare-free, and zoned by scene.',
  },
  {
    slug: 'water-features',
    title: 'Water Features',
    shortTitle: 'Water',
    blurb: 'Reflecting basins, scuppers, pondless spillways, and sculptural fountains.',
    detail:
      'Engineered for quiet circulation, easy maintenance, and winter drainability.',
  },
  {
    slug: 'estate-care',
    title: 'Estate Care',
    shortTitle: 'Care',
    blurb: 'Ongoing horticultural stewardship for the spaces we build.',
    detail:
      'Seasonal pruning, fertility, irrigation tuning, and lighting service — by the same team that installed the project.',
  },
];
