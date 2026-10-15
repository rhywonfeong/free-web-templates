import React from 'react';

const Features = () => {
  return (
    <section id="solution" className="scroll-mt-32">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          3. Dedykowany ekosystem na własność
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Budujemy twoją własną platformę od zera. Odcinamy ostatecznie prowizje od zamówień. Płacisz wyłącznie ułamek procenta operatorowi bramek płatniczych. Twój nowy system opieramy na dwóch filarach.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pillar 1 */}
        <div className="glass-panel rounded-3xl overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
          <div className="h-64 bg-zinc-900/50 relative overflow-hidden flex items-center justify-center p-8 border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a02c1890-ebdb-49cf-8fd4-b4498dce7987/1600w.jpg" 
              alt="Logo placeholder" 
              className="w-full h-full object-cover rounded-xl shadow-2xl opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-700"
            />
          </div>
          <div className="p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
              <iconify-icon icon="solar:smartphone-linear" width="16"></iconify-icon>
              Filar 1
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Nowoczesna Strona i Aplikacje</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Po pierwsze tworzymy nowoczesną stronę internetową i aplikacje mobilne dla klientów do pobrania w oficjalnych sklepach (App Store i Google Play). 
            </p>
            <ul className="space-y-3">
              {['Własna marka w oficjalnych sklepach z aplikacjami', 'Nowoczesny, zachęcający do zakupów interfejs', 'Całkowity brak prowizji od zamówień dla operatorów'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <iconify-icon icon="solar:check-circle-linear" width="20" className="text-emerald-500"></iconify-icon>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="glass-panel rounded-3xl overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
          <div className="h-64 bg-zinc-900/50 relative overflow-hidden flex items-center justify-center p-8 border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" 
              alt="Mobile App Interface" 
              className="w-full h-full object-cover rounded-xl shadow-2xl opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-700"
            />
          </div>
          <div className="p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
              <iconify-icon icon="solar:laptop-minimalistic-linear" width="16"></iconify-icon>
              Filar 2
            </div>
            <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Lekki Panel Obsługi</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Po drugie budujemy lekki panel w przeglądarce dla obsługi. Działa na każdym sprzęcie. Żadnego skomplikowanego instalowania i żadnych problemów z wolnymi tabletami.
            </p>
            <ul className="space-y-3">
              {['Głośne powiadomienie natychmiast po opłaceniu', 'Brak konieczności instalacji specjalistycznego softu', 'Płynne działanie na absolutnie każdym urządzeniu'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <iconify-icon icon="solar:check-circle-linear" width="20" className="text-emerald-500"></iconify-icon>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;