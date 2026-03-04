import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-heading font-bold text-alpine-900 mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-stone-700 mb-4">Page Not Found</h2>
        <p className="text-stone-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/quote" className="btn-secondary">Get Free Estimate</Link>
          <Link href="/service-areas" className="btn-secondary">Find Your City</Link>
        </div>
      </div>
    </section>
  );
}
