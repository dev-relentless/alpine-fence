'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { STRINGS, type Lang, type Strings } from '@/data/i18n';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'vitalea-lang';

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  // Persist only on explicit user choice so the mount effect never clobbers storage.
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: STRINGS[lang] as Strings }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}

/** EN / ES pill slider. `tone` adapts it to light or dark surfaces. */
export function LangToggle({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { lang, setLang } = useLang();
  const isEs = lang === 'es';
  const border = tone === 'light' ? 'border-gold-600/40' : 'border-white/30';
  const idle = tone === 'light' ? 'text-plum/60' : 'text-white/60';
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEs}
      aria-label={isEs ? 'Cambiar a inglés' : 'Switch to Spanish'}
      onClick={() => setLang(isEs ? 'en' : 'es')}
      className={`relative inline-flex h-9 w-[5.5rem] shrink-0 items-center rounded-full border ${border} bg-white/60 text-xs font-bold tracking-wide backdrop-blur transition`}
    >
      <span
        className={`absolute top-0.5 h-[1.9rem] w-[2.55rem] rounded-full bg-gradient-to-b from-gold-400 to-gold-600 shadow-card transition-transform duration-300 ${
          isEs ? 'translate-x-[2.6rem]' : 'translate-x-0.5'
        }`}
        aria-hidden
      />
      <span className={`relative z-10 w-1/2 text-center transition ${isEs ? idle : 'text-white'}`}>
        EN
      </span>
      <span className={`relative z-10 w-1/2 text-center transition ${isEs ? 'text-white' : idle}`}>
        ES
      </span>
    </button>
  );
}
