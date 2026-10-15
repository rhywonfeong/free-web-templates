import React, { useState, useEffect } from 'react';
import 'iconify-icon';
import { useAuraCMSCollection } from '../lib/auraCms';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // Live CMS Collections
  const { items: equipmentItems } = useAuraCMSCollection('equipments');
  const { items: programItems } = useAuraCMSCollection('programs');
  const { items: coachItems } = useAuraCMSCollection('coaches');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Static Fallbacks (used if CMS is empty)
  const pillars = [
    {
      title: 'INTENSIDADE',
      desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.',
    },
    {
      title: 'PRECISÃO',
      desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.',
    },
    {
      title: 'CONTROLE',
      desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.',
    },
  ];

  const staticEquipments = [
    { category: 'CARDIO & CONDITIONING', items: ['Assault Bike Concept2 — 8 UN.', 'Remo Concept2 Model D — 6 UN.', 'SkiErg Concept2 — 4 UN.', 'Esteiras NordicTrack com inclinação', 'Cordas de batalha 15m e 20m'] },
    { category: 'FORÇA LIVRE', items: ['Plataformas de LPO Eleiko', 'Dumbbells até 60kg', 'Kettlebells de competição', 'Bancos ajustáveis pesados'] },
    { category: 'MÁQUINAS', items: ['Leg Press 45º Linear', 'Hack Squat Articulado', 'Polias Duplas com ajuste de precisão', 'Cadeiras Extensoras Biomecânicas'] },
    { category: 'FUNCIONAL & MOBILITY', items: ['Espaldar de madeira', 'Caixas pliométricas', 'Elásticos e bands de resistência', 'Rostos de liberação miofascial'] },
  ];

  const staticPrograms = [
    { name: 'FORGEE STRENGTH', desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.', target: 'Iniciantes a avançados em hipertrofia e força.', freq: '3–5× por semana.' },
    { name: 'FORGEE CONDITIONING', highlight: true, desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.', target: 'Condicionamento, perda de gordura.', freq: '06H · 07H · 12H · 18H · 19H30' },
    { name: 'FORGEE MOBILITY', desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.', target: 'Prevenção e recuperação.', freq: 'Livre' },
    { name: 'PERSONAL TRAINING', desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.', target: 'Resultados focados e acompanhamento premium.', freq: 'A combinar' },
  ];

  const staticCoaches = [
    { name: 'RODRIGO FARIAS', role: 'Head Coach', cref: '045821-G/SP', initials: 'RF' },
    { name: 'ANA LUÍSA', role: 'Conditioning', cref: '078342-G/SP', initials: 'AL' },
    { name: 'BRUNO T.', role: 'Mobility & Rehab', cref: '091205-G/SP', initials: 'BT' },
    { name: 'CAMILA D.', role: 'Personal Trainer', cref: '063417-G/SP', initials: 'CD' },
  ];

  const faqs = [
    { q: 'Preciso ter experiência?', a: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.' },
    { q: 'Posso treinar sozinho?', a: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.' },
    { q: 'Como funciona o cancelamento?', a: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.' },
    { q: 'Posso visitar antes de assinar?', a: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-['Barlow',_sans-serif] selection:bg-[#FF1E00] selection:text-white">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-250 border-b ${isScrolled ? 'bg-[#000000]/90 backdrop-blur-md border-[#2A2A2A] py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <a href="#" className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-tight leading-none text-white hover:text-[#FF1E00] transition-colors">FORGEE</a>
            <span className="text-[10px] text-[#808080] tracking-[0.15em] uppercase hidden md:block mt-1">Beyond Limits Known™ · Est. 2018</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {['Espaço', 'Programas', 'Equipe', 'Planos'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-[#ADADAD] hover:text-[#FFFFFF] uppercase tracking-wider transition-colors">{link}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-[#FFFFFF] border border-[#2A2A2A] hover:bg-[#111111] px-5 py-2.5 rounded-none uppercase tracking-wider transition-all">Sou Membro</button>
            <button className="text-sm font-[Bebas_Neue] text-white bg-[#FF1E00] hover:bg-[#FF8C1D] hover:shadow-[0_0_24px_rgba(255,30,0,0.35)] px-6 py-2.5 rounded-none uppercase tracking-wider text-lg transition-all duration-250">Agendar Visita</button>
          </div>
        </div>
      </header>

      {/* SEC 01 - HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 border-b border-[#2A2A2A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/80 to-[#000000] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,30,0,0.15),transparent_70%)] z-10 mix-blend-screen"></div>
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Forgee Gym" className="w-full h-full object-cover opacity-40 grayscale" />
        </div>

        <div className="relative z-20 max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-['Bebas_Neue',_sans-serif] text-7xl md:text-8xl lg:text-[120px] leading-[0.85] tracking-[-0.02em] uppercase mb-6 text-white mix-blend-lighten">
              SEM <span className="text-[#FF1E00]">MÁGICA</span><br />
              SEM ATALHOS<br />
              SEM DESCULPAS
            </h1>
            <p className="text-xl md:text-2xl text-[#ADADAD] font-medium mb-4 uppercase tracking-wide">
              Treinos progressivos e acompanhamento real!
            </p>
            <p className="text-base md:text-lg text-[#808080] max-w-xl mb-10 leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF1E00] hover:bg-[#FF8C1D] hover:shadow-[0_0_24px_rgba(255,30,0,0.35)] text-white font-['Bebas_Neue',_sans-serif] text-2xl px-10 py-4 uppercase tracking-wider transition-all duration-250 flex items-center justify-center gap-2">
                COMEÇAR AGORA <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
              </button>
              <button className="border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] text-white font-['Bebas_Neue',_sans-serif] text-2xl px-10 py-4 uppercase tracking-wider transition-all duration-250 flex items-center justify-center">
                CONHECER O ESPAÇO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <div className="border-b border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-x divide-[#2A2A2A]/0 md:divide-[#2A2A2A]">
            {[
              { val: '05H–23H', label: 'Horário' },
              { val: '7 DIAS', label: 'Por semana' },
              { val: '1.800M²', label: 'Área total' },
              { val: '+1.200', label: 'Alunos ativos' },
              { val: '2018', label: 'Fundação' },
            ].map((metric, i) => (
              <div key={i} className="text-center md:px-4">
                <div className="font-['Bebas_Neue',_sans-serif] text-3xl md:text-4xl text-[#FFFFFF] tracking-wide">{metric.val}</div>
                <div className="text-xs text-[#808080] uppercase tracking-widest mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEC 02 - QUEM SOMOS */}
      <section id="espaço" className="py-20 md:py-32 px-4 md:px-8 bg-[#000000]">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Left Content: Texts + Accordions */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">Quem somos</span>
              <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase mb-8">
                FORJADOS PELA<br />
                <span className="text-[#FF1E00]">DISCIPLINA.</span>
              </h2>
              
              <div className="space-y-6 text-[#ADADAD] text-lg leading-relaxed mb-10 pr-0 lg:pr-8">
                <p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
                <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
                <blockquote className="border-l-2 border-[#FF1E00] pl-6 py-2 text-[#FFFFFF] italic font-medium">
                  "In silence, the transformation begins."
                </blockquote>
              </div>

              {/* Accordions moved to the left under text */}
              <div className="flex flex-col gap-4 mt-auto">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`bg-[#111111] border border-[#2A2A2A] transition-all duration-300 cursor-pointer ${isActive ? 'shadow-[0_8px_32px_rgba(0,0,0,0.8)] border-[#3D3D3D]' : 'hover:border-[#3D3D3D]'}`}
                      onClick={() => setActivePillar(idx)}
                    >
                      <div className="p-6 md:p-8 flex items-center justify-between">
                        <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl uppercase tracking-wide">
                          <span className={isActive ? 'text-[#FF1E00]' : 'text-white'}>{pillar.title.substring(0, 3)}</span>
                          <span className="text-white">{pillar.title.substring(3)}</span>
                        </h3>
                        <iconify-icon 
                          icon="solar:alt-arrow-down-linear" 
                          width="24" 
                          className={`text-[#808080] transition-transform duration-300 ${isActive ? 'rotate-180 text-[#FF1E00]' : ''}`}
                        ></iconify-icon>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out px-6 md:px-8 ${isActive ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-[#ADADAD] text-base leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content: Stretched Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] mt-8 lg:mt-0">
              {/* `absolute inset-0` forces the image block to perfectly match the height of the left column */}
              <div className="absolute inset-0 w-full h-full border border-[#2A2A2A] overflow-hidden group">
                <div className="absolute inset-0 bg-[#FF1E00]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" alt="Atleta em foco" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEC 03 - ESTRUTURA (CMS INTEGRATION) */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">Estrutura</span>
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase mb-6 max-w-2xl">
            EQUIPAMENTO QUE<br /> <span className="text-[#FF1E00]">NÃO TE LIMITA.</span>
          </h2>
          <p className="text-[#ADADAD] text-lg max-w-xl mb-16">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {equipmentItems.length > 0 ? (
              // Live CMS rendering
              equipmentItems.map((item, i) => (
                <div key={item.id || i} className="border-t border-[#2A2A2A] pt-6">
                  <h4 className="font-['Bebas_Neue',_sans-serif] text-2xl text-white mb-4 tracking-wide">
                    <span className="text-[#555555]">0{i + 1} · </span>{item.title || item.name}
                  </h4>
                  <p className="text-sm text-[#808080] leading-relaxed">{item.description}</p>
                </div>
              ))
            ) : (
              // Fallback rendering
              staticEquipments.map((cat, i) => (
                <div key={i} className="border-t border-[#2A2A2A] pt-6">
                  <h4 className="font-['Bebas_Neue',_sans-serif] text-2xl text-white mb-6 tracking-wide">
                    <span className="text-[#555555]">0{i + 1} · </span>{cat.category}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-[#ADADAD] text-sm flex items-start gap-2">
                        <span className="text-[#FF1E00] mt-1">▰</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SEC 04 - PROGRAMAS (CMS INTEGRATION) */}
      <section id="programas" className="py-20 md:py-32 px-4 md:px-8 bg-[#000000]">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">O que oferecemos</span>
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase mb-16">
            UM PROTOCOLO PARA<br /> <span className="text-[#FF1E00]">CADA OBJETIVO.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programItems.length > 0 ? (
              // Live CMS rendering
              programItems.map((prog, i) => (
                <div key={prog.id || i} className={`p-8 bg-[#111111] border transition-all duration-300 hover:-translate-y-1 ${prog.featured ? 'border-[#FF1E00] shadow-[0_0_32px_rgba(255,30,0,0.15)] relative' : 'border-[#2A2A2A] hover:border-[#3D3D3D]'}`}>
                  {prog.featured && <span className="absolute -top-3 left-8 bg-[#FF1E00] text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">02 · DESTAQUE</span>}
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white mb-4 tracking-wide">{prog.title || prog.name}</h3>
                  <p className="text-[#ADADAD] text-base mb-6 h-20">{prog.description}</p>
                </div>
              ))
            ) : (
              // Fallback rendering
              staticPrograms.map((prog, i) => (
                <div key={i} className={`p-8 bg-[#111111] border transition-all duration-300 hover:-translate-y-1 ${prog.highlight ? 'border-[#FF1E00] shadow-[0_0_32px_rgba(255,30,0,0.15)] relative' : 'border-[#2A2A2A] hover:border-[#3D3D3D]'}`}>
                  {prog.highlight && <span className="absolute -top-3 left-8 bg-[#FF1E00] text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">02 · DESTAQUE</span>}
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white mb-4 tracking-wide">{prog.name}</h3>
                  <p className="text-[#ADADAD] text-base mb-6 md:h-20">{prog.desc}</p>
                  
                  <div className="space-y-2 border-t border-[#2A2A2A] pt-4 mt-auto">
                    <div className="flex gap-2 text-sm">
                      <span className="text-[#808080] font-medium w-20">PARA QUEM:</span>
                      <span className="text-[#E0E0E0]">{prog.target}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-[#808080] font-medium w-20">FREQUÊNCIA:</span>
                      <span className="text-[#E0E0E0]">{prog.freq}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SEC 05 - PLANOS */}
      <section id="planos" className="py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] border-y border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">Investimento</span>
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase mb-4">
            SEM MATRÍCULA. SEM FIDELIDADE.<br /> <span className="text-[#FF1E00]">SEM ENROLAÇÃO.</span>
          </h2>
          <p className="text-[#ADADAD] text-lg mb-16 max-w-2xl mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            {/* Plan 1 */}
            <div className="bg-[#111111] border border-[#2A2A2A] p-8 flex flex-col hover:border-[#3D3D3D] transition-colors">
              <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white mb-2">LIVRE</h3>
              <div className="mb-6"><span className="text-4xl font-bold font-['Bebas_Neue',_sans-serif]">R$ 149</span><span className="text-[#808080] text-sm"> / mês</span></div>
              <ul className="space-y-4 text-sm text-[#ADADAD] flex-1 mb-8">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> Acesso ilimitado 05H–23H</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> Avaliação física de entrada</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> Planilha de treino inicial</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> App FORGEE</li>
              </ul>
              <button className="w-full border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] text-white font-['Bebas_Neue',_sans-serif] text-xl py-3 uppercase tracking-wider transition-all">Quero esse plano</button>
            </div>

            {/* Plan 2 */}
            <div className="bg-[#111111] border-2 border-[#FF1E00] p-8 flex flex-col relative shadow-[0_8px_40px_rgba(255,30,0,0.1)] transform md:-translate-y-4">
              <span className="absolute -top-3 right-8 bg-[#FF1E00] text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">MAIS ESCOLHIDO</span>
              <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-[#FF1E00] mb-2">PLUS</h3>
              <div className="mb-6"><span className="text-4xl font-bold font-['Bebas_Neue',_sans-serif]">R$ 229</span><span className="text-[#808080] text-sm"> / mês</span></div>
              <ul className="space-y-4 text-sm text-[#E0E0E0] flex-1 mb-8">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00]"></iconify-icon> <strong>Tudo do Livre +</strong></li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00]"></iconify-icon> 2 sessões de Personal/mês</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00]"></iconify-icon> 1 aula Conditioning/semana</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00]"></iconify-icon> Revisão planilha 4 semanas</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#FF1E00]"></iconify-icon> Acesso ao Mobility</li>
              </ul>
              <button className="w-full bg-[#FF1E00] hover:bg-[#FF8C1D] text-white font-['Bebas_Neue',_sans-serif] text-xl py-3 uppercase tracking-wider transition-all">Quero esse plano</button>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#111111] border border-[#2A2A2A] p-8 flex flex-col hover:border-[#3D3D3D] transition-colors">
              <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white mb-2">ELITE</h3>
              <div className="mb-6"><span className="text-4xl font-bold font-['Bebas_Neue',_sans-serif]">R$ 389</span><span className="text-[#808080] text-sm"> / mês</span></div>
              <ul className="space-y-4 text-sm text-[#ADADAD] flex-1 mb-8">
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> <strong>Tudo do Plus +</strong></li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> 4 sessões Personal/mês</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> Acesso ilimitado classes</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> Bioimpedância mensal</li>
                <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#555555]"></iconify-icon> WhatsApp coach dedicado</li>
              </ul>
              <button className="w-full border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] text-white font-['Bebas_Neue',_sans-serif] text-xl py-3 uppercase tracking-wider transition-all">Quero esse plano</button>
            </div>
          </div>

          <p className="text-xs text-[#555555] uppercase tracking-widest mb-6">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </p>

          <div className="inline-flex items-center gap-4 bg-[#111111] border border-[#2A2A2A] py-3 px-6 text-sm text-[#ADADAD]">
            <span className="font-bold text-white">DIÁRIA: R$ 39</span>
            <span className="w-px h-4 bg-[#2A2A2A]"></span>
            <span>Acesso por 1 dia</span>
            <span className="w-px h-4 bg-[#2A2A2A]"></span>
            <a href="#" className="text-[#FF1E00] font-bold hover:underline">AGENDAR</a>
          </div>
        </div>
      </section>

      {/* SEC 06 - EQUIPE (CMS INTEGRATION) */}
      <section id="equipe" className="py-20 md:py-32 px-4 md:px-8 bg-[#000000]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">Quem te acompanha</span>
              <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase">
                COACHES QUE <span className="text-[#FF1E00]">TREINAM.</span>
              </h2>
            </div>
            <p className="text-[#ADADAD] text-sm uppercase tracking-wider max-w-sm md:text-right">
              Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachItems.length > 0 ? (
              // Live CMS rendering
              coachItems.map((coach, i) => (
                <div key={coach.id || i} className="group relative bg-[#111111] border border-[#2A2A2A] overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 opacity-80"></div>
                  <img src={coach.image || `https://i.pravatar.cc/400?u=${coach.name}`} alt={coach.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white tracking-wide">{coach.name}</h3>
                    <p className="text-[#FF8C1D] text-sm font-medium uppercase mt-1">{coach.role || 'Coach'}</p>
                  </div>
                </div>
              ))
            ) : (
              // Fallback rendering
              staticCoaches.map((coach, i) => (
                <div key={i} className="group relative bg-[#111111] border border-[#2A2A2A] overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] text-[#2A2A2A] font-['Bebas_Neue',_sans-serif] text-9xl group-hover:text-[#1A1A1A] transition-colors">{coach.initials}</div>
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <h3 className="font-['Bebas_Neue',_sans-serif] text-3xl text-white tracking-wide">{coach.name}</h3>
                    <p className="text-[#FF8C1D] text-sm font-medium uppercase mt-1 mb-1">{coach.role}</p>
                    <p className="text-[#555555] text-xs">CREF: {coach.cref}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SEC 07 - FAQ */}
      <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block text-center">Dúvidas</span>
          <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-6xl leading-[0.9] tracking-[-0.01em] uppercase mb-12 text-center">
            PERGUNTAS <span className="text-[#FF1E00]">DIRETAS.</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} className="border border-[#2A2A2A] bg-[#111111]">
                  <button 
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1A1A1A] transition-colors"
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-white pr-4">{faq.q}</span>
                    <iconify-icon icon="solar:add-circle-linear" width="24" class={`text-[#FF1E00] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}></iconify-icon>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-[#ADADAD] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEC 08 & 09 - LOCALIZAÇÃO & CTA FINAL */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#000000] border-t border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Location Info */}
            <div>
              <span className="text-[#FF8C1D] text-xs font-semibold uppercase tracking-[0.15em] mb-4 block">Onde estamos</span>
              <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em] uppercase mb-8">
                NO CORAÇÃO DE<br /> <span className="text-[#FF1E00]">INDAIATUBA.</span>
              </h2>
              
              <div className="space-y-8 text-[#ADADAD]">
                <div>
                  <p className="text-white font-medium mb-1">Rua das Esmeraldas, 742</p>
                  <p>Jardim Morada do Sol — Indaiatuba, SP<br />CEP 13.334-210</p>
                  <p className="text-sm text-[#808080] mt-2">200m do Carrefour · Próximo à saída SP-075</p>
                </div>
                
                <div className="flex flex-col gap-2 border-l-2 border-[#2A2A2A] pl-4">
                  <div className="flex justify-between w-full max-w-xs">
                    <span className="text-white">Segunda a Sexta</span>
                    <span className="font-['Bebas_Neue',_sans-serif] text-xl text-[#FF8C1D]">05H00 – 23H00</span>
                  </div>
                  <div className="flex justify-between w-full max-w-xs">
                    <span className="text-white">Sábado</span>
                    <span className="font-['Bebas_Neue',_sans-serif] text-xl text-[#FF8C1D]">07H00 – 20H00</span>
                  </div>
                  <div className="flex justify-between w-full max-w-xs">
                    <span className="text-[#808080]">Domingo e Feriados</span>
                    <span className="font-['Bebas_Neue',_sans-serif] text-xl text-[#555555]">08H00 – 14H00</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    <iconify-icon icon="solar:phone-calling-bold" class="text-[#FF1E00]"></iconify-icon> (19) 98234-5678
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    <iconify-icon icon="solar:letter-bold" class="text-[#FF1E00]"></iconify-icon> contato@forgee.academy
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    <iconify-icon icon="simple-icons:instagram" class="text-[#FF1E00]"></iconify-icon> @forgee.academy
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="bg-[#111111] border border-[#2A2A2A] hover:border-[#FF1E00] text-white text-xs font-semibold px-6 py-3 uppercase tracking-wider transition-colors">Como Chegar</button>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-[#111111] border border-[#2A2A2A] p-10 md:p-16 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF1E00] to-[#FF8C1D]"></div>
              <h2 className="font-['Bebas_Neue',_sans-serif] text-5xl md:text-6xl leading-[0.9] tracking-[-0.01em] uppercase mb-6 relative z-10">
                A DECISÃO<br />JÁ FOI TOMADA.<br />
                <span className="text-[#FF1E00]">AGORA É A AÇÃO.</span>
              </h2>
              <p className="text-[10px] text-[#808080] tracking-[0.3em] uppercase mb-10 relative z-10">
                A G E N D E&nbsp;&nbsp;&nbsp;U M A&nbsp;&nbsp;&nbsp;V I S I T A&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;G R A T U I T A&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;S E M&nbsp;&nbsp;&nbsp;C O M P R O M I S S O&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;T R A G A&nbsp;&nbsp;&nbsp;T Ê N I S .
              </p>
              <button className="bg-[#FF1E00] hover:bg-[#FF8C1D] shadow-[0_0_24px_rgba(255,30,0,0.2)] hover:shadow-[0_0_32px_rgba(255,30,0,0.4)] text-white font-['Bebas_Neue',_sans-serif] text-2xl px-10 py-5 uppercase tracking-wider transition-all duration-250 w-full md:w-auto relative z-10">
                AGENDAR VISITA GRATUITA
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <span className="font-['Bebas_Neue',_sans-serif] text-5xl tracking-tight leading-none text-white">FORGEE</span>
              <p className="text-[10px] text-[#555555] tracking-[0.2em] uppercase mt-2">B E Y O N D &nbsp; L I M I T S &nbsp; K N O W N ™</p>
            </div>

            <div className="flex gap-16">
              <div>
                <h5 className="text-[#FFFFFF] text-xs font-bold uppercase tracking-wider mb-4">Academia</h5>
                <ul className="space-y-2">
                  {['Espaço', 'Programas', 'Equipe', 'Planos'].map(link => (
                    <li key={link}><a href={`#${link.toLowerCase()}`} className="text-[#808080] hover:text-[#FF1E00] text-sm transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[#FFFFFF] text-xs font-bold uppercase tracking-wider mb-4">Legal & Redes</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#808080] hover:text-[#FF1E00] text-sm transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="text-[#808080] hover:text-[#FF1E00] text-sm transition-colors">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555555] uppercase tracking-widest">
            <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
            <p>DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>

    </div>
  );
}