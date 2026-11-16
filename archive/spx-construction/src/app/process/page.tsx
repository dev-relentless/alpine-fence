import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Approach',
  description: 'How an SPX project unfolds — conversation, design & engineering, the build, and a documented hand-over.',
};

const steps = [
  {
    n: '01',
    title: 'The conversation',
    body: 'We walk the site or the house together and listen — what you want, how you live, what the structure will allow. You leave with an honest read on feasibility, budget territory, and timing before anyone draws a line.',
  },
  {
    n: '02',
    title: 'Design & engineering',
    body: 'Design development with the builders in the room — so every detail is drawn once and priced honestly. Stamped structural engineering where loads are involved, and the full permit package carried by us. The agreement you sign is itemized: allowances named, exclusions in writing.',
  },
  {
    n: '03',
    title: 'The build',
    body: 'Our crews perform the concrete, framing, and finish work; licensed trade partners run mechanical, electrical, and plumbing on our schedule. One point of contact, a weekly note, and a jobsite kept like it belongs to someone.',
  },
  {
    n: '04',
    title: 'The hand-over',
    body: 'Final inspections, a punch list walked together, and a close-out portfolio — permits, engineering, inspection records, and photographs of everything inside the walls.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="container-site py-24 md:py-32 max-w-3xl">
        <div className="eyebrow mb-5">Approach</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight mb-8">
          Unhurried. <span className="italic text-carbon-500">Unsurprising.</span>
        </h1>
        <p className="text-carbon-500 leading-relaxed text-lg">
          Projects lose their way in the gaps — between designer and builder, bid and build,
          what was said and what was written. Our approach closes the gaps before they open.
        </p>
      </section>

      <section className="bg-bone-100 border-y border-bone-200">
        <div className="container-site divide-y divide-bone-200">
          {steps.map((s) => (
            <div key={s.n} className="grid lg:grid-cols-12 gap-10 py-16">
              <div className="lg:col-span-3">
                <div className="font-display text-6xl text-bone-300">{s.n}</div>
              </div>
              <div className="lg:col-span-9 space-y-4 max-w-2xl">
                <h2 className="font-display text-3xl text-carbon-950">{s.title}</h2>
                <p className="text-carbon-600 leading-relaxed text-lg">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <div className="eyebrow mb-5">Step one</div>
        <Link href="/quote" className="btn-primary">Start a conversation</Link>
      </section>
    </>
  );
}
