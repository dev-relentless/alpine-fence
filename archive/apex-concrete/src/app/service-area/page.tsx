import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, telHref } from '@/data/brand';
import JsonLd from '@/components/JsonLd';
import ApexMark from '@/components/ApexMark';

export const metadata: Metadata = {
  title: 'Service Area · Wasatch Front, Utah',
  description: `Apex Concrete pours in ${BRAND.address.serviceArea.join(', ')} — ${BRAND.address.cities.slice(0, 8).join(', ')}, and the rest of the Wasatch Front.`,
  alternates: { canonical: `${BRAND.url}/service-area` },
};

/** Counties with their principal cities, north to south. */
const regions: { county: string; note: string; cities: string[] }[] = [
  { county: 'Weber County', note: 'Ogden & the North Bench', cities: ['Ogden', 'South Ogden', 'Roy', 'North Ogden', 'Riverdale'] },
  { county: 'Davis County', note: 'Bountiful to Layton', cities: ['Bountiful', 'Farmington', 'Kaysville', 'Layton', 'Centerville', 'Syracuse'] },
  { county: 'Salt Lake County', note: 'The valley & the east bench', cities: ['Salt Lake City', 'Sandy', 'Draper', 'South Jordan', 'West Jordan', 'Herriman', 'Riverton', 'Murray', 'Cottonwood Heights', 'Holladay', 'Taylorsville', 'Millcreek'] },
  { county: 'Summit County', note: 'Park City & the Snyderville Basin', cities: ['Park City', 'Kimball Junction', 'Jeremy Ranch', 'Silver Summit'] },
  { county: 'Tooele County', note: 'Tooele Valley', cities: ['Tooele', 'Grantsville', 'Stansbury Park'] },
  { county: 'Utah County', note: 'Lehi to Provo', cities: ['Lehi', 'American Fork', 'Saratoga Springs', 'Eagle Mountain', 'Pleasant Grove', 'Orem', 'Provo', 'Highland', 'Alpine'] },
];

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Apex Concrete service area',
          itemListElement: regions.map((r, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@type': 'AdministrativeArea', name: `${r.county}, Utah` },
          })),
        }}
      />

      <section className="container-apex pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="tag text-flag-600 mb-4">Service area</div>
          <h1 className="h-display text-6xl md:text-8xl text-basalt-950">
            The Wasatch Front, <span className="text-basalt-400">end to end.</span>
          </h1>
          <p className="mt-8 text-basalt-600 leading-relaxed text-lg max-w-2xl">
            Based in {BRAND.address.locality}, pouring across six counties from Ogden to Provo and up
            Parley’s to Park City. Every job starts with a site walk — there is no travel charge inside
            the counties below.
          </p>
        </div>
        <div className="lg:col-span-4 hidden lg:flex justify-end">
          <ApexMark className="h-40 w-40 opacity-90" />
        </div>
      </section>

      {/* elevation strip — a stylized skyline of the range */}
      <div className="border-y border-basalt-200 bg-basalt-950 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1280 120" className="block w-full h-16 md:h-24" preserveAspectRatio="none">
          <polygon fill="#272c31" points="0,120 0,90 90,60 170,80 260,40 340,70 420,30 500,60 580,20 660,55 740,35 820,65 900,25 980,60 1060,40 1140,70 1220,45 1280,65 1280,120" />
          <polygon fill="#3b4248" points="0,120 0,100 120,85 220,95 320,70 430,88 540,60 650,82 760,66 870,90 980,72 1090,92 1200,78 1280,90 1280,120" />
          <polygon fill="#e8431f" points="580,20 572,34 588,34" />
        </svg>
      </div>

      <section className="container-apex py-16 md:py-24">
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-basalt-200 border border-basalt-200">
          {regions.map((r, i) => (
            <li key={r.county} className="bg-slab-50 p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] tracking-[0.3em] text-flag-600 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-basalt-500">Utah</span>
              </div>
              <h2 className="h-display text-3xl text-basalt-950">{r.county}</h2>
              <p className="text-sm text-basalt-500 mt-1 mb-5">{r.note}</p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] text-basalt-700">
                {r.cities.map((c) => (
                  <li key={c} className="after:content-['·'] after:ml-3 after:text-basalt-300 last:after:content-none">{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-basalt-500 max-w-2xl">
          Don’t see your town? If you’re within an hour of Salt Lake City, call — we take jobs outside the
          list for foundations, commercial work, and larger decorative projects.
        </p>
      </section>

      <section className="bg-basalt-950 text-slab-50">
        <div className="container-apex py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-5xl md:text-6xl">We’ll come look at the ground.</h2>
            <p className="mt-3 text-basalt-300">Site walks are free across the service area. Call <a href={telHref} className="text-slab-50 underline decoration-flag-500 underline-offset-4">{BRAND.phone}</a>.</p>
          </div>
          <Link href="/estimate" className="btn-primary shrink-0">Get a free estimate</Link>
        </div>
      </section>
    </>
  );
}
