// Alpine Fence & Deck — Services Data

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
  isCompozen: boolean;
  ctaText: string;
  ctaHref: string;
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
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
    isCompozen: false,
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
      'Upgrade path to Compozen® composite',
    ],
    priceRange: '$200 – $2,500',
    avgProjectValue: 800,
    isCompozen: false,
    ctaText: 'Request Emergency Repair',
    ctaHref: '/quote?service=repair',
    faqs: [
      { question: 'How quickly can you repair my fence?', answer: 'We offer a 2-hour callback guarantee during business hours. Most repairs are scheduled within the same week, with emergency service available for urgent damage.' },
      { question: 'Do you help with insurance claims for storm damage?', answer: 'Yes, we provide detailed damage assessments and documentation to assist with your insurance claim for storm-damaged fences and decks.' },
      { question: 'Is it better to repair or replace my fence?', answer: 'We provide an honest assessment of your fence\'s condition. Minor damage is worth repairing, but if your fence needs frequent repairs, upgrading to Compozen® composite can save money long-term.' },
      { question: 'Do you warranty your repair work?', answer: 'Yes, all repair work comes with our workmanship warranty. We stand behind every project we complete.' },
    ],
  },
  {
    id: 'compozen-fence',
    slug: 'compozen-fence-installation',
    title: 'Compozen® Composite Fence Installation',
    shortTitle: 'Compozen Fence',
    description: 'Transform your property with revolutionary Compozen® composite fencing. Zero maintenance composite fence, lasting beauty, and exclusive designs only available through certified composite installers.',
    heroDescription: 'Experience the future of composite fencing. Compozen® composite materials deliver stunning aesthetics with zero maintenance — backed by our exclusive certified composite installer guarantee.',
    icon: 'Shield',
    features: [
      'Exclusive Compozen® composite material',
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
    isCompozen: true,
    ctaText: 'Get a Free Estimate',
    ctaHref: '/quote?service=compozen-fence',
    faqs: [
      { question: 'What is Compozen® composite fencing?', answer: 'Compozen® is a revolutionary composite material that delivers stunning wood-like aesthetics with zero maintenance. It won\'t rot, warp, or splinter, and comes with a 25-year material warranty.' },
      { question: 'How much does a composite fence cost in Utah?', answer: 'Compozen® composite fence installations typically range from $8,000 to $45,000 depending on property size, design, and terrain. We provide free on-site estimates for accurate pricing.' },
      { question: 'Are Compozen® fences HOA approved?', answer: 'Yes, Compozen® composite fences are designed to meet HOA requirements. We offer HOA pre-approval assistance and provide documentation for your association.' },
      { question: 'How long does composite fence installation take?', answer: 'Most composite fence installations are completed within 1-2 weeks depending on the project scope. We provide a detailed timeline with your estimate.' },
    ],
  },
  {
    id: 'compozen-deck',
    slug: 'compozen-deck-installation',
    title: 'Compozen® Composite Deck Installation',
    shortTitle: 'Compozen Deck',
    description: 'Elevate your outdoor living with a Compozen® composite deck. Revolutionary composite materials, breathtaking designs, and zero maintenance for 25 years.',
    heroDescription: 'Create the outdoor living space of your dreams. Compozen® composite decking delivers unmatched beauty, durability, and zero-maintenance living — the ultimate composite deck designed exclusively for your home.',
    icon: 'Home',
    features: [
      'Custom deck design consultation',
      'Premium Compozen® decking materials',
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
    isCompozen: true,
    ctaText: 'Get a Free Estimate',
    ctaHref: '/quote?service=compozen-deck',
    faqs: [
      { question: 'How much does a composite deck cost in Utah?', answer: 'Compozen® composite deck installations range from $15,000 to $75,000 depending on size, design complexity, and features. Free on-site estimates are available.' },
      { question: 'Do composite decks get hot in Utah summers?', answer: 'Compozen® composite uses advanced technology to reduce heat absorption compared to traditional composite materials, making it comfortable for bare feet even in summer.' },
      { question: 'What is the ROI on a composite deck?', answer: 'Composite deck installations typically see a 70-80% return on investment in property value. Combined with zero maintenance costs, the total cost of ownership is lower than wood over 10+ years.' },
      { question: 'Can you build custom deck designs with composite?', answer: 'Absolutely. We offer 3D design visualization before installation so you can see your custom composite deck design, including curves, multi-levels, built-in seating, and more.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCompozenServices(): ServiceData[] {
  return services.filter((s) => s.isCompozen);
}

export function getRefinishingServices(): ServiceData[] {
  return services.filter((s) => !s.isCompozen);
}
