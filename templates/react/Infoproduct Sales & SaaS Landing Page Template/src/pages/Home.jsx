import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <h4 className="text-lg font-medium text-gray-200 group-hover:text-[#FFD970] transition-colors pr-8">
          {question}
        </h4>
        <div className={clsx("text-gray-400 transition-transform duration-300", isOpen && "rotate-180")}>
          <iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
        </div>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient from-[#FFD970]/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto z-10 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-[#FFD970] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD970] animate-pulse" />
            Nova plataforma disponível
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Venda seu conhecimento sem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD970] to-[#CA994A]">travar na tecnologia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-[640px] mx-auto leading-relaxed">
            A AUGE é a plataforma completa para criar, vender e escalar infoprodutos com suporte próximo e estrutura profissional — do primeiro produto ao crescimento.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD970] text-[#0C0C0C] font-medium hover:shadow-[0_0_30px_-5px_rgba(255,217,112,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Começar grátis
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Ver como funciona
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#CA994A]"></iconify-icon> Sem complicação técnica</span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#CA994A]"></iconify-icon> Pagamentos integrados</span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#CA994A]"></iconify-icon> Área de membros completa</span>
          </div>
        </div>
      </section>

      {/* O QUE É A AUGE */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FFD970]/[0.02] to-transparent relative">
        <div className="max-w-[1200px] mx-auto px-6 reveal">
          <div className="max-w-[720px] mx-auto text-center border border-white/5 bg-[#111111]/80 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
            <iconify-icon icon="solar:layers-minimalistic-linear" width="48" className="text-[#FFD970] mb-6"></iconify-icon>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Tudo que você precisa para vender, em um só lugar
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Na AUGE, você não precisa montar um sistema com várias ferramentas.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Você cria seu produto, define sua oferta e começa a vender com uma estrutura pronta — com pagamentos, entrega e gestão funcionando juntos.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="para-quem" className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Feito para quem quer transformar conhecimento em receita
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "solar:rocket-linear",
                title: "Criadores iniciantes",
                desc: "Comece sem depender de ferramentas complexas"
              },
              {
                icon: "solar:star-circle-linear",
                title: "Especialistas e mentores",
                desc: "Organize e escale seus conteúdos com controle"
              },
              {
                icon: "solar:buildings-linear",
                title: "Empresas e marcas",
                desc: "Estruture produtos digitais como um canal de crescimento"
              }
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#CA994A]/30 transition-colors group`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FFD970]/10 transition-colors">
                  <iconify-icon icon={item.icon} width="24" className="text-gray-400 group-hover:text-[#FFD970] transition-colors"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Simples de começar. Estruturado para crescer.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Crie seu produto", desc: "Cursos, mentorias, e-books ou comunidades" },
              { step: "2", title: "Configure sua oferta", desc: "Preço, planos, cupons e estratégias de venda" },
              { step: "3", title: "Publique e venda", desc: "Página pronta + checkout integrado" },
              { step: "4", title: "Entregue com qualidade", desc: "Área de membros com controle de acesso e progresso" }
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i} relative`}>
                <div className="text-[120px] font-semibold leading-none text-white/[0.03] absolute -top-10 -left-4 pointer-events-none tracking-tighter">
                  {item.step}
                </div>
                <div className="relative z-10 pt-8">
                  <div className="w-8 h-8 rounded-full bg-[#FFD970] text-[#0C0C0C] flex items-center justify-center font-semibold text-sm mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Uma plataforma completa, de verdade
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="reveal col-span-1 md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#487BFF]/10 rounded-full blur-[60px] group-hover:bg-[#487BFF]/20 transition-all duration-700 -translate-y-1/2 translate-x-1/2" />
              <iconify-icon icon="solar:wallet-money-linear" width="32" className="text-[#487BFF] mb-6"></iconify-icon>
              <h3 className="text-2xl font-medium tracking-tight mb-3">Pagamentos integrados</h3>
              <p className="text-gray-400 text-sm max-w-md">Cartão, boleto e recorrência sem precisar conectar serviços externos.</p>
            </div>

            <div className="reveal reveal-delay-1 p-8 rounded-3xl bg-[#111] border border-white/5 group">
              <iconify-icon icon="solar:users-group-two-rounded-linear" width="32" className="text-[#FFD970] mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight mb-3">Área de membros</h3>
              <p className="text-gray-400 text-sm">Entrega organizada com controle de progresso e liberação de conteúdo.</p>
            </div>

            <div className="reveal p-8 rounded-3xl bg-[#111] border border-white/5 group">
              <iconify-icon icon="solar:share-circle-linear" width="32" className="text-[#CA994A] mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight mb-3">Sistema de afiliados</h3>
              <p className="text-gray-400 text-sm">Transforme outras pessoas em canal de venda.</p>
            </div>

            <div className="reveal reveal-delay-1 p-8 rounded-3xl bg-[#111] border border-white/5 group">
              <iconify-icon icon="solar:document-add-linear" width="32" className="text-white mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight mb-3">Páginas de venda</h3>
              <p className="text-gray-400 text-sm">Estrutura pronta para converter sem depender de dev.</p>
            </div>

            <div className="reveal reveal-delay-2 p-8 rounded-3xl bg-[#111] border border-white/5 group">
              <iconify-icon icon="solar:graph-up-linear" width="32" className="text-white mb-6"></iconify-icon>
              <h3 className="text-xl font-medium tracking-tight mb-3">Gestão de vendas</h3>
              <p className="text-gray-400 text-sm">Acompanhe pedidos, métricas e crescimento em um só lugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL & BENEFÍCIOS */}
      <section className="py-32 bg-[#0C0C0C] relative border-y border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="reveal">
              <div className="inline-block px-3 py-1 rounded-full bg-[#CA994A]/10 text-[#CA994A] text-xs font-medium mb-6">
                O Diferencial
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Mais do que ferramenta. <br/>Um suporte estratégico.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A AUGE não é só tecnologia.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Você conta com uma estrutura pensada para facilitar decisões, reduzir erros e acelerar resultados — com um suporte mais próximo do que o padrão do mercado.
              </p>
            </div>

            <div className="reveal reveal-delay-1 flex flex-col justify-center">
              <h3 className="text-xl font-medium tracking-tight mb-8 text-[#FFD970]">
                Menos fricção. Mais foco no que importa.
              </h3>
              <ul className="space-y-6">
                {[
                  "Sem depender de várias ferramentas",
                  "Menos tempo configurando, mais tempo vendendo",
                  "Estrutura pronta para escalar",
                  "Controle total do seu produto e receita"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#FFD970]/10 flex items-center justify-center shrink-0">
                      <iconify-icon icon="solar:check-read-linear" className="text-[#FFD970]"></iconify-icon>
                    </div>
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Dúvidas comuns antes de começar
            </h2>
          </div>

          <div className="reveal space-y-2">
            <FAQItem 
              question="A AUGE é só para cursos online?" 
              answer="Não. Você pode vender cursos, mentorias, e-books, comunidades ou qualquer tipo de infoproduto digital." 
            />
            <FAQItem 
              question="Preciso saber tecnologia para usar a plataforma?" 
              answer="Não. A AUGE foi pensada para ser simples de usar, mesmo para quem está começando. Você consegue criar e vender sem depender de ferramentas externas ou conhecimento técnico." 
            />
            <FAQItem 
              question="Como funcionam os pagamentos?" 
              answer="A plataforma já possui pagamentos integrados. Você pode vender via cartão, boleto e recorrência sem precisar configurar outros serviços." 
            />
            <FAQItem 
              question="Posso criar uma área de membros para meus alunos?" 
              answer="Sim. Você terá uma área de membros completa, com controle de acesso, progresso e liberação de conteúdo por etapas." 
            />
            <FAQItem 
              question="A AUGE cobra mensalidade ou taxa por venda?" 
              answer="Depende do plano escolhido. A estrutura foi pensada para acompanhar seu crescimento, sem travar quem está começando." 
            />
            <FAQItem 
              question="Posso usar afiliados para vender meu produto?" 
              answer="Sim. Você pode ativar o sistema de afiliados e permitir que outras pessoas promovam seu produto em troca de comissão." 
            />
            <FAQItem 
              question="Consigo criar páginas de venda dentro da plataforma?" 
              answer="Sim. A AUGE oferece páginas prontas para você estruturar sua oferta e começar a vender sem precisar de desenvolvedor." 
            />
            <FAQItem 
              question="A plataforma oferece suporte?" 
              answer="Sim. Um dos diferenciais da AUGE é o suporte mais próximo, ajudando você não só na parte técnica, mas também na evolução do seu produto." 
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto rounded-[40px] bg-gradient-to-b from-[#1A1500] to-[#0C0C0C] border border-[#FFD970]/20 p-12 md:p-20 text-center relative overflow-hidden reveal">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#FFD970] to-transparent opacity-50 blur-sm" />
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 relative z-10">
            Seu conhecimento já tem valor. <br className="hidden md:block"/>Falta a estrutura certa.
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Comece hoje e transforme seu conteúdo em um produto digital de verdade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD970] text-[#0C0C0C] font-medium hover:shadow-[0_0_30px_-5px_rgba(255,217,112,0.5)] transition-all hover:scale-105 active:scale-95">
              Criar conta grátis
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all">
              Falar com o time
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}