/**
 * Gallery captions. The gallery itself is auto-discovered from
 * public/ats/gallery/ at build time (see src/lib/photos.ts) — any
 * jpg/png/webp/avif dropped in that folder appears on /gallery.
 *
 * Filenames are humanized into titles automatically
 * ("03-cedar-pergola-park-city.jpg" → "Cedar Pergola Park City").
 * Add an entry here, keyed by filename, to override the title or
 * add a location / tag.
 */

export interface GalleryCaption {
  title?: string;
  location?: string;
  /** One of the /outdoor-living slugs or 'pergolas'; used for filtering. */
  tag?: 'pergolas' | 'pavilions' | 'outdoor-kitchens' | 'fire-features' | 'privacy-screens' | 'lighting' | 'spa-surrounds' | 'design-build';
}

export const galleryCaptions: Record<string, GalleryCaption> = {
  '01-cedar-pergola-dining-terrace.jpg': { title: 'Cedar Pergola, Dining Terrace', tag: 'pergolas' },
  '02-timber-pavilion-poolside.jpg': { title: 'Timber Pavilion, Poolside', tag: 'pavilions' },
  '03-attached-louvered-pergola.jpg': { title: 'Attached Louvered Pergola', tag: 'pergolas' },
};

export const galleryTags: { slug: NonNullable<GalleryCaption['tag']>; label: string }[] = [
  { slug: 'pergolas', label: 'Pergolas' },
  { slug: 'pavilions', label: 'Pavilions' },
  { slug: 'outdoor-kitchens', label: 'Kitchens' },
  { slug: 'fire-features', label: 'Fire' },
  { slug: 'privacy-screens', label: 'Privacy' },
  { slug: 'lighting', label: 'Lighting' },
  { slug: 'spa-surrounds', label: 'Spa' },
  { slug: 'design-build', label: 'Complete spaces' },
];
