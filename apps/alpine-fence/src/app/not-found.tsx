import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
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
            <Link href="/quote" className="btn-compoxen">Get Free Estimate</Link>
            <Link href="/service-areas" className="btn-secondary">Find Your City</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-50 border-t border-stone-200">
        <div className="section-container max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-stone-900 mb-8 text-center">Popular Pages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Our Services', href: '/services', desc: 'Refinishing, repair & Compoxen® composite' },
              { label: 'Project Gallery', href: '/gallery', desc: 'Before & after transformations' },
              { label: 'Service Areas', href: '/service-areas', desc: '94 Utah cities we serve' },
              { label: 'About Us', href: '/about', desc: 'Our story & expertise' },
              { label: 'Contact Us', href: '/contact', desc: 'Phone, email & office info' },
              { label: 'Free Estimate', href: '/quote', desc: 'Same-day response guaranteed' },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex flex-col p-4 rounded-xl border border-stone-200 hover:border-alpine-300 hover:shadow-md transition-all bg-white"
              >
                <span className="font-semibold text-alpine-700">{page.label}</span>
                <span className="text-sm text-stone-500 mt-1">{page.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
