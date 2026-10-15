import Button from '../ui/Button';

const FinalCtaSection = () => {
  return (
    <section id="agendar" className="py-32 lg:py-48 bg-[#0D0D0D] relative overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Graphic Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(232,32,26,0.15)_0%,rgba(8,8,8,0)_70%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase tracking-tightest leading-[0.9] text-white mb-10">
          A DECISÃO JÁ FOI TOMADA.<br/>
          <span className="text-[#E8201A]">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-sm md:text-base text-[#BDBDBD] uppercase tracking-[0.2em] font-medium mb-16 max-w-2xl">
          AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS.
        </p>
        
        <Button variant="accent" className="text-sm px-12 py-5 sm:text-base">
          Agendar Visita Gratuita
        </Button>
        
      </div>
    </section>
  );
};

export default FinalCtaSection;