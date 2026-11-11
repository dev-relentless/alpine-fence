export type VehicleSlug = 'sl-63' | 's-580' | 'f-350';

export interface Vehicle {
  slug: VehicleSlug;
  role: string;            // "The Roadster"
  numeral: string;         // "I"
  make: string;
  model: string;           // display model name
  badge: string;           // exact badge text
  year: string;
  color: string;
  interior: string;
  oneLiner: string;        // ad line
  intro: string;
  bestFor: string[];
  specs: { label: string; value: string }[];
  options: string[];       // service options
  chauffeur: boolean;
  seats: number;
  dir: string;             // /reserve/<dir>
  hero: string;            // filename in dir
  gallery: { file: string; alt: string }[];
  verifyNote?: string;
}

export const FLEET: Vehicle[] = [
  {
    slug: 'sl-63',
    role: 'The Roadster',
    numeral: 'I',
    make: 'Mercedes-AMG',
    model: 'SL 63 S E Performance',
    badge: 'SL 63 S E PERFORMANCE',
    year: '2025',
    color: 'Matte Graphite Grey Magno',
    interior: 'Macchiato Beige Nappa, AMG Performance seats',
    oneLiner: 'Top down. Expectations up.',
    intro:
      'An 805-horsepower plug-in hybrid roadster with a soft top, white leather, and a wing that rises on its own. It is the car for the wedding exit, the anniversary, and the canyon drive you have been promising yourself.',
    bestFor: ['Weddings & exits', 'Anniversaries', 'Canyon drives', 'Content & photo shoots'],
    specs: [
      { label: 'Powertrain', value: '4.0L V8 biturbo + electric motor (E Performance)' },
      { label: 'Output', value: '805 hp · 1,047 lb-ft combined' },
      { label: '0–60 mph', value: '2.8 seconds' },
      { label: 'Drive', value: 'AMG Performance 4MATIC+ all-wheel drive' },
      { label: 'Roof', value: 'Fabric soft top, opens in about 15 seconds' },
      { label: 'Seating', value: '2 + 2' },
      { label: 'Drive modes', value: 'Electric · Comfort · Sport · Sport+ · Race' },
    ],
    options: ['Self-drive', 'Delivered to your door or hotel', 'Multi-day & weekend allocations'],
    chauffeur: false,
    seats: 2,
    dir: 'sl63',
    hero: '01-hero-front-three-quarter.jpg',
    gallery: [
      { file: '01-hero-front-three-quarter.jpg', alt: 'Matte grey Mercedes-AMG SL 63 S E Performance, front three-quarter view in the showroom' },
      { file: '02-front-three-quarter-top-up.jpg', alt: 'AMG SL 63 with the soft top up, front three-quarter view' },
      { file: '03-cockpit-top-down.jpg', alt: 'AMG SL 63 interior with the top down, white Nappa leather seats' },
      { file: '04-door-open-white-leather.jpg', alt: 'AMG SL 63 driver door open showing white leather interior and AMG sill' },
      { file: '05-cockpit.jpg', alt: 'AMG SL 63 cockpit with AMG Performance steering wheel and portrait display' },
      { file: '06-rear-wing.jpg', alt: 'AMG SL 63 rear three-quarter view with active rear wing raised' },
      { file: '07-seats.jpg', alt: 'AMG SL 63 white diamond-quilted Performance seats' },
      { file: '08-outdoors.jpg', alt: 'AMG SL 63 parked outdoors beside ornamental grasses' },
      { file: '09-front-showroom.jpg', alt: 'AMG SL 63 front view with Panamericana grille and headlights on' },
      { file: '10-side-top-down.jpg', alt: 'AMG SL 63 side profile with the top down' },
    ],
  },
  {
    slug: 's-580',
    role: 'The Arrival',
    numeral: 'II',
    make: 'Mercedes-Benz',
    model: 'S 580 4MATIC',
    badge: 'S 580 4MATIC',
    year: '2024',
    color: 'Designo Diamond White',
    interior: 'Black Nappa, diamond quilting, 64-color ambient lighting',
    oneLiner: 'Be picked up like you are the reason for the meeting.',
    intro:
      'The flagship Mercedes sedan, available two ways: drive it yourself, or let us drive you. Rear-seat comfort package, panoramic roof, Burmester 3D sound, and ambient light that changes the mood of the cabin. The airport, the closing, the dinner — arrive accordingly.',
    bestFor: ['Airport & Park City transfers', 'Closings & client dinners', 'Weddings (the parents)', 'Executive travel'],
    specs: [
      { label: 'Powertrain', value: '4.0L V8 biturbo with EQ Boost mild hybrid' },
      { label: 'Output', value: '496 hp · 516 lb-ft' },
      { label: '0–60 mph', value: '4.4 seconds' },
      { label: 'Drive', value: '4MATIC all-wheel drive · AIRMATIC air suspension' },
      { label: 'Rear cabin', value: 'Heated & ventilated rear seats, massage, folding tables, rear screens' },
      { label: 'Roof', value: 'Panoramic glass sunroof' },
      { label: 'Seating', value: '4 passengers (chauffeured) · 5 total' },
    ],
    options: ['Self-drive', 'Chauffeured — hourly, point-to-point, or full day', 'SLC airport meet & greet', 'Delivered to your door or hotel'],
    chauffeur: true,
    seats: 5,
    dir: 's580',
    hero: '01-hero-front-three-quarter.jpg',
    gallery: [
      { file: '01-hero-front-three-quarter.jpg', alt: 'White Mercedes-Benz S 580, front three-quarter view on a rooftop' },
      { file: '02-front-wasatch.jpg', alt: 'Mercedes-Benz S 580 front view with the Wasatch mountains behind' },
      { file: '03-side-profile.jpg', alt: 'Mercedes-Benz S 580 side profile' },
      { file: '04-rear-seats.jpg', alt: 'S 580 rear seats with diamond quilting and center console with tablet' },
      { file: '05-cockpit.jpg', alt: 'S 580 cockpit with MBUX portrait display and ambient lighting' },
      { file: '06-rear-cabin.jpg', alt: 'S 580 rear cabin with purple ambient lighting' },
      { file: '07-panoramic-roof.jpg', alt: 'S 580 panoramic glass roof open to blue sky' },
      { file: '08-headlight.jpg', alt: 'S 580 Digital Light headlamp and grille detail' },
      { file: '09-door.jpg', alt: 'S 580 door panel with ambient lighting and seat controls' },
      { file: '10-side-sun.jpg', alt: 'Mercedes-Benz S 580 side profile in afternoon sun' },
    ],
  },
  {
    slug: 'f-350',
    role: 'The Statement',
    numeral: 'III',
    make: 'Ford',
    model: 'F-350 Platinum Plus Dually',
    badge: 'F-350 PLATINUM · 6.7L POWER STROKE · FX4',
    year: '2024',
    color: 'Star White Metallic Tri-Coat',
    interior: 'Platinum Plus two-tone leather, massaging front seats, B&O Unleashed',
    oneLiner: 'For when the trailer costs more than their car.',
    intro:
      'Very few rental fleets anywhere have one of these. A crew-cab, dual-rear-wheel Super Duty in the top Platinum Plus trim: massaging leather thrones, a panoramic moonroof, a 12-inch screen, and a High Output Power Stroke built to move a boat, a horse trailer, or a toy hauler without noticing.',
    bestFor: ['Boats at Jordanelle & Bear Lake', 'Horse & livestock trailers', 'Toy haulers & RVs', 'Moving something expensive'],
    specs: [
      { label: 'Engine', value: '6.7L High Output Power Stroke V8 turbodiesel' },
      { label: 'Output', value: '500 hp · 1,200 lb-ft' },
      { label: 'Configuration', value: 'Crew Cab · 8-ft bed · Dual rear wheel · 4×4 FX4 Off-Road' },
      { label: 'Towing', value: 'Rated for 30,000+ lb gooseneck / fifth-wheel (verify for this build)' },
      { label: 'Hitches', value: 'Class V receiver · gooseneck & fifth-wheel prep · integrated trailer brake controller' },
      { label: 'Tech', value: 'Pro Trailer Backup Assist · 360° camera · Ford BlueCruise-ready' },
      { label: 'Seating', value: '5 adults' },
    ],
    options: ['Self-drive', 'Gooseneck & fifth-wheel ready', 'Delivered to your door, marina, or ranch'],
    chauffeur: false,
    seats: 5,
    dir: 'f350',
    hero: '01-hero-towing-sl.jpg',
    gallery: [
      { file: '01-hero-towing-sl.jpg', alt: 'White Ford F-350 Platinum dually towing the AMG SL 63 on a trailer' },
      { file: '02-front-three-quarter-wasatch.jpg', alt: 'F-350 Platinum dually front three-quarter view with the Wasatch mountains' },
      { file: '03-front-three-quarter.jpg', alt: 'F-350 Platinum dually front three-quarter view' },
      { file: '04-rear-three-quarter.jpg', alt: 'F-350 Platinum dually rear three-quarter view showing FX4 badge and dual rear wheels' },
      { file: '05-cockpit.jpg', alt: 'F-350 Platinum cockpit with leather steering wheel and 12-inch screen' },
      { file: '06-front-seat.jpg', alt: 'F-350 Platinum Plus two-tone quilted leather front seat' },
      { file: '07-rear-seats.jpg', alt: 'F-350 Platinum Plus rear seats in the crew cab' },
      { file: '08-platinum-badge.jpg', alt: 'F-350 Platinum fender badge and 6.7L Power Stroke emblem' },
      { file: '09-platinum-sill.jpg', alt: 'Illuminated Platinum door sill plate' },
      { file: '10-massage-screen.jpg', alt: 'F-350 touchscreen showing massaging seat controls' },
    ],
    verifyNote: 'Tow ratings vary by axle, cab, and bed configuration. Confirm against the door-jamb label before quoting a number.',
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return FLEET.find((v) => v.slug === slug);
}

export function heroSrc(v: Vehicle) {
  return `/reserve/${v.dir}/${v.hero}`;
}

export function imgSrc(v: Vehicle, file: string) {
  return `/reserve/${v.dir}/${file}`;
}
