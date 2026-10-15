import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <SectionHeader 
              label="Quem Somos"
              title="Mais que uma academia."
            />
            
            <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed">
              <p>
                O APEX Performance Club nasceu da convicção de que treinar bem é um ato de autocuidado profundo. Fundada em 2012, nossa academia foi construída sobre três pilares: metodologia científica, estrutura de elite e comunidade de alta performance.
              </p>
              <p>
                Não acreditamos em treino genérico. Cada aluno recebe uma avaliação completa, um protocolo individualizado e acompanhamento contínuo. Combinamos o melhor das ciências do esporte com tecnologia de ponta para garantir que cada sessão conte — de verdade.
              </p>
              <p>
                Nosso espaço foi projetado para eliminar desculpas. Equipamentos de última geração, ambientes funcionais e coaches que vestem a camisa do seu objetivo. Aqui, o ambiente trabalha a seu favor.
              </p>
            </div>
            
            <div className="mt-12">
              <Button to="/agendar" variant="primary">Agendar uma visita gratuita</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[20px] relative">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&q=80" 
              alt="Estrutura APEX Performance Club" 
              className="w-full h-full object-cover"
            />
            
            {/* Quote Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50">
              <p className="font-display font-bold uppercase text-2xl md:text-3xl tracking-tight leading-[1.1] mb-4">
                "Aqui, fraqueza é só o ponto de partida."
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest">— Filosofia APEX</span>
                <span className="bg-[#111111] text-acid text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Desde 2012
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}