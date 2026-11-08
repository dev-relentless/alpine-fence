import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.shortName,
    description: BRAND.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f2',
    theme_color: '#0e1114',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/pwa-icon?size=192', sizes: '192x192', type: 'image/png' },
      { src: '/pwa-icon?size=512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
