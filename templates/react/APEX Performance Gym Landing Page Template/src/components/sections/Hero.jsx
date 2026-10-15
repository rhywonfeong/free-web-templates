import React from 'react';
import { Button } from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 overflow-hidden bg-[#FFF8F1]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
          alt="Academia Alto Padrão" 
          className="w-full h-full object-cover object-center opacity-10 mix-blend-multiply"
        />
        {/* Gradients for depth and focus adjusted for light theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F1]/80 via-transparent to-[#FFF8F1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F1] via-[#FFF8F1]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <span className="w-8 h-[2px] bg-[#FF8000]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2B2B2B]">
              Alto Padrão · São Paulo · Desde 2012
            </span>
          </div>

          {/* Headlines */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#2B2B2B] leading-[0.9] mb-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
            Seu corpo<br />não mente.
          </h1>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#FF8000] mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
            Os resultados, também não.
          </h2>

          {/* Body */}
          <p className="text-lg md:text-xl text-[#5C554E] max-w-2xl mb-10 leading-relaxed font-normal opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            Treinamento de alta performance não é para todo mundo.
            É para quem está disposto a ser consistente quando ninguém está olhando,
            e a aparecer mesmo quando não quer.<br/>
            <strong className="text-[#2B2B2B] font-semibold">Na APEX, a gente constrói isso junto.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
            <Button href="#planos" variant="primary">Quero começar agora</Button>
            <Button href="#contato" variant="outlineBlack">Falar com um especialista</Button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Hero;