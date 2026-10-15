import React from 'react';
import Button from '../UI/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-900">
      {/* Background abstract elements - Sharp geometric language */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-neutral-950 clip-diagonal-right -z-10"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 relative z-10">
            {/* Overline Typography */}
            <span className="inline-block text-brand-green text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mb-6">
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </span>
            
            {/* Display XL - Black (900) Weight */}
            <h1 className="text-5xl sm:text-6xl md:text-[6rem] leading-[1.05] font-display font-black tracking-tighter uppercase mb-8 text-neutral-50">
              Sem Mágica<br />
              Sem Atalhos<br />
              <span className="text-brand-green drop-shadow-[0_0_20px_rgba(141,182,0,0.4)]">Sem Desculpas</span>
            </h1>
            
            {/* Body LG - Regular */}
            <p className="text-neutral-200 text-base md:text-lg max-w-xl leading-relaxed mb-10 border-l-2 border-brand-green pl-6 font-regular">
              Treinos progressivos e acompanhamento real! Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Button size="lg">Começar Agora</Button>
              <Button size="lg" variant="secondary">Conhecer o Espaço</Button>
            </div>

            {/* Social Proof Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-800">
              {[
                { label: 'Horário', val: '05H–23H' },
                { label: 'Dias na semana', val: '7 DIAS' },
                { label: 'Área total', val: '1.800M²' },
                { label: 'Base de alunos', val: '+1.200' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-extrabold text-neutral-50 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Collage Column */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[700px] w-full hidden lg:block">
            {/* Dark overlay geometric block */}
            <div className="absolute inset-0 bg-neutral-950 clip-diagonal transform translate-x-4 translate-y-4"></div>
            
            {/* Main Image with Gradient Overlay & Polygon Clip */}
            <div className="absolute inset-0 overflow-hidden clip-diagonal z-10 border-4 border-neutral-950 group">
              {/* Dark Gradient Overlay for optimal contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent z-20 group-hover:bg-brand-green/10 transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                alt="Atleta treinando intenso" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Glassmorphism Sutil Floating Card - Tech-forward & Purple core accent */}
            <div className="absolute top-1/3 -left-8 bg-neutral-850/60 backdrop-blur-md border border-neutral-600 p-4 rounded-2xl shadow-glow-secondary z-30 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                <iconify-icon icon="solar:bolt-bold" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-neutral-50 font-bold text-sm tracking-tight uppercase">High Energy</div>
                <div className="text-brand-purple text-[10px] font-semibold uppercase tracking-widest">Sessão em andamento</div>
              </div>
            </div>
            
            {/* High-contrast Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green clip-shard z-30 shadow-glow-primary"></div>
            <div className="absolute top-1/4 -right-12 w-24 h-64 bg-brand-neon clip-diagonal z-0 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}