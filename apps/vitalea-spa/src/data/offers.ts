/**
 * Prepaid offers: gift cards, membership, packages, add-ons.
 * A null price is not shown on the site; set it once the offer is priced.
 * Names and descriptions live in i18n.ts.
 */

// Shows the holiday bonus banner on /gift-cards. Its terms are the giftCards.promo copy in i18n.ts.
export const GIFT_PROMO_ACTIVE: boolean = false;

export const MEMBERSHIP: { monthlyPrice: number | null } = {
  monthlyPrice: null,
};

/** VIP Massage series, by number of one-hour sessions. */
export const PACKAGES: { sessions: number; price: number | null }[] = [
  { sessions: 3, price: null },
  { sessions: 5, price: null },
];

export type AddOnId = 'hotStone' | 'paraffinHands' | 'aromatherapy';

export const ADD_ONS: { id: AddOnId; price: number | null }[] = [
  { id: 'hotStone', price: null },
  { id: 'paraffinHands', price: null },
  { id: 'aromatherapy', price: null },
];
