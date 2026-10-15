import React from 'react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-[#00F9E4] relative overflow-hidden">
      {/* Texture/Noise overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0A0A0A] mb-8">
          A DECISÃO JÁ FOI TOMADA.<br />
          AGORA É A AÇÃO.
        </h2>
        
        <Button 
          size="lg" 
          className="bg-[#0A0A0A] text-[#00F9E4] hover:bg-[#121212] hover:text-[#33FFEE] border border-[#0A0A0A] hover:shadow-xl"
          onClick={() => navigate('/agendar')}
        >
          AGENDAR UMA VISITA GRATUITA
        </Button>
      </div>
    </section>
  );
};

export default CTASection;