import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Equipment = () => {
  const categories = [
    {
      title: "Cardio",
      subtitle: "Resistência que evolui com você.",
      desc: "Esteiras com inclinação negativa, bikes assault, rowers Concept2 e ski ergômetros com monitoramento de FC em tempo real.",
      meta: "30+ unidades",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Condicionamento",
      subtitle: "Prepare seu corpo.",
      desc: "Área dedicada a circuitos — battle ropes, sleds, kettlebells, sandbags e estruturas de suspensão sem interferência de fluxo.",
      meta: "120m² exclusivos",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Força",
      subtitle: "Onde os números aumentam.",
      desc: "Plataformas olímpicas com piso certificado, power racks pesados e barras de competição. Pensada para levantamento sério.",
      meta: "6 estações",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Livre",
      subtitle: "Movimentos reais.",
      desc: "Treinamento com peso livre, halteres de 2kg a 60kg e espaço para movimentos funcionais complexos sem restrição.",
      meta: "Halteres até 60kg",
      image: "https://images.unsplash.com/photo-1586401700636-408bb3b21609?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Máquinas",
      subtitle: "Precisão absoluta.",
      desc: "Linha completa com ajuste em milímetros e cabos de alta resistência para todos os grupos musculares.",
      meta: "50+ equipamentos",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Infraestrutura",
      subtitle: "O ambiente importa.",
      desc: "Vestiários premium, sala de recuperação com crioterapia, área de hidratação e climatização por zonas.",
      meta: "Premium",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="estrutura" className="py-24 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeader 
            tag="Nossa estrutura" 
            title="Equipamento certo. Ambiente certo." 
            subtitle="Cada zona da nossa academia foi projetada com intenção. Não acumulamos equipamentos — curadoriamos ferramentas."
            className="mb-0 max-w-2xl"
          />
          <a href="#agendar" className="inline-flex items-center gap-2 text-[#AAFF00] font-display uppercase tracking-widest font-bold hover:text-white transition-colors">
            Conhecer pessoalmente <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="group relative h-[400px] overflow-hidden bg-[#1A1A1A]">
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-30 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#111111]/80 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#252525] text-[#AAFF00] text-xs font-display uppercase tracking-widest mb-4">
                    {cat.meta}
                  </span>
                  <h3 className="font-display font-black text-3xl uppercase text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-[#AAFF00] font-medium text-sm mb-4">
                    {cat.subtitle}
                  </p>
                  <p className="text-[#CCCCCC] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;