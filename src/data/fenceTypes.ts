// Alpine Fence & Deck — Material Showcase + SEO Landing Pages
// Rich data powering /fences/[type] dynamic routes and the homepage product grid.
// Image paths point to /public/images/fence-types/{slug}.jpg.

export interface FenceType {
  slug: string;
  name: string;
  category: 'Fence' | 'Deck' | 'Railing' | 'Custom';
  tagline: string;
  image: string;
  href: string;

  // SEO + page content
  metaTitle: string;
  metaDescription: string;
  intro: string;
  priceRange: string;
  lifespan: string;
  maintenance: string;
  bestFor: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export const fenceTypes: FenceType[] = [
  {
    slug: 'wood-fencing',
    name: 'Wood Fencing',
    category: 'Fence',
    tagline: 'Classic cedar craftsmanship.',
    image: '/images/fence-types/wood-fencing.jpg',
    href: '/fences/wood-fencing',
    metaTitle: 'Wood Fence Installation in Utah | Cedar Privacy & Picket Fences',
    metaDescription:
      'Premium wood fence installation across Utah. Cedar privacy, picket, board-on-board, and ranch rail. HOA-compliant, steel-post reinforced. Free estimates. (801) 471-3148',
    intro:
      'A wood fence is more than a property line — it\u2019s a craftsman statement. We install cedar and pine privacy, picket, board-on-board, and ranch rail fences engineered for Utah\u2019s freeze-thaw cycles, with concrete-set posts and galvanized fasteners.',
    priceRange: '$3,000 – $15,000 (typical)',
    lifespan: '15 – 25 years (with proper staining)',
    maintenance: 'Stain or seal every 2 – 3 years',
    bestFor: ['Traditional homes', 'Privacy & security', 'Ranch & equestrian properties', 'HOA neighborhoods'],
    features: [
      'Premium cedar or pressure-treated pine',
      'Concrete-set posts at code depth',
      'Steel post reinforcement available',
      'Custom heights and gate designs',
      'HOA-compliant designs & permit handling',
      'Workmanship warranty included',
    ],
    faqs: [
      { q: 'How long does a wood fence last in Utah?', a: 'A properly built and maintained cedar wood fence lasts 15–25 years in Utah. Staining every 2–3 years and replacing damaged boards keeps it in top shape.' },
      { q: 'Is cedar or pine better for Utah?', a: 'Cedar is naturally rot- and insect-resistant and holds stain beautifully — our most-recommended choice. Pressure-treated pine is a budget-friendly alternative when properly stained.' },
      { q: 'Will you handle HOA approval?', a: 'Yes. We design to your HOA spec, prepare submittal drawings, and walk approvals through with the board so your build isn\u2019t delayed.' },
    ],
  },
  {
    slug: 'composite-fencing',
    name: 'Composite Fencing',
    category: 'Fence',
    tagline: 'Zero-maintenance modern beauty.',
    image: '/images/fence-types/composite-fencing.jpg',
    href: '/fences/composite-fencing',
    metaTitle: 'Composite Fence Installation in Utah | Compoxen® Certified',
    metaDescription:
      'Premium composite fence installation across Utah, including Compoxen® certified installs. Won\u2019t rot, warp, or fade. Up to 25-year material warranty. Free estimates.',
    intro:
      'Composite fencing delivers the warmth of wood with none of the upkeep. As a Compoxen® certified installer, we build composite privacy and decorative fences that won\u2019t rot, warp, splinter, or fade — backed by up to a 25-year material warranty.',
    priceRange: '$8,000 – $45,000 (typical)',
    lifespan: '25+ years (warrantied)',
    maintenance: 'None — wash periodically',
    bestFor: ['Modern homes', 'Long-term value', 'HOA-strict neighborhoods', 'Owners who hate maintenance'],
    features: [
      'Premium engineered composite (Compoxen® available)',
      'Up to 25-year material warranty',
      'UV-stable, will not fade or chalk',
      'Won\u2019t rot, warp, or splinter',
      'HOA-approved designs',
      'Concrete-set posts and reinforced rails',
    ],
    faqs: [
      { q: 'What is Compoxen® composite?', a: 'Compoxen® is a premium engineered composite fence material designed for extreme climates. It carries a 25-year material warranty and is exclusively sold through certified installers like Alpine Fence & Deck.' },
      { q: 'Is composite worth the price over wood?', a: 'Over a 10-year window, repeated wood refinishing typically runs $12K–$20K. A composite fence pays for itself with $0 ongoing maintenance and adds long-term resale value.' },
      { q: 'Will composite look out of place on a traditional home?', a: 'No — modern composite profiles include warm wood-grain looks that complement traditional architecture beautifully.' },
    ],
  },
  {
    slug: 'vinyl-fencing',
    name: 'Vinyl Fencing',
    category: 'Fence',
    tagline: 'Clean lines, lifetime color.',
    image: '/images/fence-types/vinyl-fencing.jpg',
    href: '/fences/vinyl-fencing',
    metaTitle: 'Vinyl Fence Installation in Utah | Privacy, Picket & Semi-Privacy',
    metaDescription:
      'Premium vinyl fence installation across Utah. Lifetime color, low maintenance, HOA-compliant. Privacy, semi-privacy, and picket profiles. Free estimates. (801) 471-3148',
    intro:
      'Vinyl fencing brings clean architectural lines and lifetime color to your yard with almost no maintenance. We install heavy-gauge vinyl privacy, semi-privacy, and picket profiles engineered to handle Utah wind and UV.',
    priceRange: '$5,000 – $25,000 (typical)',
    lifespan: '25 – 30 years',
    maintenance: 'Wash with a hose periodically',
    bestFor: ['Modern & contemporary homes', 'Pool & spa enclosures', 'HOA neighborhoods', 'Low-maintenance lifestyles'],
    features: [
      'Heavy-gauge UV-stable vinyl',
      'Privacy, semi-privacy & picket profiles',
      'Lifetime color — no painting required',
      'Wind-rated rail systems',
      'HOA-friendly clean lines',
      'Reinforced gate hardware',
    ],
    faqs: [
      { q: 'Will vinyl turn yellow in Utah\u2019s sun?', a: 'Premium vinyl is UV-stabilized and resists yellowing. We use commercial-grade material — bargain hardware-store vinyl is what causes that yellow look.' },
      { q: 'How does vinyl handle Utah wind?', a: 'We install wind-rated rail systems with proper post depth and reinforcement, so vinyl performs beautifully in canyon wind zones.' },
      { q: 'Can vinyl match an HOA color spec?', a: 'Yes — vinyl comes in white, almond, tan, gray, and woodgrain finishes that satisfy nearly every HOA palette.' },
    ],
  },
  {
    slug: 'simtek-fence',
    name: 'Sim/Tek Fence',
    category: 'Fence',
    tagline: 'Engineered for privacy and strength.',
    image: '/images/fence-types/simtek-fence.jpg',
    href: '/fences/simtek-fence',
    metaTitle: 'Sim/Tek Fence Installation in Utah | Sound & Privacy Fencing',
    metaDescription:
      'Sim/Tek fence installation across Utah. Engineered privacy and sound-dampening fencing with realistic stone and wood-grain finishes. Free estimates. (801) 471-3148',
    intro:
      'Sim/Tek is a premium engineered privacy fence that mimics the look of stacked stone or weathered wood with serious sound-dampening performance. Ideal for busy roads, commercial perimeters, and neighbors you want to keep at a polite distance.',
    priceRange: '$10,000 – $35,000 (typical)',
    lifespan: '25 – 30 years',
    maintenance: 'Wash periodically',
    bestFor: ['Roadside properties', 'Sound reduction', 'Commercial perimeters', 'Tall privacy walls'],
    features: [
      'Engineered for sound dampening',
      'Realistic stone & wood-grain finishes',
      'Heights up to 8\u2032+',
      'Wind-rated steel reinforcement',
      'Lifetime warranty options',
      'HOA approval support',
    ],
    faqs: [
      { q: 'Does Sim/Tek really block sound?', a: 'Yes. Sim/Tek\u2019s dense engineered panels are independently tested to reduce highway and traffic noise dramatically compared to wood or vinyl.' },
      { q: 'Is Sim/Tek expensive?', a: 'It\u2019s a premium product — but for noise-sensitive properties or commercial perimeters where look and performance both matter, it\u2019s the best value on the market.' },
      { q: 'Can it match my home\u2019s exterior?', a: 'Sim/Tek comes in multiple stone, wood, and granite finishes that pair naturally with most home styles.' },
    ],
  },
  {
    slug: 'iron-fencing',
    name: 'Iron Fencing',
    category: 'Fence',
    tagline: 'Estate-grade elegance.',
    image: '/images/fence-types/iron-fencing.jpg',
    href: '/fences/iron-fencing',
    metaTitle: 'Ornamental Iron Fence Installation in Utah | Custom Gates',
    metaDescription:
      'Ornamental iron fence installation in Utah. Estate-grade fences, custom gates, and entry features. Powder-coated to last decades. Free estimates. (801) 471-3148',
    intro:
      'Ornamental iron is the original premium fence — and still unmatched for estate aesthetics, security, and longevity. We install custom iron fencing, gates, and entry features hand-finished and powder-coated to last decades in Utah\u2019s climate.',
    priceRange: '$8,000 – $50,000+ (typical)',
    lifespan: '30 – 50+ years',
    maintenance: 'Touch-up paint every several years',
    bestFor: ['Estate properties', 'Front-yard accents', 'Security & access control', 'Custom entry features'],
    features: [
      'Custom-fabricated panels and gates',
      'Powder-coated for rust resistance',
      'Classic and modern profiles',
      'Automated gate systems available',
      'Steel-reinforced posts',
      'Compatible with HOA designs',
    ],
    faqs: [
      { q: 'Will iron rust in Utah?', a: 'Properly prepped, hot-dip primed, and powder-coated iron resists rust for decades. Touch-ups are simple and infrequent.' },
      { q: 'Can you build a custom gate?', a: 'Absolutely — custom gates are our specialty. We fabricate to your exact dimensions and design, including automated openers.' },
      { q: 'Is iron good for full-perimeter privacy?', a: 'Iron is open by nature and best paired with landscaping for screening. For full privacy, we\u2019d recommend composite, vinyl, Sim/Tek, or wood instead.' },
    ],
  },
  {
    slug: 'aluminum-fencing',
    name: 'Aluminum Fencing',
    category: 'Fence',
    tagline: 'Modern, rust-free, pool-safe.',
    image: '/images/fence-types/aluminum-fencing.jpg',
    href: '/fences/aluminum-fencing',
    metaTitle: 'Aluminum Fence Installation in Utah | Pool-Safe & Rust-Free',
    metaDescription:
      'Powder-coated aluminum fence installation in Utah. Modern, rust-free, pool-code compliant. Designs that look like wrought iron without the upkeep. Free estimates.',
    intro:
      'Aluminum gives you the clean look of wrought iron with none of the rust or maintenance. It\u2019s ideal for pool enclosures, modern yards, and anywhere a refined open profile is the goal.',
    priceRange: '$5,000 – $25,000 (typical)',
    lifespan: '30 – 50 years',
    maintenance: 'Minimal — occasional rinse',
    bestFor: ['Pool & spa enclosures', 'Modern homes', 'Front-yard accents', 'Coastal & corrosion-prone settings'],
    features: [
      'Pool-code compliant designs',
      'Powder-coated finish (multiple colors)',
      'Will not rust or corrode',
      'Lightweight and clean lines',
      'Lifetime structural warranty options',
      'Custom gate hardware',
    ],
    faqs: [
      { q: 'Is aluminum strong enough for security?', a: 'Yes — heavy-grade aluminum panels are plenty strong for residential security and pool code. For maximum security needs, we\u2019d recommend ornamental iron.' },
      { q: 'Does aluminum meet pool fence code?', a: 'Yes. We install pool-code-compliant aluminum with proper height, picket spacing, and self-closing/latching gates.' },
      { q: 'Can it match my house color?', a: 'Aluminum comes in black, bronze, white, and custom powder-coat colors to match nearly any palette.' },
    ],
  },
  {
    slug: 'ranch-rail',
    name: 'Ranch Rail',
    category: 'Fence',
    tagline: 'Acreage-ready and timeless.',
    image: '/images/fence-types/ranch-rail.jpg',
    href: '/fences/ranch-rail',
    metaTitle: 'Ranch Rail Fence Installation in Utah | Acreage & Equestrian',
    metaDescription:
      'Ranch rail fence installation across Utah. Cedar, vinyl, and steel-reinforced rail fencing for acreage, equestrian, and decorative property lines. Free estimates.',
    intro:
      'Ranch rail is the timeless Utah fence — perfect for acreage, equestrian properties, and decorative property lines. We install 2-, 3-, and 4-rail designs in cedar, vinyl, and steel-reinforced wood.',
    priceRange: '$3,000 – $20,000 (depends on linear feet)',
    lifespan: '20 – 30 years',
    maintenance: 'Stain wood every 3 – 5 years',
    bestFor: ['Acreage & farms', 'Equestrian properties', 'Decorative front yards', 'Long property lines'],
    features: [
      'Cedar, vinyl, or steel-reinforced rail',
      '2-, 3-, and 4-rail configurations',
      'Equestrian-safe designs',
      'Long-run efficient pricing',
      'Decorative entry post options',
      'Pasture gates available',
    ],
    faqs: [
      { q: 'Is ranch rail safe for horses?', a: 'Yes. We use proper rail spacing and recommend vinyl or smooth cedar for equestrian use to avoid splinters and protrusions.' },
      { q: 'How long is a typical ranch rail run?', a: 'Most acreage projects run several hundred to several thousand linear feet. Long runs price more efficiently per linear foot.' },
      { q: 'Can I add a driveway gate?', a: 'Absolutely — decorative pasture gates and ranch entry features are a popular add-on.' },
    ],
  },
  {
    slug: 'decking',
    name: 'Decking',
    category: 'Deck',
    tagline: 'Outdoor living, beautifully built.',
    image: '/images/fence-types/decking.jpg',
    href: '/fences/decking',
    metaTitle: 'Deck Builder in Utah | Composite & Wood Decks, Custom Designs',
    metaDescription:
      'Custom deck builder in Utah. Composite (Compoxen®) and wood decks, multi-level designs, built-in lighting, benches, and railings. Free estimates. (801) 471-3148',
    intro:
      'Your deck should disappear into your lifestyle — not become a maintenance project. We design and build custom composite and wood decks, including multi-level, wraparound, and pool-side designs with integrated lighting, benches, and railings.',
    priceRange: '$15,000 – $75,000 (typical)',
    lifespan: '15 – 30 years (composite up to 25+ warrantied)',
    maintenance: 'Composite: none. Wood: stain every 2 – 3 years.',
    bestFor: ['Backyard entertaining', 'Multi-level lots', 'Walkout basements', 'Pool & spa decks'],
    features: [
      'Composite (Compoxen®) and premium wood',
      'Multi-level & wraparound designs',
      'Built-in lighting & benches',
      'Integrated iron or vinyl railings',
      'Engineered for snow load',
      'Permit handling included',
    ],
    faqs: [
      { q: 'How long does a deck build take?', a: 'Most decks complete in 2–4 weeks depending on size, material, and design complexity.' },
      { q: 'Composite or wood?', a: 'Composite is the long-term value pick — zero maintenance and warrantied. Wood is the budget-friendly classic but needs staining every few years.' },
      { q: 'Do you handle the permit?', a: 'Yes. Permit pulling and inspections are part of every deck build.' },
    ],
  },
  {
    slug: 'iron-railing',
    name: 'Iron Railing',
    category: 'Railing',
    tagline: 'Hand-finished iron, built to last.',
    image: '/images/fence-types/iron-railing.jpg',
    href: '/fences/iron-railing',
    metaTitle: 'Iron Railing Installation in Utah | Decks, Stairs & Porches',
    metaDescription:
      'Custom iron railing installation in Utah for decks, stairs, and porches. Hand-finished, powder-coated, code-compliant. Free estimates. (801) 471-3148',
    intro:
      'Custom iron railings give a deck or staircase the architectural finish it deserves. We design, fabricate, and install hand-finished iron railings — powder-coated, code-compliant, and built to last for decades.',
    priceRange: '$1,500 – $15,000 (depends on linear feet)',
    lifespan: '30 – 50 years',
    maintenance: 'Touch-up paint every several years',
    bestFor: ['Deck railings', 'Interior & exterior stairs', 'Porch & balcony', 'Modern & traditional homes'],
    features: [
      'Custom-fabricated panels',
      'Powder-coated finishes',
      'Code-compliant heights & spacing',
      'Modern, classic, and ornate styles',
      'Continuous handrail returns',
      'Engineered mounting hardware',
    ],
    faqs: [
      { q: 'Is iron railing code compliant?', a: 'Yes. We build to International Residential Code (IRC) heights, baluster spacing, and load standards as required by Utah jurisdictions.' },
      { q: 'Can I retrofit iron onto my existing deck?', a: 'Almost always. We design custom mounts that anchor securely to existing deck framing.' },
      { q: 'How long does fabrication take?', a: 'Custom iron railings typically take 2–4 weeks from measurement to install.' },
    ],
  },
  {
    slug: 'vinyl-railing',
    name: 'Vinyl Railing',
    category: 'Railing',
    tagline: 'Maintenance-free, refined finish.',
    image: '/images/fence-types/vinyl-railing.jpg',
    href: '/fences/vinyl-railing',
    metaTitle: 'Vinyl Railing Installation in Utah | Decks, Porches & Stairs',
    metaDescription:
      'Premium vinyl railing installation in Utah. Maintenance-free railings for decks, porches, and stairs. Code-compliant, lifetime color. Free estimates.',
    intro:
      'Vinyl railing delivers a clean, refined finish for decks and porches with virtually no maintenance. We install heavy-gauge vinyl railing systems with aluminum reinforcement for stiffness and longevity.',
    priceRange: '$1,500 – $12,000 (depends on linear feet)',
    lifespan: '25 – 30 years',
    maintenance: 'Wash periodically',
    bestFor: ['Deck & porch railings', 'Modern homes', 'Low-maintenance lifestyles', 'Coastal-look pool decks'],
    features: [
      'Heavy-gauge UV-stable vinyl',
      'Aluminum-reinforced top rails',
      'Code-compliant heights & spacing',
      'White, almond, gray, and black finishes',
      'Glass-panel & baluster options',
      'Lifetime warranty options',
    ],
    faqs: [
      { q: 'Is vinyl strong enough as a railing?', a: 'Yes — when properly aluminum-reinforced, vinyl railings meet and exceed code load requirements.' },
      { q: 'Can I add glass panels?', a: 'Yes. Glass infill panels are a beautiful upgrade for view-preserving deck railings.' },
      { q: 'Will vinyl hold its color?', a: 'Premium UV-stabilized vinyl holds color reliably for decades.' },
    ],
  },
  {
    slug: 'other',
    name: 'Other / Custom',
    category: 'Custom',
    tagline: "A vision in mind? Let's build it.",
    image: '/images/fence-types/other.jpg',
    href: '/fences/other',
    metaTitle: 'Custom Fence & Deck Builder in Utah | Anything You Can Dream Up',
    metaDescription:
      'Got a custom fence, deck, gate, or railing project in mind? Alpine Fence & Deck designs and builds custom outdoor projects across Utah. Free consultations.',
    intro:
      'Some projects don\u2019t fit a category — and those are often our favorite. From custom mixed-material gates to architectural privacy walls and one-off deck designs, our shop and crew can build it. Bring us a photo, sketch, or rough idea and we\u2019ll take it from there.',
    priceRange: 'Custom — quoted per project',
    lifespan: 'Designed to your spec',
    maintenance: 'Depends on chosen materials',
    bestFor: ['Architect-designed homes', 'Mixed-material projects', 'Custom gates & entries', 'One-off ideas'],
    features: [
      'In-house design consultation',
      'Mixed-material fabrication (wood + iron + composite)',
      'Custom gates and entry features',
      'Architect & designer collaboration',
      'Permit and HOA approval handling',
      'Workmanship warranty included',
    ],
    faqs: [
      { q: 'Can you work from a sketch?', a: 'Absolutely. A photo or rough sketch is plenty to start a conversation. We\u2019ll refine the design and price together.' },
      { q: 'Do you collaborate with architects?', a: 'Yes — we regularly partner with architects, designers, and general contractors on custom outdoor projects.' },
      { q: 'How is a custom project priced?', a: 'We provide detailed line-item pricing after a free on-site consultation and design pass.' },
    ],
  },
];

export function getFenceTypeBySlug(slug: string): FenceType | undefined {
  return fenceTypes.find((f) => f.slug === slug);
}
