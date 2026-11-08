import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { NETWORK_PARENT, NETWORK_STATES } from '@/data/network';

export const metadata: Metadata = {
  title: 'Locations',
  description: `Pergola Experts builds in ${NETWORK_STATES.map((s) => s.state).join(', ')} under ${NETWORK_PARENT.name}. Find the state site, crew, and phone number nearest you.`,
  alternates: { canonical: `${BRAND.url}/locations` },
};

export default function LocationsPage() {
  const here = NETWORK_STATES.find((s) => s.state === BRAND.state);
  const others = NETWORK_STATES.filter((s) => s.state !== BRAND.state);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${NETWORK_PARENT.name} — Pergola Experts locations`,
    itemListElement: NETWORK_STATES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: s.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <section className="container-patio py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag">Locations</div>
          <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight">
            One standard. <br />
            <span className="text-timber-500">Built state by state.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-timber-600 leading-relaxed text-lg">
          <p>
            Pergola Experts is the local arm of{' '}
            <a href={NETWORK_PARENT.url} className="underline decoration-sienna-400 underline-offset-4 hover:text-timber-950" target="_blank" rel="noopener">{NETWORK_PARENT.name}</a>
            . Each state has its own crew, its own phone line, and its own engineering —
            footings, spans, and finishes specified for that climate — on a site built for
            that state. You&rsquo;re on the {BRAND.state} site; the others are below.
          </p>
        </div>
      </section>

      {here && (
        <section className="container-patio pb-10">
          <div className="border border-timber-300 bg-parchment-glow p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="tag">You are here</div>
              <h2 className="h-display text-2xl md:text-3xl text-timber-950">{here.name}</h2>
              <p className="text-timber-600">{here.regionLine} · based in {here.locality}</p>
              <p className="text-timber-500 text-[15px]">{here.cities.join(', ')}, and beyond.</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
              <a href={`tel:${here.phoneRaw}`} className="h-display text-2xl text-timber-950 hover:text-sienna-600">{here.phone}</a>
              <Link href="/quote" className="btn-primary">Request a consultation</Link>
            </div>
          </div>
        </section>
      )}

      <section className="container-patio pb-20 md:pb-28">
        <div className="tag mb-8">Pergola Experts in other states</div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <li key={s.key} className="border-t border-timber-300 pt-6 flex flex-col gap-3">
              <h2 className="h-display text-2xl text-timber-950">
                <a href={s.url} className="hover:text-sienna-600">{s.name}</a>
              </h2>
              <p className="text-timber-600 text-[15px]">{s.regionLine}</p>
              <p className="text-timber-500 text-[14px] leading-relaxed">{s.cities.join(' · ')}</p>
              <div className="mt-auto pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
                <a href={`tel:${s.phoneRaw}`} className="text-timber-800 hover:text-timber-950">{s.phone}</a>
                <a href={s.url} className="text-sienna-600 hover:text-sienna-700">
                  {s.domain} &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-walnut-depth text-linen-50">
        <div className="container-patio py-16 md:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="tag text-timber-400">The national brand</div>
            <h2 className="h-display text-3xl md:text-4xl">{NETWORK_PARENT.name}</h2>
            <p className="text-timber-300 leading-relaxed max-w-2xl">
              {NETWORK_PARENT.tagline}. Flagship timber pergolas and complete outdoor-living
              design-build across the Mountain West — the firm the Pergola Experts state sites
              roll up to.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href={NETWORK_PARENT.locationsUrl} className="btn-ghost !text-linen-50 !border-linen-50/40 hover:!bg-linen-50/10" target="_blank" rel="noopener">
              Visit {NETWORK_PARENT.domain}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
