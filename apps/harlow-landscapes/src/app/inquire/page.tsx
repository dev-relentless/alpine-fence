import type { Metadata } from 'next';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Begin a project',
  description: 'Tell us about your site and the way you would like to live in the landscape. Inquiries are read by the firm\u2019s principal.',
};

export default function InquirePage() {
  return (
    <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Begin a project</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-[1.06]">
          Tell us about the site.
        </h1>
        <p className="text-stone-600 leading-relaxed">
          We work with a limited number of clients each year. The more we know up front,
          the more useful the first conversation becomes.
        </p>
        <p className="text-stone-500 text-[15px] leading-relaxed">
          Inquiries are read by the firm&rsquo;s principal. You can expect a response within
          one business day.
        </p>
      </div>
      <div className="lg:col-span-7 bg-ivory-100 p-8 md:p-12 border border-stone-200 shadow-editorial">
        <InquiryForm />
      </div>
    </section>
  );
}
