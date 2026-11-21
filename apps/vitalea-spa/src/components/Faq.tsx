'use client';

import { FAQS } from '@/data/faq';
import { LangProvider, useLang } from '@/components/LangContext';
import { ContactBand, Footer, Header } from '@/components/SiteChrome';

function FaqBody() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl text-plum sm:text-6xl">{t.faq.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{t.faq.sub}</p>
          <div className="mt-12 border-t border-blush-200">
            {FAQS.map((f, i) => (
              <details key={f.id} id={f.id} open={i === 0} className="group scroll-mt-24 border-b border-blush-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-plum transition hover:text-gold-700 [&::-webkit-details-marker]:hidden">
                  <h2 className="font-serif text-xl sm:text-2xl">{f.q[lang]}</h2>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-600/40 text-gold-700 transition duration-300 group-open:rotate-45 group-open:bg-gold-50"
                    aria-hidden
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-7 pr-12 text-lg leading-relaxed text-ink/75">{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

export function Faq() {
  return (
    <LangProvider>
      <Header />
      <FaqBody />
      <Footer />
    </LangProvider>
  );
}
