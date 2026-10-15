import React from 'react'
import Button from '../ui/Button'

const CTASection = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-[#E8190F]">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1920&q=80')] mix-blend-overlay opacity-20 object-cover"></div>
      
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D] opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D] opacity-80"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="font-display text-5xl md:text-8xl leading-[0.85] tracking-tighter text-white mb-6 drop-shadow-2xl">
          A DECISÃO JÁ FOI TOMADA.<br/>
          AGORA É A <span className="text-[#0D0D0D] block mt-2 bg-white px-4 py-2 inline-block -rotate-2">AÇÃO.</span>
        </h2>
        
        <p className="text-white font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-12 opacity-90">
          AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS.
        </p>
        
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] text-xl px-12 py-6 border-none"
        >
          Agendar Visita Gratuita
        </Button>
      </div>
    </section>
  )
}

export default CTASection