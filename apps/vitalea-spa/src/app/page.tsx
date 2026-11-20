import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice, type Service } from '@/data/services';
import { REVIEWS, RATING } from '@/data/reviews';
import { JsonLd } from '@/components/JsonLd';

const NAV = [
  ['#services', 'Services'],
  ['#couples', 'Couples'],
  ['#about', 'About'],
  ['#reviews', 'Reviews'],
  ['#visit', 'Visit'],
] as const;

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;
const telHref = `tel:${BRAND.phoneRaw}`;

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blush-200/60 bg-cream/85 backdrop-blur-md">
      <div className="container-site flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${BRAND.name} logo`}
            width={44}
            height={44}
            className="rounded-full shadow-card"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif text-xl tracking-wide text-plum">Vitalea</span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Spa &amp; Beauty
            </span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-plum lg:flex">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-gold-600">
              {label}
            </a>
          ))}
        </nav>
        <a href={telHref} className="btn-gold !px-5 !py-2.5">
          {BRAND.phone}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <Image
        src="/photos/couples-room.jpg"
        alt="The Vitalea treatment room — two massage tables beneath hanging garden florals"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum-deep/40 to-plum-deep/20"
        aria-hidden
      />
      <div className="container-site relative pb-20 pt-40 sm:pb-28">
        <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">
          <Stars className="h-3.5 w-3.5" />
          <span className="text-xs font-semibold tracking-wide text-white">
            {RATING.value} on {RATING.source}
          </span>
        </div>
        <h1
          className="fade-up mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          Step out of the noise.
          <br />
          <span className="italic text-gold-200">Sink into the hour.</span>
        </h1>
        <p
          className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          style={{ animationDelay: '0.2s' }}
        >
          A private wellness sanctuary in Draper, Utah — therapeutic massage, hydrofacials,
          lymphatic drainage, and reflexology, crafted around one guest (or one couple) at a time.
        </p>
        <p
          className="fade-up mt-4 font-serif text-lg italic text-gold-200"
          style={{ animationDelay: '0.3s' }}
        >
          {BRAND.tagline} — {BRAND.founder}
        </p>
        <div className="fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
          <a href={smsHref} className="btn-gold">
            Text to book
          </a>
          <a href={telHref} className="btn-outline-light">
            Call {BRAND.phone}
          </a>
        </div>
        <p
          className="fade-up mt-8 text-xs font-medium uppercase tracking-[0.25em] text-white/60"
          style={{ animationDelay: '0.5s' }}
        >
          By appointment only · {BRAND.address.street}, Draper
        </p>
      </div>
    </section>
  );
}

function Ribbon() {
  const items = [
    'Vitalea Spa & Beauty',
    'Tu Vitalidad es mi Inspiración',
    `${RATING.value} ★ on Google`,
    'One guest at a time',
    'Draper · Utah',
  ];
  const row = items.map((t, i) => (
    <span key={i} className="mx-8 inline-flex items-center gap-8">
      <span className="font-serif text-sm italic tracking-wide text-gold-200">{t}</span>
      <span className="text-gold-500" aria-hidden>
        ✦
      </span>
    </span>
  ));
  return (
    <div className="overflow-hidden border-y border-gold-800/40 bg-plum-deep py-3" aria-hidden>
      <div className="marquee-track flex w-max whitespace-nowrap">
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  );
}

function durationLabel(min: number) {
  return min === 60 ? '1 h' : min === 90 ? '1.5 h' : min === 120 ? '2 h' : `${min} min`;
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="relative flex flex-col rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      {s.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-card">
          Most booked
        </span>
      )}
      <h3 className="font-serif text-2xl text-plum">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{s.blurb}</p>
      <table className="mt-6 w-full text-sm">
        <thead>
          <tr className="text-left text-[0.65rem] uppercase tracking-[0.18em] text-gold-700">
            <th className="pb-2 font-semibold">Duration</th>
            <th className="pb-2 font-semibold">Solo</th>
            <th className="pb-2 font-semibold">Couple</th>
          </tr>
        </thead>
        <tbody>
          {s.durations.map((d) => (
            <tr key={d} className="border-t border-blush-100">
              <td className="py-2 text-ink/70">{durationLabel(d)}</td>
              <td className="py-2 font-semibold text-plum">${s.prices.her[d]}</td>
              <td className="py-2 text-ink/60">${s.prices.couple[d]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href={smsHref} className="btn-outline-dark mt-6 !py-2.5 text-center">
        Book {s.name} · from ${fromPrice(s)}
      </a>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">The menu</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
            Treatments &amp; pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Every session is one-on-one with {BRAND.founder}. Couples share the dedicated
            two-table suite — same hour, side by side.
          </p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Couples() {
  return (
    <section id="couples" className="bg-blush-100/70 py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/photos/couples-petals.jpg"
              alt="Two massage tables dressed with rose petals for a couples session"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden w-48 overflow-hidden rounded-3xl border-4 border-cream shadow-soft sm:block lg:w-56">
            <Image
              src="/photos/couples-date.jpg"
              alt="A couple in robes celebrating a spa date at Vitalea"
              width={448}
              height={597}
              className="object-cover"
            />
          </div>
        </div>
        <div className="pt-6 lg:pt-0">
          <p className="eyebrow">Couples &amp; celebrations</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
            Date night, side by side.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            The couples suite keeps two tables in one softly lit room — rose petals, warm robes,
            and the same unhurried hour, shared. Anniversaries, birthdays, girls&rsquo; days, or a
            long-overdue reset for two: tell us the occasion and the room will be ready for it.
          </p>
          <ul className="mt-6 space-y-3 text-ink/75">
            {[
              'Private two-table suite — never a shared hallway',
              'Rose-petal and celebration styling on request',
              'Every service on the menu is available as a couples session',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 text-gold-500" aria-hidden>
                  ✦
                </span>
                {line}
              </li>
            ))}
          </ul>
          <a href={smsHref} className="btn-gold mt-9">
            Plan a couples session
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const shots = [
    {
      src: '/photos/hot-stones.jpg',
      alt: 'Hot-stone massage under soft blue light',
      caption: 'Hot-stone ritual',
    },
    {
      src: '/photos/petals-massage.jpg',
      alt: 'Massage session with rose petals on the table',
      caption: 'Rose-petal details',
    },
    {
      src: '/photos/room-garlands.jpg',
      alt: 'Treatment room beneath hanging floral garlands',
      caption: 'The garden room',
    },
  ];
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The experience</p>
            <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
              Details you can feel.
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            Warm tables, quiet rooms, and a treatment adjusted to what your body says that day —
            not a laminated protocol.
          </p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-3">
          {shots.map((shot) => (
            <figure key={shot.src} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 font-serif text-lg italic text-plum">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-blush-100/70 py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
            Built around one pair of hands.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Vitalea is not a franchise and does not run on a timer. Founder {BRAND.founder} opened
            the studio in Draper to practice the way she believes bodywork should be done: one
            guest at a time, a real conversation before the first stroke, and a treatment adjusted
            to what your body says that day.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            More than six hundred Draper-area clients have made the studio part of their routine —
            from marathon recovery to post-surgical lymphatic care to a standing Friday unwind.
          </p>
          <p className="mt-6 font-serif text-xl italic text-gold-700">“{BRAND.tagline}”</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-plum/60">
            — {BRAND.founder}
          </p>
        </div>
        <div className="order-1 mx-auto w-full max-w-md lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft ring-4 ring-gold-200/60 ring-offset-4 ring-offset-blush-100">
            <Image
              src="/photos/karol.jpg"
              alt={`${BRAND.founder}, founder of ${BRAND.name}, beside the studio sign`}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [lead, ...rest] = REVIEWS;
  return (
    <section id="reviews" className="bg-plum-deep py-24 text-white">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow-light">In their words</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Guests keep coming back.</h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-gold-800/50 bg-plum px-5 py-3">
            <span className="font-serif text-3xl text-gold-300">{RATING.value}</span>
            <span>
              <Stars />
            <span className="mt-0.5 block text-xs text-white/60">
              {RATING.count} reviews on {RATING.source}
            </span>
            </span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <blockquote className="flex flex-col justify-between rounded-3xl bg-plum p-8 lg:row-span-2">
            <div>
              <Stars />
              <p className="mt-5 font-serif text-2xl leading-snug text-white/95">
                “{lead.quote}”
              </p>
            </div>
            <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Verified {lead.source} review
            </footer>
          </blockquote>
          {rest.map((r) => (
            <blockquote
              key={r.quote}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div>
                <Stars className="h-3.5 w-3.5" />
                <p className="mt-4 leading-relaxed text-white/85">“{r.quote}”</p>
              </div>
              <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300/80">
                Verified {r.source} review
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: '/photos/studio-sign.jpg', alt: 'The glowing Vitalea sign inside the studio', wide: true },
    { src: '/photos/girls-day.jpg', alt: 'Friends in robes celebrating a girls’ spa day' },
    { src: '/photos/robes-room.jpg', alt: 'Guests in robes in the treatment room' },
    { src: '/photos/robe-wine.jpg', alt: 'A guest relaxing in a robe after her session' },
    { src: '/photos/holiday-guest.jpg', alt: 'A guest enjoying a holiday-season visit' },
  ];
  return (
    <section className="py-24">
      <div className="container-site">
        <p className="eyebrow">Inside the studio</p>
        <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Moments at Vitalea</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {photos.map((p) => (
            <div
              key={p.src}
              className={`relative overflow-hidden rounded-3xl shadow-card ${
                p.wide ? 'col-span-2 aspect-[4/3]' : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const mapsQuery = encodeURIComponent(
    `${BRAND.name}, ${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.state} ${BRAND.address.zip}`,
  );
  return (
    <section id="visit" className="bg-blush-100/70 py-24">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Visit</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Find the studio</h2>
          <dl className="mt-9 space-y-7">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Address
              </dt>
              <dd className="mt-2 text-lg text-ink/80">
                {BRAND.address.street}
                <br />
                {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}
              </dd>
              <a
                className="mt-2 inline-block text-sm font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-800"
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions →
              </a>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Hours
              </dt>
              <dd className="mt-2 text-lg text-ink/80">
                Mon–Sat · 9am – 7pm
                <br />
                Sunday · by appointment
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Book
              </dt>
              <dd className="mt-2 text-lg text-ink/80">
                <a className="font-semibold text-plum hover:text-gold-700" href={telHref}>
                  {BRAND.phone}
                </a>
                <br />
                <a
                  className="text-ink/70 underline underline-offset-4 hover:text-gold-700"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
              </dd>
            </div>
          </dl>
          <a href={smsHref} className="btn-gold mt-9">
            Text to book
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <iframe
            title={`Map to ${BRAND.name}`}
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-plum-deep py-14 text-white">
      <div className="container-site flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt={`${BRAND.name} logo`}
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <p className="font-serif text-xl">{BRAND.name}</p>
            <p className="text-sm italic text-gold-300">{BRAND.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/70">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-gold-300">
              {label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-white/60">
          <p>
            {BRAND.address.street}
            <br />
            {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}
          </p>
          <a className="mt-2 inline-block font-semibold text-gold-300" href={telHref}>
            {BRAND.phone}
          </a>
        </div>
      </div>
      <div className="container-site mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND.name} · Serving {BRAND.areaServed.join(', ')}
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Ribbon />
        <Services />
        <Couples />
        <Experience />
        <About />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
