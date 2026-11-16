import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'About SPX — a Wasatch Front design·build studio in the Alpine Fence & Deck family. A Spravek company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="eyebrow">Studio</div>
          <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
            Design in one hand.
            <br />
            <span className="italic text-carbon-500">A hammer in the other.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-carbon-600 leading-relaxed text-lg">
          <p>
            {BRAND.shortName} is a design·build studio for residential work along Utah&rsquo;s
            Wasatch Front — new custom residences, whole-home renovations, additions, and
            the daylight lower levels and structural scopes most firms quietly decline.
          </p>
          <p>
            The studio runs on a simple rule: the people who design and price the work are
            the people who build it. Nothing is promised in a conference room that can&rsquo;t
            be delivered on a jobsite — and nothing is drawn that can&rsquo;t be built beautifully.
          </p>
          <p>
            SPX is part of a family of companies anchored by{' '}
            <a href={BRAND.parent.url} className="underline decoration-brass-400 underline-offset-4 hover:text-carbon-950 transition-colors">{BRAND.parent.name}</a>{' '}
            — a Spravek company with more than two decades of construction on the Wasatch Front,
            alongside our landscape design·build studio, Harlow Landscapes.
          </p>
        </div>
      </section>

      <section className="bg-carbon-950 text-bone-50">
        <div className="container-site py-24 md:py-32 grid lg:grid-cols-3 gap-12">
          {[
            { k: 'Licensed & insured', v: 'A licensed Utah general contractor carrying the insurance, the permits, and the responsibility — in writing, on every project.' },
            { k: 'Self-performed', v: 'Concrete, framing, and finish carpentry by our own crews. Trade partners work on our schedule, to our standard.' },
            { k: 'Deliberately few', v: 'A small number of projects at a time, each with a principal\u2019s attention — twenty years of family craft behind every one.' },
          ].map((v) => (
            <div key={v.k} className="border-t border-brass-500/50 pt-7 space-y-4">
              <div className="font-display text-2xl text-brass-300">{v.k}</div>
              <p className="text-carbon-300 leading-relaxed text-sm">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <Link href="/quote" className="btn-primary">Start a conversation</Link>
      </section>
    </>
  );
}
