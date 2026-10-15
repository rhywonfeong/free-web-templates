import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Gym interior" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-radial-hero"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#FF1E00]"></div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#D9D9D9]">
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] leading-[0.9] font-black text-white mb-8 tracking-tighter">
            <span className="block">SEM MÁGICA</span>
            <span className="block">SEM ATALHOS</span>
            <span className="block text-[#FF1E00]">SEM DESCULPAS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#D9D9D9] mb-12 max-w-2xl font-light">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <a href="#planos" className="group relative inline-flex items-center justify-center px-8 py-5 bg-gradient-primary text-white font-bold tracking-widest uppercase text-sm hover:shadow-[0_0_40px_rgba(255,30,0,0.3)] transition-all duration-300 rounded-none overflow-hidden">
              <span className="relative z-10">Começar Agora</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#espaco" className="inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-none">
              Conhecer o Espaço
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-12 gap-y-6 pt-12 border-t border-white/10">
            {[
              { label: 'Horário', value: '05H–23H' },
              { label: 'Funcionamento', value: '7 DIAS' },
              { label: 'Área', value: '1.800M²' },
              { label: 'Alunos', value: '+1.200 ALUNOS' },
              { label: 'Fundação', value: 'DESDE 2018' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] text-[#737069] tracking-widest uppercase">{stat.label}</span>
                <span className="font-display text-xl font-bold text-white tracking-wide">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;