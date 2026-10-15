import React from 'react';

const Hero = () => {
  return (
    <section className="md:pt-52 md:pb-32 flex min-h-[85vh] flex-col pt-40 px-6 relative items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/10 text-xs font-medium text-zinc-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Poufny Dokument Inwestycyjny
        </div>
        
        <h1 className="leading-[1.1] md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tight mb-8 relative">
          Niezależność technologiczna i drastyczna <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">redukcja kosztów operacyjnych</span> sieci Restauracje 99
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-light leading-relaxed">
          Zbudujemy Twoją własną platformę od zera i ostatecznie odetniemy narzucane z zewnątrz prowizje. Otrzymasz dedykowany ekosystem stworzony do błyskawicznego, bezkosztowego skalowania sieci.
        </p>

        <a href="#problem" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-red-600 border border-transparent rounded-full hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-zinc-900 mb-20">
          Rozpocznij Analizę
          <iconify-icon icon="solar:arrow-down-linear" className="ml-2 transition-transform group-hover:translate-y-1" width="20"></iconify-icon>
        </a>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-left">
        <div className="glass-panel hover:border-red-500/30 hover:bg-zinc-900/50 transition-all duration-300 group border-white/5 rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <iconify-icon icon="solar:phone-calling-linear" className="text-red-500" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Cały czas na łączach</h3>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Jesteśmy w kontakcie 24/7 od momentu startu i analizy całej logistyki. Cotygodniowy raport postępów. Klarowny harmonogram i spójna ścieżka współpracy. Masz pod sobą programistów.
          </p>
        </div>

        <div className="glass-panel hover:border-red-500/30 hover:bg-zinc-900/50 transition-all duration-300 group border-white/5 rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <iconify-icon icon="solar:tuning-square-linear" className="text-red-500" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
            Elastyczność i Modyfikacje
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Jesteśmy elastyczni oraz możemy cały czas modyfikować naszą aplikacje (z zachowaniem terminów i ewentualnymi opóźnieniami).
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-red-500/30 hover:bg-zinc-900/50 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <iconify-icon icon="solar:star-fall-linear" className="text-red-500" width="24"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
            Dodatkowe Bonusy i Skalowanie
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Ty stawiasz warunki innym restauracjom. Twoje system jako produkt na rynku. Możesz zarabiać na nim, podpinając nowe systemy (z jednorazowymi kosztami wdrożenia).</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;