import React, { useState, useEffect } from 'react';
import { equipmentData, teamData, faqData } from './data';
import { clsx } from 'clsx';

// Reusable Components
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-[#2A2A2A]">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-[#2A2A2A]">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            className="w-full py-6 flex justify-between items-center text-left group"
          >
            <span className="font-display text-xl tracking-wide uppercase group-hover:text-[#E8400A] transition-colors">
              {item.title}
            </span>
            <iconify-icon 
              icon={openIndex === idx ? "solar:minus-linear" : "solar:add-linear"} 
              class="text-2xl text-[#6B6B6B] group-hover:text-[#E8400A] transition-colors"
            ></iconify-icon>
          </button>
          <div 
            className={clsx(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <ul className="space-y-3 text-[#B0B0B0] text-sm md:text-base">
              {item.items ? item.items.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <iconify-icon icon="solar:target-linear" class="text-[#E8400A] mt-1 flex-shrink-0"></iconify-icon>
                  <span dangerouslySetInnerHTML={{ __html: line.replace('—', '<span class="text-[#6B6B6B]">—</span>') }} />
                </li>
              )) : (
                <p>{item.desc}</p>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-grain min-h-screen text-white selection:bg-[#E8400A]">
      {/* HEADER */}
      <header className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-[#111111]/90 backdrop-blur-md border-[#2A2A2A] py-4" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-display text-2xl font-bold tracking-tight">FORGEE</div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#B0B0B0]">
            <a href="#espaco" className="hover:text-white transition-colors">Espaço</a>
            <a href="#programas" className="hover:text-white transition-colors">Programas</a>
            <a href="#equipe" className="hover:text-white transition-colors">Equipe</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#login" className="hidden md:block text-sm font-display tracking-widest hover:text-[#E8400A] transition-colors">
              SOU MEMBRO
            </a>
            <a href="#contato" className="btn-primary py-3 px-6 text-xs">
              AGENDAR VISITA
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply"></div>
          {/* Cinematic Light Leak */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E8400A] rounded-full blur-[150px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <p className="font-display text-[#B0B0B0] tracking-[0.2em] text-xs md:text-sm mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#E8400A]"></span>
            TREINOS PROGRESSIVOS E ACOMPANHAMENTO REAL
          </p>
          <h1 className="font-display text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tight mb-8">
            ONDE O LIMITE<br />
            É O PONTO<br />
            <span className="text-[#E8400A]">DE PARTIDA.</span>
          </h1>
          
          <div className="max-w-xl mb-12">
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              Não somos uma academia. Somos um sistema de transformação. Infraestrutura de nível profissional, metodologia comprovada e um ambiente construído para quem leva o treinamento a sério.
            </p>
          </div>

          {/* Highlighted Hero CTA Box */}
          <div className="bg-[#E8400A] relative overflow-hidden w-full max-w-4xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-l-4 border-white shadow-[0_0_40px_rgba(232,64,10,0.3)] mt-8 group">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            
            <div className="relative z-10 w-full lg:w-auto overflow-hidden">
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-[0.95] tracking-tight mb-3">
                A DECISÃO JÁ FOI TOMADA.<br />
                AGORA É A AÇÃO.
              </h2>
              <div className="w-full overflow-hidden whitespace-nowrap flex relative">
                <div className="animate-marquee flex w-max">
                  <p className="font-display text-[#B22A00] text-sm tracking-[0.2em] font-bold pr-8">
                    A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp; G R A T U I T A &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; T R A G A &nbsp; T Ê N I S &nbsp; ·
                  </p>
                  <p className="font-display text-[#B22A00] text-sm tracking-[0.2em] font-bold pr-8">
                    A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp; G R A T U I T A &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; T R A G A &nbsp; T Ê N I S &nbsp; ·
                  </p>
                </div>
              </div>
            </div>

            <button className="relative z-10 bg-[#111111] text-white font-display uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-[#111111] transition-colors duration-300 w-full lg:w-auto whitespace-nowrap flex-shrink-0">
              AGENDAR VISITA
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-y border-[#2A2A2A] bg-[#111111] relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#2A2A2A]">
            {[
              { label: "Funcionamento", val: "05H–23H" },
              { label: "Dias", val: "7 DIAS" },
              { label: "Área", val: "1.800M²" },
              { label: "Alunos", val: "+1.200" },
              { label: "Desde", val: "2018" }
            ].map((stat, i) => (
              <div key={i} className="py-8 px-4 flex flex-col items-center justify-center text-center">
                <span className="font-display text-[#6B6B6B] text-xs tracking-widest uppercase mb-1">{stat.label}</span>
                <span className="font-display text-2xl tracking-wide text-white">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="espaco" className="section-padding bg-[#111111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              {/* Image decoration */}
              <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-[#E8400A] z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
                alt="Forgee Space" 
                className="relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="lg:col-span-7">
              <span className="eyebrow">Quem somos</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
                FORJADOS PELA<br />
                <span className="text-[#E8400A]">DISCIPLINA.</span>
              </h2>
              
              <div className="space-y-6 text-[#B0B0B0] text-lg font-light leading-relaxed mb-10">
                <p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
                <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
                <blockquote className="border-l-2 border-[#E8400A] pl-6 py-2 my-8 text-white font-display text-2xl tracking-wide italic">
                  "In silence, the transformation begins."
                </blockquote>
                <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURE & EQUIPMENT */}
      <section className="section-padding bg-[#1E1E1E] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">Estrutura</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-6">
                EQUIPAMENTO<br />
                QUE NÃO TE<br />
                <span className="text-[#E8400A]">LIMITA.</span>
              </h2>
              <p className="text-[#B0B0B0] text-lg mb-8">
                Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <Accordion items={equipmentData} />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programas" className="section-padding bg-[#111111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow">O que oferecemos</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
              UM PROTOCOLO PARA<br />
              <span className="text-[#E8400A]">CADA OBJETIVO.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Highlight Card */}
            <div className="md:col-span-2 border border-[#E8400A]/30 bg-[#1E1E1E] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8400A]/10 blur-[80px] pointer-events-none group-hover:bg-[#E8400A]/20 transition-all duration-500"></div>
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-3xl font-bold tracking-wide">FORGEE CONDITIONING</h3>
                    <span className="bg-[#E8400A] text-white text-[10px] px-2 py-1 font-display tracking-widest uppercase">Destaque</span>
                  </div>
                  <p className="text-[#B0B0B0] mb-6 text-lg">Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.</p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <span className="block text-[#6B6B6B] font-display uppercase tracking-widest text-xs mb-1">Para quem é</span>
                      <span>Condicionamento, perda de gordura</span>
                    </div>
                    <div>
                      <span className="block text-[#6B6B6B] font-display uppercase tracking-widest text-xs mb-1">Turmas</span>
                      <span className="font-mono">06H · 07H · 12H · 18H · 19H30</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex items-end justify-end">
                   <iconify-icon icon="solar:fire-bold" class="text-6xl text-[#E8400A]/20 group-hover:text-[#E8400A]/50 transition-colors"></iconify-icon>
                </div>
              </div>
            </div>

            {/* Other Cards */}
            <div className="border border-[#2A2A2A] bg-[#111111] p-8 hover:border-[#4A4A4A] transition-colors">
              <h3 className="font-display text-2xl font-bold tracking-wide mb-4">FORGEE STRENGTH</h3>
              <p className="text-[#B0B0B0] mb-6 text-sm leading-relaxed">Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.</p>
            </div>
            
            <div className="border border-[#2A2A2A] bg-[#111111] p-8 hover:border-[#4A4A4A] transition-colors">
              <h3 className="font-display text-2xl font-bold tracking-wide mb-4">FORGEE MOBILITY</h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planos" className="section-padding bg-[#1E1E1E]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="eyebrow">Investimento</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-6">
              SEM MATRÍCULA.<br />
              SEM FIDELIDADE.<br />
              <span className="text-[#E8400A]">SEM ENROLAÇÃO.</span>
            </h2>
            <p className="text-[#B0B0B0]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Plan 1 */}
            <div className="border border-[#2A2A2A] bg-[#111111] p-8">
              <h3 className="font-display text-xl tracking-widest text-[#6B6B6B] mb-2">LIVRE</h3>
              <div className="font-display text-4xl mb-8">R$149<span className="text-sm text-[#6B6B6B] tracking-normal">/mês</span></div>
              <ul className="space-y-4 text-sm text-[#B0B0B0] mb-10">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> Acesso ilimitado 05H–23H</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> Avaliação física de entrada</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> Planilha de treino inicial</li>
                <li className="flex items-center gap-3 text-[#6B6B6B]"><iconify-icon icon="solar:close-circle-linear" class="text-[#2A2A2A] text-xl"></iconify-icon> Revisão de planilha</li>
              </ul>
              <button className="w-full btn-secondary py-3 text-xs">QUERO ESSE PLANO</button>
            </div>

            {/* Plan 2 Highlight */}
            <div className="border border-[#E8400A] bg-[#111111] p-8 relative -translate-y-0 md:-translate-y-4 shadow-[0_0_40px_rgba(232,64,10,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8400A] px-4 py-1 font-display text-[10px] uppercase tracking-widest">Mais Escolhido</div>
              <h3 className="font-display text-xl tracking-widest text-white mb-2">PLUS</h3>
              <div className="font-display text-5xl mb-8 text-[#E8400A]">R$229<span className="text-sm text-[#6B6B6B] tracking-normal">/mês</span></div>
              <ul className="space-y-4 text-sm text-white mb-10">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8400A] text-xl"></iconify-icon> Tudo do plano Livre</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8400A] text-xl"></iconify-icon> 2 sessões Personal/mês</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8400A] text-xl"></iconify-icon> 1 aula Conditioning/sem</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8400A] text-xl"></iconify-icon> Revisão a cada 4 sem</li>
              </ul>
              <button className="w-full btn-primary py-3 text-xs">QUERO ESSE PLANO</button>
            </div>

            {/* Plan 3 */}
            <div className="border border-[#2A2A2A] bg-[#111111] p-8">
              <h3 className="font-display text-xl tracking-widest text-[#6B6B6B] mb-2">ELITE</h3>
              <div className="font-display text-4xl mb-8">R$389<span className="text-sm text-[#6B6B6B] tracking-normal">/mês</span></div>
              <ul className="space-y-4 text-sm text-[#B0B0B0] mb-10">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> Tudo do plano Plus</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> 4 sessões Personal/mês</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> Acesso ilimitado classes</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#E8400A] text-xl"></iconify-icon> WhatsApp coach dedicado</li>
              </ul>
              <button className="w-full btn-secondary py-3 text-xs">QUERO ESSE PLANO</button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-[#6B6B6B] text-xs font-display tracking-widest uppercase">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="equipe" className="section-padding bg-[#111111] border-b border-[#2A2A2A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="eyebrow">Quem te acompanha</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-6">
              COACHES QUE<br />
              <span className="text-[#E8400A]">TREINAM.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((coach, i) => (
              <div key={i} className="border border-[#2A2A2A] p-6 hover:border-[#6B6B6B] transition-colors group">
                <div className="w-16 h-16 bg-[#1E1E1E] flex items-center justify-center font-display text-2xl text-[#6B6B6B] mb-6 group-hover:bg-[#E8400A] group-hover:text-white transition-colors">
                  {coach.init}
                </div>
                <h3 className="font-display text-xl tracking-wide uppercase mb-1">{coach.name}</h3>
                <p className="text-[#E8400A] text-sm mb-4">{coach.role}</p>
                <p className="text-[#6B6B6B] text-xs font-mono">{coach.cref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & LOCATION (Split Grid) */}
      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* FAQ */}
            <div>
              <span className="eyebrow">Dúvidas</span>
              <h2 className="font-display text-5xl font-bold leading-[0.95] mb-10">
                PERGUNTAS<br />
                <span className="text-[#E8400A]">DIRETAS.</span>
              </h2>
              <Accordion items={faqData.map(f => ({ title: f.q, desc: f.a }))} />
            </div>

            {/* LOCATION */}
            <div>
              <span className="eyebrow">Onde estamos</span>
              <h2 className="font-display text-5xl font-bold leading-[0.95] mb-10">
                NO CORAÇÃO<br />
                DE <span className="text-[#E8400A]">INDAIATUBA.</span>
              </h2>
              
              <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 mb-8">
                <h3 className="font-display text-lg tracking-widest text-[#6B6B6B] mb-4">ENDEREÇO</h3>
                <p className="text-[#B0B0B0] leading-relaxed mb-4">
                  Rua das Esmeraldas, 742<br />
                  Jardim Morada do Sol<br />
                  Indaiatuba, SP<br />
                  CEP 13.334-210
                </p>
                <p className="text-sm text-[#6B6B6B] italic">200m do Carrefour · Próximo à saída SP-075</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="border border-[#2A2A2A] p-4">
                    <span className="block text-[#6B6B6B] font-display uppercase text-xs mb-2">Seg a Sex</span>
                    <span className="font-mono text-lg">05H–23H</span>
                 </div>
                 <div className="border border-[#2A2A2A] p-4">
                    <span className="block text-[#6B6B6B] font-display uppercase text-xs mb-2">Sáb / Dom</span>
                    <span className="font-mono text-sm block">S: 07H–20H</span>
                    <span className="font-mono text-sm block">D: 08H–14H</span>
                 </div>
              </div>

              <div className="flex gap-4">
                <button className="btn-secondary w-full text-xs py-3 flex gap-2 items-center">
                  <iconify-icon icon="solar:map-point-linear" class="text-lg"></iconify-icon> COMO CHEGAR
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-[#E8400A] relative overflow-hidden">
        {/* Subtle dot pattern over red */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
            A DECISÃO JÁ FOI TOMADA.<br />
            AGORA É A AÇÃO.
          </h2>
          <div className="overflow-hidden whitespace-nowrap mb-12 flex justify-center">
            <div className="animate-marquee flex w-max">
              <p className="font-display text-[#B22A00] text-xl tracking-[0.4em] font-bold pr-16">
                A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp; G R A T U I T A &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; T R A G A &nbsp; T Ê N I S &nbsp; ·
              </p>
              <p className="font-display text-[#B22A00] text-xl tracking-[0.4em] font-bold pr-16">
                A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp; G R A T U I T A &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; T R A G A &nbsp; T Ê N I S &nbsp; ·
              </p>
            </div>
          </div>
          <button className="bg-[#111111] text-white font-display uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-[#111111] transition-colors duration-300">
            AGENDAR VISITA GRATUITA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-display text-3xl font-bold tracking-tight mb-2">FORGEE</div>
              <p className="font-display text-[#6B6B6B] tracking-[0.2em] text-xs">BEYOND LIMITS KNOWN™</p>
            </div>
            
            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-6">Academia</h4>
              <ul className="space-y-3 text-sm text-[#6B6B6B]">
                <li><a href="#espaco" className="hover:text-white transition-colors">Espaço</a></li>
                <li><a href="#programas" className="hover:text-white transition-colors">Programas</a></li>
                <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-white tracking-widest uppercase mb-6">Legal & Redes</h4>
              <ul className="space-y-3 text-sm text-[#6B6B6B]">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li className="pt-4 flex gap-4">
                  <a href="#" className="text-[#6B6B6B] hover:text-white transition-colors">
                    <iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon>
                  </a>
                  <a href="#" className="text-[#6B6B6B] hover:text-white transition-colors">
                    <iconify-icon icon="simple-icons:whatsapp" class="text-xl"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row justify-between text-xs text-[#4A4A4A] font-mono">
            <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
            <p>DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;