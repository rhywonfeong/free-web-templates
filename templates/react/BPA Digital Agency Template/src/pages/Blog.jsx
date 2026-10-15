import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Blog() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-16">
          Pohled pod pokličku.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <Link to="/blog-detail" className="group cursor-pointer nav-link flex flex-col h-full block">
            <div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
              <span className="text-[#ccff00]">Design</span>
              <span>12. Března 2024</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
              Proč minimalismus ve web designu konvertuje lépe
            </h3>
            <p className="text-sm text-neutral-400 mb-6 flex-grow">
              Méně je někdy více. Analýza 50 e-commerce webů ukazuje, že čistý
              design vede k vyšším prodejům.
            </p>
            <span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
              Přečíst článek
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </span>
          </Link>

          {/* Article 2 */}
          <Link to="/blog-detail" className="group cursor-pointer nav-link flex flex-col h-full block">
            <div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
              <div className="w-full h-full bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
              <span className="text-[#ccff00]">Technologie</span>
              <span>5. Března 2024</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
              Budoucnost frontendu: Je React stále králem?
            </h3>
            <p className="text-sm text-neutral-400 mb-6 flex-grow">
              Srovnání moderních frameworků a proč jsme v BPA přešli na
              novější stack pro určité typy projektů.
            </p>
            <span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
              Přečíst článek
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </span>
          </Link>

          {/* Article 3 */}
          <Link to="/blog-detail" className="group cursor-pointer nav-link flex flex-col h-full block">
            <div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
              <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
              <span className="text-[#ccff00]">Byznys</span>
              <span>28. Února 2024</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
              Jak správně stanovit rozpočet na nový web
            </h3>
            <p className="text-sm text-neutral-400 mb-6 flex-grow">
              Transparentní průvodce cenotvorbou agentur a na co si dát pozor
              při výběru dodavatele.
            </p>
            <span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
              Přečíst článek
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </span>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}