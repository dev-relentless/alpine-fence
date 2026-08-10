import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Utah Pool Experts — swimming pool & spa cleaning, maintenance, and repair in Orem, Utah. Family-run and serving the Wasatch Front since 1996.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-deck py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag">About Us</div>
          <h1 className="h-display text-4xl md:text-6xl text-pool-950 leading-tight">
            Generations of <br />
            <span className="text-pool-500">exceptional service.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-pool-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} is a one-stop service provider for swimming pool cleaning,
            maintenance, and repair. Since 1996, we&rsquo;ve dedicated ourselves to
            extraordinary pool and spa care — weekly maintenance, equipment repair,
            water analysis, and chemical wash services across the Wasatch Front.
          </p>
          <p>
            Utah is hard on pools: hard, alkaline water, blazing high-altitude summers,
            and winters that will crack anything left unprepared. Three decades of
            working with exactly that has shaped how we service — water tested and
            balanced on every visit, equipment inspected before it fails, and pools
            opened and closed by the calendar, not by luck.
          </p>
          <p>
            Our technical knowledge, experience, and professionalism have brought us to
            the forefront among Utah pool service companies — and our technicians show
            up the way you&rsquo;d hope: uniformed, on time, and respectful of your
            property, with transparent communication at every step.
          </p>
        </div>
      </section>

      <section className="bg-deep-end text-deck-50">
        <div className="container-deck py-20 md:py-28 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Expertise that shines', v: 'Techs with years of pool cleaning, maintenance, and repair behind them — and techniques tuned to Utah\u2019s climate.' },
            { k: 'Affordable excellence', v: 'Competitive pricing without cutting corners. Estimates in writing, and no surprises on the invoice.' },
            { k: 'Peace of mind', v: 'Fully licensed and insured, with factory-trained warranty service. Your pool is in safe, capable hands.' },
          ].map((v) => (
            <div key={v.k} className="border-t border-pool-700 pt-6 space-y-3">
              <div className="h-display text-xl text-white">{v.k}</div>
              <p className="text-pool-200 leading-relaxed text-[15px]">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-deck py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-4xl text-pool-950 mb-4">Let&rsquo;s get your pool handled.</h2>
        <p className="text-pool-600 mb-8">Estimates are free and carry no obligation.</p>
        <Link href="/quote" className="btn-primary">Request an estimate</Link>
      </section>
    </>
  );
}
