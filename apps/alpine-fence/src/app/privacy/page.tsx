import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/privacy',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'March 20, 2026';

  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
            <p className="text-stone-300">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto prose prose-stone prose-headings:font-heading prose-headings:text-alpine-900">
          <p>
            Alpine Fence and Deck (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
            committed to protecting the personal information you share with us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website at{' '}
            <strong>alpinefenceanddeck.com</strong> or contact us for services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Request a free estimate or quote</li>
            <li>Fill out a contact form</li>
            <li>Call or email us</li>
            <li>Schedule a service appointment</li>
          </ul>
          <p>This information may include your name, phone number, email address, home address, and project details.</p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device and usage,
            including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and
            times of your visits.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide estimates</li>
            <li>Schedule and perform fence and deck services</li>
            <li>Communicate with you about your project</li>
            <li>Improve our website and services</li>
            <li>Send follow-up communications related to your inquiry (you may opt out at any time)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share your information
            with:
          </p>
          <ul>
            <li>
              <strong>Service providers</strong> who assist us in operating our business (e.g., scheduling software,
              CRM systems) under strict confidentiality agreements
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law or to protect our rights
            </li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            Our website uses HouseCall Pro for online booking and quote requests. When you use our booking form, your
            information is also subject to{' '}
            <a href="https://www.housecallpro.com/privacy" target="_blank" rel="noopener noreferrer">
              HouseCall Pro&apos;s Privacy Policy
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can
            control cookie preferences through your browser settings. Disabling cookies may affect certain website
            functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request information about how your data is used</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call{' '}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to individuals under the age of 13. We do not knowingly collect personal
            information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            &quot;Last updated&quot; date. We encourage you to review this page periodically.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
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
