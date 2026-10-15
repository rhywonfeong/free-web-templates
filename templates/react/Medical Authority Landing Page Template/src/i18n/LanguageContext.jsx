import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const defaultLang = 'en';
const defaultValue = {
  lang: defaultLang,
  setLang: () => {},
  t: translations[defaultLang],
};

const LanguageContext = createContext(defaultValue);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const saved = window.localStorage.getItem('echo-lang');
      if (saved === 'en' || saved === 'de') return saved;
      const browser = window.navigator.language?.toLowerCase() || '';
      return browser.startsWith('de') ? 'de' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('echo-lang', lang);
        document.documentElement.lang = lang;
      } catch {
        // ignore storage errors
      }
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  // Fallback gracefully instead of throwing — prevents crashes if a
  // consumer renders outside the provider tree (e.g., during HMR or
  // when modules are loaded from different bundles).
  if (!ctx) {
    return defaultValue;
  }
  return ctx;
}