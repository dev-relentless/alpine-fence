import { NextRequest, NextResponse } from 'next/server';

// Rate limiting: simple in-memory store (use Redis in production)
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5; // max submissions per IP per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempts = submissions.get(ip) || [];
  const recent = attempts.filter((t) => now - t < RATE_WINDOW);
  submissions.set(ip, recent);
  return recent.length < RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limit check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, email, city, service, timeline, details } = body;

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required.' },
        { status: 400 }
      );
    }

    // Phone format validation
    const phoneClean = phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number.' },
        { status: 400 }
      );
    }

    // Record the submission timestamp for rate limiting
    const timestamps = submissions.get(ip) || [];
    timestamps.push(Date.now());
    submissions.set(ip, timestamps);

    // In production, this would:
    // 1. Save to database (Strapi CMS or direct DB)
    // 2. Send notification email
    // 3. Trigger SMS follow-up automation
    // 4. Feed Relentless AI with lead data
    // 5. Create CRM entry

    const lead = {
      id: `lead_${Date.now()}`,
      name,
      phone: phoneClean,
      email: email || null,
      city: city || null,
      service,
      timeline: timeline || 'asap',
      details: details || null,
      source: 'website',
      createdAt: new Date().toISOString(),
      isCompozen: service.includes('compozen'),
    };

    console.log('New lead received:', lead);

    return NextResponse.json({
      success: true,
      message: 'Quote request received! We\'ll contact you within 2 hours.',
      leadId: lead.id,
    });
  } catch {
    return NextResponse.json(
      { error: 'An error occurred. Please try again or call (801) 555-DECK.' },
      { status: 500 }
    );
  }
}
