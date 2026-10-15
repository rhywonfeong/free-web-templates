const CTASection = () => {
  return (
    <section className="bg-[#CEFE00] py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Graphic Subtlety */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FCFBFC] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0C0C0C] leading-[1.05] mb-8">
          A MARGEM<br />NÃO ESPERA.<br />COMECE HOJE.
        </h2>
        
        {/* Ticker / Banner inside section */}
        <div className="w-full max-w-2xl overflow-hidden bg-[#0C0C0C] text-[#CEFE00] rounded-full py-2 mb-10 border border-[#0C0C0C]">
          <div className="whitespace-nowrap text-[10px] sm:text-xs font-bold tracking-[0.2em] px-4 animate-pulse">
            14 DIAS GRÁTIS · SEM CARTÃO · ACESSO COMPLETO · CANCELE QUANDO QUISER · 14 DIAS GRÁTIS
          </div>
        </div>

        <button className="px-10 py-5 text-lg font-semibold text-[#FCFBFC] bg-[#0C0C0C] hover:bg-[#3D3C3D] rounded-full transition-colors shadow-xl flex items-center gap-3">
          COMEÇAR TESTE GRATUITO
          <iconify-icon icon="solar:rocket-bold" width="24"></iconify-icon>
        </button>
      </div>
    </section>
  );
};

export default CTASection;