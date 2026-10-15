export default function CTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 text-balance">
          Pronto para operar no próximo nível?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-normal">
          Agende uma demonstração gratuita e descubra como o ServyOdonto pode trazer clareza financeira, organização operacional e uma experiência premium para sua clínica.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Agendar demonstração
            <iconify-icon icon="solar:calendar-add-linear" className="text-lg"></iconify-icon>
          </button>
          <button className="w-full sm:w-auto bg-blue-700/50 text-white border border-blue-500/30 px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700/80 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            Falar com consultor via WhatsApp
          </button>
        </div>
        <p className="mt-6 text-xs text-blue-200 font-medium opacity-80">Demonstração sem compromisso • Adequado para todos os tamanhos de clínica</p>
      </div>
    </section>
  );
}