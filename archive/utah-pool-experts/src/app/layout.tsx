import type { Metadata, Viewport } from 'next';
import { Sora, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | Pool Cleaning, Maintenance & Repair · Since 1996`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Pool Service',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: BRAND.url,
  },
  keywords: [
    // Service-led
    'pool service Utah',
    'pool cleaning Utah',
    'weekly pool service Utah',
    'pool maintenance Utah',
    'pool equipment repair Utah',
    'pool pump repair Utah',
    'pool heater repair Utah',
    'spa service Utah',
    'hot tub service Utah',
    'pool opening Utah',
    'pool closing Utah',
    'pool winterization Utah',
    'chemical only pool service Utah',
    'green pool cleanup Utah',
    // Geo
    'pool service Orem',
    'pool cleaning Provo',
    'pool service Utah County',
    'pool service Salt Lake County',
    // Intent
    'pool service cost Utah',
    'pool company near me Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Pool & Spa Cleaning, Maintenance & Repair`,
    description: BRAND.shortDescription,
    images: [{ url: '/pool/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
    images: ['/pool/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Orem, Utah',
    'geo.position': '40.3097;-111.7118',
    ICBM: '40.3097, -111.7118',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0e2937' },
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
      <body className="min-h-screen flex flex-col bg-deck-50 text-pool-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
