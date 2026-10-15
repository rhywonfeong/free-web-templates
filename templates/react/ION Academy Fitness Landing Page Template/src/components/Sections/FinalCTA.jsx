import React from 'react';
import Button from '../UI/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-brand-green relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80')] bg-cover bg-center mix-blend-overlay opacity-10 filter grayscale"></div>
      
      {/* Dynamic diagonal cuts matching the electric style */}
      <div className="absolute top-0 left-0 w-32 h-full bg-neutral-950 clip-diagonal-right opacity-20 transform -translate-x-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neutral-950 clip-shard opacity-20 transform translate-x-20 translate-y-20"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-neutral-950 mb-6 max-w-4xl mx-auto leading-none">
          A decisão já foi tomada.<br/>
          Agora é a ação.
        </h2>
        
        <p className="text-neutral-900 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-12">
          A G E N D E · U M A · V I S I T A · G R A T U I T A · S E M · C O M P R O M I S S O · T R A G A · T Ê N I S
        </p>
        
        <Button 
          size="lg" 
          className="bg-neutral-950 text-brand-green hover:bg-neutral-900 shadow-xl border border-neutral-950 hover:scale-105"
        >
          Agendar Visita Gratuita
        </Button>
      </div>
    </section>
  );
}