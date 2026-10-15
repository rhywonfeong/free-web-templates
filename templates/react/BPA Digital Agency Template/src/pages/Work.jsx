import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Work() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-16">
          Výsledky naší práce.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {/* Project 1 */}
          <Link to="/work-detail" className="group cursor-pointer nav-link block">
            <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                <span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                  Číst Case Study
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
              NovaPay App
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              Kompletní redesign fintech aplikace pro 50k+ uživatelů s důrazem
              na konverzi a bezpečnost.
            </p>
            <div className="flex gap-2">
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">UX/UI</span>
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">Frontend</span>
            </div>
          </Link>

          {/* Project 2 */}
          <Link to="/work-detail" className="group cursor-pointer nav-link md:mt-24 block">
            <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                <span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                  Číst Case Study
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
              Aura Lifestyle
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              Rebranding a vývoj nového e-commerce řešení na míru, které
              zvýšilo tržby o 140% v prvním kvartálu.
            </p>
            <div className="flex gap-2">
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">Branding</span>
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">E-commerce</span>
            </div>
          </Link>

          {/* Project 3 */}
          <Link to="/work-detail" className="group cursor-pointer nav-link block">
            <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                <span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                  Číst Case Study
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
              EcoLogistics
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              B2B webový portál pro nadnárodní logistickou společnost.
            </p>
            <div className="flex gap-2">
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">Web Design</span>
              <span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">Development</span>
            </div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}