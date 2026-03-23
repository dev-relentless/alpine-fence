import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Fence & Deck Gallery | Before & After Transformations',
  description: 'Browse before and after photos of fence staining, deck refinishing, new fence installations, and repair projects across Utah by Alpine Fence & Deck.',
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
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Fence & Deck Project Gallery
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Browse our portfolio of fence staining, deck refinishing, new installations, and repair projects 
              across Utah. Real before &amp; after transformations.
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
          <h2 className="text-3xl font-heading font-bold mb-4">
            Want Your Project in Our Gallery?
          </h2>
          <p className="text-stone-300 mb-8">
            Every project starts with a free estimate. Whether it&apos;s refinishing or a new installation, 
            let us transform your outdoor space.
          </p>
          <Link href="/quote" className="btn-compozen">
            Get Your Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
