import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface EstimatePayload {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  work?: string | string[];
  timeline?: string;
  size?: string;
  contact?: string;
  notes?: string;
  company?: string; // honeypot
}

const MAX = { name: 120, email: 200, phone: 40, city: 200, size: 200, notes: 4000 } as const;

function clean(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(req: NextRequest) {
  let raw: EstimatePayload;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — silently accept and discard.
  if (raw.company && raw.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    name: clean(raw.name, MAX.name),
    email: clean(raw.email, MAX.email),
    phone: clean(raw.phone, MAX.phone),
    city: clean(raw.city, MAX.city),
    work: Array.isArray(raw.work) ? raw.work.map((w) => clean(w, 80)).filter(Boolean) : raw.work ? [clean(raw.work, 80)] : [],
    timeline: clean(raw.timeline, 60),
    size: clean(raw.size, MAX.size),
    contact: clean(raw.contact, 20),
    notes: clean(raw.notes, MAX.notes),
  };

  if (!data.name || !data.email || !data.phone) {
    return NextResponse.json({ error: 'Name, phone, and email are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }

  const record = { receivedAt: new Date().toISOString(), source: 'apex-concrete', ...data };

  // Forward to the office inbox / CRM when a webhook is configured
  // (Zapier, Make, Resend, Slack, etc.); otherwise log so deploys can verify the route.
  const webhook = process.env.ESTIMATE_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } catch (err) {
      console.error('[apex-concrete:estimate] webhook failed', err, record);
      return NextResponse.json({ error: 'We couldn’t send your request. Please call or text us instead.' }, { status: 502 });
    }
  } else {
    console.log('[apex-concrete:estimate]', record);
  }

  return NextResponse.json({ ok: true });
}
