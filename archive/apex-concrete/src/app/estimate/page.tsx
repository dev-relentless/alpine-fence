import type { Metadata } from 'next';
import { BRAND, smsHref, telHref } from '@/data/brand';
import { serviceBySlug } from '@/data/services';
import EstimateForm from '@/components/EstimateForm';

export const metadata: Metadata = {
  title: 'Get a Free Estimate',
  description:
    'Tell us the project, the site, and the timeline. We walk the ground and put a line-item concrete estimate in writing — Wasatch Front, Utah.',
  alternates: { canonical: `${BRAND.url}/estimate` },
};

export default function EstimatePage({ searchParams }: { searchParams: { service?: string } }) {
  const preset = searchParams.service ? serviceBySlug(searchParams.service) : undefined;

  return (
    <section className="container-apex pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-flag-600">Free estimate</div>
        <h1 className="h-display text-6xl md:text-8xl text-basalt-950">
          Project, site, <br />timeline. <span className="text-flag-500">Go.</span>
        </h1>
        <p className="text-basalt-600 leading-relaxed text-lg">
          Tell us what you’re building and where. We’ll schedule a site walk, talk through options,
          and put scope, spec, and price in writing — no pressure, no games.
        </p>
        <ol className="space-y-3 text-sm text-basalt-700">
          {[
            'We reply within one business day to schedule the walk.',
            'We measure, check grade and access, and talk finishes.',
            'You get a line-item estimate in writing within two business days.',
          ].map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-flag-500 text-slab-50 font-mono text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-basalt-500 text-sm leading-relaxed">
          In a hurry? <a href={telHref} className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">Call</a> or{' '}
          <a href={smsHref} className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">text a photo</a> — scheduling answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 relative bg-slab-100 p-7 md:p-10 border border-basalt-200 shadow-slab">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-chevrons" aria-hidden />
        <EstimateForm defaultService={preset?.slug} />
      </div>
    </section>
  );
}
