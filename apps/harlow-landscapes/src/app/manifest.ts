import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.shortName,
    description: BRAND.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfbf6',
    theme_color: '#1f2c1c',
    icons: [
      { src: '/harlow/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/harlow/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
