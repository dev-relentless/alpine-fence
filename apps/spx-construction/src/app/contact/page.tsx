import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — residential general contractor, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-signal-600">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
          Talk to a builder.
        </h1>
        <p className="text-iron-500 leading-relaxed">
          For project pricing, the bid form gives us what we need to show up prepared.
          For everything else — call or text. A builder answers, not a call center.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Call</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="font-display font-bold text-2xl text-iron-950 hover:text-signal-600">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="font-display font-bold text-2xl text-iron-950 hover:text-signal-600">
            {BRAND.phone} <span className="text-iron-400 text-base font-normal">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Service area</div>
          <p className="font-display font-bold text-2xl text-iron-950">{BRAND.address.region}</p>
          <p className="text-iron-500 text-sm mt-1">Serving {BRAND.address.cities.slice(0, 8).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/quote" className="btn-primary">Get a bid</a>
          <a href={smsHref} className="btn-ghost">Text us</a>
        </div>
      </div>
    </section>
  );
}
