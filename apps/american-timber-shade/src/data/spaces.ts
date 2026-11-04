/**
 * Beyond the pergola — the rest of the outdoor space. Rendered on
 * /outdoor-living and as a grid on the homepage.
 */

export interface Space {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
  photo: string;
  items: string[];
}

export const spaces: Space[] = [
  {
    slug: 'pavilions',
    title: 'Pavilions & Solid Roofs',
    shortTitle: 'Pavilions',
    blurb: 'Full weather cover on timber framing — the room that works in July and in January.',
    detail:
      'When the plan calls for a real roof — over the kitchen, the dining table, the hot tub — a pavilion carries standing-seam metal or architectural shingles on heavy-timber framing. We tie it into footings that treat it like the small building it is and rough-in power for lights, fans, and heat from the first drawing.',
    photo: '/ats/spaces/pavilions.jpg',
    items: ['Timber-frame pavilions', 'Standing-seam & shingle roofs', 'Tongue-and-groove ceilings', 'Gable, hip & shed forms', 'Fans, heaters & lighting', 'Attached or freestanding'],
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    shortTitle: 'Kitchens',
    blurb: 'Stone, steel, and timber — a kitchen you actually cook in, under a roof you actually use.',
    detail:
      'Built-in grills, smokers, and pizza ovens set in masonry or steel-framed cabinetry with stone or concrete counters. We run the gas, water, and power, size the counters for how you host, and shade the whole thing so the cook isn\u2019t the one standing in the sun.',
    photo: '/ats/spaces/outdoor-kitchens.jpg',
    items: ['Built-in grills & smokers', 'Pizza ovens & griddles', 'Stone & concrete counters', 'Bar seating & islands', 'Refrigeration & sinks', 'Gas, water & power'],
  },
  {
    slug: 'fire-features',
    title: 'Fire Features',
    shortTitle: 'Fire',
    blurb: 'Fire pits, fire tables, and outdoor fireplaces — the reason the evening runs long.',
    detail:
      'Gas or wood, sunken or raised, a linear burner in a steel trough or a full masonry fireplace with a chimney that anchors the yard. We detail fire for the way you gather — seat height, wind direction, and distance from the timber above.',
    photo: '/ats/spaces/fire-features.jpg',
    items: ['Gas & wood fire pits', 'Linear fire tables', 'Masonry fireplaces', 'Sunken fire lounges', 'Built-in seating', 'Gas lines & controls'],
  },
  {
    slug: 'privacy-screens',
    title: 'Privacy Screens & Walls',
    shortTitle: 'Privacy',
    blurb: 'Slatted timber, steel, and planting — enclosure without the feeling of a fence.',
    detail:
      'Horizontal slat screens, louvered privacy panels, and timber-framed walls that hide the neighbor\u2019s window and frame your own view. Designed as part of the structure so the grain, spacing, and finish all read as one piece.',
    photo: '/ats/spaces/privacy-screens.jpg',
    items: ['Horizontal slat screens', 'Louvered privacy panels', 'Timber & steel frames', 'Planter walls & trellises', 'Wind screens', 'Integrated lighting'],
  },
  {
    slug: 'lighting',
    title: 'Lighting & Electrical',
    shortTitle: 'Lighting',
    blurb: 'Lighting designed in, not strung up — the structure at night is half the point.',
    detail:
      'Low-voltage uplights in the posts, downlights hidden in the rafters, step and path lighting, and dimmable zones on one app. Conduit is run inside the timber so there\u2019s nothing to see but the light. Fans, heaters, speakers, and outlets are wired on the same plan.',
    photo: '/ats/spaces/lighting.jpg',
    items: ['Post & rafter lighting', 'Path, step & landscape lights', 'Dimmable zones & smart control', 'Ceiling fans & heaters', 'Outlets & USB', 'Audio rough-in'],
  },
  {
    slug: 'spa-surrounds',
    title: 'Hot Tub & Spa Surrounds',
    shortTitle: 'Spa',
    blurb: 'A spa set into the deck, under cover, with a private screen — a resort in the back yard.',
    detail:
      'Cantilevered decking that meets the spa flush, a pergola or pavilion overhead for snow-day soaks, privacy screens on the sight lines, and lighting on the steps. Structure is engineered for the water weight, and access panels stay invisible until you need them.',
    photo: '/ats/spaces/spa-surrounds.jpg',
    items: ['Flush-set spa decking', 'Covered spa pavilions', 'Privacy screens', 'Step & deck lighting', 'Engineered for load', 'Hidden service access'],
  },
  {
    slug: 'design-build',
    title: 'Complete Outdoor Living',
    shortTitle: 'Design-Build',
    blurb: 'One firm from drawings to the last light fixture — the whole back yard as a single composition.',
    detail:
      'For clients who want everything to match: pergola, pavilion, kitchen, fire, screens, and lighting designed together on one plan and built by one crew. Materials, proportions, and finishes carry across the whole space so it reads as one room rather than a collection of projects.',
    photo: '/ats/spaces/design-build.jpg',
    items: ['Concept & 3D design', 'Permits & engineering', 'Hardscape coordination', 'One crew, one schedule', 'Single point of contact', 'Written proposal & warranty'],
  },
];
