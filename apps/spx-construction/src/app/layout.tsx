import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | Additions, Basements & Walkouts · Utah`,
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
    // Service-led
    'general contractor Utah',
    'home addition contractor Utah',
    'basement finishing Utah',
    'basement walkout Utah',
    'basement entrance Utah',
    'egress window installation Utah',
    'structural remodel Utah',
    'load bearing wall removal Utah',
    'garage builder Utah',
    // Geo
    'general contractor Salt Lake City',
    'basement finishing Lehi',
    'home additions Draper',
    'basement walkout Sandy',
    'contractor Utah County',
    // Intent
    'licensed residential contractor Wasatch Front',
    'basement apartment contractor Utah',
    'ADU contractor Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Residential General Contractor`,
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
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0d10' },
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
      <body className="min-h-screen flex flex-col bg-concrete-50 text-iron-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
