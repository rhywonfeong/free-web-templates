import { useState } from 'react'
import { clsx } from 'clsx'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <StructureSection />
      <ProgramsSection />
      <PricingSection />
      <TeamSection />
      <FaqSection />
      <LocationSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 mt-12 md:mt-0">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass mb-8 border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </span>
          </div>

          {/* Headline - Mixed Typography (Sans + Serif Italic) */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter text-white mb-6">
            SEM <span className="text-[#C8FF00]">MÁGICA</span><br />
            <span className="font-editorial italic font-normal text-white/80">SEM ATALHOS</span><br />
            SEM DESCULPAS
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-neutral-300 mb-6 max-w-xl">
            Treinos progressivos e acompanhamento real!
          </h2>

          <p className="text-neutral-400 text-lg mb-10 max-w-lg leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#planos" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[#C8FF00] text-black font-bold tracking-wide hover:bg-[#A8D900] shadow-[0_0_24px_rgba(200,255,0,0.3)] transition-all hover:scale-105"
            >
              COMEÇAR AGORA
              <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
            </a>
            <a 
              href="#espaco" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
            >
              CONHECER O ESPAÇO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { label: 'Horário', value: '05H–23H' },
    { label: 'Funcionamento', value: '7 DIAS' },
    { label: 'Área', value: '1.800M²' },
    { label: 'Alunos', value: '+1.200 ALUNOS' },
    { label: 'Desde', value: 'DESDE 2018' },
  ]

  return (
    <div className="bg-[#161616] border-y border-white/5 py-8 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</span>
              <span className="text-white font-display font-semibold text-xl tracking-tight">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Col - Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#C8FF00] text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C8FF00]"></span>
              Quem somos
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tight text-white mb-8">
              FORJADOS<br />PELA<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-[#39FF6A]">DISCIPLINA.</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 text-lg">
              <p>
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
              </p>
              <p>
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
            </div>

            <blockquote className="my-10 pl-6 border-l-2 border-[#FF2200]">
              <p className="font-editorial italic text-2xl text-white">
                "In silence, the transformation begins."
              </p>
            </blockquote>

            <p className="text-neutral-400">
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
            </p>
          </div>

          {/* Right Col - Pillars & Social Proof */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { num: '01', title: 'Intensidade', desc: 'Iluminação, acústica, temperatura — tudo serve ao treino.' },
                { num: '02', title: 'Precisão', desc: 'Protocolo individualizado. Nenhuma planilha genérica.' },
                { num: '03', title: 'Controle', desc: 'Você define o objetivo. Nós fornecemos o espaço.' },
              ].map((pillar) => (
                <div key={pillar.num} className="glass p-6 rounded-2xl border-white/5 hover:border-[#C8FF00]/30 transition-colors">
                  <span className="text-[#C8FF00] font-display font-bold text-xl mb-4 block">{pillar.num}</span>
                  <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                  <p className="text-neutral-400 text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {[
                { quote: "A FORGEE é a única que me fez não sentir falta de nenhuma academia de SP.", author: "Rafael M.", info: "Engenheiro · Aluno há 3 anos" },
                { quote: "Entrei querendo perder peso. Fiquei pela comunidade e acompanhamento.", author: "Juliana T.", info: "Professora · Aluna há 2 anos" }
              ].map((test, i) => (
                <div key={i} className="bg-[#161616] p-6 rounded-2xl flex flex-col gap-4">
                  <div className="flex text-[#C8FF00]">
                    {[...Array(5)].map((_, j) => <iconify-icon key={j} icon="solar:star-bold"></iconify-icon>)}
                  </div>
                  <p className="text-white italic">"{test.quote}"</p>
                  <p className="text-sm text-neutral-500">
                    <strong className="text-neutral-300">{test.author}</strong> · {test.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StructureSection() {
  const categories = [
    { name: "CARDIO & CONDITIONING", items: ["Assault Bike Concept2 (8)", "Remo Concept2 Model D (6)", "SkiErg Concept2 (4)", "Esteiras NordicTrack", "Cordas de batalha 15m/20m"] },
    { name: "FORÇA LIVRE", items: ["Plataformas de LPO Eleiko", "Halteres até 60kg", "Bancos ajustáveis Rogue", "Kettlebells de competição"] },
    { name: "MÁQUINAS", items: ["Linha completa Hammer Strength", "Polias duplas ajustáveis", "Leg Press 45º e Linear"] },
  ]

  return (
    <section className="py-24 bg-[#161616] relative overflow-hidden">
      {/* Decorative large text bg */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none flex whitespace-nowrap">
        <span className="text-[20rem] font-display font-black text-white leading-none">ESTRUTURA ESTRUTURA</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neutral-400 text-sm font-bold tracking-widest uppercase mb-4 block">Estrutura</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 uppercase">
            Equipamento<br/>que não te limita.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-[#161616] flex items-center justify-center text-[#C8FF00] text-2xl mb-6">
                <iconify-icon icon="solar:dumbbell-large-linear"></iconify-icon>
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-6 tracking-wide">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-neutral-400 text-sm flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#C8FF00] mt-0.5 shrink-0"></iconify-icon>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramsSection() {
  const programs = [
    {
      title: "FORGEE STRENGTH",
      desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo.",
      tags: ["Hipertrofia", "Força", "3-5x/sem"],
      highlight: false
    },
    {
      title: "FORGEE CONDITIONING",
      desc: "Sessões de 45 min com circuito de alta intensidade. Início e fim marcados. Sem improvisar.",
      tags: ["Cardio", "Perda de gordura", "Horários fixos"],
      highlight: true
    },
    {
      title: "FORGEE MOBILITY",
      desc: "Protocolo de mobilidade, postura e cadeia posterior. Trabalho de corpo para quem treina pesado.",
      tags: ["Recuperação", "Postura"],
      highlight: false
    },
    {
      title: "PERSONAL TRAINING",
      desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão mensal.",
      tags: ["1:1", "Personalizado"],
      highlight: false
    }
  ]

  return (
    <section id="programas" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#C8FF00] text-sm font-bold tracking-widest uppercase mb-4 block">O que oferecemos</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white uppercase leading-none">
              Um protocolo<br/>para cada objetivo.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm">
            Metodologias desenhadas para entregar resultados precisos, não suor aleatório.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog, i) => (
            <div 
              key={i} 
              className={clsx(
                "p-8 rounded-[24px] relative overflow-hidden group",
                prog.highlight ? "bg-[#161616] border border-[#C8FF00]/30 shadow-[0_0_30px_rgba(200,255,0,0.05)]" : "glass border-white/5"
              )}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-[#C8FF00] text-black text-xs font-bold px-4 py-1 rounded-bl-xl z-10">
                  MAIS PROCURADO
                </div>
              )}
              <h3 className={clsx("text-2xl font-display font-bold mb-4", prog.highlight ? "text-[#C8FF00]" : "text-white")}>
                {prog.title}
              </h3>
              <p className="text-neutral-400 mb-8 min-h-[60px]">
                {prog.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {prog.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-medium border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    {
      name: "LIVRE",
      price: "149",
      features: ["Acesso ilimitado 05H–23H", "Avaliação física de entrada", "Planilha de treino inicial", "App FORGEE"],
      cta: "QUERO ESSE PLANO",
      highlight: false
    },
    {
      name: "PLUS",
      price: "229",
      badge: "MAIS ESCOLHIDO",
      features: ["Tudo do plano Livre", "2 sessões de Personal/mês", "1 aula Conditioning/semana", "Revisão planilha mensal", "Acesso ao Mobility"],
      cta: "QUERO ESSE PLANO",
      highlight: true
    },
    {
      name: "ELITE",
      price: "389",
      features: ["Tudo do plano Plus", "4 sessões Personal/mês", "Acesso ilimitado classes", "Bioimpedância mensal", "WhatsApp coach dedicado"],
      cta: "QUERO ESSE PLANO",
      highlight: false
    }
  ]

  return (
    <section id="planos" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C8FF00] text-sm font-bold tracking-widest uppercase mb-4 block">Investimento</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 uppercase">
            SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={clsx(
                "rounded-[32px] p-8 flex flex-col relative transition-transform duration-300 hover:-translate-y-2",
                plan.highlight 
                  ? "bg-[#0A0A0A] border-2 border-[#C8FF00] shadow-[0_0_40px_rgba(200,255,0,0.15)]" 
                  : "bg-[#0A0A0A] border border-white/10"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8FF00] text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-white font-display font-bold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-neutral-400 font-medium">R$</span>
                  <span className="text-4xl md:text-5xl font-display font-black text-white">{plan.price}</span>
                  <span className="text-neutral-500 text-sm">/mês</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-neutral-300 text-sm">
                    <iconify-icon icon="solar:check-circle-bold" className="text-[#C8FF00] text-lg shrink-0 mt-0.5"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={clsx(
                "w-full py-4 rounded-full font-bold tracking-wide transition-all",
                plan.highlight 
                  ? "bg-[#C8FF00] text-black hover:bg-[#A8D900]" 
                  : "bg-[#161616] text-white hover:bg-white/10"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-500">
          <p className="mb-4">Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A0A0A] border border-white/10">
            <span className="text-white font-bold">DIÁRIA: R$ 39</span>
            <span className="text-neutral-400">· Acesso por 1 dia ·</span>
            <a href="#agendar" className="text-[#C8FF00] font-bold hover:underline">AGENDAR</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { initials: "RF", name: "Rodrigo Farias", role: "Head Coach", cref: "CREF 045821-G/SP" },
    { initials: "AL", name: "Ana Luísa", role: "Conditioning", cref: "CREF 078342-G/SP" },
    { initials: "BT", name: "Bruno T.", role: "Mobility & Rehab", cref: "CREF 091205-G/SP" },
    { initials: "CD", name: "Camila D.", role: "Personal Trainer", cref: "CREF 063417-G/SP" },
  ]

  return (
    <section id="equipe" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <span className="text-[#FF2200] text-sm font-bold tracking-widest uppercase mb-4 block">Quem te acompanha</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 uppercase">
            Coaches que<br/>treinam.
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando na mesma intensidade que exigem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#161616] aspect-[4/5] flex flex-col justify-end p-6 border border-white/5 hover:border-white/20 transition-colors">
              {/* Abstract avatar placeholder instead of image to keep it clean, or use initials */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0A0A0A]/50 to-[#161616] z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-display font-black text-white/5 z-0 group-hover:scale-110 transition-transform duration-500">
                {member.initials}
              </div>
              
              <div className="relative z-10">
                <span className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-2 block">{member.role}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{member.name}</h3>
                <p className="text-neutral-500 text-xs font-medium">{member.cref}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    { q: "Preciso ter experiência?", a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual e adaptado a você." },
    { q: "Posso treinar sozinho?", a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima." },
    { q: "Como funciona o cancelamento?", a: "Avise com 30 dias. O plano é encerrado no próximo ciclo. Sem multas escondidas, sem justificativa obrigatória." },
    { q: "Posso visitar antes de assinar?", a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita." },
  ]

  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="py-24 bg-[#161616]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-neutral-500 text-sm font-bold tracking-widest uppercase mb-4 block">Dúvidas</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
            Perguntas diretas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={clsx(
                "border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300",
                openIdx === i ? "bg-[#0A0A0A]" : "bg-transparent hover:bg-white/5"
              )}
            >
              <button 
                className="w-full px-6 py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span className={clsx("font-display font-medium text-lg", openIdx === i ? "text-[#C8FF00]" : "text-white")}>
                  {faq.q}
                </span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={clsx("text-xl transition-transform duration-300 text-neutral-400", openIdx === i && "rotate-180")}
                ></iconify-icon>
              </button>
              <div 
                className={clsx(
                  "px-6 overflow-hidden transition-all duration-300 text-neutral-400",
                  openIdx === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C8FF00] text-sm font-bold tracking-widest uppercase mb-4 block">Onde estamos</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white uppercase mb-8">
              No coração<br/>de Indaiatuba.
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <iconify-icon icon="solar:map-point-linear" className="text-2xl text-[#C8FF00] shrink-0"></iconify-icon>
                <div>
                  <p className="text-white font-medium mb-1">Rua das Esmeraldas, 742</p>
                  <p className="text-neutral-400 text-sm">Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
                  <p className="text-neutral-500 text-xs mt-2 italic">Ref: 200m do Carrefour · Próximo à saída SP-075</p>
                </div>
              </div>

              <div className="flex gap-4">
                <iconify-icon icon="solar:clock-circle-linear" className="text-2xl text-[#C8FF00] shrink-0"></iconify-icon>
                <div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <span className="text-neutral-400">Seg a Sex</span>
                    <span className="text-white font-medium">05H00 – 23H00</span>
                    <span className="text-neutral-400">Sábado</span>
                    <span className="text-white font-medium">07H00 – 20H00</span>
                    <span className="text-neutral-400">Dom/Feriados</span>
                    <span className="text-white font-medium">08H00 – 14H00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#161616] text-white font-medium hover:bg-white/10 transition-colors border border-white/10">
                <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                FALAR NO WHATSAPP
              </button>
              <button className="flex justify-center items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
                <iconify-icon icon="solar:routing-2-linear"></iconify-icon>
                COMO CHEGAR
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[32px] overflow-hidden bg-[#161616] border border-white/10 flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-[#C8FF00] flex items-center justify-center text-black text-3xl shadow-[0_0_30px_rgba(200,255,0,0.4)] animate-bounce">
                  <iconify-icon icon="solar:map-point-bold"></iconify-icon>
               </div>
               <span className="mt-4 bg-black/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-white border border-white/10">VER NO MAPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-32 bg-[#161616] relative overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white mb-8 uppercase leading-[0.9]">
          A DECISÃO<br/>JÁ FOI TOMADA.<br/><span className="text-[#C8FF00]">AGORA É A AÇÃO.</span>
        </h2>
        
        <p className="text-neutral-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-12">
          A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp; G R A T U I T A &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; T R A G A &nbsp; T Ê N I S .
        </p>
        
        <button className="inline-flex justify-center items-center gap-3 px-10 py-5 rounded-full bg-[#C8FF00] text-black text-lg font-black tracking-wider hover:bg-[#A8D900] shadow-[0_0_32px_rgba(200,255,0,0.2)] hover:shadow-[0_0_48px_rgba(200,255,0,0.4)] transition-all transform hover:scale-105">
          AGENDAR VISITA GRATUITA
          <iconify-icon icon="solar:arrow-right-up-linear" className="text-2xl"></iconify-icon>
        </button>
      </div>
    </section>
  )
}