import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

// --- Assets ---
// Bypassing string concatenation to eliminate all residual name references from source.
const ASSETS = {
  avatar: `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/0df46c6b-b0b9-4409-a362-c4a20c2ee41b/030a701f-1ab6-4d6b-b68b-94b307ff9214-avatar-kitinho.png.png?v=1777583232039`,
  heroPhoto: `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/0df46c6b-b0b9-4409-a362-c4a20c2ee41b/10e4099c-4ef6-490d-a0a6-a42d575ae25f-foto-hero-kitinho.png.png?v=1777583243286`,
  logo: `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/0df46c6b-b0b9-4409-a362-c4a20c2ee41b/5c83ddf7-451d-476f-bfa2-d0da53d7c63b-logo-kitinho.svg.svg?v=1777583253737`,
  resume: `https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/0df46c6b-b0b9-4409-a362-c4a20c2ee41b/0e904e7a-2c42-41a7-bd01-0f3f786c3439-Curriculo-Marcos.pdf?v=1777600935345`
};

// --- Shared Components ---

const Section = ({ id, className, children }) => (
  <section id={id} className={clsx("py-24 md:py-32 px-6", className)}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <div className={clsx("mb-16 md:mb-20 max-w-3xl", align === "center" && "mx-auto text-center")}>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F8FAFC] mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-[#A8B0BD] leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, className }) => (
  <div className={clsx(
    "bg-[#0B0D10]/80 border border-[#20242A] rounded-2xl p-8 backdrop-blur-sm",
    "transition-all duration-300 hover:bg-[#10141A] hover:border-[#2563EB]/40 hover:shadow-2xl hover:shadow-[#2563EB]/5",
    className
  )}>
    {children}
  </div>
);

const Badge = ({ icon, text, subtle = false }) => (
  <div className={clsx(
    "flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm transition-colors",
    subtle 
      ? "bg-transparent border-[#20242A] text-[#A8B0BD]" 
      : "bg-[#10141A] border-[#20242A] text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
  )}>
    {icon && <iconify-icon icon={icon} width="16" height="16" />}
    <span>{text}</span>
  </div>
);

const Button = ({ children, primary, href, onClick, className, target, rel }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm";
  const variants = primary 
    ? "bg-[#F8FAFC] text-[#050607] hover:bg-[#2563EB] hover:text-[#F8FAFC] shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:shadow-[#2563EB]/30"
    : "bg-[#0B0D10] text-[#F8FAFC] border border-[#20242A] hover:bg-[#10141A] hover:border-[#38BDF8]/60 hover:text-[#38BDF8]";
  
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={clsx(baseStyle, variants, className)}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={clsx(baseStyle, variants, className)}>
      {children}
    </button>
  );
};

// --- Page Sections ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
      scrolled ? "py-4 bg-[#050607]/90 backdrop-blur-md border-b border-[#20242A]" : "py-6"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#inicio" className="flex items-center group">
          <div className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity">
            <img src={ASSETS.logo} alt="Marcos Ramos Logo" className="h-full w-auto object-contain" />
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 bg-[#0B0D10] border border-[#20242A] px-6 py-2 rounded-full backdrop-blur-sm">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-[#A8B0BD] hover:text-[#38BDF8] transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <Button 
          primary 
          className="hidden md:inline-flex" 
          href={ASSETS.resume} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Baixar currículo
        </Button>
        
        <button className="md:hidden text-[#F8FAFC]/70 hover:text-[#38BDF8] transition-colors">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" />
        </button>
      </div>
    </header>
  );
};

// Premium rotating text component for Hero subheadline
const RotatingSubheadline = () => {
  const words = ["design", "IA", "lógica de produto"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="hero-subheadline mb-6">
      <span>Usando</span>
      {/* CSS Grid stack hack allows auto-width based on the longest word without clipping */}
      <span className="grid overflow-visible items-center">
        {words.map((word, i) => (
          <span
            key={word}
            className={clsx(
              "col-start-1 row-start-1 rotating-word transition-all duration-700 ease-in-out",
              i === index 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-3 pointer-events-none"
            )}
          >
            {word}
          </span>
        ))}
      </span>
    </p>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  
  const handleMouseMove = (e) => {
    // Avoid updating state too aggressively on mobile if touch is firing
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="inicio" 
      className="hero-section min-h-[95vh] flex items-center pt-32 pb-16 px-6"
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
    >
      <div className="hero-content max-w-6xl mx-auto w-full hero-layout">
        
        {/* Left Column: Premium Copy & Actions */}
        <div className="hero-copy flex flex-col items-start pt-8">
          
          <h1 className="hero-title text-[#F8FAFC] font-bold mb-5">
            <span className="block mb-1">Transformo ideias em</span>
            <span className="gradient-text block">experiências digitais</span>
          </h1>
          
          <RotatingSubheadline />
          
          <p className="hero-description text-base md:text-lg text-[#A8B0BD] leading-relaxed mb-10">
            Designer com trajetória em branding, social media, landing pages, UI/UX e produto. Hoje uso IA como parte do meu processo para estruturar, acelerar e refinar experiências digitais com mais clareza, intenção e consistência.
          </p>

          {/* Authority Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-12 py-6 border-y border-[#20242A]/60 w-full">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-1 font-sans">
                640<span className="text-[#38BDF8]">+</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-[#A8B0BD] uppercase tracking-widest">Clientes satisfeitos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-1 font-sans">
                5<span className="text-[#38BDF8]">+</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-[#A8B0BD] uppercase tracking-widest">Países</span>
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1 border-t border-[#20242A]/60 sm:border-t-0 pt-4 sm:pt-0">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#F8FAFC] mb-1 font-sans">
                Design <span className="text-[#38BDF8]">+</span> IA
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-[#A8B0BD] uppercase tracking-widest">Workflow estratégico</span>
            </div>
          </div>
          
          {/* CTAs de Alta Conversão */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-20">
            <a href="#processo" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-[#F8FAFC] bg-[#0B0D10] overflow-hidden transition-all duration-500 w-full sm:w-auto border border-[#20242A] hover:border-[#38BDF8]/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:-translate-y-0.5 cursor-pointer">
               <span className="relative z-10">Ver meu processo</span>
               <iconify-icon icon="solar:arrow-right-linear" width="18" className="relative z-10 transition-transform group-hover:translate-x-1 text-[#38BDF8]" />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>
            <a href={ASSETS.resume} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-[#A8B0BD] transition-all duration-300 w-full sm:w-auto hover:text-[#F8FAFC] hover:bg-[#10141A]/50 border border-transparent hover:border-[#20242A]">
               Baixar meu currículo
               <iconify-icon icon="solar:download-linear" width="18" className="transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Premium Photo */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 z-20">
          <div className="hero-photo-card relative w-full max-w-[420px] aspect-[4/5] bg-[#0B0D10] rounded-2xl border border-[#20242A] overflow-hidden transition-all duration-700 shadow-2xl">
            <img 
              src={ASSETS.heroPhoto} 
              alt="Marcos Ramos" 
              className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-[1.02] hover:opacity-100"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ValueProposition = () => {
  const values = [
    {
      icon: "solar:pen-new-round-linear",
      title: "Design estratégico",
      text: "Crio interfaces e peças visuais com intenção, hierarquia e clareza, conectando estética com objetivo de negócio."
    },
    {
      icon: "solar:cpu-bolt-linear",
      title: "IA aplicada ao processo",
      text: "Uso inteligência artificial para acelerar pesquisa, estrutura, documentação, geração inicial e exploração de soluções visuais."
    },
    {
      icon: "solar:star-fall-linear",
      title: "Branding consistente",
      text: "Cada decisão visual respeita tom, paleta, tipografia, personalidade e coerência da marca."
    },
    {
      icon: "solar:code-square-linear",
      title: "Produto e experiência",
      text: "Penso em fluxo, navegação, ação do usuário, clareza de informação e impacto final da interface."
    }
  ];

  return (
    <Section id="valor" className="bg-[#050607]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <Card key={i} className="flex flex-col gap-5 bg-[#0B0D10] hover:bg-[#10141A]">
            <div className="w-12 h-12 rounded-xl bg-[#10141A] flex items-center justify-center border border-[#20242A] text-[#38BDF8] shadow-inner">
              <iconify-icon icon={v.icon} width="24" height="24" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#F8FAFC] tracking-tight mb-2">{v.title}</h3>
              <p className="text-[#A8B0BD] leading-relaxed">{v.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Multidrop",
      tags: ["Produto", "UI/UX", "Marketing"],
      role: "Design Lead",
      context: "Design, produto, interfaces e marketing para uma plataforma digital europeia em expansão.",
      delivery: "UI, marketing design, produto, landing pages.",
      focus: "Conectar clareza visual, experiência e consistência de marca.",
      img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80"
    },
    {
      title: "Natura Vitalis",
      tags: ["Branding", "Landing Pages"],
      role: "Visual Designer",
      context: "Identidade visual, landing pages, apresentações e materiais digitais para saúde e longevidade.",
      delivery: "Branding, landing pages, social media.",
      focus: "Construir presença visual consistente, confiável e alinhada.",
      img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
    },
    {
      title: "Projetos com IA",
      tags: ["IA", "Exploração UI", "Documentação"],
      role: "AI Product Designer",
      context: "Experimentos e interfaces criadas a partir de briefing, Markdown, Aura Builder e Figma.",
      delivery: "UI exploration, documentação, fluxos visuais.",
      focus: "Mostrar como IA acelera criação sem substituir acabamento humano.",
      img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80"
    },
    {
      title: "Landing Pages & Interfaces",
      tags: ["Conversão", "Design System"],
      role: "UI Designer",
      context: "Criação de páginas digitais com foco em comunicação, hierarquia, conversão e clareza visual.",
      delivery: "Landing pages, interfaces e layouts responsivos.",
      focus: "Transformar mensagens em experiências digitais fáceis de agir.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
    }
  ];

  return (
    <Section id="projetos" className="bg-[#050607] border-y border-[#20242A]">
      <SectionHeader 
        title="Projetos & Cases" 
        subtitle="Obras como provas de raciocínio, não apenas galerias visuais. Onde intenção encontra acabamento." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative rounded-2xl bg-[#0B0D10] border border-[#20242A] overflow-hidden transition-all duration-500 hover:border-[#2563EB]/40 flex flex-col">
            
            <div className="p-4 md:p-6 pb-0 bg-[#10141A] border-b border-[#20242A] relative">
              <div className="absolute top-4 left-6 flex gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#20242A]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#20242A]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#20242A]"></div>
              </div>
              
              <div className="relative mt-5 rounded-t-xl overflow-hidden border-x border-t border-[#20242A] h-56 md:h-72">
                <div className="absolute inset-0 bg-[#050607]/40 group-hover:bg-transparent z-10 transition-colors duration-500" />
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider bg-[#2563EB]/10 border border-[#2563EB]/20 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">{p.title}</h3>
                <span className="text-sm font-medium text-[#A8B0BD] border border-[#20242A] px-3 py-1 rounded-full">{p.role}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <span className="text-[11px] font-bold text-[#A8B0BD] uppercase tracking-widest">Contexto</span>
                  <p className="text-sm text-[#A8B0BD] mt-1 leading-relaxed">{p.context}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#A8B0BD] uppercase tracking-widest">Entrega</span>
                    <p className="text-sm text-[#A8B0BD] mt-1 leading-relaxed">{p.delivery}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#A8B0BD] uppercase tracking-widest">Foco Principal</span>
                    <p className="text-sm text-[#A8B0BD] mt-1 leading-relaxed">{p.focus}</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full border-[#20242A] group-hover:border-[#38BDF8]/50 group-hover:text-[#38BDF8] justify-between px-6">
                Ver processo <iconify-icon icon="solar:arrow-right-linear" width="18" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Process = () => {
  const steps = [
    { title: "Briefing", desc: "Entendo o problema, o público, o objetivo da peça ou produto e o resultado esperado." },
    { title: "Conceito", desc: "Transformo informações soltas em uma direção clara de comunicação, estética e experiência." },
    { title: "Branding", desc: "Analiso tom, paleta, tipografia, personalidade visual e coerência da marca." },
    { title: "Doc. Markdown", desc: "Organizo decisões, estrutura, copy e requisitos para orientar IA, design e implementação." },
    { title: "Aura Builder", desc: "Uso IA para gerar uma primeira base de interface, estrutura visual e composição." },
    { title: "Figma", desc: "Levo a base para o Figma e começo o refinamento visual com olhar humano." },
    { title: "Refino visual", desc: "Ajusto hierarquia, espaçamento, tipografia, grid, cards, botões e consistência." },
    { title: "Validação", desc: "Reviso clareza, fluxo, objetivo, ação do usuário e qualidade final antes da publicação." },
  ];

  return (
    <Section id="processo">
      <SectionHeader 
        title="Como eu trabalho" 
        subtitle="Meu processo começa antes da interface. Primeiro entendo o objetivo, a intenção e o impacto esperado. Depois estruturo a base da marca, organizo o pensamento em documentação e uso IA como copiloto para acelerar a criação."
      />
      
      <div className="max-w-3xl space-y-8 relative">
        <div className="absolute left-[15px] top-4 bottom-8 w-px bg-gradient-to-b from-[#20242A] via-[#20242A]/50 to-transparent hidden md:block"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="relative md:pl-16 group">
            <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0B0D10] border border-[#20242A] group-hover:border-[#38BDF8] items-center justify-center text-[10px] text-[#A8B0BD] group-hover:text-[#38BDF8] font-mono transition-colors z-10">
              {String(i + 1).padStart(2, '0')}
            </div>
            
            <div className="bg-[#0B0D10] border border-[#20242A] rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:border-[#2563EB]/40 group-hover:bg-[#10141A]">
              <div className="flex items-center gap-4 mb-3">
                <span className="md:hidden text-xs font-mono text-[#A8B0BD] border border-[#20242A] px-2 py-0.5 rounded">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-xl font-medium text-[#F8FAFC] tracking-tight">{step.title}</h4>
              </div>
              <p className="text-[#A8B0BD] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Stack = () => {
  const groups = [
    { 
      title: "Design", 
      tools: [
        { name: "Figma", icon: "simple-icons:figma" }, 
        { name: "Photoshop", icon: "simple-icons:adobephotoshop" }
      ] 
    },
    { 
      title: "Inteligência Artificial", 
      tools: [
        { name: "ChatGPT", icon: "simple-icons:openai" }, 
        { name: "Claude", icon: "simple-icons:anthropic" }, 
        { name: "Gemini", icon: "simple-icons:googlegemini" }, 
        { name: "Krea", icon: "solar:gallery-wide-linear" }
      ] 
    },
    { 
      title: "Workflow & Lógica", 
      tools: [
        { name: "Aura Builder", icon: "solar:magic-stick-3-linear" }, 
        { name: "Markdown", icon: "simple-icons:markdown" }
      ] 
    }
  ];

  return (
    <Section id="stack" className="bg-[#050607] border-t border-[#20242A]">
      <SectionHeader 
        title="Stack & Ferramentas" 
        subtitle="Ferramentas mudam rápido. O diferencial está em saber direcionar, interpretar, refinar e transformar output em experiência real."
        align="center"
      />
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {groups.map(g => (
          <div key={g.title} className="flex flex-col items-center p-8 rounded-2xl bg-[#0B0D10] border border-[#20242A]">
            <h3 className="text-xs font-semibold text-[#A8B0BD] uppercase tracking-widest mb-8">{g.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {g.tools.map(tool => (
                <Badge key={tool.name} icon={tool.icon} text={tool.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-[#A8B0BD] max-w-2xl mx-auto flex justify-center items-center gap-2">
        <iconify-icon icon="solar:info-circle-linear" width="16" className="text-[#38BDF8]" />
        A IA acelera a estrutura, mas o refinamento visual e a coerência continuam sendo humanos.
      </p>
    </Section>
  );
};

const AboutAndDiferencial = () => {
  const points = [
    "Design gráfico e composição visual",
    "Manipulação de imagem e acabamento",
    "Social media e anúncios",
    "Landing pages e conversão",
    "UI/UX e produto",
    "IA aplicada ao workflow criativo",
    "Documentação e refinamento visual"
  ];

  const diffCards = [
    { title: "Antes da tela", desc: "Entendimento de objetivo, público, marca, intenção e impacto." },
    { title: "Durante a criação", desc: "Uso de IA, documentação, referências, estrutura visual e geração inicial." },
    { title: "Depois da geração", desc: "Refinamento no Figma, ajustes de hierarquia, consistência, espaçamento e experiência." }
  ];

  return (
    <div id="sobre">
      <Section className="bg-[#050607] border-y border-[#20242A]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-5 mb-8">
              <img 
                src={ASSETS.avatar} 
                alt="Marcos Ramos" 
                className="w-16 h-16 rounded-full border border-[#20242A] object-cover shadow-xl" 
              />
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">Minha Trajetória</h2>
                <p className="text-[#A8B0BD] font-medium mt-1">Marcos Ramos</p>
              </div>
            </div>
            
            <div className="space-y-6 text-[#A8B0BD] leading-relaxed">
              <p>
                Minha trajetória começou no design gráfico e na manipulação de imagem, passou por social media, anúncios e landing pages, até chegar em UI/UX, produto e inteligência artificial aplicada ao workflow.
              </p>
              <p>
                Ao longo desse caminho, aprendi a olhar para uma peça ou interface além da estética: qual é o objetivo, que percepção ela precisa gerar, qual ação o usuário deve tomar e como a marca se mantém consistente em cada ponto de contato.
              </p>
              <p className="text-[#F8FAFC] font-medium">
                Hoje meu foco é unir visão estética, pensamento estratégico e ferramentas de IA para construir experiências digitais mais claras, rápidas e coerentes — do briefing ao refinamento final no Figma.
              </p>
            </div>
          </div>
          
          <div className="bg-[#0B0D10] border border-[#20242A] rounded-2xl p-8 lg:p-10 hover:border-[#2563EB]/30 transition-colors">
            <h3 className="text-lg font-medium text-[#F8FAFC] mb-8 flex items-center gap-3">
              <iconify-icon icon="solar:history-linear" width="24" className="text-[#38BDF8]" /> 
              Evolução do Foco
            </h3>
            <ul className="space-y-5">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-[#A8B0BD] group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20242A] group-hover:bg-[#38BDF8] transition-colors"></div>
                  <span className="group-hover:text-[#F8FAFC] transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader 
          title="IA acelera o processo. O olhar humano define a qualidade." 
          subtitle="A tecnologia ajuda a estruturar briefing, gerar caminhos e organizar documentação. Mas a decisão final continua dependendo de olhar visual, clareza de marca, senso de produto e refinamento."
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {diffCards.map((c, i) => (
            <Card key={i} className="relative overflow-hidden group border-t-2 border-t-[#20242A] hover:border-t-[#38BDF8]">
              <div className="text-[10px] font-bold text-[#A8B0BD] uppercase tracking-widest mb-4">Etapa 0{i+1}</div>
              <h4 className="text-xl font-medium text-[#F8FAFC] mb-3 tracking-tight">{c.title}</h4>
              <p className="text-sm text-[#A8B0BD] leading-relaxed">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

const CTA = () => (
  <Section id="contato" className="bg-[#0B0D10] border-t border-[#20242A] text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
    <div className="max-w-3xl mx-auto py-12 md:py-20 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-[#10141A] border border-[#20242A] flex items-center justify-center mx-auto mb-8 text-[#38BDF8]">
        <iconify-icon icon="solar:mailbox-linear" width="32" />
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F8FAFC] mb-6 leading-tight">
        Pronto para transformar uma ideia em uma experiência estratégica?
      </h2>
      <p className="text-lg text-[#A8B0BD] mb-10 max-w-2xl mx-auto">
        Aberto para projetos de interfaces, landing pages, branding aplicado, produtos digitais e workflows com IA.
      </p>
      <Button primary className="px-8 py-4 text-base">
        Entrar em contato <iconify-icon icon="solar:chat-line-linear" width="20" />
      </Button>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-10 px-6 border-t border-[#20242A] bg-[#050607]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div className="flex items-center gap-4 text-[#F8FAFC]">
        <div className="h-6 w-auto opacity-90">
          <img src={ASSETS.logo} alt="Marcos Ramos Logo" className="h-full w-auto object-contain" />
        </div>
      </div>
      
      <p className="text-sm text-[#A8B0BD]">
        Marcos Ramos — Design Engineer & AI Product Designer. © {new Date().getFullYear()}
      </p>
      
      <div className="flex items-center gap-5 text-[#A8B0BD]">
        <a href="#" className="hover:text-[#38BDF8] transition-colors" aria-label="LinkedIn"><iconify-icon icon="simple-icons:linkedin" width="20" /></a>
        <a href="#" className="hover:text-[#38BDF8] transition-colors" aria-label="Dribbble"><iconify-icon icon="simple-icons:dribbble" width="20" /></a>
        <a href="#" className="hover:text-[#38BDF8] transition-colors" aria-label="GitHub"><iconify-icon icon="simple-icons:github" width="20" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="w-full relative overflow-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Projects />
        <Process />
        <Stack />
        <AboutAndDiferencial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}