import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface InquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  scope?: string | string[];
  budget?: string;
  notes?: string;
  company?: string; // honeypot
}

export async function POST(req: NextRequest) {
  let data: InquiryPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — silently accept and discard.
  if (data.company && data.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!data.name || !data.email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }

  // TODO: wire to studio inbox / CRM.
  // Options: Resend, Postmark, SendGrid, or Vercel + webhook to HubSpot.
  // For now we log on the server so deploys can verify the route is reachable.
  console.log('[harlow-landscapes:inquiry]', {
    receivedAt: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ ok: true });
}
