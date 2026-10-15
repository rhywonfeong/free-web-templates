import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-dark">
      {/* Decorative Warm Glow */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(197,109,59,0.12),transparent_70%)] pointer-events-none rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Content Column */}
        <div className="flex flex-col items-start space-y-8 animate-fade-up">
          <div className="space-y-4">
            <span className="text-brand font-semibold text-xs tracking-[0.1em] uppercase">
              Aprendizado Culinário Profissional
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.15] text-light tracking-tight text-balance">
              Evolua na cozinha profissional com aulas técnicas e <span className="text-brand">IA 24h</span>
            </h1>
            <p className="text-lg text-[#CEC4B8] leading-[1.65] max-w-xl">
              Aulas gravadas por um chef com +20 anos de experiência + assistente de inteligência artificial para tirar suas dúvidas técnicas a qualquer hora. Tudo por menos que um jantar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <Button size="lg" onClick={scrollToWaitlist}>
              Garantir meu lugar na lista
            </Button>
            <div className="flex flex-col text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <iconify-icon icon="solar:fire-bold" className="text-brand"></iconify-icon>
                Preço fundador <span className="text-[#CF875E] font-medium">R$29,90/mês</span>
              </span>
              <span>travado para sempre</span>
            </div>
          </div>
        </div>

        {/* Visual Column - App Mockup */}
        <div className="relative w-full h-[600px] flex justify-center lg:justify-end animate-fade-up delay-200">
          {/* Main Device */}
          <div className="w-[320px] h-[640px] bg-[#191512] rounded-[32px] border-[6px] border-[#3D3835] shadow-2xl relative overflow-hidden flex flex-col z-20">
            {/* Status bar spacer */}
            <div className="h-6 w-full shrink-0"></div>
            
            {/* App Header */}
            <div className="px-5 py-4 flex justify-between items-center shrink-0">
              <div>
                <p className="text-[10px] text-muted tracking-wide uppercase font-medium">Boa tarde, Fernando</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <iconify-icon icon="solar:fire-bold-duotone" className="text-brand" width="14"></iconify-icon>
                  <span className="font-display font-semibold text-sm text-light tracking-tight">BRASEA</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-card border-subtle flex items-center justify-center text-light">
                <iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-5 space-y-6">
              {/* In Progress Card */}
              <div className="bg-card rounded-2xl p-4 border-subtle relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <span className="text-[10px] text-brand tracking-widest font-semibold uppercase">Em andamento</span>
                </div>
                <h3 className="font-display font-semibold text-light text-base mb-3 relative z-10">Técnicas de Fundo</h3>
                <div className="space-y-1.5 relative z-10">
                  <div className="flex justify-between text-[11px] text-muted">
                    <span>Progresso</span>
                    <span>65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#292624] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand to-[#CF875E] w-[65%] rounded-full shadow-[0_0_8px_rgba(197,109,59,0.5)]"></div>
                  </div>
                </div>
                <button className="mt-4 text-xs font-medium text-light flex items-center gap-1 hover:text-brand transition-colors relative z-10">
                  Continuar <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                </button>
              </div>

              {/* Technique of the Day */}
              <div className="space-y-3">
                <h4 className="font-display font-medium text-sm text-light">Técnica do Dia</h4>
                <div className="bg-card rounded-2xl border-subtle overflow-hidden relative">
                  <div className="h-32 bg-[#292624] relative">
                    <img src="https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=800&q=80" alt="Chef cutting" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D3835] to-transparent"></div>
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 text-[9px] text-[#CEC4B8] uppercase tracking-wider font-semibold">
                      Essencial
                    </div>
                  </div>
                  <div className="p-4 pt-2">
                    <h5 className="font-display font-medium text-[15px] text-light mb-1">O Corte Brunoise Perfeito</h5>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#CF875E] bg-brand/10 w-fit px-2 py-1 rounded-full border border-brand/20 mt-2">
                      <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon>
                      <span>Sous-Chef AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-card/95 backdrop-blur-md rounded-full border-strong p-1.5 flex items-center shadow-lg z-30">
              <button className="w-8 h-8 flex items-center justify-center text-muted hover:text-light transition-colors rounded-full hover:bg-white/5">
                <iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
              </button>
              <input 
                type="text" 
                placeholder="Pergunte ao Chef Brasea..." 
                className="flex-1 bg-transparent border-none text-[13px] text-light px-2 focus:outline-none placeholder:text-muted/70"
                disabled
              />
              <button className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shadow-glow">
                <iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
              </button>
            </div>
          </div>

          {/* Secondary Floating Cards */}
          <div className="absolute top-32 -left-12 lg:-left-20 w-[240px] bg-card rounded-xl p-4 border-strong shadow-xl z-30 hidden md:block rotate-[-2deg]">
            <h5 className="font-display font-semibold text-sm text-light mb-1">Redução de Demi-Glace</h5>
            <p className="text-[11px] text-muted leading-relaxed mb-3">O segredo dos grandes molhos. Aprenda o ponto de extração máximo de sabor e brilho.</p>
            <span className="text-[11px] text-brand font-medium flex items-center gap-1">VER AULA <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
          </div>

          {/* Decorative Arrow */}
          <div className="absolute -top-4 -right-8 text-[#8A847B] opacity-50 hidden lg:block">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
              <path d="M10 50 Q 20 20 50 10" fill="none" />
              <path d="M40 8 L 52 8 L 50 20" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;