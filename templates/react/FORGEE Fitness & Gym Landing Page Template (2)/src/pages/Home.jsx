import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Accordion from '../components/ui/Accordion';

export default function Home() {
  const location = useLocation();

  // Handle hash scrolling on load or route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#111111]">
      {/* 01 - Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/5b8d294d-12e9-436d-abb9-edf0c111e867/d3508195-6f3b-47fb-a436-c9bff6f61160-Captura-de-Tela-2026-04-11-a-s-14.08.18.png?v=1775927302882" 
            alt="Atleta treinando" 
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
          {/* Subtle light leak effect */}
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#E8400A]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        </div>

        {/* Adicionado pb-56 lg:pb-0 para empurrar o conteúdo para cima no mobile, desobstruindo os CTAs da faixa de stats */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-56 lg:pb-0">
          <div className="max-w-2xl">
            {/* Reduzido de text-6xl para text-4xl sm:text-5xl no mobile para evitar quebras de texto erradas */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-8xl lg:text-[100px] leading-[1] md:leading-[0.9] tracking-tighter uppercase mb-6 flex flex-col">
              <span className="text-white">Sem Mágica.</span>
              <span className="text-[#E8400A]">Sem Atalhos.</span>
              <span className="text-white">Sem Desculpas.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#D9D9D9] font-medium mb-4">
              Treinos progressivos e acompanhamento real!
            </p>
            
            <p className="text-[#B0B0B0] text-[15px] leading-relaxed mb-10 max-w-lg">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Link to="/agendar" className="w-full sm:w-auto">
                <Button variant="primary" fullWidth icon="solar:arrow-right-linear">Começar Agora</Button>
              </Link>
              <a href="#espaço" className="w-full sm:w-auto">
                <Button variant="secondary" fullWidth>Conhecer o Espaço</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0A0A0A]/90 backdrop-blur-sm border-t border-[#1E1E1E] z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-6 md:py-8 divide-x divide-[#1E1E1E]/0 md:divide-[#1E1E1E]">
              {[
                { label: 'Horário', value: '05H–23H' },
                { label: 'Dias/Semana', value: '7 DIAS' },
                { label: 'Espaço', value: '1.800M²' },
                { label: 'Alunos', value: '+1.200' },
                { label: 'Fundação', value: 'EST. 2018' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                  <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Quem Somos */}
      <section id="espaço" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div>
              <SectionHeader 
                eyebrow="Quem somos" 
                title="Forjados\nPela\nDisciplina." 
                highlightTitle="Disciplina."
              />
              <div className="space-y-6 text-[#B0B0B0] text-[15px] leading-relaxed">
                <p>
                  A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
                </p>
                <p>
                  Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
                </p>
                <blockquote className="border-l-2 border-[#E8400A] pl-6 py-2 my-8 text-xl font-medium italic text-white">
                  "In silence, the transformation begins."
                </blockquote>
                <p>
                  Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-[#1E1E1E]">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
                alt="Estrutura interna" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { id: '01', title: 'Intensidade', desc: 'O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.' },
              { id: '02', title: 'Precisão', desc: 'Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.' },
              { id: '03', title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.' }
            ].map(pillar => (
              <div key={pillar.id} className="bg-[#181818] p-8 border border-[#2A2A2A] hover:border-[#E8400A]/50 transition-colors group">
                <div className="text-[#6B6B6B] font-display font-bold text-xl mb-4 group-hover:text-[#E8400A] transition-colors">{pillar.id}</div>
                <h3 className="text-white font-display uppercase tracking-wider font-bold mb-3">{pillar.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed group-hover:text-[#B0B0B0] transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro · Aluno há 3 anos" },
              { text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora · Aluna há 2 anos" },
              { text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário · Aluno há 4 anos" }
            ].map((t, i) => (
              <div key={i} className="bg-[#111111] p-8 border border-[#1E1E1E] relative">
                <iconify-icon icon="solar:quote-right-bold" className="absolute top-6 right-6 text-[#1E1E1E] text-4xl"></iconify-icon>
                <p className="text-[#D9D9D9] italic mb-6 relative z-10 leading-relaxed text-sm">"{t.text}"</p>
                <div className="mt-auto">
                  <p className="text-white font-bold text-sm uppercase tracking-wider">{t.author}</p>
                  <p className="text-[#6B6B6B] text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - Estrutura */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <SectionHeader 
                  eyebrow="Estrutura" 
                  title="Equipamento\nque não te\nlimita." 
                  highlightTitle="limita."
                />
                <p className="text-[#B0B0B0] text-[15px] leading-relaxed mb-8 max-w-sm">
                  Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
                  alt="Equipamentos" 
                  className="w-full aspect-[4/3] object-cover grayscale opacity-80"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Accordion items={[
                {
                  title: 'CARDIO & CONDITIONING',
                  content: (
                    <ul className="space-y-4">
                      {['Assault Bike Concept2 — 8 UNIDADES', 'Remo Concept2 Model D — 6 UNIDADES', 'SkiErg Concept2 — 4 UNIDADES', 'Esteiras NordicTrack com inclinação negativa', 'Cordas de batalha 15m e 20m'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#E8400A] rounded-full shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                },
                { title: 'FORÇA LIVRE', content: 'Plataformas de LPO Eleiko, Racks Rogue Fitness, Halteres de 1kg a 60kg pareados. Barras olímpicas calibradas para powerlifting e weightlifting. Anilhas bumper e de ferro fracionadas.' },
                { title: 'MÁQUINAS', content: 'Linha completa Hammer Strength plate-loaded e Life Fitness seletorizada. Foco em biomecânica perfeita para isolamento muscular seguro.' },
                { title: 'FUNCIONAL & MOBILITY', content: 'Área livre de 200m² com piso de borracha de alta densidade. Kettlebells de competição, caixas pliométricas, elásticos, rolos de liberação e bastões de mobilidade.' },
                { title: 'INFRAESTRUTURA', content: 'Vestiários executivos com duchas de alta pressão, toalhas cortesia e armários digitais. Sistema de climatização industrial e acústica tratada.' }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Programas */}
      <section id="programas" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="O que oferecemos" 
            title="Um Protocolo\nPara Cada\nObjetivo." 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Program 1 */}
            <div className="bg-[#181818] border border-[#2A2A2A] p-8 md:p-10 flex flex-col group hover:border-[#6B6B6B] transition-colors">
              <h3 className="font-display font-bold uppercase text-2xl text-white mb-4">01 — Forgee Strength</h3>
              <p className="text-[#B0B0B0] text-[15px] mb-8 leading-relaxed flex-grow">
                Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#2A2A2A] pt-6 mt-auto">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Para quem é</p>
                  <p className="text-sm text-white font-medium">Iniciantes a avançados</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Frequência</p>
                  <p className="text-sm text-white font-medium">3–5× por semana</p>
                </div>
              </div>
            </div>

            {/* Program 2 (Highlight) */}
            <div className="bg-[#1E1E1E] border border-[#E8400A] p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3">Destaque</div>
              <h3 className="font-display font-bold uppercase text-2xl text-white mb-4">02 — Forgee Conditioning</h3>
              <p className="text-[#D9D9D9] text-[15px] mb-8 leading-relaxed flex-grow">
                Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#E8400A]/30 pt-6 mt-auto">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Para quem é</p>
                  <p className="text-sm text-white font-medium">Condicionamento</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B] mb-1">Turmas</p>
                  <p className="text-sm text-white font-medium">06H · 12H · 18H...</p>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-[#181818] border border-[#2A2A2A] p-8 md:p-10 flex flex-col group hover:border-[#6B6B6B] transition-colors">
              <h3 className="font-display font-bold uppercase text-2xl text-white mb-4">03 — Forgee Mobility</h3>
              <p className="text-[#B0B0B0] text-[15px] leading-relaxed flex-grow">
                Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
              </p>
            </div>

            {/* Program 4 */}
            <div className="bg-[#181818] border border-[#2A2A2A] p-8 md:p-10 flex flex-col group hover:border-[#6B6B6B] transition-colors">
              <h3 className="font-display font-bold uppercase text-2xl text-white mb-4">04 — Personal Training</h3>
              <p className="text-[#B0B0B0] text-[15px] leading-relaxed flex-grow">
                Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Planos */}
      <section id="planos" className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Investimento" 
            title="Sem Matrícula.\nSem Fidelidade.\nSem Enrolação." 
            align="center"
          />
          <p className="text-center text-[#B0B0B0] text-lg max-w-2xl mx-auto mt-[-2rem] mb-16">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-[#111111] border border-[#2A2A2A] p-8 flex flex-col">
              <h4 className="font-display uppercase tracking-widest text-[#B0B0B0] font-bold mb-2">Livre</h4>
              <div className="text-4xl font-display font-black text-white mb-8">R$149<span className="text-lg text-[#6B6B6B] font-medium tracking-normal">/mês</span></div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Acesso ilimitado 05H–23H',
                  'Avaliação física de entrada',
                  'Planilha de treino inicial',
                  'App FORGEE'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#B0B0B0]">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#6B6B6B] mt-0.5" width="16"></iconify-icon>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" fullWidth>Quero esse plano</Button>
            </div>

            {/* Plan 2 (Highlighted) */}
            <div className="bg-[#1E1E1E] border border-[#E8400A] p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#E8400A]/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4">Mais Escolhido</div>
              <h4 className="font-display uppercase tracking-widest text-[#E8400A] font-bold mb-2 mt-4">Plus</h4>
              <div className="text-4xl font-display font-black text-white mb-8">R$229<span className="text-lg text-[#6B6B6B] font-medium tracking-normal">/mês</span></div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Tudo do plano Livre',
                  '2 sessões de Personal/mês',
                  '1 aula Conditioning/semana',
                  'Revisão de planilha a cada 4 semanas',
                  'Acesso ao Mobility'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#E8400A] mt-0.5" width="16"></iconify-icon>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" fullWidth>Quero esse plano</Button>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#111111] border border-[#2A2A2A] p-8 flex flex-col">
              <h4 className="font-display uppercase tracking-widest text-[#B0B0B0] font-bold mb-2">Elite</h4>
              <div className="text-4xl font-display font-black text-white mb-8">R$389<span className="text-lg text-[#6B6B6B] font-medium tracking-normal">/mês</span></div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Tudo do plano Plus',
                  '4 sessões de Personal/mês',
                  'Acesso ilimitado a classes',
                  'Bioimpedância mensal',
                  'WhatsApp com coach dedicado'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#B0B0B0]">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#6B6B6B] mt-0.5" width="16"></iconify-icon>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" fullWidth>Quero esse plano</Button>
            </div>
          </div>

          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">
              Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
            </p>
            <div className="inline-flex items-center gap-4 bg-[#181818] px-6 py-3 border border-[#2A2A2A] mt-4">
              <span className="text-sm text-white"><strong className="text-[#E8400A]">DIÁRIA: R$ 39</strong> · Acesso por 1 dia</span>
              <Link to="/agendar" className="text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8400A] transition-colors border-b border-[#E8400A] pb-0.5">Agendar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - Equipe */}
      <section id="equipe" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Quem te acompanha" 
            title="Coaches Que\nTreinam." 
          />
          <p className="text-[#B0B0B0] text-[15px] mb-12 max-w-2xl mt-[-2rem]">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rodrigo Farias', role: 'Head Coach', cref: '045821-G/SP', img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=500&q=80' },
              { name: 'Ana Luísa', role: 'Conditioning', cref: '078342-G/SP', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&q=80' },
              { name: 'Bruno T.', role: 'Mobility & Rehab', cref: '091205-G/SP', img: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500&q=80' },
              { name: 'Camila D.', role: 'Personal Trainer', cref: '063417-G/SP', img: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&q=80' }
            ].map((coach, i) => (
              <div key={i} className="group relative overflow-hidden bg-[#1E1E1E]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#E8400A] text-[10px] uppercase tracking-widest font-bold mb-1">{coach.role}</p>
                    <h4 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-2">{coach.name}</h4>
                    <p className="text-[#6B6B6B] text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">CREF {coach.cref}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - FAQ & Localização (Combined layout) */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* FAQ */}
            <div>
              <SectionHeader eyebrow="Dúvidas" title="Perguntas\nDiretas." />
              <Accordion items={[
                { title: 'Preciso ter experiência?', content: 'Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.' },
                { title: 'Posso treinar sozinho?', content: 'Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.' },
                { title: 'Como funciona o cancelamento?', content: 'Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.' },
                { title: 'Posso visitar antes de assinar?', content: 'Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.' }
              ]} />
            </div>

            {/* Localização */}
            <div>
              <SectionHeader eyebrow="Onde estamos" title="No Coração\nde Indaiatuba." />
              
              <div className="bg-[#111111] border border-[#2A2A2A] p-8 mb-8">
                <h4 className="font-display text-white uppercase tracking-widest text-sm font-bold mb-4">Endereço</h4>
                <p className="text-[#B0B0B0] text-sm leading-relaxed mb-4">
                  Rua das Esmeraldas, 742<br />
                  Jardim Morada do Sol<br />
                  Indaiatuba, SP<br />
                  CEP 13.334-210
                </p>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-display text-white uppercase tracking-widest text-sm font-bold mb-4">Horários</h4>
                  <ul className="text-sm text-[#B0B0B0] space-y-2">
                    <li className="flex justify-between border-b border-[#2A2A2A] pb-2"><span>Seg-Sex</span> <span className="text-white">05H–23H</span></li>
                    <li className="flex justify-between border-b border-[#2A2A2A] pb-2"><span>Sáb</span> <span className="text-white">07H–20H</span></li>
                    <li className="flex justify-between pb-2"><span>Dom/Feriados</span> <span className="text-white">08H–14H</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-white uppercase tracking-widest text-sm font-bold mb-4">Contato</h4>
                  <ul className="text-sm text-[#B0B0B0] space-y-4">
                    <li className="flex items-center gap-3"><iconify-icon icon="solar:phone-linear"></iconify-icon> (19) 98234-5678</li>
                    <li className="flex items-center gap-3"><iconify-icon icon="solar:letter-linear"></iconify-icon> contato@forgee.academy</li>
                    <li className="flex items-center gap-3"><iconify-icon icon="simple-icons:instagram"></iconify-icon> @forgee.academy</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" icon="solar:routing-linear">Como Chegar</Button>
                <Button variant="outline" className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#111111]" icon="simple-icons:whatsapp">WhatsApp</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 09 - CTA Final */}
      <section className="relative py-32 overflow-hidden bg-[#E8400A] flex flex-col items-center justify-center text-center">
        {/* Abstract bg elements */}
        <div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/5b8d294d-12e9-436d-abb9-edf0c111e867/d3508195-6f3b-47fb-a436-c9bff6f61160-Captura-de-Tela-2026-04-11-a-s-14.08.18.png?v=1775927302882')] mix-blend-overlay opacity-20 object-cover bg-center grayscale"></div>
        <div className="absolute inset-0 bg-[#E8400A]/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[90px] uppercase text-white leading-[0.9] tracking-tighter mb-10">
            A decisão<br />já foi tomada.<br />Agora é a ação.
          </h2>
          
          <Link to="/agendar">
            <Button variant="primary" className="bg-[#111111] text-white hover:bg-white hover:text-[#111111] text-lg py-5 px-10">
              Agendar Visita Gratuita
            </Button>
          </Link>
        </div>

        {/* Ticker Tape */}
        <div className="absolute bottom-0 w-full overflow-hidden bg-[#111111] py-3 border-t border-[#2A2A2A] z-20 flex whitespace-nowrap">
          <div className="animate-[marquee_20s_linear_infinite] flex gap-4 text-[#E8400A] font-display uppercase tracking-[0.3em] text-sm font-bold">
            <span>· AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS </span>
            <span>· AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS </span>
            <span>· AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS </span>
            <span>· AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS </span>
          </div>
        </div>

        {/* Tailwnd custom animation for the ticker - injected manually since it's a specific requirement */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

    </div>
  );
}