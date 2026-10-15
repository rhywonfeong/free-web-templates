import React from 'react';

const Pricing = () => {
  return (
    <section id="investment" className="scroll-mt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          4. Warianty inwestycyjne i harmonogram prac
        </h2>
        <p className="text-lg text-zinc-400">
          Przygotowaliśmy dwa modele finansowania. Wybierasz ten, który lepiej spina się z twoim obecnym budżetem. Całkowity koszt budowy systemu w obu przypadkach wynosi 180 000 złotych netto.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Card 1 */}
        <div className="glass-panel rounded-3xl p-8 relative flex flex-col border border-zinc-700/50 hover:border-zinc-600 transition-colors group">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
              <iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Wariant Pierwszy: Szybki start i pełen zespół</h3>
            <p className="text-sm text-zinc-400">Cały ten okres to intensywne programowanie. Pod koniec wchodzimy w fazę cichego startu w jednym z lokali i szlifujemy wydajność na żywym organizmie.</p>
          </div>
          
          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <span className="text-zinc-400">Czas budowy</span>
              <span className="text-lg font-medium text-white">6 miesięcy</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <span className="text-zinc-400">Raty podczas prac</span>
              <span className="text-lg font-medium text-white">30 000 PLN / m-c</span>
            </div>
            <div className="flex justify-between items-baseline pb-4">
              <span className="text-zinc-400 font-medium">Koszt całkowity</span>
              <span className="text-2xl font-semibold text-white tracking-tight">180 000 PLN</span>
            </div>
          </div>

          <div className="mt-auto bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Abonament (po wdrożeniu w całej sieci)</span>
              <span className="font-medium text-white">5 000 PLN / m-c</span>
            </div>
          </div>
        </div>

        {/* Card 2 - Recommended */}
        <div className="glass-panel rounded-3xl p-8 relative flex flex-col border border-red-500/30 shadow-[0_0_40px_-15px_rgba(239,68,68,0.15)] transform md:-translate-y-4 group">
          <div className="absolute top-0 right-8 -translate-y-1/2">
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Optymalizacja budżetu
            </span>
          </div>
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Wariant Drugi: Optymalizacja budżetu</h3>
            <p className="text-sm text-zinc-400">Zmniejszamy zespół, a główny ciężar programowania przejmuje bezpośrednio <span className="text-white font-medium">Architekt systemów</span>. Końcówka to również faza cichego startu.</p>
          </div>
          
          <div className="mb-8 space-y-4">
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <span className="text-zinc-400">Czas realizacji</span>
              <span className="text-lg font-medium text-white">8 miesięcy</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <span className="text-zinc-400">Raty podczas prac (połowa)</span>
              <span className="text-lg font-medium text-white">15 000 PLN / m-c</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
              <span className="text-zinc-400">Faktura końcowa (po akceptacji)</span>
              <span className="text-lg font-medium text-white">60 000 PLN</span>
            </div>
            <div className="flex justify-between items-baseline pb-4">
              <span className="text-zinc-400 font-medium">Koszt całkowity</span>
              <span className="text-2xl font-semibold text-white tracking-tight">180 000 PLN</span>
            </div>
          </div>

          <div className="mt-auto bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Stały abonament (po wdrożeniu)</span>
              <span className="font-medium text-white">5 000 PLN / m-c</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;