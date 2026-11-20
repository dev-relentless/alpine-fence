import Link from 'next/link';
import Photo from '@/components/Photo';
import Emblem from '@/components/Emblem';
import { BRAND } from '@/data/brand';
import { pergolaStyles } from '@/data/pergolas';
import { spaces } from '@/data/spaces';
import { listGalleryPhotos } from '@/lib/photos';

/**
 * Photo placement — see public/ats/README.md for the shot list.
 * Every /ats/*.jpg path renders a placeholder until the file exists.
 */

const numerals = ['I', 'II', 'III', 'IV'];

export default function HomePage() {
  const gallery = listGalleryPhotos();
  const preview = gallery.length
    ? gallery.slice(0, 6).map((p) => ({ src: p.src, alt: p.title, label: p.title, location: p.location }))
    : Array.from({ length: 6 }, (_, i) => ({
        src: `/ats/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Project photograph ${i + 1}`,
        label: `Gallery ${String(i + 1).padStart(2, '0')}`,
        location: undefined as string | undefined,
      }));

  return (
    <>
      {/* ─────────── HERO — full-bleed ─────────── */}
      <section className="relative">
        <div className="relative h-[90vh] min-h-[620px] max-h-[920px] w-full overlay-cinematic">
          <Photo
            src="/ats/hero.jpg"
            alt="Heavy-timber pergola over a stone patio at dusk"
            label="Hero — flagship pergola at dusk"
            priority
            quality={90}
            sizes="100vw"
            className="absolute inset-0"
          />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1" />
            <div className="container-site pb-16 md:pb-24">
              <div className="max-w-3xl">
                <div className="tag-brass mb-6">{BRAND.name} · {BRAND.tagline}</div>
                <h1 className="h-display text-bone-50 text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.0]">
                  Shade worth building<br className="hidden md:block" /> a life under.
                </h1>
                <div className="rule mt-8" aria-hidden />
                <p className="mt-8 text-bone-100/85 text-lg md:text-xl leading-relaxed max-w-xl">
                  Timber pergolas and complete outdoor spaces — pavilions, kitchens, fire, and
                  light — designed as one composition and built to outlast the house.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <Link href="/quote" className="btn-light">Start a project</Link>
                  <Link href="/gallery" className="text-bone-100/80 hover:text-bone-50 text-[15px]">
                    See the work &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ink-950 border-t border-ink-800">
          <div className="container-site py-4 flex flex-wrap justify-center gap-x-8 gap-y-2 tag !text-bone-100/55">
            <span>Flagship timber pergolas</span>
            <span className="max-sm:hidden">·</span>
            <span>Engineered for mountain snow</span>
            <span className="max-sm:hidden">·</span>
            <span>Building across the {BRAND.address.region}</span>
            <span className="max-sm:hidden">·</span>
            <span>Design-build, one crew</span>
          </div>
        </div>
      </section>

      {/* ─────────── STATEMENT ─────────── */}
      <section className="bg-bone-glow">
        <div className="container-prose py-24 md:py-32 text-center">
          <Emblem className="w-28 md:w-36 mx-auto mb-10" />
          <div className="tag mb-8">Premium Outdoor Spaces</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] text-ink-900">
            The best square footage you&rsquo;ll ever add is the kind without walls.
            We build it in timber — proportioned to the house, set to the sun,
            and finished to be inherited.
          </p>
        </div>
      </section>

      {/* ─────────── FLAGSHIP — the timber pergola ─────────── */}
      <section className="container-site pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Photo
              src="/ats/flagship.jpg"
              alt="Cedar pergola with oversized beams over an outdoor dining table"
              label="Flagship — timber pergola, wide"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="plate aspect-[16/11]"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="tag">The Flagship</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink-950 leading-[1.05]">The timber pergola.</h2>
            <p className="text-ink-600 leading-relaxed text-lg">
              Oversized cedar and fir, through-bolted connections, footings below frost line, and a
              rafter rhythm set to the hours you actually keep outside. Attached, freestanding, or
              heavy timber with pegged joinery — this is the structure the rest of the yard is
              organized around.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-ink-700 pt-2">
              {['Western red cedar & Doug fir', 'Engineered for snow load', 'Lighting wired inside the posts', 'Written proposal, options priced apart'].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2.5 h-px w-3.5 shrink-0 bg-brass-400" />{t}
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/pergolas" className="btn-primary">Explore pergolas</Link>
              <Link href="/quote" className="btn-ghost">Get a proposal</Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-20 md:mt-28">
          {pergolaStyles.map((p, i) => (
            <Link key={p.slug} href={`/pergolas#${p.slug}`} className="group block">
              <Photo
                src={p.photo}
                alt={p.title}
                label={`Plate ${numerals[i]} — ${p.title}`}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="plate aspect-[4/5] transition-transform duration-500 group-hover:-translate-y-1"
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="h-display text-2xl text-ink-950">{p.title}</h3>
                <span className="tag shrink-0">Plate {numerals[i]}</span>
              </div>
              <p className="mt-2 text-ink-600 text-[15px] leading-relaxed">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── THE WHOLE SPACE ─────────── */}
      <section className="bg-bone-100 border-y border-bone-200">
        <div className="container-site py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <div className="tag mb-4">Beyond the Pergola</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink-950 leading-[1.05]">Transform the whole space.</h2>
            <p className="mt-6 text-ink-600 text-lg leading-relaxed">
              A pergola is where it starts. The kitchen under it, the fire beside it, the screen
              behind it, and the light that makes it glow at nine o&rsquo;clock — all designed on
              one plan and built by one crew.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {spaces.map((s) => (
              <Link key={s.slug} href={`/outdoor-living#${s.slug}`} className="group block">
                <Photo
                  src={s.photo}
                  alt={s.title}
                  label={s.shortTitle}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="plate aspect-[4/3]"
                />
                <h3 className="h-display text-xl text-ink-950 mt-4 group-hover:text-cedar-700 transition-colors">{s.title}</h3>
                <p className="mt-1.5 text-ink-600 text-[14px] leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
            <Link href="/outdoor-living" className="flex flex-col justify-between bg-ink-950 text-bone-50 p-7 aspect-[4/3] sm:aspect-auto hover:bg-cedar-900 transition-colors">
              <div className="tag-brass">Outdoor Living</div>
              <div>
                <div className="h-display text-2xl leading-tight">See everything we build.</div>
                <div className="mt-3 text-bone-100/70 text-[14px]">The full scope, with details &rarr;</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── GALLERY PREVIEW ─────────── */}
      <section className="container-site py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag mb-4">Selected Work</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink-950 leading-[1.05]">Built, not rendered.</h2>
          </div>
          <Link href="/gallery" className="btn-ghost self-start md:self-auto">View the gallery</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {preview.map((p, i) => (
            <figure key={p.src} className={i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}>
              <Photo
                src={p.src}
                alt={p.alt}
                label={p.label}
                sizes={i === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                className={i === 0 ? 'plate aspect-[4/3] md:h-full md:aspect-auto' : 'plate aspect-[4/3]'}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ─────────── CONVICTION — image-backed ─────────── */}
      <section className="relative overflow-hidden bg-ink-950 text-bone-100">
        <Photo
          src="/ats/band.jpg"
          alt=""
          label="Dark band — pergola at night, lit"
          tone="dark"
          sizes="100vw"
          className="absolute inset-0 opacity-50"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-ink-950/85" />
        <div className="relative container-site py-28 md:py-40 text-center">
          <div className="tag-brass mb-7">What We Believe</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.18] max-w-3xl mx-auto text-bone-50">
            A pergola is a structure, not furniture. If it can&rsquo;t carry the snow, hold the
            light, and still look right in thirty years, we don&rsquo;t build it.
          </p>
          <div className="rule mx-auto my-12" aria-hidden />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
            {[
              { k: 'Engineered, every time', v: 'Spans sized to local snow load, posts footed below frost line, connections through-bolted. Stamped when it matters.' },
              { k: 'Designed to the sun', v: 'We map how light crosses the yard across the seasons, then set the rafters to shade the hours you keep.' },
              { k: 'One crew, one plan', v: 'Pergola, kitchen, fire, screens, and lighting on one drawing — built by the same hands from footing to fixture.' },
            ].map((c) => (
              <div key={c.k}>
                <h3 className="h-display text-xl mb-2.5 text-bone-50">{c.k}</h3>
                <p className="text-bone-100/70 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="container-site py-24 md:py-32">
        <div className="text-center mb-14">
          <div className="tag mb-4">How It Works</div>
          <h2 className="h-display text-4xl md:text-5xl text-ink-950">From a walk of the yard.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { k: 'The visit', v: 'We walk the space together — sun angles, sight lines, how you host, what the house wants.' },
            { k: 'The design', v: 'Drawings and 3D views, materials, and price in writing. Options priced apart so you choose.' },
            { k: 'The build', v: 'Footings poured, timber cut and fit, power run, finish applied. Permits and inspections handled.' },
            { k: 'The evening', v: 'Lights on, fire lit, site clean. Then dinner outside — for a few decades.' },
          ].map((s, i) => (
            <div key={s.k}>
              <div className="font-display text-3xl text-brass-500 mb-3">{numerals[i]}.</div>
              <div className="h-display text-xl mb-2 text-ink-950">{s.k}</div>
              <p className="text-ink-600 text-[15px] leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── WHERE WE BUILD ─────────── */}
      <section className="bg-bone-100 border-y border-bone-200">
        <div className="container-site py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="tag mb-4">Where We Build</div>
            <h2 className="h-display text-3xl md:text-4xl text-ink-950 leading-tight">Across the {BRAND.address.region}.</h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Headquartered on the {BRAND.address.headquarters}, with crews traveling throughout the
              region for the right projects. High-altitude sun, hard winters, and big views are
              what we design for.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
            {BRAND.address.states.map((s) => (
              <div key={s} className="flex items-center gap-3 text-ink-800 font-display text-xl">
                <span className="h-px w-5 bg-brass-400" />{s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CLOSER ─────────── */}
      <section className="container-site pt-24 md:pt-32 pb-4">
        <div className="relative overflow-hidden bg-ink-950 text-bone-50 px-8 py-20 md:py-28 text-center shadow-lift">
          <Photo
            src="/ats/closer.jpg"
            alt=""
            label="Closer — pavilion at blue hour"
            tone="dark"
            sizes="100vw"
            className="absolute inset-0 opacity-40"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-ink-950/40" />
          <div className="relative">
            <div className="tag-brass mb-5">{BRAND.tagline}</div>
            <h2 className="h-display text-4xl md:text-5xl mb-5">Let&rsquo;s build the room without walls.</h2>
            <p className="text-bone-100/75 max-w-xl mx-auto mb-10">
              A consultation costs nothing and obliges nothing — we look at the space, talk through
              what it could be, and leave you with a written proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/quote" className="btn-light">Start a project</Link>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-bone-100/80 hover:text-bone-50 text-[15px] tabular-nums">
                or call {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
