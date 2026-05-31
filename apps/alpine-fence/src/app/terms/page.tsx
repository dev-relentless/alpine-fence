import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${COMPANY.name}. Review the terms and conditions governing use of our website and services.`,
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/terms',
  },
};

export default function TermsPage() {
  const lastUpdated = 'March 20, 2026';

  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
            <p className="text-stone-300">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto prose prose-stone prose-headings:font-heading prose-headings:text-alpine-900">
          <p>
            Welcome to alpinefenceanddeck.com. These Terms of Service (&quot;Terms&quot;) govern your use of our website
            and the services provided by Alpine Fence and Deck (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            accessing our website or using our services, you agree to be bound by these Terms.
          </p>

          <h2>Services</h2>
          <p>
            Alpine Fence and Deck provides fence and deck refinishing, repair, and installation services across Utah.
            All services are subject to availability and scheduling. Specific project terms, pricing, and timelines are
            outlined in individual estimates and agreements provided prior to the start of work.
          </p>

          <h2>Estimates &amp; Pricing</h2>
          <ul>
            <li>All estimates are provided free of charge with no obligation.</li>
            <li>
              Estimates are based on information available at the time of assessment. Final pricing may vary based on
              actual site conditions, material costs, or scope changes discovered during the project.
            </li>
            <li>A signed agreement is required before any work begins.</li>
          </ul>

          <h2>Warranties</h2>
          <ul>
            <li>
              <strong>Workmanship:</strong> We stand behind our craftsmanship and will address any defects in our work
              within a reasonable timeframe after project completion.
            </li>
            <li>
              <strong>Materials:</strong> Material warranties are provided by the respective manufacturers. Compoxen®
              composite products carry their own manufacturer warranty terms.
            </li>
            <li>
              <strong>Refinishing:</strong> Refinishing results depend on the condition of existing materials, weather
              exposure, and ongoing maintenance. We do not guarantee specific lifespans for refinished surfaces.
            </li>
          </ul>

          <h2>Website Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Submit false or misleading information through our forms</li>
            <li>Reproduce, duplicate, or exploit any portion of our website for commercial purposes without permission</li>
            <li>Use automated systems to access our website in a manner that sends more requests than a human could reasonably produce</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos, graphics, and design — is the property of Alpine
            Fence and Deck or its licensors and is protected by copyright and trademark laws. You may not use our content
            without written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Alpine Fence and Deck shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of our website or services. Our total
            liability for any claim shall not exceed the amount you paid for the specific service giving rise to the
            claim.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Alpine Fence and Deck, its employees, and contractors from any
            claims, damages, or expenses arising from your violation of these Terms or misuse of our website.
          </p>

          <h2>Third-Party Links &amp; Services</h2>
          <p>
            Our website may contain links to third-party services (e.g., HouseCall Pro for scheduling). We are not
            responsible for the content, privacy practices, or terms of any third-party sites or services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Utah. Any disputes arising under these Terms shall be
            resolved in the courts of Utah County, Utah.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated
            date. Continued use of our website after changes are posted constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
          <ul>
            <li>
              <strong>Email:</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li>
              <strong>Address:</strong> {COMPANY.address}
            </li>
          </ul>

          <div className="not-prose mt-12 pt-8 border-t border-stone-200">
            <Link href="/" className="text-alpine-700 hover:text-alpine-800 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
