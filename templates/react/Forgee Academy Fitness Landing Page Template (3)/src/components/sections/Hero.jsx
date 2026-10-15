import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row relative z-10 pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-20 h-full">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#FF6B2B]/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Left Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center relative z-20 h-full mt-10 md:mt-0">
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E8280D] animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Beyond Limits Known™ · Est. 2018</span>
        </div>

        <h1 className="font-display font-black text-[3.5rem] md:text-8xl lg:text-[7rem] leading-[0.85] tracking-tighter uppercase mb-6 text-white drop-shadow-lg">
          Sem Mágica <br />
          Sem Atalhos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8280D] to-[#FF6B2B]">Sem Desculpas</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-300 max-w-md mb-8 font-medium leading-relaxed">
          Treinos progressivos e acompanhamento real. Um espaço desenhado para quem treina com intenção. Só você, o equipamento e o trabalho.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Link to="/agendar" className="bg-[#E8280D] hover:bg-[#CC1F00] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,40,13,0.4)] flex items-center gap-3">
            Começar Agora
            <iconify-icon icon="solar:arrow-right-line-duotone" class="text-xl"></iconify-icon>
          </Link>
          <a href="#espaco" className="flex items-center gap-3 text-white hover:text-[#FF6B2B] font-bold uppercase tracking-wider py-4 px-6 transition-colors">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <iconify-icon icon="solar:play-circle-bold" class="text-2xl"></iconify-icon>
            </div>
            O Espaço
          </a>
        </div>

        {/* Categories Chips */}
        <div className="mt-auto pt-8 border-t border-white/10 w-full max-w-xl">
          <div className="flex flex-wrap gap-2">
            {['Forgee Strength', 'Conditioning', 'Mobility', 'Personal Training', 'Alta Intensidade'].map((tag, i) => (
              <span key={i} className="text-xs uppercase tracking-wider py-2 px-4 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-[#FF6B2B] hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Container - Overlapping visually like the reference */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto z-0 flex items-end justify-end">
         <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
            alt="Atleta em treinamento" 
            className="object-cover object-center h-full w-full clip-image-hero grayscale hover:grayscale-0 transition-all duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#131313]/50 to-[#131313]"></div>
      </div>

    </div>
  );
};

export default Hero;