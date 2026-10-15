import React from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useScramble } from '../hooks/useScramble';
import MagneticButton from '../components/MagneticButton';
import SpotlightGrid from '../components/SpotlightGrid';
import { portfolioData } from '../data/portfolio';

export default function Home() {
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  const { displayText: scrambleText, handlers: scrambleHandlers } = useScramble("System Online");

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 pb-40 pt-20 border-b border-black/5" ref={heroRef}>
        <div className="max-w-5xl">
          <div 
            className={`inline-flex items-center gap-3 px-3 py-1.5 mb-10 border border-black/5 rounded-full bg-white/50 backdrop-blur-sm animate-on-scroll ${isHeroVisible ? 'is-visible' : ''} shadow-sm`}
            {...scrambleHandlers}
          >
            <div className="flex items-center gap-2 px-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest min-w-[100px]">
                {scrambleText}
              </span>
            </div>
            <div className="h-3 w-px bg-black/10"></div>
            <span className="text-[10px] text-neutral-500 font-mono">VC Fund.WRO</span>
          </div>

          <h1 className={`animate-on-scroll delay-100 ${isHeroVisible ? 'is-visible' : ''} text-6xl md:text-[6.5rem] lg:text-[7rem] font-medium tracking-tighter text-black leading-[0.9] mb-12`}>
            Budujemy wartość.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black via-neutral-700 to-neutral-400">
              Skalujemy biznes.
            </span>
          </h1>

          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-12 animate-on-scroll delay-200 ${isHeroVisible ? 'is-visible' : ''}`}>
            <p className="text-lg text-neutral-500 max-w-xl leading-relaxed font-light">
              Pomagamy projektom w pozyskiwaniu finansowania. Specjalizujemy się w strategiach wzrostu, modelowaniu finansowym, wycenach oraz strukturyzacji kapitału dla startupów i dojrzałych firm.
            </p>

            <div className="flex items-center gap-6">
              <MagneticButton className="group relative px-8 py-4 bg-black text-white text-xs font-bold tracking-widest uppercase overflow-hidden hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-neutral-500/20">
                <span className="relative z-10 flex items-center gap-2">
                  Konsultacja
                  <iconify-icon icon="ph:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </span>
              </MagneticButton>
              <div className="hidden md:block h-px w-12 bg-black/20"></div>
              <span className="hidden md:block text-[10px] font-mono text-neutral-400">
                SCROLL TO EXPLORE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee - Ecosystem Logos */}
      <div className="border-b border-black/5 bg-white py-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto marquee-wrapper">
          <div className="marquee-content opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 items-center text-black">
            {[1, 2].map((group) => (
              <React.Fragment key={group}>
                <iconify-icon icon="simple-icons:openai" width="24"></iconify-icon>
                <iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
                <iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
                <iconify-icon icon="simple-icons:ycombinator" width="32"></iconify-icon>
                <iconify-icon icon="simple-icons:revolut" width="24"></iconify-icon>
                <span className="text-xs font-mono font-medium tracking-widest">B2B SAAS</span>
                <iconify-icon icon="simple-icons:github" width="24"></iconify-icon>
                <span className="text-xs font-mono font-medium tracking-widest">FINTECH</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Works (Portfolio) */}
      <section className="border-b border-black/5 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black/5">
            <div className="p-6 md:p-10 border-r border-black/5 flex flex-col justify-between h-full bg-neutral-50/50">
              <div className="text-[10px] font-mono text-neutral-400 uppercase mb-2">
                01 — Wybrane Projekty
              </div>
              <h2 className="text-2xl text-black font-medium tracking-tight">
                Case Index
              </h2>
            </div>
            <div className="md:col-span-3 p-6 md:p-10 flex items-center bg-white">
              <p className="text-sm text-neutral-500 max-w-lg">
                Zarządzamy kapitałem i strategią dla projektów, które zmieniają rynek. Od fazy seed po wyjścia inwestycyjne (exit).
              </p>
            </div>
          </div>

          {/* Featured Case Study 1 */}
          <div className="group relative border-b border-black/5 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-50/50 transition-colors duration-700 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative z-10">
              {/* Visual Side */}
              <div className="relative h-[300px] md:h-auto border-r border-black/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-between relative bg-white">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <iconify-icon icon="ph:arrow-up-right-light" width="32" class="text-black"></iconify-icon>
                </div>

                <div>
                  <div className="flex gap-2 mb-6">
                    <span className="px-2 py-1 border border-black/10 text-[10px] font-mono text-neutral-500 uppercase">
                      Fintech / M&A
                    </span>
                    <span className="px-2 py-1 border border-black/10 text-[10px] font-mono text-neutral-500 uppercase">
                      Exit
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-4 leading-[1.1]">
                    Digital Hill
                  </h3>
                  <p className="text-neutral-500 max-w-sm leading-relaxed font-light">
                    Pozyskanie inwestora branżowego, zainteresowanego przejęciem spółki i wysoko wykwalifikowanego zespołu specjalistów IT.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-8 mt-12">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase mb-1">Rezultat</div>
                    <div className="text-xl text-black font-mono font-medium">Przejęcie</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase mb-1">Zakres</div>
                    <div className="text-sm text-black font-mono">Wycena, Negocjacje</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Featured Case Study 2 */}
           <div className="group relative border-b border-black/5 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-50/50 transition-colors duration-700 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative z-10">
              {/* Content Side (Flipped) */}
              <div className="p-8 md:p-12 flex flex-col justify-between relative bg-white border-r border-black/5 order-2 md:order-1">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <iconify-icon icon="ph:arrow-up-right-light" width="32" class="text-black"></iconify-icon>
                </div>

                <div>
                  <div className="flex gap-2 mb-6">
                    <span className="px-2 py-1 border border-black/10 text-[10px] font-mono text-neutral-500 uppercase">
                      Data Science
                    </span>
                    <span className="px-2 py-1 border border-black/10 text-[10px] font-mono text-neutral-500 uppercase">
                      Seed
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-4 leading-[1.1]">
                    HexeData
                  </h3>
                  <p className="text-neutral-500 max-w-sm leading-relaxed font-light">
                    Pozyskanie zainteresowania anioła biznesu, przygotowanie dokumentacji i doprowadzenie do docelowego dofinansowania spółki.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-8 mt-12">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase mb-1">Rezultat</div>
                    <div className="text-xl text-black font-mono font-medium">Finansowanie</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase mb-1">Zakres</div>
                    <div className="text-sm text-black font-mono">Biznesplan, Pitch</div>
                  </div>
                </div>
              </div>

               {/* Visual Side */}
               <div className="relative h-[300px] md:h-auto overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="p-8 text-center bg-neutral-50">
            <Link to="/portfolio" className="text-sm font-medium text-black uppercase tracking-wider hover:underline underline-offset-4 decoration-black/30">
              Zobacz Pełne Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* The Wall Section - Infrastructure/Services */}
      <section className="relative bg-white border-b border-black/5 overflow-hidden pt-10">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[900px]">
          
          {/* Left: Typography Content */}
          <div className="w-full md:w-[45%] px-6 py-20 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-white via-white/90 to-transparent">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-indigo-200 rounded-full bg-indigo-50 self-start">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-indigo-600 uppercase tracking-widest">
                  Zakres Usług
                </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-8 leading-[0.9]">
              Architektura
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-black via-neutral-600 to-neutral-400">
                Wzrostu.
              </span>
            </h2>
            
            <div className="space-y-8 max-w-md">
                <p className="text-neutral-500 text-lg font-light leading-relaxed">
                  Zapewniamy wsparcie na każdym etapie cyklu życia przedsiębiorstwa. Od walidacji modelu biznesowego po pozyskiwanie rund finansowania i sprzedaż spółki.
                </p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded border border-black/5 bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-100 group-hover:border-black/10 transition-all">
                            <iconify-icon icon="ph:currency-circle-dollar-light" class="text-neutral-400 group-hover:text-black transition-colors text-xl"></iconify-icon>
                        </div>
                        <div>
                            <div className="text-black text-sm font-medium">Pozyskiwanie Finansowania</div>
                            <div className="text-[10px] text-neutral-400 font-mono uppercase">VC / Business Angels / Dotacje</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded border border-black/5 bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-100 group-hover:border-black/10 transition-all">
                            <iconify-icon icon="ph:file-text-light" class="text-neutral-400 group-hover:text-black transition-colors text-xl"></iconify-icon>
                        </div>
                        <div>
                            <div className="text-black text-sm font-medium">Dokumentacja Inwestycyjna</div>
                            <div className="text-[10px] text-neutral-400 font-mono uppercase">Teaser / Pitch Deck / Biznesplan</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded border border-black/5 bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-100 group-hover:border-black/10 transition-all">
                            <iconify-icon icon="ph:buildings-light" class="text-neutral-400 group-hover:text-black transition-colors text-xl"></iconify-icon>
                        </div>
                        <div>
                            <div className="text-black text-sm font-medium">Sprzedaż Firmy (Exit)</div>
                            <div className="text-[10px] text-neutral-400 font-mono uppercase">Wycena / Due Diligence / M&A</div>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                  <Link to="/uslugi">
                     <button className="shiny-cta shadow-lg shadow-black/10" style={{'--gradient-shine': '#6366f1'}}>
                        <span>Odkryj Pełną Ofertę</span>
                    </button>
                  </Link>
                </div>
            </div>
          </div>

          {/* Right: The Infinite 3D Wall */}
          <div className="absolute right-[-20%] md:right-[-5%] top-[-10%] bottom-[-10%] w-[140%] md:w-[65%] wall-container overflow-hidden pointer-events-none md:pointer-events-auto">
             <div className="wall-grid h-full w-full flex gap-4 md:gap-6 px-10">
                
                {/* Column 1 (Scroll Up) */}
                <div className="wall-column wall-column-up flex flex-col gap-4 md:gap-6 w-full opacity-60 md:opacity-100">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={`col1-${i}`}>
                        <WallCard icon="ph:chart-line-up" title="Analiza Rynku" sub="Research" color="text-indigo-500" />
                        <WallCard icon="ph:calculator" title="Wycena" sub="DCF / Mnożniki" color="text-blue-500" />
                        <WallCard icon="ph:handshake" title="Negocjacje" sub="Term Sheet" color="text-emerald-500" />
                        <WallCard icon="ph:rocket-launch" title="Biz Development" sub="Skalowanie" color="text-amber-500" />
                      </React.Fragment>
                    ))}
                </div>

                {/* Column 2 (Scroll Down) */}
                <div className="wall-column wall-column-down flex flex-col gap-4 md:gap-6 w-full pt-12">
                   {[...Array(2)].map((_, i) => (
                      <React.Fragment key={`col2-${i}`}>
                        <WallCard icon="ph:currency-circle-dollar" title="Finansowanie" sub="VC / Seed" color="text-emerald-500" />
                        <WallCard icon="ph:file-text" title="Pitch Deck" sub="Dokumentacja" color="text-purple-500" />
                        <WallCard icon="ph:database" title="Modelowanie" sub="Finanse" color="text-blue-500" />
                        <WallCard icon="ph:users" title="Konsultacje" sub="Strategia" color="text-rose-500" />
                      </React.Fragment>
                    ))}
                </div>

                {/* Column 3 (Scroll Up) */}
                <div className="wall-column wall-column-up flex flex-col gap-4 md:gap-6 w-full pt-24 hidden lg:flex">
                   {[...Array(2)].map((_, i) => (
                      <React.Fragment key={`col3-${i}`}>
                        <WallCard icon="ph:buildings" title="M&A" sub="Sprzedaż Spółki" color="text-slate-800" />
                        <WallCard icon="ph:presentation-chart" title="Szkolenia" sub="Warsztaty" color="text-orange-500" />
                        <WallCard icon="ph:target" title="Strategia" sub="Go-to-market" color="text-indigo-500" />
                      </React.Fragment>
                    ))}
                </div>

             </div>
             
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Pipeline / Process */}
      <section className="border-b border-black/5 bg-white py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] font-mono text-neutral-400 uppercase mb-12">
            03 — Model Współpracy
          </div>

          <div className="relative mt-20">
            <div className="absolute top-[27px] left-0 w-full h-px bg-black/10 z-0 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              <div className="group">
                <div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
                  <span className="text-sm font-mono text-black">01</span>
                </div>
                <h4 className="text-lg text-black font-medium mb-3">Audyt i Analiza</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Głębokie wejście w mechanikę biznesu, analizę rynku i przestrzeni konkurencyjnej. Ocena gotowości inwestycyjnej.
                </p>
              </div>

              <div className="group">
                <div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
                  <span className="text-sm font-mono text-black">02</span>
                </div>
                <h4 className="text-lg text-black font-medium mb-3">Dokumentacja</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Tworzenie profesjonalnego modelu finansowego, wyceny oraz materiałów prezentacyjnych (Teaser, Pitch Deck).
                </p>
              </div>

              <div className="group">
                <div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
                  <span className="text-sm font-mono text-black">03</span>
                </div>
                <h4 className="text-lg text-black font-medium mb-3">Roadshow</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Docieranie do precyzyjnie wyselekcjonowanej bazy inwestorów (Aniołowie Biznesu, fundusze VC, inwestorzy branżowi).
                </p>
              </div>

              <div className="group">
                <div className="w-14 h-14 bg-white border border-black/10 rounded-full flex items-center justify-center mb-8 group-hover:border-black transition-colors relative shadow-sm">
                  <span className="text-sm font-mono text-black">04</span>
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full top-0 right-0 animate-pulse"></div>
                </div>
                <h4 className="text-lg text-black font-medium mb-3">Term Sheet</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  Wsparcie w negocjacjach warunków inwestycji, koordynacja Due Diligence i doprowadzenie do finalizacji transakcji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white border-b border-black/5 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative z-10 w-full bg-black border border-white/10 rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center group isolate shadow-2xl">
            {/* Ambient Background inside card */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[8s]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628280687103-51eb23180eb0?q=80&w=200&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                Gotowy na 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-200 to-emerald-500">
                  {" "}skalowanie?
                </span>
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg mb-12">
                Zabezpiecz nasze wsparcie dla Twojego projektu. Pomagamy założycielom z wizją w pozyskiwaniu strategicznego kapitału na rozwój.
              </p>
              
              <Link to="/kontakt">
                <button className="shiny-cta" style={{'--gradient-shine': '#10b981'}}>
                  <span>Zainicjuj Kontakt</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for the Wall
function WallCard({ icon, title, sub, color }) {
  return (
    <div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
      <div className="flex justify-between items-start">
          <iconify-icon icon={icon} width="32" class={color}></iconify-icon>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
      </div>
      <div>
          <div className="text-sm font-mono font-medium text-black/80">{title}</div>
          <div className="text-[9px] font-mono text-neutral-500 mt-1">{sub}</div>
      </div>
  </div>
  )
}