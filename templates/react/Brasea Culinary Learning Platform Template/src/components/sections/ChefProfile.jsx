import React from 'react';

const ChefProfile = () => {
  return (
    <section className="bg-[#3A4035] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-light mb-12 text-center md:text-left">
          Quem vai te ensinar?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="w-full md:w-2/5 aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" 
              alt="Chef Hugo Ferreira" 
              className="w-full h-full object-cover grayscale-[20%] contrast-125"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5 text-[#CEC4B8]">
            <h3 className="font-display font-semibold text-3xl text-light mb-2">Chef Hugo Ferreira</h3>
            <p className="text-[#C56D3B] font-medium text-sm tracking-wide uppercase mb-8">
              Chefe de Cozinha · +20 anos de experiência
            </p>
            
            <div className="space-y-5 text-[15px] leading-relaxed max-w-xl">
              <p>
                Comecei na cozinha aos 11 anos e nunca mais saí. Em mais de duas décadas de carreira, passei por restaurantes, eventos, culinária japonesa e operações de grande escala — de subchef a chefe de cozinha executivo.
              </p>
              <p>
                Formado pelo Instituto Gourmet em Chef de Cozinha Internacional e Gestão de Serviços de Alimentação, hoje comando cozinhas profissionais e atuo como chef pessoal.
              </p>
              <p>
                No Brasea, vou ensinar as técnicas que aprendi na prática do serviço — do jeito que a cozinha real funciona, sem enrolação.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/20 border border-white/10 rounded-full text-xs font-medium text-light">
                <iconify-icon icon="solar:chef-hat-bold-duotone" className="text-[#A3AA98]"></iconify-icon>
                Chef Executivo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/20 border border-white/10 rounded-full text-xs font-medium text-light">
                <iconify-icon icon="solar:diploma-bold-duotone" className="text-[#A3AA98]"></iconify-icon>
                Instituto Gourmet
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/20 border border-white/10 rounded-full text-xs font-medium text-light">
                <iconify-icon icon="solar:map-point-bold-duotone" className="text-[#A3AA98]"></iconify-icon>
                São Paulo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefProfile;