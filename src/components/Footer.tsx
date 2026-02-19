import Link from 'next/link';
import { COMPANY, COUNTIES } from '@/data/cities';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-alpine-950 text-stone-300">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-alpine-800 to-mountain-900">
        <div className="section-container py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            Ready to Transform Your Outdoor Living Space?
          </h2>
          <p className="text-alpine-100 mb-8 max-w-2xl mx-auto">
            Whether you need refinishing, repair, or are ready for a revolutionary Compozen® installation — 
            we&apos;re here to help. Free estimates, guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary !bg-white !text-alpine-900 hover:!bg-stone-100">
              Get Free Estimate
            </Link>
            <Link href="/design-studio" className="btn-compozen">
              Launch Design Studio
            </Link>
            <a href={COMPANY.phoneHref} className="btn-secondary !border-white !text-white hover:!bg-white/10">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-alpine-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Alpine Fence & Deck</h3>
                <span className="text-xs text-compozen-400">Compozen® Certified</span>
              </div>
            </div>
            <p className="text-sm text-stone-400 mb-4">{COMPANY.address}</p>
            <a href={COMPANY.phoneHref} className="text-lg font-bold text-white hover:text-compozen-400 transition-colors">
              {COMPANY.phone}
            </a>
            <p className="text-sm text-stone-400 mt-2">{COMPANY.email}</p>
            <p className="text-sm text-stone-500 mt-4">
              {COMPANY.yearsExperience}+ years transforming Utah&apos;s outdoor living spaces
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {service.isCompozen && <span className="w-1.5 h-1.5 bg-compozen-400 rounded-full" />}
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/design-studio" className="text-sm text-compozen-400 hover:text-compozen-300 transition-colors font-medium">
                  → Compozen Design Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {COUNTIES.map((county) => (
                <li key={county}>
                  <Link
                    href={`/service-areas#${county.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {county} County
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm text-alpine-300 hover:text-white transition-colors font-medium">
                  → View All 94 Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/calculator" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Refinish vs. Replace Calculator
                </Link>
              </li>
              <li>
                <Link href="/hoa-compliance" className="text-sm text-stone-400 hover:text-white transition-colors">
                  HOA Compliance Center
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Free Estimate
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-stone-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-stone-500 text-center">
            {COMPANY.tagline}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
