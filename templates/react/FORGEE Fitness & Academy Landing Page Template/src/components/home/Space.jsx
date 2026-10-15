import React from 'react';

const Space = () => {
  const categories = [
    {
      title: "CARDIO & CONDITIONING",
      items: [
        { name: "Assault Bike Concept2", qty: "8 UNIDADES" },
        { name: "Remo Concept2 Model D", qty: "6 UNIDADES" },
        { name: "SkiErg Concept2", qty: "4 UNIDADES" },
        { name: "Esteiras NordicTrack com inclinação negativa", qty: null },
        { name: "Cordas de batalha 15m e 20m", qty: null }
      ]
    },
    { title: "FORÇA LIVRE", items: [] },
    { title: "MÁQUINAS", items: [] },
    { title: "FUNCIONAL & MOBILITY", items: [] },
    { title: "INFRAESTRUTURA", items: [] }
  ];

  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 max-w-2xl">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6">
            EQUIPAMENTO<br />QUE NÃO TE<br /><span className="text-[#FF1E00]">LIMITA.</span>
          </h2>
          <p className="text-lg text-[#D9D9D9] font-light">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image Block */}
          <div className="lg:col-span-5 h-[600px] relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop" 
              alt="Gym Equipment" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </div>

          {/* List Block */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="border-b border-white/10 pb-8">
                <div className="flex items-center justify-between mb-6 group cursor-pointer">
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide group-hover:text-[#FF1E00] transition-colors">
                    {cat.title}
                  </h3>
                  <iconify-icon icon="solar:alt-arrow-down-line-duotone" class="text-2xl text-[#636363] group-hover:text-white transition-colors"></iconify-icon>
                </div>
                
                {cat.items.length > 0 && (
                  <ul className="flex flex-col gap-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-between py-2">
                        <span className="text-[#D9D9D9] text-sm">{item.name}</span>
                        {item.qty && (
                          <span className="text-xs font-semibold tracking-widest text-[#636363] bg-[#1a1a1a] px-3 py-1">
                            {item.qty}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Space;