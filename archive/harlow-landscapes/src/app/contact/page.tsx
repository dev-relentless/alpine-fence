import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — a design-build landscape firm, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Contact</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-[1.06]">
          The firm.
        </h1>
        <p className="text-stone-600 leading-relaxed">
          For new projects, the inquiry form gives us the right starting points. For
          everything else, reach the firm directly — call or text. The principal answers
          each one.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Telephone</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-2xl text-stone-900 hover:text-moss-800">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text the firm</div>
          <a href={smsHref} className="h-display text-2xl text-stone-900 hover:text-moss-800">
            {BRAND.phone} <span className="text-stone-400 text-base font-normal normal-case">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Region</div>
          <p className="h-display text-2xl text-stone-900">{BRAND.address.region}</p>
          <p className="text-stone-500 text-sm mt-1">
            Serving {BRAND.address.cities.slice(0, 8).join(', ')} and the broader Wasatch Front.
          </p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/inquire" className="btn-primary">Begin a project</a>
          <a href={smsHref} className="btn-ghost">Text the firm</a>
        </div>
      </div>
    </section>
  );
}
