/**
 * Real guest reviews carried over from the studio's Google listing
 * (shown on the previous vitaleaspa.com site as "5.0 · Google").
 * Do not edit the quotes — they are verbatim guest words.
 */
export interface Review {
  quote: string;
  source: 'Google';
}

export const RATING = { value: '4.9', count: 47, source: 'Google' } as const;

export const REVIEWS: Review[] = [
  {
    quote:
      'Karol and Karol are so wonderful and kind. My massage was relaxing, therapeutic and rejuvenating! Highly recommended!',
    source: 'Google',
  },
  {
    quote:
      'Best experience ever, very friendly staff, very knowledgeable. Prices are affordable and the service is great. Highly recommended to anyone looking for a great day in the spa — perfect for couples.',
    source: 'Google',
  },
  {
    quote: 'I love this place ♥ the best service, TOP. The best massages in Utah.',
    source: 'Google',
  },
  {
    quote:
      'A warm and relaxing place. The esthetician was professional and attentive. The facial massage was perfect, relieving all the tension in my forehead and eyes. High-quality products that made all the difference.',
    source: 'Google',
  },
  {
    quote:
      'The place is very clean, quiet, and has a relaxing aroma from the moment you walk in. The staff was friendly and professional. I had a relaxing one-hour massage and left feeling refreshed.',
    source: 'Google',
  },
];
