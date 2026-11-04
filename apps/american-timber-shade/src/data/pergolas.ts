/**
 * The flagship — timber pergolas. Styles, materials, and options
 * rendered on /pergolas and summarized on the homepage.
 */

export interface PergolaStyle {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  photo: string;
  specs: { k: string; v: string }[];
}

export const pergolaStyles: PergolaStyle[] = [
  {
    slug: 'attached',
    title: 'Attached Pergolas',
    blurb: 'Grown off the house — shade that reads as part of the architecture, not an afterthought.',
    detail:
      'Ledgered into the structure with engineered flashing and through-bolted connections, an attached pergola extends the roofline over the patio and makes the back door the front door of the yard. Beams and rafters are sized to the span, posts land on concrete piers, and the whole frame is proportioned to the house it joins.',
    photo: '/ats/pergolas/attached.jpg',
    specs: [
      { k: 'Posts', v: '8×8 or 10×10 timber' },
      { k: 'Spans', v: 'Up to 20\u2032 clear' },
      { k: 'Connection', v: 'Ledger + thru-bolt' },
      { k: 'Footings', v: 'Below frost line' },
    ],
  },
  {
    slug: 'freestanding',
    title: 'Freestanding Pergolas',
    blurb: 'A destination in the yard — over the fire pit, the dining table, the pool deck.',
    detail:
      'Four posts, oversized beams, and a rafter rhythm set to the sun. Freestanding structures let you place the room exactly where the light and the view want it. We engineer them like small buildings: braced for wind, footed for frost, and finished to stand in the open for decades.',
    photo: '/ats/pergolas/freestanding.jpg',
    specs: [
      { k: 'Footprint', v: '10×12 to 20×24+' },
      { k: 'Bracing', v: 'Knee braces or steel' },
      { k: 'Roof', v: 'Open, lattice, or shade' },
      { k: 'Power', v: 'Conduit in the posts' },
    ],
  },
  {
    slug: 'heavy-timber',
    title: 'Heavy Timber & Mortise-Tenon',
    blurb: 'The showpiece — hand-fit joinery, exposed pegs, and timbers you can\u2019t get your arms around.',
    detail:
      'For clients who want the structure to be the art: Douglas fir or Western red cedar timbers joined with traditional mortise-and-tenon joinery, draw-bored and pegged, then raised on site. Steel is hidden or celebrated by choice. These are the pergolas that get photographed from the neighbor\u2019s yard.',
    photo: '/ats/pergolas/heavy-timber.jpg',
    specs: [
      { k: 'Timbers', v: '10×10 to 12×12' },
      { k: 'Joinery', v: 'Mortise & tenon, pegged' },
      { k: 'Species', v: 'Doug fir, red cedar' },
      { k: 'Finish', v: 'Hand-rubbed oil' },
    ],
  },
];

export const pergolaMaterials = [
  {
    k: 'Western red cedar',
    v: 'Naturally rot- and insect-resistant, light, and stable. Takes a stain beautifully or silvers with grace if you let it.',
  },
  {
    k: 'Douglas fir',
    v: 'Tight-grained and strong — the choice for long spans and heavy-timber joinery. Kiln-dried, free-of-heart-center where it matters.',
  },
  {
    k: 'Rough-sawn & resawn',
    v: 'Texture you can feel from the patio. Rough-sawn faces hold finish longer and read as timber, not lumber.',
  },
  {
    k: 'UV-stable finishes',
    v: 'Penetrating oil stains tuned for high-altitude sun. We spec the finish to the exposure, not the catalog.',
  },
];

export const pergolaOptions = [
  'Adjustable shade canopies',
  'Motorized retractable shade',
  'Privacy walls & slatted screens',
  'Integrated low-voltage lighting',
  'Ceiling fans & infrared heaters',
  'Outlets & conduit in the posts',
  'Lattice, purlins, or polycarbonate',
  'Steel accents & brackets',
  'Curtains & drape hardware',
];

export const pergolaFaqs = [
  {
    q: 'Will a timber pergola hold up to mountain snow?',
    a: 'Yes — when it\u2019s built as a structure. We size beams and rafters to local snow load, set posts on concrete footings below frost line, and through-bolt every connection. Kits sag; ours get handed down with the house.',
  },
  {
    q: 'How long does a pergola take?',
    a: 'Design and drawings run one to three weeks. Most pergolas are built in three to seven working days on site once footings cure. Heavy-timber projects are pre-cut in the shop and raised in a day or two.',
  },
  {
    q: 'What does a timber pergola cost?',
    a: 'Attached and freestanding cedar pergolas generally start in the mid five figures; heavy-timber and full outdoor rooms run higher. Every proposal is in writing with options priced separately so you decide what\u2019s worth it.',
  },
  {
    q: 'Do you handle permits and engineering?',
    a: 'We do. Where a permit is required we prepare the drawings, pull the permit, and schedule inspections. Stamped engineering is included on any project that needs it.',
  },
];
