import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — timber pergolas and premium outdoor spaces across the Mountain West.`,
  alternates: { canonical: `${BRAND.url}/contact` },
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Contact</div>
        <h1 className="h-display text-5xl md:text-6xl text-ink-950 leading-[1.0]">
          We&rsquo;d be glad to hear from you.
        </h1>
        <p className="text-ink-600 leading-relaxed">
          The quickest answers come by phone — we&rsquo;re usually under a beam, not at a desk.
          For anything with a sketch or a date attached, start a project and we&rsquo;ll come
          walk the space.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Phone</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-3xl text-ink-950 hover:text-cedar-700 tabular-nums">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="h-display text-3xl text-ink-950 hover:text-cedar-700 tabular-nums">
            {BRAND.phone} <span className="text-ink-400 text-base font-body font-normal">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Where we build</div>
          <p className="h-display text-2xl text-ink-950">{BRAND.address.states.join(' · ')}</p>
          <p className="text-ink-500 text-sm mt-2">
            Headquartered on the {BRAND.address.headquarters}. Crews travel across the {BRAND.address.region} for the right projects.
          </p>
        </div>
        <div className="pt-6 flex flex-wrap gap-4">
          <Link href="/quote" className="btn-primary">Start a project</Link>
          <a href={smsHref} className="btn-ghost">Send a text</a>
        </div>
      </div>
    </section>
  );
}
