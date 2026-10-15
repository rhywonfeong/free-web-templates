import React from 'react';
import SectionLabel from '../components/ui/SectionLabel';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <PillarsSection />
      <MetricsSection />
      <TestimonialsSection />
      <EquipmentSection />
      <ProgramsSection />
      <PricingSection />
      <TeamSection />
      <FaqSection />
      <LocationSection />
      <ClosingSection />
    </div>
  );
}

// --- Sections ---

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[var(--neutral-950)] overflow-hidden pt-10">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=80" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        {/* Geometric Accent overlay referencing design system */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[var(--flame-600)]/20 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--neutral-950)] via-[var(--neutral-950)]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--neutral-950)] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Content Column */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <p className="text-[var(--neutral-200)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--flame-500)] inline-block"></span>
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[96px] font-black uppercase tracking-tighter leading-[0.9] text-[var(--neutral-0)] mb-8">
            Sem <span className="text-[var(--flame-500)]">Mágica</span><br />
            Sem Atalhos<br />
            Sem Desculpas
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-[var(--neutral-100)] mb-4">
            Treinos progressivos e acompanhamento real!
          </p>
          
          <p className="text-base md:text-lg text-[var(--neutral-200)] max-w-xl leading-relaxed mb-10">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#planos" className="bg-[var(--flame-500)] text-[var(--neutral-0)] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[var(--flame-400)] transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Começar Agora
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </a>
            <a href="#espaco" className="border border-[var(--neutral-700)] text-[var(--neutral-0)] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-[var(--flame-500)] hover:bg-[var(--neutral-800)] transition-all inline-flex items-center justify-center w-full sm:w-auto">
              Conhecer o Espaço
            </a>
          </div>
        </div>

        {/* Decorative / Slider indicators from reference */}
        <div className="hidden lg:flex col-span-5 relative items-center justify-end">
          {/* Aesthetic element referencing the "slider arrows" in visual analysis */}
          <div className="flex gap-4">
            <button className="w-16 h-16 bg-black/50 backdrop-blur border border-[var(--neutral-800)] flex items-center justify-center text-white hover:bg-[var(--flame-500)] transition-colors">
              <iconify-icon icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
            </button>
            <button className="w-16 h-16 bg-black/50 backdrop-blur border border-[var(--neutral-800)] flex items-center justify-center text-white hover:bg-[var(--flame-500)] transition-colors">
              <iconify-icon icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "05H–23H", label: "Horário" },
    { value: "7 DIAS", label: "Por semana" },
    { value: "1.800M²", label: "Área total" },
    { value: "+1.200", label: "Alunos" },
    { value: "DESDE", label: "2018" },
  ];

  return (
    <div className="bg-[var(--neutral-900)] border-y border-[var(--neutral-800)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-x divide-[var(--neutral-800)]/0 md:divide-[var(--neutral-800)]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <span className="text-xl md:text-2xl font-black tracking-tight text-[var(--neutral-0)]">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[var(--neutral-400)] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="quem-somos" className="py-24 lg:py-32 bg-[var(--neutral-950)] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5">
          <SectionLabel>Quem somos</SectionLabel>
          <h2 className="text-4xl md:text-[56px] leading-[1.1] font-extrabold uppercase tracking-tight text-[var(--neutral-0)] mb-8">
            Forjados<br />
            Pela<br />
            Disciplina.
          </h2>
          <div className="text-[180px] font-black text-[var(--neutral-900)] leading-none absolute -left-10 top-20 select-none z-0 hidden lg:block">
            02
          </div>
        </div>

        <div className="lg:col-span-7 relative z-10 flex flex-col gap-8">
          <p className="text-lg md:text-xl text-[var(--neutral-200)] font-medium leading-relaxed">
            A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
          </p>
          <p className="text-base text-[var(--neutral-400)] leading-relaxed">
            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
          </p>
          
          <blockquote className="pl-6 border-l-4 border-[var(--flame-500)] py-2 my-4">
            <p className="text-xl md:text-2xl font-serif italic text-[var(--neutral-100)]">
              "In silence, the transformation begins."
            </p>
          </blockquote>
          
          <p className="text-base text-[var(--neutral-400)] leading-relaxed">
            Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
          </p>
        </div>

      </div>
    </section>
  );
}

function PillarsSection() {
  const pillars = [
    {
      title: "Intensidade",
      desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.",
      icon: "solar:flame-linear"
    },
    {
      title: "Precisão",
      desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.",
      icon: "solar:target-linear"
    },
    {
      title: "Controle",
      desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.",
      icon: "solar:tuning-square-2-linear"
    }
  ];

  return (
    <section className="py-16 bg-[var(--neutral-900)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="bg-[var(--neutral-850)] p-8 md:p-10 border border-[var(--neutral-800)] hover:border-[var(--flame-500)] transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-[var(--neutral-950)] flex items-center justify-center text-[var(--flame-500)] mb-8 group-hover:scale-110 transition-transform">
                <iconify-icon icon={pillar.icon} width="28"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold text-[var(--neutral-0)] uppercase tracking-tight mb-4">{pillar.title}</h3>
              <p className="text-sm text-[var(--neutral-400)] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    { num: "+1.200", label: "Alunos ativos" },
    { num: "94%", label: "Retenção 6 meses" },
    { num: "8 anos", label: "Em operação" },
    { num: "1.8K", label: "M² Dedicados" },
  ];

  return (
    <section className="py-24 bg-[var(--neutral-950)] border-b border-[var(--neutral-900)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-5xl md:text-[64px] font-black tracking-tighter text-[var(--neutral-0)] mb-2 inline-block border-b-4 border-[var(--flame-500)] pb-2">{m.num}</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--neutral-400)]">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    {
      text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      author: "Rafael M.",
      role: "Engenheiro · Aluno há 3 anos"
    },
    {
      text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      author: "Juliana T.",
      role: "Professora · Aluna há 2 anos"
    },
    {
      text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      author: "Lucas O.",
      role: "Empresário · Aluno há 4 anos"
    }
  ];

  return (
    <section className="py-24 bg-[var(--neutral-900)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 bg-[var(--neutral-950)] relative">
              <iconify-icon icon="solar:quote-right-bold" width="40" className="text-[var(--neutral-800)] absolute top-6 right-6"></iconify-icon>
              <p className="text-[var(--neutral-200)] text-base leading-relaxed mb-8 relative z-10 italic">
                "{r.text}"
              </p>
              <div>
                <p className="text-[var(--neutral-0)] font-bold text-sm uppercase">{r.author}</p>
                <p className="text-[var(--neutral-400)] text-xs mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  return (
    <section id="espaco" className="py-24 lg:py-32 bg-[var(--neutral-950)] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <SectionLabel>Estrutura</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)] mb-6">
            Equipamento<br />
            Que não te<br />
            Limita.
          </h2>
          <p className="text-lg text-[var(--neutral-200)] mb-12 max-w-md">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>

          <div className="space-y-10">
            <div className="border-l-2 border-[var(--flame-500)] pl-6">
              <h3 className="text-xl font-bold text-[var(--neutral-0)] uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="text-[var(--flame-500)] font-black">01</span> Cardio & Conditioning
              </h3>
              <ul className="space-y-3 text-sm text-[var(--neutral-400)]">
                <li className="flex justify-between items-center border-b border-[var(--neutral-800)] pb-2">
                  <span>Assault Bike Concept2</span> <span className="font-mono text-xs text-[var(--neutral-200)]">8 UNID</span>
                </li>
                <li className="flex justify-between items-center border-b border-[var(--neutral-800)] pb-2">
                  <span>Remo Concept2 Model D</span> <span className="font-mono text-xs text-[var(--neutral-200)]">6 UNID</span>
                </li>
                <li className="flex justify-between items-center border-b border-[var(--neutral-800)] pb-2">
                  <span>SkiErg Concept2</span> <span className="font-mono text-xs text-[var(--neutral-200)]">4 UNID</span>
                </li>
                <li className="border-b border-[var(--neutral-800)] pb-2">Esteiras NordicTrack (inclinação negativa)</li>
                <li className="border-b border-[var(--neutral-800)] pb-2">Cordas de batalha 15m e 20m</li>
              </ul>
            </div>

            {/* Other categories placeholder as per content map */}
            {['Força Livre', 'Máquinas', 'Funcional & Mobility', 'Infraestrutura'].map((cat, i) => (
              <div key={i} className="border-l-2 border-[var(--neutral-800)] pl-6 opacity-70 hover:opacity-100 transition-opacity">
                 <h3 className="text-lg font-bold text-[var(--neutral-200)] uppercase tracking-tight flex items-center gap-3">
                  <span className="text-[var(--neutral-700)] font-black">0{i+2}</span> {cat}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[500px] lg:min-h-0 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80" 
            alt="Gym equipment" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-[var(--neutral-950)]/20 mix-blend-multiply"></div>
        </div>

      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado.",
      target: "Iniciantes a avançados em hipertrofia e força.",
      freq: "3–5× por semana",
      highlight: false
    },
    {
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
      target: "Condicionamento, perda de gordura.",
      freq: "Turmas: 06H · 07H · 12H · 18H · 19H30",
      highlight: true
    },
    {
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
      target: "Recuperação e prevenção.",
      freq: "Livre acesso",
      highlight: false
    },
    {
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
      target: "Resultados acelerados e foco exclusivo.",
      freq: "Agendamento flexível",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 lg:py-32 bg-[var(--neutral-900)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="mb-16">
          <SectionLabel>O que oferecemos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)]">
            Um protocolo<br />
            Para cada<br />
            Objetivo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 flex flex-col h-full border ${
                prog.highlight 
                  ? 'bg-[var(--neutral-950)] border-[var(--flame-500)] shadow-[0_0_30px_rgba(232,66,10,0.05)]' 
                  : 'bg-[var(--neutral-850)] border-[var(--neutral-800)] hover:border-[var(--neutral-700)]'
              }`}
            >
              {prog.highlight && (
                <span className="self-start px-3 py-1 bg-[var(--flame-500)] text-[var(--neutral-0)] text-[10px] font-bold uppercase tracking-widest mb-6">
                  Destaque
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-[var(--neutral-0)] uppercase tracking-tight mb-4">{prog.title}</h3>
              <p className="text-sm text-[var(--neutral-200)] leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>
              
              <div className="mt-auto space-y-3 pt-6 border-t border-[var(--neutral-800)]">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--neutral-400)] mb-1">Para quem é</span>
                  <span className="text-sm text-[var(--neutral-100)]">{prog.target}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--neutral-400)] mb-1">Frequência/Turmas</span>
                  <span className="text-sm text-[var(--neutral-100)]">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: [
        "Acesso ilimitado 05H–23H",
        "Avaliação física de entrada",
        "Planilha de treino inicial",
        "App FORGEE"
      ],
      cta: "QUERO ESSE PLANO",
      highlight: false
    },
    {
      name: "PLUS",
      price: "229",
      features: [
        "Tudo do Livre +",
        "2 sessões de Personal/mês",
        "1 aula Conditioning/semana",
        "Revisão planilha a cada 4 sem.",
        "Acesso ao Mobility"
      ],
      cta: "QUERO ESSE PLANO",
      highlight: true,
      badge: "MAIS ESCOLHIDO"
    },
    {
      name: "ELITE",
      price: "389",
      features: [
        "Tudo do Plus +",
        "4 sessões Personal/mês",
        "Acesso ilimitado a todas as classes",
        "Bioimpedância mensal",
        "WhatsApp com coach dedicado"
      ],
      cta: "QUERO ESSE PLANO",
      highlight: false
    }
  ];

  return (
    <section id="planos" className="py-24 lg:py-32 bg-[var(--neutral-950)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>Investimento</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)] mb-4">
            Sem matrícula.<br />
            Sem fidelidade.<br />
            Sem enrolação.
          </h2>
          <p className="text-[var(--neutral-400)]">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-end">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 flex flex-col rounded-xl ${
                plan.highlight 
                  ? 'bg-[var(--flame-500)] text-[var(--neutral-0)] shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'bg-[var(--neutral-900)] border border-[var(--neutral-800)] text-[var(--neutral-100)]'
              }`}
            >
              {plan.badge && (
                <span className="self-center px-4 py-1 bg-[var(--neutral-950)] text-[var(--flame-500)] text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full">
                  {plan.badge}
                </span>
              )}
              
              <h3 className={`text-xl font-bold uppercase tracking-tight mb-2 text-center ${plan.highlight ? 'text-white' : 'text-[var(--neutral-0)]'}`}>
                {plan.name}
              </h3>
              <div className="flex justify-center items-baseline gap-1 mb-8">
                <span className="text-lg font-medium opacity-80">R$</span>
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-sm font-medium opacity-80">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <iconify-icon 
                      icon="solar:check-circle-bold" 
                      width="20" 
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-[var(--flame-500)]'}`}
                    ></iconify-icon>
                    <span className={plan.highlight ? 'text-white/90' : 'text-[var(--neutral-200)]'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                plan.highlight
                  ? 'bg-[var(--neutral-950)] text-[var(--neutral-0)] hover:bg-black'
                  : 'bg-[var(--neutral-800)] text-[var(--neutral-0)] hover:bg-[var(--flame-500)]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-[var(--neutral-900)] p-6 md:p-8 rounded-lg border border-[var(--neutral-800)]">
          <div className="text-sm text-[var(--neutral-400)] text-center md:text-left">
            <span className="text-[var(--neutral-0)] font-bold">Opção Avulsa:</span> DIÁRIA: R$ 39 · Acesso por 1 dia
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-[var(--flame-500)] hover:text-[var(--flame-400)] flex items-center gap-2">
            AGENDAR DIÁRIA <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </button>
        </div>

        <p className="text-center text-xs text-[var(--neutral-500)] mt-8">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </p>

      </div>
    </section>
  );
}

function TeamSection() {
  const coaches = [
    { initials: "RF", name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP" },
    { initials: "AL", name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP" },
    { initials: "BT", name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP" },
    { initials: "CD", name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP" },
  ];

  return (
    <section id="equipe" className="py-24 bg-[var(--neutral-900)] border-t border-[var(--neutral-800)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="mb-16">
          <SectionLabel>Quem te acompanha</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)] mb-4">
            Coaches Que<br />Treinam.
          </h2>
          <p className="text-[var(--neutral-400)] max-w-md">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, i) => (
            <div key={i} className="bg-[var(--neutral-950)] border border-[var(--neutral-800)] p-6 hover:border-[var(--flame-500)] transition-colors group">
              <div className="w-16 h-16 bg-[var(--neutral-900)] text-[var(--neutral-400)] flex items-center justify-center text-xl font-bold font-display uppercase mb-6 group-hover:bg-[var(--flame-500)] group-hover:text-[var(--neutral-0)] transition-colors">
                {coach.initials}
              </div>
              <h3 className="text-lg font-bold text-[var(--neutral-0)] mb-1">{coach.name}</h3>
              <p className="text-sm text-[var(--flame-500)] font-medium mb-4">{coach.role}</p>
              <p className="text-xs text-[var(--neutral-500)] font-mono">{coach.cref}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Preciso ter experiência?",
      a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual."
    },
    {
      q: "Posso treinar sozinho?",
      a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima."
    },
    {
      q: "Como funciona o cancelamento?",
      a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória."
    },
    {
      q: "Posso visitar antes de assinar?",
      a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita."
    }
  ];

  return (
    <section className="py-24 bg-[var(--neutral-950)]">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>Dúvidas</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)]">
            Perguntas<br />Diretas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[var(--neutral-900)] border border-[var(--neutral-800)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[var(--neutral-0)] uppercase tracking-wide">
                <span>{faq.q}</span>
                <span className="transition group-open:rotate-180 text-[var(--flame-500)]">
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
                </span>
              </summary>
              <div className="p-6 pt-0 text-[var(--neutral-400)] text-sm leading-relaxed border-t border-[var(--neutral-800)] mt-2 bg-[var(--neutral-900)]">
                <p className="pt-4">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-[var(--neutral-900)] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <SectionLabel>Onde estamos</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--neutral-0)] mb-12">
            No coração<br />de Indaiatuba.
          </h2>

          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-500)] mb-2">Endereço</h4>
              <p className="text-[var(--neutral-100)]">Rua das Esmeraldas, 742<br />Jardim Morada do Sol — Indaiatuba, SP<br />CEP 13.334-210</p>
              <p className="text-sm text-[var(--neutral-400)] mt-2 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-linear"></iconify-icon> 200m do Carrefour · Próximo à saída SP-075
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-500)] mb-2">Horários</h4>
              <ul className="text-sm text-[var(--neutral-200)] space-y-2">
                <li className="flex justify-between max-w-xs border-b border-[var(--neutral-800)] pb-1">
                  <span>Segunda a Sexta</span> <span className="font-mono text-[var(--neutral-0)]">05H00–23H00</span>
                </li>
                <li className="flex justify-between max-w-xs border-b border-[var(--neutral-800)] pb-1">
                  <span>Sábado</span> <span className="font-mono text-[var(--neutral-0)]">07H00–20H00</span>
                </li>
                <li className="flex justify-between max-w-xs border-b border-[var(--neutral-800)] pb-1">
                  <span>Domingo e Feriados</span> <span className="font-mono text-[var(--neutral-0)]">08H00–14H00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--neutral-500)] mb-2">Contato</h4>
              <ul className="text-sm text-[var(--neutral-200)] space-y-2">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="simple-icons:whatsapp" className="text-[var(--flame-500)]"></iconify-icon> (19) 98234-5678
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:letter-linear" className="text-[var(--flame-500)]"></iconify-icon> contato@forgee.academy
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="simple-icons:instagram" className="text-[var(--flame-500)]"></iconify-icon> @forgee.academy
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#25D366] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-2">
              <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
              Falar no WhatsApp
            </button>
            <button className="border border-[var(--neutral-700)] text-[var(--neutral-0)] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-[var(--neutral-400)] transition-colors">
              Como Chegar
            </button>
          </div>
        </div>

        {/* Map Placeholder Graphic matching visual aesthetic */}
        <div className="relative h-full min-h-[400px] bg-[var(--neutral-950)] border border-[var(--neutral-800)] flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center grayscale mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[var(--flame-500)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(232,66,10,0.4)] mb-4 animate-pulse">
               <iconify-icon icon="solar:map-point-bold" width="32" className="text-white"></iconify-icon>
            </div>
            <span className="bg-[var(--neutral-900)] px-4 py-2 text-xs font-bold tracking-widest text-[var(--neutral-0)] border border-[var(--neutral-800)] uppercase">
              FORGEE HQ
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="py-32 bg-[var(--flame-500)] text-center px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[var(--neutral-0)] mb-8 leading-[0.9]">
          A decisão<br />
          Já foi tomada.<br />
          Agora é a ação.
        </h2>
        
        <p className="text-xs md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] text-[#FFE8E0] mb-12 max-w-3xl mx-auto leading-relaxed uppercase">
          Agende uma visita · Gratuita · Sem compromisso · Traga tênis .
        </p>
        
        <button className="bg-[var(--neutral-950)] text-[var(--neutral-0)] px-10 py-5 font-black text-base md:text-lg uppercase tracking-widest hover:bg-[var(--neutral-0)] hover:text-[var(--neutral-950)] transition-all duration-300 shadow-2xl">
          Agendar Visita Gratuita
        </button>
      </div>
    </section>
  );
}