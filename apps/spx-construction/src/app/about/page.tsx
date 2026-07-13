import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About SPX Construction — a Utah residential general contractor in the Alpine Fence & Deck family. A Spravek company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag text-signal-600">Company</div>
          <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
            Builders first. <br />
            <span className="text-iron-400">Paperwork second.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-iron-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} is a residential general contractor working along Utah&rsquo;s Wasatch Front.
            We build additions, finish basements, cut in walkouts and egress, and carry structural
            scopes most remodelers pass on.
          </p>
          <p>
            The company runs on a simple rule: the person who bids the job is the person who builds
            the job. Our estimators are our supers. Nothing gets promised in a sales meeting that
            can&rsquo;t be delivered on a jobsite.
          </p>
          <p>
            SPX is part of a family of companies anchored by{' '}
            <a href={BRAND.parent.url} className="underline decoration-signal-500 underline-offset-4 hover:text-iron-950">{BRAND.parent.name}</a>{' '}
            — a Spravek company with more than two decades of construction on the Wasatch Front,
            alongside our landscape design-build studio, Harlow Landscapes.
          </p>
        </div>
      </section>

      <section className="bg-iron-950 text-concrete-50">
        <div className="container-site py-20 md:py-28 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Licensed & insured', v: 'A licensed Utah general contractor carrying the insurance, the permits, and the responsibility — in writing.' },
            { k: 'Self-performed', v: 'Concrete, framing, and finish carpentry by our own crews. Trade partners work on our schedule, to our standard.' },
            { k: 'Family-backed', v: 'Twenty years of Wasatch Front construction stand behind every contract. One family, one accountability line.' },
          ].map((v) => (
            <div key={v.k} className="border-t-4 border-signal-500 pt-6 space-y-3">
              <div className="font-display font-bold uppercase tracking-headline text-xl text-signal-400">{v.k}</div>
              <p className="text-iron-300 leading-relaxed text-sm">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-20 md:py-28 text-center">
        <Link href="/quote" className="btn-primary">Get a bid</Link>
      </section>
    </>
  );
}
