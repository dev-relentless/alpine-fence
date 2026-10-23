import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';
import StructurePlate from '@/components/StructurePlate';
import LeadFormEmbed from '@/components/LeadFormEmbed';

export const metadata: Metadata = {
  title: 'Free Pergola Consultation & Written Quote',
  description:
    'Timber pergolas, motorized louvered roofs & pavilions on the Wasatch Front. Free in-yard design consultation and a written quote — drawings, materials, price.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BRAND.url}/lp/pergola` },
};

const numerals = ['I', 'II', 'III'];

const proof = [
  'Free on-site consultation and a written quote — drawings, materials, and price',
  'Snow-load engineered, with footings below frost line',
  'Licensed & insured · A Utah construction family, two decades on the Wasatch Front',
];

const trust = [
  'Licensed & insured',
  'Snow-load engineered',
  'Written proposals',
  'Design-build, one crew',
];

const conviction = [
  { k: 'Built like a building', v: 'Concrete footings, engineered spans, thru-bolted connections. Kits blow over; ours get handed down.' },
  { k: 'Designed around the sun', v: 'We map how light crosses your yard through the seasons, then set rafters to shade the hours you keep.' },
  { k: 'Priced in writing', v: 'Drawings, materials, and price on paper before anything is ordered. Options priced apart, so you choose.' },
];

const steps = [
  { k: 'Send the form', v: 'Takes about a minute. We call back to set a time for the yard walk.' },
  { k: 'We walk the yard', v: 'Sun angles, sight lines, how you mean to live out there. Timber, louvered, or pavilion — we talk through all three.' },
  { k: 'You get it in writing', v: 'A proposal with drawings, materials, and price. Say yes, or don\u2019t. It costs nothing and obliges nothing.' },
];

const faqs = [
  {
    q: 'How much does a pergola cost in Utah?',
    a: 'It depends on size, material (rough-sawn timber vs. powder-coated aluminum louvers), attached vs. freestanding, and extras like lighting or heaters. That\u2019s why we don\u2019t quote from the phone \u2014 we look at the space and put a real number in writing, with options priced separately so you can decide what\u2019s worth it.',
  },
  {
    q: 'Will it hold up to Utah snow and wind?',
    a: 'Yes. Spans are sized for local snow loads, posts sit in concrete footings below frost line, and connections are thru-bolted rather than kit brackets. Louvered roofs close watertight and shed snow like a solid roof.',
  },
  {
    q: 'Do I need a permit?',
    a: 'Often, depending on your city and the structure\u2019s size and whether it attaches to the house. We handle permitting where it\u2019s required and plan electrical rough-ins from the first drawing.',
  },
  {
    q: 'Attached to the house or freestanding?',
    a: 'Either. Attached structures tie into the home\u2019s framing with proper flashing; freestanding structures stand on their own footings anywhere in the yard. We\u2019ll recommend one based on your patio, sun, and sight lines.',
  },
  {
    q: 'Where do you build?',
    a: `${BRAND.address.serviceArea.join(', ')} \u2014 including ${BRAND.address.cities.slice(0, 8).join(', ')}, and the rest of the Wasatch Front.`,
  },
];

function Check() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-sienna-500"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

export default function PergolaLandingPage() {
  return (
    <div className="pb-24 lg:pb-0">
      {/* ─────────── TOP BAR ─────────── */}
      <div className="border-b border-timber-200 bg-linen-50">
        <div className="container-patio flex h-[68px] items-center justify-between gap-6">
          <div className="flex items-center gap-3 leading-none">
            <Image src="/pergola/logo.png" alt="" width={687} height={577} priority className="h-12 w-auto" />
            <span className="font-display font-semibold text-lg md:text-xl">{BRAND.name}</span>
          </div>
          <a href={`tel:${BRAND.phoneRaw}`} className="text-right leading-tight">
            <span className="tag block max-sm:hidden">Call or text</span>
            <span className="font-display font-semibold text-lg md:text-xl text-timber-950">{BRAND.phone}</span>
          </a>
        </div>
      </div>

      {/* ─────────── HERO + FORM ─────────── */}
      <section className="bg-parchment-glow">
        <div className="container-patio pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="tag mb-6">Free design consultation · Wasatch Front, Utah</div>
            <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-timber-950">
              A pergola built for Utah &mdash; designed in your yard, priced in writing.
            </h1>
            <div className="h-px w-16 bg-timber-300 my-8" aria-hidden />
            <p className="text-timber-700 text-lg md:text-xl leading-relaxed max-w-xl">
              Timber pergolas, motorized louvered roofs, and pavilions. We walk your yard, map the
              sun, and leave you a written proposal &mdash; drawings, materials, and price. Free,
              and no obligation.
            </p>
            <ul className="mt-8 space-y-3 max-w-xl">
              {proof.map((p) => (
                <li key={p} className="flex items-start gap-3 text-timber-800">
                  <Check />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:hidden">
              <a href="#quote-form" className="btn-primary w-full sm:w-auto">Get my free quote</a>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-timber-700 hover:text-timber-950 text-[15px]">
                or call {BRAND.phone}
              </a>
            </div>
          </div>

          <div id="quote-form" className="lg:col-span-6 xl:col-span-5 scroll-mt-6">
            <div className="bg-linen-100 border border-timber-200 shadow-plate p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="tag mb-3">Step one</div>
                <h2 className="h-display text-3xl text-timber-950">Request your free consultation</h2>
                <p className="text-timber-600 text-[15px] mt-2">
                  Takes about a minute. We&rsquo;ll call to schedule the yard walk.
                </p>
              </div>
              <LeadFormEmbed />
              <p className="mt-5 text-center text-[13px] text-timber-500 leading-relaxed">
                We only reach out about your project &mdash; never spam.{' '}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-timber-800">Privacy</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-timber-200">
          <div className="container-patio py-4 flex flex-wrap justify-center gap-x-8 gap-y-2 tag">
            {trust.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* ─────────── THE STRUCTURES ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">The Structures</div>
          <h2 className="h-display text-4xl md:text-5xl text-timber-950">Which one is yours?</h2>
          <p className="text-timber-600 mt-4 max-w-xl mx-auto">
            Not sure yet? That&rsquo;s what the yard walk is for &mdash; we&rsquo;ll talk through all three.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {structureCategories.map((c, i) => (
            <div key={c.slug} className="flex flex-col">
              <StructurePlate
                slug={c.slug as 'timber' | 'louvered' | 'pavilions'}
                caption={`Plate ${numerals[i]} — ${c.shortTitle}`}
                className="shadow-plate"
              />
              <h3 className="h-display text-2xl text-timber-950 mt-6 mb-2 text-center">{c.title}</h3>
              <p className="text-timber-600 text-[15px] leading-relaxed text-center">{c.blurb}</p>
              <ul className="mt-5 space-y-2 text-[15px] text-timber-700 mx-auto">
                {c.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-3 h-px w-3.5 shrink-0 bg-timber-400" />{item}
                  </li>
                ))}
              </ul>
              <a href="#quote-form" className="mt-6 text-center tag text-sienna-600 hover:text-sienna-500">
                Get a quote on this &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── CONVICTION ─────────── */}
      <section className="bg-walnut-depth text-linen-100">
        <div className="container-patio py-20 md:py-28 text-center">
          <div className="tag text-timber-400 mb-6">Why Us</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-snug max-w-3xl mx-auto">
            A pergola is a structure, not furniture &mdash; footings below frost line, spans that
            carry the snow, and shade set where the sun actually falls.
          </p>
          <div className="mx-auto h-px w-16 bg-timber-600 my-10" aria-hidden />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
            {conviction.map((c) => (
              <div key={c.k}>
                <h3 className="h-display text-xl mb-2.5 text-linen-50">{c.k}</h3>
                <p className="text-timber-300 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-timber-400 text-[15px] max-w-2xl mx-auto">{BRAND.parent.note}</p>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">How It Works</div>
          <h2 className="h-display text-4xl md:text-5xl text-timber-950">Three steps to a written quote.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.k} className="text-center md:text-left">
              <div className="font-display text-3xl text-sienna-500 mb-3">{numerals[i]}.</div>
              <div className="h-display text-xl mb-2 text-timber-950">{s.k}</div>
              <p className="text-timber-600 text-[15px] leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="#quote-form" className="btn-primary">Get my free quote</a>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="border-y border-timber-200 bg-linen-100/60">
        <div className="container-patio py-20 md:py-24 max-w-3xl">
          <div className="text-center mb-12">
            <div className="tag mb-4">Questions</div>
            <h2 className="h-display text-4xl md:text-5xl text-timber-950">Asked on most yard walks.</h2>
          </div>
          <div className="divide-y divide-timber-200 border-y border-timber-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="h-display text-xl text-timber-950">{f.q}</span>
                  <span className="font-display text-2xl text-sienna-500 transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 text-timber-600 leading-relaxed pr-10">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="border border-timber-200 bg-linen-100 px-8 py-16 md:py-20 text-center shadow-plate">
          <h2 className="h-display text-3xl md:text-4xl text-timber-950 mb-4">Begin with a walk of the yard.</h2>
          <p className="text-timber-600 max-w-xl mx-auto mb-9">
            A free consultation and a written proposal &mdash; drawings, materials, and price.
            It costs nothing and obliges nothing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#quote-form" className="btn-primary">Request my free consultation</a>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-timber-700 hover:text-timber-950 text-[15px]">
              or call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── MINIMAL FOOTER ─────────── */}
      <footer className="border-t border-timber-200">
        <div className="container-patio py-8 text-center text-[13px] text-timber-500 space-y-3">
          <div>
            &copy; {new Date().getFullYear()} {BRAND.name} &middot; {BRAND.address.locality}, {BRAND.address.state} &middot;{' '}
            <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-timber-800">{BRAND.phone}</a>
          </div>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-timber-800">Privacy</Link>
            <Link href="/terms" className="hover:text-timber-800">Terms</Link>
          </div>
          <p className="max-w-xl mx-auto leading-relaxed text-timber-400">
            This site is not part of Facebook, Instagram, or Meta Platforms, Inc., and is not endorsed by Meta in any way.
          </p>
        </div>
      </footer>

      {/* ─────────── MOBILE STICKY CTA ─────────── */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-timber-200 bg-linen-50/95 backdrop-blur-sm">
        <div className="container-patio py-3 flex items-center gap-3">
          <a href="#quote-form" className="btn-primary flex-1">Get my free quote</a>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            aria-label={`Call ${BRAND.phone}`}
            className="btn-ghost !px-4 shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
