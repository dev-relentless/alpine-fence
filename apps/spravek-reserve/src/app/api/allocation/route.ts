import { NextRequest, NextResponse } from 'next/server';
import { FLEET } from '@/data/fleet';

export const runtime = 'nodejs';

interface AllocationPayload {
  vehicle?: string;
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  zone?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  pickupTime?: string;
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
  if (!data.phone) {
    return NextResponse.json({ error: 'Please provide a mobile phone number.' }, { status: 400 });
  }
  if (!data.startDate || Number.isNaN(Date.parse(data.startDate))) {
    return NextResponse.json({ error: 'Please choose a pickup date.' }, { status: 400 });
  }
  const selfDrive = data.service !== 'chauffeured';
  if (selfDrive && (!data.endDate || Number.isNaN(Date.parse(data.endDate)))) {
    return NextResponse.json({ error: 'Please choose a return date.' }, { status: 400 });
  }
  if (data.endDate && Date.parse(data.endDate) < Date.parse(data.startDate)) {
    return NextResponse.json({ error: 'Return date must be on or after the pickup date.' }, { status: 400 });
  }

  // Short request reference for the confirmation screen. The allocation
  // number is issued once the agreement is signed and the deposit placed.
  const reference = `R-${Date.now().toString(36).toUpperCase().slice(-5)}`;

  // TODO: wire to inbox / CRM (Resend, Postmark, webhook, etc.).
  console.log('[spravek-reserve:allocation]', {
    receivedAt: new Date().toISOString(),
    reference,
    ...data,
  });

  return NextResponse.json({ ok: true, reference });
}
