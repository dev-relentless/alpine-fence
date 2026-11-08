import { BRAND } from '@/data/brand';
import { services } from '@/data/services';
import { faqs } from '@/data/faq';

export const dynamic = 'force-static';

/** llms.txt — a plain-text summary of the business for AI crawlers, generated from the data layer. */
export function GET() {
  const lines: string[] = [
    `# ${BRAND.name}`,
    '',
    `> ${BRAND.shortDescription}`,
    '',
    '## About',
    '',
    BRAND.description,
    '',
    `- Website: ${BRAND.url}`,
    `- Phone: ${BRAND.phone}`,
    `- Email: ${BRAND.email}`,
    `- Hours: ${BRAND.hours}`,
    `- Based in: ${BRAND.address.locality}, ${BRAND.address.state}`,
    `- Region: ${BRAND.address.region}`,
    `- Counties served: ${BRAND.address.serviceArea.join(', ')}`,
    `- Cities served: ${BRAND.address.cities.join(', ')}`,
    `- Price tier: residential / commercial (${BRAND.priceRange})`,
    '- Independent, locally owned; licensed and insured in Utah.',
    '',
    '## Standard specification (every pour)',
    '',
    ...Object.entries(BRAND.spec).map(([k, v]) => `- ${k}: ${v}`),
    '',
    '## Services',
    '',
  ];

  for (const s of services) {
    lines.push(`### ${s.title}`, '', `${BRAND.url}/services/${s.slug}`, '', s.blurb, '');
    lines.push(...s.items.map((i) => `- ${i}`), '');
  }

  lines.push('## Frequently asked questions', '');
  for (const f of [...faqs, ...services.flatMap((s) => s.faqs)]) {
    lines.push(`**${f.q}**`, '', f.a, '');
  }

  lines.push(
    '## Pages',
    '',
    `- Home: ${BRAND.url}`,
    `- Services: ${BRAND.url}/services`,
    ...services.map((s) => `- ${s.title}: ${BRAND.url}/services/${s.slug}`),
    `- Service area: ${BRAND.url}/service-area`,
    `- About: ${BRAND.url}/about`,
    `- Contact: ${BRAND.url}/contact`,
    `- Free estimate: ${BRAND.url}/estimate`,
    '',
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
