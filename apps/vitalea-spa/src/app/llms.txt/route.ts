import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice } from '@/data/services';

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
    '',
    '## Services',
    '',
    ...SERVICES.map(
      (s) =>
        `- ${s.name} (${s.durations.map((d) => `${d} min`).join(' / ')}) — from $${fromPrice(s)}. ${s.blurb}`,
    ),
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
