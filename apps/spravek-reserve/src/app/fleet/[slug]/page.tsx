import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Gallery from '@/components/Gallery';
import RateBox from '@/components/RateBox';
import SpecTable from '@/components/SpecTable';
import Faq from '@/components/Faq';
import { BRAND, CANCELLATION, FAQ, REQUIREMENTS } from '@/data/brand';
import { FLEET, detailRows, getVehicle, heroSrc, imgSrc, usd } from '@/data/fleet';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return FLEET.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const v = getVehicle(params.slug);
  if (!v) return {};
  const title = `${v.year} ${v.make} ${v.model} Rental in Utah — From ${usd(v.rates.daily)}/day`;
  return {
    title,
    description: `Rent the ${v.year} ${v.make} ${v.model} in Salt Lake City and Park City from ${usd(v.rates.daily)} per day. ${v.rates.milesPerDay} miles/day included, ${usd(v.rates.deposit)} refundable deposit, delivery included on the Wasatch Front.${v.chauffeur ? ' Chauffeured service available.' : ''}`,
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
  const faq = FAQ.filter((f) => /requirement|insurance|deposit|miles|cancellation/i.test(f.q)).slice(0, 5);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${v.year} ${v.make} ${v.model}`,
    description: v.intro,
    image: images.map((i) => `${BRAND.url}${i.src}`),
    brand: { '@type': 'Brand', name: v.make },
    category: 'Luxury car rental',
    offers: {
      '@type': 'Offer',
      url: `${BRAND.url}/fleet/${v.slug}`,
      availability: 'https://schema.org/LimitedAvailability',
      priceCurrency: 'USD',
      price: v.rates.daily,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: v.rates.daily,
        priceCurrency: 'USD',
        unitCode: 'DAY',
        unitText: 'per day',
      },
      seller: { '@id': `${BRAND.url}/#business` },
    },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.url },
      { '@type': 'ListItem', position: 2, name: 'Rental Fleet', item: `${BRAND.url}/fleet` },
      { '@type': 'ListItem', position: 3, name: `${v.make} ${v.model}`, item: `${BRAND.url}/fleet/${v.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[21/9]">
          <Image src={heroSrc(v)} alt={v.gallery[0].alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/40" />
        </div>
        <div className="container-reserve relative -mt-28 pb-12 md:-mt-40">
          <nav aria-label="Breadcrumb" className="eyebrow-muted flex items-center gap-2">
            <Link href="/" className="hover:text-champagne-400">Home</Link><span>/</span>
            <Link href="/fleet" className="hover:text-champagne-400">Rental Fleet</Link><span>/</span>
            <span className="text-champagne-500">{v.model}</span>
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-display text-2xl text-champagne-500">{v.numeral}</span>
            <span className="h-px w-10 bg-champagne-500/60" />
            <span className="eyebrow">{v.role} · {v.category}</span>
          </div>
          <h1 className="h-display mt-5 text-4xl md:text-7xl">
            {v.year} {v.make} <span className="italic">{v.model}</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-obsidian-200">
            <span><span className="font-display text-3xl text-bone-50">{usd(v.rates.daily)}</span> / day</span>
            <span className="h-4 w-px bg-obsidian-700" />
            <span>{v.rates.milesPerDay} mi / day included</span>
            <span className="h-4 w-px bg-obsidian-700" />
            <span>{v.seats} seats</span>
            <span className="h-4 w-px bg-obsidian-700" />
            <span>{v.drivetrain.split(',')[0]}</span>
            {v.chauffeur && (<><span className="h-4 w-px bg-obsidian-700" /><span className="text-champagne-400">Chauffeur available</span></>)}
          </div>
        </div>
      </section>

      {/* DESCRIPTION + RATE BOX */}
      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <h2 className="eyebrow">Overview</h2>
          <p className="mt-5 text-lg leading-relaxed text-obsidian-100 md:text-xl">{v.intro}</p>
          <p className="mt-5 font-display text-2xl italic text-champagne-300">“{v.oneLiner}”</p>

          <div className="mt-12">
            <SpecTable title="Vehicle details" rows={detailRows(v)} />
          </div>

          <div className="mt-12">
            <SpecTable title="Performance & equipment" rows={v.specs} />
            {v.verifyNote && <p className="mt-4 text-xs leading-relaxed text-obsidian-500">{v.verifyNote}</p>}
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="eyebrow">Included with every rental</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-obsidian-200">
                {v.included.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Ideal for</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-obsidian-200">
                {v.bestFor.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
              </ul>
              <h2 className="eyebrow mt-8">Service options</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-obsidian-200">
                {v.options.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="self-start md:sticky md:top-28">
          <RateBox v={v} />
          <div className="card mt-6 p-6 text-sm">
            <h2 className="eyebrow">Requirements</h2>
            <ul className="mt-4 space-y-2 text-obsidian-200">
              <li>· Drivers {v.rates.minAge}+ with a valid license (3+ years)</li>
              <li>· Full-coverage personal auto insurance</li>
              <li>· Major credit card for the {usd(v.rates.deposit)} deposit</li>
              <li>· Clean driving record (5 years)</li>
            </ul>
            <Link href="/rates#requirements" className="btn-ghost mt-4">All requirements</Link>
          </div>
          <div className="card mt-6 p-6 text-sm">
            <h2 className="eyebrow">Cancellation</h2>
            <p className="mt-4 text-obsidian-200">{CANCELLATION.selfDrive[0].window}: {CANCELLATION.selfDrive[0].outcome}</p>
            <Link href="/terms#cancellation" className="btn-ghost mt-4">Full policy</Link>
          </div>
          <p className="mt-6 text-xs text-obsidian-500">
            Prefer to talk? <a href={`tel:${BRAND.phoneRaw}`} className="text-obsidian-300 hover:text-champagne-300">{BRAND.phone}</a> · {BRAND.hours.display}
          </p>
        </aside>
      </section>

      {/* GALLERY */}
      <section className="container-reserve pb-24 md:pb-32">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="h-display text-3xl md:text-4xl">Gallery</h2>
          <span className="eyebrow-muted">{images.length} photographs</span>
        </div>
        <Gallery images={images} />
      </section>

      {/* FAQ */}
      <section className="border-t border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve grid gap-12 py-20 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <span className="eyebrow">Renting the {v.model}</span>
            <h2 className="h-display mt-6 text-3xl md:text-4xl">Common questions.</h2>
            <Link href="/faq" className="btn-ghost mt-6">Full FAQ</Link>
          </div>
          <Faq items={faq} />
        </div>
      </section>

      {/* OTHERS */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve py-20">
          <span className="eyebrow-muted">Also available</span>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/fleet/${o.slug}`} className="group card relative aspect-[16/9] overflow-hidden">
                <Image src={heroSrc(o)} alt={o.gallery[0].alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <div className="eyebrow">{o.year} · {o.category}</div>
                    <div className="mt-2 font-display text-2xl text-bone-50">{o.make} {o.model}</div>
                  </div>
                  <div className="text-right">
                    <div className="eyebrow-muted">From</div>
                    <div className="font-display text-2xl text-bone-50">{usd(o.rates.daily)}<span className="font-sans text-xs text-obsidian-400"> / day</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
