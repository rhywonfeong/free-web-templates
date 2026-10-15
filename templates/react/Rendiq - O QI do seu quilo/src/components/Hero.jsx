import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Tempo médio de registro', value: '< 5 MIN/DIA' },
    { label: 'Redução de desperdício', value: 'ATÉ 40%' },
    { label: 'Restaurantes ativos', value: '+120' },
    { label: 'Teste grátis', value: '14 DIAS' },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Main Content */}
      <div className="relative flex-grow flex items-center justify-center px-6 py-20 z-10">
        <div 
          className="max-w-2xl w-full text-center p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-4xl md:text-6xl font-display tracking-tight text-white mb-6 leading-tight flex flex-col">
            <span>SEM ACHISMO.</span>
            <span>SEM PLANILHA.</span>
            <span>SEM DESPERDÍCIO.</span>
          </h1>
          
          <h2 className="text-lg md:text-xl font-h2 text-white/90 mb-4">
            Controle de estoque e margem em tempo real para restaurantes por quilo.
          </h2>
          
          <p className="text-sm md:text-base font-body text-white/70 mb-10 max-w-xl mx-auto">
            Você sabia que restaurantes por quilo perdem em média 18% do faturamento em desperdício invisível? O Rendiq torna esse número visível — e controlável — em menos de 5 segundos por dia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-lime-400 text-neutral-900 text-sm font-label px-8 py-3 rounded-full hover:bg-lime-300 transition-colors flex items-center justify-center gap-2">
              COMEÇAR GRÁTIS <iconify-icon icon="solar:arrow-right-linear" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white text-white text-sm font-label px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              VER COMO FUNCIONA
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 w-full bg-black/45 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="py-6 px-4 text-center">
              <div className="text-xl md:text-2xl font-h2 text-white mb-1">{stat.value}</div>
              <div className="text-[0.625rem] font-label text-white/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;