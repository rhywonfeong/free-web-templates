import Button from '../ui/Button';
import FormattedHeading from '../ui/FormattedHeading';

const FinalCTA = () => {
  return (
    <section id="contato" className="py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-[#1A1A1A]">
      <div className="absolute inset-0 glow-hero opacity-80 pointer-events-none"></div>
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <FormattedHeading 
          text="Pronta para ter uma presença digital que faz jus ao que você *entrega?*"
          className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        />
        
        <p className="text-[#8A8A8A] text-lg max-w-[600px] mb-12 leading-relaxed">
          A Mythika está disponível para novos projetos. Se você tem uma marca, um serviço ou uma loja que merece estar melhor online — a gente conversa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button variant="primary" icon="solar:arrow-right-linear">
            Falar com a Mythika
          </Button>
          <Button variant="secondary">
            Ver Portfólio
          </Button>
        </div>
        
        <p className="text-xs text-[#666666]">A conversa é gratuita. Sem compromisso.</p>

      </div>
    </section>
  );
};

export default FinalCTA;