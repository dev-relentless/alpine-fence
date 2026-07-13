import type { Metadata, Viewport } from 'next';
import { Oswald, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
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
    default: `${BRAND.name} | Equipment, Attachment & Trailer Rentals · Utah`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Equipment Rental',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: BRAND.url,
  },
  keywords: [
    // Service-led
    'equipment rental Utah',
    'skid steer rental Utah',
    'mini excavator rental Utah',
    'compact track loader rental Utah',
    'trencher rental Utah',
    'attachment rental Utah',
    'auger rental Utah',
    'dump trailer rental Utah',
    'equipment trailer rental Utah',
    // Geo
    'equipment rental Lehi',
    'skid steer rental Utah County',
    'mini excavator rental Salt Lake City',
    'trailer rental Wasatch Front',
    // Intent
    'contractor equipment rental Utah',
    'weekend equipment rental Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Equipment, Attachment & Trailer Rentals`,
    description: BRAND.shortDescription,
    images: [{ url: '/relentless/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
    images: ['/relentless/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Wasatch Front, Utah',
    'geo.position': '40.3916;-111.8508',
    ICBM: '40.3916, -111.8508',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
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
      <body className="min-h-screen flex flex-col bg-dust-50 text-carbon-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
