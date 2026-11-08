import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const body = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | Pergolas, Louvered Roofs & Pavilions · ${BRAND.state}`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Pergola Builder',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  // Canonicals are set per page — a root-level canonical would mark every
  // subpage as a duplicate of the homepage.
  keywords: [
    // Service-led
    `pergola builder ${BRAND.state}`,
    `pergola contractor ${BRAND.state}`,
    `cedar pergola ${BRAND.state}`,
    `louvered pergola ${BRAND.state}`,
    `motorized pergola ${BRAND.state}`,
    `pavilion builder ${BRAND.state}`,
    `gazebo builder ${BRAND.state}`,
    `patio cover ${BRAND.state}`,
    `attached pergola ${BRAND.state}`,
    `freestanding pergola ${BRAND.state}`,
    `pergola with lighting ${BRAND.state}`,
    // Geo
    ...BRAND.address.cities.slice(0, 4).map((c) => `pergola builder ${c}`),
    `backyard shade ${BRAND.region}`,
    // Intent
    `pergola cost ${BRAND.state}`,
    `custom pergola design ${BRAND.state}`,
    BRAND.climate.keyword,
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Pergolas, Louvered Roofs & Pavilions`,
    description: BRAND.shortDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': BRAND.geo.region,
    'geo.placename': BRAND.geo.placename,
    'geo.position': `${BRAND.geo.lat};${BRAND.geo.lng}`,
    ICBM: `${BRAND.geo.lat}, ${BRAND.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf7ec' },
    { media: '(prefers-color-scheme: dark)', color: '#281b0e' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <SchemaMarkup />
      </head>
      <body className="min-h-screen flex flex-col bg-linen-50 text-timber-950">
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
