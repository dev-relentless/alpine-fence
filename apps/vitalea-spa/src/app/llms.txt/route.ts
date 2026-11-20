import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice } from '@/data/services';
import { RATING } from '@/data/reviews';
import { FAQS } from '@/data/faq';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${BRAND.name}`,
    '',
    BRAND.description,
    '',
    `- Location: ${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.state} ${BRAND.address.zip}`,
    `- Phone: ${BRAND.phone}`,
    `- Email: ${BRAND.email}`,
    `- Hours: ${BRAND.hours.display}`,
    `- Founder: ${BRAND.founder}`,
    `- Booking: by appointment only — text or call ${BRAND.phone}`,
    `- Rating: ${RATING.value} stars on ${RATING.source} (${RATING.count} reviews)`,
    `- Service area: ${BRAND.areaServed.join(', ')}`,
    `- Languages: English, Spanish`,
    '',
    '## Pages',
    '',
    `- [Home — services, pricing, reviews, directions](${BRAND.url})`,
    `- [FAQ — booking, pricing, couples sessions](${BRAND.url}/faq)`,
    '',
    '## Services',
    '',
    ...SERVICES.map(
      (s) =>
        `- ${s.name} (${s.durations.map((d) => `${d} min`).join(' / ')}) — from $${fromPrice(s)}. ${s.blurb}`,
    ),
    '',
    '## Frequently asked questions',
    ...FAQS.flatMap((f) => ['', `### ${f.q.en}`, '', f.a.en]),
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
