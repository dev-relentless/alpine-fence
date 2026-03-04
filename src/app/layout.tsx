import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alpinefenceanddeck.com'),
  title: {
    default: 'Alpine Fence & Deck | Composite Fence & Deck Contractor Utah | Compozen® Certified',
    template: '%s | Alpine Fence & Deck',
  },
  description:
    'Utah\'s premier composite fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite installations across 94 cities. 15+ years experience. Free estimates. (801) 471-3148',
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
    description: 'Utah\'s premier composite fence and deck contractor. Compozen® certified installer.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com',
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
