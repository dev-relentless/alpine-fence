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
}

export const services: ServiceData[] = [
  {
    id: 'deck-refinishing',
    slug: 'deck-refinishing',
    title: 'Deck & Fence Refinishing',
    shortTitle: 'Refinishing',
    description: 'Professional deck and fence refinishing services that restore your outdoor living spaces to their original beauty. Sanding, staining, sealing, and weatherproofing.',
    heroDescription: 'Restore your weathered deck or fence to its original beauty with our professional refinishing services. Expert sanding, staining, and sealing that protects your investment.',
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
  },
  {
    id: 'fence-repair',
    slug: 'fence-repair',
    title: 'Fence & Deck Repair',
    shortTitle: 'Repair',
    description: 'Fast, reliable fence and deck repair services. From loose boards to structural damage, our team handles emergency and scheduled repairs across the Wasatch Front.',
    heroDescription: 'Don\'t let damaged fences or decks compromise your property\'s safety and value. Our expert repair team provides fast, reliable service with a 2-hour callback guarantee.',
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
      'Upgrade path to Compozen',
    ],
    priceRange: '$200 – $2,500',
    avgProjectValue: 800,
    isCompozen: false,
    ctaText: 'Request Emergency Repair',
    ctaHref: '/quote?service=repair',
  },
  {
    id: 'compozen-fence',
    slug: 'compozen-fence-installation',
    title: 'Compozen® Composite Fence Installation',
    shortTitle: 'Compozen Fence',
    description: 'Transform your property with revolutionary Compozen® composite fencing. Zero maintenance, lifetime beauty, and exclusive designs only available through certified installers.',
    heroDescription: 'Experience the future of fencing. Compozen® composite materials deliver stunning aesthetics with zero maintenance — backed by our exclusive certified installer guarantee.',
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
      'Lifetime material warranty',
      '10x return vs. repeated refinishing',
      'Increases property value',
      'Eco-friendly recycled materials',
    ],
    priceRange: '$8,000 – $45,000',
    avgProjectValue: 25000,
    isCompozen: true,
    ctaText: 'Design Your Compozen Fence',
    ctaHref: '/design-studio?type=fence',
  },
  {
    id: 'compozen-deck',
    slug: 'compozen-deck-installation',
    title: 'Compozen® Composite Deck Installation',
    shortTitle: 'Compozen Deck',
    description: 'Elevate your outdoor living with a Compozen® composite deck. Revolutionary materials, breathtaking designs, and zero lifetime maintenance.',
    heroDescription: 'Create the outdoor living space of your dreams. Compozen® composite decking delivers unmatched beauty, durability, and zero-maintenance living — designed exclusively for your home.',
    icon: 'Home',
    features: [
      'Full 3D deck design studio',
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
    ctaText: 'Design Your Dream Deck',
    ctaHref: '/design-studio?type=deck',
  },
  {
    id: 'hoa-compliance',
    slug: 'hoa-compliance',
    title: 'HOA Compliance Center',
    shortTitle: 'HOA Help',
    description: 'Navigate HOA regulations with confidence. We maintain a database of HOA requirements across Utah and provide pre-approved designs that guarantee compliance.',
    heroDescription: 'Never worry about HOA violations again. Our compliance center provides pre-approved fence and deck designs for your specific HOA, guaranteed to pass architectural review.',
    icon: 'CheckCircle',
    features: [
      'HOA requirement database by neighborhood',
      'Pre-approved design library',
      'Architectural review submission assistance',
      'Compliance guarantee',
      'Variance request support',
      'Regulation update notifications',
    ],
    benefits: [
      'Guaranteed HOA approval or we redesign free',
      'Avoid costly violation fines',
      'Streamlined approval process',
      'Access to pre-approved Compozen designs',
      'Expert HOA liaison services',
      'Peace of mind for homeowners',
    ],
    priceRange: 'Included with installation',
    avgProjectValue: 0,
    isCompozen: false,
    ctaText: 'Check Your HOA Requirements',
    ctaHref: '/hoa-compliance',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCompozenServices(): ServiceData[] {
  return services.filter((s) => s.isCompozen);
}

export function getRefinishingServices(): ServiceData[] {
  return services.filter((s) => !s.isCompozen && s.id !== 'hoa-compliance');
}
