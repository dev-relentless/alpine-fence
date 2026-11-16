import { BRAND } from '@/data/brand';
import { pergolaStyles, pergolaFaqs } from '@/data/pergolas';
import { spaces } from '@/data/spaces';
import { NETWORK_STATES } from '@/data/network';

export const dynamic = 'force-static';

/** llms.txt generated from brand + network data so the state list never drifts. */
export function GET() {
  const states = NETWORK_STATES.map((s) => `- ${s.name} — ${s.url} (${s.regionLine}) · ${s.phone}`).join('\n');
  const pergolas = pergolaStyles.map((p) => `- ${p.title}`).join('\n');
  const living = spaces.map((s) => `- ${s.title}`).join('\n');
  const faqs = pergolaFaqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n');

  const body = `# ${BRAND.name}

> ${BRAND.tagline}. Flagship timber pergolas and complete outdoor-living
> design-build — pavilions, outdoor kitchens, fire features, privacy screens,
> lighting, and spa surrounds — designed and built across the ${BRAND.address.region}.

## About

${BRAND.name} builds shade structures like structures, not furniture:
posts on concrete footings below frost line, spans engineered for mountain
snow, through-bolted connections, and UV-stable finishes chosen for
high-altitude sun. The flagship is the timber pergola — attached,
freestanding, or heavy timber with pegged mortise-and-tenon joinery — and the
firm designs the whole outdoor space around it on one plan, built by one crew.

${BRAND.name} is the national brand. On the ground it builds under the
"Pergola Experts" name with a dedicated site, crew, and phone line per state
(see Locations below).

- Region: ${BRAND.address.region} — ${BRAND.address.states.join(', ')}
- Headquarters: ${BRAND.address.headquarters}
- Price tier: premium residential (${BRAND.priceRange})
- Locations directory: ${BRAND.url}/locations

## Locations — Pergola Experts state sites

${states}

## Timber Pergolas (flagship)

${pergolas}
- Western red cedar and Douglas fir, rough-sawn or resawn
- Options: shade canopies, motorized shade, privacy screens, integrated
  lighting, fans, heaters, outlets in posts, steel accents

## Outdoor Living

${living}

## Contact

- Website: ${BRAND.url}
- Phone / SMS: ${BRAND.phone}

## Frequently asked

### How do proposals work?
Call, text, or send the project form. We walk the yard, map the sun, and put
drawings, materials, and price in writing — options priced separately —
before any work starts.

${faqs}

### Do you build outside Utah?
Yes. Headquartered on the ${BRAND.address.headquarters}, with Pergola Experts
crews in ${NETWORK_STATES.map((s) => s.state).join(', ')} and travel across the
${BRAND.address.region} for the right projects.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
