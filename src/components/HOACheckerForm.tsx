'use client';

import { useState, type FormEvent } from 'react';

export default function HOACheckerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-alpine-50 border border-alpine-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-alpine-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-alpine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-alpine-900 mb-2">Request Received!</h3>
        <p className="text-stone-600">
          We&apos;ll research your HOA&apos;s requirements and contact you within 24 hours with pre-approved design options.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Street Address</label>
          <input type="text" placeholder="1234 Main Street" className="input-field" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">City</label>
          <input type="text" placeholder="South Jordan" className="input-field" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">HOA Name (if known)</label>
          <input type="text" placeholder="Daybreak HOA" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Project Type</label>
          <select className="input-field">
            <option>New Fence Installation</option>
            <option>Fence Replacement</option>
            <option>New Deck Installation</option>
            <option>Deck Replacement</option>
            <option>Both Fence &amp; Deck</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary w-full">
        Check HOA Requirements →
      </button>
      <p className="text-xs text-stone-400 text-center">
        We&apos;ll research your HOA&apos;s requirements and contact you within 24 hours with pre-approved design options.
      </p>
    </form>
  );
}
