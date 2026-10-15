import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-acid text-[#111111] text-center relative overflow-hidden">
      
      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-10 pointer-events-none select-none">
        <span className="font-display font-black text-[25vw] leading-none whitespace-nowrap tracking-tighter">
          APEX CLUB
        </span>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <h2 className="font-display font-black uppercase text-6xl md:text-8xl tracking-tighter leading-[0.85] mb-8">
          Seu corpo<br/>não mente.<br/>Comece agora.
        </h2>
        
        <p className="text-lg font-medium uppercase tracking-widest text-[#111111]/70 mb-12">
          APEX Performance Club — Alto padrão. Resultado real.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button to="/agendar" variant="outline" className="bg-[#111111] text-acid border-none hover:bg-white hover:text-[#111111] shadow-xl w-full sm:w-auto">
            Agendar uma visita gratuita
          </Button>
          <Button to="/agendar" variant="outline" className="border-[#111111] hover:bg-[#111111] hover:text-acid w-full sm:w-auto">
            Falar com um especialista
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs uppercase font-bold tracking-widest text-[#111111]/60">
          <span className="flex items-center gap-2"><iconify-icon icon="solar:star-bold"></iconify-icon> Sem taxa de matrícula</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:star-bold"></iconify-icon> Protocolo em 24h</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:star-bold"></iconify-icon> Cancele quando quiser</span>
        </div>
      </div>
    </section>
  );
}