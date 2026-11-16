const services = [
  {
    title: 'Fencing',
    description: 'Privacy, picket, ranch rail, and ornamental styles for residential and commercial properties.',
    icon: (
      <path d="M4 10v10M9 10v10M14 10v10M19 10v10M2 13h20M2 18h20M4 10l0-4 2.5-3 2.5 3v4M14 10V6l2.5-3L19 6v4" />
    ),
  },
  {
    title: 'Decks',
    description: 'New deck construction, railings, stairs, and multi-level outdoor living spaces.',
    icon: <path d="M3 11h18M3 15h18M3 19h18M6 11V7M12 11V7M18 11V7M4 7h16" />,
  },
  {
    title: 'Gates & Railings',
    description: 'Walk and drive gates, hardware, and railing systems matched to the surrounding structure.',
    icon: <path d="M3 20V8l9-4 9 4v12M3 20h18M7 20v-6h4v6M13 14h4v6h-4z" />,
  },
  {
    title: 'Repair & Refinishing',
    description: 'Post replacement, board repair, staining, sealing, and structural restoration.',
    icon: <path d="M14 7l3 3M5 16l9-9 3 3-9 9H5v-3zM16 5l2-2 3 3-2 2" />,
  },
];

const approach = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Review the site, discuss goals, and outline options that fit the space and budget.',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Finalize layout, materials, and finishes with clear scope before any work begins.',
  },
  {
    step: '03',
    title: 'Construction',
    description: 'Build to plan with attention to grading, footings, fasteners, and finish detail.',
  },
  {
    step: '04',
    title: 'Final Walkthrough',
    description: 'Inspect the completed project together and confirm every detail is right.',
  },
];

const materials = [
  { name: 'Cedar & Wood', note: 'Natural grain, stain-ready' },
  { name: 'Vinyl', note: 'Low maintenance, long lasting' },
  { name: 'Composite', note: 'Durable, fade resistant' },
  { name: 'Aluminum & Iron', note: 'Ornamental, open sightlines' },
  { name: 'Chain Link', note: 'Practical, cost effective' },
  { name: 'Ranch Rail', note: 'Classic, open layouts' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0 56px, #fff 56px 60px), linear-gradient(0deg, transparent 0 40%, #fff 40% 42%, transparent 42% 70%, #fff 70% 72%, transparent 72%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-40">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Fence &amp; Deck Construction
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Well-built fences and decks, done the right way.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-emerald-50/80">
            Quality materials, careful craftsmanship, and clean finished work on every project.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow hover:bg-emerald-50"
            >
              Our Services
            </a>
            <a
              href="#approach"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              How We Work
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Services</h2>
            <p className="mt-4 text-stone-600">
              Complete fence and deck construction, from new builds to repairs and refinishing.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-stone-200 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Our Approach</h2>
            <p className="mt-4 text-stone-600">A straightforward process from first conversation to finished build.</p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <li key={a.step}>
                <span className="text-sm font-semibold tracking-widest text-emerald-700">{a.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-stone-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{a.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="materials" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Materials</h2>
            <p className="mt-4 text-stone-600">
              A range of materials to suit different styles, climates, and maintenance preferences.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m) => (
              <li key={m.name} className="flex items-start gap-3 rounded-lg border border-stone-200 px-5 py-4">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-emerald-700" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-medium text-stone-900">{m.name}</div>
                  <div className="text-sm text-stone-500">{m.note}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-emerald-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Built to last. Finished with care.</h2>
          <p className="mx-auto mt-3 max-w-xl text-emerald-100/80">
            Every fence and deck is built with sound structure and clean detail work.
          </p>
        </div>
      </section>
    </>
  );
}
