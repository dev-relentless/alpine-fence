import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    default: `${BRAND.name} | Pergolas, Louvered Roofs & Pavilions · Utah`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  applicationName: BRAND.name,
  category: 'Pergola Builder',
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: BRAND.url,
  },
  keywords: [
    // Service-led
    'pergola builder Utah',
    'pergola contractor Utah',
    'cedar pergola Utah',
    'louvered pergola Utah',
    'motorized pergola Utah',
    'pavilion builder Utah',
    'gazebo builder Utah',
    'patio cover Utah',
    'attached pergola Utah',
    'freestanding pergola Utah',
    'pergola with lighting Utah',
    // Geo
    'pergola builder Lehi',
    'pergola Salt Lake City',
    'pergola Utah County',
    'backyard shade Wasatch Front',
    // Intent
    'pergola cost Utah',
    'custom pergola design Utah',
    'snow rated pergola Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Pergolas, Louvered Roofs & Pavilions`,
    description: BRAND.shortDescription,
    images: [{ url: '/pergola/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
    images: ['/pergola/og.jpg'],
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
