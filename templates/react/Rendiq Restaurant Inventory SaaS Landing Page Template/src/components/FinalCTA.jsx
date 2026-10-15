import React from 'react'

const FinalCTA = () => {
  return (
    <section className="bg-lime-400 py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 text-lime-300 opacity-50 transform translate-x-1/3 -translate-y-1/3">
        <iconify-icon icon="solar:bolt-bold" width="400"></iconify-icon>
      </div>
      <div className="absolute bottom-0 left-0 text-lime-300 opacity-50 transform -translate-x-1/3 translate-y-1/3">
        <iconify-icon icon="solar:bolt-bold" width="300"></iconify-icon>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-6xl md:text-[80px] text-neutral-900 mb-10 leading-[1]">
          A MARGEM<br />NÃO ESPERA.<br />COMECE HOJE.
        </h2>
        
        <button className="bg-neutral-900 text-lime-400 font-bold px-10 py-5 rounded-full hover:bg-neutral-800 hover:scale-105 transition-all active:scale-95 text-base uppercase tracking-widest shadow-2xl">
          COMEÇAR TESTE GRATUITO
        </button>
      </div>

      {/* Ticker Tape */}
      <div className="absolute bottom-0 left-0 w-full bg-neutral-900 text-lime-400 py-3 overflow-hidden flex whitespace-nowrap">
        <div className="animate-ticker flex space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
          <span>1 4 · D I A S · G R Á T I S</span>
          <span>·</span>
          <span>S E M · C A R T Ã O</span>
          <span>·</span>
          <span>A C E S S O · C O M P L E T O</span>
          <span>·</span>
          <span>C A N C E L E · Q U A N D O · Q U I S E R</span>
          <span>·</span>
          {/* Repeat for seamless loop */}
          <span>1 4 · D I A S · G R Á T I S</span>
          <span>·</span>
          <span>S E M · C A R T Ã O</span>
          <span>·</span>
          <span>A C E S S O · C O M P L E T O</span>
          <span>·</span>
          <span>C A N C E L E · Q U A N D O · Q U I S E R</span>
          <span>·</span>
          <span>1 4 · D I A S · G R Á T I S</span>
          <span>·</span>
          <span>S E M · C A R T Ã O</span>
          <span>·</span>
          <span>A C E S S O · C O M P L E T O</span>
          <span>·</span>
          <span>C A N C E L E · Q U A N D O · Q U I S E R</span>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA