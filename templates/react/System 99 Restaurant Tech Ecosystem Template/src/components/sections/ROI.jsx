import React from 'react';

const floatingLabels = [
  { text: "BIAŁE ETYKIETY (WHITE-LABEL)", top: "15%", left: "10%", delay: "0s" },
  { text: "ZARZĄDZANIE DOSTAWAMI", top: "25%", right: "12%", delay: "1s" },
  { text: "DEDYKOWANE APLIKACJE", top: "65%", left: "8%", delay: "2s" },
  { text: "BRAMKI PŁATNOŚCI", top: "75%", right: "15%", delay: "0.5s" },
  { text: "ZARZĄDZANIE MENU", top: "45%", left: "25%", delay: "1.5s" },
  { text: "MARKETING CELOWY", top: "50%", right: "20%", delay: "2.5s" },
];

const ROI = () => {
  return (
    <section id="roi" className="scroll-mt-32 relative py-20">
      {/* Background with City Skyline and Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] border border-red-500/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Holographic 99 Network */}
      <div className="relative z-10 w-full h-[400px] flex items-center justify-center mb-12">
        <div className="absolute w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        
        <div className="relative text-center">
          <div className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 opacity-90 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)] leading-none tracking-tighter">
            99
          </div>
        </div>

        {/* Floating Labels */}
        {floatingLabels.map((label, idx) => (
          <div 
            key={idx} 
            className="hidden md:block absolute px-4 py-2 bg-zinc-900/80 border border-red-500/40 text-red-100 text-xs font-semibold uppercase tracking-widest rounded-full backdrop-blur-md shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)] animate-float"
            style={{ 
              top: label.top, 
              left: label.left, 
              right: label.right,
              animationDelay: label.delay 
            }}
          >
            {label.text}
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-sm font-medium text-red-400 mb-6 uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            <iconify-icon icon="solar:global-bold" width="18"></iconify-icon>
            SaaS White-Label
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            Wizja Rozwoju Produktu <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">(Poza Abonamentem)</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-950/80 backdrop-blur-xl rounded-3xl p-10 border border-red-500/20 shadow-[0_0_50px_-15px_rgba(239,68,68,0.1)] relative overflow-hidden group hover:border-red-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon="solar:network-bold" width="28"></iconify-icon>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 leading-tight">
                Twoja Niezależność,<br/>Ich Nowe Jutro.
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                System99 to nie tylko system dla Ciebie. To Twoje jutro, które może stać się ich nowym dziś! Zyskujesz platformę, którą możesz skalować na inne lokale, a także oferować ją innym restauracjom jako własny produkt SaaS.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-950/80 backdrop-blur-xl rounded-3xl p-10 border border-red-500/20 shadow-[0_0_50px_-15px_rgba(239,68,68,0.1)] relative overflow-hidden group hover:border-red-500/40 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-red-600/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon="solar:calendar-mark-bold" width="28"></iconify-icon>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 leading-tight">
                Wizja Skalowania Produktu
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light mb-4 text-[15px]">
                Masz w rękach gotową platformę, którą możesz pokazywać światu i podpinać pod nią inne lokale. Zarabiasz jak konkurencja. Możesz pobierać prowizje od innych restauracji za korzystanie z Twojego oprogramowania.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-[15px]">
                Twoje jutro może stać się ich nowym dziś! Podpięcie nowych systemów wiąże się z kosztami u innych klientów, byśmy mogli zarabiać na nich prowizje. Możesz mieć pod sobą zespół programistów którzy mogą realnie kręcić ci super wyniki dodatkowe. To oczywiście jest skala poza abonamentowa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ROI;