import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import { BRAND } from '@/data/brand';
import { spaces } from '@/data/spaces';

export const metadata: Metadata = {
  title: 'Outdoor Living',
  description:
    'Complete outdoor living design-build — pavilions, outdoor kitchens, fire features, privacy screens, lighting, and spa surrounds designed with the pergola as one composition.',
  alternates: { canonical: `${BRAND.url}/outdoor-living` },
};

export default function OutdoorLivingPage() {
  return (
    <>
      <section className="bg-bone-glow">
        <div className="container-site pt-20 md:pt-28 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="tag mb-5">Outdoor Living</div>
            <h1 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink-950 leading-[1.0]">
              Transform the whole space.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-600 text-lg leading-relaxed">
              The pergola is the start. The kitchen under it, the fire beside it, the screen behind
              it, and the light that makes it glow after dark — designed on one plan and built by one
              crew so the whole yard reads as one room.
            </p>
          </div>
        </div>
        <div className="container-site pb-6 flex flex-wrap gap-x-7 gap-y-3">
          {spaces.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="tag !text-ink-700 hover:!text-ink-950 border-b border-transparent hover:border-brass-400 pb-1 transition-colors">
              {s.shortTitle}
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-bone-200">
        <div className="container-site divide-y divide-bone-200">
          {spaces.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 py-20 md:py-24 scroll-mt-28 items-start"
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Photo
                  src={s.photo}
                  alt={s.title}
                  label={s.title}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="plate aspect-[4/3]"
                />
              </div>
              <div className={`lg:col-span-6 space-y-6 max-w-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="tag">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-display text-3xl md:text-4xl text-ink-950 leading-tight">{s.title}</h2>
                <p className="text-xl text-ink-800 font-display leading-snug">{s.blurb}</p>
                <p className="text-ink-600 leading-relaxed">{s.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-ink-700">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-px w-3.5 shrink-0 bg-brass-400" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-ink-950 mb-4">One plan. One crew. One room.</h2>
        <p className="text-ink-600 mb-8 max-w-xl mx-auto">
          Tell us what the space should do and we&rsquo;ll draw the whole thing — then price it in writing with options priced apart.
        </p>
        <Link href="/quote" className="btn-primary">Start a project</Link>
      </section>
    </>
  );
}
