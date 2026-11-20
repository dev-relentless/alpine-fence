'use client';

import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice, type Service } from '@/data/services';
import { REVIEWS, RATING } from '@/data/reviews';
import { SERVICES_ES, REVIEWS_ES } from '@/data/i18n';
import { LangProvider, useLang } from '@/components/LangContext';
import { Footer, Header, telHref, useSmsHref } from '@/components/SiteChrome';

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

function Hero() {
  const { t } = useLang();
  const smsHref = useSmsHref();
  return (
    <section className="relative isolate flex flex-1 items-start overflow-hidden">
      <Image
        src="/photos/couples-room.jpg"
        alt="The Vitalea treatment room — two massage tables beneath hanging garden florals"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-plum-deep/85 via-plum-deep/55 to-plum-deep/25"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-plum-deep/80 to-transparent"
        aria-hidden
      />
      <div className="container-site relative pb-[clamp(2.5rem,6svh,4rem)] pt-[clamp(2rem,8svh,5rem)]">
        <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">
          <Stars className="h-3.5 w-3.5" />
          <span className="text-xs font-semibold tracking-wide text-white">
            {RATING.value} {t.hero.ratingPill}
          </span>
        </div>
        <h1
          className="fade-up mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.05] text-white sm:mt-6 sm:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.h1a}
          <br />
          <span className="italic text-gold-200">{t.hero.h1b}</span>
        </h1>
        <p
          className="fade-up mt-5 max-w-xl text-base/relaxed text-white/85 sm:mt-6 sm:text-lg/relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.sub}
        </p>
        <p
          className="fade-up mt-4 font-serif text-lg italic text-gold-200"
          style={{ animationDelay: '0.3s' }}
        >
          {BRAND.tagline} — {BRAND.founder}
        </p>
        <div className="fade-up mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4" style={{ animationDelay: '0.4s' }}>
          <a href={smsHref} className="btn-gold max-sm:!px-5">
            {t.hero.ctaText}
          </a>
          <a href={telHref} className="btn-outline-light max-sm:!px-5">
            {t.hero.ctaCall} {BRAND.phone}
          </a>
        </div>
        <p
          className="fade-up mt-6 text-xs font-medium uppercase tracking-[0.25em] text-white/60 sm:mt-8"
          style={{ animationDelay: '0.5s' }}
        >
          {t.hero.note} · {BRAND.address.street}, Draper
        </p>
      </div>
    </section>
  );
}

function Ribbon() {
  const { t } = useLang();
  // Each half repeats the phrases so it outspans wide screens and the loop never shows a gap.
  const row = [...t.ribbon, ...t.ribbon, ...t.ribbon].map((text, i) => (
    <span key={i} className="mx-8 inline-flex items-center gap-8">
      <span className="font-serif text-sm italic tracking-wide text-gold-200">{text}</span>
      <span className="text-gold-500" aria-hidden>
        ✦
      </span>
    </span>
  ));
  return (
    <div className="border-y border-gold-800/40 bg-plum-deep py-3" aria-hidden>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex w-max whitespace-nowrap">
          <div className="flex">{row}</div>
          <div className="flex">{row}</div>
        </div>
      </div>
    </div>
  );
}

function durationLabel(min: number) {
  return min === 60 ? '1 h' : min === 90 ? '1.5 h' : min === 120 ? '2 h' : `${min} min`;
}

function ServiceCard({ s }: { s: Service }) {
  const { lang, t } = useLang();
  const smsHref = useSmsHref();
  const es = SERVICES_ES[s.id];
  const name = lang === 'es' && es ? es.name : s.name;
  const blurb = lang === 'es' && es ? es.blurb : s.blurb;
  return (
    <article className="relative flex flex-col rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      {s.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-card">
          {t.services.mostBooked}
        </span>
      )}
      <h3 className="font-serif text-2xl text-plum">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{blurb}</p>
      <table className="mt-6 w-full text-sm">
        <thead>
          <tr className="text-left text-[0.65rem] uppercase tracking-[0.18em] text-gold-700">
            <th className="pb-2 font-semibold">{t.services.duration}</th>
            <th className="pb-2 font-semibold">{t.services.solo}</th>
            <th className="pb-2 font-semibold">{t.services.couple}</th>
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
        {t.services.book} {name} · {t.services.from} ${fromPrice(s)}
      </a>
    </article>
  );
}

function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-24">
      <div className="container-site reveal">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.services.h2}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{t.services.sub}</p>
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
  const { t } = useLang();
  const smsHref = useSmsHref();
  return (
    <section id="couples" className="bg-blush-100/70 py-24">
      <div className="container-site reveal grid items-center gap-12 lg:grid-cols-2">
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
          <p className="eyebrow">{t.couples.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.couples.h2}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{t.couples.body}</p>
          <ul className="mt-6 space-y-3 text-ink/75">
            {t.couples.bullets.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 text-gold-500" aria-hidden>
                  ✦
                </span>
                {line}
              </li>
            ))}
          </ul>
          <a href={smsHref} className="btn-gold mt-9">
            {t.couples.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLang();
  const shots = [
    { src: '/photos/hot-stones.jpg', alt: 'Hot-stone massage under soft blue light' },
    { src: '/photos/petals-massage.jpg', alt: 'Massage session with rose petals on the table' },
    { src: '/photos/room-garlands.jpg', alt: 'Treatment room beneath hanging floral garlands' },
  ];
  return (
    <section className="py-24">
      <div className="container-site reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.experience.h2}</h2>
          </div>
          <p className="max-w-md text-ink/70">{t.experience.sub}</p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-3">
          {shots.map((shot, i) => (
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
                {t.experience.captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-blush-100/70 py-24">
      <div className="container-site reveal grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.about.h2}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">{t.about.p2}</p>
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
  const { lang, t } = useLang();
  const roleEs = (role: string) =>
    role
      .replace('Local Guide', 'Guía local')
      .replace('reviews', 'reseñas')
      .replace('translated', 'traducida');
  const quotes = REVIEWS.map((r, i) => ({
    ...r,
    quote: lang === 'es' ? REVIEWS_ES[i] ?? r.quote : r.quote,
    role: lang === 'es' ? roleEs(r.role) : r.role,
  }));
  const [lead, ...rest] = quotes;
  return (
    <section id="reviews" className="bg-plum-deep py-24 text-white">
      <div className="container-site reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow-light">{t.reviews.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{t.reviews.h2}</h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-gold-800/50 bg-plum px-5 py-3">
            <span className="font-serif text-3xl text-gold-300">{RATING.value}</span>
            <span>
              <Stars />
              <span className="mt-0.5 block text-xs text-white/60">
                {RATING.count} {t.reviews.badge}
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
            <footer className="mt-6">
              <p className="font-semibold text-gold-300">{lead.name}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-white/50">
                {lead.role} · {t.reviews.via}
              </p>
            </footer>
          </blockquote>
          {rest.map((r) => (
            <blockquote
              key={r.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div>
                <Stars className="h-3.5 w-3.5" />
                <p className="mt-4 leading-relaxed text-white/85">“{r.quote}”</p>
              </div>
              <footer className="mt-5">
                <p className="text-sm font-semibold text-gold-300/90">{r.name}</p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.15em] text-white/45">
                  {r.role} · {t.reviews.via}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const photos = [
    { src: '/photos/studio-sign.jpg', alt: 'The glowing Vitalea sign inside the studio', wide: true },
    { src: '/photos/girls-day.jpg', alt: 'Friends in robes celebrating a girls’ spa day' },
    { src: '/photos/robes-room.jpg', alt: 'Guests in robes in the treatment room' },
    { src: '/photos/robe-wine.jpg', alt: 'A guest relaxing in a robe after her session' },
    { src: '/photos/holiday-guest.jpg', alt: 'A guest enjoying a holiday-season visit' },
  ];
  return (
    <section className="py-24">
      <div className="container-site reveal">
        <p className="eyebrow">{t.gallery.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.gallery.h2}</h2>
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
  const { t } = useLang();
  const smsHref = useSmsHref();
  const mapsQuery = encodeURIComponent(
    `${BRAND.name}, ${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.state} ${BRAND.address.zip}`,
  );
  return (
    <section id="visit" className="bg-blush-100/70 py-24">
      <div className="container-site reveal grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{t.visit.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{t.visit.h2}</h2>
          <dl className="mt-9 space-y-7">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                {t.visit.address}
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
                {t.visit.directions}
              </a>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                {t.visit.hoursLabel}
              </dt>
              <dd className="mt-2 text-lg text-ink/80">
                {t.visit.hours1}
                <br />
                {t.visit.hours2}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                {t.visit.book}
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
            {t.visit.cta}
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

export function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        {/* Hero + ribbon share the first screen below the header (4.5rem + 1px border) */}
        <div className="flex min-h-[min(100svh_-_4.5rem_-_1px,50rem)] flex-col">
          <Hero />
          <Ribbon />
        </div>
        <Services />
        <Couples />
        <Experience />
        <About />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </LangProvider>
  );
}
