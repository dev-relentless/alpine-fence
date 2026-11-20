/**
 * Service menu and pricing.
 *
 * Pricing research — Nov 20, 2026 (Draper / Salt Lake City market):
 *   · 60-min massage locally: $70–$110 (premium studios at $110)
 *   · Hydrafacial locally: $175–$299 signature, $225–$250 deluxe (branded med-spas)
 *   · Lymphatic drainage locally: $80–$250 per session
 *   · Reflexology locally: $50–$100 avg; $85/60 min at premium studios
 * Prices below are positioned slightly above the local median and well under
 * the premium med-spa outliers. Previous prices kept in `wasPrice` for the
 * next revision's baseline.
 */

export type PartyKey = 'her' | 'him' | 'couple';

export interface Service {
  id: string;
  calSlug: string;
  name: string;
  blurb: string;
  durations: number[]; // minutes
  /** price per party type, keyed by duration (minutes) */
  prices: Record<PartyKey, Record<number, number>>;
  wasPrice: Record<PartyKey, Record<number, number>>;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'vip',
    calSlug: 'vip-massage',
    name: 'VIP Massage',
    blurb:
      'Our signature full-body session. Karol blends Swedish, deep-tissue, and lymphatic strokes around what your body actually needs that day — no fixed script, no rushing the clock.',
    durations: [60, 90, 120],
    prices: {
      her: { 60: 90, 90: 125, 120: 170 },
      him: { 60: 90, 90: 125, 120: 170 },
      couple: { 60: 160, 90: 220, 120: 300 },
    },
    wasPrice: {
      her: { 60: 80, 90: 110, 120: 150 },
      him: { 60: 80, 90: 110, 120: 150 },
      couple: { 60: 135, 90: 185, 120: 250 },
    },
    popular: true,
  },
  {
    id: 'hydrafacial',
    calSlug: 'hydrafacial',
    name: 'Hydrofacial',
    blurb:
      'A deep cleanse, soft exfoliation, and hydrating serum infusion that leaves skin visibly brighter in a single hour — gentle enough for sensitive skin.',
    durations: [60],
    prices: { her: { 60: 95 }, him: { 60: 95 }, couple: { 60: 170 } },
    wasPrice: { her: { 60: 75 }, him: { 60: 75 }, couple: { 60: 125 } },
  },
  {
    id: 'hydrafacialPlus',
    calSlug: 'hydrafacial-advanced',
    name: 'Advanced Hydrofacial',
    blurb:
      'The full hydrofacial extended to ninety minutes with added device work — for dull, congested, or tired skin that needs more than maintenance.',
    durations: [90],
    prices: { her: { 90: 140 }, him: { 90: 140 }, couple: { 90: 250 } },
    wasPrice: { her: { 90: 110 }, him: { 90: 110 }, couple: { 90: 185 } },
  },
  {
    id: 'lymphatic',
    calSlug: 'lymphatic',
    name: 'Lymphatic Drainage',
    blurb:
      'Light, rhythmic strokes that move fluid where it has settled — a favorite for puffiness, water retention, and post-surgical recovery (with your surgeon\u2019s clearance).',
    durations: [60, 90],
    prices: {
      her: { 60: 105, 90: 140 },
      him: { 60: 105, 90: 140 },
      couple: { 60: 190, 90: 250 },
    },
    wasPrice: {
      her: { 60: 90, 90: 120 },
      him: { 60: 90, 90: 120 },
      couple: { 60: 150, 90: 200 },
    },
  },
  {
    id: 'reflexology',
    calSlug: 'reflexology',
    name: 'Reflexology',
    blurb:
      'Focused pressure-point work on the feet that eases tension far beyond them. The right finish to a long week on your feet.',
    durations: [30, 60, 90],
    prices: {
      her: { 30: 50, 60: 75, 90: 105 },
      him: { 30: 50, 60: 75, 90: 105 },
      couple: { 30: 95, 60: 140, 90: 190 },
    },
    wasPrice: {
      her: { 30: 45, 60: 65, 90: 90 },
      him: { 30: 45, 60: 65, 90: 90 },
      couple: { 30: 90, 60: 130, 90: 180 },
    },
  },
  {
    id: 'paraffin',
    calSlug: 'paraffin',
    name: 'Paraffin Treatment',
    blurb:
      'Warm paraffin wraps for hands or feet — deep, lasting warmth that softens skin and quiets stiff, achy joints.',
    durations: [30, 60, 90],
    prices: {
      her: { 30: 45, 60: 80, 90: 110 },
      him: { 30: 45, 60: 80, 90: 110 },
      couple: { 30: 85, 60: 145, 90: 200 },
    },
    wasPrice: {
      her: { 30: 40, 60: 70, 90: 100 },
      him: { 30: 40, 60: 70, 90: 100 },
      couple: { 30: 70, 60: 120, 90: 170 },
    },
  },
];

export function fromPrice(s: Service): number {
  return Math.min(...Object.values(s.prices.her));
}
