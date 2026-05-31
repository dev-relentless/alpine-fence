import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import { COMPANY } from '@/data/cities';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alpinefenceanddeck.com'),
  title: {
    default: 'Alpine Fence & Deck | Utah Fence, Deck & Landscape Builder',
    template: '%s | Alpine Fence & Deck',
  },
  description:
    `Utah's premier fence and deck builder — now with full yard & landscape services. Wood, vinyl, composite, ornamental iron, aluminum, decks, sod, retaining walls, paver patios, and sprinklers across 94 cities. ${COMPANY.yearsExperience}+ years experience. Free same-day estimates. (801) 471-3148`,
  applicationName: 'Alpine Fence & Deck',
  category: 'Home Improvement',
  keywords: [
    'fence contractor Utah',
    'fence company Utah',
    'fence installation Utah',
    'wood fence Utah',
    'vinyl fence Utah',
    'composite fence Utah',
    'ornamental iron fence Utah',
    'aluminum fence Utah',
    'chain link fence Utah',
    'ranch fence Utah',
    'privacy fence Utah',
    'custom gates Utah',
    'deck contractor Utah',
    'deck builder Utah',
    'composite deck Utah',
    'wood deck Utah',
    'deck refinishing Utah',
    'fence repair Utah',
    'fence company near me Utah',
    'fence Salt Lake City',
    'fence Provo Utah',
    'best fence contractor Wasatch Front',
    'sod installation Utah',
    'retaining wall Utah',
    'paver patio Utah',
    'sprinkler installation Utah',
    'landscape design Utah',
    'yard services Utah',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alpinefenceanddeck.com',
    siteName: 'Alpine Fence & Deck',
    title: 'Alpine Fence & Deck | Utah\'s Premier Fence, Deck & Landscape Builder',
    description: 'Wood, vinyl, composite, iron, aluminum, and custom fences. Decks, refinishing, repair — plus sod, walls, pavers, sprinklers, and landscape design across 94 Utah cities.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Alpine Fence & Deck — Fence and Deck Installations in Utah' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpine Fence & Deck | Utah\'s Premier Fence, Deck & Landscape Builder',
    description: 'Fence, deck, sod, walls, pavers, sprinklers, and landscape design across 94 Utah cities.',
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
  },
  // TODO: Add real verification tokens from Google Search Console, Bing Webmaster Tools, etc.
  // verification: {
  //   google: 'your-real-google-token',
  //   other: { 'msvalidate.01': 'your-real-bing-token' },
  // },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Provo, Utah',
    'geo.position': '40.2338;-111.6585',
    'ICBM': '40.2338, -111.6585',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://online-booking.housecallpro.com" />
        <link rel="dns-prefetch" href="https://book.housecallpro.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
