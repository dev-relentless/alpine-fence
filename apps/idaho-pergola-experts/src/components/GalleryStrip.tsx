import Image from 'next/image';
import { galleryPhotos } from '@/data/gallery';

/** A folio of recent work — framed like the structure plates. */
export default function GalleryStrip({ limit, title = 'Recent work.' }: { limit?: number; title?: string }) {
  const photos = limit ? galleryPhotos.slice(0, limit) : galleryPhotos;
  return (
    <section className="bg-linen-100 border-y border-timber-200">
      <div className="container-patio py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="tag mb-4">The Folio</div>
          <h2 className="h-display text-4xl md:text-5xl text-timber-950">{title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className={`bg-linen-50 border border-timber-200 p-2 shadow-plate ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-timber-200/80">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-center tag text-timber-500">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
