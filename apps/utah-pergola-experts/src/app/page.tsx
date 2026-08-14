import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';
import StructurePlate from '@/components/StructurePlate';

const numerals = ['I', 'II', 'III', 'IV'];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="bg-parchment-glow">
        <div className="container-patio pt-24 md:pt-32 pb-20 md:pb-24 text-center">
          <div className="tag mb-7">Pergolas · Pavilions — Wasatch Front, Utah</div>
          <h1 className="h-display text-5xl md:text-6xl lg:text-7xl leading-[1.06] max-w-4xl mx-auto text-timber-950">
            The best room in the house isn&rsquo;t in the house.
          </h1>
          <div className="rule my-9" aria-hidden />
          <p className="text-timber-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Timber pergolas, louvered roofs, and garden pavilions — designed around the way the
            sun crosses your yard, and built to be inherited with the house.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/quote" className="btn-primary">
              Request a consultation
            </Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-timber-700 hover:text-timber-950 text-[15px]">
              or telephone {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-timber-200">
          <div className="container-patio py-4 text-center tag">
            Licensed &amp; insured · Snow-load engineered · A Spravek company
          </div>
        </div>
      </section>

      {/* ─────────── THE STRUCTURES ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">The Structures</div>
          <h2 className="h-display text-4xl md:text-5xl text-timber-950">Three ways to keep the sun.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {structureCategories.map((c, i) => (
            <Link key={c.slug} href={`/pergolas#${c.slug}`} className="group block">
              <StructurePlate
                slug={c.slug as 'timber' | 'louvered' | 'pavilions'}
                caption={`Plate ${numerals[i]} — ${c.shortTitle}`}
                className="shadow-plate transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 className="h-display text-2xl text-timber-950 mt-6 mb-2 text-center">{c.title}</h3>
              <p className="text-timber-600 text-[15px] leading-relaxed text-center max-w-xs mx-auto">{c.blurb}</p>
              <div className="mt-4 text-center tag text-sienna-600 group-hover:text-sienna-500">Read more</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── PHILOSOPHY ─────────── */}
      <section className="bg-walnut-depth text-linen-100">
        <div className="container-patio py-20 md:py-28 text-center">
          <div className="tag text-timber-400 mb-6">Our Conviction</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-snug max-w-3xl mx-auto">
            A pergola is a structure, not furniture — footings below frost line, spans that
            carry the snow, and shade set where the sun actually falls.
          </p>
          <div className="mx-auto h-px w-16 bg-timber-600 my-10" aria-hidden />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
            {[
              { k: 'Built like a building', v: 'Concrete footings, engineered spans, thru-bolted connections. Kits blow over; ours get handed down.' },
              { k: 'Designed around the sun', v: 'We map how light crosses the yard through the seasons, then set rafters to shade the hours you keep.' },
              { k: 'One crew, start to finish', v: 'Design, footings, timber, and finish by the same hands — a family trade, twenty years on the Wasatch Front.' },
            ].map((c) => (
              <div key={c.k}>
                <h3 className="h-display text-xl mb-2.5 text-linen-50">{c.k}</h3>
                <p className="text-timber-300 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── THE MANNER OF WORKING ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">The Manner of Working</div>
          <h2 className="h-display text-4xl md:text-5xl text-timber-950">From a walk of the yard.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { k: 'The visit', v: 'We walk the yard together — sun angles, sight lines, and how you mean to live out there.' },
            { k: 'The drawings', v: 'Design, materials, and price set down in writing. Options priced apart, so you choose.' },
            { k: 'The build', v: 'Footings poured, posts set plumb, beams cut and fit on site. Permits handled where required.' },
            { k: 'The evening', v: 'Finish rubbed in, lanterns lit, site left clean. Then dinner outside, for a few decades.' },
          ].map((s, i) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="font-display text-3xl text-sienna-500 mb-3">{numerals[i]}.</div>
              <div className="h-display text-xl mb-2 text-timber-950">{s.k}</div>
              <p className="text-timber-600 text-[15px] leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── INVITATION ─────────── */}
      <section className="container-patio pb-4">
        <div className="border border-timber-200 bg-linen-100 px-8 py-16 md:py-20 text-center shadow-plate">
          <h2 className="h-display text-3xl md:text-4xl text-timber-950 mb-4">Begin with a walk of the yard.</h2>
          <p className="text-timber-600 max-w-xl mx-auto mb-9">
            A consultation costs nothing and obliges nothing — we look at the space, talk through
            timber, louvered, or pavilion, and leave you with a written proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/quote" className="btn-primary">Request a consultation</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-timber-700 hover:text-timber-950 text-[15px]">
              {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
