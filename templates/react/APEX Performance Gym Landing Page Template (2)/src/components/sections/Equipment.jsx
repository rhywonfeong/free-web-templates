import Tag from '../ui/Tag';

export default function Equipment() {
  const categories = [
    { icon: "solar:heart-pulse-linear", title: "Cardio", desc: "Esteiras com inclinação, bikes ergométricas, remos de última geração.", stat: "40+ equipamentos" },
    { icon: "solar:dumbbell-linear", title: "Força", desc: "Plataformas olímpicas, racks, barras Eleiko, halteres de 2kg a 80kg.", stat: "8 plataformas" },
    { icon: "solar:bolt-circle-linear", title: "Condicionamento", desc: "TRX, battle ropes, slam balls, caixotes e zonas de alta intensidade.", stat: "Área de 500m²" },
    { icon: "solar:widget-linear", title: "Máquinas", desc: "Linha completa Life Fitness e Technogym. Precisão em cada movimento.", stat: "80+ máquinas" },
    { icon: "solar:routing-linear", title: "Livre & Funcional", desc: "Área ampla para treinos livres, kettlebells, e mobilidade.", stat: "Zona dedicada" },
    { icon: "solar:bath-linear", title: "Infraestrutura", desc: "Vestiários privativos, spa com sauna, crioterapia e lounge.", stat: "Completa e inclusa" }
  ];

  return (
    <section id="structure" className="py-24 bg-[#111111] border-y border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <Tag className="mb-6">Estrutura</Tag>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-6">
              Equipamentos para <br/>
              <span className="text-[#FF4500]">cada objetivo</span>
            </h2>
            <p className="text-[#B0B0B0] text-lg">
              Mais de 3.200m² de área equipada com maquinários de última geração, zonas especializadas por modalidade e ambientes projetados para maximizar foco e desempenho.
            </p>
          </div>
          <div className="hidden md:block">
            <iconify-icon icon="solar:gallery-wide-linear" class="text-8xl text-[#1A1A1A] opacity-50"></iconify-icon>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 rounded-2xl border border-transparent hover:border-[#2E2E2E] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-[#242424] flex items-center justify-center">
                  <iconify-icon icon={cat.icon} class="text-3xl text-white group-hover:text-[#FF4500] transition-colors"></iconify-icon>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#AAFF00] bg-[#AAFF00]/10 px-3 py-1 rounded-sm">
                  {cat.stat}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-3">
                {cat.title}
              </h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}