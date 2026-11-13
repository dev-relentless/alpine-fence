import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const sans = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Luxury Car Rental',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.legalEntity,
  alternates: { canonical: BRAND.url },
  keywords: [
    'luxury car rental Utah',
    'luxury car rental Lehi',
    'exotic car rental Salt Lake City',
    'luxury car rental Salt Lake City',
    'luxury car rental Park City',
    'exotic car rental Utah',
    'Mercedes rental Utah',
    'AMG SL 63 rental',
    'S-Class rental Salt Lake City',
    'chauffeur service Park City',
    'chauffeur service Salt Lake City airport',
    'black car service Utah',
    'F-350 dually rental Utah',
    'luxury truck rental Utah',
    'wedding car rental Utah',
    'convertible rental Park City',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.shortDescription,
    images: [{ url: '/reserve/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.headline,
    images: ['/reserve/og.jpg'],
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
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <SchemaMarkup />
      </head>
      <body className="flex min-h-screen flex-col bg-obsidian-950 text-obsidian-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
