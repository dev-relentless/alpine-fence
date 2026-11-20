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
  '01-twin-pool-pavilions-dusk.jpg': { title: 'Twin Pool Pavilions at Dusk', tag: 'pavilions' },
  '02-heavy-timber-porch-on-stone.jpg': { title: 'Heavy Timber Porch on Stone', tag: 'pergolas' },
  '03-stained-pergola-string-lights.jpg': { title: 'Stained Pergola, String Lights', tag: 'lighting' },
  '04-cedar-pergola-over-deck.jpg': { title: 'Cedar Pergola Over the Deck', location: 'Wasatch Front, UT', tag: 'pergolas' },
  '05-pergola-pavilion-outdoor-kitchen.jpg': { title: 'Pergola, Pavilion & Kitchen', tag: 'design-build' },
  '06-white-pergola-fire-lounge.jpg': { title: 'White Pergola Fire Lounge', tag: 'fire-features' },
  '07-hip-roof-pavilion-stone-columns.jpg': { title: 'Hip-Roof Pavilion on Stone Columns', tag: 'pavilions' },
  '08-cedar-rafters-against-sky.jpg': { title: 'Cedar Rafters Against the Sky', location: 'Wasatch Front, UT', tag: 'pergolas' },
  '09-pavilion-fire-pit-night.jpg': { title: 'Pavilion & Fire Pit, Night', tag: 'fire-features' },
  '10-white-pergola-outdoor-kitchen.jpg': { title: 'White Pergola Outdoor Kitchen', tag: 'outdoor-kitchens' },
  '11-dark-stained-pavilion.jpg': { title: 'Dark-Stained Pavilion', location: 'Utah County, UT', tag: 'pavilions' },
  '12-pool-pavilion-waterfall.jpg': { title: 'Pool Pavilion with Waterfall', tag: 'design-build' },
  '13-timber-pergola-spa.jpg': { title: 'Timber Pergola Over the Spa', tag: 'spa-surrounds' },
  '14-heavy-timber-pavilion-high-desert.jpg': { title: 'Heavy Timber Pavilion, High Desert', tag: 'pavilions' },
  '15-attached-pergola-side-elevation.jpg': { title: 'Attached Pergola, Side Elevation', location: 'Wasatch Front, UT', tag: 'pergolas' },
  '16-slatted-privacy-trellis.jpg': { title: 'Slatted Privacy Trellis', tag: 'privacy-screens' },
  '17-modern-attached-patio-cover.jpg': { title: 'Modern Attached Patio Cover', tag: 'pergolas' },
  '18-pergola-entry-detail.jpg': { title: 'Pergola Entry Detail', location: 'Wasatch Front, UT', tag: 'pergolas' },
  '19-deck-pergola-from-above.jpg': { title: 'Deck Pergola From Above', location: 'Wasatch Front, UT', tag: 'pergolas' },
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
