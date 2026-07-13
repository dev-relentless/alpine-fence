import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About Relentless Equipment — a Wasatch Front rental yard in the Alpine Fence & Deck family. A Spravek company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-yard py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag text-volt-600">Company</div>
          <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
            A rental yard <br />
            <span className="text-carbon-400">run by builders.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-carbon-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} started the way most good rental yards do: a construction family with
            more machines than idle days, and neighbors who kept asking to borrow them.
          </p>
          <p>
            The fleet rents out of Utah County and works the whole Wasatch Front. Because the
            machines also work our own family&rsquo;s jobsites, maintenance isn&rsquo;t a promise —
            it&rsquo;s self-interest. Gear is serviced on hours, inspected between rentals, and
            retired before it lets anyone down.
          </p>
          <p>
            Relentless is part of a family of companies anchored by{' '}
            <a href={BRAND.parent.url} className="underline decoration-volt-500 underline-offset-4 hover:text-carbon-950">{BRAND.parent.name}</a>{' '}
            — a Spravek company — alongside SPX Construction and Harlow Landscapes. Twenty years
            of Wasatch Front construction, one accountability line.
          </p>
        </div>
      </section>

      <section className="bg-carbon-950 text-dust-50">
        <div className="container-yard py-20 md:py-28 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Working fleet', v: 'These machines earn their keep on real jobsites — not a lot full of auction saves with fresh paint.' },
            { k: 'Plain-language rates', v: 'Day, week, month. Deposit, fuel, and damage policy in writing before you hitch up.' },
            { k: 'Family-backed', v: 'Two decades of Wasatch Front construction stand behind the yard. If something is wrong, one call fixes it.' },
          ].map((v) => (
            <div key={v.k} className="border-t-4 border-volt-500 pt-6 space-y-3">
              <div className="h-display text-xl text-volt-400">{v.k}</div>
              <p className="text-carbon-300 leading-relaxed text-sm">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-yard py-20 md:py-28 text-center">
        <Link href="/reserve" className="btn-primary">Check availability</Link>
      </section>
    </>
  );
}
