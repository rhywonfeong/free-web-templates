import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0D0D0D] border-t border-white/10">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E84E1B]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#E84E1B] font-bold text-sm tracking-[0.15em] mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#E84E1B]"></span>
            PRÓXIMO PASSO
            <span className="w-8 h-[2px] bg-[#E84E1B]"></span>
          </span>
          
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white uppercase leading-tight mb-6">
            A transformação começa com uma decisão.
          </h2>
          
          <p className="text-xl text-neutral-400 mb-12 font-medium">
            Você não precisa estar pronto. Você precisa dar o primeiro passo. Nossa equipe está aqui para entender onde você está e onde quer chegar.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col gap-3 items-center">
              <Button size="lg" icon="solar:arrow-right-linear" className="w-full sm:w-auto">
                Falar com Especialista
              </Button>
              <span className="text-xs text-neutral-500 font-medium">Resposta em até 2h úteis</span>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Agendar Minha Visita
              </Button>
              <span className="text-xs text-neutral-500 font-medium">Seg a Sex, das 09h às 18h</span>
            </div>
          </div>
          
          <blockquote className="mt-20 pt-10 border-t border-white/10 text-neutral-500 italic">
            "A única academia que você vai lamentar é aquela que nunca experimentou."<br/>
            <span className="not-italic font-bold text-neutral-400 mt-2 block uppercase text-xs tracking-widest">— Time ForgeLab</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CTA;