import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — concrete & excavation contractor, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-slab py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-signal-600">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
          Talk to the crew.
        </h1>
        <p className="text-iron-500 leading-relaxed">
          Fastest answers are by phone or text — we&rsquo;re usually on a site, not at a desk.
          For anything with a drawing or a deadline, the bid form is the way to go.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Call</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-2xl text-iron-950 hover:text-signal-600">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="h-display text-2xl text-iron-950 hover:text-signal-600">
            {BRAND.phone} <span className="text-iron-400 text-base font-normal normal-case">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Service area</div>
          <p className="h-display text-2xl text-iron-950">{BRAND.address.region}</p>
          <p className="text-iron-500 text-sm mt-1">Based in Utah County · working {BRAND.address.cities.slice(0, 6).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/bid" className="btn-primary">Get a bid</a>
          <a href={smsHref} className="btn-ghost">Text the crew</a>
        </div>
      </div>
    </section>
  );
}
