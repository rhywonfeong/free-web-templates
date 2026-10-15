import React, { useState } from 'react';
import clsx from 'clsx';
import { stats, pillars, testimonials, equipment, programs, plans, team, faqs } from './data';

// Component: Button
const Button = ({ children, variant = 'primary', className, ...props }) => {
  const base = "inline-flex items-center justify-center font-display uppercase tracking-wider text-sm transition-all duration-200 rounded-[4px] px-6 py-3 font-semibold";
  const variants = {
    primary: "bg-[#E84400] text-white hover:bg-[#FF5A1A]",
    outline: "border border-[#A0A0A0] text-white hover:border-[#E84400]",
    outlineGreen: "border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-[#0A0A0A]",
    dark: "bg-[#0A0A0A] border border-[#242424] text-white hover:border-[#E84400]"
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

// Component: Label
const Label = ({ children }) => (
  <span className="font-display text-[#A0A0A0] text-sm tracking-widest uppercase block mb-4 border-l-2 border-[#E84400] pl-3">
    {children}
  </span>
);

// Component: AccordionItem
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#242424] overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full text-left py-6 flex justify-between items-center group"
      >
        <span className={clsx(
          "font-display text-lg uppercase transition-colors duration-200",
          isOpen ? "text-[#E84400]" : "text-white group-hover:text-[#E84400]"
        )}>
          {title}
        </span>
        <iconify-icon 
          icon="solar:alt-arrow-down-linear" 
          class={clsx("text-2xl text-[#A0A0A0] transition-transform duration-300", isOpen && "rotate-180 text-[#E84400]")}
        ></iconify-icon>
      </button>
      <div 
        className={clsx(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-[#A0A0A0]">{children}</div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeEquip, setActiveEquip] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A] text-[#E8E8E8] min-h-screen selection:bg-[#E84400] selection:text-white">
      {/* Topbar */}
      <div className="bg-[#111111] border-b border-[#242424] py-2 px-4 text-center">
        <p className="text-xs font-display tracking-widest text-[#A0A0A0] uppercase">
          Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#242424]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-black tracking-tighter text-white">
            FORGEE
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Espaço', 'Programas', 'Equipe', 'Planos'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-[#A0A0A0] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-white hover:text-[#E84400] transition-colors">SOU MEMBRO</a>
            <Button>Agendar Visita</Button>
          </div>

          <button 
            className="md:hidden text-2xl text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111111] border-b border-[#242424] px-6 py-4 flex flex-col gap-4">
             {['Espaço', 'Programas', 'Equipe', 'Planos'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-[#A0A0A0] uppercase block py-2">
                {link}
              </a>
            ))}
            <hr className="border-[#242424] my-2" />
            <a href="#" className="text-sm font-semibold text-white uppercase py-2">Sou Membro</a>
            <Button className="w-full">Agendar Visita</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
            alt="Gym background" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          {/* Energy streak subtle overlay */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#E84400]/10 to-transparent blur-3xl mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            <span className="block text-white">Sem mágica.</span>
            <span className="block text-white">Sem atalhos.</span>
            <span className="block text-brand">Sem desculpas.</span>
          </h1>
          <p className="text-xl md:text-2xl font-display uppercase tracking-wide text-white mb-6 max-w-2xl">
            Treinos progressivos e acompanhamento real!
          </p>
          <p className="text-[#A0A0A0] text-lg max-w-xl mb-10 leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group">
              Começar Agora
              <iconify-icon icon="solar:arrow-right-linear" class="ml-2 text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Button>
            <Button variant="outline">Conhecer o Espaço</Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#242424] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</span>
              <span className="font-display text-sm tracking-widest text-[#A0A0A0] uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quem Somos */}
      <section id="espaço" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <Label>Quem Somos</Label>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Forjados <br/><span className="text-brand">Pela</span> <br/>Disciplina.
            </h2>
            <div className="space-y-6 text-[#A0A0A0] text-lg leading-relaxed">
              <p>A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
              <p>Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
              <blockquote className="border-l-4 border-brand pl-6 py-2 my-8 text-white font-display text-2xl uppercase tracking-wide italic">
                "In silence, the transformation begins."
              </blockquote>
              <p>Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio suficiente para se ouvir.</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-[#242424] p-8 rounded-lg hover:border-brand/50 transition-colors">
                <div className="font-display text-brand text-xl font-bold mb-2">{pillar.num}</div>
                <h3 className="font-display text-2xl uppercase text-white mb-3">{pillar.title}</h3>
                <p className="text-[#A0A0A0]">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border border-[#242424] rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
              <iconify-icon icon="solar:quote-left-bold" class="text-3xl text-[#242424] mb-4"></iconify-icon>
              <p className="text-white text-lg mb-6 min-h-[100px]">"{t.text}"</p>
              <div>
                <p className="font-display text-brand font-bold uppercase">{t.author}</p>
                <p className="text-sm text-[#A0A0A0]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment (Estrutura) */}
      <section className="py-24 px-6 bg-[#111111] border-y border-[#242424]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Label>Estrutura</Label>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Equipamento <br/>Que Não Te <br/><span className="text-brand">Limita.</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg">
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-[#242424]">
              {equipment.map((eq, i) => (
                <AccordionItem 
                  key={i} 
                  title={eq.title} 
                  isOpen={activeEquip === i}
                  onClick={() => setActiveEquip(activeEquip === i ? -1 : i)}
                >
                  <ul className="space-y-3 pt-2">
                    {eq.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <iconify-icon icon="solar:check-circle-linear" class="text-brand mt-1 flex-shrink-0"></iconify-icon>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programas" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Label>O Que Oferecemos</Label>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 max-w-2xl">
            Um Protocolo <br/>Para Cada <br/><span className="text-brand">Objetivo.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <div key={i} className={clsx(
                "p-8 md:p-10 rounded-lg border relative overflow-hidden group",
                prog.featured ? "border-brand bg-[#1A1A1A]" : "border-[#242424] bg-[#111111]"
              )}>
                {prog.featured && (
                  <div className="absolute top-0 right-0 bg-brand text-white text-xs font-display font-bold px-3 py-1 uppercase tracking-widest">
                    Destaque
                  </div>
                )}
                <h3 className="font-display text-3xl font-bold uppercase text-white mb-4">{prog.title}</h3>
                <p className="text-[#A0A0A0] mb-8 min-h-[80px]">{prog.desc}</p>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#242424]/50">
                  <div>
                    <p className="text-xs font-display text-[#555555] uppercase tracking-widest mb-1">Para quem é</p>
                    <p className="text-white font-medium">{prog.target}</p>
                  </div>
                  <div>
                    <p className="text-xs font-display text-[#555555] uppercase tracking-widest mb-1">Frequência/Turmas</p>
                    <p className="text-white font-medium">{prog.freq}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-24 px-6 bg-[#111111] border-y border-[#242424]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Label><span className="mx-auto flex justify-center">Investimento</span></Label>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Sem Matrícula.<br/>
            Sem Fidelidade.<br/>
            <span className="text-brand">Sem Enrolação.</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div key={i} className={clsx(
              "rounded-xl p-8 transition-transform hover:-translate-y-2",
              plan.featured 
                ? "border-2 border-brand bg-[#1A1A1A] relative shadow-[0_0_32px_rgba(232,68,0,0.15)] lg:scale-105 z-10" 
                : "border border-[#242424] bg-[#0A0A0A]"
            )}>
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-display font-bold px-4 py-1 uppercase tracking-widest rounded-full">
                  Mais Escolhido
                </div>
              )}
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold text-[#A0A0A0]">R$</span>
                <span className="font-display text-6xl font-black text-white">{plan.price}</span>
                <span className="text-[#A0A0A0]">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-brand mt-1 flex-shrink-0 text-xl"></iconify-icon>
                    <span className="text-[#E8E8E8]">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? 'primary' : 'outline'} 
                className="w-full"
              >
                Quero esse plano
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
              Coaches Que <br/><span className="text-brand">Treinam.</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-xl">
              Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden border border-[#242424] aspect-[3/4]">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent flex flex-col justify-end p-6">
                  <p className="font-display text-brand text-sm font-bold tracking-widest uppercase mb-1">{member.role}</p>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">{member.name}</h3>
                  <p className="text-[#A0A0A0] text-sm">CREF: {member.cref}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#111111] border-y border-[#242424]">
        <div className="max-w-4xl mx-auto">
          <Label>Dúvidas</Label>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
            Perguntas <br/><span className="text-brand">Diretas.</span>
          </h2>
          
          <div className="border-t border-[#242424]">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                title={`0${i + 1} · ${faq.q}`} 
                isOpen={activeFaq === i}
                onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
              >
                <p className="pt-2 text-lg">{faq.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Label>Onde Estamos</Label>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
              No Coração <br/>De <span className="text-brand">Indaiatuba.</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-display text-xl uppercase text-white mb-2">Endereço</h4>
                <p className="text-[#A0A0A0] leading-relaxed">
                  Rua das Esmeraldas, 742<br/>
                  Jardim Morada do Sol<br/>
                  Indaiatuba, SP<br/>
                  CEP 13.334-210
                </p>
                <p className="text-xs font-display text-brand tracking-widest uppercase mt-3">200m do Carrefour · Próximo à saída SP-075</p>
              </div>

              <div>
                <h4 className="font-display text-xl uppercase text-white mb-2">Horários</h4>
                <div className="grid grid-cols-2 max-w-xs gap-y-2 text-[#A0A0A0]">
                  <span>Seg–Sex</span> <span className="text-white font-medium text-right">05H–23H</span>
                  <span>Sáb</span> <span className="text-white font-medium text-right">07H–20H</span>
                  <span>Dom/Feriados</span> <span className="text-white font-medium text-right">08H–14H</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <iconify-icon icon="solar:map-point-linear" class="text-xl"></iconify-icon>
                  Como Chegar
                </Button>
                <Button variant="outlineGreen" className="flex items-center gap-2">
                  <iconify-icon icon="simple-icons:whatsapp" class="text-xl"></iconify-icon>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden border border-[#242424] grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80" 
              alt="Localização FORGEE"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-brand">
        {/* Decorative Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
          <p className="font-display text-[8rem] md:text-[12rem] font-black uppercase text-black leading-none whitespace-nowrap">
            FORGEE BEYOND LIMITS
          </p>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-10">
            A Decisão <br/>Já Foi Tomada. <br/>Agora É A Ação.
          </h2>
          <Button variant="dark" className="text-lg px-8 py-4">
            Agendar Visita Gratuita
          </Button>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-[#111111] border-y border-[#242424] py-3 overflow-hidden flex relative marquee-container">
        <div className="flex whitespace-nowrap animate-marquee font-display font-bold text-sm tracking-widest uppercase text-[#A0A0A0]">
          <span className="mx-4 text-brand">•</span> AGENDE UMA VISITA <span className="mx-4 text-brand">•</span> GRATUITA <span className="mx-4 text-brand">•</span> SEM COMPROMISSO <span className="mx-4 text-brand">•</span> TRAGA TÊNIS
          <span className="mx-4 text-brand">•</span> AGENDE UMA VISITA <span className="mx-4 text-brand">•</span> GRATUITA <span className="mx-4 text-brand">•</span> SEM COMPROMISSO <span className="mx-4 text-brand">•</span> TRAGA TÊNIS
          <span className="mx-4 text-brand">•</span> AGENDE UMA VISITA <span className="mx-4 text-brand">•</span> GRATUITA <span className="mx-4 text-brand">•</span> SEM COMPROMISSO <span className="mx-4 text-brand">•</span> TRAGA TÊNIS
          <span className="mx-4 text-brand">•</span> AGENDE UMA VISITA <span className="mx-4 text-brand">•</span> GRATUITA <span className="mx-4 text-brand">•</span> SEM COMPROMISSO <span className="mx-4 text-brand">•</span> TRAGA TÊNIS
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] pt-20 pb-10 px-6 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-display text-4xl font-black tracking-tighter text-white mb-2 block">
              FORGEE
            </a>
            <p className="font-display text-brand tracking-widest uppercase text-sm mb-6">
              Beyond Limits Known™
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#A0A0A0] hover:text-brand transition-colors">
                <iconify-icon icon="simple-icons:instagram" class="text-2xl"></iconify-icon>
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-brand transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" class="text-2xl"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-display text-white uppercase tracking-widest mb-4">Academia</h5>
            <ul className="space-y-3">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#A0A0A0] hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-white uppercase tracking-widest mb-4">Legal & Redes</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#A0A0A0] hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#242424] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555555]">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </footer>
    </div>
  );
}