import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alpinefenceanddeck.com'),
  title: {
    default: 'Alpine Fence & Deck | Compozen® Certified Installer | Utah Fence & Deck Contractor',
    template: '%s | Alpine Fence & Deck',
  },
  description:
    'Utah\'s premier fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite installations across 94 cities. 15+ years experience. Free estimates. (801) 555-DECK',
  keywords: [
    'fence contractor Utah',
    'deck contractor Utah',
    'Compozen composite fence',
    'Compozen composite deck',
    'deck refinishing Utah',
    'fence repair Salt Lake City',
    'composite fence installation',
    'HOA approved fencing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alpinefenceanddeck.com',
    siteName: 'Alpine Fence & Deck',
    title: 'Alpine Fence & Deck | Compozen® Certified Installer',
    description: 'Utah\'s premier fence and deck contractor. Refinishing, repair, and exclusive Compozen® composite installations.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Alpine Fence & Deck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpine Fence & Deck | Compozen® Certified Installer',
    description: 'Utah\'s premier fence and deck contractor.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup pageType="home" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
