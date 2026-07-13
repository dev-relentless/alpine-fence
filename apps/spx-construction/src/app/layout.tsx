import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz'],
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | Design · Build — Wasatch Front, Utah`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'General Contractor',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: BRAND.url,
  },
  keywords: [
    // Positioning
    'design build firm Utah',
    'design build contractor Salt Lake City',
    'custom home builder Wasatch Front',
    'custom home builder Park City',
    'luxury home builder Utah',
    'whole home renovation Utah',
    // Service-led (kept — these earn)
    'home addition contractor Utah',
    'second story addition Utah',
    'basement finishing Utah',
    'basement walkout Utah',
    'structural remodel Utah',
    'load bearing wall removal Utah',
    // Geo
    'general contractor Salt Lake City',
    'home additions Draper',
    'renovation contractor Holladay',
    'custom builder Utah County',
    // Intent
    'licensed residential contractor Wasatch Front',
    'ADU contractor Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Design · Build`,
    description: BRAND.shortDescription,
    images: [{ url: '/spx/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
    images: ['/spx/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Wasatch Front, Utah',
    'geo.position': '40.5247;-111.8638',
    ICBM: '40.5247, -111.8638',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#121110' },
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
      <body className="min-h-screen flex flex-col bg-bone-50 text-carbon-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
