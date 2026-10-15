import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
          Nové case studies online
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter max-w-4xl leading-tight mb-6">
          Tvoříme digitální značky, které udávají
          <span className="text-[#ccff00]"> rytmus trhu.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light">
          Spojujeme strategii, precizní design a technologie. Pro firmy, které
          nechtějí následovat, ale vést.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/work" className="nav-link bg-[#ccff00] text-black px-8 py-3.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex justify-center items-center gap-2">
            Prohlédnout naši práci
          </Link>
          <Link to="/contact" className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3.5 text-sm font-medium hover:bg-neutral-900 transition-colors rounded-full inline-flex justify-center items-center gap-2">
            Domluvit konzultaci
          </Link>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-y border-neutral-900 py-8 overflow-hidden bg-neutral-950">
        <div className="flex gap-12 items-center opacity-50 text-sm tracking-widest uppercase font-medium justify-center flex-wrap px-6">
          <span>Fintech</span>
          •
          <span>E-commerce</span>
          •
          <span>SaaS</span>
          •
          <span>B2B Enterprise</span>
          •
          <span>Lifestyle</span>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Komplexní ekosystém.
            </h2>
            <p className="text-neutral-400 max-w-md">
              Neděláme jen hezké obrázky. Budujeme funkční byznys nástroje.
            </p>
          </div>
          <Link to="/services" className="nav-link group text-white text-sm font-medium inline-flex items-center gap-2 hover:text-[#ccff00] transition-colors">
            Všechny služby
            <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
            <iconify-icon icon="solar:pen-new-square-linear" className="text-3xl text-[#ccff00] mb-6"></iconify-icon>
            <h3 className="text-xl font-medium text-white mb-3">Brand Strategie</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Definujeme vaši pozici na trhu, vizuální identitu a tón komunikace. Základ pro růst.
            </p>
          </div>
          <div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
            <iconify-icon icon="solar:monitor-smartphone-linear" className="text-3xl text-[#ccff00] mb-6"></iconify-icon>
            <h3 className="text-xl font-medium text-white mb-3">Digitální Design</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Weby a aplikace, které nejen vypadají prémiově, ale hlavně konvertují uživatele na zákazníky.
            </p>
          </div>
          <div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
            <iconify-icon icon="solar:code-square-linear" className="text-3xl text-[#ccff00] mb-6"></iconify-icon>
            <h3 className="text-xl font-medium text-white mb-3">Vývoj &amp; Tech</h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Škálovatelná architektura, moderní frameworky a blesková rychlost načítání.
            </p>
          </div>
        </div>
      </div>

      {/* Selected Work */}
      <div className="bg-neutral-950 py-24 md:py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Vybrané projekty.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/work-detail" className="group cursor-pointer nav-link block">
              <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                  <span className="bg-white text-black px-5 py-2.5 text-xs font-medium rounded-full">
                    Zobrazit Case Study
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    NovaPay App
                  </h3>
                  <p className="text-sm text-neutral-500">
                    UX/UI Design, Frontend Vývoj
                  </p>
                </div>
                <span className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400 rounded-full">
                  2023
                </span>
              </div>
            </Link>
            <Link to="/work-detail" className="group cursor-pointer nav-link md:mt-16 block">
              <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                  <span className="bg-white text-black px-5 py-2.5 text-xs font-medium rounded-full">
                    Zobrazit Case Study
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    Aura Lifestyle
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Rebranding, E-commerce
                  </p>
                </div>
                <span className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400 rounded-full">
                  2024
                </span>
              </div>
            </Link>
          </div>
          <div className="mt-16 flex justify-center">
            <Link to="/work" className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3.5 text-sm font-medium hover:bg-neutral-900 transition-colors rounded-full inline-flex items-center gap-2">
              Zobrazit všechny projekty
            </Link>
          </div>
        </div>
      </div>

      {/* Home CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-center border-t border-neutral-900">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-8">
          Jste připraveni růst?
        </h2>
        <Link to="/contact" className="nav-link bg-[#ccff00] text-black px-8 py-4 text-base font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex items-center gap-2">
          Začít spolupráci
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
        </Link>
      </div>
    </PageWrapper>
  );
}