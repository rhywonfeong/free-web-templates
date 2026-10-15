import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Career() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
            Přidej se k BPA.
          </h1>
          <p className="text-lg text-neutral-400 font-light">
            Hledáme lidi, kteří nečekají na zadání, ale sami přinášejí řešení.
            Práce u nás není o odsezených hodinách, ale o reálném dopadu na
            projekty, které používají tisíce lidí.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6 tracking-tight">
            Otevřené pozice
          </h2>
          <div className="flex flex-col gap-4">
            {/* Job 1 */}
            <Link to="/career-detail" className="group cursor-pointer nav-link border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-neutral-600 hover:bg-neutral-900 transition-all rounded-3xl block">
              <div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                  Senior UX/UI Designer
                </h3>
                <div className="flex gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Praha / Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                    Full-time
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-sm font-medium text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
                Zobrazit detail
                <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
              </div>
            </Link>

            {/* Job 2 */}
            <Link to="/career-detail" className="group cursor-pointer nav-link border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-neutral-600 hover:bg-neutral-900 transition-all rounded-3xl block">
              <div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                  Frontend Developer (React/Next.js)
                </h3>
                <div className="flex gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Praha / Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                    Full-time
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-sm font-medium text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
                Zobrazit detail
                <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-neutral-900/30 border border-neutral-800 p-8 text-center max-w-2xl mx-auto mt-24 rounded-3xl">
          <h3 className="text-xl font-medium text-white mb-3">
            Nenašel jsi svou pozici?
          </h3>
          <p className="text-sm text-neutral-400 mb-6">
            Stále hledáme talenty. Pošli nám své portfolio a napiš, proč bys
            měl být součástí týmu.
          </p>
          <Link to="/contact" className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors rounded-full inline-block">
            Spontánní žádost
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}