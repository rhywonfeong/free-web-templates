import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function CareerDetail() {
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitStatus('idle');
      e.target.reset();
    }, 3000);
  };

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link to="/career" className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Zpět na otevřené pozice
        </Link>

        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">
          Senior UX/UI Designer
        </h1>
        <div className="flex gap-4 text-sm text-[#ccff00] mb-12 border-b border-neutral-900 pb-8">
          <span>Praha / Hybrid</span>
          <span>•</span>
          <span>HPP / IČO</span>
          <span>•</span>
          <span>80 - 120 tis. CZK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose prose-invert prose-neutral max-w-none text-neutral-400">
            <p>
              Hledáme zkušeného designéra, který chápe, že design není jen o
              vizuálu, ale hlavně o řešení problémů a byznys cílech klienta.
              Budeš mít na starosti klíčové projekty pro naše top klienty, od
              úvodních workshopů až po hand-off vývojářům.
            </p>

            <h3 className="text-white font-medium text-xl mt-8 mb-4">
              Co budeš dělat:
            </h3>
            <ul>
              <li>Vést úvodní discovery workshopy s klienty</li>
              <li>Navrhovat informační architekturu a wireframy</li>
              <li>Tvořit high-fidelity UI design v Figmě (včetně design systémů)</li>
              <li>Prototypovat a testovat s uživateli</li>
              <li>Úzce spolupracovat s frontend týmem pro perfektní exekuci</li>
            </ul>

            <h3 className="text-white font-medium text-xl mt-8 mb-4">
              Co od tebe čekáme:
            </h3>
            <ul>
              <li>Minimálně 4 roky zkušeností s návrhem digitálních produktů</li>
              <li>Silné portfolio ukazující komplexní proces (nejen Dribbble shoty)</li>
              <li>Výbornou znalost Figmy (Auto layout, Variables, Components)</li>
              <li>Schopnost obhájit si svá designová rozhodnutí před klientem</li>
            </ul>
          </div>

          {/* Application Form */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 h-fit sticky top-24 rounded-3xl">
            <h3 className="text-lg font-medium text-white mb-6">Mám zájem</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Jméno
                </label>
                <input type="text" required className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  E-mail
                </label>
                <input type="email" required className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Odkaz na portfolio / LinkedIn
                </label>
                <input type="url" required className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" />
              </div>
              <div className="mt-4">
                <button 
                  type="submit" 
                  className={`w-full px-4 py-3.5 text-sm font-medium transition-colors rounded-full flex justify-center items-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-white text-black' 
                      : 'bg-[#ccff00] text-black hover:bg-[#b3e600]'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <iconify-icon icon="solar:check-circle-linear" className="text-lg"></iconify-icon> 
                      Odesláno
                    </>
                  ) : (
                    'Odeslat žádost'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}