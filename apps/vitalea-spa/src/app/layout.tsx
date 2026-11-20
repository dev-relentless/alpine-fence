import type { Metadata } from 'next';
import { Fraunces, Jost } from 'next/font/google';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const sans = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} · Massage & Spa in Draper, UT`,
    template: `%s · ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    title: `${BRAND.name} · Massage & Spa in Draper, UT`,
    description: BRAND.shortDescription,
    url: BRAND.url,
    images: [{ url: '/photos/studio-sign.jpg', width: 1440, height: 1080, alt: `${BRAND.name} studio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} · Massage & Spa in Draper, UT`,
    description: BRAND.shortDescription,
    images: ['/photos/studio-sign.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
