import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — equipment, attachment & trailer rentals, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-yard py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-volt-600">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
          Talk to the yard.
        </h1>
        <p className="text-carbon-500 leading-relaxed">
          Fastest answers are by phone or text — availability changes daily. For dates further
          out, the availability form works great.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Call</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-2xl text-carbon-950 hover:text-volt-600">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="h-display text-2xl text-carbon-950 hover:text-volt-600">
            {BRAND.phone} <span className="text-carbon-400 text-base font-normal normal-case">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Service area</div>
          <p className="h-display text-2xl text-carbon-950">{BRAND.address.region}</p>
          <p className="text-carbon-500 text-sm mt-1">Pickup in Utah County · delivery across {BRAND.address.cities.slice(0, 6).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/reserve" className="btn-primary">Check availability</a>
          <a href={smsHref} className="btn-ghost">Text the yard</a>
        </div>
      </div>
    </section>
  );
}
