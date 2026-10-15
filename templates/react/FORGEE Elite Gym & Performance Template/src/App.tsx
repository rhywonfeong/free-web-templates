import React, { useState } from 'react';

// --- Icons (Inline SVG to avoid dependency issues) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
);


// --- Reusable Components ---

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="text-h3" style={{ fontSize: '18px' }}>{title}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div className="accordion-content">
        <div style={{ paddingTop: '8px', paddingBottom: '16px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ overline, headline, accentWord, headlineStyle, className = '' }: { overline: string, headline: string[], accentWord?: string, headlineStyle?: React.CSSProperties, className?: string }) => (
  <div className={`section-header ${className}`}>
    <span className="text-overline">{overline}</span>
    <h2 className="text-h1" style={headlineStyle}>
      {headline.map((line, i) => (
        <React.Fragment key={i}>
          {accentWord && line.includes(accentWord) ? (
            <>
              {line.split(accentWord)[0]}
              <span className="text-accent">{accentWord}</span>
              {line.split(accentWord)[1]}
            </>
          ) : line}
          {i < headline.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>
  </div>
);


// --- Page Sections ---

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="font-display" style={{ letterSpacing: '0.05em', fontSize: '20px', fontWeight: 700 }}>FORGEE</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center" style={{ display: 'none' }}>
          <a href="#espaco" className="nav-link">Espaço</a>
          <a href="#programas" className="nav-link">Programas</a>
          <a href="#equipe" className="nav-link">Equipe</a>
          <a href="#planos" className="nav-link">Planos</a>
        </nav>
        
        {/* Force flex on md and up via inline styles for simplicity since tailwind isn't fully installed */}
        <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
          .desktop-nav { display: none; }
        `}</style>
        
        <nav className="desktop-nav gap-6 items-center">
          <a href="#espaco" className="nav-link">Espaço</a>
          <a href="#programas" className="nav-link">Programas</a>
          <a href="#equipe" className="nav-link">Equipe</a>
          <a href="#planos" className="nav-link">Planos</a>
          <div className="flex gap-3 ml-4">
            <a href="#planos" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px', borderColor: '#FFF' }}>Sou Membro</a>
            <a href="#contato" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Agendar Visita</a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn btn-secondary" style={{ padding: '8px', border: 'none' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <MenuIcon />
        </button>
      </div>
      
      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: '#111', padding: '24px 16px', borderBottom: '1px solid #2A2A2A', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 40, boxSizing: 'border-box' }}>
          <a href="#espaco" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Espaço</a>
          <a href="#programas" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Programas</a>
          <a href="#equipe" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Equipe</a>
          <a href="#planos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Planos</a>
          <div className="flex flex-col gap-3 mt-4">
            <a href="#planos" className="btn btn-secondary w-full" style={{ width: '100%', borderColor: '#FFF' }}>Sou Membro</a>
            <a href="#contato" className="btn btn-primary w-full" style={{ width: '100%' }}>Agendar Visita</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-light-leak"></div>
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" alt="Athlete training" className="hero-image" />
      
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="text-overline" style={{ marginBottom: '48px', color: '#B0B0B0' }}>
          Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
        </div>
        
        <h1 className="text-display" style={{ marginBottom: '24px', maxWidth: '800px' }}>
          SEM MÁGICA<br />
          SEM ATALHOS<br />
          <span className="text-accent">SEM DESCULPAS</span>
        </h1>
        
        <p className="text-h3" style={{ marginBottom: '16px', color: '#FFF' }}>
          Treinos progressivos e acompanhamento real!
        </p>
        
        <p className="text-body" style={{ maxWidth: '500px', marginBottom: '48px' }}>
          Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4" style={{ marginBottom: '32px' }}>
          <a href="#planos" className="btn btn-primary w-full md:w-auto">Começar Agora</a>
          <a href="#espaco" className="btn btn-secondary w-full md:w-auto">Conhecer o Espaço</a>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "05H–23H", label: "7 Dias por semana" },
    { value: "1.800M²", label: "Área do espaço" },
    { value: "+1.200", label: "Total de alunos" },
    { value: "2018", label: "Desde" },
  ];

  return (
    <div className="stats-bar">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QuemSomos = () => {
  return (
    <section id="espaco" className="section container">
      <div className="grid md:grid-cols-12 gap-0 md:gap-8">
        <div className="md:col-span-5">
          <SectionHeader 
            className="tight-mobile"
            overline="Quem somos" 
            headline={["FORJADOS", "PELA", "DISCIPLINA."]} 
            accentWord="DISCIPLINA." 
          />
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
          <p className="text-body" style={{ marginBottom: '24px' }}>
            A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
          </p>
          <p className="text-body">
            Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.
          </p>
          
          <div className="pull-quote">
            "In silence, the transformation begins."
          </div>
          
          <p className="text-body">
            Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: 'var(--space-8)' }}>
        <div>
          <h3 className="text-h3" style={{ marginBottom: '16px', borderBottom: '1px solid #E8400A', paddingBottom: '8px', display: 'inline-block' }}>01 — Intensidade</h3>
          <p className="text-body">O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.</p>
        </div>
        <div>
          <h3 className="text-h3" style={{ marginBottom: '16px', borderBottom: '1px solid #E8400A', paddingBottom: '8px', display: 'inline-block' }}>02 — Precisão</h3>
          <p className="text-body">Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.</p>
        </div>
        <div>
          <h3 className="text-h3" style={{ marginBottom: '16px', borderBottom: '1px solid #E8400A', paddingBottom: '8px', display: 'inline-block' }}>03 — Controle</h3>
          <p className="text-body">Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 'var(--space-7)', borderTop: '1px solid #2A2A2A', paddingTop: 'var(--space-6)' }}>
         <div>
            <div className="text-h2 text-accent">+1.200</div>
            <div className="text-overline">Alunos ativos</div>
         </div>
         <div>
            <div className="text-h2 text-accent">94%</div>
            <div className="text-overline">Retenção 6 meses</div>
         </div>
         <div>
            <div className="text-h2 text-accent">8 anos</div>
            <div className="text-overline">Em operação</div>
         </div>
         <div>
            <div className="text-h2 text-accent">1.8K M²</div>
            <div className="text-overline">Área dedicada</div>
         </div>
      </div>

      {/* Depoimentos */}
      <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: 'var(--space-8)' }}>
        <div className="card">
          <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '24px' }}>
            "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."
          </p>
          <div className="text-caption" style={{ color: '#FFF', fontWeight: 600 }}>Rafael M.</div>
          <div className="text-caption">Engenheiro · Aluno há 3 anos</div>
        </div>
        <div className="card">
          <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '24px' }}>
            "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha."
          </p>
          <div className="text-caption" style={{ color: '#FFF', fontWeight: 600 }}>Juliana T.</div>
          <div className="text-caption">Professora · Aluna há 2 anos</div>
        </div>
        <div className="card">
          <p className="text-body" style={{ fontStyle: 'italic', marginBottom: '24px' }}>
            "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado."
          </p>
          <div className="text-caption" style={{ color: '#FFF', fontWeight: 600 }}>Lucas O.</div>
          <div className="text-caption">Empresário · Aluno há 4 anos</div>
        </div>
      </div>
    </section>
  );
};

const Estrutura = () => {
  return (
    <section className="section" style={{ backgroundColor: '#181818' }}>
      <div className="container grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <SectionHeader 
            overline="Estrutura" 
            headline={["EQUIPAMENTO", "QUE NÃO TE", "LIMITA."]} 
            accentWord="LIMITA."
          />
          <p className="text-body">
            Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
          </p>
        </div>
        <div className="md:col-span-7">
          <div style={{ borderTop: '1px solid #2A2A2A' }}>
            <AccordionItem title="01 · CARDIO & CONDITIONING" defaultOpen={true}>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }} className="text-body flex flex-col gap-2">
                <li><span style={{color: '#FFF'}}>Assault Bike Concept2</span> — <strong className="text-accent">8 UNIDADES</strong></li>
                <li><span style={{color: '#FFF'}}>Remo Concept2 Model D</span> — <strong className="text-accent">6 UNIDADES</strong></li>
                <li><span style={{color: '#FFF'}}>SkiErg Concept2</span> — <strong className="text-accent">4 UNIDADES</strong></li>
                <li>Esteiras NordicTrack com inclinação negativa</li>
                <li>Cordas de batalha 15m e 20m</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="02 · FORÇA LIVRE">
              <p className="text-body">Plataformas de LPO Eleiko, Racks Rogue Fitness, anilhas calibradas e halteres até 60kg.</p>
            </AccordionItem>
            <AccordionItem title="03 · MÁQUINAS">
              <p className="text-body">Linha completa Hammer Strength e Arsenal Strength. Biomecânica de ponta para isolamento e sobrecarga segura.</p>
            </AccordionItem>
            <AccordionItem title="04 · FUNCIONAL & MOBILITY">
              <p className="text-body">Área de 300m² com grama sintética, trenós, kettlebells de competição e acessórios para liberação miofascial.</p>
            </AccordionItem>
            <AccordionItem title="05 · INFRAESTRUTURA">
              <p className="text-body">Vestiários premium com duchas de alta pressão, armários digitais, toalhas cortesia e climatização industrial focada em performance.</p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programas = () => {
  return (
    <section id="programas" className="section container">
      <SectionHeader 
        overline="O que oferecemos" 
        headline={["UM PROTOCOLO", "PARA CADA", "OBJETIVO."]} 
      />
      
      <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: 'var(--space-6)' }}>
        <div className="card" style={{ borderLeft: '4px solid #E8400A' }}>
          <h3 className="text-h2" style={{ marginBottom: '16px' }}>02 — FORGEE CONDITIONING</h3>
          <p className="text-body" style={{ marginBottom: '24px' }}>
            Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.
          </p>
          <div style={{ backgroundColor: '#111', padding: '16px', borderRadius: '4px' }}>
            <div className="flex justify-between" style={{ borderBottom: '1px solid #2A2A2A', paddingBottom: '8px', marginBottom: '8px' }}>
              <span className="text-overline">Para quem é</span>
              <span className="text-caption" style={{color: '#FFF'}}>Condicionamento, perda de gordura.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-overline">Turmas</span>
              <span className="text-caption" style={{color: '#FFF'}}>06H · 07H · 12H · 18H · 19H30</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card">
            <h3 className="text-h3" style={{ marginBottom: '8px' }}>01 — FORGEE STRENGTH</h3>
            <p className="text-body text-caption">
              Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.
            </p>
          </div>
          <div className="card">
            <h3 className="text-h3" style={{ marginBottom: '8px' }}>03 — FORGEE MOBILITY</h3>
            <p className="text-body text-caption">
              Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.
            </p>
          </div>
          <div className="card">
            <h3 className="text-h3" style={{ marginBottom: '8px' }}>04 — PERSONAL TRAINING</h3>
            <p className="text-body text-caption">
              Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Planos = () => {
  return (
    <section id="planos" className="section container">
      <div className="text-center md:text-left md:flex justify-between items-end mb-12">
        <SectionHeader 
          overline="Investimento" 
          headline={["SEM MATRÍCULA.", "SEM FIDELIDADE.", "SEM ENROLAÇÃO."]} 
          accentWord="SEM ENROLAÇÃO."
        />
        <p className="text-body" style={{ maxWidth: '300px', paddingBottom: '12px' }}>
          Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LIVRE */}
        <div className="card pricing-card">
          <div className="text-h3" style={{ color: '#B0B0B0' }}>LIVRE</div>
          <div className="text-display" style={{ fontSize: 'clamp(36px, 8vw, 48px)', margin: '16px 0' }}>R$149<span style={{ fontSize: '16px', color: '#6B6B6B', fontFamily: 'Inter' }}>/mês</span></div>
          <ul className="pricing-list">
            <li><CheckIcon /> Acesso ilimitado 05H–23H</li>
            <li><CheckIcon /> Avaliação física de entrada</li>
            <li><CheckIcon /> Planilha de treino inicial</li>
            <li><CheckIcon /> App FORGEE</li>
          </ul>
          <a href="#contato" className="btn btn-secondary" style={{ width: '100%' }}>Quero esse plano</a>
        </div>

        {/* PLUS */}
        <div className="card pricing-card featured" style={{ zIndex: 10, backgroundColor: '#1A1A1A' }}>
          <div className="pricing-featured-tag">MAIS ESCOLHIDO</div>
          <div className="text-h3 text-accent">PLUS</div>
          <div className="text-display" style={{ fontSize: 'clamp(36px, 8vw, 48px)', margin: '16px 0' }}>R$229<span style={{ fontSize: '16px', color: '#6B6B6B', fontFamily: 'Inter' }}>/mês</span></div>
          <ul className="pricing-list">
            <li><CheckIcon /> Acesso ilimitado 05H–23H</li>
            <li><CheckIcon /> Avaliação física de entrada</li>
            <li><CheckIcon /> Planilha de treino inicial</li>
            <li><CheckIcon /> App FORGEE</li>
            <li><CheckIcon /> <strong style={{color: '#FFF'}}>2 sessões de Personal/mês</strong></li>
            <li><CheckIcon /> <strong style={{color: '#FFF'}}>1 aula Conditioning/semana</strong></li>
            <li><CheckIcon /> <strong style={{color: '#FFF'}}>Revisão de planilha 4 sem.</strong></li>
            <li><CheckIcon /> Acesso ao Mobility</li>
          </ul>
          <a href="#contato" className="btn btn-primary" style={{ width: '100%' }}>Quero esse plano</a>
        </div>

        {/* ELITE */}
        <div className="card pricing-card">
          <div className="text-h3" style={{ color: '#B0B0B0' }}>ELITE</div>
          <div className="text-display" style={{ fontSize: 'clamp(36px, 8vw, 48px)', margin: '16px 0' }}>R$389<span style={{ fontSize: '16px', color: '#6B6B6B', fontFamily: 'Inter' }}>/mês</span></div>
          <ul className="pricing-list">
            <li><CheckIcon /> Acesso ilimitado 05H–23H</li>
            <li><CheckIcon /> Avaliação física de entrada</li>
            <li><CheckIcon /> Planilha de treino inicial</li>
            <li><CheckIcon /> App FORGEE</li>
            <li><CheckIcon /> <strong style={{color: '#FFF'}}>4 sessões de Personal/mês</strong></li>
            <li><CheckIcon /> <strong style={{color: '#FFF'}}>Acesso ilimitado a classes</strong></li>
            <li><CheckIcon /> Bioimpedância mensal</li>
            <li><CheckIcon /> WhatsApp com coach dedicado</li>
          </ul>
          <a href="#contato" className="btn btn-secondary" style={{ width: '100%' }}>Quero esse plano</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6" style={{ borderTop: '1px solid #2A2A2A' }}>
        <p className="text-caption text-center md:text-left">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
        </p>
        <div className="mt-4 md:mt-0 flex items-center gap-2 md:gap-4">
           <span className="text-overline daily-label">Opção Avulsa:</span>
           <span className="text-body daily-value"><strong className="text-accent">DIÁRIA: R$ 39</strong></span>
           <a href="#contato" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '12px', whiteSpace: 'nowrap' }}>Agendar</a>
        </div>
      </div>
    </section>
  );
};

const Equipe = () => {
  return (
    <section id="equipe" className="section container">
      <SectionHeader 
        overline="Quem te acompanha" 
        headline={["COACHES QUE", "TREINAM."]} 
      />
      <p className="text-body mb-8" style={{ maxWidth: '400px' }}>
        Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { 
            initials: "RF", 
            name: "RODRIGO FARIAS", 
            role: "Head Coach", 
            cref: "CREF 045821-G/SP",
            img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600&h=800"
          },
          { 
            initials: "AL", 
            name: "ANA LUÍSA", 
            role: "Conditioning", 
            cref: "CREF 078342-G/SP",
            img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600&h=800"
          },
          { 
            initials: "BT", 
            name: "BRUNO T.", 
            role: "Mobility & Rehab", 
            cref: "CREF 091205-G/SP",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=800"
          },
          { 
            initials: "CD", 
            name: "CAMILA D.", 
            role: "Personal Trainer", 
            cref: "CREF 063417-G/SP",
            img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600&h=800"
          },
        ].map((coach, i) => (
          <div key={i} className="card coach-card flex flex-col justify-end p-0" style={{ minHeight: '380px', position: 'relative', overflow: 'hidden', padding: 0, backgroundColor: '#181818' }}>
            <img 
              src={coach.img} 
              alt={coach.name} 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                zIndex: 0, 
                filter: 'grayscale(100%) contrast(1.1) brightness(0.8)',
                transition: 'transform 0.5s ease'
              }} 
              className="coach-img"
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(18,18,18,1) 0%, rgba(18,18,18,0.7) 40%, rgba(18,18,18,0) 100%)', zIndex: 1 }}></div>
            
            <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem' }}>
              <div className="text-accent text-overline mb-1" style={{ letterSpacing: '0.05em' }}>{coach.role}</div>
              <div className="text-h3 mb-1">{coach.name}</div>
              <div className="text-caption" style={{ color: '#A0A0A0' }}>{coach.cref}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="section" style={{ backgroundColor: '#181818' }}>
      <div className="container grid md:grid-cols-12 gap-0 md:gap-8">
        <div className="md:col-span-4">
          <SectionHeader 
            className="tight-mobile"
            overline="Dúvidas" 
            headline={["PERGUNTAS", "DIRETAS."]} 
            headlineStyle={{ fontSize: 'clamp(28px, 6vw, 64px)' }}
          />
        </div>
        <div className="md:col-span-8">
          <div style={{ borderTop: '1px solid #2A2A2A' }}>
            <AccordionItem title="Preciso ter experiência?">
              <p className="text-body">Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.</p>
            </AccordionItem>
            <AccordionItem title="Posso treinar sozinho?">
              <p className="text-body">Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.</p>
            </AccordionItem>
            <AccordionItem title="Como funciona o cancelamento?">
              <p className="text-body">Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.</p>
            </AccordionItem>
            <AccordionItem title="Posso visitar antes de assinar?">
              <p className="text-body">Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.</p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const Localizacao = () => {
  return (
    <section id="contato" className="section container">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SectionHeader 
            overline="Onde estamos" 
            headline={["NO CORAÇÃO", "DE INDAIATUBA."]} 
            accentWord="INDAIATUBA."
          />
          <div className="text-body" style={{ marginBottom: '24px' }}>
            Rua das Esmeraldas, 742<br />
            Jardim Morada do Sol<br />
            Indaiatuba, SP<br />
            CEP 13.334-210
          </div>
          <p className="text-caption mb-8">
            200m do Carrefour · Próximo à saída SP-075
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
             <button className="btn btn-primary w-full md:w-auto" onClick={() => alert('Abrindo mapa...')}>Como Chegar</button>
             <button className="btn btn-secondary w-full md:w-auto">Falar no WhatsApp</button>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#1A1A1A' }}>
          <h3 className="text-h3 mb-6" style={{ borderBottom: '1px solid #2A2A2A', paddingBottom: '16px' }}>Horários & Contato</h3>
          
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex justify-between text-body">
              <span style={{ color: '#B0B0B0' }}>Segunda a Sexta</span>
              <span>05H00 – 23H00</span>
            </div>
            <div className="flex justify-between text-body">
              <span style={{ color: '#B0B0B0' }}>Sábado</span>
              <span>07H00 – 20H00</span>
            </div>
            <div className="flex justify-between text-body">
              <span style={{ color: '#B0B0B0' }}>Domingo e Feriados</span>
              <span>08H00 – 14H00</span>
            </div>
          </div>

          <div className="pt-6" style={{ borderTop: '1px solid #2A2A2A' }}>
             <div className="text-body mb-2"><strong style={{ color: '#6B6B6B' }}>WhatsApp:</strong> (19) 98234-5678</div>
             <div className="text-body mb-2"><strong style={{ color: '#6B6B6B' }}>E-mail:</strong> contato@forgee.academy</div>
             <div className="text-body"><strong style={{ color: '#6B6B6B' }}>Instagram:</strong> @forgee.academy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section>
      <div className="ticker-wrap">
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker 20s linear infinite' }}>
          <span style={{ paddingRight: '2rem' }}>A G E N D E  U M A  V I S I T A · G R A T U I T A · S E M  C O M P R O M I S S O · T R A G A  T Ê N I S . </span>
          <span style={{ paddingRight: '2rem' }}>A G E N D E  U M A  V I S I T A · G R A T U I T A · S E M  C O M P R O M I S S O · T R A G A  T Ê N I S . </span>
          <span style={{ paddingRight: '2rem' }}>A G E N D E  U M A  V I S I T A · G R A T U I T A · S E M  C O M P R O M I S S O · T R A G A  T Ê N I S . </span>
        </div>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      <div className="section container text-center">
        <h2 className="text-display" style={{ marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          A DECISÃO<br />
          JÁ FOI TOMADA.<br />
          <span className="text-accent">AGORA É A AÇÃO.</span>
        </h2>
        <a href="#contato" className="btn btn-primary" style={{ fontSize: 'clamp(16px, 4vw, 20px)', padding: 'var(--space-4) var(--space-6)', marginBottom: '32px' }}>
          Agendar Visita Gratuita
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #1E1E1E', padding: 'var(--space-7) 0 var(--space-5) 0' }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
             <div className="text-h2" style={{ letterSpacing: '0.05em', marginBottom: '8px' }}>FORGEE</div>
             <div className="text-overline">BEYOND LIMITS KNOWN™</div>
          </div>
          <div>
            <h4 className="text-h3" style={{ marginBottom: '16px', fontSize: '16px', color: '#6B6B6B' }}>ACADEMIA</h4>
            <a href="#espaco" className="footer-link">Espaço</a>
            <a href="#programas" className="footer-link">Programas</a>
            <a href="#equipe" className="footer-link">Equipe</a>
            <a href="#planos" className="footer-link">Planos</a>
          </div>
          <div>
            <h4 className="text-h3" style={{ marginBottom: '16px', fontSize: '16px', color: '#6B6B6B' }}>LEGAL & REDES</h4>
            <a href="#" className="footer-link">Política de Privacidade</a>
            <a href="#" className="footer-link">Termos de Uso</a>
            <a href="#" className="footer-link mt-4" style={{ color: '#E8400A' }}>Instagram</a>
          </div>
        </div>

        <div className="text-caption text-center md:text-left" style={{ borderTop: '1px solid #1E1E1E', paddingTop: '32px' }}>
          FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN SYSTEM © 2026
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Stats />
      <QuemSomos />
      <Estrutura />
      <Programas />
      <Planos />
      <Equipe />
      <FAQ />
      <Localizacao />
      <CTAFinal />
      <Footer />
    </div>
  );
}
