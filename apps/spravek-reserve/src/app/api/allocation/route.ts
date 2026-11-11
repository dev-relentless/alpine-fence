import { NextRequest, NextResponse } from 'next/server';
import { FLEET } from '@/data/fleet';

export const runtime = 'nodejs';

interface AllocationPayload {
  vehicle?: string;
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  startDate?: string;
  duration?: string;
  occasion?: string;
  notes?: string;
  company?: string; // honeypot
}

export async function POST(req: NextRequest) {
  let data: AllocationPayload;
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
  const vehicle = FLEET.find((v) => v.slug === data.vehicle);
  if (!vehicle) {
    return NextResponse.json({ error: 'Please choose a vehicle.' }, { status: 400 });
  }
  if (data.service === 'chauffeured' && !vehicle.chauffeur) {
    return NextResponse.json({ error: 'Chauffeur service is only offered on the S 580.' }, { status: 400 });
  }
  if (!data.startDate) {
    return NextResponse.json({ error: 'Please choose a start date.' }, { status: 400 });
  }

  // Short request reference for the confirmation screen. The real allocation
  // number (Nº 001, 002…) is issued by hand once the agreement is signed.
  const reference = `R-${Date.now().toString(36).toUpperCase().slice(-5)}`;

  // TODO: wire to inbox / CRM (Resend, Postmark, webhook, etc.).
  console.log('[spravek-reserve:allocation]', {
    receivedAt: new Date().toISOString(),
    reference,
    ...data,
  });

  return NextResponse.json({ ok: true, reference });
}
