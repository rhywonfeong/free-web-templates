import React from 'react';

const FeatureItem = ({ icon, title, description, align = 'left' }) => (
  <div className={`flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : 'items-start text-left'} max-w-xs group cursor-default`}>
    <div className="w-12 h-12 rounded-full bg-[#C56D3B]/10 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm border border-brand/20">
      <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
    </div>
    <h3 className="font-display font-semibold text-lg text-[#292624] mb-2">{title}</h3>
    <p className="text-[#6D6861] text-sm leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-cream py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[40px] tracking-tight text-[#191512] mb-4">
          Tudo que você precisa para evoluir na cozinha
        </h2>
        <p className="text-[#47433F] text-lg max-w-2xl mx-auto">
          Uma plataforma completa no seu celular, sem precisar instalar nada.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* Left Features */}
        <div className="flex flex-col gap-10 lg:gap-16 w-full lg:w-1/3 order-2 lg:order-1 relative z-10">
          <FeatureItem 
            icon="solar:clapperboard-play-linear" 
            title="Aulas técnicas objetivas" 
            description="Vídeos curtos gravados por um chef profissional. Direto ao ponto, como na cozinha."
            align="right"
          />
          <FeatureItem 
            icon="solar:smart-home-angle-linear" 
            title="Assistente IA 24H" 
            description="Tire dúvidas técnicas a qualquer hora. Como ter um chef ao lado sempre."
            align="right"
          />
          <FeatureItem 
            icon="solar:smartphone-update-linear" 
            title="Funciona no navegador" 
            description="Acesse pelo celular sem instalar nada. Abre como um app direto do navegador."
            align="right"
          />
        </div>

        {/* Central Mockup */}
        <div className="w-full max-w-[320px] order-1 lg:order-2 relative z-20 shrink-0">
          {/* Connecting Arcs Background - simplified for web representation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-dashed border-[#C56D3B]/20 rounded-full pointer-events-none hidden lg:block -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[1px] border-dashed border-[#C56D3B]/30 rounded-full pointer-events-none hidden lg:block -z-10"></div>

          <div className="h-[600px] bg-[#FEFDFB] rounded-[32px] border-[8px] border-[#292624] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col relative">
            <div className="h-6 w-full shrink-0 bg-[#F9F5EE]"></div>
            <div className="px-5 pb-4 pt-2 border-b border-[#E5DFD5] bg-[#F9F5EE] shrink-0">
              <span className="text-[9px] font-semibold tracking-widest text-brand uppercase block mb-1">Conhecimento Técnico</span>
              <h3 className="font-display font-semibold text-[#191512] text-xl">Biblioteca de Técnicas</h3>
              
              <div className="mt-4 relative">
                <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A847B]"></iconify-icon>
                <input 
                  type="text" 
                  placeholder="Buscar técnicas, cortes..." 
                  className="w-full bg-white border border-[#E5DFD5] rounded-xl py-2 pl-9 pr-3 text-[13px] text-[#47433F] outline-none"
                  readOnly
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto no-scrollbar mt-3 pb-1">
                <span className="px-3 py-1 bg-[#292624] text-white text-[11px] rounded-full shrink-0">Tudo</span>
                <span className="px-3 py-1 bg-white border border-[#E5DFD5] text-[#47433F] text-[11px] rounded-full shrink-0">Cortes</span>
                <span className="px-3 py-1 bg-white border border-[#E5DFD5] text-[#47433F] text-[11px] rounded-full shrink-0">Molhos</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#F9F5EE] p-4 space-y-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-sm">
                <div className="h-24 bg-neutral-200 relative">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" alt="Cooking" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-[#191512]/80 backdrop-blur-md text-[#E0B463] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#E0B463]/30">Avançado</div>
                </div>
                <div className="p-3">
                  <h4 className="font-display font-medium text-[#191512] text-sm mb-1">Corte Brunoise Perfeito</h4>
                  <p className="text-[11px] text-[#6D6861] leading-relaxed mb-3 line-clamp-2">Domine a técnica de cubos milimétricos essenciais para refogados a guarnições de alta gastronomia.</p>
                  <span className="text-[11px] text-brand font-medium flex items-center gap-1">VER AULA <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
                </div>
              </div>
              
               {/* Card 2 Partial */}
               <div className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-sm opacity-70">
                <div className="h-24 bg-neutral-200 relative">
                  <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" alt="Smoke" className="w-full h-full object-cover" />
                   <div className="absolute top-2 left-2 bg-[#191512]/80 backdrop-blur-md text-[#CF875E] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#CF875E]/30">Intermediário</div>
                </div>
                <div className="p-3">
                  <h4 className="font-display font-medium text-[#191512] text-sm">Emulsões Quentes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-10 lg:gap-16 w-full lg:w-1/3 order-3 relative z-10">
          <FeatureItem 
            icon="solar:route-linear" 
            title="Trilhas por estação" 
            description="Garde manger, saucier, pâtisserie... Evolua na estação que você precisa."
          />
          <FeatureItem 
            icon="solar:target-linear" 
            title="Progresso visível" 
            description="Saiba exatamente onde você está e o que falta para dominar cada técnica."
          />
          <FeatureItem 
            icon="solar:bolt-linear" 
            title="Aprenda no seu ritmo" 
            description="Assista quando puder; antes do serviço, no intervalo, em casa."
          />
        </div>

      </div>
    </section>
  );
};

export default Features;