import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E82020]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8651A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <h2 className="font-display text-5xl sm:text-7xl md:text-[80px] font-black uppercase leading-[0.9] tracking-tighter text-[#F5F5F5] mb-8">
          A DECISÃO<br/>
          JÁ FOI TOMADA.<br/>
          <span className="text-[#E8651A]">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-[#7A7A7A] text-sm sm:text-base font-semibold tracking-widest uppercase mb-12">
          AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · <span className="text-[#E5E5E5]">TRAGA TÊNIS.</span>
        </p>

        <Button size="lg" className="gap-2 text-lg shadow-[0_0_40px_rgba(232,101,26,0.3)] hover:shadow-[0_0_60px_rgba(232,101,26,0.5)] scale-110">
          AGENDAR VISITA GRATUITA <iconify-icon icon="solar:arrow-right-bold"></iconify-icon>
        </Button>
      </div>
    </section>
  )
}