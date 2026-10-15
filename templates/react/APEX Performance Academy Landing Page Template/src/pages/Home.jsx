import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../components/ui/Buttons'
import { SectionLabel, HeadlineSplit } from '../components/ui/SectionHeader'

const Home = () => {
  return (
    <div className="bg-[#0A0A0A]">
      
      {/* SECTION 01 - HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-noise">
        {/* Abstract dark overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111111] to-transparent z-0"></div>
        <div className="absolute top-1/4 right-[10%] w-[40vw] h-[40vw] bg-[#E8350A] rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen"></div>
        
        {/* Asymmetrical Hero Layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="max-w-[500px] ml-auto">
              <SectionLabel text="APEX PERFORMANCE ACADEMY" />
              <h1 className="font-display font-black text-display-lg text-white uppercase mb-6 drop-shadow-2xl">
                SEU CORPO<br />
                É O <span className="text-[#E8350A] relative">
                  PROJETO.
                  <span className="absolute bottom-1 left-0 w-full h-[0.1em] bg-[#E8350A] opacity-50"></span>
                </span><br />
                NÓS SOMOS O<br />
                MÉTODO.
              </h1>
              <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
                Treinamento de alto desempenho com estrutura de elite, coaches certificados e metodologia que transforma resultados em rotina — não em exceção.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ButtonPrimary>
                  <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon> Agendar Visita Gratuita
                </ButtonPrimary>
                <ButtonSecondary>Falar com Especialista</ButtonSecondary>
              </div>
              
              <p className="text-[#666666] text-xs">
                Sem compromisso. Sem taxas de adesão na primeira visita.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-1 order-2 lg:order-1 relative h-[60vh] lg:h-[80vh]">
            <div className="absolute inset-0 z-10 scan-lines opacity-30 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" 
              alt="Atleta em treinamento de alta intensidade" 
              className="w-full h-full object-cover object-center grayscale-[0.2] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-10"></div>
            
            {/* Stat Badge Flutuante */}
            <div className="absolute bottom-8 left-8 z-20 bg-[#1A1A1A]/90 backdrop-blur border border-[#333333] p-4 rounded-[4px] shadow-soft max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#E8350A] animate-pulse"></div>
                <span className="text-white font-bold text-sm">+1.200 alunos ativos</span>
              </div>
              <div className="text-[#999999] text-xs">
                Avaliação média 4.9 <span className="text-[#FF6B1A]">★</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 02 - QUEM SOMOS */}
      <section id="quem-somos" className="py-32 bg-[#111111] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-[4px]">
            <div className="absolute inset-0 bg-[#E8350A] mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" 
              alt="Ambiente APEX Academy" 
              className="w-full aspect-[4/5] object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div>
            <SectionLabel text="NOSSA HISTÓRIA" />
            <HeadlineSplit 
              text1="NÃO SOMOS UMA ACADEMIA." 
              highlight="SOMOS UM SISTEMA" 
              text2="DE TRANSFORMAÇÃO." 
              className="mb-8"
            />
            
            <div className="space-y-6 text-[#CCCCCC] leading-relaxed mb-10">
              <p>A APEX nasceu de uma inconformidade: a maioria das academias vende acesso ao espaço. Nós construímos um ambiente onde cada metro quadrado foi projetado para extrair o máximo do seu potencial.</p>
              <p>Fundada em 2015 por atletas e profissionais de educação física, nossa metodologia combina ciência do movimento, periodização inteligente e acompanhamento individualizado. Aqui, o treino não começa quando você entra — começa quando entendemos quem você é.</p>
              <p className="font-medium text-white border-l-2 border-[#E8350A] pl-4">Mais de 9 anos construindo histórias de transformação real. Não vendemos motivação. Entregamos estrutura.</p>
            </div>

            <ul className="space-y-3 mb-10 text-sm text-[#999999]">
              {[
                'Metodologia APEX de periodização em blocos',
                'Avaliação física trimestral inclusa em todos os planos',
                'Coaches com certificação internacional NSCA / CREF',
                'Ambiente premium com climatização e vestiário privativo'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-bold" class="text-[#E8350A] text-lg mt-0.5 shrink-0"></iconify-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ButtonPrimary>
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon> Agendar Visita Gratuita
            </ButtonPrimary>
          </div>
        </div>
      </section>

      {/* SECTION 03 - NÚMEROS */}
      <section className="py-24 bg-[#0A0A0A] border-t-2 border-[#E8350A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="mb-16">
            <SectionLabel text="APEX EM NÚMEROS" />
            <h2 className="font-display font-black text-display-sm text-white uppercase">
              RESULTADOS QUE<br/>FALAM POR SI.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: '1.200+', label: 'Alunos Ativos', desc: 'Crescimento contínuo desde 2015' },
              { num: '94%', label: 'Taxa de Frequência', desc: 'Média mensurada nos últimos 12 meses' },
              { num: '9 Anos', label: 'Excelência Operacional', desc: 'Sem interrupções · Sem concessões' },
              { num: '4.9', suffix: '★', label: 'Avaliação Média', desc: 'Baseado em +800 avaliações verificadas' },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default relative">
                <div className="absolute -inset-4 bg-[#1A1A1A] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="relative z-10 p-2">
                  <h3 className="font-display font-black text-6xl text-[#E8350A] mb-2 tracking-tighter">
                    {stat.num}<span className="text-4xl text-[#FF6B1A] ml-1">{stat.suffix}</span>
                  </h3>
                  <h4 className="font-bold text-white text-lg mb-1">{stat.label}</h4>
                  <p className="text-[#666666] text-sm">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 - DEPOIMENTOS */}
      <section className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <SectionLabel text="DEPOIMENTOS" />
              <HeadlineSplit text1="QUEM TREINA" highlight="AQUI, FICA." text2="" />
            </div>
            <ButtonPrimary className="self-start md:self-auto">
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon> Agendar Visita
            </ButtonPrimary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Rodrigo Almeida, 34 anos", plan: "Elite", time: "2 anos",
                text: "A diferença da APEX não está nos equipamentos — está no cuidado com quem treina. Meu coach conhece minha progressão como ninguém. Resultado em seis meses superou tudo que fiz nos três anos anteriores."
              },
              {
                name: "Mariana Souza, 28 anos", plan: "Plus", time: "14 meses",
                text: "Saí da primeira avaliação com um plano de treinamento de verdade — periodizado, com metas claras. A estrutura é impecável e o ambiente te força a evoluir. Ganhei algo que nenhuma balança mede: consistência."
              },
              {
                name: "Felipe Torres, 41 anos", plan: "Elite", time: "3 anos",
                text: "Executivo, agenda cheia, pouco tempo. A APEX entendeu isso desde o dia um. Meu protocolo é adaptado à minha realidade. Em três anos, não perdi mais de dois treinos por mês. Isso diz tudo."
              },
              {
                name: "Camila Ramos, 25 anos", plan: "Livre", time: "8 meses",
                text: "Vim pela estrutura e fiquei pela comunidade. O nível de quem treina aqui te puxa pra cima naturalmente. Os coaches são presentes mesmo no plano básico. É uma academia que respeita quem escolheu entrar."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-[#252525] p-8 rounded-[12px] hover:border-[#E8350A] transition-colors duration-300">
                <div className="flex text-[#FF6B1A] mb-4 text-sm">
                  ★★★★★
                </div>
                <p className="text-[#CCCCCC] text-base leading-relaxed mb-8 italic">"{item.text}"</p>
                <div className="mt-auto">
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-[#666666] text-xs mt-1">Plano {item.plan} · Tempo: {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 - EQUIPAMENTOS */}
      <section id="equipamentos" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="mb-16">
            <SectionLabel text="ESTRUTURA" />
            <HeadlineSplit 
              text1="EQUIPAMENTO DE" 
              highlight="COMPETIÇÃO." 
              text2="PARA O SEU DIA A DIA." 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'solar:heart-pulse-linear', title: 'CARDIO', desc: 'Esteiras premium com inclinação automática, bikes, elípticos e rowers Concept2. Monitoramento cardíaco integrado.', equip: '12 esteiras · 8 bikes · 4 rowers' },
              { icon: 'solar:bolt-linear', title: 'CONDICIONAMENTO', desc: 'Área dedicada a treinos metabólicos de alta intensidade. Assault bikes, ski ergs, battle ropes e plataformas de salto.', equip: '4 assault bikes · 2 ski ergs' },
              { icon: 'solar:dumbbell-large-linear', title: 'FORÇA', desc: 'Rack completo de barras olímpicas com anilhas calibradas. Plataformas de levantamento com amortecimento acústico.', equip: '8 power racks · 6 plataformas' },
              { icon: 'solar:target-linear', title: 'LIVRE', desc: 'Área de peso livre com halteres de 2kg a 60kg em rack sequencial. Kettlebells e piso emborrachado de alta densidade.', equip: 'Halteres 2–60kg · Kettlebells' },
              { icon: 'solar:settings-linear', title: 'MÁQUINAS', desc: 'Linha completa Technogym e Life Fitness para isolamento muscular com precisão. Mais de 40 estações individuais.', equip: '40+ máquinas premium' },
              { icon: 'solar:crown-star-linear', title: 'INFRAESTRUTURA', desc: 'Vestiários privativos, sauna seca, espaço de recuperação. Estacionamento exclusivo e sala de descanso Elite.', equip: 'Vestiário · Sauna · Estacionamento' },
            ].map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] p-8 rounded-[12px] group hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#333333]">
                <div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E8350A] group-hover:text-white text-[#E8350A] transition-colors">
                  <iconify-icon icon={item.icon} class="text-2xl"></iconify-icon>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-[#999999] text-sm leading-relaxed mb-6">{item.desc}</p>
                <p className="text-xs text-[#666666] font-mono tracking-wider">{item.equip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 - PROTOCOLO */}
      <section id="protocolo" className="py-32 bg-[#111111] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 sticky top-32 self-start">
            <SectionLabel text="METODOLOGIA" />
            <HeadlineSplit 
              text1="PROTOCOLO APEX." 
              highlight="TREINAMENTO QUE PENSA" 
              text2="POR VOCÊ." 
              className="mb-8"
            />
            <p className="text-[#CCCCCC] mb-6 leading-relaxed">
              O Protocolo APEX é o sistema que organiza cada treino dentro de uma lógica maior. Nada aqui é aleatório. Cada sessão existe dentro de um ciclo. Cada ciclo existe dentro de um objetivo.
            </p>
            <p className="text-[#CCCCCC] mb-10 leading-relaxed">
              Diferente de planos genéricos, o Protocolo APEX é calibrado trimestralmente com base em avaliações físicas reais. Você progride porque o sistema avança junto com você.
            </p>
            <ButtonPrimary>
              Falar com Especialista
            </ButtonPrimary>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            {[
              { phase: '01', title: 'DIAGNÓSTICO', time: 'SEMANA 1–2', desc: 'Avaliação física completa: composição corporal, força máxima, mobilidade funcional e capacidade cardiovascular. Entendemos onde você está para definir onde você vai.' },
              { phase: '02', title: 'FUNDAÇÃO', time: 'SEMANA 3–6', desc: 'Construção das bases: técnica de execução, ativação neuromuscular e adaptação ao volume de treino. Esta fase determina a qualidade de tudo que vem depois.' },
              { phase: '03', title: 'ACUMULAÇÃO', time: 'SEMANA 7–14', desc: 'Progressão de carga e volume. O corpo aprende a suportar mais e a recuperar mais rápido. Aqui a transformação se torna visível.' },
              { phase: '04', title: 'INTENSIFICAÇÃO', time: 'SEMANA 15–16', desc: 'Pico de performance. Alta intensidade com volumes controlados. Reavaliação física e ajuste de protocolo para o próximo ciclo.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 md:p-8 bg-[#1A1A1A] rounded-[12px] border border-[#252525] hover:border-[#E8350A]/50 transition-colors">
                <div className="hidden sm:block font-display font-black text-5xl text-[#333333]">
                  {item.phase}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-white text-xl tracking-wide">FASE {item.phase} — {item.title}</h3>
                    <span className="px-2 py-1 bg-[#252525] text-[#999999] text-[10px] font-bold tracking-wider rounded uppercase">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[#999999] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-4 bg-[#E8350A]/10 border border-[#E8350A]/30 rounded-[4px] text-center">
              <p className="text-[#E8350A] text-sm font-medium">O ciclo se reinicia com novos dados. Treino inteligente não para — ele evolui.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 - PLANOS */}
      <section id="planos" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <SectionLabel text="MATRÍCULAS" />
            </div>
            <HeadlineSplit 
              text1="ESCOLHA SEU" 
              highlight="NÍVEL" 
              text2="DE COMPROMISSO." 
              className="mb-4"
            />
            <p className="text-[#999999]">Sem taxa de matrícula nos primeiros 30 dias. Cancele quando quiser — sem multa, sem burocracia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-12">
            
            {/* PLANO 1 */}
            <div className="bg-[#1A1A1A] p-8 rounded-[16px] border border-[#333333] hover:border-[#666666] transition-colors h-full flex flex-col">
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-2">Livre</h3>
              <p className="text-[#999999] text-sm mb-6 h-10">Acesso completo à estrutura. Para quem tem disciplina própria.</p>
              <div className="mb-8">
                <span className="font-display font-black text-5xl text-white tracking-tighter">R$ 189</span>
                <span className="text-[#666666]">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm flex-grow">
                {['Acesso ilimitado (6h–23h, 7 dias)', 'Área de peso livre, máquinas e cardio', 'Avaliação física inicial', 'App APEX com registro'].map((f,i) => (
                  <li key={i} className="flex gap-3 text-[#CCCCCC]"><iconify-icon icon="solar:check-circle-bold" class="text-green-500 shrink-0 text-lg"></iconify-icon>{f}</li>
                ))}
                {['Sem acompanhamento de coach', 'Sem protocolo personalizado'].map((f,i) => (
                  <li key={i} className="flex gap-3 text-[#666666]"><iconify-icon icon="solar:close-circle-line-duotone" class="shrink-0 text-lg"></iconify-icon><del>{f}</del></li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white text-white font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors rounded-[4px]">
                Começar Agora →
              </button>
            </div>

            {/* PLANO 2 - DESTAQUE */}
            <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[16px] border-2 border-[#E8350A] relative shadow-fire scale-100 md:scale-105 z-10 h-full flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8350A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                ⭐ Mais Popular
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-2">Plus</h3>
              <p className="text-[#999999] text-sm mb-6 h-10">Protocolo personalizado + acompanhamento mensal.</p>
              <div className="mb-8">
                <span className="font-display font-black text-5xl text-[#E8350A] tracking-tighter">R$ 349</span>
                <span className="text-[#666666]">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm flex-grow">
                <li className="flex gap-3 text-white font-medium border-b border-[#333333] pb-3 mb-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8350A] shrink-0 text-lg"></iconify-icon>Tudo do plano Livre</li>
                {['Protocolo personalizado (mensal)', '2 sessões de coaching/mês', 'Avaliação física trimestral', 'Suporte WhatsApp com coach'].map((f,i) => (
                  <li key={i} className="flex gap-3 text-[#CCCCCC]"><iconify-icon icon="solar:check-circle-bold" class="text-[#E8350A] shrink-0 text-lg"></iconify-icon>{f}</li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#E8350A] text-white font-bold uppercase text-sm tracking-wider hover:bg-[#FF2200] transition-colors rounded-[4px]">
                Escolher Plus →
              </button>
            </div>

            {/* PLANO 3 */}
            <div className="bg-[#1A1A1A] p-8 rounded-[16px] border border-[#333333] hover:border-[#666666] transition-colors h-full flex flex-col">
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide mb-2">Elite</h3>
              <p className="text-[#999999] text-sm mb-6 h-10">Máximo acompanhamento. Para quem trata o treino como prioridade.</p>
              <div className="mb-8">
                <span className="font-display font-black text-5xl text-white tracking-tighter">R$ 599</span>
                <span className="text-[#666666]">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm flex-grow">
                <li className="flex gap-3 text-white font-medium border-b border-[#333333] pb-3 mb-3"><iconify-icon icon="solar:check-circle-bold" class="text-[#00C8FF] shrink-0 text-lg"></iconify-icon>Tudo do plano Plus</li>
                {['Coach dedicado (sessões ilimitadas)', 'Protocolo revisado quinzenalmente', 'Avaliação mensal bioimpedância', 'Acesso à sala Elite privativa', 'Nutricionista (1 consulta/mês)'].map((f,i) => (
                  <li key={i} className="flex gap-3 text-[#CCCCCC]"><iconify-icon icon="solar:check-circle-bold" class="text-[#00C8FF] shrink-0 text-lg"></iconify-icon>{f}</li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white text-white font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors rounded-[4px]">
                Quero Elite →
              </button>
            </div>

          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-start gap-3 bg-[#111111] border border-[#252525] p-4 rounded max-w-2xl text-sm text-[#999999]">
              <iconify-icon icon="solar:shield-check-bold" class="text-[#E8350A] text-xl shrink-0 mt-0.5"></iconify-icon>
              <p>
                <strong className="text-white">Garantia APEX:</strong> Se após 30 dias de treino com protocolo você não perceber evolução mensurável, devolvemos 100% do investimento. Sem perguntas. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 - COACHES */}
      <section id="coaches" className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="mb-16">
            <SectionLabel text="EQUIPE TÉCNICA" />
            <HeadlineSplit text1="COACHES QUE" highlight="DOMINAM" text2="O QUE ENSINAM." />
            <p className="text-[#999999] mt-4 max-w-xl">Nenhum coach na APEX treina por intuição. Cada um é certificado, atualizado e responsável por resultados reais.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '1568602519186-b4be4120ec4f', name: 'Rafael Monteiro', spec: 'Força & Powerlifting', creds: 'NSCA-CSCS', bio: 'Ex-atleta de powerlifting com 11 anos de exp. Especialista em protocolo para intermediários.' },
              { img: '1594381898411-846e7d193883', name: 'Juliana Ferraz', spec: 'Condicionamento', creds: 'ACSM-CPT', bio: 'Especialista em metabolismo e periodização para perda de gordura com manutenção de massa.' },
              { img: '1574680096145-d05b474e2155', name: 'Bruno Takahashi', spec: 'Funcional & Mobilidade', creds: 'FMS Certified', bio: 'Referência em treinamento funcional avançado e correção de padrões de movimento.' },
              { img: '1580327429188-6625841804f8', name: 'Isabela Queiroz', spec: 'Hipertrofia & Estética', creds: 'ISSA-CPT', bio: 'Coach especializada em transformação corporal com foco em hipertrofia funcional.' }
            ].map((coach, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-[4px] border border-[#252525]">
                  <div className="absolute inset-0 bg-[#E8350A] mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-${coach.img}?w=600&q=80`} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-80"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8350A] bg-[#0A0A0A]/80 px-2 py-1 rounded">
                      {coach.creds}
                    </span>
                  </div>
                </div>
                <h4 className="font-display font-bold text-xl text-white uppercase">{coach.name}</h4>
                <p className="text-[#FF6B1A] text-xs font-bold uppercase tracking-wider mb-2">{coach.spec}</p>
                <p className="text-[#999999] text-sm leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - DECISÃO (CTA FULL-BLEED) */}
      <section className="py-32 bg-[#E8350A] bg-noise border-y border-[#FF2200]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-display-md lg:text-display-lg text-white uppercase leading-[0.9] tracking-tighter mb-8 drop-shadow-lg">
            O MELHOR MOMENTO<br/>ERA ONTEM.<br/>
            O SEGUNDO MELHOR<br/>É AGORA.
          </h2>
          <p className="text-white/85 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Mais de 1.200 pessoas já escolheram parar de esperar. A estrutura está pronta. O protocolo, também. Falta só você.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="px-8 py-4 bg-white text-[#E8350A] font-bold uppercase tracking-wider-custom text-sm rounded-[4px] hover:bg-[#F0F0F0] transition-colors shadow-lg">
              → Agendar Visita Gratuita
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider-custom text-sm rounded-[4px] hover:bg-white/10 transition-colors">
              Falar com Especialista
            </button>
          </div>
          
          <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
            Sem taxa de matrícula · Cancele quando quiser · Visita 100% gratuita
          </p>
        </div>
      </section>

      {/* SECTION 12 - FRASE FINAL */}
      <section className="py-24 bg-[#0A0A0A] text-center flex flex-col items-center justify-center">
        <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter mb-8 max-w-3xl mx-auto leading-tight">
          "DISCIPLINA É TEMPO<br/>TRANSFORMADO EM RESULTADO."
        </h2>
        <div className="w-20 h-[2px] bg-[#E8350A] mb-8"></div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#E8350A] apex-clip-path"></div>
          <span className="text-[#666666] text-xs font-bold uppercase tracking-wider-custom">
            APEX PERFORMANCE ACADEMY ™
          </span>
        </div>
      </section>

    </div>
  )
}

export default Home