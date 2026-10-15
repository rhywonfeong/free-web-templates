import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { 
  navLinks, heroStats, pillars, aboutStats, testimonials, 
  equipmentCategories, programs, plans, team, faqs 
} from './data';

// Reusable Components
const Button = ({ children, variant = 'primary', className, ...props }) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300";
  const variants = {
    primary: "bg-[#ADFF2F] text-black rounded-lg px-8 py-4 hover:bg-[#C8FF6E] hover:scale-105",
    secondary: "bg-transparent text-[#ADFF2F] border border-[#ADFF2F] rounded-lg px-6 py-3 hover:bg-[#ADFF2F]/10",
    white: "bg-white text-black rounded-lg px-8 py-4 hover:bg-gray-200 hover:scale-105"
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const SectionEyebrow = ({ children, className }) => (
  <span className={clsx("block text-[13px] font-semibold tracking-[0.2em] uppercase text-[#ADFF2F] mb-4", className)}>
    {children}
  </span>
);

const SectionHeading = ({ children, className }) => (
  <h2 className={clsx("font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[1.1]", className)}>
    {children}
  </h2>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white relative">
      
      {/* Navigation */}
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-[#0C0C0C]/90 backdrop-blur-md border-[#1A1A1A] py-4" : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <a href="#" className="font-display font-black text-2xl tracking-tighter">FORGEE</a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-[#9A9A9A]">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-[#1A1A1A] pl-8">
              <a href="#planos" className="text-[14px] font-bold text-white hover:text-[#ADFF2F] transition-colors">SOU MEMBRO</a>
              <Button variant="primary" className="py-3 px-6 text-sm">AGENDAR VISITA</Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-2xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <iconify-icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0C0C0C] border-b border-[#1A1A1A] p-5 flex flex-col gap-6 lg:hidden">
            <ul className="flex flex-col gap-4 text-lg">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="block text-[#9A9A9A] hover:text-white" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pt-4 border-t border-[#1A1A1A]">
              <a href="#planos" className="text-center font-bold">SOU MEMBRO</a>
              <Button className="w-full">AGENDAR VISITA</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
            alt="Gym structure" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/80 via-[#0C0C0C]/90 to-[#0C0C0C]"></div>
        </div>
        
        <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/4"></div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 w-full text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block text-[#9A9A9A] text-[13px] tracking-widest font-medium mb-6 uppercase leading-relaxed">
              Beyond Limits Known™<br />
              Indaiatuba, SP · Est. 2018
            </span>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-[96px] tracking-tighter leading-[0.95] mb-6">
              SEM MÁGICA<br />
              <span className="italic text-[#ADFF2F]">SEM ATALHOS</span><br />
              SEM DESCULPAS
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white mb-4 max-w-2xl">
              Treinos progressivos e acompanhamento real.
            </p>
            <p className="text-[#9A9A9A] text-lg max-w-xl mb-10 mx-auto md:mx-0 leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button>COMEÇAR AGORA</Button>
              <Button variant="secondary">CONHECER O ESPAÇO</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-[#1A1A1A] bg-[#0C0C0C] relative z-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#1A1A1A] py-8">
            {heroStats.map((stat, i) => (
              <div key={i} className="px-6 flex flex-col justify-center text-center first:pl-0 last:pr-0 mb-6 md:mb-0 last:mb-0">
                <span className="text-[#9A9A9A] text-[12px] uppercase tracking-wide mb-1">{stat.label}</span>
                <span className="font-display font-bold text-xl md:text-2xl text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quem Somos */}
      <section id="espaco" className="py-24 md:py-32 relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionEyebrow>Quem somos</SectionEyebrow>
              <SectionHeading className="mb-8">FORJADOS PELA<br/>DISCIPLINA.</SectionHeading>
              <p className="text-[#9A9A9A] text-lg mb-6 leading-relaxed">
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
              </p>
              <p className="text-[#9A9A9A] text-lg mb-10 leading-relaxed">
                Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
              </p>
              <blockquote className="border-l-2 border-[#ADFF2F] pl-6 py-2 mb-10">
                <p className="font-display text-2xl italic text-white">"In silence, the transformation begins."</p>
              </blockquote>
              <p className="text-[#9A9A9A] text-lg leading-relaxed">
                Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
              </p>
            </div>
            
            <div className="grid gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="bg-[#1A1A1A] p-8 rounded-[20px] flex gap-6 hover:border-[#ADFF2F] border border-transparent transition-colors">
                  <div className="text-[#ADFF2F] text-4xl flex-shrink-0">
                    <iconify-icon icon={pillar.icon}></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl mb-2">{pillar.title}</h3>
                    <p className="text-[#9A9A9A] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {aboutStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-5xl md:text-6xl text-[#ADFF2F] mb-2">{stat.value}</div>
                <div className="text-[#9A9A9A] uppercase tracking-wide text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformações / Depoimentos (Light Mode - Editorial Style from Reference) */}
      <section className="py-32 bg-white text-[#111111] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 text-center mb-16">
          <SectionEyebrow className="!text-[#111111] opacity-60">TRANSFORMATIONS</SectionEyebrow>
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase mb-6">
            Pessoas Reais.<br />Transformações Reais.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Resultados construídos com consistência, acompanhamento técnico e um ambiente que não aceita menos que o seu melhor.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative max-w-[1400px] mx-auto flex items-center justify-center gap-6 px-4">
          
          {/* Faded Left Card */}
          <div className="hidden lg:block w-[300px] opacity-40 blur-[2px] scale-95 pointer-events-none rounded-[24px] overflow-hidden shadow-lg">
            <img src={testimonials[0].img} alt="Before/After" className="w-full h-[400px] object-cover grayscale" />
          </div>

          {/* Active Center Card */}
          <div className="relative w-full max-w-[800px] bg-white rounded-[24px] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 z-10">
            <div className="relative rounded-[16px] overflow-hidden bg-black h-[500px]">
               <img src={testimonials[1].img} alt="Transformation" className="w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               
               {/* Content Overlay */}
               <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center">
                  <span className="inline-block bg-black/50 backdrop-blur-md border border-[#ADFF2F] text-[#ADFF2F] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 italic">
                    Forgee Strength
                  </span>
                  <p className="text-white text-xl md:text-2xl font-medium mb-4 max-w-xl mx-auto leading-relaxed">
                    {testimonials[1].text}
                  </p>
                  <h4 className="font-display font-bold text-2xl text-white uppercase">{testimonials[1].name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{testimonials[1].role}</p>
               </div>
            </div>
            
            {/* Nav Buttons positioned over the active card edge to look like reference */}
            <button className="absolute top-1/2 -left-6 -translate-y-1/2 w-14 h-14 bg-[#ADFF2F] rounded-lg flex items-center justify-center text-black text-2xl shadow-lg hover:scale-110 transition-transform z-20">
              <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            </button>
            <button className="absolute top-1/2 -right-6 -translate-y-1/2 w-14 h-14 bg-[#ADFF2F] rounded-lg flex items-center justify-center text-black text-2xl shadow-lg hover:scale-110 transition-transform z-20">
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>

          {/* Faded Right Card */}
          <div className="hidden lg:block w-[300px] opacity-40 blur-[2px] scale-95 pointer-events-none rounded-[24px] overflow-hidden shadow-lg">
            <img src={testimonials[2].img} alt="Before/After" className="w-full h-[400px] object-cover grayscale" />
          </div>

        </div>
      </section>

      {/* Estrutura */}
      <section className="py-24 md:py-32 border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <SectionEyebrow>Estrutura</SectionEyebrow>
            <SectionHeading className="mb-6">EQUIPAMENTO QUE<br/>NÃO TE LIMITA.</SectionHeading>
            <p className="text-[#9A9A9A] text-lg max-w-2xl">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
          </div>

          <div className="space-y-4">
            {equipmentCategories.map((cat, i) => (
              <div key={i} className="group bg-[#1A1A1A] rounded-xl overflow-hidden">
                <div className="p-6 md:p-8 flex justify-between items-center cursor-pointer border-l-4 border-transparent hover:border-[#ADFF2F] transition-all">
                  <div className="flex items-center gap-6">
                    <span className="font-display font-bold text-2xl text-[#4A4A4A] group-hover:text-[#ADFF2F] transition-colors">
                      0{i+1}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wide">{cat.name}</h3>
                  </div>
                  <div className="text-[#9A9A9A]">
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
                  </div>
                </div>
                {/* Simplified static expansion for demo (only first is expanded by default in content spec) */}
                {cat.items.length > 0 && (
                  <div className="px-6 md:px-8 pb-8 pt-0 pl-20">
                    <ul className="space-y-4">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex justify-between items-center text-[#9A9A9A] border-b border-[#2A2A2A] pb-2 last:border-0">
                          <span>{item.name}</span>
                          {item.qty !== '—' && <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-semibold">{item.qty}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="py-24 md:py-32 bg-[#111111]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-20">
            <SectionEyebrow>O que oferecemos</SectionEyebrow>
            <SectionHeading>UM PROTOCOLO PARA<br/>CADA OBJETIVO.</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <div key={i} className={clsx(
                "p-8 rounded-[20px] border flex flex-col h-full",
                prog.highlight ? "bg-[#1A1A1A] border-[#ADFF2F]" : "bg-[#0C0C0C] border-[#2A2A2A]"
              )}>
                {prog.highlight && (
                  <span className="self-start bg-[#ADFF2F] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                    Destaque
                  </span>
                )}
                <h3 className="font-display font-bold text-3xl mb-4">{prog.name}</h3>
                <p className="text-[#9A9A9A] leading-relaxed mb-8 flex-grow">{prog.desc}</p>
                
                <div className="space-y-3 mt-auto pt-6 border-t border-[#2A2A2A]">
                  {prog.target && (
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-widest text-[#4A4A4A] font-semibold mb-1">Para quem é</span>
                      <span className="text-sm font-medium">{prog.target}</span>
                    </div>
                  )}
                  {prog.freq && (
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-widest text-[#4A4A4A] font-semibold mb-1">Frequência</span>
                      <span className="text-sm font-medium">{prog.freq}</span>
                    </div>
                  )}
                  {prog.schedule && (
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-widest text-[#4A4A4A] font-semibold mb-1">Turmas</span>
                      <span className="text-sm font-medium text-[#ADFF2F]">{prog.schedule}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 md:py-32 relative overflow-hidden">
        <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
          <div className="text-center mb-20">
            <SectionEyebrow>Investimento</SectionEyebrow>
            <SectionHeading className="mb-6">SEM MATRÍCULA.<br/>SEM FIDELIDADE.<br/>SEM ENROLAÇÃO.</SectionHeading>
            <p className="text-[#9A9A9A] text-lg">
              Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, i) => (
              <div key={i} className={clsx(
                "rounded-[24px] p-8 relative",
                plan.popular 
                  ? "bg-[#1A1A1A] border-2 border-[#ADFF2F] transform md:-translate-y-4 shadow-[0_0_40px_rgba(173,255,47,0.1)]" 
                  : "bg-[#111111] border border-[#2A2A2A]"
              )}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ADFF2F] text-black text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Mais Escolhido
                  </div>
                )}
                
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#2A2A2A]">
                  <span className="text-xl text-[#9A9A9A]">R$</span>
                  <span className="font-display font-black text-5xl">{plan.price}</span>
                  <span className="text-[#9A9A9A]">/mês</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <iconify-icon icon="solar:check-circle-bold" className="text-[#ADFF2F] text-lg mt-0.5 flex-shrink-0"></iconify-icon>
                      <span className={clsx(j === 0 && i > 0 ? "text-white font-bold" : "text-[#9A9A9A]")}>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                  QUERO ESSE PLANO
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 text-sm text-[#9A9A9A] bg-[#1A1A1A] px-8 py-4 rounded-full">
              <span>Pagamento via PIX ou cartão (3× s/ juros)</span>
              <span className="hidden md:inline text-[#4A4A4A]">·</span>
              <span>Cancelamento com 30 dias de aviso</span>
              <span className="hidden md:inline text-[#4A4A4A]">·</span>
              <span className="text-[#ADFF2F]">Plano anual com 15% de desconto</span>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-4 text-sm">
              <span className="text-[#9A9A9A]">Apenas de passagem?</span>
              <span className="font-bold border border-[#2A2A2A] px-4 py-2 rounded-lg">DIÁRIA: R$ 39</span>
              <a href="#" className="text-[#ADFF2F] font-bold hover:underline">AGENDAR</a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 md:py-32 border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <SectionEyebrow>Quem te acompanha</SectionEyebrow>
            <SectionHeading className="mb-6">COACHES QUE<br/>TREINAM.</SectionHeading>
            <p className="text-[#9A9A9A] text-lg max-w-2xl">
              Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-[20px] p-6 hover:border-[#ADFF2F] transition-colors group">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center font-display font-bold text-2xl text-[#ADFF2F] mb-6 group-hover:scale-110 transition-transform">
                  {member.init}
                </div>
                <h4 className="font-display font-bold text-xl mb-1">{member.name}</h4>
                <div className="text-sm font-semibold text-white mb-2">{member.role}</div>
                <div className="text-xs text-[#4A4A4A] tracking-widest uppercase">{member.cref}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Location Grid */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-20">
          
          {/* FAQ */}
          <div>
            <SectionEyebrow>Dúvidas</SectionEyebrow>
            <SectionHeading className="mb-10">PERGUNTAS<br/>DIRETAS.</SectionHeading>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#2A2A2A] pb-4">
                  <button 
                    className="w-full flex justify-between items-center text-left py-4 hover:text-[#ADFF2F] transition-colors group"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-lg pr-8">{faq.q}</span>
                    <iconify-icon 
                      icon={activeFaq === i ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                      className={clsx("text-2xl transition-transform", activeFaq === i ? "text-[#ADFF2F]" : "text-[#4A4A4A] group-hover:text-[#ADFF2F]")}
                    ></iconify-icon>
                  </button>
                  <div className={clsx(
                    "overflow-hidden transition-all duration-300",
                    activeFaq === i ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-[#9A9A9A] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#111111] p-8 md:p-12 rounded-[24px] border border-[#2A2A2A]">
            <SectionEyebrow>Onde estamos</SectionEyebrow>
            <h3 className="font-display font-black text-4xl mb-8 uppercase tracking-tighter">
              NO CORAÇÃO DE<br/>INDAIATUBA.
            </h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-lg font-medium mb-2">Rua das Esmeraldas, 742</p>
                <p className="text-[#9A9A9A] mb-2">Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
                <p className="text-sm text-[#4A4A4A] font-medium tracking-wide">200m do Carrefour · Próximo à saída SP-075</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-[#4A4A4A] uppercase tracking-widest text-[11px] mb-1">Seg a Sex</span>
                  <span className="font-semibold">05H00 – 23H00</span>
                </div>
                <div>
                  <span className="block text-[#4A4A4A] uppercase tracking-widest text-[11px] mb-1">Sábados</span>
                  <span className="font-semibold">07H00 – 20H00</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#4A4A4A] uppercase tracking-widest text-[11px] mb-1">Dom e Feriados</span>
                  <span className="font-semibold">08H00 – 14H00</span>
                </div>
              </div>

              <div className="pt-8 border-t border-[#2A2A2A] flex flex-col gap-4">
                <Button className="w-full flex items-center justify-center gap-2">
                  <iconify-icon icon="simple-icons:whatsapp" className="text-xl"></iconify-icon>
                  FALAR NO WHATSAPP
                </Button>
                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <iconify-icon icon="solar:map-point-linear" className="text-xl"></iconify-icon>
                  COMO CHEGAR
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative bg-[#ADFF2F] text-black overflow-hidden flex flex-col items-center justify-center text-center px-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')] opacity-10 mix-blend-multiply grayscale object-cover"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[88px] tracking-tighter uppercase leading-[0.9] mb-8">
            A DECISÃO JÁ FOI TOMADA.<br/>AGORA É A AÇÃO.
          </h2>
          <p className="font-bold tracking-[0.3em] text-sm md:text-base uppercase opacity-80 mb-12">
            A G E N D E  U M A  V I S I T A · G R A T U I T A · S E M  C O M P R O M I S S O · T R A G A  T Ê N I S .
          </p>
          <Button variant="white" className="text-xl px-12 py-6 shadow-2xl hover:scale-110">
            AGENDAR VISITA GRATUITA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C0C0C] pt-20 pb-10 border-t border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <a href="#" className="font-display font-black text-4xl tracking-tighter block mb-4 text-[#ADFF2F]">FORGEE</a>
              <p className="font-bold tracking-[0.2em] uppercase text-xs text-[#4A4A4A]">
                B E Y O N D   L I M I T S   K N O W N ™
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Academia</h4>
              <ul className="space-y-3 text-[#9A9A9A] text-sm">
                <li><a href="#espaco" className="hover:text-white transition-colors">Espaço</a></li>
                <li><a href="#programas" className="hover:text-white transition-colors">Programas</a></li>
                <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Legal & Redes</h4>
              <ul className="space-y-3 text-[#9A9A9A] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li className="pt-4 flex gap-4">
                  <a href="#" className="text-[#9A9A9A] hover:text-[#ADFF2F] text-xl transition-colors">
                    <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                  </a>
                  <a href="#" className="text-[#9A9A9A] hover:text-[#ADFF2F] text-xl transition-colors">
                    <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#4A4A4A] uppercase tracking-widest font-medium">
            <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
            <p>DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>

    </div>
  );
}