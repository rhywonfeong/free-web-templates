import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';
import FormattedHeading from '../ui/FormattedHeading';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Left */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-[#9333EA]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
            alt="Studio office" 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
          />
        </div>

        {/* Content Right */}
        <div className="flex flex-col items-start">
          <SectionLabel text="SOBRE O ESTÚDIO" />
          
          <FormattedHeading 
            text="Não fazemos sites. Construímos presença *digital.*"
            className="text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-tight mb-8"
          />
          
          <div className="space-y-6 text-[#8A8A8A] leading-relaxed mb-10">
            <p>
              A Mythika nasceu de uma observação simples: muitos negócios bons têm uma presença digital fraca. Não por falta de esforço — mas por falta de estrutura, estratégia e olhar de design.
            </p>
            <p>
              Somos um estúdio boutique de design digital. Trabalhamos na interseção entre estética premium, UX/UI e estratégia de negócio para criar sites, lojas e landing pages que comunicam com clareza e conduzem o visitante até a ação certa.
            </p>
            <p>
              Aqui, cada projeto começa com entendimento. Só depois vem o design. Porque presença digital que funciona não é sobre parecer bonito — é sobre parecer certo para quem precisa confiar em você.
            </p>
          </div>

          <div className="space-y-3 mb-10 w-full">
            {[
              "Direção criativa com background sólido em UX/UI",
              "Processo estruturado pelo Método LÚMEN",
              "Rede de parceiros de desenvolvimento para entrega completa",
              "Estúdio boutique: menos projetos, mais atenção a cada um"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <iconify-icon icon="solar:check-circle-bold" class="text-[#9333EA] text-xl shrink-0 mt-0.5"></iconify-icon>
                <span className="text-[#F0F0F0] text-sm">{item}</span>
              </div>
            ))}
          </div>

          <Button icon="solar:arrow-right-linear">Falar com a Mythika</Button>
        </div>

      </div>
    </section>
  );
};

export default About;