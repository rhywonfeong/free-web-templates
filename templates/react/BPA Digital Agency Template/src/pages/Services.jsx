import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Services() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
          Jak vám pomůžeme.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-24 font-light">
          Nabízíme ucelené služby od prvotní strategie až po spuštění a
          následný marketing. Vyberte si to, co váš byznys aktuálně pálí
          nejvíce.
        </p>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Service Group 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-neutral-900 pt-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl text-white font-medium tracking-tight mb-4 sticky top-24">
                Branding &amp; Strategie
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-neutral-400">
                Značka je víc než logo. Je to pocit, který zanecháte.
                Vytvoříme silný fundament, na kterém můžete stavět další
                dekádu.
              </p>
              <ul className="text-sm text-neutral-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Pozicování na trhu
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Vizuální identita (Logomanuál)
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Tón komunikace (Tone of Voice)
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Naming &amp; Copywriting
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/contact" className="nav-link text-sm font-medium text-white border border-neutral-700 px-6 py-2.5 rounded-full hover:bg-neutral-900 transition-colors inline-block">
                  Poptat branding
                </Link>
              </div>
            </div>
          </div>

          {/* Service Group 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-neutral-900 pt-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl text-white font-medium tracking-tight mb-4 sticky top-24">
                Digitální Design &amp; Web
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <p className="text-neutral-400">
                Navrhujeme a vyvíjíme weby, které sbírají ceny za design a
                generují leady pro váš obchodní tým. Rychlé, přístupné a
                responzivní.
              </p>
              <ul className="text-sm text-neutral-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  UX/UI Design
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Korporátní weby
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  E-commerce řešení
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#ccff00]"></iconify-icon>
                  Webové aplikace
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/contact" className="nav-link text-sm font-medium text-white border border-neutral-700 px-6 py-2.5 rounded-full hover:bg-neutral-900 transition-colors inline-block">
                  Poptat web
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}