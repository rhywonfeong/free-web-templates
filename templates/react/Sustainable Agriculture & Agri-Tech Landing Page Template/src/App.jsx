import React, { useEffect, useRef, useState } from 'react';
import UnicornScene from "unicornstudio-react";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Campo from './pages/Campo';
import Allevamento from './pages/Allevamento';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll((winScroll / height) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 mix-blend-difference pointer-events-none">
      <span className="text-[10px] font-bold text-white tracking-widest">01</span>
      <div className="w-[1px] h-32 bg-white/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-[#eab308] transition-all duration-100 ease-out" style={{ height: `${scroll}%` }}></div>
      </div>
      <span className="text-[10px] font-bold text-white tracking-widest">02</span>
    </aside>
  );
};

const TemplateHero = () => {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }
        
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollDistance = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
        const isMobile = window.innerWidth < 768;

        if (contentRef.current) {
          contentRef.current.style.opacity = 1 - progress * 1.5;
          contentRef.current.style.transform = `translateY(${progress * 50}px)`;
        }

        if (imageWrapperRef.current) {
          const targetWidth = isMobile ? 90 : 30;
          const targetHeight = isMobile ? 24 : 70;
          const targetLeft = isMobile ? 5 : 35;
          const targetTop = isMobile ? 38 : 15;

          const width = 100 + (targetWidth - 100) * progress;
          const height = 100 + (targetHeight - 100) * progress;
          const left = 0 + (targetLeft - 0) * progress;
          const top = 0 + (targetTop - 0) * progress;
          const borderRadius = progress * 16;

          imageWrapperRef.current.style.width = `${width}%`;
          imageWrapperRef.current.style.height = `${height}%`;
          imageWrapperRef.current.style.left = `${left}%`;
          imageWrapperRef.current.style.top = `${top}%`;
          imageWrapperRef.current.style.borderRadius = `${borderRadius}px`;
        }

        if (overlayRef.current) {
          overlayRef.current.style.opacity = Math.min(Math.max(0.6 - progress * 0.4, 0), 0.8);
        }

        cardsRef.current.forEach((card) => {
          if (!card) return;
          const direction = card.dataset.direction.split(',').map(Number);
          const cardProgress = Math.min(Math.max((progress - 0.15) * 1.2, 0), 1);
          const ease = 1 - Math.pow(1 - cardProgress, 4);

          const translateX = direction[0] * 50 * (1 - ease);
          const translateY = direction[1] * 30 * (1 - ease);
          const scale = 0.8 + 0.2 * ease;

          card.style.opacity = ease;
          card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
        });

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#06120b]" style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div ref={imageWrapperRef} className="absolute inset-0 overflow-hidden will-change-transform bg-[#06120b]">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2000&auto=format&fit=crop"
              alt="Agroland Hero"
              className="absolute inset-0 w-full h-full object-cover animate-breathe opacity-70"
            />
            <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-[#06120b] via-[#06120b]/40 to-transparent transition-opacity duration-500 opacity-60"></div>
          </div>
        </div>

        {/* Collage Cards Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <article ref={el => setCardRef(el, 0)} className="collage-card absolute left-3 right-auto top-[18%] md:left-[8%] md:top-[12%] w-[calc(50%-1rem)] h-[22%] md:w-[22%] md:h-[35%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#06120b]" data-direction="-1,-1" style={{opacity: 0}}>
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" alt="Fotovoltaico" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-semibold">Fotovoltaico</p>
            </div>
          </article>
          
          <article ref={el => setCardRef(el, 1)} className="collage-card absolute right-3 left-auto top-[18%] md:right-auto md:left-[8%] md:top-[52%] w-[calc(50%-1rem)] h-[22%] md:w-[22%] md:h-[25%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#06120b]" data-direction="-1,1" style={{opacity: 0}}>
            <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80" alt="Tecnologia IoT" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-semibold">Tecnologia IoT</p>
            </div>
          </article>
          
          <article ref={el => setCardRef(el, 2)} className="collage-card absolute left-3 right-auto bottom-[15%] top-auto md:left-auto md:right-[8%] md:bottom-[52%] w-[calc(50%-1rem)] h-[22%] md:w-[22%] md:h-[25%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#06120b]" data-direction="1,-1" style={{opacity: 0}}>
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" alt="Agricoltura 4.0" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-semibold">Agricoltura 4.0</p>
            </div>
          </article>
          
          <article ref={el => setCardRef(el, 3)} className="collage-card absolute right-3 left-auto bottom-[15%] top-auto md:right-[8%] md:bottom-[12%] w-[calc(50%-1rem)] h-[22%] md:w-[22%] md:h-[35%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#06120b]" data-direction="1,1" style={{opacity: 0}}>
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" alt="Sostenibilità" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-semibold">Sostenibilità</p>
            </div>
          </article>
        </div>

        {/* Content Layer */}
        <div ref={contentRef} className="absolute inset-0 flex flex-col will-change-transform z-10 pt-28 md:pt-32 pb-6 pointer-events-auto">
          <div className="flex-1 flex px-6 items-center justify-center relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eab308]/10 border border-[#eab308]/20 text-[10px] font-bold text-[#eab308] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(234,179,8,0.15)] backdrop-blur-sm">
                Soluzioni integrate per l'agricoltura
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.05] animate-fade-up animation-delay-300 opacity-0 mix-blend-overlay">
                L'ecosistema integrato per l'indipendenza energetica
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-500 opacity-0 font-medium">
                Agroland è il partner d'eccellenza per la transizione energetica e tecnologica dell'agricoltura italiana.
              </p>
              
              <div className="animate-fade-up animation-delay-700 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#contact" className="group inline-flex items-center gap-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-black rounded-full pt-3 pr-5 pb-3 pl-6 relative shadow-[0_0_30px_rgba(234,179,8,0.3)] tracking-widest uppercase bg-[#eab308]">
                  <span className="z-10 relative">Inizia il progetto</span>
                  <span className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-black/10 rounded-full transition-transform duration-300 group-hover:translate-x-1">
                    <iconify-icon icon="solar:arrow-right-linear" className="text-base"></iconify-icon>
                  </span>
                </Link>
                <Link to="/#services" className="text-sm font-semibold tracking-widest uppercase text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors border border-transparent hover:border-white/20 backdrop-blur-sm">
                  Scopri i servizi
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-auto border-t border-white/5 bg-[#06120b]/40 backdrop-blur-md opacity-0 animate-fade-up animation-delay-1000">
            <div className="grid grid-cols-3 divide-x divide-white/5 max-w-7xl mx-auto w-full">
              <div className="p-6 text-center hover:bg-white/5 transition-colors flex flex-col items-center justify-center">
                <div className="text-2xl md:text-3xl font-semibold text-[#eab308] mb-1">250+</div>
                <p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Progetti completati</p>
              </div>
              <div className="p-6 text-center hover:bg-white/5 transition-colors flex flex-col items-center justify-center">
                <div className="text-2xl md:text-3xl font-semibold text-[#eab308] mb-1">15+</div>
                <p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Anni di esperienza</p>
              </div>
              <div className="p-6 text-center hover:bg-white/5 transition-colors flex flex-col items-center justify-center">
                <div className="text-2xl md:text-3xl font-semibold text-[#eab308] mb-1">100%</div>
                <p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Clienti soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative w-full bg-[#1B3022] py-24 overflow-hidden border-y border-[#D4AF37]/20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,229,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,229,229,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A8E8]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8E8]/10 border border-[#00A8E8]/20 text-xs font-bold text-[#00A8E8] tracking-widest mb-6">
            Scegli il tuo ecosistema Agroland
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#E5E5E5] mb-6 leading-tight">
            Il percorso su misura per <br/>
            <span className="text-[#D4AF37]">la tua azienda agricola</span>
          </h2>
          <p className="text-[#E5E5E5]/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Ogni azienda agricola ha una struttura, una sfida e un potenziale diverso. Agroland ti guida verso il percorso più adatto: pieno campo o zootecnia intensiva.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="group relative p-8 md:p-10 rounded-[2rem] bg-[#0a140f] border border-white/10 hover:border-[#00A8E8]/40 hover:shadow-[0_0_40px_rgba(0,168,232,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]"></div>
            
            <h3 className="text-2xl font-semibold text-[#E5E5E5] mb-3">Agricoltura a Pieno Campo</h3>
            <p className="text-[#E5E5E5]/70 text-sm mb-8 leading-relaxed md:h-12">
              Soluzioni per colture a terra, gestione idrica, vigneti, frutteti e aziende agricole orientate alla transizione tecnologica.
            </p>

            <div className="space-y-6 flex-grow mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0 mt-0.5 border border-[#00A8E8]/20">
                  <iconify-icon icon="solar:bolt-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Energia Autoprodotta</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Agrivoltaico su terra, accumulo industriale e monitoraggio IoT per rendere il campo più autonomo e misurabile.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0 mt-0.5 border border-[#00A8E8]/20">
                  <iconify-icon icon="solar:settings-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Macchinari ed Efficienza</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Seminatrici MZURI, droni, veicoli elettrici e tecnologie a basso impatto per aumentare resa e precisione.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/20">
                  <iconify-icon icon="solar:wallet-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Capitale Accessibile</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Supporto su bandi regionali, Transizione 5.0 e incentivi per innovare senza rallentare la crescita.</p>
                </div>
              </div>
            </div>

            <Link to="/campo" className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#00A8E8]/10 text-[#00A8E8] font-bold text-xs uppercase tracking-widest hover:bg-[#00A8E8] hover:text-[#0a140f] transition-all duration-300 border border-[#00A8E8]/20">
              Scopri le soluzioni per il campo
              <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
            </Link>
          </div>

          <div className="group relative p-8 md:p-10 rounded-[2rem] bg-[#0a140f] border border-white/10 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]"></div>
            
            <h3 className="text-2xl font-semibold text-[#E5E5E5] mb-3">Allevamenti Intensivi e Zootecnia</h3>
            <p className="text-[#E5E5E5]/70 text-sm mb-8 leading-relaxed md:h-12">
              Soluzioni per stalle, fienili, magazzini agricoli, strutture indoor, benessere animale ed efficienza energetica.
            </p>

            <div className="space-y-6 flex-grow mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/20">
                  <iconify-icon icon="solar:bolt-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Energia Autoprodotta</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Fotovoltaico su tetti, pompe di calore industriali e sistemi evoluti per ridurre i consumi delle strutture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/20">
                  <iconify-icon icon="solar:settings-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Macchinari ed Efficienza</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Attrezzature zootecniche, mixer elettrici, carri miscelatori e loader telescopici E-Tech per lavorare meglio e in modo più pulito.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/20">
                  <iconify-icon icon="solar:wallet-linear" className="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#E5E5E5] mb-1">Capitale Accessibile</h4>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed">Accesso a PNRR Parco Agrisolare, ISI INAIL e strumenti finanziari per modernizzare fabbricati e macchinari.</p>
                </div>
              </div>
            </div>

            <Link to="/allevamento" className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0a140f] transition-all duration-300 border border-[#D4AF37]/20">
              Scopri le soluzioni per l'allevamento
              <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 pt-10 mt-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-6 md:pt-0 px-4">
            <div className="w-12 h-12 rounded-full bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] shrink-0 border border-[#00A8E8]/20">
              <iconify-icon icon="solar:star-fall-linear" className="text-2xl"></iconify-icon>
            </div>
            <p className="text-[#E5E5E5]/80 text-sm leading-relaxed font-medium">
              20+ anni di esperienza manageriale nei settori energia, agricoltura e finanza strategica
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-6 md:pt-0 px-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/20">
              <iconify-icon icon="solar:buildings-linear" className="text-2xl"></iconify-icon>
            </div>
            <p className="text-[#E5E5E5]/80 text-sm leading-relaxed font-medium">
              Rete consolidata con istituti di credito e poli bancari
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-6 md:pt-0 px-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#E5E5E5] shrink-0 border border-white/10">
              <iconify-icon icon="solar:shield-check-linear" className="text-2xl"></iconify-icon>
            </div>
            <p className="text-[#E5E5E5]/80 text-sm leading-relaxed font-medium">
              Percorso chiavi in mano: tecnologia, consulenza e pratiche di finanziamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CircuitCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    
    const ctx = cvs.getContext('2d');
    let width, height;
    
    const resize = () => {
      width = cvs.width = cvs.offsetWidth;
      height = cvs.height = cvs.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        ctx.fillStyle = 'rgba(234, 179, 8, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            ctx.globalAlpha = 1 - dist / 100;
            ctx.strokeStyle = 'rgba(234, 179, 8, 0.3)';
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i].x, particles[j].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen" />;
};

function Home() {
  return (
    <>
      <TemplateHero />
      <EcosystemSection />

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#eab308] text-xs font-bold uppercase tracking-widest mb-4">
            I nostri vantaggi
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Il tuo nuovo modello agricolo che
            <br />
            <span className="text-[#eab308]">consuma la tua energia</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80" alt="Agricoltura sostenibile e pannelli solari" className="w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06120b] to-transparent opacity-80"></div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] shrink-0">
                <iconify-icon icon="solar:battery-charge-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Indipendenza dalla Rete</h3>
                <p className="text-sm text-[#a3b8ad]">
                  Riduci i costi operativi producendo e accumulando la tua energia direttamente in azienda.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] shrink-0">
                <iconify-icon icon="solar:leaf-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Sostenibilità Agricola</h3>
                <p className="text-sm text-[#a3b8ad]">
                  Abbatti le emissioni di CO2 e migliora l'impronta ecologica della tua produzione agricola.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] shrink-0">
                <iconify-icon icon="solar:graph-up-linear" className="text-xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ritorno sull'Investimento</h3>
                <p className="text-sm text-[#a3b8ad]">
                  Aumenta la marginalità della tua azienda grazie al risparmio energetico e agli incentivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <div className="text-[#eab308] text-xs font-bold uppercase tracking-widest mb-4">
            Cosa facciamo
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Agroland trasforma <span className="text-[#eab308]">energia,<br />tecnologia e capitale</span> in un unico<br />piano operativo
          </h2>
          <p className="text-[#a3b8ad] max-w-2xl mx-auto text-lg">
            Siamo al tuo fianco per costruire un ecosistema su misura che porti la tua azienda nel futuro dell'agricoltura.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-6 border border-[#eab308]/20">
              <iconify-icon icon="solar:sun-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Energia</h3>
            <p className="text-sm text-[#a3b8ad] leading-relaxed">
              Progettiamo e installiamo impianti agrivoltaici e sistemi di accumulo per garantirti energia pulita a costo zero.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#eab308]/10 to-transparent border border-[#eab308]/20 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-[#eab308]/20 flex items-center justify-center text-[#eab308] mb-6 border border-[#eab308]/40">
              <iconify-icon icon="solar:cpu-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Tecnologia</h3>
            <p className="text-sm text-[#a3b8ad] leading-relaxed">
              Implementiamo sensori IoT, macchinari agricoli intelligenti e software di gestione avanzati per l'Agricoltura 4.0.
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-6 border border-[#eab308]/20">
              <iconify-icon icon="solar:pie-chart-2-linear" className="text-2xl"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Capitale</h3>
            <p className="text-sm text-[#a3b8ad] leading-relaxed">
              Ti guidiamo nell'accesso a bandi, fondi PNRR e finanziamenti agevolati per rendere l'investimento accessibile.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 overflow-hidden">
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <div className="absolute w-full h-full left-0 top-0 -z-10" style={{ filter: 'hue-rotate(145deg)' }}>
            <UnicornScene projectId="ILgOO23w4wEyPQOKyLO4" />
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#06120b] to-transparent z-0 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06120b] to-transparent z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#eab308] mb-4">
              Energia per la tua azienda
            </h2>
            <p className="text-[#a3b8ad] max-w-2xl mx-auto text-lg">
              Massimizza l'efficienza energetica della tua produzione con le nostre soluzioni integrate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'bolt', title: 'Pannelli Fotovoltaici', desc: 'Produzione di energia solare ad alta efficienza per alimentare le tue operazioni.' },
              { icon: 'battery-full', title: 'Sistemi di Accumulo', desc: "Stoccaggio dell'energia prodotta per l'utilizzo durante le ore notturne o di picco." },
              { icon: 'temperature', title: 'Pompe di Calore', desc: 'Climatizzazione efficiente per serre e strutture aziendali.' },
              { icon: 'drop', title: 'Irrigazione Solare', desc: 'Sistemi di pompaggio acqua alimentati direttamente dal sole.' },
              { icon: 'wind', title: 'Minieolico', desc: "Sfruttamento dell'energia del vento in aree vocate." },
              { icon: 'settings', title: 'Gestione Smart', desc: 'Monitoraggio e ottimizzazione dei consumi energetici in tempo reale.' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-4">
                  <iconify-icon icon={`solar:${item.icon}-linear`} className="text-lg"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#a3b8ad]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#eab308] mb-4">
            Finanza per la tua azienda
          </h2>
          <p className="text-[#a3b8ad] max-w-2xl mx-auto text-lg">
            Trasformiamo gli investimenti in opportunità con strumenti finanziari su misura.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-4">
              <iconify-icon icon="solar:buildings-2-linear" className="text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fondi PNRR</h3>
            <p className="text-sm text-[#a3b8ad]">
              Assistenza completa per l'accesso ai bandi del Parco Agrisolare e altre misure PNRR.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-4">
              <iconify-icon icon="solar:document-text-linear" className="text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Agevolazioni Fiscali</h3>
            <p className="text-sm text-[#a3b8ad]">
              Ottimizzazione del credito d'imposta per Agricoltura 4.0 e Transizione 5.0.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-4">
              <iconify-icon icon="solar:wallet-linear" className="text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Finanziamenti Agevolati</h3>
            <p className="text-sm text-[#a3b8ad]">
              Strutturazione di leasing e mutui chirografari con le migliori condizioni di mercato.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#102418] rounded-[2rem] border border-white/5 p-8 md:p-16 relative overflow-hidden">
          <CircuitCanvas />
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Scegli quando far funzionare la tua azienda agricola
              </h2>
              <p className="text-[#a3b8ad] mb-8 text-lg">
                Richiedi una consulenza personalizzata. Il nostro team di esperti analizzerà il potenziale della tua azienda agricola.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#eab308]" />
                  <input type="text" placeholder="Cognome" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#eab308]" />
                </div>
                <input type="email" placeholder="Email aziendale" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#eab308]" />
                <textarea placeholder="Parlaci della tua azienda..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#eab308] resize-none"></textarea>
                <button type="submit" className="group w-full sm:w-auto flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] focus:outline-none text-[11px] font-semibold text-white tracking-widest rounded-full px-10 py-4 relative items-center justify-center mt-2">
                  <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#eab308_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                    <div className="absolute inset-[1px] rounded-full bg-[#102418]"></div>
                  </div>
                  <div className="-z-10 overflow-hidden bg-[#102418] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#eab308]/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#eab308]/30"></div>
                  </div>
                  <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                    Invia richiesta
                  </span>
                  <iconify-icon icon="solar:arrow-right-linear" className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-base"></iconify-icon>
                </button>
              </form>
            </div>
            <div className="space-y-8 lg:pl-12">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">I nostri uffici</h3>
                <ul className="space-y-4 text-[#a3b8ad]">
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:map-point-linear" className="text-[#eab308] text-xl shrink-0 mt-1"></iconify-icon>
                    <span>Via dell'Agricoltura, 15<br />40100 Bologna (BO)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:letter-linear" className="text-[#eab308] text-xl shrink-0"></iconify-icon>
                    <span>info@agroland.it</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:phone-linear" className="text-[#eab308] text-xl shrink-0"></iconify-icon>
                    <span>+39 051 1234567</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AppContent() {
  return (
    <div className="bg-[#06120b] text-[#a3b8ad] antialiased selection:bg-[#eab308]/30 selection:text-white flex flex-col min-h-screen">
      <ScrollIndicator />
      
      <header className="fixed top-0 w-full border-b border-white/5 bg-[#06120b]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white text-base font-semibold tracking-tighter flex items-center gap-2">
              <iconify-icon icon="solar:leaf-linear" className="text-[#eab308] text-xl"></iconify-icon>
              Agroland
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/#about" className="text-sm text-white/80 hover:text-[#eab308] transition-colors">Chi siamo</Link>
              <Link to="/#services" className="text-sm text-white/80 hover:text-[#eab308] transition-colors">Servizi</Link>
              <Link to="/#sectors" className="text-sm text-white/80 hover:text-[#eab308] transition-colors">Settori</Link>
              <Link to="/#cases" className="text-sm text-white/80 hover:text-[#eab308] transition-colors">Casi di studio</Link>
              <Link to="/#blog" className="text-sm text-white/80 hover:text-[#eab308] transition-colors">Blog</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/#contact" className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] focus:outline-none text-[11px] font-semibold text-white tracking-widest rounded-full px-5 py-2.5 relative items-center justify-center">
              <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#eab308_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                <div className="absolute inset-[1px] rounded-full bg-[#06120b]"></div>
              </div>
              <div className="-z-10 overflow-hidden bg-[#06120b] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#eab308]/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#eab308]/30"></div>
              </div>
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Preventivo
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campo" element={<Campo />} />
          <Route path="/allevamento" element={<Allevamento />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5 mt-auto bg-[#040c07]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white text-sm font-semibold tracking-tighter">
            <iconify-icon icon="solar:leaf-linear" className="text-[#eab308] text-xl"></iconify-icon>
            Agroland
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-[#eab308] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#eab308] transition-colors">Termini</a>
            <a href="#" className="hover:text-[#eab308] transition-colors">Contatti</a>
            <a href="#" className="hover:text-[#eab308] transition-colors">LinkedIn</a>
          </div>

          <p className="text-xs text-zinc-600">
            © 2024 Agroland S.r.l. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <AppContent />
    </BrowserRouter>
  );
}