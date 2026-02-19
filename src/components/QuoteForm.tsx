'use client';

import { useState, type FormEvent } from 'react';

interface QuoteFormProps {
  defaultService?: string;
  defaultCity?: string;
  variant?: 'full' | 'compact' | 'sidebar';
  className?: string;
}

export default function QuoteForm({ defaultService, defaultCity, variant = 'full', className = '' }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-alpine-50 border border-alpine-200 rounded-2xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-alpine-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-alpine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-alpine-900 mb-2">Quote Request Received!</h3>
        <p className="text-stone-600">
          We&apos;ll contact you within 2 hours with your personalized estimate. For immediate assistance, call{' '}
          <a href="tel:+8015553325" className="font-bold text-alpine-700">(801) 555-DECK</a>.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-xl p-6 ${className}`}>
        <h3 className="text-lg font-heading font-bold text-alpine-900 mb-4">Get Your Free Estimate</h3>
        <div className="space-y-3">
          <input type="text" placeholder="Full Name" required className="input-field" />
          <input type="tel" placeholder="Phone Number" required className="input-field" />
          <select defaultValue={defaultService || ''} className="input-field" required>
            <option value="" disabled>Select Service</option>
            <option value="refinishing">Deck & Fence Refinishing</option>
            <option value="repair">Fence & Deck Repair</option>
            <option value="compozen-fence">Compozen® Fence Installation</option>
            <option value="compozen-deck">Compozen® Deck Installation</option>
          </select>
          <button type="submit" className="btn-primary w-full">
            Get Free Estimate →
          </button>
        </div>
        <p className="text-xs text-stone-400 mt-3 text-center">Same-day response guaranteed</p>
      </form>
    );
  }

  if (variant === 'sidebar') {
    return (
      <form onSubmit={handleSubmit} className={`bg-gradient-to-br from-alpine-50 to-white border border-alpine-200 rounded-2xl p-6 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-alpine-700 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-alpine-900">Quick Quote</h3>
        </div>
        <div className="space-y-3">
          <input type="text" placeholder="Name" required className="input-field !py-2 text-sm" />
          <input type="tel" placeholder="Phone" required className="input-field !py-2 text-sm" />
          <input type="email" placeholder="Email" className="input-field !py-2 text-sm" />
          <select defaultValue={defaultService || ''} className="input-field !py-2 text-sm" required>
            <option value="" disabled>Service Needed</option>
            <option value="refinishing">Refinishing</option>
            <option value="repair">Repair</option>
            <option value="compozen-fence">Compozen® Fence</option>
            <option value="compozen-deck">Compozen® Deck</option>
          </select>
          {defaultCity && <input type="hidden" name="city" value={defaultCity} />}
          <button type="submit" className="btn-primary w-full !py-2.5 !text-sm">
            Request Estimate
          </button>
        </div>
      </form>
    );
  }

  // Full variant
  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-xl p-8 lg:p-10 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-2">
          Get Your Free Estimate
        </h2>
        <p className="text-stone-600">
          Same-day response guaranteed. No obligation, no pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
          <input id="name" type="text" placeholder="John Smith" required className="input-field" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
          <input id="phone" type="tel" placeholder="(801) 555-1234" required className="input-field" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
          <input id="email" type="email" placeholder="john@example.com" className="input-field" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-1">City</label>
          <input id="city" type="text" placeholder="Salt Lake City" defaultValue={defaultCity || ''} className="input-field" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1">Service Needed *</label>
          <select id="service" defaultValue={defaultService || ''} className="input-field" required>
            <option value="" disabled>Select a service</option>
            <option value="refinishing">Deck & Fence Refinishing</option>
            <option value="repair">Fence & Deck Repair</option>
            <option value="compozen-fence">Compozen® Fence Installation</option>
            <option value="compozen-deck">Compozen® Deck Installation</option>
            <option value="hoa">HOA Compliance Help</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-stone-700 mb-1">Timeline</label>
          <select id="timeline" className="input-field">
            <option value="asap">As soon as possible</option>
            <option value="1-2-weeks">Within 1-2 weeks</option>
            <option value="1-month">Within a month</option>
            <option value="planning">Just planning</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="details" className="block text-sm font-medium text-stone-700 mb-1">Project Details</label>
        <textarea
          id="details"
          rows={3}
          placeholder="Tell us about your project — dimensions, material preferences, HOA requirements, etc."
          className="input-field resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full text-lg py-4">
        Get My Free Estimate →
      </button>

      <div className="flex items-center justify-center gap-6 mt-6 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-alpine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Same-Day Response
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-alpine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Info Secure
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-alpine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          No Obligation
        </span>
      </div>
    </form>
  );
}
