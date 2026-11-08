export interface Faq {
  q: string;
  a: string;
}

/** General FAQ shown on the homepage; service-specific FAQs live in services.ts. */
export const faqs: Faq[] = [
  {
    q: 'How much does concrete cost on the Wasatch Front?',
    a: 'Broom-finished flatwork is priced by the square foot and depends on thickness, access, base work, and removal. Decorative finishes, foundations, and walls are priced by scope. We walk the site and put a line-item estimate in writing — no ranges, no surprises.',
  },
  {
    q: 'How long does an estimate take?',
    a: 'We return written estimates within two business days of the site visit, usually faster. Site visits are typically scheduled within the week.',
  },
  {
    q: 'When is concrete season in Utah?',
    a: 'We pour from late March through November in most years. Cold-weather pours are possible with blankets and accelerators; we schedule them when the forecast allows for a proper cure.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Apex Concrete carries Utah contractor licensing, general liability, and workers’ compensation. A certificate of insurance is available on request.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Workmanship is warranted in writing on every estimate. Concrete cracks by nature — controlled by joints — so the warranty covers settlement, spalling, and finish defects caused by our work.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Salt Lake, Utah, Davis, Weber, Summit, and Tooele counties — from Ogden to Provo and up to Park City.',
  },
];
