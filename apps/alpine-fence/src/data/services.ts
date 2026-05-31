// Alpine Fence & Deck — Services Data

/**
 * Division tag enables future carve-out of the Yard & Landscape line
 * into its own brand / sub-brand / sale unit.
 * - 'fence-deck'    → existing 20-year Alpine Fence & Deck core line
 * - 'yard-landscape' → new service line, sale-prep tracked separately
 */
export type ServiceDivision = 'fence-deck' | 'yard-landscape';

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  priceRange: string;
  avgProjectValue: number;
  isCompoxen: boolean;
  ctaText: string;
  ctaHref: string;
  faqs: { question: string; answer: string }[];
  /** Defaults to 'fence-deck' when omitted (preserves legacy behavior). */
  division?: ServiceDivision;
}

export const services: ServiceData[] = [
  {
    id: 'compoxen-fence',
    slug: 'compoxen-fence-installation',
    title: 'Compoxen® Composite Fence Installation',
    shortTitle: 'Compoxen Fence',
    description: 'Transform your property with revolutionary Compoxen® composite fencing. Zero maintenance composite fence, lasting beauty, and exclusive designs only available through certified composite installers.',
    heroDescription: 'Experience the future of composite fencing. Compoxen® composite materials deliver stunning aesthetics with zero maintenance — backed by our exclusive certified composite installer guarantee.',
    icon: 'Shield',
    features: [
      'Exclusive Compoxen® composite material',
      '3D design visualization before install',
      'Zero-maintenance composite technology',
      'Custom color & texture matching',
      'HOA pre-approval assistance',
      'Structural engineering certification',
    ],
    benefits: [
      'Never stain, paint, or seal again',
      'Won\'t rot, warp, or splinter',
      '25-year material warranty',
      '10x return vs. repeated refinishing',
      'Increases property value',
      'Eco-friendly recycled materials',
    ],
    priceRange: '$8,000 – $45,000',
    avgProjectValue: 25000,
    isCompoxen: true,
    ctaText: 'Get a Free Estimate',
    ctaHref: '/quote?service=compoxen-fence',
    faqs: [
      { question: 'What is Compoxen® composite fencing?', answer: 'Compoxen® is a revolutionary composite material that delivers stunning wood-like aesthetics with zero maintenance. It won\'t rot, warp, or splinter, and comes with a 25-year material warranty.' },
      { question: 'How much does a composite fence cost in Utah?', answer: 'Compoxen® composite fence installations typically range from $8,000 to $45,000 depending on property size, design, and terrain. We provide free on-site estimates for accurate pricing.' },
      { question: 'Are Compoxen® fences HOA approved?', answer: 'Yes, Compoxen® composite fences are designed to meet HOA requirements. We offer HOA pre-approval assistance and provide documentation for your association.' },
      { question: 'How long does composite fence installation take?', answer: 'Most composite fence installations are completed within 1-2 weeks depending on the project scope. We provide a detailed timeline with your estimate.' },
    ],
  },
  {
    id: 'compoxen-deck',
    slug: 'compoxen-deck-installation',
    title: 'Compoxen® Composite Deck Installation',
    shortTitle: 'Compoxen Deck',
    description: 'Elevate your outdoor living with a Compoxen® composite deck. Revolutionary composite materials, breathtaking designs, and zero maintenance for 25 years.',
    heroDescription: 'Create the outdoor living space of your dreams. Compoxen® composite decking delivers unmatched beauty, durability, and zero-maintenance living — the ultimate composite deck designed exclusively for your home.',
    icon: 'Home',
    features: [
      'Custom deck design consultation',
      'Premium Compoxen® decking materials',
      'Multi-level & wrap-around designs',
      'Built-in lighting integration',
      'Railing & privacy screen options',
      'Permit handling included',
    ],
    benefits: [
      'Maintenance-free for life',
      'Resistant to UV, moisture & insects',
      'Slip-resistant texture technology',
      'Custom design to your specifications',
      'Professional structural engineering',
      'Property value increase: 70-80% ROI',
    ],
    priceRange: '$15,000 – $75,000',
    avgProjectValue: 35000,
    isCompoxen: true,
    ctaText: 'Get a Free Estimate',
    ctaHref: '/quote?service=compoxen-deck',
    faqs: [
      { question: 'How much does a composite deck cost in Utah?', answer: 'Compoxen® composite deck installations range from $15,000 to $75,000 depending on size, design complexity, and features. Free on-site estimates are available.' },
      { question: 'Do composite decks get hot in Utah summers?', answer: 'Compoxen® composite uses advanced technology to reduce heat absorption compared to traditional composite materials, making it comfortable for bare feet even in summer.' },
      { question: 'What is the ROI on a composite deck?', answer: 'Composite deck installations typically see a 70-80% return on investment in property value. Combined with zero maintenance costs, the total cost of ownership is lower than wood over 10+ years.' },
      { question: 'Can you build custom deck designs with composite?', answer: 'Absolutely. We offer 3D design visualization before installation so you can see your custom composite deck design, including curves, multi-levels, built-in seating, and more.' },
    ],
  },
  {
    id: 'wood-fence-installation',
    slug: 'wood-fence-installation',
    title: 'Wood Fence Installation',
    shortTitle: 'Wood Fence',
    description: 'Professional wood fence installation for Utah homeowners. Privacy fences, picket fences, cedar, pine, and custom designs. Expert craftsmanship with quality materials built to handle Utah\'s climate.',
    heroDescription: 'Get a beautiful, professionally installed wood fence that adds privacy, security, and curb appeal to your property. We build cedar, pine, and custom wood fences designed to withstand Utah\'s harsh seasons.',
    icon: 'Fence',
    features: [
      'Privacy, picket & custom designs',
      'Premium cedar & pine options',
      'Steel post reinforcement available',
      'Gate installation & hardware',
      'HOA-compliant designs',
      'Permit handling included',
    ],
    benefits: [
      'Lower upfront cost than composite',
      'Classic natural wood appearance',
      'Customizable stain & paint colors',
      'Fast installation — most in 3-5 days',
      'Increases property value & security',
      'Upgrade path to Compoxen® composite later',
    ],
    priceRange: '$3,000 – $15,000',
    avgProjectValue: 7500,
    isCompoxen: false,
    ctaText: 'Get Free Fence Estimate',
    ctaHref: '/quote?service=wood-fence',
    faqs: [
      { question: 'What types of wood fences do you install?', answer: 'We install privacy fences, picket fences, split rail, horizontal slat, and custom designs. We work with cedar, pine, and other quality wood species suited for Utah\'s climate.' },
      { question: 'How much does a wood fence cost in Utah?', answer: 'Wood fence installations typically range from $3,000 to $15,000 depending on the fence style, wood species, property size, and terrain. We provide free on-site estimates for accurate pricing.' },
      { question: 'How long does a wood fence last in Utah?', answer: 'With proper maintenance and staining every 2-3 years, a quality wood fence lasts 15-20 years in Utah. Cedar fences tend to last longer due to natural rot resistance. For a zero-maintenance option, ask about our Compoxen® composite fencing.' },
      { question: 'Do you handle fence permits?', answer: 'Yes, we handle all permit requirements for fence installation in your city. We also provide HOA pre-approval assistance and documentation for your homeowners association.' },
    ],
  },
  {
    id: 'deck-refinishing',
    slug: 'deck-refinishing',
    title: 'Deck & Fence Refinishing',
    shortTitle: 'Refinishing',
    description: 'Professional deck and fence refinishing services that restore your outdoor living spaces to their original beauty. Sanding, staining, sealing, and weatherproofing. Ask about upgrading to composite.',
    heroDescription: 'Restore your weathered deck or fence to its original beauty with our professional refinishing services. Expert sanding, staining, and sealing that protects your investment. Consider a composite upgrade for zero maintenance.',
    icon: 'Paintbrush',
    features: [
      'Complete surface preparation & sanding',
      'Premium stain & sealant application',
      'UV protection coating',
      'Color matching & consultation',
      'Preventive maintenance plans',
      'Weather damage assessment',
    ],
    benefits: [
      'Extends wood life by 5-10 years',
      'Fraction of replacement cost',
      'Same-day estimates available',
      'Typically completed in 1-3 days',
      'HOA-compliant finishes',
      'Satisfaction guaranteed',
    ],
    priceRange: '$800 – $3,500',
    avgProjectValue: 2000,
    isCompoxen: false,
    ctaText: 'Get Free Refinishing Estimate',
    ctaHref: '/quote?service=refinishing',
    faqs: [
      { question: 'How often should I refinish my fence or deck in Utah?', answer: 'In Utah\'s climate with harsh sun and winter weather, wood fences and decks should be refinished every 2-3 years to maintain protection and appearance.' },
      { question: 'How long does deck refinishing take?', answer: 'Most refinishing projects are completed in 1-3 days depending on size and condition. We provide same-day estimates so you know the timeline upfront.' },
      { question: 'What\'s included in your refinishing service?', answer: 'Our refinishing includes complete surface preparation, sanding, premium stain or sealant application, UV protection coating, and a satisfaction guarantee.' },
      { question: 'Can you match my existing fence stain color?', answer: 'Yes, we offer professional color matching and consultation to ensure your refinished fence or deck matches your desired look perfectly.' },
    ],
  },
  {
    id: 'fence-repair',
    slug: 'fence-repair',
    title: 'Fence & Deck Repair',
    shortTitle: 'Repair',
    description: 'Fast, reliable fence and deck repair services. From loose boards to structural damage, our team handles emergency and scheduled repairs. Ask about composite upgrade options.',
    heroDescription: 'Don\'t let damaged fences or decks compromise your property\'s safety and value. Our expert repair team provides fast, reliable service with a 2-hour callback guarantee. Composite upgrade paths available.',
    icon: 'Wrench',
    features: [
      'Emergency repair service',
      'Structural assessment & repair',
      'Board replacement & patching',
      'Post replacement & re-setting',
      'Gate repair & alignment',
      'Storm damage restoration',
    ],
    benefits: [
      '2-hour callback guarantee',
      'Same-week service for most repairs',
      'Honest damage assessment',
      'Insurance claim assistance',
      'Warranty on all repairs',
      'Upgrade path to Compoxen® composite',
    ],
    priceRange: '$200 – $2,500',
    avgProjectValue: 800,
    isCompoxen: false,
    ctaText: 'Request Emergency Repair',
    ctaHref: '/quote?service=repair',
    faqs: [
      { question: 'How quickly can you repair my fence?', answer: 'We offer a 2-hour callback guarantee during business hours. Most repairs are scheduled within the same week, with emergency service available for urgent damage.' },
      { question: 'Do you help with insurance claims for storm damage?', answer: 'Yes, we provide detailed damage assessments and documentation to assist with your insurance claim for storm-damaged fences and decks.' },
      { question: 'Is it better to repair or replace my fence?', answer: 'We provide an honest assessment of your fence\'s condition. Minor damage is worth repairing, but if your fence needs frequent repairs, upgrading to Compoxen® composite can save money long-term.' },
      { question: 'Do you warranty your repair work?', answer: 'Yes, all repair work comes with our workmanship warranty. We stand behind every project we complete.' },
    ],
  },
  {
    id: 'fence-deck-staining',
    slug: 'fence-deck-staining',
    title: 'Fence & Deck Staining',
    shortTitle: 'Staining',
    description: 'Professional fence and deck staining that protects your wood from Utah\'s harsh sun, snow, and wind while restoring deep, rich color. Premium oil and water-based stains, expert prep, and clean finishes.',
    heroDescription: 'Bring your fence or deck back to life with a professional staining service. We prep, stain, and seal with premium products built to handle Utah\'s climate — leaving you with rich color and long-lasting protection.',
    icon: 'Paintbrush',
    features: [
      'Power wash & full surface prep',
      'Premium oil or water-based stains',
      'Custom color matching',
      'UV & weather-resistant sealing',
      'Clean, drip-free application',
      'Property protection during work',
    ],
    benefits: [
      'Restores deep, rich color',
      'Extends wood life by 5-10 years',
      'Locks out moisture & UV damage',
      'Most projects completed in 1-2 days',
      'HOA-compliant finishes',
      'Workmanship satisfaction guarantee',
    ],
    priceRange: '$600 – $3,000',
    avgProjectValue: 1500,
    isCompoxen: false,
    ctaText: 'Get Free Staining Estimate',
    ctaHref: '/quote?service=staining',
    faqs: [
      { question: 'How often should I stain my fence or deck in Utah?', answer: 'Utah\'s intense sun and freeze-thaw cycles are tough on wood. Most fences and decks need re-staining every 2-3 years to maintain protection and color.' },
      { question: 'How long does a fence or deck staining project take?', answer: 'Most projects are completed in 1-2 days depending on size and prep needed. We provide a clear timeline with your free estimate.' },
      { question: 'What kind of stain do you use?', answer: 'We use premium oil-based and water-based stains selected for Utah\'s climate. We help you choose a transparent, semi-transparent, or solid stain that matches your goals.' },
      { question: 'Can you match my existing fence or deck color?', answer: 'Yes — we offer custom color matching and on-site samples so you can see the finish before we commit to the full job.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCompoxenServices(): ServiceData[] {
  return services.filter((s) => s.isCompoxen);
}

export function getRefinishingServices(): ServiceData[] {
  return services.filter((s) => !s.isCompoxen);
}

// ──────────────────────────────────────────────────────────────────────
// Yard & Landscape Service Line
//
// New as of 2026-05. Tagged with division: 'yard-landscape' so the entire
// line can be lifted out into a future "Alpine Yardworks" sub-brand or
// carve-out sale without untangling it from the fence/deck core.
//
// Held in a separate array so existing consumers of `services` (the
// /services index, /services/[slug] route, footer service column, etc.)
// continue to show only fence/deck offerings. Landscape gets its own
// /landscaping namespace.
// ──────────────────────────────────────────────────────────────────────

export const landscapeServices: ServiceData[] = [
  {
    id: 'sod-lawn-installation',
    slug: 'sod-lawn-installation',
    title: 'Sod & Lawn Installation',
    shortTitle: 'Sod & Lawn',
    description: 'Fresh sod and full lawn installation for Utah yards. Site prep, grading, soil amendment, and premium Utah-climate sod that roots fast and looks finished from day one.',
    heroDescription: 'Turn bare dirt into a finished yard in a single day. We grade, amend, and install premium Utah-climate sod with the same crews who\'ve fenced 1,700+ Wasatch Front yards since 2009.',
    icon: 'Sprout',
    features: [
      'Site grading & soil prep',
      'Soil amendment & fertilizer',
      'Premium Utah-climate sod',
      'Edge trimming & finish work',
      'Watering schedule guidance',
      'Coordinated with fence/sprinkler installs',
    ],
    benefits: [
      'Instant finished-yard look',
      'Roots within 2–3 weeks',
      'Pairs with new fence builds',
      'Drought-tolerant varieties available',
      'Workmanship guarantee',
      'One crew, one schedule, one invoice',
    ],
    priceRange: '$1,500 – $8,000',
    avgProjectValue: 3500,
    isCompoxen: false,
    ctaText: 'Get Free Sod Estimate',
    ctaHref: '/quote?service=sod-lawn-installation&division=yard-landscape',
    division: 'yard-landscape',
    faqs: [
      { question: 'What\'s actually included in a sod install?', answer: 'Everything end-to-end: site walk-through, free design layout, soil testing, grading, soil amendment, premium Utah-climate sod, edge trimming, full cleanup, a printed watering & care schedule, a 30-day check-in visit, and our workmanship guarantee. One transparent proposal — no surprise add-ons.' },
      { question: 'Do you handle HOA approval and submittals?', answer: 'Yes — always included. We prepare the HOA submittal packet (design, materials list, photo references, plant/turf species sheet) and submit it for you. We\'ve worked with 200+ Wasatch Front HOAs since 2009.' },
      { question: 'When is the best time to install sod in Utah?', answer: 'Spring (April–June) and early fall (September–October) are ideal. Utah summers are doable with attentive watering, and we install year-round when the ground isn\'t frozen. We\'ll lock your install date the same week you sign.' },
      { question: 'Will it bundle cleanly with my fence or deck project?', answer: 'Yes — same crew, one mobilization, one schedule, one warranty, one invoice. Most of our landscape jobs start as bundle add-ons to fence builds, so the project finishes in one coordinated visit.' },
      { question: 'How long until I can walk on new sod?', answer: 'Light foot traffic is fine after about 2 weeks once the roots set. We hand you a printed watering schedule, set up your sprinkler timer for the rooting period, and circle back at 30 days to confirm everything is thriving.' },
      { question: 'What turf varieties do you install?', answer: 'Premium Utah-climate blends from established Wasatch Front sod growers — cool-season blends for shaded yards, drought-tolerant varieties for full sun. We bring samples and recommend the right blend for your light and soil.' },
    ],
  },
  {
    id: 'retaining-walls',
    slug: 'retaining-walls-hardscapes',
    title: 'Retaining Walls & Hardscapes',
    shortTitle: 'Retaining Walls',
    description: 'Engineered retaining walls and hardscape features for Utah\'s sloped yards. Block, boulder, and timber walls built to last decades — designed by the same crews that handle structural fence work.',
    heroDescription: 'Tame a sloped lot, terrace a hillside, or define a garden bed with a retaining wall built to last. We engineer for Utah soils and freeze-thaw cycles — the same structural craftsmanship behind 1,700+ Alpine fence builds.',
    icon: 'Layers',
    features: [
      'Engineered for Utah soil & frost',
      'Block, boulder & timber options',
      'Drainage system included',
      'Permit handling for walls over 4 ft',
      'Geo-grid reinforcement when required',
      'Integrated with grading & landscape',
    ],
    benefits: [
      'Stops erosion & soil loss',
      'Adds usable yard space',
      'Increases property value',
      'Decades of structural life',
      'Same crew that builds your fence',
      'Workmanship guarantee',
    ],
    priceRange: '$3,500 – $25,000',
    avgProjectValue: 9500,
    isCompoxen: false,
    ctaText: 'Get Free Wall Estimate',
    ctaHref: '/quote?service=retaining-walls-hardscapes&division=yard-landscape',
    division: 'yard-landscape',
    faqs: [
      { question: 'What\'s included with a retaining wall project?', answer: 'A complete turnkey package: site assessment, engineered design, HOA submittal, city permits, engineer\'s stamp when required, excavation, base prep, geo-grid reinforcement, full drainage system, premium block or boulder, backfill, capstones, and our workmanship guarantee. Drainage and reinforcement are always included — never an add-on.' },
      { question: 'Do you handle HOA approval and city permits?', answer: 'Yes — both, always included. We prepare the HOA submittal (design, elevations, materials, samples) and pull all city permits for walls over 4 feet or walls supporting a structure. Engineer-stamped drawings included on permitted walls. You don\'t lift a finger on paperwork.' },
      { question: 'What materials do you use for retaining walls?', answer: 'Segmental concrete block, natural Utah boulder, and architectural-grade options. We bring physical samples to the consultation and recommend the right material based on slope, soil type, freeze-thaw exposure, and your aesthetic — not what we have leftover on the truck.' },
      { question: 'How long does a retaining wall last?', answer: 'A properly engineered block or boulder wall with proper drainage lasts 50+ years. Drainage is the #1 factor in wall longevity, and we always include a full drain system with filter fabric and weep relief — even when competitors leave it out.' },
      { question: 'Can you build a retaining wall with a fence on top?', answer: 'Yes — it\'s one of our most-requested combinations. We engineer the wall to carry fence loads and pre-set post sleeves during wall construction. One crew, one mobilization, one warranty across the whole assembly.' },
      { question: 'How long does the build take?', answer: 'Most residential walls finish in 4–10 working days depending on length, height, and access. We give you a written schedule before we break ground and update you daily through completion.' },
    ],
  },
  {
    id: 'paver-patios',
    slug: 'paver-patios-walkways',
    title: 'Paver Patios & Walkways',
    shortTitle: 'Paver Patios',
    description: 'Custom paver patios, walkways, and driveways across Utah. Engineered base, premium pavers, and finish work that integrates beautifully with your deck, fence, and yard.',
    heroDescription: 'Extend your outdoor living with a paver patio or walkway designed to outlast Utah weather. Built on engineered base, integrated with your deck and fence, and finished by craftsmen who treat your property like their own.',
    icon: 'Square',
    features: [
      'Custom design & layout',
      'Engineered base for Utah frost',
      'Premium pavers — many styles',
      'Polymeric joint sand',
      'Edge restraint included',
      'Pairs with deck & landscape design',
    ],
    benefits: [
      'Higher ROI than concrete',
      'Individually replaceable units',
      'No cracking like poured concrete',
      'Decades of life with minimal upkeep',
      'Designed to flow with your deck',
      'Workmanship guarantee',
    ],
    priceRange: '$3,000 – $20,000',
    avgProjectValue: 8000,
    isCompoxen: false,
    ctaText: 'Get Free Patio Estimate',
    ctaHref: '/quote?service=paver-patios-walkways&division=yard-landscape',
    division: 'yard-landscape',
    faqs: [
      { question: 'What\'s included with a paver patio project?', answer: 'The full premium package: free design rendering, paver/style consult with samples, layout staking, excavation, engineered base for Utah frost, geotextile fabric, premium pavers, polymeric joint sand, edge restraint, optional sealer, full cleanup, and a lifetime structural warranty on the base prep. HOA submittal and permits handled — never an add-on.' },
      { question: 'Do you provide design renderings?', answer: 'Yes — every patio quote includes a 2D design layout with your home\'s footprint, paver pattern preview, and physical material samples brought to the consult. Larger full-yard projects include a 3D rendering and photo overlays so you see exactly what you\'re buying before we break ground.' },
      { question: 'Do you handle HOA submittals for patios?', answer: 'Yes — always included. We assemble the HOA packet (design, paver samples, color/finish spec sheet) and submit on your behalf. Most Wasatch Front HOAs we\'ve worked with approve within 2 weeks.' },
      { question: 'Are pavers better than poured concrete?', answer: 'For Utah\'s freeze-thaw cycles, yes. Pavers flex with frost, won\'t crack across the slab, and individual units can be lifted and reset if needed — try that with a poured slab. Pavers also resell better and look custom on day one.' },
      { question: 'Can you tie a paver patio into my new deck?', answer: 'Absolutely — patio and deck designed together is one of our most common projects. We coordinate elevations, drainage, and transitions for a seamless look. One project manager, one warranty, one invoice across both.' },
      { question: 'How long does the install take?', answer: 'Most patios are completed in 3–7 working days depending on size and complexity. Larger driveways or multi-level layouts may take 1–2 weeks. You get a written schedule before we break ground.' },
    ],
  },
  {
    id: 'sprinkler-irrigation',
    slug: 'sprinkler-irrigation-install',
    title: 'Sprinkler & Irrigation Install & Repair',
    shortTitle: 'Sprinklers',
    description: 'New sprinkler system installation, repair, and smart-controller upgrades. Efficient zoning, drip lines for beds, and Utah-water-conscious design.',
    heroDescription: 'A great lawn starts with great irrigation. We install efficient, zoned sprinkler systems and drip lines designed for Utah\'s water restrictions — and repair existing systems fast.',
    icon: 'Droplets',
    features: [
      'New system design & install',
      'Zone planning & coverage mapping',
      'Smart Wi-Fi controllers',
      'Drip irrigation for beds',
      'Backflow preventer installation',
      'Repairs & winterization',
    ],
    benefits: [
      'Lower water bills',
      'Healthier lawn & plants',
      'App-controlled scheduling',
      'Compliant with Utah water rules',
      'Bundles with sod install',
      'Workmanship guarantee',
    ],
    priceRange: '$200 – $6,000',
    avgProjectValue: 2800,
    isCompoxen: false,
    ctaText: 'Get Free Sprinkler Estimate',
    ctaHref: '/quote?service=sprinkler-irrigation-install&division=yard-landscape',
    division: 'yard-landscape',
    faqs: [
      { question: 'What\'s included with a new sprinkler install?', answer: 'A turnkey install: free zone design and coverage map, backflow preventer with city tag/inspection handled, Wi-Fi smart controller, premium heads sized to each zone, drip lines for beds, full trenching and cleanup, system commissioning, app setup on your phone, a printed schedule, and the first winterization free in year one. Workmanship guarantee on every fitting.' },
      { question: 'Do you handle the city backflow inspection and tag?', answer: 'Yes — always included. We pull the permit, install a code-compliant backflow preventer, and schedule the city tag inspection on your behalf. You don\'t need to be home for the inspection.' },
      { question: 'Do smart controllers qualify for Utah water rebates?', answer: 'Yes — Rachio, Hunter Hydrawise, and Rain Bird Wi-Fi controllers all qualify for rebates from most Utah water districts. We file the rebate paperwork for you as part of the install.' },
      { question: 'Can you repair my existing sprinkler system?', answer: 'Yes — same-week service for most repairs. Broken heads, cracked lines, valve issues, controller programming, leak detection, and full system audits. Flat-rate diagnostic and a transparent quote before any work begins.' },
      { question: 'Do you handle ongoing winterization and spring start-up?', answer: 'Yes — annual blowouts and spring start-ups are available as a low-touch membership that protects your system and keeps your warranty current. First winterization is free with a new install.' },
      { question: 'How efficient are your zone designs?', answer: 'Every zone is mapped to coverage, sun exposure, and plant type — lawn, garden bed, and tree zones run on independent schedules. Combined with a smart controller, most of our installs cut watering use 20–30% versus older systems.' },
    ],
  },
  {
    id: 'landscape-design',
    slug: 'landscape-design-grading',
    title: 'Landscape Design & Grading',
    shortTitle: 'Design & Grading',
    description: 'Full-yard landscape design and grading for new builds and renovations. Plan once, build right — fence, deck, sod, walls, sprinklers, and beds designed as one cohesive yard.',
    heroDescription: 'Plan the whole yard before the first shovel hits the ground. We design and grade complete outdoor spaces — fence, deck, sod, walls, pavers, and irrigation — so every element works together from day one.',
    icon: 'PenTool',
    features: [
      'Full-property design consultation',
      'Site grading & drainage planning',
      'Material & plant selection',
      'Coordinates fence, deck & landscape',
      'HOA-friendly design options',
      'Phased build planning available',
    ],
    benefits: [
      'One unified vision, one crew',
      'Avoids expensive rework',
      'Solves drainage problems up front',
      'Maximizes property value',
      'Bundle pricing across services',
      'Workmanship guarantee',
    ],
    priceRange: '$500 – $5,000 (design) · install varies',
    avgProjectValue: 1800,
    isCompoxen: false,
    ctaText: 'Book a Design Consultation',
    ctaHref: '/quote?service=landscape-design-grading&division=yard-landscape',
    division: 'yard-landscape',
    faqs: [
      { question: 'What\'s in the landscape design package?', answer: 'A complete buildable plan: on-site survey, drainage assessment, scaled 2D site plan, hardscape layout (patio, walls, walkways), planting plan with Utah-climate species, irrigation zone map, materials list with quantities, an HOA-ready PDF submittal packet, and a phased build plan. Larger full-yard projects include a 3D rendering at no extra charge.' },
      { question: 'Is the design fee credited if you build the project?', answer: 'Yes — 100% of the design fee is credited back to your project when Alpine builds it. So when you bundle design with install, the design is effectively free. Most of our design clients move straight into install with us.' },
      { question: 'Do you prepare the HOA submittal packet?', answer: 'Yes — always included with every full-yard design. We assemble the HOA packet (rendering, plant list, hardscape materials, color/finish samples) and submit it on your behalf. We\'ve been approved by 200+ Wasatch Front HOAs since 2009.' },
      { question: 'Do I really need a landscape design before building?', answer: 'For larger projects — absolutely. A design avoids expensive rework, solves drainage problems before they\'re buried under sod, and lets you phase the build across multiple seasons without the plan drifting. It\'s the cheapest insurance you\'ll buy on the project.' },
      { question: 'Can you grade my yard for drainage?', answer: 'Yes — proper grading is the #1 way to protect a foundation, fence, and lawn. We assess slope, soil, and runoff with a transit, then re-grade and install drains where needed. Drainage warranty included.' },
      { question: 'Can I phase a big project over multiple years?', answer: 'Absolutely — and we recommend it for larger projects. We design the full yard, then build it in phases (fence year one, sod & sprinklers year two, patio year three). The plan stays locked, and you keep one project manager and one warranty across all phases.' },
    ],
  },
];

export function getLandscapeServiceBySlug(slug: string): ServiceData | undefined {
  return landscapeServices.find((s) => s.slug === slug);
}

/** All services across both divisions — for site-wide search and schema. */
export function getAllServices(): ServiceData[] {
  return [...services, ...landscapeServices];
}

export function getServicesByDivision(division: ServiceDivision): ServiceData[] {
  return getAllServices().filter((s) => (s.division ?? 'fence-deck') === division);
}
