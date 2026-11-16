/**
 * Recent work shown on the homepage and /pergolas. Files live in
 * public/pergola/projects/ (shared across every state site via the template).
 */
export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: '/pergola/projects/01-pool-pavilions-dusk.jpg', alt: 'Two timber pavilions beside a pool at dusk', caption: 'Twin pool pavilions' },
  { src: '/pergola/projects/02-stained-pergola-lights.jpg', alt: 'Dark-stained freestanding pergola with string lights over a patio', caption: 'Freestanding pergola, string lights' },
  { src: '/pergola/projects/03-heavy-timber-porch.jpg', alt: 'Heavy timber covered porch on stone columns', caption: 'Heavy timber porch on stone' },
  { src: '/pergola/projects/04-pergola-pavilion-kitchen.jpg', alt: 'Pergola and pavilion combination over an outdoor kitchen', caption: 'Pergola, pavilion & kitchen' },
  { src: '/pergola/projects/05-white-pergola-fire.jpg', alt: 'White pergola over a fire lounge at blue hour', caption: 'White pergola fire lounge' },
  { src: '/pergola/projects/06-pavilion-fire-pit-night.jpg', alt: 'Lit pavilion with a fire pit at night', caption: 'Pavilion & fire pit, night' },
  { src: '/pergola/projects/07-timber-pergola-spa.jpg', alt: 'Timber pergola over a hot tub', caption: 'Pergola over the spa' },
  { src: '/pergola/projects/08-heavy-timber-pavilion.jpg', alt: 'Heavy timber pavilion in open high-desert landscape', caption: 'Heavy timber pavilion' },
];
