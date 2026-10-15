import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden flex justify-center border-y border-[#2E2E2E]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#080808]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,69,0,0.15)_0%,_transparent_70%)]"></div>
      
      {/* Decorative striped texture placeholder */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_10px)] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[80px] leading-[0.9] text-white uppercase tracking-tighter mb-8">
          Você não precisa <br/>
          de mais um motivo. <br/>
          <span className="text-[#FF4500] drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">Comece Hoje.</span>
        </h2>
        
        <p className="text-[#B0B0B0] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Cada semana que passa é uma semana de resultado perdido. O melhor momento para começar foi ontem. O segundo melhor é agora.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="#plans" size="lg" icon="solar:bolt-linear">
            Matricule-se agora
          </Button>
          <Button href="https://wa.me/5541999999999" variant="outline" size="lg">
            Agendar visita gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}