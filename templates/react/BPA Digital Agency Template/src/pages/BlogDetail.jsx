import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function BlogDetail() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link to="/blog" className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Zpět na blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-[#ccff00] mb-6">
          <span className="px-2 py-1 border border-[#ccff00]/30 rounded-sm bg-[#ccff00]/10">
            Design
          </span>
          <span className="text-neutral-500">12. Března 2024 • 5 min čtení</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-8 leading-tight">
          Proč minimalismus ve web designu konvertuje lépe.
        </h1>

        <div className="aspect-video bg-neutral-900 mb-12 rounded-3xl"></div>

        <div className="prose prose-invert prose-neutral max-w-none text-neutral-400">
          <p className="lead text-lg text-neutral-300 mb-6">
            V době, kdy je pozornost uživatelů nejkratší v historii, je
            vizuální smog nepřítelem konverzí. Ukážeme si, proč odstranění
            zbytečností vede k lepším obchodním výsledkům.
          </p>

          <h2 className="text-2xl font-medium text-white tracking-tight mt-12 mb-4">
            Kognitivní zátěž a rozhodovací paralýza
          </h2>
          <p className="mb-4">
            Každý prvek na stránce vyžaduje zlomek mozkové kapacity uživatele.
            Pokud máte na hlavní stránce tři karusely, blikající bannery a pět
            různých CTA tlačítek, návštěvník neví, co má dělat dřív. Výsledek?
            Neudělá nic a odejde.
          </p>
          <p className="mb-8">
            Minimalistický design naproti tomu vede uživatele jasně danou
            cestou (user flow). Odstraněním rušivých elementů dáváme vyniknout
            tomu podstatnému - vaší hodnotové propozici a hlavnímu tlačítku k
            akci.
          </p>

          <blockquote className="border-l-2 border-[#ccff00] pl-6 my-10 italic text-white text-xl">
            "Dobrý design je co nejméně designu." — Dieter Rams
          </blockquote>

          <h2 className="text-2xl font-medium text-white tracking-tight mt-12 mb-4">
            Rychlost načítání = Peníze
          </h2>
          <p className="mb-4">
            Méně grafických prvků a komplexních animací logicky znamená menší
            datovou náročnost webu. Podle statistik Google každá vteřina
            zpoždění načítání webu na mobilu snižuje konverze průměrně o 20%.
          </p>

          <div className="mt-16 pt-8 border-t border-neutral-900 flex justify-between items-center">
            <span className="text-sm font-medium text-white">Sdílet článek:</span>
            <div className="flex gap-4">
              <button className="text-neutral-500 hover:text-white transition-colors">
                <iconify-icon icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
              </button>
              <button className="text-neutral-500 hover:text-white transition-colors">
                <iconify-icon icon="solar:letter-linear" width="1.5em"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}