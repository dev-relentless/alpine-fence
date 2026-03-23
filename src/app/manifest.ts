import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alpine Fence & Deck',
    short_name: 'Alpine Fence',
    description:
      "Utah's premier composite fence and deck contractor. Compozen® certified installer serving 94 cities.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d5a27',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
