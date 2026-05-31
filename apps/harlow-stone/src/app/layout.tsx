import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BRAND } from '@/data/brand';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
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
    default: `${BRAND.name} | Premium Landscape Design-Build, Utah`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.description,
  applicationName: BRAND.name,
  category: 'Landscape Architecture',
  keywords: [
    'landscape design Utah',
    'landscape architect Utah',
    'design-build landscape Utah',
    'luxury landscaping Salt Lake City',
    'high-end landscape Park City',
    'hardscape design Utah',
    'outdoor lighting Utah',
    'estate landscape Wasatch Front',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | Premium Landscape Design-Build`,
    description: BRAND.description,
    images: [{ url: '/harlow/og.jpg', width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.name,
    description: BRAND.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/harlow/favicon.ico',
    apple: '/harlow/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#1f2c1c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-stone-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
