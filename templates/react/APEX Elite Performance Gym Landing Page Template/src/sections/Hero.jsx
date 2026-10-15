import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#4A6FA5]/20 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#C8F135]/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 pt-12 lg:pt-0">
          <Badge dotColor="#FF8040" className="animate-fade-in-up">
            Performance de elite · São Paulo
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-[96px] font-black leading-[0.9] tracking-tighter uppercase animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="block text-white">ELEVE</span>
            <span className="block text-white">SEU</span>
            <span className="block text-[#C8F135]">LIMITE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl font-normal leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Treinamento personalizado, protocolos de alto rendimento e uma estrutura que não aceita mediocridade. Construída para quem leva o corpo a sério.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button variant="primary" icon="solar:arrow-right-line-duotone">
              Agendar visita gratuita
            </Button>
            <Button variant="secondary">
              Falar com especialista
            </Button>
          </div>
        </div>

        {/* Right Image/Widget */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0 animate-fade-in text-right">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#100F0F] via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
              alt="Atleta em treinamento" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Widget */}
          <div className="absolute bottom-12 left-[-10%] md:-left-8 z-20 bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF8040]/20 text-[#FF8040]">
              <iconify-icon icon="solar:star-fall-bold-duotone" width="24"></iconify-icon>
            </div>
            <div>
              <div className="text-2xl font-black text-white">4.9</div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">Avaliação média</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}