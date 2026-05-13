import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alpine Fence & Deck',
    short_name: 'Alpine F&D',
    description:
      "Utah's premier fence and deck builder. Wood, vinyl, composite, iron, aluminum, decking, railings, staining, refinishing, and repair across 94 Wasatch Front cities.",
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
