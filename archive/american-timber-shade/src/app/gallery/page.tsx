import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import Photo from '@/components/Photo';
import { BRAND } from '@/data/brand';
import { listGalleryPhotos, GALLERY_DIR } from '@/lib/photos';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Timber pergolas, pavilions, outdoor kitchens, fire features, and lighting — built across the Mountain West by American Timber Shade.',
  alternates: { canonical: `${BRAND.url}/gallery` },
};

export default function GalleryPage() {
  const photos = listGalleryPhotos();

  return (
    <>
      <section className="bg-bone-glow">
        <div className="container-site pt-20 md:pt-28 pb-14 md:pb-16 text-center max-w-3xl">
          <div className="tag mb-5">The Work</div>
          <h1 className="h-display text-5xl md:text-6xl text-ink-950 leading-[1.0]">Built, not rendered.</h1>
          <p className="mt-7 text-ink-600 text-lg leading-relaxed">
            Every photograph here is a space we designed and built. Timber, stone, steel, fire,
            and light — and the people who live under it now.
          </p>
        </div>
      </section>

      <section className="container-site pb-24 md:pb-32">
        {photos.length > 0 ? (
          <GalleryGrid photos={photos} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {Array.from({ length: 9 }, (_, i) => {
              const n = String(i + 1).padStart(2, '0');
              return (
                <Photo
                  key={n}
                  src={`${GALLERY_DIR}/${n}.jpg`}
                  alt={`Project photograph ${n}`}
                  label={`Gallery ${n}`}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className={i % 7 === 0 ? 'plate col-span-2 aspect-[16/10]' : 'plate aspect-[4/5]'}
                />
              );
            })}
          </div>
        )}
      </section>

      <section className="container-site pb-8 text-center">
        <div className="border border-bone-200 bg-bone-100 px-8 py-16 md:py-20">
          <h2 className="h-display text-3xl md:text-4xl text-ink-950 mb-4">Yours could be next.</h2>
          <p className="text-ink-600 max-w-xl mx-auto mb-9">
            Walk us through the space and we&rsquo;ll leave you with drawings, materials, and a price in writing.
          </p>
          <Link href="/quote" className="btn-primary">Start a project</Link>
        </div>
      </section>
    </>
  );
}
