import Button from '../components/Button'
import Accordion from '../components/Accordion'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 01 - HERO SECTION */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Cinematic Image Background for Right Side on Desktop */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80" 
            alt="Atleta treinando intenso" 
            className="w-full h-full object-cover object-center opacity-40 lg:opacity-60 mix-blend-luminosity"
          />
          {/* Heat Glow */}
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#FF4500]/30 to-transparent mix-blend-overlay" />
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 flex flex-col items-start pt-10 lg:pt-0">
            <span className="text-[#FF4500] font-bold tracking-[0.15em] text-xs uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#FF4500]"></span>
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] text-white mb-8">
              Sem Mágica<br />
              Sem Atalhos<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6B6B6B]">Sem Desculpas</span>
            </h1>
            
            <p className="text-[#C4C4C4] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Treinos progressivos e acompanhamento real. Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
              <Button size="lg" className="w-full sm:w-auto">Começar Agora</Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" icon={<iconify-icon icon="solar:play-circle-linear" class="text-xl"></iconify-icon>}>
                Conhecer o Espaço
              </Button>
            </div>

            {/* Status Bar / Chips */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { label: "05H–23H 7 DIAS", icon: "solar:clock-circle-linear" },
                { label: "1.800M²", icon: "solar:ruler-cross-pen-linear" },
                { label: "+1.200 ALUNOS", icon: "solar:users-group-rounded-linear" },
                { label: "DESDE 2018", icon: "solar:calendar-date-linear" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#242424] bg-[#111111]/50 backdrop-blur-sm text-xs font-bold text-[#C4C4C4] uppercase tracking-wider">
                  <iconify-icon icon={stat.icon} class="text-[#FF4500]"></iconify-icon>
                  {stat.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 - QUEM SOMOS */}
      <section className="w-full py-32 px-6 bg-[#0A0A0A] relative border-t border-[#1A1A1A]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                Forjados <br/>
                Pela <br/>
                <span className="text-[#E30000]">Disciplina.</span>
              </h2>
              <blockquote className="border-l-4 border-[#E30000] pl-6 py-2 my-8">
                <p className="text-2xl text-white font-medium italic tracking-tight">"In silence, the transformation begins."</p>
              </blockquote>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center text-[#C4C4C4] text-lg leading-relaxed">
              <p>
                A FORGEE nasceu de uma certeza simples: <strong className="text-white">ambiente mediano produz resultado mediano.</strong>
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso. Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Intensidade", desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino." },
              { id: "02", title: "Precisão", desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui." },
              { id: "03", title: "Controle", desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte." }
            ].map((pillar) => (
              <div key={pillar.id} className="bg-[#111111] border border-[#242424] rounded-2xl p-8 hover:border-[#E30000]/50 hover:bg-[#1A1A1A] transition-all duration-300 group">
                <span className="text-[#E30000] font-black text-4xl opacity-50 block mb-6 group-hover:scale-110 transition-transform origin-left">{pillar.id}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">{pillar.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed group-hover:text-[#C4C4C4] transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - NUMEROS */}
      <section className="w-full py-20 px-6 bg-[#111111] relative overflow-hidden">
        {/* Hex Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C4C4C4 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-[#242424]">
          {[
            { num: "+1.200", label: "Alunos Ativos", sub: "Comunidade" },
            { num: "94%", label: "Retenção", sub: "Média 6 meses" },
            { num: "8 ANOS", label: "Operação", sub: "Desde 2018" },
            { num: "1.8K M²", label: "Área", sub: "Dedicados ao treino" }
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'md:pl-12' : ''}`}>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{stat.num}</span>
              <span className="text-[#FF4500] font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</span>
              <span className="text-[#6B6B6B] text-xs font-medium uppercase tracking-widest">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 - ESTRUTURA & EQUIPAMENTOS */}
      <section className="w-full py-32 px-6 bg-[#0A0A0A]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
              Equipamento<br/>Que Não Te <span className="text-[#E30000]">Limita.</span>
            </h2>
            <p className="text-[#C4C4C4] text-lg max-w-2xl mx-auto">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-video lg:aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80" 
                alt="Pesos e equipamento" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E30000]"></span>
                  <span className="text-white font-bold uppercase tracking-wider text-sm">Infraestrutura Premium</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 justify-center">
              <div className="border-b border-[#242424] pb-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4 flex justify-between items-end">
                  <span>01 · Cardio & Conditioning</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[#C4C4C4] text-sm">
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#E30000]"></iconify-icon> 8x Assault Bike Concept2</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#E30000]"></iconify-icon> 6x Remo Concept2 Model D</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#E30000]"></iconify-icon> 4x SkiErg Concept2</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-[#E30000]"></iconify-icon> Esteiras NordicTrack</li>
                </ul>
              </div>

              <div className="border-b border-[#242424] pb-6 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">02 · Força Livre</h3>
                <p className="text-[#6B6B6B] text-sm">Plataformas de LPO, Racks de agachamento monolift, Barras olímpicas calibradas.</p>
              </div>

              <div className="border-b border-[#242424] pb-6 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">03 · Máquinas</h3>
                <p className="text-[#6B6B6B] text-sm">Linha biomecânica importada focada em isolamento e carga máxima segura.</p>
              </div>
              
              <div className="border-b border-[#242424] pb-6 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">04 · Funcional & Mobility</h3>
                <p className="text-[#6B6B6B] text-sm">Kettlebells de competição, boxes soft, área livre de grama sintética densa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - PROGRAMAS */}
      <section className="w-full py-32 px-6 bg-[#111111]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
              Um Protocolo<br/>Para Cada <span className="text-[#FF4500]">Objetivo.</span>
            </h2>
            <Button variant="outline" className="shrink-0 hidden md:flex">Ver Grade Completa</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Destaque Conditioning */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#E30000]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E30000] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30000]/10 text-[#E30000] border border-[#E30000]/20 text-xs font-bold uppercase tracking-wider mb-6">
                    <iconify-icon icon="solar:fire-bold"></iconify-icon> High Intensity
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">FORGEE Conditioning</h3>
                  <p className="text-[#C4C4C4] mb-6 max-w-xl">
                    Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar. Para quem busca condicionamento e perda de gordura.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['06H', '07H', '12H', '18H', '19H30'].map(time => (
                      <span key={time} className="px-3 py-1 bg-[#242424] text-white text-xs font-bold rounded-md">{time}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" alt="Conditioning" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                </div>
              </div>
            </div>

            {/* Outros Programas */}
            {[
              { 
                title: "FORGEE Strength", 
                desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Treino livre ou acompanhado.", 
                freq: "3–5× / semana" 
              },
              { 
                title: "FORGEE Mobility", 
                desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para não se machucar.", 
                freq: "Recuperação" 
              },
              { 
                title: "Personal Training", 
                desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.", 
                freq: "Agendado" 
              }
            ].map((prog, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-[#242424] rounded-2xl p-8 hover:border-[#6B6B6B] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{prog.title}</h3>
                  <span className="text-[#6B6B6B] text-xs font-bold uppercase px-2 py-1 bg-[#242424] rounded">{prog.freq}</span>
                </div>
                <p className="text-[#C4C4C4] text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 - PLANOS */}
      <section className="w-full py-32 px-6 bg-[#0A0A0A]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
              Sem Matrícula.<br/>Sem Fidelidade.<br/>Sem <span className="text-[#E30000]">Enrolação.</span>
            </h2>
            <p className="text-[#C4C4C4] text-lg">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Livre */}
            <div className="bg-[#111111] border border-[#242424] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Plano Livre</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">R$ 149</span>
                <span className="text-[#6B6B6B] text-sm">/mês</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Acesso ilimitado 05H–23H
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Avaliação física de entrada
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Planilha de treino inicial
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> App FORGEE
                </li>
              </ul>
              <Button variant="outline" className="w-full">Quero Esse Plano</Button>
            </div>

            {/* Plus (Destaque) */}
            <div className="bg-[#1A1A1A] border-2 border-[#E30000] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(227,0,0,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E30000] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Mais Escolhido
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Plano Plus</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">R$ 229</span>
                <span className="text-[#6B6B6B] text-sm">/mês</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm font-bold text-white">
                  <iconify-icon icon="solar:check-circle-bold" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Tudo do Livre +
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> 2 sessões de Personal/mês
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> 1 aula Conditioning/sem
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Revisão a cada 4 semanas
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Acesso ao Mobility
                </li>
              </ul>
              <Button className="w-full">Quero Esse Plano</Button>
            </div>

            {/* Elite */}
            <div className="bg-[#111111] border border-[#242424] rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Plano Elite</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">R$ 389</span>
                <span className="text-[#6B6B6B] text-sm">/mês</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm font-bold text-white">
                  <iconify-icon icon="solar:check-circle-bold" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Tudo do Plus +
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> 4 sessões Personal/mês
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Acesso ilimitado às classes
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> Bioimpedância mensal
                </li>
                <li className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                  <iconify-icon icon="solar:check-circle-linear" class="text-[#E30000] text-lg mt-0.5 shrink-0"></iconify-icon> WhatsApp dedicado
                </li>
              </ul>
              <Button variant="outline" className="w-full">Quero Esse Plano</Button>
            </div>
            
          </div>
          
          <div className="mt-12 text-center flex flex-col md:flex-row justify-center items-center gap-6 text-[#6B6B6B] text-sm">
            <span className="flex items-center gap-2"><iconify-icon icon="solar:card-linear"></iconify-icon> PIX ou Cartão (3x)</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[#242424]"></span>
            <span className="flex items-center gap-2"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Plano anual: 15% OFF</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[#242424]"></span>
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#242424] text-white flex items-center gap-2">
              Opção Avulsa: DIÁRIA R$ 39 <span className="text-[#E30000] cursor-pointer hover:underline font-bold ml-2">Agendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 - DEPOIMENTOS (Social Proof) */}
      <section className="w-full py-24 px-6 bg-[#111111] overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
           <div className="flex items-center gap-4 mb-12">
             <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Avatar" />
             </div>
             <div>
               <div className="flex gap-1 text-[#FF4500]">
                 {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>)}
               </div>
               <span className="text-white text-sm font-bold mt-1 block">+1.7k avaliações</span>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · Há 3 anos" },
               { text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · Há 2 anos" },
               { text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário · Há 4 anos" }
             ].map((dep, i) => (
               <div key={i} className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#242424]">
                 <iconify-icon icon="solar:quote-right-bold" class="text-4xl text-[#242424] mb-4"></iconify-icon>
                 <p className="text-[#C4C4C4] italic mb-6">"{dep.text}"</p>
                 <div>
                   <p className="text-white font-bold tracking-tight">{dep.author}</p>
                   <p className="text-[#6B6B6B] text-xs uppercase tracking-wider mt-1">{dep.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 08 - FAQ */}
      <section className="w-full py-32 px-6 bg-[#0A0A0A]">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
              Perguntas<br/>Diretas.
            </h2>
          </div>
          
          <Accordion items={[
            { question: "Preciso ter experiência?", answer: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual." },
            { question: "Posso treinar sozinho?", answer: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima." },
            { question: "Como funciona o cancelamento?", answer: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória." },
            { question: "Posso visitar antes de assinar?", answer: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita." }
          ]} />
        </div>
      </section>

      {/* 09 - LOCALIZAÇÃO & FINAL CTA */}
      <section className="w-full py-32 px-6 bg-[#E30000] relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A0A0A]/50 z-0"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#1C0505] font-black tracking-[0.2em] text-sm uppercase mb-8">
            A G E N D E · U M A · V I S I T A · G R A T U I T A · S E M · C O M P R O M I S S O
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-12">
            A Decisão <br/>
            Já Foi Tomada.<br/>
            <span className="text-[#1C0505]">Agora é a Ação.</span>
          </h2>
          
          <Button 
            size="lg" 
            className="bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] border-none text-xl px-12 py-6 mb-16"
          >
            Agendar Visita Gratuita
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center">
                <iconify-icon icon="solar:map-point-bold" class="text-xl"></iconify-icon>
              </div>
              <div className="text-left">
                <p className="font-bold text-white uppercase tracking-wider mb-0.5">Indaiatuba, SP</p>
                <p className="opacity-80">R. das Esmeraldas, 742</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center">
                <iconify-icon icon="solar:clock-circle-bold" class="text-xl"></iconify-icon>
              </div>
              <div className="text-left">
                <p className="font-bold text-white uppercase tracking-wider mb-0.5">Seg - Sex</p>
                <p className="opacity-80">05:00 — 23:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center">
                <iconify-icon icon="solar:whatsapp-bold" class="text-xl"></iconify-icon>
              </div>
              <div className="text-left">
                <p className="font-bold text-white uppercase tracking-wider mb-0.5">WhatsApp</p>
                <p className="opacity-80">(19) 98234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}