import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.shortName,
    description: BRAND.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f7f5',
    theme_color: '#0e1013',
    icons: [
      { src: '/braddock/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/braddock/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
