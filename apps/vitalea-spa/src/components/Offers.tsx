'use client';

import Image from 'next/image';
import { GIFT_PROMO_ACTIVE, MEMBERSHIP, PACKAGES, ADD_ONS } from '@/data/offers';
import { SERVICES, durationLabel, type PartyKey } from '@/data/services';
import { SERVICES_ES, type OfferKey } from '@/data/i18n';
import { LangProvider, useLang } from '@/components/LangContext';
import { ContactBand, Footer, Header, useOfferCta } from '@/components/SiteChrome';

function Intro({
  offer,
  image,
  alt,
  children,
}: {
  offer: OfferKey;
  image: string;
  alt: string;
  children?: React.ReactNode;
}) {
  const { t } = useLang();
  const cta = useOfferCta(offer);
  const s = t[offer];
  return (
    <section className="py-16 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{s.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl text-plum sm:text-6xl">{s.h1}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{s.sub}</p>
          {children}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={cta.href} className="btn-gold">
              {cta.label}
            </a>
            {/* Gift cards can be sold by text before the link exists; the other offers are not priced yet */}
            {!cta.live && offer !== 'giftCards' && (
              <span className="rounded-full border border-gold-600/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                {t.cta.comingSoon}
              </span>
            )}
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-soft">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Price({ value }: { value: number | null }) {
  return value === null ? null : <p className="mb-3 font-serif text-4xl text-plum">${value}</p>;
}

const GIFT_IDEAS: { id: string; party: PartyKey; minutes: number }[] = [
  { id: 'vip', party: 'her', minutes: 60 },
  { id: 'vip', party: 'couple', minutes: 60 },
  { id: 'hydrafacial', party: 'her', minutes: 60 },
  { id: 'lymphatic', party: 'her', minutes: 60 },
];

function GiftCardsBody() {
  const { lang, t } = useLang();
  const { live } = useOfferCta('giftCards');
  const g = t.giftCards;
  const points = live ? [...g.points, g.emailed] : g.points;
  return (
    <main>
      <Intro
        offer="giftCards"
        image="/photos/couples-petals.jpg"
        alt="Two massage tables dressed with rose petals for a couples session"
      >
        {GIFT_PROMO_ACTIVE && (
          <div className="mt-7 max-w-xl rounded-2xl border border-gold-300 bg-gold-50 p-5">
            <p className="eyebrow">{g.promoLabel}</p>
            <p className="mt-2 leading-relaxed text-ink/80">{g.promo}</p>
          </div>
        )}
      </Intro>
      <section className="bg-blush-100/70 py-24">
        <div className="container-site reveal">
          <p className="eyebrow">{g.ideasEyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{g.ideasH2}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{g.ideasSub}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GIFT_IDEAS.map(({ id, party, minutes }) => {
              const s = SERVICES.find((x) => x.id === id)!;
              const es = SERVICES_ES[id];
              return (
                <article key={`${id}-${party}`} className="rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card">
                  <Price value={s.prices[party][minutes]} />
                  <h3 className="font-serif text-xl text-plum">{lang === 'es' && es ? es.name : s.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">
                    {durationLabel(minutes)} · {party === 'couple' ? t.services.couple : t.services.solo}
                  </p>
                </article>
              );
            })}
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-ink/75 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {points.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-0.5 text-gold-500" aria-hidden>
                  ✦
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

function MembershipBody() {
  const { t } = useLang();
  const m = t.membership;
  const singleSession = SERVICES.find((s) => s.id === 'vip')!.prices.her[60];
  return (
    <main>
      <Intro
        offer="membership"
        image="/photos/petals-massage.jpg"
        alt="Massage session with rose petals on the table"
      >
        <div className="mt-7">
          {MEMBERSHIP.monthlyPrice !== null && (
            <p className="flex items-baseline gap-2">
              <span className="font-serif text-5xl text-plum">${MEMBERSHIP.monthlyPrice}</span>
              <span className="text-ink/60">{m.perMonth}</span>
            </p>
          )}
          <p className="mt-2 text-sm text-ink/60">{m.below.replace('{price}', `$${singleSession}`)}</p>
        </div>
      </Intro>
      <section className="bg-blush-100/70 py-24">
        <div className="container-site reveal">
          <p className="eyebrow">{m.includesEyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{m.includesH2}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {m.perks.map((perk) => (
              <article key={perk.title} className="rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card">
                <h3 className="font-serif text-2xl text-plum">{perk.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{perk.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

function PackagesBody() {
  const { t } = useLang();
  const p = t.packages;
  return (
    <main>
      <Intro offer="packages" image="/photos/hot-stones.jpg" alt="Hot-stone massage under soft blue light" />
      <section className="bg-blush-100/70 py-24">
        <div className="container-site reveal">
          <p className="eyebrow">{p.packsEyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{p.packsH2}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PACKAGES.map(({ sessions, price }) => (
              <article key={sessions} className="rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card">
                <Price value={price} />
                <h3 className="font-serif text-2xl text-plum">{p.packName.replace('{n}', String(sessions))}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{p.packBody.replace('{n}', String(sessions))}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-site reveal">
          <p className="eyebrow">{p.addOnsEyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">{p.addOnsH2}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{p.addOnsSub}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ADD_ONS.map(({ id, price }) => (
              <article key={id} className="rounded-3xl border border-blush-200/70 bg-white p-7 shadow-card">
                <Price value={price} />
                <h3 className="font-serif text-2xl text-plum">{p.addOns[id].name}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{p.addOns[id].body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Header />
      {children}
      <Footer />
    </LangProvider>
  );
}

export function GiftCards() {
  return (
    <Page>
      <GiftCardsBody />
    </Page>
  );
}

export function Membership() {
  return (
    <Page>
      <MembershipBody />
    </Page>
  );
}

export function Packages() {
  return (
    <Page>
      <PackagesBody />
    </Page>
  );
}
