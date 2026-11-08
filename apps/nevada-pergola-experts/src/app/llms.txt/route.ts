import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';
import { NETWORK_PARENT, NETWORK_STATES } from '@/data/network';

export const dynamic = 'force-static';

/** llms.txt generated from brand data so every state site stays in sync. */
export function GET() {
  const { state, climate, address } = BRAND;
  const sections = structureCategories
    .map((c) => `## ${c.title}\n\n${c.items.map((i) => `- ${i}`).join('\n')}`)
    .join('\n\n');
  const siblings = NETWORK_STATES.filter((s) => s.state !== state)
    .map((s) => `- ${s.name}: ${s.url} (${s.regionLine})`)
    .join('\n');

  const body = `# ${BRAND.name}

> Pergolas, motorized louvered roofs, and pavilions across ${state} —
> timber structures with real footings, engineering for ${climate.elements},
> and finishes made for ${climate.sun}. Design-build, quotes in writing.

## About

${BRAND.name} builds shade structures like structures, not furniture:
${climate.footings}, ${climate.spans}, thru-bolted connections, and UV-stable
finishes. Structures are designed around how the sun actually crosses your
yard. ${BRAND.name} is the ${state} arm of ${NETWORK_PARENT.name}
(${NETWORK_PARENT.url}), the national design-build brand for premium outdoor
spaces across the Mountain West. A Spravek company.

- Region: ${address.region} (based in ${address.locality}, ${address.state})
- Cities served: ${address.cities.join(', ')}
- Counties served: ${address.serviceArea.join(', ')}
- Price tier: residential ($$)

${sections}

## Locations

Pergola Experts sites in other states (each with its own crew and phone):

${siblings}

National brand: ${NETWORK_PARENT.name} — ${NETWORK_PARENT.locationsUrl}

## Contact

- Website: ${BRAND.url}
- Phone / SMS: ${BRAND.phone}

## Frequently asked

### How do quotes work?
Call, text, or send the quote form. We walk the yard, map the sun, and put
drawings, materials, and price in writing — before any work starts.

### ${climate.durabilityQ}
${climate.durabilityA}

### Are you part of a larger company?
Yes. ${BRAND.name} is the ${state} arm of ${NETWORK_PARENT.name} — a Spravek
company — with sister Pergola Experts sites in ${NETWORK_STATES.filter((s) => s.state !== state).map((s) => s.state).join(', ')}.
Two decades of construction craft under one accountability line.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
