import { Link } from 'react-router-dom';
import { Accordion } from '../components/ui/Accordion';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* SEÇÃO 01 — Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-20 md:pb-32 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=80" 
            alt="Forgee Space" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.05] mb-6">
              SEM MÁGICA<br/>
              SEM ATALHOS<br/>
              SEM DESCULPAS
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-4 tracking-tight">
              Treinos progressivos e acompanhamento real!
            </p>
            <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                to="/agendar" 
                className="px-8 py-4 bg-amber-500 text-zinc-950 text-center text-sm font-bold hover:bg-amber-400 transition-all hover:scale-105 duration-300"
              >
                COMEÇAR AGORA
              </Link>
              <a 
                href="#espaco" 
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white text-center text-sm font-medium hover:bg-zinc-800 hover:border-amber-500/50 hover:text-amber-500 transition-colors"
              >
                CONHECER O ESPAÇO
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full border-y border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md relative z-10 mt-auto">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-6">
              {[
                { label: 'Horário', value: '05H–23H' },
                { label: 'Funcionamento', value: '7 DIAS' },
                { label: 'Área do espaço', value: '1.800M²' },
                { label: 'Comunidade', value: '+1.200 ALUNOS' },
                { label: 'Fundação', value: 'DESDE 2018' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</span>
                  <span className="text-lg font-medium text-amber-500 tracking-tight">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 02 — Quem Somos */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Quem somos</span>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-tight mb-8">
                FORJADOS<br/>
                PELA<br/>
                DISCIPLINA.
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                <p>
                  A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
                </p>
                <p>
                  Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
                </p>
                
                <blockquote className="border-l-2 border-amber-500 pl-6 py-2 my-10 text-xl md:text-2xl text-white font-medium italic tracking-tight">
                  "In silence, the transformation begins."
                </blockquote>
                
                <p>
                  Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-16 justify-center">
              {/* Pillars */}
              <div className="grid gap-8">
                {[
                  { title: '01 — Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
                  { title: '02 — Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
                  { title: '03 — Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' },
                ].map((pillar, i) => (
                  <div key={i} className="border-t border-zinc-800 pt-4 hover:border-amber-500/50 transition-colors">
                    <h3 className="text-white font-medium mb-2">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Alunos ativos', value: '+1.200' },
                  { label: 'Retenção em 6 meses', value: '94%' },
                  { label: 'Anos em operação', value: '8 anos' },
                  { label: 'Área dedicada', value: '1.8K M²' },
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 p-6 flex flex-col items-start justify-center hover:bg-zinc-900 hover:border-amber-500/30 transition-colors">
                    <span className="text-3xl font-semibold text-white tracking-tighter mb-2">{stat.value}</span>
                    <span className="text-xs tracking-widest text-amber-500/80 uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
                author: "Rafael M.",
                role: "Engenheiro · Aluno há 3 anos"
              },
              {
                quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
                author: "Juliana T.",
                role: "Professora · Aluna há 2 anos"
              },
              {
                quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
                author: "Lucas O.",
                role: "Empresário · Aluno há 4 anos"
              }
            ].map((test, i) => (
              <div key={i} className="bg-zinc-900 p-8 flex flex-col justify-between border border-zinc-800/50 hover:border-amber-500/50 transition-colors group">
                <p className="text-zinc-300 leading-relaxed mb-8 group-hover:text-white transition-colors">"{test.quote}"</p>
                <div>
                  <p className="text-amber-500 font-medium text-sm">{test.author}</p>
                  <p className="text-xs text-zinc-500 mt-1">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 03 — Estrutura */}
      <section id="espaco" className="py-24 md:py-32 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Estrutura</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-tight">
                EQUIPAMENTO<br/>QUE NÃO TE<br/>LIMITA.
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
          </div>

          <Accordion items={[
            {
              title: "01 · CARDIO & CONDITIONING",
              content: (
                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Assault Bike Concept2 — <span className="text-white">8 UNIDADES</span></li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Remo Concept2 Model D — <span className="text-white">6 UNIDADES</span></li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> SkiErg Concept2 — <span className="text-white">4 UNIDADES</span></li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Esteiras NordicTrack com inclinação negativa</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Cordas de batalha 15m e 20m</li>
                </ul>
              )
            },
            {
              title: "02 · FORÇA LIVRE",
              content: "Plataformas de LPO Eleiko, Racks Rogue Fitness, anilhas calibradas, halteres até 60kg. Área dimensionada para absorção de impacto."
            },
            {
              title: "03 · MÁQUINAS",
              content: "Linha completa Hammer Strength e Arsenal Strength. Foco em biomecânica perfeita e durabilidade extrema."
            },
            {
              title: "04 · FUNCIONAL & MOBILITY",
              content: "Espaço aberto com piso emborrachado, kettlebells de competição, caixas pliométricas de madeira, faixas de resistência e acessórios para mobilidade."
            },
            {
              title: "05 · INFRAESTRUTURA",
              content: "Vestiários premium com duchas de alta pressão, armários digitais, toalhas cortesia e área de convivência minimalista."
            }
          ]} />
        </div>
      </section>

      {/* SEÇÃO 04 — Programas */}
      <section id="programas" className="py-24 md:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">O que oferecemos</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-tight">
              UM PROTOCOLO<br/>
              PARA CADA<br/>
              OBJETIVO.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* P1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 hover:border-amber-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-amber-500 transition-colors">01 — FORGEE STRENGTH</h3>
                <iconify-icon icon="solar:dumbbell-large-linear" width="28" className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed h-20">
                Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
              </p>
              <div className="border-t border-zinc-800 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Para quem é</span>
                  <span className="text-white text-right max-w-[60%]">Iniciantes a avançados em hipertrofia.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Frequência</span>
                  <span className="text-white">3–5× por semana</span>
                </div>
              </div>
            </div>

            {/* P2 - Highlight */}
            <div className="bg-zinc-900 border border-amber-500 p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-amber-500 text-zinc-950 font-bold text-[10px] uppercase tracking-widest py-1 px-3">Destaque</div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-white">02 — FORGEE CONDITIONING</h3>
                <iconify-icon icon="solar:heart-pulse-linear" width="28" className="text-amber-500" />
              </div>
              <p className="text-zinc-300 text-sm mb-8 leading-relaxed h-20 relative z-10">
                Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
              </p>
              <div className="border-t border-zinc-800 pt-6 space-y-4 relative z-10">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Para quem é</span>
                  <span className="text-white font-medium">Condicionamento, perda de gordura.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Turmas</span>
                  <span className="text-white font-medium text-right">06H · 07H · 12H · 18H · 19H30</span>
                </div>
              </div>
            </div>

            {/* P3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 hover:border-amber-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-amber-500 transition-colors">03 — FORGEE MOBILITY</h3>
                <iconify-icon icon="solar:accessibility-linear" width="28" className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
              </p>
            </div>

            {/* P4 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 hover:border-amber-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-amber-500 transition-colors">04 — PERSONAL TRAINING</h3>
                <iconify-icon icon="solar:users-group-two-rounded-linear" width="28" className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 05 — Planos */}
      <section id="planos" className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-tight mb-6">
              SEM MATRÍCULA.<br/>
              SEM FIDELIDADE.<br/>
              SEM ENROLAÇÃO.
            </h2>
            <p className="text-zinc-400 max-w-lg">
              Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Livre */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col hover:border-amber-500/30 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">LIVRE</h3>
              <div className="mb-8">
                <span className="text-3xl font-semibold text-white">R$149</span>
                <span className="text-zinc-500 text-sm">/mês</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-4 mb-8">
                {[
                  'Acesso ilimitado 05H–23H',
                  'Avaliação física de entrada',
                  'Planilha de treino inicial',
                  'App FORGEE'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-0.5" width="16" />
                    <span>{feature}</span>
                  </div>
                ))}
                {['2 sessões de Personal/mês', 'Acesso ao Mobility'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-600 opacity-50">
                    <iconify-icon icon="solar:close-circle-linear" class="mt-0.5" width="16" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/agendar" className="w-full py-3 bg-zinc-800 text-white text-center text-sm font-medium hover:bg-zinc-700 hover:text-amber-500 transition-colors">
                QUERO ESSE PLANO
              </Link>
            </div>

            {/* Plano Plus */}
            <div className="bg-zinc-900 border border-amber-500 p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-amber-500/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-zinc-950 text-[10px] uppercase tracking-widest py-1 px-4 font-bold">
                MAIS ESCOLHIDO
              </div>
              <h3 className="text-lg font-medium text-amber-500 mb-2">PLUS</h3>
              <div className="mb-8">
                <span className="text-4xl font-semibold text-white">R$229</span>
                <span className="text-zinc-400 text-sm">/mês</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-4 mb-8">
                {[
                  'Acesso ilimitado 05H–23H',
                  'Avaliação física de entrada',
                  'Planilha de treino inicial',
                  'App FORGEE',
                  '2 sessões de Personal/mês',
                  '1 aula Conditioning/semana',
                  'Revisão de planilha a cada 4 semanas',
                  'Acesso ao Mobility'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-100">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-0.5" width="16" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/agendar" className="w-full py-3 bg-amber-500 text-zinc-950 text-center text-sm font-bold hover:bg-amber-400 transition-colors">
                QUERO ESSE PLANO
              </Link>
            </div>

            {/* Plano Elite */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col hover:border-amber-500/30 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">ELITE</h3>
              <div className="mb-8">
                <span className="text-3xl font-semibold text-white">R$389</span>
                <span className="text-zinc-500 text-sm">/mês</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-4 mb-8">
                {[
                  'Tudo do plano Plus, e mais:',
                  '4 sessões de Personal/mês',
                  'Acesso ilimitado a classes',
                  'Bioimpedância mensal',
                  'WhatsApp com coach dedicado'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-0.5" width="16" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/agendar" className="w-full py-3 bg-zinc-800 text-white text-center text-sm font-medium hover:bg-zinc-700 hover:text-amber-500 transition-colors">
                QUERO ESSE PLANO
              </Link>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 text-center flex flex-col items-center gap-6">
            <p className="text-sm text-zinc-500">
              Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
            </p>
            <div className="inline-flex items-center gap-4 bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-full">
              <span className="text-sm text-zinc-300"><strong className="text-amber-500 font-medium">DIÁRIA: R$ 39</strong> · Acesso por 1 dia</span>
              <Link to="/agendar" className="text-xs font-medium text-white border-b border-white hover:text-amber-500 hover:border-amber-500 transition-colors">AGENDAR</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 06 — Equipe */}
      <section id="equipe" className="py-24 md:py-32 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Quem te acompanha</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
              COACHES QUE<br/>
              TREINAM.
            </h2>
            <p className="text-zinc-400 max-w-lg">
              Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { init: 'RF', name: 'RODRIGO FARIAS', role: 'Head Coach', cref: 'CREF 045821-G/SP', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80' },
              { init: 'AL', name: 'ANA LUÍSA', role: 'Conditioning', cref: 'CREF 078342-G/SP', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80' },
              { init: 'BT', name: 'BRUNO T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80' },
              { init: 'CD', name: 'CAMILA D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80' },
            ].map((coach, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-zinc-800 relative overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-4 left-4 text-amber-500 font-medium opacity-80">{coach.init}</div>
                </div>
                <h3 className="text-white font-medium tracking-tight group-hover:text-amber-500 transition-colors">{coach.name}</h3>
                <p className="text-sm text-zinc-400 mt-1">{coach.role}</p>
                <p className="text-xs text-zinc-600 mt-1">{coach.cref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 07 — FAQ & SEÇÃO 08 — Localização (Combined layout) */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* FAQ */}
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Dúvidas</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                PERGUNTAS<br/>
                DIRETAS.
              </h2>
              
              <Accordion items={[
                {
                  title: "Preciso ter experiência?",
                  content: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
                },
                {
                  title: "Posso treinar sozinho?",
                  content: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
                },
                {
                  title: "Como funciona o cancelamento?",
                  content: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
                },
                {
                  title: "Posso visitar antes de assinar?",
                  content: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
                }
              ]} />
            </div>

            {/* Localização */}
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 block mb-6 font-semibold">Onde estamos</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12">
                NO CORAÇÃO<br/>
                DE INDAIATUBA.
              </h2>

              <div className="bg-zinc-900 border border-zinc-800 p-8 mb-8 hover:border-amber-500/30 transition-colors">
                <address className="not-italic text-zinc-300 text-sm leading-relaxed mb-6 block">
                  Rua das Esmeraldas, 742<br/>
                  Jardim Morada do Sol<br/>
                  Indaiatuba, SP<br/>
                  CEP 13.334-210
                </address>
                <p className="text-xs text-zinc-500 flex items-center gap-2">
                  <iconify-icon icon="solar:map-point-linear" class="text-amber-500" />
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-white font-medium text-sm mb-4 border-b border-zinc-800 pb-2">Horários</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex justify-between"><span>Seg a Sex</span> <span className="text-white">05H00 – 23H00</span></li>
                    <li className="flex justify-between"><span>Sábado</span> <span className="text-white">07H00 – 20H00</span></li>
                    <li className="flex justify-between"><span>Dom e Fer</span> <span className="text-white">08H00 – 14H00</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-4 border-b border-zinc-800 pb-2">Contato</h4>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer">
                      <iconify-icon icon="solar:phone-linear" class="text-amber-500" />
                      (19) 98234-5678
                    </li>
                    <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer">
                      <iconify-icon icon="solar:letter-linear" class="text-amber-500" />
                      contato@forgee.academy
                    </li>
                    <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer">
                      <iconify-icon icon="simple-icons:instagram" class="text-amber-500" />
                      @forgee.academy
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="flex-1 py-3 bg-zinc-800 text-white text-center text-sm font-medium hover:bg-amber-500 hover:text-zinc-950 transition-colors flex items-center justify-center gap-2">
                  <iconify-icon icon="simple-icons:whatsapp" />
                  WHATSAPP
                </a>
                <a href="#" className="flex-1 py-3 border border-zinc-800 text-white text-center text-sm font-medium hover:bg-zinc-800 hover:border-amber-500 hover:text-amber-500 transition-colors">
                  COMO CHEGAR
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 09 — CTA Final */}
      <section className="py-32 bg-amber-500 text-zinc-950 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] mb-12">
            A DECISÃO<br/>
            JÁ FOI TOMADA.<br/>
            AGORA É A AÇÃO.
          </h2>
          
          <Link 
            to="/agendar" 
            className="px-10 py-5 bg-zinc-950 text-white text-base font-bold hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-2xl shadow-zinc-950/20"
          >
            AGENDAR VISITA GRATUITA
          </Link>
        </div>

        {/* Ticker Tape Background */}
        <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2 -rotate-3 bg-amber-400 py-3 whitespace-nowrap opacity-50 pointer-events-none flex gap-4 overflow-hidden z-0">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-900">
              AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · 
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}