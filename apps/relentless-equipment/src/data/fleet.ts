export interface FleetCategory {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
  items: string[];
}

export const fleetCategories: FleetCategory[] = [
  {
    slug: 'rentals',
    title: 'Equipment Rentals',
    shortTitle: 'Rentals',
    blurb: 'Compact machines maintained by the contractor crews that run them — fueled, greased, and ready.',
    detail:
      'Daily, weekly, and monthly rates on compact equipment for excavation, grading, demolition, and material handling. Every machine comes off a working construction fleet — serviced on hours, not on complaints. Delivery available across the Wasatch Front, or hook up and haul it yourself.',
    items: [
      'Skid steers & compact track loaders',
      'Mini excavators',
      'Trenchers',
      'Compaction — plate compactors & rollers',
      'Dump & material handling',
      'Augers & post drivers',
    ],
  },
  {
    slug: 'attachments',
    title: 'Attachments',
    shortTitle: 'Attachments',
    blurb: 'The right attachment turns one machine into five. Rent them with a machine or bring your own.',
    detail:
      'Attachments rented alone or with a machine — sized and pinned for common skid steer and mini excavator classes. Tell us the carrier and the job; we\'ll match the attachment and the hydraulics.',
    items: [
      'Buckets — grading, tooth & hi-capacity',
      'Augers & bits',
      'Pallet forks & grapples',
      'Hydraulic breakers',
      'Brush cutters & mulchers',
      'Trenching & compaction attachments',
    ],
  },
  {
    slug: 'trailers',
    title: 'Trailers',
    shortTitle: 'Trailers',
    blurb: 'Dump, equipment, and utility trailers — rated, wired, and ready to hitch.',
    detail:
      'Trailers for hauling equipment, material, and debris. Every unit is inspected between rentals — brakes, bearings, lights, and tie-downs — with ratings clearly posted. Bring the right tow vehicle and hitch; we\'ll handle the rest.',
    items: [
      'Dump trailers',
      'Equipment / flatbed trailers',
      'Utility trailers',
      'Enclosed cargo trailers',
    ],
  },
];
