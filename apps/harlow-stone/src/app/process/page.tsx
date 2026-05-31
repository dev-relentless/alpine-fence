import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How a Harlow & Stone project unfolds — consult, design, build, care.',
};

const steps = [
  {
    n: '01',
    title: 'Consult',
    body: 'A site visit and conversation. We listen for the way you want to live in the space, walk the property, and outline a fit on scope, timeline, and investment.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Concept plans, material palettes, and a master plan for the property. Phased so projects can be built whole or staged across seasons.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Construction by our own crews — masons, carpenters, irrigation techs, plant specialists. One studio, one accountability line.',
  },
  {
    n: '04',
    title: 'Care',
    body: 'Estate care after install. Seasonal pruning, irrigation tuning, lighting service, and replanting refinements as the garden matures.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="eyebrow mb-4">Process</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-tight mb-8">
          From first walk to final pruning.
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          A landscape isn&rsquo;t finished when the crew leaves. Our work is structured around the multi-year arc of a garden — and we stay with the projects we build.
        </p>
      </section>

      <section className="bg-ivory-100 border-y border-stone-200">
        <div className="container-editorial divide-y divide-stone-200">
          {steps.map((s) => (
            <div key={s.n} className="grid lg:grid-cols-12 gap-10 py-16">
              <div className="lg:col-span-3">
                <div className="font-display text-6xl text-bronze-400">{s.n}</div>
              </div>
              <div className="lg:col-span-9 space-y-4 max-w-2xl">
                <h2 className="h-display text-3xl text-stone-900">{s.title}</h2>
                <p className="text-stone-700 leading-relaxed text-lg">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32 text-center">
        <Link href="/inquire" className="btn-primary">Begin a project</Link>
      </section>
    </>
  );
}
