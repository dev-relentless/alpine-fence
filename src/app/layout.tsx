import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY } from '@/data/cities';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alpinefenceanddeck.com'),
  title: {
    default: 'Alpine Fence & Deck | Composite Fence & Deck Contractor Utah | Compozen® Certified',
    template: '%s | Alpine Fence & Deck',
  },
  description:
    `Utah's premier composite fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite installations across 94 cities. ${COMPANY.yearsExperience}+ years experience. Free estimates. (801) 471-3148`,
  applicationName: 'Alpine Fence & Deck',
  category: 'Home Improvement',
  keywords: [
    'composite fence Utah',
    'composite deck Utah',
    'composite fencing contractor',
    'composite decking Utah',
    'Compozen composite fence',
    'Compozen composite deck',
    'fence contractor Utah',
    'deck contractor Utah',
    'composite fence installation Utah',
    'composite deck installation Utah',
    'composite fence repair',
    'deck refinishing Utah',
    'fence repair Salt Lake City',
    'HOA approved composite fencing',
    'zero maintenance fence Utah',
    'composite fence Salt Lake City',
    'composite deck Provo',
    'fence company near me Utah',
    'deck builder Provo Utah',
    'composite fence cost Utah',
    'best fence contractor Wasatch Front',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alpinefenceanddeck.com',
    siteName: 'Alpine Fence & Deck',
    title: 'Alpine Fence & Deck | Utah\'s #1 Composite Fence & Deck Contractor',
    description: 'Utah\'s premier composite fence and deck contractor. Refinishing, repair, and exclusive Compozen® composite installations across 94 cities.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Alpine Fence & Deck — Composite Fence and Deck Installations in Utah' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpine Fence & Deck | Utah\'s #1 Composite Fence & Deck Contractor',
    description: 'Utah\'s premier composite fence and deck contractor. Compozen® certified installer serving 94 Utah cities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com',
    languages: {
      'en-US': 'https://alpinefenceanddeck.com',
    },
  },
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN',
    other: {
      'msvalidate.01': 'BING_SITE_VERIFICATION_TOKEN',
      'yandex-verification': 'YANDEX_VERIFICATION_TOKEN',
    },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Provo, Utah',
    'geo.position': '40.2338;-111.6585',
    'ICBM': '40.2338, -111.6585',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
