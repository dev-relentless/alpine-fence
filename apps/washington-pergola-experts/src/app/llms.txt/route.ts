import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';

export const dynamic = 'force-static';

/** llms.txt generated from brand data so every state site stays in sync. */
export function GET() {
  const { state, climate, address } = BRAND;
  const sections = structureCategories
    .map((c) => `## ${c.title}\n\n${c.items.map((i) => `- ${i}`).join('\n')}`)
    .join('\n\n');

  const body = `# ${BRAND.name}

> Pergolas, motorized louvered roofs, and pavilions across ${state} —
> timber structures with real footings, engineering for ${climate.elements},
> and finishes made for ${climate.sun}. Design-build, quotes in writing.

## About

${BRAND.name} builds shade structures like structures, not furniture:
${climate.footings}, ${climate.spans}, thru-bolted connections, and UV-stable
finishes. Structures are designed around how the sun actually crosses your
yard. A Spravek company, alongside Alpine Fence & Deck, Utah Pergola Experts,
American Timber Shade, SPX Construction, Harlow Landscapes, Braddock Concrete,
and Relentless Equipment.

- Region: ${address.region} (based in ${address.locality}, ${address.state})
- Cities served: ${address.cities.join(', ')}
- Counties served: ${address.serviceArea.join(', ')}
- Price tier: residential ($$)

${sections}

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
Yes. ${BRAND.name} is part of the Alpine Fence & Deck family of companies —
a Spravek company — two decades of construction craft under one
accountability line.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
