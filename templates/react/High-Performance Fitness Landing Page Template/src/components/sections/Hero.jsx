import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        {/* Radial Fire Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,58,0,0.15),transparent_50%)]"></div>
        {/* Deep black gradient fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        {/* Film grain texture simulation */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col items-start pt-12 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-widest text-[#CCCCCC] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF3A00] animate-pulse"></span>
            Bem-vindo ao próximo nível
          </div>
          
          <h1 className="font-display font-black text-[12vw] sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.9] uppercase tracking-tighter text-[#F5F5F5] mb-8 drop-shadow-2xl">
            Não é uma academia.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3A00] to-[#FF5A1A]">É um sistema</span><br/>
            de transformação.
          </h1>
          
          <p className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl font-light leading-relaxed mb-10 border-l-2 border-[#3D3D3D] pl-6">
            A Forge é um ambiente de alto padrão criado para quem leva o treinamento a sério. Infraestrutura de elite, coaches especializados e um protocolo de evolução contínua — tudo em um único espaço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="voltage" icon="solar:arrow-right-up-linear" className="justify-center">Agendar visita gratuita</Button>
            <Button variant="outline" className="justify-center">Falar com especialista</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;