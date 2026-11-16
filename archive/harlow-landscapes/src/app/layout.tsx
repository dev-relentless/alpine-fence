import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
    default: `${BRAND.name} | Premium Landscape Design-Build · Utah`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Landscape Architecture',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: BRAND.url,
  },
  keywords: [
    // Service-led
    'landscape design Utah',
    'landscape architect Utah',
    'design-build landscape Utah',
    'full landscape installation Utah',
    'retaining walls Utah',
    'sport court builder Utah',
    'pickleball court installation Utah',
    'hardscape design Utah',
    'outdoor lighting Utah',
    'water features Utah',
    'estate landscape Wasatch Front',
    // Geo
    'landscaping Salt Lake City',
    'landscaping Park City',
    'landscaping Holladay',
    'landscaping Alpine Utah',
    'landscaping Draper',
    'landscaping Lehi',
    'landscaping Cottonwood Heights',
    // Tier
    'luxury landscaping Utah',
    'premium landscape firm Utah',
    'high-end landscape design Wasatch Front',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Premium Landscape Design-Build`,
    description: BRAND.shortDescription,
    images: [{ url: '/harlow/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
    images: ['/harlow/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    // GEO / generative-engine optimization hints — read by ChatGPT, Perplexity, Gemini overlays.
    'geo.region': 'US-UT',
    'geo.placename': 'Wasatch Front, Utah',
    'geo.position': '40.5247;-111.8638',
    ICBM: '40.5247, -111.8638',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfbf6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1714' },
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
      <body className="min-h-screen flex flex-col bg-ivory-50 text-stone-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
