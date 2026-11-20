import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice, type Service } from '@/data/services';
import { JsonLd } from '@/components/JsonLd';

const NAV = [
  ['#services', 'Services'],
  ['#about', 'About'],
  ['#visit', 'Visit'],
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage-200/60 bg-cream/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-sage-800">
          {BRAND.shortName}
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-sage-800 sm:flex">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-sage-600">
              {label}
            </a>
          ))}
        </nav>
        <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary !px-5 !py-2">
          {BRAND.phone}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* PLACEHOLDER — swap for the client's own hero photo (see public/placeholders/README.md) */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-cream to-sage-200" aria-hidden />
      <div className="container-site relative py-24 sm:py-36">
        <p className="eyebrow">Wellness studio · Draper, Utah</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-sage-900 sm:text-6xl">
          One room. One hour. All yours.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/80">
          A private massage and wellness studio where you are never one of a
          crowd — therapeutic massage, hydrofacials, lymphatic drainage, and
          reflexology, by appointment only.
        </p>
        <p className="mt-3 font-serif italic text-sage-700">{BRAND.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary">
            Book your session
          </a>
          <a href="#services" className="btn-ghost">
            See the menu
          </a>
        </div>
      </div>
    </section>
  );
}

function durationLabel(min: number) {
  return min === 60 ? '1 h' : min === 90 ? '1.5 h' : min === 120 ? '2 h' : `${min} min`;
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="relative flex flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-sm">
      {s.popular && (
        <span className="absolute -top-3 right-5 rounded-full bg-sage-700 px-3 py-1 text-xs font-semibold text-cream">
          Most booked
        </span>
      )}
      <h3 className="font-serif text-2xl text-sage-900">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{s.blurb}</p>
      <table className="mt-5 w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-sage-600">
            <th className="pb-1 font-medium">Duration</th>
            <th className="pb-1 font-medium">Solo</th>
            <th className="pb-1 font-medium">Couple</th>
          </tr>
        </thead>
        <tbody>
          {s.durations.map((d) => (
            <tr key={d} className="border-t border-sage-100">
              <td className="py-1.5">{durationLabel(d)}</td>
              <td className="py-1.5 font-semibold text-sage-800">${s.prices.her[d]}</td>
              <td className="py-1.5 text-ink/70">${s.prices.couple[d]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost mt-5 !py-2 text-center">
        Book {s.name} · from ${fromPrice(s)}
      </a>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-site">
        <p className="eyebrow">The menu</p>
        <h2 className="mt-3 font-serif text-3xl text-sage-900 sm:text-4xl">Treatments &amp; pricing</h2>
        <p className="mt-3 max-w-xl text-ink/75">
          Every session is one-on-one with Karol. Couples share our dedicated
          two-table room — same hour, side by side.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-sage-50 py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-serif text-3xl text-sage-900 sm:text-4xl">
            Built around one pair of hands.
          </h2>
          <p className="mt-5 leading-relaxed text-ink/80">
            Vitalea is not a franchise and does not run on a timer. Founder
            {' '}{BRAND.founder} opened the studio in Draper to practice the way
            she believes bodywork should be done: one guest at a time, a real
            conversation before the first stroke, and a treatment adjusted to
            what your body says that day — not to a laminated protocol.
          </p>
          <p className="mt-4 leading-relaxed text-ink/80">
            More than six hundred Draper-area clients have made the studio part
            of their routine, from marathon recovery to post-surgical lymphatic
            care to a standing Friday unwind.
          </p>
        </div>
        {/* PLACEHOLDER — swap for the client's own studio/portrait photo */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-sage-300 bg-sage-100 text-sm text-sage-600">
          Studio photo placeholder
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
    <section id="visit" className="py-20">
      <div className="container-site">
        <p className="eyebrow">Visit</p>
        <h2 className="mt-3 font-serif text-3xl text-sage-900 sm:text-4xl">Find the studio</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600">Address</h3>
            <p className="mt-2 text-ink/80">
              {BRAND.address.street}
              <br />
              {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}
            </p>
            <a
              className="mt-2 inline-block text-sm font-semibold text-sage-700 underline"
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600">Hours</h3>
            <p className="mt-2 text-ink/80">
              Mon–Sat · 9am – 7pm
              <br />
              Sunday · by appointment
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600">Book</h3>
            <p className="mt-2 text-ink/80">
              <a className="font-semibold text-sage-700" href={`tel:${BRAND.phoneRaw}`}>
                {BRAND.phone}
              </a>
              <br />
              <a className="text-sage-700 underline" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>
            </p>
            <a
              href={`sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`}
              className="btn-primary mt-4"
            >
              Text to book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sage-200 bg-sage-50 py-10">
      <div className="container-site flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-lg text-sage-800">{BRAND.name}</p>
          <p className="text-sm italic text-sage-600">{BRAND.tagline}</p>
        </div>
        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} {BRAND.name} · {BRAND.address.locality}, {BRAND.address.state}
        </p>
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
        <Services />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
