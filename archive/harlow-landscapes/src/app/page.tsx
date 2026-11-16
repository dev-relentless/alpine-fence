import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';

/**
 * Photo placement — see public/harlow/plates/README.md for the shot list.
 * Every /harlow/plates/*.jpg path below is a placeholder to be replaced with
 * a final photograph. Sizes and framing are documented in the shot list.
 */

const numerals = ['I', 'II', 'III', 'IV'];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO — cinematic, full-bleed ─────────── */}
      <section className="relative">
        <div className="relative h-[92vh] min-h-[640px] max-h-[900px] w-full overflow-hidden overlay-cinematic">
          <Image
            src="/harlow/plates/hero.jpg"
            alt="Estate landscape at dusk on the Wasatch Front"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1" />
            <div className="container-wide pb-16 md:pb-20">
              <div className="max-w-3xl">
                <div className="tag-bronze mb-6">Harlow Landscapes · Wasatch Front, Utah</div>
                <h1 className="font-display font-medium tracking-display text-ivory-50 text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.02]">
                  Landscapes composed with intent,<br className="hidden md:block" /> built to be inherited.
                </h1>
                <div className="mt-8 h-px w-16 bg-bronze-400/80" aria-hidden />
                <p className="mt-8 text-ivory-100/85 text-lg md:text-xl leading-relaxed max-w-xl font-body">
                  A design-build firm holding a limited number of estate properties each
                  year — drawn against the architecture, built by our own crews, kept by
                  the people who built them.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <Link href="/inquire" className="btn-ivory-outline">Begin a project</Link>
                  <a href={`tel:${BRAND.phoneRaw}`} className="text-ivory-100/80 hover:text-ivory-50 text-[15px] tracking-wide">
                    or telephone {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-950 text-ivory-100/60 border-t border-stone-800">
          <div className="container-wide py-4 text-center tag !text-ivory-100/50">
            By appointment · Licensed &amp; insured · A Spravek company
          </div>
        </div>
      </section>

      {/* ─────────── MANIFESTO — title page ─────────── */}
      <section className="bg-ivory-soft">
        <div className="container-editorial py-24 md:py-32 text-center">
          <div className="tag mb-8">A Note From the Firm</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] max-w-3xl mx-auto text-stone-900">
            A landscape is a place a family lives in for a generation.
            It deserves the attention of one firm across decades,
            not a different number for every season.
          </p>
          <div className="rule-bronze mt-10" aria-hidden />
          <p className="mt-8 text-stone-600 text-[15px] italic max-w-md mx-auto">
            — The Principal
          </p>
        </div>
      </section>

      {/* ─────────── PLATES — three tall portraits ─────────── */}
      <section className="container-wide pb-8 md:pb-12">
        <div className="text-center mb-14 md:mb-16">
          <div className="tag mb-4">Selected Work</div>
          <h2 className="h-display text-4xl md:text-5xl text-stone-900">A portrait of the practice.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              src: '/harlow/plates/plate-01.jpg',
              alt: 'Meadow entry, Park City',
              plate: 'Plate I',
              title: 'Meadow Entry',
              locale: 'Park City',
            },
            {
              src: '/harlow/plates/plate-02.jpg',
              alt: 'Stone courtyard, Holladay',
              plate: 'Plate II',
              title: 'Stone Courtyard',
              locale: 'Holladay',
            },
            {
              src: '/harlow/plates/plate-03.jpg',
              alt: 'Bench residence, Alpine',
              plate: 'Plate III',
              title: 'Bench Residence',
              locale: 'Alpine',
            },
          ].map((p) => (
            <figure key={p.plate}>
              <div className="plate relative aspect-[4/5] bg-stone-100">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between text-stone-700">
                <span className="tag !text-stone-500">{p.plate}</span>
                <span className="h-display text-lg text-stone-900">{p.title}</span>
                <span className="tag !text-stone-500">{p.locale}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/portfolio" className="btn-ghost">View the portfolio</Link>
        </div>
      </section>

      {/* ─────────── DOUBLE-PLATE SPREAD I ─────────── */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <figure>
              <div className="plate relative aspect-[16/11] bg-stone-100">
                <Image
                  src="/harlow/plates/plate-wide-01.jpg"
                  alt="Approach drive lined with mature planting at dusk"
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="tag mt-4 text-stone-500">Plate IV — Approach drive, evening light</figcaption>
            </figure>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="tag mb-4">The Discipline</div>
            <h2 className="h-display text-4xl md:text-5xl text-stone-900 leading-[1.1]">
              One firm.<br />Every layer of the landscape.
            </h2>
            <div className="my-8 h-px w-16 bg-bronze-400/70" aria-hidden />
            <div className="space-y-6">
              {[
                { k: 'Design', v: 'Site analysis, master planning, and construction documents — drawn against the architecture, phased for the seasons ahead.' },
                { k: 'Build', v: 'Earthwork, masonry, hardscape, planting, irrigation, and lighting — installed by our own crews. Nothing brokered. Nothing handed off.' },
                { k: 'Steward', v: 'Ongoing care of the landscapes we build, by the people who built them. The firm doesn\u2019t leave when the truck does.' },
              ].map((c) => (
                <div key={c.k} className="border-t border-stone-200 pt-5">
                  <h3 className="h-display text-xl text-stone-900 mb-1.5">{c.k}</h3>
                  <p className="text-stone-600 text-[15px] leading-relaxed">{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CONVICTION — cinematic dark, image-backed ─────────── */}
      <section className="relative">
        <div className="relative min-h-[560px] w-full overflow-hidden overlay-cinematic">
          <Image
            src="/harlow/plates/plate-dark-01.jpg"
            alt="Garden at night, lit under mature planting"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 container-editorial py-28 md:py-36 text-center">
            <div className="tag-bronze mb-6">The Conviction</div>
            <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] max-w-3xl mx-auto text-ivory-50">
              A property looks its best when someone is paying attention —
              year after year, quietly, from the inside.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-bronze-400/70" aria-hidden />
            <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
              {[
                { k: 'Drawn against the house', v: 'The landscape has to answer to the architecture as well as to the land. We begin on the drawing board, not in a sales meeting.' },
                { k: 'Built by our own crews', v: 'Designers, masons, planters, and lighting techs on our payroll. One firm, one accountability line, from earthwork to finish.' },
                { k: 'Kept, not maintained', v: 'The firm returns year after year — pruning, tuning, and quietly refining. Never a different number for every season.' },
              ].map((c) => (
                <div key={c.k}>
                  <h3 className="h-display text-xl mb-2.5 text-ivory-50">{c.k}</h3>
                  <p className="text-ivory-100/75 text-[15px] leading-relaxed">{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── DOUBLE-PLATE SPREAD II — flipped ─────────── */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="tag mb-4">The Manner of Working</div>
            <h2 className="h-display text-4xl md:text-5xl text-stone-900 leading-[1.1]">
              From a walk of the property.
            </h2>
            <div className="my-8 h-px w-16 bg-bronze-400/70" aria-hidden />
            <p className="text-stone-600 leading-relaxed">
              The first conversation is unhurried. A site visit, a walk of the yard, and a
              read of how the family means to live in the place. From there, drawings,
              materials, and price — in writing, before any earthwork begins.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                { k: 'Consult', v: 'A walk of the property.' },
                { k: 'Design', v: 'Plans, materials, phasing.' },
                { k: 'Build', v: 'Our own crews only.' },
                { k: 'Care', v: 'Seasonal stewardship.' },
              ].map((s, i) => (
                <div key={s.k}>
                  <div className="font-display text-2xl text-bronze-500 mb-1">{numerals[i]}.</div>
                  <div className="h-display text-lg text-stone-900">{s.k}</div>
                  <p className="text-stone-600 text-[14px] leading-relaxed">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/process" className="btn-ghost">The full process</Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <figure>
              <div className="plate relative aspect-[16/11] bg-stone-100">
                <Image
                  src="/harlow/plates/plate-wide-02.jpg"
                  alt="Stonework and mature planting at a private estate"
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="tag mt-4 text-stone-500">Plate V — Stone terrace, west light</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ─────────── FOR WHOM — three tall portraits with imagery ─────────── */}
      <section className="bg-ivory-100 border-y border-stone-200">
        <div className="container-wide py-24 md:py-32">
          <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
            <div className="tag mb-4">For Whom</div>
            <h2 className="h-display text-4xl md:text-5xl text-stone-900">A small number of properties, each year.</h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              The firm keeps a short list. Inquiries are read by the principal and answered
              personally, usually within a business day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                src: '/harlow/plates/plate-04.jpg',
                alt: 'Architecturally-significant home with landscape',
                k: 'Architecturally-significant homes',
                v: 'Where the landscape has to answer to architecture as well as to the land.',
              },
              {
                src: '/harlow/plates/plate-05.jpg',
                alt: 'Estate approach with mature planting',
                k: 'Estate properties & private compounds',
                v: 'Long-form sites: drives, courts, terraces, water, gardens, and the stewardship that follows.',
              },
              {
                src: '/harlow/plates/plate-06.jpg',
                alt: 'Mature private garden held over decades',
                k: 'Owners who plan to stay',
                v: 'Clients who want one firm holding the property across decades — not a different number for every season.',
              },
            ].map((c) => (
              <div key={c.k}>
                <div className="plate relative aspect-[3/4] bg-stone-100">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    quality={88}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-6 border-t border-stone-300 mt-6">
                  <h3 className="h-display text-xl text-stone-900 mb-2">{c.k}</h3>
                  <p className="text-stone-600 text-[15px] leading-relaxed">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CLOSER — dusk approach, quiet invitation ─────────── */}
      <section className="relative">
        <div className="relative min-h-[520px] w-full overflow-hidden overlay-cinematic-soft">
          <Image
            src="/harlow/plates/plate-closer.jpg"
            alt="Estate at dusk, warm interior light"
            fill
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 container-editorial py-28 md:py-36 text-center">
            <div className="tag-bronze mb-6">The Invitation</div>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl text-ivory-50 leading-[1.1] max-w-3xl mx-auto">
              Begin with a walk of the property.
            </h2>
            <div className="mx-auto mt-8 h-px w-16 bg-bronze-400/70" aria-hidden />
            <p className="mt-8 text-ivory-100/85 max-w-xl mx-auto leading-relaxed">
              Tell us the site, the architecture, and what the property is meant to
              become. We&rsquo;ll write back within a business day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/inquire" className="btn-ivory-outline">Begin a project</Link>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-ivory-100/80 hover:text-ivory-50 text-[15px]">
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

