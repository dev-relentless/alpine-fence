import type { Metadata } from 'next';
import { BRAND } from './brand';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: BRAND.name,
      title,
      description,
      url: path,
      images: [{ url: '/photos/studio-sign.jpg', width: 1440, height: 1080, alt: `${BRAND.name} studio` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/photos/studio-sign.jpg'],
    },
  };
}
