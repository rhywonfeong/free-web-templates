import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Info Side */}
        <div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase mb-4">
            04 — Inicjalizacja
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-8">
            Nawiąż <br/>Kontakt.
          </h1>
          <p className="text-lg text-neutral-500 font-light mb-12 max-w-md">
            Porozmawiajmy o skalowaniu Twojego biznesu, potrzebach kapitałowych i potencjalnej współpracy.
          </p>

          <div className="space-y-8 border-l border-black/10 pl-6">
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase mb-1">Email</div>
              <a href="mailto:biuro@epicventures.pl" className="text-xl font-medium text-black hover:text-emerald-600 transition-colors">
                biuro@epicventures.pl
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase mb-1">Telefon</div>
              <a href="tel:+48604102100" className="text-xl font-medium text-black hover:text-emerald-600 transition-colors">
                +48 604 102 100
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase mb-1">Biuro</div>
              <p className="text-lg text-neutral-800">
                Epic Ventures Sp. z o.o.<br/>
                ul. Elementarzowa 4<br/>
                51-173 Wrocław
              </p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-neutral-50 p-8 md:p-12 border border-black/5">
          {formStatus === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-on-scroll is-visible">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <iconify-icon icon="ph:check-bold" class="text-emerald-600 text-3xl"></iconify-icon>
              </div>
              <h3 className="text-2xl font-medium text-black mb-2">Wiadomość wysłana</h3>
              <p className="text-neutral-500">Nasz zespół skontaktuje się z Tobą w ciągu 48 godzin.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-black border-b border-transparent hover:border-black transition-all pb-1"
              >
                Wyślij kolejną
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Imię i Nazwisko / Firma</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-neutral-300"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Adres E-mail</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-neutral-300"
                  placeholder="jan@firma.pl"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Temat</label>
                <select className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors appearance-none">
                  <option>Pozyskiwanie finansowania</option>
                  <option>Sprzedaż firmy (M&A)</option>
                  <option>Dokumentacja / Wycena</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Krótki opis projektu</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-neutral-300 resize-none"
                  placeholder="Opisz krótko swój projekt lub potrzebę..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-black text-white px-6 py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {formStatus === 'submitting' ? (
                   <>
                    <iconify-icon icon="ph:spinner-gap" class="animate-spin text-lg"></iconify-icon>
                    Wysyłanie...
                   </>
                ) : 'Wyślij Wiadomość'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}