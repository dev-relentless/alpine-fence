import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { NETWORK_STATES } from '@/data/network';

export const metadata: Metadata = {
  title: 'Locations — Pergola Experts by state',
  description: `${BRAND.name} builds under the Pergola Experts name in ${NETWORK_STATES.map((s) => s.state).join(', ')}. Find the state site, crew, and phone line nearest you.`,
  alternates: { canonical: `${BRAND.url}/locations` },
};

export default function LocationsPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${BRAND.name} — Pergola Experts locations`,
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

      <section className="container-site pt-20 md:pt-28 pb-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag">Locations</div>
          <h1 className="h-display text-5xl md:text-6xl text-ink-950 leading-[1.0]">
            One firm.<br />
            <span className="text-cedar-700">A crew in every state.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-ink-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} is the national design-build brand. On the ground, we build under the{' '}
            <strong className="text-ink-900 font-medium">Pergola Experts</strong> name — a dedicated
            site, crew, and phone line for each state, with footings, spans, and finishes
            specified for that climate. Pick your state below; for projects elsewhere in the{' '}
            {BRAND.address.region}, <Link href="/quote" className="underline decoration-brass-400 underline-offset-4 hover:text-ink-950">start here</Link>.
          </p>
        </div>
      </section>

      <section className="container-site pb-24 md:pb-32">
        <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {NETWORK_STATES.map((s) => (
            <li key={s.key} className="border-t border-ink-200 pt-6 flex flex-col gap-3">
              <div className="tag">{s.stateAbbr} · {s.region}</div>
              <h2 className="h-display text-2xl md:text-3xl text-ink-950">
                <a href={s.url} className="hover:text-cedar-700 transition-colors">{s.name}</a>
              </h2>
              <p className="text-ink-600 text-[15px]">{s.regionLine}</p>
              <p className="text-ink-500 text-[14px] leading-relaxed">{s.cities.join(' · ')}</p>
              <div className="mt-auto pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
                <a href={`tel:${s.phoneRaw}`} className="text-ink-800 hover:text-ink-950 tabular-nums">{s.phone}</a>
                <a href={s.url} className="text-cedar-700 hover:text-cedar-600">
                  {s.domain} &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink-depth text-bone-50">
        <div className="container-site py-20 md:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="tag-brass">Beyond the state sites</div>
            <h2 className="h-display text-3xl md:text-4xl">Heavy timber, whole-yard design-build.</h2>
            <p className="text-bone-100/70 leading-relaxed max-w-2xl">
              For flagship timber pergolas, pavilions, outdoor kitchens, and fire — or a project
              outside the states above — {BRAND.name} takes the work directly and travels across
              the {BRAND.address.region}.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/quote" className="btn-light">Start a project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
