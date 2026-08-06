export interface StructureCategory {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
  items: string[];
}

export const structureCategories: StructureCategory[] = [
  {
    slug: 'timber',
    title: 'Timber Pergolas',
    shortTitle: 'Timber',
    blurb: 'Rough-sawn cedar and fir with oversized posts and beams — shade structures that look like they grew there.',
    detail:
      'Classic timber pergolas, attached or freestanding, built like structures instead of furniture: posts set in concrete footings below frost line, spans sized to carry Utah snow, and connections thru-bolted — not kit brackets. Rafter and lattice spacing is designed around your sun exposure, and finishes are UV-stable stains that age gracefully instead of graying out.',
    items: [
      'Attached & freestanding pergolas',
      'Rough-sawn cedar & doug fir',
      'Oversized posts, beams & corbels',
      'Custom rafter & lattice spacing',
      'UV-stable stains & finishes',
      'Privacy walls & screens',
    ],
  },
  {
    slug: 'louvered',
    title: 'Louvered & Motorized',
    shortTitle: 'Louvered',
    blurb: 'Adjustable louvered roofs in powder-coated aluminum — open for sun, closed before the storm.',
    detail:
      'Motorized louvered systems that turn a patio into a room you can tune: louvers rotate for sun or shade, close watertight for rain, and shed snow like a solid roof. Powder-coated aluminum frames sized for Utah wind, with integrated LED lighting, ceiling fans, and rain and wind sensors that close the roof before you get to it.',
    items: [
      'Motorized louvered roofs',
      'Powder-coated aluminum frames',
      'Rain & wind sensors',
      'Integrated LED lighting',
      'Ceiling fans & infrared heaters',
      'Wind-rated anchoring',
    ],
  },
  {
    slug: 'pavilions',
    title: 'Pavilions & Solid Roofs',
    shortTitle: 'Pavilions',
    blurb: 'Solid-roof pavilions and gazebos for full weather cover — outdoor kitchens, hot tubs, and gathering space.',
    detail:
      'When the plan calls for full cover — outdoor kitchens, dining space, hot tubs — a pavilion carries a real roof on timber framing: shingled or metal roofing over engineered spans, tied into footings that treat it like the small building it is. Electrical rough-ins for lighting, fans, and heaters are planned from the first drawing, not fished in later.',
    items: [
      'Timber-frame pavilions',
      'Gazebos & garden structures',
      'Shingle & metal roofing',
      'Outdoor kitchen & hot tub cover',
      'Lighting, fans & heater wiring',
      'Concrete pads & footings',
    ],
  },
];
