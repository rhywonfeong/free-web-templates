import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 glow-hero opacity-80 pointer-events-none"></div>
      
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Left */}
        <div className="flex flex-col items-start max-w-2xl">
          <SectionLabel text="MYTHIKA STUDIO" />
          
          <FormattedHeading 
            as="h1" 
            text="Sua marca merece uma presença digital à altura do que você *entrega.*"
            className="text-5xl md:text-6xl lg:text-[64px] font-bold text-[#F0F0F0] leading-[1.1] tracking-tight mb-6"
          />
          
          <p className="text-base md:text-lg text-[#8A8A8A] mb-10 max-w-[520px] leading-relaxed">
            A Mythika Studio cria sites, landing pages e e-commerces para marcas que estão prontas para sair do improviso e vender com mais clareza, confiança e profissionalismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button variant="primary" icon="solar:arrow-right-linear">
              Falar com a Mythika
            </Button>
            <Button variant="secondary">
              Ver Portfólio
            </Button>
          </div>
          
          <p className="text-xs text-[#666666]">Sem compromisso. A conversa é gratuita.</p>

          {/* Floating Stat Badge */}
          <div className="mt-16 sm:absolute sm:bottom-12 sm:left-6 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#2E2E2E] rounded-xl p-4 flex items-center gap-4 w-fit shadow-2xl">
            <div className="w-3 h-3 rounded-full bg-[#9333EA] animate-pulse"></div>
            <div className="text-sm">
              <span className="block text-[#F0F0F0] font-medium">Estúdio boutique</span>
              <span className="block text-[#8A8A8A] text-xs">Design estratégico com UX/UI</span>
            </div>
          </div>
        </div>

        {/* Visual Right (Mockup placeholder) */}
        <div className="hidden lg:block relative h-full min-h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#2E2E2E] shadow-[0_0_50px_rgba(147,51,234,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
              alt="Mythika Studio Design Concept" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;