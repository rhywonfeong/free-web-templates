import React from 'react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
          alt="Man training intensely" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Environmental Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,56,0,0.2)_0%,var(--color-carbon)_80%)]"></div>
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]"></div>
        {/* Bottom Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[var(--color-ash)] bg-[var(--color-iron)]/50 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-silver)]">Beyond Limits Known™ — Desde 2012</span>
        </div>

        <h1 className="font-display text-[80px] md:text-[140px] lg:text-[160px] leading-[0.85] tracking-[-0.04em] text-white mb-8 max-w-5xl">
          O LIMITE NÃO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-fire)] glow-text">EXISTE.</span>
        </h1>

        <p className="text-[16px] md:text-[18px] text-[var(--color-silver)] max-w-2xl leading-relaxed mb-12 font-light">
          BLK é mais do que uma academia. É um sistema de transformação física e mental projetado para quem se recusa a ser mediano. <span className="text-white font-medium">Aqui, o protocolo é sagrado.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button variant="primary">Agendar Visita Gratuita</Button>
          <Button variant="secondary" className="border border-[var(--color-ash)] hover:border-white">
            <iconify-icon icon="solar:chat-round-dots-linear" className="mr-2 text-lg"></iconify-icon>
            Falar com Especialista
          </Button>
        </div>
      </div>

      {/* Decorative architectural line */}
      <div className="absolute bottom-0 left-0 w-full architectural-line-red opacity-50 z-10"></div>
    </section>
  );
}