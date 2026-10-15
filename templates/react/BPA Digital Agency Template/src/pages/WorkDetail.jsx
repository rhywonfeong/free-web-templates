import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function WorkDetail() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link to="/work" className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Zpět na projekty
        </Link>

        <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">
          NovaPay: Redefinice finanční aplikace.
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-neutral-900 mb-12">
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Klient</div>
            <div className="text-sm text-white">NovaPay s.r.o.</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Služby</div>
            <div className="text-sm text-white">UX/UI, Vývoj</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Rok</div>
            <div className="text-sm text-white">2023</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Web</div>
            <div className="text-sm text-[#ccff00] cursor-pointer hover:underline">novapay.cz</div>
          </div>
        </div>

        <div className="aspect-video bg-neutral-900 mb-12 rounded-3xl"></div>

        <div className="prose prose-invert prose-neutral max-w-none">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-8">
            Výzva
          </h2>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            Klient k nám přišel se zastaralou aplikací, která trpěla vysokou
            mírou opuštění při registraci (drop-off rate). Uživatelé si
            stěžovali na nepřehledné rozhraní a pomalé načítání. Úkolem bylo
            od základu navrhnout novou flow a zmodernizovat vizuální styl tak,
            aby působil důvěryhodně a moderně.
          </p>

          <h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-12">
            Naše řešení
          </h2>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            Provedli jsme rozsáhlý uživatelský výzkum a navrhli zcela novou
            informační architekturu. Kladli jsme důraz na zjednodušení
            registračního procesu na pouhé 3 kroky. Vizuální jazyk jsme
            postavili na čistých liniích, vysokém kontrastu a responzivní
            typografii.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="aspect-square bg-neutral-900 rounded-3xl"></div>
            <div className="aspect-square bg-neutral-900 rounded-3xl"></div>
          </div>

          <h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-12">
            Výsledky
          </h2>
          <ul className="text-neutral-400 space-y-2 mb-16 list-none pl-0">
            <li className="flex gap-2">
              <span className="text-[#ccff00]">→</span>
              Snížení drop-off rate o 45%
            </li>
            <li className="flex gap-2">
              <span className="text-[#ccff00]">→</span>
              Zvýšení měsíčních aktivních uživatelů o 120%
            </li>
            <li className="flex gap-2">
              <span className="text-[#ccff00]">→</span>
              Ocenění za App Design roku
            </li>
          </ul>
        </div>

        <div className="border-t border-neutral-900 pt-16 mt-16 text-center">
          <h3 className="text-2xl font-medium text-white mb-6">
            Líbí se vám tento projekt?
          </h3>
          <Link to="/contact" className="nav-link bg-[#ccff00] text-black px-8 py-3.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-block">
            Pojďme probrat ten váš
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}