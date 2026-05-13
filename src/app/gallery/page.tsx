import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Fence & Deck Gallery | Before & After Project Photos',
  description: 'Browse before and after photos of fence and deck installations, staining, refinishing, and repair work across Utah by Alpine Fence & Deck.',
  openGraph: {
    title: 'Fence & Deck Project Gallery | Alpine Fence & Deck',
    description: 'Before & after fence and deck transformations across Utah. Staining, refinishing, installations & repair.',
    url: 'https://alpinefenceanddeck.com/gallery',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <SchemaMarkup pageType="gallery" breadcrumbs={[
        { name: 'Home', url: 'https://alpinefenceanddeck.com' },
        { name: 'Gallery', url: 'https://alpinefenceanddeck.com/gallery' },
      ]} />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Gallery' },
      ]} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300 mb-4">Project Gallery</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">
              The Work <span className="italic font-light text-compoxen-300">Speaks for Itself.</span>
            </h1>
            <p className="text-lg text-stone-200/90 leading-relaxed">
              A portfolio of recent fence and deck installations, staining, refinishing, and repair across Utah —
              real before &amp; after transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-alpine-600 uppercase tracking-wide">Featured Project</span>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-stone-900 mt-1">Wood Fence Refinish</h2>
          </div>
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/wood-fence-refinish-01.JPG"
              alt="Wood fence refinish project by Alpine Fence & Deck"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              quality={80}
            />
          </div>
        </div>
      </section>

      {/* Category tabs + gallery grid */}
      <GalleryGrid />

      {/* CTA */}
      <section className="section-padding bg-alpine-900 text-white text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">
            Want Your Project in Our Gallery?
          </h2>
          <p className="text-stone-300 mb-8">
            Every project starts with a free estimate. From staining to a brand-new install — let&apos;s build something remarkable.
          </p>
          <Link href="/quote" className="btn-primary">
            Get Your Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
