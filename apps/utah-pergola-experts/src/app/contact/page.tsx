import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — pergolas, louvered roofs & pavilions, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-patio py-20 md:py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight">
          We&rsquo;d be glad to hear from you.
        </h1>
        <p className="text-timber-600 leading-relaxed">
          The quickest answers come by telephone — we&rsquo;re usually under a beam, not at a
          desk. For anything with a sketch or a date attached, request a consultation and
          we&rsquo;ll come walk the yard.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="tag mb-2">Telephone</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="h-display text-2xl text-timber-950 hover:text-sienna-600">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="tag mb-2">Text</div>
          <a href={smsHref} className="h-display text-2xl text-timber-950 hover:text-sienna-600">
            {BRAND.phone} <span className="text-timber-400 text-base font-normal normal-case">— SMS</span>
          </a>
        </div>
        <div>
          <div className="tag mb-2">Service area</div>
          <p className="h-display text-2xl text-timber-950">{BRAND.address.region}</p>
          <p className="text-timber-500 text-sm mt-1">Based in Utah County · building in {BRAND.address.cities.slice(0, 6).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-4">
          <a href="/quote" className="btn-primary">Request a consultation</a>
          <a href={smsHref} className="btn-ghost">Send a text</a>
        </div>
      </div>
    </section>
  );
}
