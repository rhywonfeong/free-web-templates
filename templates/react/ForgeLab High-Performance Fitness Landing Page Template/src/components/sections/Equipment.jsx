import SectionHeading from '../ui/SectionHeading';

const Equipment = () => {
  const categories = [
    {
      title: "Musculação e Força Livre",
      desc: "Zona de Força",
      items: [
        "Plataformas de levantamento olímpico com barras Eleiko",
        "Squat racks estruturais com safeties ajustáveis",
        "Kettlebells de 4kg a 60kg e Halteres até 80kg",
        "Piso emborrachado vulcanizado de alta absorção"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
    },
    {
      title: "Máquinas de Alta Performance",
      desc: "Zona de Máquinas",
      items: [
        "Linha completa Life Fitness Signature Series",
        "Polia dupla ajustável com 40+ configurações",
        "Leg Press 45° e Hack Squat de precisão",
        "Máquinas de isolamento com cabos de alta durabilidade"
      ],
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80"
    },
    {
      title: "Recuperação e Bem-Estar",
      desc: "Zona de Recovery",
      items: [
        "Crioterapia localizada e imersão em gelo",
        "Cabines de sauna seca finlandesa (105°C)",
        "Compressores pneumáticos para membros inferiores",
        "Vestiários com amenities premium"
      ],
      image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80"
    }
  ];

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-[#141414] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <SectionHeading 
            supertitle="Estrutura & Equipamentos"
            title="Tecnologia que você sente no primeiro treino."
          />
          <p className="text-neutral-400 text-lg max-w-md font-medium leading-relaxed pb-2">
            Cada equipamento foi selecionado por critérios técnicos rigorosos. Nada foi escolhido por aparência — tudo por performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-white/20 transition-colors">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 z-20 bg-[#E84E1B] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide rounded">
                  {cat.desc}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{cat.title}</h3>
                <ul className="space-y-4 mt-auto">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                      <iconify-icon icon="solar:check-circle-bold" class="text-[#E84E1B] text-lg shrink-0 mt-0.5"></iconify-icon>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;