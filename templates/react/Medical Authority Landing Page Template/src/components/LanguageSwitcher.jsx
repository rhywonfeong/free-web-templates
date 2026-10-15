import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import clsx from 'clsx';

export default function LanguageSwitcher({ variant = 'header' }) {
  const { lang, setLang } = useLang();

  return (
    <div className={clsx(
      "inline-flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase select-none",
      variant === 'header' ? "border border-gray-300" : "border border-gray-700"
    )}>
      <button
        onClick={() => setLang('en')}
        className={clsx(
          "px-2.5 py-1 transition-colors outline-none",
          lang === 'en' 
            ? (variant === 'header' ? "bg-gray-900 text-white" : "bg-white text-gray-900")
            : (variant === 'header' ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white")
        )}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('de')}
        className={clsx(
          "px-2.5 py-1 transition-colors outline-none",
          lang === 'de'
            ? (variant === 'header' ? "bg-gray-900 text-white" : "bg-white text-gray-900")
            : (variant === 'header' ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white")
        )}
        aria-label="Deutsch"
      >
        DE
      </button>
    </div>
  );
}