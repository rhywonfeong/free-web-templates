import React, { useState } from 'react';
import Button from '../components/ui/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Info Side */}
        <div className="flex flex-col justify-center">
          <div className="inline-block w-12 h-1 bg-[#DCA11D] mb-8 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Iniziamo una conversazione.</h1>
          <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed">
            Che tu voglia prenotare una villa esclusiva o proporre la tua proprietà in Sicilia, il nostro team è a tua completa disposizione per un'assistenza su misura.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                <iconify-icon icon="solar:map-point-bold" class="text-[#DCA11D]"></iconify-icon>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Sede Centrale</h4>
                <p className="text-zinc-500 text-sm">Corso Ruggero, 12<br/>90015 Cefalù (PA), Italia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                <iconify-icon icon="solar:phone-bold" class="text-[#DCA11D]"></iconify-icon>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Linea Diretta</h4>
                <p className="text-zinc-500 text-sm">+39 0921 555 123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-zinc-950 border border-zinc-900 p-8 lg:p-10 rounded-md relative overflow-hidden">
          {submitted ? (
            <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-center p-8 z-10 animate-[fadeIn_0.3s_ease-out]">
              <div className="w-16 h-16 bg-[#DCA11D]/10 rounded-full flex items-center justify-center mb-6">
                <iconify-icon icon="solar:check-read-linear" class="text-3xl text-[#DCA11D]"></iconify-icon>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Richiesta Ricevuta</h3>
              <p className="text-zinc-400">Un nostro consulente ti contatterà entro 24 ore.</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Nome</label>
                <input required type="text" className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#DCA11D] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Cognome</label>
                <input required type="text" className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#DCA11D] transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Indirizzo Email</label>
              <input required type="email" className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#DCA11D] transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Oggetto</label>
              <select className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#DCA11D] transition-colors appearance-none">
                <option>Prenotazione Villa</option>
                <option>Proponi una Proprietà</option>
                <option>Richiesta Informazioni</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Messaggio</label>
              <textarea required rows={4} className="w-full bg-black border border-zinc-800 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#DCA11D] transition-colors resize-none"></textarea>
            </div>
            
            <Button type="submit" className="w-full" size="lg">Invia Messaggio</Button>
          </form>
        </div>

      </div>
    </div>
  );
}