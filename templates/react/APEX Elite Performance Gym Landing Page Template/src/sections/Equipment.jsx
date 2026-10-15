import React from 'react';
import Badge from '../components/Badge';

export default function Equipment() {
  const categories = [
    {
      title: "Cardio",
      icon: "solar:routing-bold-duotone",
      items: ["Esteiras Technogym Run", "Bikes ergométricas", "Elípticos premium", "Rowers Concept2", "SkiErg"]
    },
    {
      title: "Força",
      icon: "solar:dumbell-bold-duotone",
      items: ["Racks Power Rack 3×3", "Plataformas olímpicas", "Barras e discos calibrados", "Halteres até 60kg", "Trap bar & Safety bar"]
    },
    {
      title: "Funcional",
      icon: "solar:pulse-bold-duotone",
      items: ["Rig modular 12m", "Kettlebells 4–48kg", "Sleds & Battle ropes", "TRX & Anilhas", "Caixas pliométricas"]
    },
    {
      title: "Condicionamento",
      icon: "solar:flame-bold-duotone",
      items: ["Assault Bike", "Corda naval", "Medicine balls", "Cordas de agilidade", "Estação de HIIT"]
    },
    {
      title: "Máquinas",
      icon: "solar:settings-bold-duotone",
      items: ["Linha completa Life Fitness", "Leg press 45°", "Cadeira extensora & flexora", "Pec deck & Pulldown", "Smith Machine"]
    },
    {
      title: "Livre",
      icon: "solar:body-shape-bold-duotone",
      items: ["Área de treino livre", "Colchonetes e rollers", "Faixas de resistência", "Paralelas e barra fixa", "Espaço para mobilidade"]
    }
  ];

  const infra = [
    "Vestiários premium", "Armários com carregamento USB", "Sauna seca e úmida", "Sala de avaliação física", 
    "Wi-Fi de alta velocidade", "Estacionamento conveniado", "Sala de recuperação", "Loja de suplementos", 
    "Café & Hidratação", "Acessibilidade total"
  ];

  return (
    <section id="estrutura" className="py-24 bg-[#100F0F]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-16">
          <Badge className="mb-6">Estrutura</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
            Equipamentos <br/> sem concessões
          </h2>
          <p className="text-gray-400 text-lg">
            Cada área foi pensada para oferecer o melhor ambiente de treino possível, com equipamentos de ponta e manutenção diária.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 rounded-[24px] border border-white/5 hover:border-[#C8F135]/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#100F0F] flex items-center justify-center text-white mb-6 group-hover:text-[#C8F135] transition-colors">
                <iconify-icon icon={cat.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FF8040]/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Infra list */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#100F0F] border border-white/10 rounded-[24px] p-8 md:p-12">
          <h3 className="text-lg font-bold uppercase tracking-widest text-[#B8CFEE] mb-8">Infraestrutura Completa</h3>
          <div className="flex flex-wrap gap-3">
            {infra.map((item, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}