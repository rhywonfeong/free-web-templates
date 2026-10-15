import React, { useState, useEffect } from 'react';
import { 
  Key, BookOpen, Send, Activity, MessageCircle, ChevronDown, Check
} from 'lucide-react';

const WHATSAPP_LINK = "https://chat.whatsapp.com/seu-link-aqui";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

function trackEvent() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
}

function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full border-t border-[var(--border-default)] ${className}`}></div>
  );
}

function Eyebrow({ children, className = "mb-6" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`block font-display text-[11px] font-[700] leading-[1.4] tracking-wider-eyebrow text-[var(--gold-400)] ${className}`}>
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-[112px] pb-[80px] px-5 text-center overflow-hidden bg-[var(--bg-base)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-ambient pointer-events-none"></div>

      <div className="relative z-10 max-w-[576px] mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[var(--gold-400)] opacity-60"></div>
          <Eyebrow className="mb-0 uppercase">Grupo de Estudos Premium</Eyebrow>
        </div>

        <h1 className="font-display text-[34px] md:text-[48px] font-[800] leading-[1.02] tracking-tight-display text-[var(--text-primary)] mb-6 uppercase">
          ABRA A CAIXA.<br/> 
          <span className="text-gold-gradient">ENTENDA OS PEPTÍDEOS.</span>
        </h1>

        <p className="text-[16px] md:text-[18px] leading-[1.625] font-[400] text-[var(--text-primary)] max-w-md mx-auto mb-10">
          Estudos traduzidos, informações confiáveis e as novidades da ciência sobre peptídeos, entregues no seu WhatsApp.
        </p>

        <div className="mb-10 relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center rounded-[24px] shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-[var(--bg-card)] border border-[var(--gold-400)] border-opacity-20 overflow-hidden p-6">
          <img 
            src="/Emblema Dourado de Pandora Vita.png" 
            alt="Pandora Vita" 
            className="w-full h-full object-contain relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
          <a href={WHATSAPP_LINK} onClick={trackEvent} className="btn-primary w-[90vw] sm:w-[80vw] max-w-[400px] py-4 md:py-5 px-8 transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95 flex items-center justify-center gap-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
            <span className="font-[800] text-[15px] md:text-[16px] normal-case tracking-normal">Quero entrar no grupo</span>
          </a>
          <div className="flex items-center gap-3 text-[11px] font-[600] tracking-caption text-[var(--text-muted)] mt-4 uppercase">
            <span>Gratuito</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold-400)] opacity-50"></span>
            <span>Sem spam</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold-400)] opacity-50"></span>
            <span>Saia quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const cards = [
    { icon: BookOpen, god: "Atena", domain: "sabedoria", title: "Estudo da Semana", desc: "Um artigo científico resumido em 2 minutos: o que foi testado, o que se observou e quais são os limites." },
    { icon: Send, god: "Hermes", domain: "mensageiro", title: "Radar de Novidades", desc: "O que mudou em pesquisas, regulação e mercado no Brasil e no mundo." },
    { icon: Activity, god: "Asclépio", domain: "ciência da saúde", title: "Peptídeo em Foco", desc: "Um peptídeo por vez: mecanismo, o que a literatura mostra e o que ainda é incerto." },
    { icon: MessageCircle, god: "Ágora", domain: "o debate", title: "Tira-Dúvidas", desc: "Perguntas dos membros respondidas em conteúdo aberto para todos." }
  ];

  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-surface)]">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-[56px] max-w-[576px] mx-auto">
          <Eyebrow>O CONTEÚDO DA CAIXA</Eyebrow>
          <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)] mb-4">
            O QUE OS DEUSES <br className="md:hidden"/><span className="text-gold-gradient">DEIXARAM PARA VOCÊ</span>
          </h2>
          <p className="text-[16px] leading-[1.625] text-[var(--text-muted)]">Quatro entregas fixas, todas as semanas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {cards.map((card, idx) => (
            <div key={idx} className="card group">
              <div className="card-gradient"></div>
              <div className="icon-container mb-[24px] transition-colors group-hover:border-[var(--gold-400)]">
                <card.icon className="w-5 h-5 text-[var(--gold-400)]" strokeWidth={1.5} />
              </div>
              
              <div className="flex items-center gap-2 mb-4 w-full">
                <span className="font-display text-[11px] font-[700] uppercase tracking-wide-ui text-[var(--text-primary)] group-hover:text-[var(--gold-200)] transition-colors">{card.god}</span>
                <span className="flex-grow border-t border-[var(--border-default)]"></span>
              </div>
              
              <h3 className="font-display text-[16px] font-[800] leading-[1.5] tracking-wide-ui text-[var(--text-primary)] mb-3">{card.title}</h3>
              <p className="text-[14px] leading-[1.625] text-[var(--text-muted)]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Myth() {
  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-base)]">
      <div className="max-w-[960px] mx-auto grid md:grid-cols-12 gap-[56px] items-center">
        <div className="md:col-span-7 max-w-[576px]">
          <Eyebrow>O MITO</Eyebrow>
          <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)] mb-6">
            DESTA VEZ, A CAIXA <span className="text-gold-gradient">GUARDA CONHECIMENTO</span>
          </h2>
          <div className="text-[16px] leading-[1.625] text-[var(--text-primary)] space-y-4">
            <p>
              Na mitologia, Pandora abriu a caixa e espalhou os males pelo mundo. Só a esperança ficou lá dentro. Hoje, o mal é outro: informação rasa, exagerada ou que só quer vender.
            </p>
            <p>
              A Pandora Vita nasceu para reabrir a caixa do jeito certo. Reunimos estudos, traduzimos a ciência e compartilhamos com clareza, para que você entenda antes de decidir.
            </p>
          </div>
          
          <div className="mt-[32px] p-6 border-l border-[var(--gold-400)] bg-[var(--bg-accent)]">
            <p className="font-display text-[16px] font-[800] leading-[1.5] text-[var(--text-primary)] tracking-wide-ui uppercase">
              "No fundo da caixa, sempre restou a esperança. Nós acrescentamos a ciência."
            </p>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          {['CIÊNCIA', 'VITALIDADE', 'LONGEVIDADE'].map((pilar, idx) => (
            <div key={idx} className="bg-[var(--bg-card)] rounded-[8px] p-[24px] border border-[var(--border-default)]">
              <h4 className="font-display text-[11px] font-[700] text-[var(--gold-400)] tracking-wider-eyebrow mb-2 uppercase">{pilar}</h4>
              <p className="text-[14px] leading-[1.625] text-[var(--text-muted)]">
                {idx === 0 && "Conteúdo baseado em estudos clínicos, com referências claras e diretas."}
                {idx === 1 && "Informação voltada à performance física, recuperação e estado de fluxo."}
                {idx === 2 && "Perspectiva de longo prazo, com responsabilidade e entendimento de limites."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { num: "01", title: "A CHAVE", text: "Toque no botão principal desta página." },
    { num: "02", title: "A CAIXA", text: "O WhatsApp abrirá com o convite oficial." },
    { num: "03", title: "O OLIMPO", text: "Entre no grupo e receba as entregas da semana." }
  ];

  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-surface)] text-center">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>A JORNADA</Eyebrow>
        <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)] mb-[56px] max-w-[576px] mx-auto">
          TRÊS PASSOS ATÉ <span className="text-gold-gradient">O CONHECIMENTO</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[22px] left-[15%] right-[15%] h-[1px] bg-[var(--border-accent)]"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center card group">
              <div className="card-gradient"></div>
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[var(--bg-card)] border border-[var(--border-accent)] flex items-center justify-center mb-[24px] shadow-glow-sm">
                <span className="font-display text-[14px] font-[800] text-[var(--gold-400)]">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-[16px] font-[800] leading-[1.5] tracking-wide-ui text-[var(--text-primary)] mb-3">{step.title}</h3>
              <p className="text-[14px] leading-[1.625] text-[var(--text-muted)] max-w-[240px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guardians() {
  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-base)]">
      <div className="max-w-[960px] mx-auto text-center">
        <Eyebrow>OS GUARDIÕES DA CAIXA</Eyebrow>
        <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)] mb-[56px] max-w-[576px] mx-auto">
          QUEM CUIDA DESTE <br className="md:hidden"/><span className="text-gold-gradient">CONHECIMENTO</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="w-[200px] h-[280px] rounded-t-full border border-[var(--border-accent)] p-2 relative">
            <div className="w-full h-full rounded-t-full overflow-hidden relative bg-[var(--bg-card)]">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-702804a94666?q=80&w=600&auto=format&fit=crop" 
                alt="Guardião" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                style={{ filter: 'sepia(1) hue-rotate(30deg) saturate(1.5) brightness(0.7)' }}
              />
              <div className="absolute inset-0 bg-[var(--gold-500)]/10 mix-blend-overlay"></div>
            </div>
          </div>
          
          <div className="max-w-md text-left text-center md:text-left">
            <h3 className="font-display text-[24px] font-[800] leading-[1.25] text-[var(--text-primary)] mb-1 uppercase">[Nome do Guardião]</h3>
            <p className="font-display text-[11px] font-[700] tracking-wider-eyebrow text-[var(--text-muted)] mb-6 uppercase">
              [Credencial Real · Especialidade]
            </p>
            <div className="p-6 border-l border-[var(--gold-400)] bg-[var(--bg-surface)]">
              <p className="font-display text-[14px] font-[800] leading-[1.5] text-[var(--text-primary)] tracking-wide-ui uppercase">
                "Criamos a Pandora Vita porque quase toda a informação sobre peptídeos é rasa ou enviesada. Aqui, a prioridade é o rigor científico."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rules() {
  const rules = [
    { num: "I", title: "CONHECIMENTO ACIMA DE TUDO", desc: "Conteúdo 100% informativo e fundamentado, com fontes citadas." },
    { num: "II", title: "ACESSO DIRETO E IMEDIATO", desc: "Entregas exclusivas pelo WhatsApp, sem formulários ou e-mails." },
    { num: "III", title: "SEM RUÍDO OU DISTRAÇÃO", desc: "Zero spam. Fluxo controlado de mensagens, focado apenas no essencial." },
    { num: "IV", title: "ZELO PELO TEMPLO", desc: "Os guardiões moderam a qualidade, garantindo o alto nível das discussões." },
    { num: "V", title: "CIÊNCIA NÃO É PRESCRIÇÃO", desc: "Material estritamente educativo. Decisões clínicas exigem acompanhamento médico." }
  ];

  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-base)]">
      <div className="max-w-[576px] mx-auto text-center mb-[56px]">
        <Eyebrow>AS LEIS DO TEMPLO</Eyebrow>
        <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)]">
          UM AMBIENTE PARA <br/><span className="text-gold-gradient">QUEM BUSCA EXCELÊNCIA</span>
        </h2>
      </div>

      <div className="max-w-[576px] mx-auto">
        <ul className="space-y-4">
          {rules.map((rule, idx) => (
            <li key={idx} className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[12px] p-6 flex items-start gap-4 hover:border-[var(--border-accent)] transition-colors">
              <div className="min-w-[32px] text-left text-[var(--gold-400)] font-display text-[14px] font-[800] pt-1">
                {rule.num}.
              </div>
              <div>
                <span className="font-display text-[14px] font-[800] tracking-wide-ui text-[var(--text-primary)] block mb-2">{rule.title}</span>
                <span className="text-[14px] leading-[1.625] text-[var(--text-muted)] block">{rule.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O GRUPO É PAGO?", a: "Não. O acesso à comunidade e às publicações semanais é totalmente gratuito." },
    { q: "VOU RECEBER MUITAS MENSAGENS?", a: "O envio é restrito e curado. Não haverá enxurrada de notificações, e você pode silenciar o grupo a qualquer momento." },
    { q: "MEU NÚMERO FICA EXPOSTO?", a: "Utilizamos as Comunidades do WhatsApp, o que garante a privacidade do seu contato perante outros membros." },
    { q: "COMO POSSO SAIR DO GRUPO?", a: "A saída é livre. Basta usar a opção nativa 'Sair do grupo' no seu WhatsApp, sem questionamentos." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-[80px] md:py-[112px] px-5 bg-[var(--bg-surface)]">
      <div className="max-w-[576px] mx-auto">
        <div className="text-center mb-[56px]">
          <Eyebrow>O ORÁCULO</Eyebrow>
          <h2 className="font-display text-[24px] md:text-[30px] font-[800] leading-[1.25] tracking-tight-display text-[var(--text-primary)]">
            PERGUNTE E <span className="text-gold-gradient">SERÁ RESPONDIDO</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[12px] overflow-hidden transition-colors hover:border-[var(--border-accent)]">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between outline-none focus-visible:ring focus-visible:ring-[var(--gold-400)]"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-display text-[14px] font-[800] tracking-wide-ui text-[var(--text-primary)] pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[var(--gold-400)]' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[14px] leading-[1.625] text-[var(--text-muted)]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-[112px] px-5 text-center relative overflow-hidden bg-[var(--bg-base)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-ambient pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[576px] mx-auto">
        <div className="w-[64px] h-[64px] mx-auto bg-[var(--bg-card)] border border-[var(--border-accent)] rounded-[16px] flex items-center justify-center mb-[32px]" style={{ boxShadow: 'var(--shadow-gold)' }}>
          <Key className="w-8 h-8 text-[var(--gold-400)]" strokeWidth={1.5} />
        </div>
        
        <h2 className="font-display text-[34px] md:text-[48px] font-[800] leading-[1.02] tracking-tight-display text-[var(--text-primary)] mb-6">
          A CHAVE ESTÁ <br/><span className="text-gold-gradient">NA SUA MÃO</span>
        </h2>
        
        <p className="text-[16px] leading-[1.625] text-[var(--text-muted)] mb-[40px]">
          O conteúdo desta semana já está aguardando na caixa. Acesse agora, sem custos ou burocracia.
        </p>

        <a href={WHATSAPP_LINK} onClick={trackEvent} className="btn-primary w-full sm:w-auto py-3 md:py-4 px-8 md:px-12 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto rounded-full">
          <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-[800] text-[13px] md:text-[14px] normal-case tracking-normal">Quero entrar no grupo do WhatsApp</span>
        </a>

        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--info)]"></div>
          <p className="text-[11px] font-[600] tracking-caption text-[var(--text-muted)] uppercase">
            Limite de 1.024 membros por grupo
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--bg-card)] pt-[80px] pb-[112px] md:pb-[80px] px-5 border-t border-[var(--border-default)]">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        <div className="text-center md:text-left">
          <span className="block font-display text-[16px] font-[800] tracking-wide-ui text-[var(--text-primary)] uppercase mb-2">
            PANDORA VITA
          </span>
          <p className="font-display text-[11px] font-[700] tracking-wider-eyebrow text-[var(--gold-400)] uppercase">
            GRUPO DE ESTUDOS PREMIUM
          </p>
        </div>

        <div className="max-w-md text-center md:text-left">
          <p className="text-[11px] font-[600] leading-[1.625] text-[var(--text-subtle)] uppercase tracking-caption mb-6">
            Conteúdo estritamente educativo. Não constitui recomendação clínica. Consulte sempre um médico.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-[11px] font-[700] tracking-caption text-[var(--text-muted)] uppercase">
            <a href="#" className="hover:text-[var(--gold-400)] transition-colors">Termos</a>
            <span>·</span>
            <a href="#" className="hover:text-[var(--gold-400)] transition-colors">Privacidade</a>
            <span>·</span>
            <a href="#" className="hover:text-[var(--gold-400)] transition-colors">Contato</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

function MobileFixedBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-base)]/90 backdrop-blur-md border-t border-[var(--border-default)] transform transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <a 
        href={WHATSAPP_LINK}
        onClick={trackEvent}
        className="btn-primary w-full py-3 px-8 transition-transform active:scale-95 flex items-center justify-center gap-2 rounded-full"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="font-[800] text-[13px] normal-case tracking-normal">Quero entrar no grupo do WhatsApp</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="antialiased min-h-screen selection:bg-[var(--bg-accent)] selection:text-[var(--gold-200)]">
      <Hero />
      <SectionDivider />
      <Benefits />
      <SectionDivider />
      <Myth />
      <SectionDivider />
      <Journey />
      <SectionDivider />
      <Guardians />
      <SectionDivider />
      <Rules />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTASection />
      <Footer />
      <MobileFixedBar />
    </div>
  );
}
