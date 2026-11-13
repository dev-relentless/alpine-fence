import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Lockup from '@/components/Lockup';
import { BRAND } from '@/data/brand';
import { getVehicle, imgSrc } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'The Reserve — About Spravek Reserve',
  description:
    'Spravek Reserve is a small, curated luxury vehicle fleet in Utah, operated by Relentless Equipment LLC and part of the Spravek family of companies.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const f350 = getVehicle('f-350')!;
  return (
    <>
      <section className="container-reserve pb-16 pt-40">
        <span className="eyebrow">The Reserve</span>
        <h1 className="h-display mt-6 max-w-4xl text-5xl md:text-7xl">A small fleet, kept <em className="italic">properly.</em></h1>
      </section>

      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div className="space-y-6 text-base leading-relaxed text-obsidian-200 md:text-lg">
          <p>
            Spravek Reserve started with a simple observation: Utah has world-class weddings, world-class skiing, and
            world-class lake weekends — and almost nowhere to get a truly exceptional car for them without flying it in.
          </p>
          <p>
            So we kept the fleet small and the standard high. Three vehicles, each the best of its kind, each owned,
            detailed, and delivered by us. Rates, mileage, deposits and requirements are published up front, every
            request is confirmed in writing by a person, and every car is handed over in person.
          </p>
          <p>
            The Reserve is operated by {BRAND.legalEntity}, the company behind{' '}
            <a href={BRAND.parent.url} className="text-champagne-400 underline-offset-4 hover:underline">Relentless Equipment</a>, and is part
            of the <a href={BRAND.spravekUrl} className="text-champagne-400 underline-offset-4 hover:underline">Spravek</a> family of Utah companies.
            Same people, same insurance, same habit of keeping machines ready.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={imgSrc(f350, '09-platinum-sill.jpg')} alt={f350.gallery[8].alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="border-y border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve grid gap-px bg-obsidian-800 py-0 md:grid-cols-3">
          {[
            ['Owned, not brokered', 'Every car in the Reserve is ours. No peer-to-peer listings, no third-party fleets, no surprises at handoff.'],
            ['Delivered by hand', 'We bring the car to you and walk you through it. Home, hotel, venue, marina, or the SLC curb.'],
            ['Insured commercially', 'Rental and chauffeur operations are covered under commercial policies held by Relentless Equipment LLC.'],
          ].map(([t, b]) => (
            <div key={t} className="bg-obsidian-950 p-8 md:p-10">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-champagne-500">{t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-obsidian-300">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-reserve flex flex-col items-center py-24 text-center md:py-32">
        <Lockup variant="stacked" tagline id="about" />
        <p className="mt-10 max-w-lg text-sm text-obsidian-400">{BRAND.legalLine}. {BRAND.address.region}.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/allocation" className="btn-gold">Request Allocation</Link>
          <a href={`mailto:${BRAND.email}`} className="btn-outline">Email the Reserve</a>
        </div>
      </section>
    </>
  );
}
