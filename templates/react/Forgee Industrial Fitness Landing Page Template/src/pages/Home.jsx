import React from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export default function Home() {
  const tickerItems = [
    "RETENÇÃO DE ALUNOS", "CHECK-IN EM 2 SEGUNDOS", "ZERO PLANILHAS", 
    "CONTROLE FINANCEIRO", "MODO RECEPÇÃO", "DASHBOARD EM TEMPO REAL", 
    "FORJE SUA ACADEMIA"
  ];
  
  // Duplicating for infinite seamless scroll
  const tickerText = [...tickerItems, ...tickerItems].map((text, i) => (
    <span key={i} className="flex items-center gap-6">
      {text} <span className="text-[#090909]/40">✦</span>
    </span>
  ));

  return (
    <main className="w-full overflow-hidden">
      
      {/* 01. HERO SECTION */}
      <section className="relative pt-32 pb-32 md:pb-48 px-5 md:px-10 bg-[#090909] min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <div className="flex flex-col gap-8 animate-fade-in-up">
            <div>
              <Badge variant="default" className="mb-6 border-[#2A2A2A] text-[#999999]">
                Gestão de academia. Simples assim.
              </Badge>
              <h1 className="font-display font-extrabold text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.03em] uppercase text-white m-0">
                Forje resultados.<br/>
                <span className="text-[#CCFF33]">Não planilhas.</span>
              </h1>
            </div>
            
            <p className="font-body text-[#D9D9D9] text-[16px] md:text-[18px] max-w-[480px] leading-relaxed">
              O Forgee cuida da operação para você focar no que importa: seus alunos. Controle de mensalidades, check-in e retenção em um só lugar.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button variant="primary" icon="lucide:arrow-right" size="lg">
                Começar agora
              </Button>
              <Button variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-[#2A2A2A] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent z-10 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" 
              alt="Atleta treinando" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>
      </section>

      {/* TICKER BAR */}
      <div className="w-full bg-[#CCFF33] py-4 border-y border-[#AAEE00] overflow-hidden flex whitespace-nowrap">
        <div className="animate-ticker flex space-x-6 font-display font-bold text-[20px] uppercase tracking-wider text-[#090909]">
           {tickerText}
        </div>
      </div>

      {/* 02. PROBLEM SECTION */}
      <section className="bg-[#090909] py-32 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[600px] mb-16">
            <Badge variant="default" className="mb-6">Por que academias perdem alunos</Badge>
            <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[0.9] tracking-tight text-white uppercase mb-6">
              A academia cheia não garante o mês seguinte.
            </h2>
            <p className="font-body text-[#999999] text-[16px] leading-relaxed">
              Aluno que some silenciosamente. Mensalidade que vence e ninguém avisa. Recepção que não sabe se o acesso está ativo. Você gerencia tudo isso na cabeça — e ainda treina gente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "lucide:alert-triangle",
                title: "Inadimplência invisível",
                desc: "Você só descobre que o aluno não pagou quando ele já sumiu."
              },
              {
                icon: "lucide:user-x",
                title: "Evasão silenciosa",
                desc: "Sem frequência monitorada, não há como agir antes que seja tarde."
              },
              {
                icon: "lucide:clock",
                title: "Recepção lenta",
                desc: "Check-in manual gera fila, erro e má impressão logo na entrada."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#CCFF33] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#555555] group-hover:text-[#CCFF33] transition-colors">
                  <iconify-icon icon={item.icon} width="24"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[20px] text-white mb-3">{item.title}</h3>
                  <p className="font-body text-[#999999] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. SOLUTION / PRODUCT SECTION */}
      <section id="features" className="bg-[#F2F2F2] py-32 px-5 md:px-10 rounded-t-[40px] mt-[-40px] relative z-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
            <div className="max-w-[600px]">
              <Badge variant="default" className="mb-6 border-[#999999] text-[#555555]">O sistema</Badge>
              <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[0.9] tracking-tight text-[#090909] uppercase mb-6">
                Operação leve.<br/>Controle total.
              </h2>
              <p className="font-body text-[#555555] text-[16px] leading-relaxed">
                O Forgee foi construído para academias que querem crescer sem afundar em processos. Cada funcionalidade resolve um problema real — sem feature desnecessária.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Dashboard",
                title: "Tudo que importa em uma tela",
                desc: "Métricas de retenção, inadimplência e frequência atualizadas em tempo real. Você sabe o que está acontecendo antes de precisar perguntar."
              },
              {
                label: "Gestão de Alunos",
                title: "Cada membro. Cada detalhe.",
                desc: "Cadastro completo, histórico de frequência e status de plano em um perfil só. Filtros e busca para encontrar qualquer aluno em segundos."
              },
              {
                label: "Mensalidades",
                title: "Sem deixar dinheiro na mesa",
                desc: "Controle de pagamentos, listagem de inadimplentes e histórico financeiro por aluno. Cobranças geradas antes do vencimento."
              },
              {
                label: "Modo Recepção",
                title: "Check-in em 2 segundos",
                desc: "QR Code por aluno. Acesso validado na hora. Interface otimizada para tablet na recepção — sem treinamento, sem margem para erro."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-[#E0E0E0] rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                <Badge variant="default" className="mb-6 border-[#090909]/20 text-[#090909]">{feature.label}</Badge>
                <h3 className="font-display font-bold text-[32px] text-[#090909] uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="font-body text-[#555555] text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. METRICS SECTION */}
      <section className="bg-[#CCFF33] py-24 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <Badge variant="default" className="mb-6 border-[#090909] text-[#090909]">Números que falam</Badge>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[0.9] tracking-tight text-[#090909] uppercase">
            Resultado que se mede.
          </h2>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "+40%", label: "de retenção média nos primeiros 90 dias" },
            { num: "2s", label: "para fazer check-in de qualquer aluno" },
            { num: "Zero", label: "planilhas. Zero papel. Zero dor de cabeça." },
            { num: "1 painel", label: "para ver toda a operação da academia" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#090909] rounded-2xl p-8 text-center flex flex-col justify-center min-h-[240px] transform hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <div className="font-display font-black text-[64px] md:text-[80px] leading-none text-[#CCFF33] mb-4">{stat.num}</div>
              <div className="font-body text-[14px] text-[#999999] leading-relaxed max-w-[200px] mx-auto">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. HOW IT WORKS */}
      <section className="bg-[#090909] py-32 px-5 md:px-10 border-b border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <Badge variant="default" className="mb-6">Processo</Badge>
            <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[0.9] tracking-tight text-white uppercase mb-6">
              Três passos para largar as planilhas.
            </h2>
            <p className="font-body text-[#999999] text-[16px] leading-relaxed">
              Sem migração complexa, sem treinamento longo. Você começa a usar no mesmo dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-[#2A2A2A] z-0"></div>

            {[
              {
                step: "01",
                title: "Cadastre sua academia",
                desc: "Crie sua conta, configure seus planos e importe (ou cadastre) seus alunos. Leva menos de 15 minutos."
              },
              {
                step: "02",
                title: "Ative a recepção",
                desc: "Abra o Modo Recepção no tablet da entrada. Cada aluno tem seu QR Code. O sistema valida o acesso automaticamente."
              },
              {
                step: "03",
                title: "Acompanhe e retenha",
                desc: "O dashboard mostra quem está sumindo antes que ele cancele. Você age com antecedência — e mantém o aluno."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#CCFF33] text-[#090909] font-mono font-bold flex items-center justify-center text-[18px] mb-8 shadow-[0_0_0_8px_#090909]">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-[28px] text-white uppercase mb-4 group-hover:text-[#CCFF33] transition-colors">{item.title}</h3>
                <p className="font-body text-[#999999] text-[15px] leading-relaxed max-w-[280px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. DETAILED FEATURES */}
      <section className="bg-[#111111] py-32 px-5 md:px-10 border-b border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              <Badge variant="default" className="mb-6">Funcionalidades</Badge>
              <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[0.9] tracking-tight text-white uppercase mb-4">
                Feito para quem opera academia.
              </h2>
              <p className="font-body text-[#999999] text-[16px]">
                Cada tela foi desenhada com um objetivo: menos cliques, mais controle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
            {[
              "Cadastro completo de membros com foto e documentos",
              "Histórico de frequência por aluno",
              "Alertas automáticos de vencimento de plano",
              "Listagem de inadimplentes com filtro por período",
              "Geração de cobranças com histórico",
              "Check-in por QR Code com validação de acesso",
              "Dashboard com gráficos de retenção e engajamento",
              "Relatórios financeiros exportáveis",
              "Busca avançada com filtros combinados",
              "Suporte a dark mode e light mode",
              "Interface responsiva — funciona em tablet e desktop",
              "Modo Recepção dedicado para a entrada da academia"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#1A1A1A] transition-colors">
                <span className="text-[#CCFF33] mt-1 text-[12px]">✦</span>
                <span className="font-body text-[15px] text-[#D9D9D9]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. PRICING SECTION */}
      <section id="pricing" className="bg-[#090909] py-32 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <Badge variant="default" className="mb-6">Planos</Badge>
            <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[0.9] tracking-tight text-white uppercase mb-6">
              Simples de entender.<br/>Justo de pagar.
            </h2>
            <p className="font-body text-[#999999] text-[16px] leading-relaxed">
              Sem taxa de setup. Sem contrato anual obrigatório. Cancele quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Starter */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10 flex flex-col h-full">
              <Badge variant="default" className="self-start mb-8 text-[#999999]">Ideal para começar</Badge>
              <div className="mb-6">
                <h3 className="font-display font-bold text-[32px] text-white uppercase">Starter</h3>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-body font-bold text-[40px] text-white leading-none">R$ 97</span>
                  <span className="font-body text-[16px] text-[#555555] mb-1">/mês</span>
                </div>
                <p className="font-body text-[14px] text-[#999999] mt-4">Academias de até 100 alunos</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {["Cadastro ilimitado de alunos (até 100)", "Controle de mensalidades", "Modo Recepção com QR Code", "Dashboard básico", "Suporte via chat"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-[14px] text-[#D9D9D9]">
                      <iconify-icon icon="lucide:check" class="text-[#CCFF33]"></iconify-icon> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="secondary" className="w-full">Começar grátis por 14 dias</Button>
            </div>

            {/* Pro */}
            <div className="bg-[#CCFF33] border border-[#CCFF33] rounded-2xl p-8 lg:p-10 flex flex-col h-full lg:scale-105 shadow-[0_20px_60px_rgba(204,255,51,0.15)] relative z-10">
              <Badge variant="default" className="self-start mb-8 border-[#090909] text-[#090909]">Mais escolhido</Badge>
              <div className="mb-6">
                <h3 className="font-display font-bold text-[32px] text-[#090909] uppercase">Pro</h3>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-body font-bold text-[48px] text-[#090909] leading-none">R$ 197</span>
                  <span className="font-body text-[16px] text-[#555555] mb-1">/mês</span>
                </div>
                <p className="font-body text-[14px] text-[#555555] mt-4 font-medium">Academias de até 500 alunos</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {["Tudo do Starter", "Alunos ilimitados (até 500)", "Relatórios financeiros avançados", "Alertas automáticos de inadimplência", "Histórico completo de frequência", "Suporte prioritário"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-[14px] text-[#090909] font-medium">
                      <iconify-icon icon="lucide:check"></iconify-icon> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="primary" className="w-full bg-[#090909] text-white hover:bg-[#1A1A1A]">Começar grátis por 14 dias</Button>
            </div>

            {/* Elite */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10 flex flex-col h-full">
              <Badge variant="default" className="self-start mb-8 text-[#999999]">Para grandes operações</Badge>
              <div className="mb-6">
                <h3 className="font-display font-bold text-[32px] text-white uppercase">Elite</h3>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-body font-bold text-[40px] text-white leading-none">R$ 397</span>
                  <span className="font-body text-[16px] text-[#555555] mb-1">/mês</span>
                </div>
                <p className="font-body text-[14px] text-[#999999] mt-4">Redes e academias com 500+ alunos</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {["Tudo do Pro", "Alunos ilimitados", "Multi-unidade", "API para integrações", "Gerente de conta dedicado", "SLA de suporte garantido"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-[14px] text-[#D9D9D9]">
                      <iconify-icon icon="lucide:check" class="text-[#CCFF33]"></iconify-icon> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="secondary" className="w-full">Falar com especialista</Button>
            </div>

          </div>
        </div>
      </section>

      {/* 08. TESTIMONIALS SECTION */}
      <section id="testimonials" className="bg-[#F2F2F2] py-32 px-5 md:px-10 rounded-t-[40px] mt-[-40px] relative z-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <Badge variant="default" className="mb-6 border-[#999999] text-[#555555]">Quem já usa</Badge>
            <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[0.9] tracking-tight text-[#090909] uppercase">
              Academias que pararam de adivinhar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ricardo Mendes",
                gym: "Force Gym — São Paulo, SP",
                quote: "Antes eu ficava sabendo que o aluno tinha ido embora só quando via que ele parou de pagar. Com o Forgee, o dashboard me mostrou que três alunos tinham sumido antes de cancelar. Consegui recuperar dois deles.",
                metric: "+35% de retenção em 60 dias"
              },
              {
                name: "Camila Souza",
                gym: "Studio CS — Belo Horizonte, MG",
                quote: "A recepção era um caos. Lista em papel, confusão no acesso, aluno esperando. Agora é QR Code e pronto. A equipe adorou e os alunos nem percebem mais que existe uma recepção.",
                metric: "Tempo de check-in: de 3min para 2s"
              },
              {
                name: "Paulo Antônio",
                gym: "Iron House — Porto Alegre, RS",
                quote: "Eu administrava tudo em planilha. Depois de uma semana no Forgee, joguei a planilha fora. Não por obrigação — porque não fazia mais sentido manter.",
                metric: "Inadimplência caiu de 18% para 6%"
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-white border border-[#E0E0E0] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <iconify-icon icon="lucide:quote" width="32" class="text-[#CCFF33] mb-6"></iconify-icon>
                  <p className="font-body text-[#555555] text-[15px] leading-relaxed mb-8">"{test.quote}"</p>
                </div>
                <div>
                  <div className="bg-[#F9F9F9] border border-[#E0E0E0] rounded-lg p-4 mb-6">
                    <span className="font-mono text-[12px] text-[#090909] font-bold block mb-1">IMPACTO:</span>
                    <span className="font-body text-[14px] text-[#22C55E] font-semibold">{test.metric}</span>
                  </div>
                  <h4 className="font-display font-bold text-[20px] uppercase text-[#090909]">{test.name}</h4>
                  <p className="font-body text-[13px] text-[#999999]">{test.gym}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. FAQ SECTION */}
      <section id="faq" className="bg-[#090909] py-32 px-5 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <Badge variant="default" className="mb-6">Dúvidas</Badge>
            <h2 className="font-display font-bold text-[48px] md:text-[56px] leading-[0.9] tracking-tight text-white uppercase">
              Perguntas que todo gestor faz antes de assinar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {[
              {
                q: "Preciso instalar alguma coisa?",
                a: "Não. O Forgee é 100% web. Funciona no navegador — desktop, tablet ou celular. Sem instalação, sem atualização manual."
              },
              {
                q: "Posso importar minha lista de alunos atual?",
                a: "Sim. Você importa via planilha CSV ou cadastra manualmente. Nossa equipe pode te ajudar na migração sem custo adicional."
              },
              {
                q: "O Modo Recepção funciona offline?",
                a: "O check-in precisa de conexão para validar o acesso em tempo real. Recomendamos uma internet estável na recepção — o que qualquer academia já tem."
              },
              {
                q: "Meus dados ficam seguros?",
                a: "Todos os dados são armazenados com criptografia e backup automático. Você não perde nada."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim. Sem multa, sem burocracia. Você cancela quando quiser e exporta seus dados antes de sair."
              },
              {
                q: "O Forgee funciona para estúdios pequenos?",
                a: "Sim. O plano Starter foi feito para quem tem até 100 alunos e quer profissionalizar a operação sem gastar muito."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-t border-[#2A2A2A] pt-6">
                <h4 className="font-body font-semibold text-[18px] text-white mb-3 flex items-start gap-3">
                  <span className="text-[#CCFF33] mt-1 text-[14px]">✦</span> {faq.q}
                </h4>
                <p className="font-body text-[#999999] text-[15px] leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="bg-[#111111] py-32 px-5 md:px-10 border-t border-[#2A2A2A] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF33]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <Badge variant="default" className="mb-6">Pronto para começar</Badge>
          <h2 className="font-display font-bold text-[56px] md:text-[80px] leading-[0.9] tracking-tight text-white uppercase mb-6">
            14 dias grátis.<br/>
            <span className="text-[#CCFF33]">Sem cartão de crédito.</span>
          </h2>
          <p className="font-body text-[#D9D9D9] text-[18px] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Teste o Forgee completo por duas semanas. Se não mudar a forma como você gerencia sua academia, você não paga nada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="primary" size="lg" icon="lucide:arrow-right" className="w-full sm:w-auto">
              Criar minha conta grátis
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Falar com a equipe
            </Button>
          </div>
          
          <p className="font-mono text-[12px] text-[#555555] tracking-wider uppercase">
            Sem taxa de setup · Sem contrato · Cancele quando quiser
          </p>
        </div>
      </section>

    </main>
  );
}