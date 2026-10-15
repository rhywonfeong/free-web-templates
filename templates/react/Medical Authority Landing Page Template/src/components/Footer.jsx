import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="w-full mt-auto border-t border-gray-200 bg-[#fbfbfb] relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4 outline-none group w-max">
              <div className="w-6 h-6 bg-transparent border border-gray-900 flex items-center justify-center text-gray-900 transition-transform group-hover:scale-90 duration-300">
                <iconify-icon icon="solar:soundwave-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase leading-none mb-1">{t.brand.name}<sup className="ml-0.5 text-[8px] tracking-normal">™</sup></span>
                <span className="text-[10px] text-gray-400 tracking-[0.25em] uppercase leading-none">{t.brand.tag}</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-medium mt-2">
              {t.footer.tagline}
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">{t.footer.index}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/method" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max">{t.footer.method}</Link>
              <Link to="/outcomes" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max">{t.footer.outcomes}</Link>
              <Link to="/cases" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max">{t.footer.cases}</Link>
              <Link to="/engage" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max">{t.footer.engage}</Link>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">{t.footer.contact}</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:echo@primepublicmedia.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max">
                echo@primepublicmedia.com
              </a>
              <span className="text-sm text-gray-500">Berlin · Zürich · London</span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-full min-h-[120px]">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">{t.footer.status}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                {t.footer.operational}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs tracking-widest uppercase text-gray-400">
          <span className="text-gray-700 font-semibold">{t.footer.company}</span>
          <span>&copy; {currentYear} · {t.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}