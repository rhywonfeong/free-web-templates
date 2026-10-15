import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';

const Structure = () => {
  const equipmentItems = [
    {
      title: "01 · CARDIO & CONDITIONING",
      content: (
        <ul className="space-y-3 py-4 flex flex-col">
          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E8400A] rounded-sm"></div> Assault Bike Concept2 — <span className="text-white">8 UNIDADES</span></li>
          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E8400A] rounded-sm"></div> Remo Concept2 Model D — <span className="text-white">6 UNIDADES</span></li>
          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E8400A] rounded-sm"></div> SkiErg Concept2 — <span className="text-white">4 UNIDADES</span></li>
          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E8400A] rounded-sm"></div> Esteiras NordicTrack com inclinação negativa</li>
          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E8400A] rounded-sm"></div> Cordas de batalha 15m e 20m</li>
        </ul>
      )
    },
    {
      title: "02 · FORÇA LIVRE",
      content: (
        <p className="py-4 text-[#B0B0B0]">
          Racks de agachamento Rogue Fitness, plataformas olímpicas de LPO, anilhas bumper padrão IWF e dumbbells em pares até 60kg. 
          Área dedicada para levantamento terra com piso com absorção de impacto.
        </p>
      )
    },
    {
      title: "03 · MÁQUINAS",
      content: (
        <p className="py-4 text-[#B0B0B0]">
          Seleção rigorosa focada em biomecânica. Linha completa Hammer Strength (plate-loaded), cabos ajustáveis Ciber e polias cruzadas com proporção 1:1 para força real.
        </p>
      )
    },
    {
      title: "04 · FUNCIONAL & MOBILITY",
      content: (
        <p className="py-4 text-[#B0B0B0]">
          Espaço livre em grama sintética de alta densidade. Kettlebells de competição (8kg a 48kg), caixas pliométricas, trenós de arraste e acessórios para liberação miofascial.
        </p>
      )
    },
    {
      title: "05 · INFRAESTRUTURA",
      content: (
        <p className="py-4 text-[#B0B0B0]">
          Vestiários privativos com duchas de alta pressão. Sistema de climatização industrial, iluminação focal direcional para não ofuscar durante exercícios no banco, e acústica controlada.
        </p>
      )
    }
  ];

  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#111111] border-y border-subtle">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionTitle 
              eyebrow="Estrutura"
              title="CADA PEÇA"
              titleAccent="SELECIONADA."
              description="Nenhum equipamento entra aqui sem critério. Tudo foi escolhido para aguentar o seu melhor dia, todos os dias."
            />
            
            <div className="hidden lg:block relative aspect-square border border-[#2A2A2A] mt-12 bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" 
                alt="Gym equipment detail" 
                className="w-full h-full object-cover grayscale mix-blend-lighten opacity-80"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Accordion items={equipmentItems} defaultOpenIndex={0} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Structure;