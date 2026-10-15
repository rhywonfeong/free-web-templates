import React from 'react';
import Button from '../../components/ui/Button';

const FinalCTA = () => {
  return (
    <section className="relative py-32 bg-[#E8400A] overflow-hidden flex items-center justify-center text-center">
      {/* Texture/Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Ticker Tape Background */}
      <div className="absolute top-4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
        <p className="font-display font-black text-6xl tracking-widest text-black">
          A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S · A G E N D E U M A V I S I T A · G R A T U I T A
        </p>
      </div>
      <div className="absolute bottom-4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none transform -scale-x-100">
        <p className="font-display font-black text-6xl tracking-widest text-black">
          A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S · A G E N D E U M A V I S I T A · G R A T U I T A
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="font-display font-black text-6xl md:text-[90px] uppercase leading-[0.9] tracking-tight text-white mb-12 shadow-black drop-shadow-xl">
          A DECISÃO JÁ FOI TOMADA.<br/>
          <span className="text-black">AGORA É A AÇÃO.</span>
        </h2>
        
        <Button 
          variant="primary" 
          className="bg-black hover:bg-[#111111] text-white text-lg md:text-xl px-12 py-6 border border-black hover:border-white transition-all shadow-2xl"
        >
          Agendar Visita Gratuita
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;