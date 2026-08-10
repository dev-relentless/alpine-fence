export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  detail: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'weekly',
    title: 'Weekly Pool & Spa Care',
    shortTitle: 'Weekly Care',
    blurb: 'A uniformed technician on a set route — skimmed, brushed, vacuumed, balanced, and logged, every visit.',
    detail:
      'The core of what we do: a weekly service route run by the same technician, so your pool is known — not rediscovered — each visit. We skim and vacuum, brush tile and walls, empty baskets, backwash filters as needed, test and balance the water, and inspect equipment while we\'re there. Every visit ends with a service log, so you always know what was done and what the water looked like.',
    items: [
      'Weekly cleaning & vacuuming',
      'Water testing & chemical balancing',
      'Tile & waterline brushing',
      'Skimmer & pump basket emptying',
      'Filter backwashing & cleaning',
      'Equipment check on every visit',
    ],
  },
  {
    slug: 'repair',
    title: 'Equipment Repair',
    shortTitle: 'Repair',
    blurb: 'Pumps, heaters, filters, and automation — diagnosed honestly and repaired by factory-trained techs.',
    detail:
      'When a pump goes quiet or a heater won\'t light, we diagnose before we replace. Our technicians are factory-trained on the major brands and handle warranty work, so repairs are done to spec and covered when they should be. Variable-speed pump upgrades, heater service, filter rebuilds, salt systems, automation, and leak-adjacent plumbing at the equipment pad — quoted in writing before work starts.',
    items: [
      'Pump repair & variable-speed upgrades',
      'Heater diagnosis & repair',
      'Filter service & rebuilds',
      'Salt systems & chlorinators',
      'Automation & controls',
      'Factory warranty service',
    ],
  },
  {
    slug: 'seasonal',
    title: 'Seasonal & Chemical Service',
    shortTitle: 'Seasonal',
    blurb: 'Spring openings, fall closings, chemical-only plans, and deep-clean rescues for water gone wrong.',
    detail:
      'Utah pools live by the calendar. We open pools in spring — reassemble equipment, prime, balance, and shock — and close them properly in fall so freeze damage never gets a chance. For owners who like doing their own skimming, our chemical-only plan covers testing and balancing on a set schedule. And when water has gone green or scale has taken the tile, we do drain-downs, chemical washes, and full water analysis to bring it back.',
    items: [
      'Spring openings & startups',
      'Fall closings & winterization',
      'Chemical-only service plans',
      'Green-pool recovery',
      'Drain & chemical wash',
      'Professional water analysis',
    ],
  },
];
