import SectionHeading from '../ui/SectionHeading';

export default function Equipment() {
  const categories = [
    {
      title: "01 — CARDIO & CONDITIONING",
      items: [
        "Assault Bike Concept2 — 8 UNIDADES",
        "Remo Concept2 Model D — 6 UNIDADES",
        "SkiErg Concept2 — 4 UNIDADES",
        "Esteiras NordicTrack com inclinação negativa",
        "Cordas de batalha 15m e 20m"
      ]
    },
    { title: "02 — FORÇA LIVRE" },
    { title: "03 — MÁQUINAS" },
    { title: "04 — FUNCIONAL & MOBILITY" },
    { title: "05 — INFRAESTRUTURA" }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={["EQUIPAMENTO", "QUE NÃO TE", "LIMITA."]}
          subtitle="Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="border-b border-zinc-800 pb-8 group">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-red-500 transition-colors flex items-center justify-between cursor-pointer">
                  {cat.title}
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-zinc-600 group-hover:text-red-500"></iconify-icon>
                </h3>
                {cat.items && (
                  <ul className="mt-6 space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 font-light">
                        <iconify-icon icon="solar:record-circle-bold" className="text-zinc-800 mt-1 w-4"></iconify-icon>
                        <span className="text-sm tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
              alt="Gym Equipment Detail" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}