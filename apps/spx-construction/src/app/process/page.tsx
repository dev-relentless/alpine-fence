import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How an SPX Construction project runs — walk the site, engineer it, build it, close it out.',
};

const steps = [
  {
    n: '01',
    title: 'Walk the site',
    body: 'We meet at the house, measure, and talk through what you want and what the structure will allow. You get straight answers about feasibility, ballpark cost, and timeline before anyone draws anything.',
  },
  {
    n: '02',
    title: 'Engineer & permit',
    body: 'Plans, stamped structural engineering where loads are involved, and the full permit package handled by us. The bid you sign is itemized — allowances called out, exclusions in writing.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Our crews perform the concrete, framing, and finish work; licensed trade partners run mechanical, electrical, and plumbing on our schedule. You get one point of contact and a weekly progress note.',
  },
  {
    n: '04',
    title: 'Close out',
    body: 'Final inspections, punch list walked together, and a close-out packet with permits, engineering, inspection records, and photos of what is inside the walls.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="container-site py-20 md:py-28 max-w-3xl">
        <div className="tag text-signal-600 mb-4">Process</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight mb-8">
          No surprises. That&rsquo;s the process.
        </h1>
        <p className="text-iron-500 leading-relaxed text-lg">
          Construction goes sideways in the gaps — between the bid and the build, the GC and the subs,
          what was said and what was written. We close the gaps.
        </p>
      </section>

      <section className="bg-concrete-100 border-y border-iron-200">
        <div className="container-site divide-y divide-iron-200">
          {steps.map((s) => (
            <div key={s.n} className="grid lg:grid-cols-12 gap-10 py-14">
              <div className="lg:col-span-3">
                <div className="font-display font-extrabold text-6xl text-signal-500">{s.n}</div>
              </div>
              <div className="lg:col-span-9 space-y-4 max-w-2xl">
                <h2 className="font-display font-bold uppercase tracking-headline text-2xl text-iron-950">{s.title}</h2>
                <p className="text-iron-600 leading-relaxed text-lg">{s.body}</p>
              </div>
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
