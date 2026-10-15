import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section id="hero" className="min-h-[calc(100vh-70px)] flex flex-col justify-end px-6 md:px-16 py-20 relative overflow-hidden bg-[#0A0A0A]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_50%,rgba(232,21,27,0.12)_0%,transparent_70%),radial-gradient(ellipse_40%_50%_at_20%_80%,rgba(255,75,0,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(232,21,27,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06] bg-[repeating-linear-gradient(45deg,#E8151B_0px,#E8151B_1px,transparent_1px,transparent_24px)]"></div>
        
        <div className="relative z-10 max-w-[900px] mb-12">
          <div className="text-[12px] tracking-[0.18em] uppercase text-[#E8151B] mb-6 font-semibold">FORGEE Training System</div>
          <h1 className="font-barlow-condensed font-black text-[clamp(72px,10vw,160px)] leading-[0.9] uppercase tracking-[-0.03em] mb-8">
            Beyond <br /> <em className="text-[#E8151B] not-italic block">Limits Known</em>
          </h1>
          <p className="text-[18px] text-[#AAAAAA] max-w-[480px] leading-[1.6] mb-12 font-regular">
            Não somos uma academia convencional. Somos uma instalação de forja humana. Operamos na interseção entre agressividade atlética e transformação psicológica.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#plans" className="bg-[#E8151B] text-white px-10 py-[18px] font-barlow-condensed font-bold text-[16px] tracking-[0.1em] uppercase hover:opacity-85 transition-opacity inline-block">
              Iniciar Protocolo
            </a>
            <a href="#about" className="bg-transparent text-white border border-[#2C2C2C] px-10 py-[18px] font-barlow-condensed font-bold text-[16px] tracking-[0.1em] uppercase hover:border-[#AAAAAA] transition-colors inline-block">
              Conheça a Forja
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 md:right-16 text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] flex items-center gap-3 z-10">
          <div className="w-10 h-[1px] bg-[#5A5A5A]"></div>
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-16 py-[120px] bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-full bg-[repeating-linear-gradient(45deg,rgba(232,21,27,0.04)_0px,rgba(232,21,27,0.04)_1px,transparent_1px,transparent_20px)]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#E8151B] mb-5 font-semibold">A Forja</div>
            <h2 className="font-barlow-condensed font-black text-[clamp(48px,6vw,80px)] leading-[0.92] uppercase tracking-[-0.02em]">
              Nascidos na <br/> Resistência
            </h2>
            <div className="w-12 h-[3px] bg-[#E8151B] my-8"></div>
            <div className="space-y-5 text-[17px] text-[#AAAAAA] leading-[1.75]">
              <p>O ambiente dita o resultado. A <strong>FORGEE</strong> foi desenhada para eliminar distrações e focar na única coisa que importa: o trabalho.</p>
              <p>Equipamentos calibrados para performance extrema. Iluminação desenhada para imersão. Sem espelhos para vaidade, apenas ferramentas para evolução real.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="border border-[#2C2C2C] px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] font-medium">Performance</span>
              <span className="border border-[#2C2C2C] px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] font-medium">Força Brutal</span>
              <span className="border border-[#2C2C2C] px-4 py-2 text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] font-medium">Condicionamento</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="font-barlow-condensed font-black text-[clamp(100px,12vw,180px)] leading-[0.85] uppercase text-[#E8151B]/10 tracking-[-0.03em] select-none absolute -top-5 -left-5">
              FORGEE
            </div>
            <div className="bg-[#0A0A0A] p-10 relative z-10">
              <blockquote className="font-barlow-condensed font-bold text-[28px] leading-[1.2] uppercase text-white border-l-[3px] border-[#E8151B] pl-6 mb-4">
                "Não treinamos corpos para a estética. Forjamos máquinas para a guerra diária."
              </blockquote>
              <cite className="text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] font-normal not-italic">
                — FORGEE Manifesto
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="bg-[#0A0A0A] border-y border-[#2C2C2C]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="p-10 md:p-[60px_40px] border-b lg:border-b-0 lg:border-r border-[#2C2C2C] text-center">
            <div className="font-barlow-condensed font-black text-[clamp(60px,7vw,96px)] leading-[0.85] uppercase text-[#E8151B] tracking-[-0.03em]">
              2.5<span className="text-[40px]">K</span>
            </div>
            <div className="text-[13px] tracking-[0.14em] uppercase text-[#5A5A5A] mt-3 font-medium">Metros Quadrados</div>
            <div className="text-[14px] text-[#AAAAAA] mt-2 leading-[1.5]">Puro espaço de performance e forja.</div>
          </div>
          <div className="p-10 md:p-[60px_40px] border-b lg:border-b-0 lg:border-r border-[#2C2C2C] text-center">
            <div className="font-barlow-condensed font-black text-[clamp(60px,7vw,96px)] leading-[0.85] uppercase text-[#E8151B] tracking-[-0.03em]">
              40<span className="text-[40px]">+</span>
            </div>
            <div className="text-[13px] tracking-[0.14em] uppercase text-[#5A5A5A] mt-3 font-medium">Estações de Força</div>
            <div className="text-[14px] text-[#AAAAAA] mt-2 leading-[1.5]">Racks e plataformas oficiais.</div>
          </div>
          <div className="p-10 md:p-[60px_40px] border-r border-[#2C2C2C] text-center">
            <div className="font-barlow-condensed font-black text-[clamp(60px,7vw,96px)] leading-[0.85] uppercase text-[#E8151B] tracking-[-0.03em]">
              12<span className="text-[40px]">T</span>
            </div>
            <div className="text-[13px] tracking-[0.14em] uppercase text-[#5A5A5A] mt-3 font-medium">Toneladas de Anilhas</div>
            <div className="text-[14px] text-[#AAAAAA] mt-2 leading-[1.5]">Pesos olímpicos calibrados.</div>
          </div>
          <div className="p-10 md:p-[60px_40px] text-center">
            <div className="font-barlow-condensed font-black text-[clamp(60px,7vw,96px)] leading-[0.85] uppercase text-[#E8151B] tracking-[-0.03em]">
              24<span className="text-[40px]">/7</span>
            </div>
            <div className="text-[13px] tracking-[0.14em] uppercase text-[#5A5A5A] mt-3 font-medium">Acesso Total</div>
            <div className="text-[14px] text-[#AAAAAA] mt-2 leading-[1.5]">Sua forja nunca fecha.</div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="px-6 md:px-16 py-[120px] bg-[#111111]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#E8151B] mb-5 font-semibold">Arsenal</div>
            <h2 className="font-barlow-condensed font-black text-[clamp(48px,6vw,80px)] leading-[0.92] uppercase tracking-[-0.02em]">
              Ferramentas de <br/> Precisão
            </h2>
          </div>
          <div className="max-w-[460px] text-[16px] text-[#AAAAAA] leading-[1.65]">
            Trabalhamos exclusivamente com marcas de elite mundial. Cada máquina e peso livre foi selecionado rigorosamente para garantir a biomecânica perfeita.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#2C2C2C]">
          <div className="bg-[#111111] p-10 hover:bg-[#1A1A1A] transition-colors">
            <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center mb-6 text-[22px] text-white">
              <iconify-icon icon="solar:dumbbell-large-bold"></iconify-icon>
            </div>
            <h3 className="font-barlow-condensed font-bold text-[22px] uppercase tracking-[0.02em] mb-3">Free <span className="text-[#E8151B]">Weights</span></h3>
            <ul className="space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Halteres até 100kg
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Anilhas calibradas Eleiko
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Barras olímpicas Rogue
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Kettlebells de competição
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] p-10 hover:bg-[#1A1A1A] transition-colors">
            <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center mb-6 text-[22px] text-white">
              <iconify-icon icon="solar:server-square-bold"></iconify-icon>
            </div>
            <h3 className="font-barlow-condensed font-bold text-[22px] uppercase tracking-[0.02em] mb-3">Power <span className="text-[#E8151B]">Racks</span></h3>
            <ul className="space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> 20 Racks Rogue Monster
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Plataformas de LPO
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Monolifts ajustáveis
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Bancos de competição
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] p-10 hover:bg-[#1A1A1A] transition-colors">
            <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center mb-6 text-[22px] text-white">
              <iconify-icon icon="solar:treadmill-bold"></iconify-icon>
            </div>
            <h3 className="font-barlow-condensed font-bold text-[22px] uppercase tracking-[0.02em] mb-3">Machines & <span className="text-[#E8151B]">Cardio</span></h3>
            <ul className="space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Linha Arsenal Strength
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Prime Fitness Selectorized
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 border-b border-[#2C2C2C] flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Concept2 Rowers & SkiErgs
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2 flex items-center gap-3">
                <div className="w-1 h-1 bg-[#E8151B] shrink-0"></div> Assault Bikes
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#2C2C2C] mt-12">
          <div className="bg-[#111111] p-7 text-center">
            <iconify-icon icon="solar:drop-bold" className="text-[28px] mb-3 text-white"></iconify-icon>
            <p className="text-[13px] text-[#AAAAAA] tracking-[0.06em] uppercase font-medium">Ice Baths & Recovery</p>
          </div>
          <div className="bg-[#111111] p-7 text-center">
            <iconify-icon icon="solar:cup-hot-bold" className="text-[28px] mb-3 text-white"></iconify-icon>
            <p className="text-[13px] text-[#AAAAAA] tracking-[0.06em] uppercase font-medium">Black Coffee Bar</p>
          </div>
          <div className="bg-[#111111] p-7 text-center">
            <iconify-icon icon="solar:safe-circle-bold" className="text-[28px] mb-3 text-white"></iconify-icon>
            <p className="text-[13px] text-[#AAAAAA] tracking-[0.06em] uppercase font-medium">Locker Rooms Premium</p>
          </div>
          <div className="bg-[#111111] p-7 text-center">
            <iconify-icon icon="solar:shop-bold" className="text-[28px] mb-3 text-white"></iconify-icon>
            <p className="text-[13px] text-[#AAAAAA] tracking-[0.06em] uppercase font-medium">FORGEE Pro Shop</p>
          </div>
        </div>
      </section>

      {/* PROTOCOL */}
      <section id="protocol" className="px-6 md:px-16 py-[120px] bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute bottom-[-40px] right-[-20px] font-barlow-condensed font-black text-[240px] text-[#E8151B]/5 uppercase tracking-[-0.05em] select-none leading-none">
          PROTOCOL
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#E8151B] mb-5 font-semibold">Sistema</div>
            <h2 className="font-barlow-condensed font-black text-[clamp(48px,6vw,80px)] leading-[0.92] uppercase tracking-[-0.02em]">
              Protocolo <br/> Oficial
            </h2>
            <div className="w-12 h-[3px] bg-[#E8151B] my-8"></div>
            <div className="space-y-5 text-[17px] text-[#AAAAAA] leading-[1.75]">
              <p>Nossos membros têm acesso ao <strong>FORGEE Protocol</strong> — um sistema de periodização contínua focado no aumento de força base e capacidade de trabalho.</p>
            </div>
            
            <div className="mt-12 space-y-[1px]">
              <div className="border border-[#2C2C2C] p-8 relative overflow-hidden hover:border-[#E8151B] transition-colors group">
                <div className="font-barlow-condensed font-black text-[64px] text-[#E8151B]/10 absolute top-4 right-6 leading-none">01</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#E8151B] mb-2 font-semibold">A Fundação</div>
                <h3 className="font-barlow-condensed font-bold text-[24px] uppercase mb-3">Força Bruta Base</h3>
                <p className="text-[14px] text-[#AAAAAA] leading-[1.6]">Construção de força nos levantamentos principais (Agachamento, Supino, Terra). Baixo volume, alta intensidade.</p>
              </div>
              <div className="border border-[#2C2C2C] p-8 relative overflow-hidden hover:border-[#E8151B] transition-colors group">
                <div className="font-barlow-condensed font-black text-[64px] text-[#E8151B]/10 absolute top-4 right-6 leading-none">02</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#E8151B] mb-2 font-semibold">O Volume</div>
                <h3 className="font-barlow-condensed font-bold text-[24px] uppercase mb-3">Hipertrofia Funcional</h3>
                <p className="text-[14px] text-[#AAAAAA] leading-[1.6]">Adição de massa muscular necessária para mover cargas maiores e suportar impactos do treinamento contínuo.</p>
              </div>
              <div className="border border-[#2C2C2C] p-8 relative overflow-hidden hover:border-[#E8151B] transition-colors group">
                <div className="font-barlow-condensed font-black text-[64px] text-[#E8151B]/10 absolute top-4 right-6 leading-none">03</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#E8151B] mb-2 font-semibold">O Motor</div>
                <h3 className="font-barlow-condensed font-bold text-[24px] uppercase mb-3">Condicionamento Extremo</h3>
                <p className="text-[14px] text-[#AAAAAA] leading-[1.6]">Sessões de alta demanda metabólica para garantir que o corpo seja não apenas forte, mas inesgotável.</p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 lg:mt-32">
            <h4 className="font-barlow-condensed font-bold text-[20px] uppercase tracking-[0.05em] text-[#AAAAAA] mb-8">Exemplo: Microciclo Base</h4>
            <div className="bg-[#111111] p-8">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#2C2C2C]">
                <span className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">Visão Geral</span>
                <span className="text-[12px] tracking-[0.12em] uppercase text-[#E8151B] font-semibold">Fase 1 / Semana 3</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-[#2C2C2C]/50">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Segunda</span>
                <span className="text-[14px] text-white font-medium">Squat Pesado + Acessórios Pernas</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Força</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#2C2C2C]/50">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Terça</span>
                <span className="text-[14px] text-white font-medium">Bench Press + Empurrar Volume</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Força/Hiper</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#2C2C2C]/50">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Quarta</span>
                <span className="text-[14px] text-white font-medium">Active Recovery / Engine Work</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Cardio</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#2C2C2C]/50">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Quinta</span>
                <span className="text-[14px] text-white font-medium">Deadlift Pesado + Costas Volume</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Força</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#2C2C2C]/50">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Sexta</span>
                <span className="text-[14px] text-white font-medium">Press Frontal + Braços / Core</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Hiper</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[13px] text-[#5A5A5A] tracking-[0.1em] uppercase w-20">Sáb / Dom</span>
                <span className="text-[13px] text-[#5A5A5A] italic">Recuperação Total do Sistema</span>
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A5A] bg-[#0A0A0A] px-2.5 py-1">Rest</span>
              </div>
            </div>
            <Link to="/protocol/origin" className="inline-flex items-center gap-2 mt-6 text-[#AAAAAA] hover:text-[#E8151B] font-barlow-condensed uppercase font-bold tracking-widest text-[14px] transition-colors">
              Explorar Protocolo Completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </Link>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="px-6 md:px-16 py-[120px] bg-[#111111]">
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#E8151B] mb-5 font-semibold">Acesso</div>
          <h2 className="font-barlow-condensed font-black text-[clamp(48px,6vw,80px)] leading-[0.92] uppercase tracking-[-0.02em]">
            Selecione o <br/> Seu Nível
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#2C2C2C] max-w-[1200px] mx-auto">
          {/* Plan 1 */}
          <div className="bg-[#111111] p-12 relative transition-colors hover:bg-[#1A1A1A]">
            <h3 className="font-barlow-condensed font-black text-[32px] uppercase tracking-[0.02em] mb-2">Standard</h3>
            <span className="text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] mb-8 block">Acesso Base à Forja</span>
            <div className="mb-8">
              <span className="text-[20px] text-[#AAAAAA] align-top mt-2 inline-block">R$</span>
              <span className="font-barlow-condensed font-black text-[72px] leading-[0.9] text-white">289</span>
              <span className="text-[14px] text-[#5A5A5A] ml-1">/mês</span>
            </div>
            <ul className="list-none mb-10 space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Acesso 24/7 à academia
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Uso livre dos equipamentos
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3 opacity-50">
                <iconify-icon icon="solar:close-circle-linear" className="text-[#5A5A5A]"></iconify-icon> Acesso ao App FORGEE
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 flex items-center gap-3 opacity-50">
                <iconify-icon icon="solar:close-circle-linear" className="text-[#5A5A5A]"></iconify-icon> Ice Baths & Recovery Room
              </li>
            </ul>
            <button className="w-full bg-transparent text-white border border-[#2C2C2C] py-4 font-barlow-condensed font-bold text-[15px] tracking-[0.08em] uppercase hover:border-[#AAAAAA] transition-colors">
              Selecionar Plano
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-[#0A0A0A] p-12 relative border-t-4 border-[#E8151B]">
            <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 bg-[#E8151B] text-white text-[11px] tracking-[0.12em] uppercase px-5 py-1.5 font-bold whitespace-nowrap">
              Protocolo Completo
            </div>
            <h3 className="font-barlow-condensed font-black text-[32px] uppercase tracking-[0.02em] mb-2">Premium</h3>
            <span className="text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] mb-8 block">Imersão Total</span>
            <div className="mb-8">
              <span className="text-[20px] text-[#AAAAAA] align-top mt-2 inline-block">R$</span>
              <span className="font-barlow-condensed font-black text-[72px] leading-[0.9] text-white">369</span>
              <span className="text-[14px] text-[#5A5A5A] ml-1">/mês</span>
            </div>
            <ul className="list-none mb-10 space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Acesso 24/7 à academia
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Uso livre dos equipamentos
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Acesso ao App FORGEE
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Protocolos de Treino Guiados
              </li>
            </ul>
            <button className="w-full bg-[#E8151B] text-white py-4 font-barlow-condensed font-bold text-[15px] tracking-[0.08em] uppercase hover:opacity-85 transition-opacity">
              Selecionar Plano
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#111111] p-12 relative transition-colors hover:bg-[#1A1A1A]">
            <h3 className="font-barlow-condensed font-black text-[32px] uppercase tracking-[0.02em] mb-2">Elite</h3>
            <span className="text-[12px] tracking-[0.12em] uppercase text-[#5A5A5A] mb-8 block">Acesso Restrito</span>
            <div className="mb-8">
              <span className="text-[20px] text-[#AAAAAA] align-top mt-2 inline-block">R$</span>
              <span className="font-barlow-condensed font-black text-[72px] leading-[0.9] text-white">499</span>
              <span className="text-[14px] text-[#5A5A5A] ml-1">/mês</span>
            </div>
            <ul className="list-none mb-10 space-y-0">
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Tudo do plano Premium
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Ice Baths & Recovery Room
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 border-b border-[#2C2C2C] flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> 1 Avaliação Biomecânica / Mês
              </li>
              <li className="text-[14px] text-[#AAAAAA] py-2.5 flex items-center gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#E8151B]"></iconify-icon> Camiseta Oficial FORGEE
              </li>
            </ul>
            <button className="w-full bg-transparent text-white border border-[#2C2C2C] py-4 font-barlow-condensed font-bold text-[15px] tracking-[0.08em] uppercase hover:border-[#AAAAAA] transition-colors">
              Selecionar Plano
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-20 bg-[#0A0A0A] border-t border-[#2C2C2C]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-[320px]">
            <div className="font-barlow-condensed font-black text-3xl tracking-tighter text-white mb-6">
              FORGEE<span className="text-[#E8151B]">.</span>
            </div>
            <p className="text-[14px] text-[#AAAAAA] leading-[1.6] mb-8">
              A instalação definitiva para quem busca performance extrema e evolução diária.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#111111] flex items-center justify-center text-white hover:bg-[#E8151B] transition-colors">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 bg-[#111111] flex items-center justify-center text-white hover:bg-[#E8151B] transition-colors">
                <iconify-icon icon="simple-icons:youtube"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="font-barlow-condensed font-bold text-[16px] uppercase tracking-[0.05em] mb-6">Instalação</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors">Avenida Industrial, 1984</a></li>
                <li><a href="#" className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors">São Paulo, SP</a></li>
                <li><a href="#" className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors">Aberta 24/7</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-barlow-condensed font-bold text-[16px] uppercase tracking-[0.05em] mb-6">Contato</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors">contato@forgee.com</a></li>
                <li><a href="#" className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors">(11) 99999-9999</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-[#2C2C2C] text-[12px] text-[#5A5A5A] uppercase tracking-[0.1em]">
          <div>&copy; {new Date().getFullYear()} FORGEE TRAINING. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}