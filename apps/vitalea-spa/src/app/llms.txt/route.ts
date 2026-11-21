import { BRAND, LINKS } from '@/data/brand';
import { SERVICES, fromPrice } from '@/data/services';
import { RATING } from '@/data/reviews';
import { FAQS } from '@/data/faq';

export const dynamic = 'force-static';

const soon = (link: string) => (link ? '' : ' (coming soon)');

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
    `- Booking: by appointment only — ${LINKS.booking ? `book online at ${LINKS.booking}, or ` : ''}text or call ${BRAND.phone}`,
    `- Rating: ${RATING.value} stars on ${RATING.source} (${RATING.count} reviews)`,
    `- Service area: ${BRAND.areaServed.join(', ')}`,
    `- Languages: English, Spanish`,
    '',
    '## Pages',
    '',
    `- [Home — services, pricing, reviews, directions](${BRAND.url})`,
    `- [Gift cards — good toward any treatment, solo or couples](${BRAND.url}/gift-cards)`,
    `- [Membership — a monthly 1-hour VIP Massage with member pricing on extras${soon(LINKS.membership)}](${BRAND.url}/membership)`,
    `- [Packages & add-ons — VIP Massage 3-pack and 5-pack; hot stone, paraffin hands, aromatherapy${soon(LINKS.packages)}](${BRAND.url}/packages)`,
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
