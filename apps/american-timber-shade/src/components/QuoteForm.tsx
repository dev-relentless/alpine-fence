'use client';

import { useState } from 'react';
import { BRAND } from '@/data/brand';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const interests = [
  'Timber pergola',
  'Heavy timber / mortise-tenon',
  'Pavilion or solid roof',
  'Outdoor kitchen',
  'Fire pit / fireplace',
  'Privacy screens',
  'Lighting & electrical',
  'Hot tub / spa surround',
  'The whole outdoor space',
  'Not sure yet',
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string | string[]> = {};
    fd.forEach((value, key) => {
      const v = String(value);
      if (key in payload) {
        const cur = payload[key];
        payload[key] = Array.isArray(cur) ? [...cur, v] : [cur, v];
      } else {
        payload[key] = v;
      }
    });
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setMessage('Got it. We will be in touch within one business day — usually faster.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="City & state" name="city" placeholder="e.g. Park City, UT" autoComplete="address-level2" />
      </div>

      <div>
        <div className="tag mb-3">What are you picturing?</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {interests.map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm text-ink-700">
              <input type="checkbox" name="interest" value={v} className="accent-cedar-700" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Timeline" name="timeline" as="select"
          options={['As soon as possible', 'Within a month', '1–3 months', 'This season', 'Planning ahead']} />
        <Field label="Budget range (if known)" name="budget" as="select"
          options={['Under $25k', '$25k – $50k', '$50k – $100k', '$100k – $250k', '$250k+', 'Not sure yet']} />
      </div>

      <div>
        <label className="tag block mb-3" htmlFor="notes">Tell us about the space</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Size of the patio, what the house looks like, how you host, anything you've saved for inspiration…"
          className="field"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Request a proposal'}
        </button>
        <span className="text-ink-500 text-sm">
          or call <a href={`tel:${BRAND.phoneRaw}`} className="text-ink-800 underline decoration-brass-400 underline-offset-4 tabular-nums">{BRAND.phone}</a>
        </span>
      </div>

      {message && (
        <p role="status" className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-ink-800'}`}>{message}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  autoComplete,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: 'select';
  options?: string[];
}) {
  return (
    <div>
      <label className="tag block mb-2" htmlFor={name}>
        {label}{required && <span className="text-cedar-600"> *</span>}
      </label>
      {as === 'select' && options ? (
        <select id={name} name={name} className="field" defaultValue="">
          <option value="" disabled>Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} className="field" />
      )}
    </div>
  );
}
