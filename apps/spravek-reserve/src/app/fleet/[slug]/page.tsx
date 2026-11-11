import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Gallery from '@/components/Gallery';
import { BRAND } from '@/data/brand';
import { FLEET, getVehicle, heroSrc, imgSrc } from '@/data/fleet';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return FLEET.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const v = getVehicle(params.slug);
  if (!v) return {};
  const title = `${v.make} ${v.model} Rental in Utah — ${v.role}`;
  return {
    title,
    description: `${v.intro} Available by allocation from ${BRAND.name}, delivered along the Wasatch Front and Park City.`,
    alternates: { canonical: `/fleet/${v.slug}` },
    openGraph: {
      title,
      description: v.oneLiner,
      images: [{ url: heroSrc(v), width: 2400, height: 1800, alt: v.gallery[0].alt }],
    },
  };
}

export default function VehiclePage({ params }: Params) {
  const v = getVehicle(params.slug);
  if (!v) notFound();

  const others = FLEET.filter((o) => o.slug !== v.slug);
  const images = v.gallery.map((g) => ({ src: imgSrc(v, g.file), alt: g.alt }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${v.make} ${v.model}`,
    description: v.intro,
    image: images.map((i) => `${BRAND.url}${i.src}`),
    brand: { '@type': 'Brand', name: v.make },
    offers: {
      '@type': 'Offer',
      url: `${BRAND.url}/fleet/${v.slug}`,
      availability: 'https://schema.org/LimitedAvailability',
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: 'By allocation — quoted on request' },
      seller: { '@id': `${BRAND.url}/#business` },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[21/9]">
          <Image src={heroSrc(v)} alt={v.gallery[0].alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/40" />
        </div>
        <div className="container-reserve relative -mt-28 pb-16 md:-mt-40">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-champagne-500">{v.numeral}</span>
            <span className="h-px w-10 bg-champagne-500/60" />
            <span className="eyebrow">{v.role}</span>
          </div>
          <h1 className="h-display mt-5 text-4xl md:text-7xl">
            {v.make} <span className="italic">{v.model}</span>
          </h1>
          <p className="mt-5 font-display text-2xl italic text-champagne-300 md:text-3xl">“{v.oneLiner}”</p>
        </div>
      </section>

      {/* INTRO + SPECS */}
      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <p className="text-lg leading-relaxed text-obsidian-100 md:text-xl">{v.intro}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="eyebrow-muted">Best for</h2>
              <ul className="mt-4 space-y-2 text-sm text-obsidian-200">
                {v.bestFor.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow-muted">Service</h2>
              <ul className="mt-4 space-y-2 text-sm text-obsidian-200">
                {v.options.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={`/allocation?vehicle=${v.slug}`} className="btn-gold">Request Allocation</Link>
            {v.chauffeur && <Link href={`/allocation?vehicle=${v.slug}&service=chauffeured`} className="btn-outline">Request a Driver</Link>}
          </div>
        </div>

        <aside className="card self-start p-8">
          <h2 className="eyebrow">Specification</h2>
          <dl className="mt-6 divide-y divide-obsidian-800">
            <Row label="Year" value={v.year} />
            <Row label="Exterior" value={v.color} />
            <Row label="Interior" value={v.interior} />
            {v.specs.map((s) => <Row key={s.label} label={s.label} value={s.value} />)}
          </dl>
          {v.verifyNote && <p className="mt-5 text-xs leading-relaxed text-obsidian-500">{v.verifyNote}</p>}
          <div className="mt-8 border-t border-obsidian-800 pt-6">
            <div className="eyebrow-muted">Rate</div>
            <p className="mt-2 font-display text-2xl text-bone-50">By allocation</p>
            <p className="mt-1 text-xs text-obsidian-400">Quoted on request. Multi-day and weekly allocations are priced accordingly.</p>
          </div>
        </aside>
      </section>

      {/* GALLERY */}
      <section className="container-reserve pb-24 md:pb-32">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="h-display text-3xl md:text-4xl">In detail.</h2>
          <span className="eyebrow-muted">{images.length} photographs</span>
        </div>
        <Gallery images={images} />
      </section>

      {/* OTHERS */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve py-20">
          <span className="eyebrow-muted">Also in the Reserve</span>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/fleet/${o.slug}`} className="group card relative aspect-[16/9] overflow-hidden">
                <Image src={heroSrc(o)} alt={o.gallery[0].alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="eyebrow">{o.numeral} · {o.role}</div>
                  <div className="mt-2 font-display text-2xl text-bone-50">{o.make} {o.model}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-3 text-sm">
      <dt className="text-obsidian-400">{label}</dt>
      <dd className="text-obsidian-100">{value}</dd>
    </div>
  );
}
