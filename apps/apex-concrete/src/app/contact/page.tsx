import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, smsHref, telHref } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Call, text, or email ${BRAND.name} — concrete contractor serving the Wasatch Front, Utah. ${BRAND.phone}.`,
  alternates: { canonical: `${BRAND.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="container-apex pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-flag-600">Contact</div>
        <h1 className="h-display text-6xl md:text-8xl text-basalt-950">Talk to <br />the crew.</h1>
        <p className="text-basalt-600 leading-relaxed text-lg">
          Fastest answers are by phone or text — we’re usually on a site, not at a desk. For anything
          with a drawing or a deadline, the estimate form is the way to go.
        </p>
        <Link href="/estimate" className="btn-primary">Get a free estimate</Link>
      </div>
      <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-basalt-200 border border-basalt-200">
        <a href={telHref} className="group bg-slab-50 p-7 hover:bg-basalt-950 hover:text-slab-50 transition-colors">
          <div className="tag mb-3 group-hover:text-basalt-400">Call</div>
          <div className="h-display text-3xl tabular-nums">{BRAND.phone}</div>
          <p className="mt-2 text-sm text-basalt-500 group-hover:text-basalt-300">{BRAND.hours}</p>
        </a>
        <a href={smsHref} className="group bg-slab-50 p-7 hover:bg-basalt-950 hover:text-slab-50 transition-colors">
          <div className="tag mb-3 group-hover:text-basalt-400">Text</div>
          <div className="h-display text-3xl tabular-nums">{BRAND.phone}</div>
          <p className="mt-2 text-sm text-basalt-500 group-hover:text-basalt-300">Send a photo of the job — we’ll reply with next steps.</p>
        </a>
        <a href={`mailto:${BRAND.email}`} className="group bg-slab-50 p-7 hover:bg-basalt-950 hover:text-slab-50 transition-colors">
          <div className="tag mb-3 group-hover:text-basalt-400">Email</div>
          <div className="h-display text-2xl break-all">{BRAND.email}</div>
          <p className="mt-2 text-sm text-basalt-500 group-hover:text-basalt-300">Plans, drawings, and commercial bid packages.</p>
        </a>
        <div className="bg-slab-50 p-7">
          <div className="tag mb-3">Service area</div>
          <div className="h-display text-2xl">{BRAND.address.region}</div>
          <p className="mt-2 text-sm text-basalt-500">
            Based in {BRAND.address.locality}. {BRAND.address.serviceArea.join(', ')}.{' '}
            <Link href="/service-area" className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">Full list →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
