import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
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
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
              Pojďme se bavit o vašem projektu.
            </h1>
            <p className="text-lg text-neutral-400 mb-12 font-light">
              Vyplňte formulář nebo nám rovnou napište e-mail. Odpovídáme
              zpravidla do 24 hodin s návrhem dalšího postupu.
            </p>

            <div className="space-y-8">
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                  Nové projekty
                </div>
                <a href="mailto:hello@bp-agency.cz" className="text-xl text-white hover:text-[#ccff00] transition-colors">
                  hello@bp-agency.cz
                </a>
              </div>
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                  Telefon
                </div>
                <a href="tel:+420777123456" className="text-xl text-white hover:text-[#ccff00] transition-colors">
                  +420 777 123 456
                </a>
              </div>
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                  Kancelář
                </div>
                <p className="text-white">
                  Pernerova 35, 186 00 Praha 8
                  <br />
                  <span className="text-sm text-neutral-500">Karlín</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/20 border border-neutral-800 p-8 md:p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-2">
                    Jméno a příjmení *
                  </label>
                  <input type="text" required className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="Jan Novák" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-2">
                    E-mail *
                  </label>
                  <input type="email" required className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="jan@firma.cz" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">
                  Společnost
                </label>
                <input type="text" className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="Název vaší firmy" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">
                  O čem se budeme bavit? *
                </label>
                <select required defaultValue="" className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl appearance-none cursor-pointer">
                  <option value="" disabled className="text-neutral-700">Vyberte oblast zájmu</option>
                  <option value="brand">Branding &amp; Strategie</option>
                  <option value="web">Nový Web / Aplikace</option>
                  <option value="marketing">Performance Marketing</option>
                  <option value="other">Něco jiného</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">
                  Zpráva nebo detail projektu
                </label>
                <textarea rows="4" className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl resize-none placeholder:text-neutral-700" placeholder="Stručně popište, co potřebujete řešit..."></textarea>
              </div>

              {/* Custom Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group mt-2">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                  <input type="checkbox" required className="peer sr-only" />
                  <div className="w-5 h-5 border border-neutral-700 rounded-md bg-black peer-checked:bg-[#ccff00] peer-checked:border-[#ccff00] transition-colors"></div>
                  <iconify-icon icon="solar:check-read-linear" className="absolute text-black opacity-0 peer-checked:opacity-100 transition-opacity" width="1.2em"></iconify-icon>
                </div>
                <span className="text-xs text-neutral-500 leading-relaxed">
                  Souhlasím se zpracováním osobních údajů pro účely vyřízení
                  poptávky dle <Link to="/privacy" className="nav-link text-white underline hover:text-[#ccff00]">podmínek</Link>. *
                </span>
              </label>

              <div className="mt-4">
                <button 
                  type="submit" 
                  className={`w-full px-6 py-4 text-sm font-medium transition-colors rounded-full flex justify-center items-center gap-2 group ${
                    submitStatus === 'success' 
                      ? 'bg-white text-black' 
                      : 'bg-[#ccff00] text-black hover:bg-[#b3e600]'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <iconify-icon icon="solar:check-circle-linear" className="text-lg"></iconify-icon> 
                      <span>Odesláno</span>
                    </>
                  ) : (
                    <>
                      <span>Odeslat poptávku</span>
                      <iconify-icon icon="solar:plain-linear" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
                    </>
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