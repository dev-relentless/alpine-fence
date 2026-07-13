import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, COUNTIES } from '@/data/cities';
import { services, landscapeServices } from '@/data/services';
import AnniversaryBadge from './AnniversaryBadge';

export default function Footer() {
  return (
    <footer className="bg-alpine-950 text-stone-300">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-alpine-900 via-alpine-800 to-bronze-800">
        <div className="section-container py-12 text-center">
          <div className="flex justify-center mb-5">
            <AnniversaryBadge />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            Ready to Build Something <span className="italic font-light text-compoxen-300">Remarkable?</span>
          </h2>
          <p className="text-alpine-100 mb-8 max-w-2xl mx-auto">
            Installation, staining, refinishing, or repair — in every major fencing and decking material.
            Free, same-day estimates with no pressure and no gimmicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary bg-white text-alpine-900 hover:bg-stone-100">
              Request a Free Estimate
            </Link>
            <a href={COMPANY.phoneHref} className="btn-secondary border-white text-white hover:bg-white/10">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 ring-1 ring-white/15 flex items-center justify-center shrink-0">
                <Image
                  src="/favicon/android-chrome-192x192.png"
                  alt="Alpine Fence & Deck logo mark"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Alpine Fence &amp; Deck</h3>
                <span className="text-xs text-stone-400">Utah&apos;s Premier Builder</span>
              </div>
            </div>

            <address className="not-italic space-y-4">
              {COMPANY.locations.map((loc) => (
                <div key={loc.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-compoxen-300 mb-1">
                    {loc.label}
                  </p>
                  <p className="text-sm text-stone-400 leading-snug">
                    {loc.street}
                    <br />
                    {loc.city}, {loc.region} {loc.postalCode}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <a href={COMPANY.phoneHref} className="text-lg font-bold text-white hover:text-compoxen-400 transition-colors">
                  {COMPANY.phone}
                </a>
                <p className="text-sm text-stone-400 mt-2">
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
                </p>
              </div>
            </address>
            <p className="text-sm text-stone-500 mt-4">
              {COMPANY.yearsExperience}+ years of fence, deck &amp; landscape craftsmanship across Utah.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Fence &amp; Deck</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Yard & Landscape */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Yard &amp; Landscape</h4>
            <ul className="space-y-3">
              {landscapeServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/landscaping/${service.slug}`}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/landscaping"
                  className="text-sm text-alpine-300 hover:text-white transition-colors font-medium"
                >
                  → All Landscape Services
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
                <Link href="/gallery" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Contact Us
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
        <div className="section-container pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <a
            href="https://harlowlandscapes.com"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener"
          >
            Sister studio: Harlow Landscapes
          </a>
          <a
            href="https://spravek.com"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener"
          >
            A Spravek Company
          </a>
        </div>
      </div>
    </footer>
  );
}
