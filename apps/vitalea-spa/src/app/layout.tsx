import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} · Massage & Spa in Draper, UT`,
    template: `%s · ${BRAND.shortName}`,
  },
  description: BRAND.shortDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    title: `${BRAND.name} · Massage & Spa in Draper, UT`,
    description: BRAND.shortDescription,
    url: BRAND.url,
  },
  robots: {
    // noindex until the client's own photos replace the placeholders — see PLAYBOOK.md §3
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
