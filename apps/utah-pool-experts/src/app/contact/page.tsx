import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — pool & spa cleaning, maintenance & repair. Orem, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-deck py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-pool-950 leading-tight">
          Talk to a pool expert.
        </h1>
        <p className="text-pool-600 leading-relaxed">
          The fastest answers come by phone — our office keeps regular weekday hours
          and our techs are on routes. For anything with a schedule attached, request
          an estimate and we&rsquo;ll get you on the calendar.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Phone</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-2xl text-pool-950 hover:text-pool-500">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="h-display text-2xl text-pool-950 hover:text-pool-500">
            {BRAND.phone} <span className="text-pool-400 text-base font-normal">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Office</div>
          <p className="h-display text-2xl text-pool-950">{BRAND.address.street}, {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}</p>
          <p className="text-pool-500 text-sm mt-1">{BRAND.hours.weekdays} · {BRAND.hours.weekend}</p>
        </div>
        <div>
          <div className="tag mb-2">Service area</div>
          <p className="h-display text-2xl text-pool-950">{BRAND.address.region}</p>
          <p className="text-pool-500 text-sm mt-1">Based in {BRAND.address.locality} · serving {BRAND.address.cities.slice(0, 6).join(', ')} and surrounding areas.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-4">
          <a href="/quote" className="btn-primary">Request an estimate</a>
          <a href={smsHref} className="btn-ghost">Send a text</a>
        </div>
      </div>
    </section>
  );
}
