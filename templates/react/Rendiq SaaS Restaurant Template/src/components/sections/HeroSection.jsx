import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Inline styles for custom floating animations */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0px) rotate(-6deg); }
            50% { transform: translateY(-15px) rotate(-4deg); }
            100% { transform: translateY(0px) rotate(-6deg); }
          }
          @keyframes float-leaf-1 {
            0% { transform: translateY(0px) rotate(15deg); }
            50% { transform: translateY(-20px) rotate(25deg); }
            100% { transform: translateY(0px) rotate(15deg); }
          }
          @keyframes float-leaf-2 {
            0% { transform: translateY(0px) rotate(120deg); }
            50% { transform: translateY(-15px) rotate(100deg); }
            100% { transform: translateY(0px) rotate(120deg); }
          }
          @keyframes float-leaf-3 {
            0% { transform: translateY(0px) rotate(60deg); }
            50% { transform: translateY(-10px) rotate(75deg); }
            100% { transform: translateY(0px) rotate(60deg); }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="bg-[#FFFFFF] pt-12 md:pt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 pb-20">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 z-10 pt-8">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-[#F5F5F5] rounded-full text-xs font-semibold tracking-wide text-[#0A0A0A]">
              <span className="text-[#C8FF00] text-[10px]">●</span>
              Controle real para restaurantes por quilo
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tighter leading-[0.95] text-[#0A0A0A] mt-2">
              SEM ACHISMO.<br />
              SEM PLANILHA.<br />
              SEM DESPERDÍCIO.
            </h1>
            
            {/* Subtitle & Paragraph */}
            <div className="flex flex-col gap-4 max-w-[540px] mt-4">
              <h2 className="text-xl md:text-[22px] leading-snug font-bold text-[#0A0A0A]">
                Controle de estoque e margem em tempo real para restaurantes por quilo.
              </h2>
              <p className="text-base text-[#666666] leading-relaxed font-medium">
                Você sabia que restaurantes por quilo perdem em média 18% do faturamento em desperdício invisível? O Rendiq torna esse número visível — e controlável — em menos de 5 segundos por dia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="px-8 py-4 text-[15px] font-bold text-[#0A0A0A] bg-[#C8FF00] hover:bg-[#b8eb00] rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(200,255,0,0.25)]">
                COMEÇAR GRÁTIS
                <iconify-icon icon="solar:arrow-right-bold" width="20"></iconify-icon>
              </button>
              <button className="px-8 py-4 text-[15px] font-bold text-[#0A0A0A] bg-transparent border-2 border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] rounded-full transition-all flex items-center justify-center">
                VER COMO FUNCIONA
              </button>
            </div>
          </div>

          {/* Right Content (Floating Board Image) */}
          <div className="w-full lg:w-[50%] relative flex justify-center items-center mt-12 lg:mt-0 min-h-[500px]">
            <div className="relative w-full max-w-[500px] perspective-[1200px]">
              
              {/* Floating Leaves */}
              <div 
                className="absolute -top-12 -left-8 text-[#5E9E35] z-20 pointer-events-none drop-shadow-md"
                style={{ animation: 'float-leaf-1 5s ease-in-out infinite' }}
              >
                <iconify-icon icon="solar:leaf-bold" width="56" className="opacity-90 blur-[1px]"></iconify-icon>
              </div>
              <div 
                className="absolute top-1/3 -right-16 text-[#6BBA3C] z-20 pointer-events-none drop-shadow-lg"
                style={{ animation: 'float-leaf-2 7s ease-in-out infinite' }}
              >
                <iconify-icon icon="solar:leaf-bold" width="64" className="opacity-100"></iconify-icon>
              </div>
              <div 
                className="absolute -bottom-10 left-1/4 text-[#548A31] z-20 pointer-events-none drop-shadow-sm"
                style={{ animation: 'float-leaf-3 6s ease-in-out infinite' }}
              >
                <iconify-icon icon="solar:leaf-bold" width="48" className="opacity-80 blur-[2px]"></iconify-icon>
              </div>

              {/* The Food Board */}
              <div 
                className="relative z-10 w-full aspect-[4/3] rounded-[48px] overflow-hidden shadow-[0_40px_80px_rgba(10,10,10,0.15)] border-4 border-white/50"
                style={{ animation: 'float-slow 6s ease-in-out infinite' }}
              >
                {/* 
                  Using a contextually relevant Unsplash image of grilled food/board.
                  We use an inner transform to offset the outer rotation so the food looks natural.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=80" 
                  alt="Tábua de carnes e grelhados" 
                  className="w-full h-full object-cover transform scale-110 rotate-[6deg]"
                />
                
                {/* Subtle overlay to enhance contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Soft ground shadow */}
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/10 blur-[24px] rounded-[100%] pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="border-y border-[#E5E5E5] bg-[#FFFFFF]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E5E5E5]">
            <div className="px-6 py-8 flex flex-col gap-1 items-center justify-center text-center">
              <span className="text-3xl font-black text-[#0A0A0A] tracking-tight">&lt; 5 MIN/DIA</span>
              <span className="text-sm font-semibold text-[#666666] uppercase tracking-wider">Tempo de registro</span>
            </div>
            <div className="px-6 py-8 flex flex-col gap-1 items-center justify-center text-center">
              <span className="text-3xl font-black text-[#6BBA3C] tracking-tight">ATÉ 40%</span>
              <span className="text-sm font-semibold text-[#666666] uppercase tracking-wider">Redução de desperdício</span>
            </div>
            <div className="px-6 py-8 flex flex-col gap-1 items-center justify-center text-center">
              <span className="text-3xl font-black text-[#0A0A0A] tracking-tight">+120</span>
              <span className="text-sm font-semibold text-[#666666] uppercase tracking-wider">Restaurantes ativos</span>
            </div>
            <div className="px-6 py-8 flex flex-col gap-1 items-center justify-center text-center">
              <span className="text-3xl font-black text-[#0A0A0A] tracking-tight">14 DIAS</span>
              <span className="text-sm font-semibold text-[#666666] uppercase tracking-wider">Teste grátis</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY SECTION: Floating Dashboard Mockup */}
      <section className="bg-[rgba(200,255,0,0.08)] py-24 px-6 relative overflow-hidden border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A0A0A] mb-4">
              VISUALIZE ANTES DE PERDER.
            </h3>
            <p className="text-base text-[#666666] font-medium">
              A tela que todo dono de restaurante deveria ver antes de encerrar o turno.
            </p>
          </div>

          {/* Floating UI Card */}
          <div className="w-full max-w-2xl bg-[#FAFAFA] rounded-[32px] p-8 md:p-10 border border-[#E5E5E5] shadow-[0_32px_64px_rgba(0,0,0,0.08)] transform hover:-translate-y-2 transition-transform duration-500">
            
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-bold text-[#0A0A0A]">Resumo de Hoje</span>
              <span className="px-3 py-1.5 bg-[#C8FF00]/20 text-[#548A31] rounded-full text-xs font-bold flex items-center gap-2 border border-[#C8FF00]/50 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#6BBA3C] animate-pulse"></span>
                Ao vivo
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E5E5] shadow-sm">
                <span className="text-sm text-[#666666] font-semibold block mb-2">Desperdício Estimado</span>
                <span className="text-3xl font-black text-[#E63946] tracking-tight">R$ 42,50</span>
              </div>
              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E5E5] shadow-sm">
                <span className="text-sm text-[#666666] font-semibold block mb-2">Margem do Dia</span>
                <span className="text-3xl font-black text-[#6BBA3C] tracking-tight">34%</span>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5E5] p-6 relative overflow-hidden shadow-sm">
               <span className="text-sm text-[#666666] font-semibold block mb-6">Registro de Sobras</span>
               <div className="flex flex-col gap-4">
                 {[
                   { name: 'Arroz Branco', qty: '1.2kg', status: 'normal' },
                   { name: 'Feijão', qty: '0.8kg', status: 'normal' },
                   { name: 'Alcatra Grelhada', qty: '2.5kg', status: 'critical' },
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-[#F5F5F5] hover:bg-[#F0F0F0] transition-colors">
                     <span className="text-base font-bold text-[#0A0A0A]">{item.name}</span>
                     <span className={`text-base font-black ${item.status === 'critical' ? 'text-[#E63946]' : 'text-[#666666]'}`}>
                       {item.qty}
                     </span>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;