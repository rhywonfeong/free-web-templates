import { Link } from 'react-router-dom';
import { useAuraCMSCollection } from '../lib/auraCms';
import clsx from 'clsx';

export default function Home() {
  const { items: cmsPlanos, loading: loadingPlanos } = useAuraCMSCollection('planos', { publishedOnly: true });
  const { items: cmsDepoimentos, loading: loadingDepoimentos } = useAuraCMSCollection('depoimentos', { publishedOnly: true });
  const { items: cmsFaqs, loading: loadingFaqs } = useAuraCMSCollection('faqs', { publishedOnly: true });

  // Fallback Data to ensure the site always looks complete and beautiful
  const fallbackPlanos = [
    { id: 1, title: 'Start', speed: '400 MEGA', price: '79,90', features: ['Wi-Fi 6 Incluso', 'Instalação Grátis', 'Suporte 24h'], isPopular: false },
    { id: 2, title: 'Família', speed: '600 MEGA', price: '99,90', features: ['Wi-Fi 6 Incluso', 'Instalação Grátis', 'Paramount+', 'Suporte 24h'], isPopular: true },
    { id: 3, title: 'Gamer', speed: '800 MEGA', price: '119,90', features: ['Rotas Otimizadas', 'Wi-Fi 6 Incluso', 'Watch Brasil', 'Suporte VIP'], isPopular: false },
    { id: 4, title: 'Ultra HD', speed: '1 GIGA', price: '149,90', features: ['2 Roteadores Mesh', 'Telecine & Paramount+', 'Atendimento Exclusivo'], isPopular: false },
  ];

  const fallbackDepoimentos = [
    { id: 1, nome: "Carlos Almeida", cidade: "Barreiras - BA", texto: "Melhor internet que já tive na região. Jogo online sem lag nenhum e a instalação foi no mesmo dia!" },
    { id: 2, nome: "Mariana Costa", cidade: "Luís Eduardo Magalhães - BA", texto: "Trabalho em home office e precisava de estabilidade. A Provider Mais Fibra me entregou exatamente isso." },
    { id: 3, nome: "Roberto Silva", cidade: "São Desidério - BA", texto: "Os canais de streaming inclusos no plano de 600 Mega valem muito a pena. A família toda aproveita." }
  ];

  const fallbackFaqs = [
    { id: 1, pergunta: "A instalação é gratuita?", resposta: "Sim! Em todos os nossos planos de fibra óptica, a instalação e o roteador Wi-Fi são cedidos em regime de comodato sem custo adicional." },
    { id: 2, pergunta: "Quanto tempo demora para instalar?", resposta: "Nossa equipe técnica realiza a instalação em até 48 horas úteis após a aprovação do seu pedido." },
    { id: 3, pergunta: "Como funciona os streamings inclusos?", resposta: "Ao contratar planos a partir de 600 Mega, você recebe um login e senha para acessar os aplicativos parceiros (Paramount+, Watch, etc) sem custo extra." }
  ];

  const planos = cmsPlanos?.length > 0 ? cmsPlanos : fallbackPlanos;
  const depoimentos = cmsDepoimentos?.length > 0 ? cmsDepoimentos : fallbackDepoimentos;
  const faqs = cmsFaqs?.length > 0 ? cmsFaqs : fallbackFaqs;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* SEÇÃO 1 — Hero / Banner Principal */}
      <section className="relative w-full bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1614064641913-a53ec220d1c0?w=1600&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent z-0"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-start w-full md:w-3/5">
          <span className="px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm mb-6 border border-orange-500/30 backdrop-blur-sm">
            Internet Fibra Óptica de Verdade
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6 text-white">
            <span className="text-amber-400">600 MEGA</span><br />
            a partir de R$ 99,90/mês
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-md">
              <iconify-icon icon="solar:play-circle-bold" width="18" height="18" className="text-orange-500"></iconify-icon> WATCH
            </span>
            <span className="flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-md">
              <iconify-icon icon="solar:clapperboard-play-bold" width="18" height="18" className="text-orange-500"></iconify-icon> Paramount+
            </span>
          </div>
          <p className="text-xl md:text-2xl font-medium text-slate-200 mb-10 max-w-xl leading-relaxed">
            Estabilidade para jogar, velocidade para trabalhar e streaming para toda a família. Instalação grátis!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#planos" className="w-full sm:w-auto text-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:scale-105 transition-all">
              Ver Planos
            </a>
            <a href="https://wa.me/5577998444757" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" width="24" height="24" className="text-emerald-500"></iconify-icon>
              Assinar via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — Faixa de Diferenciais */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-sm relative z-20 -mt-6 rounded-t-3xl md:rounded-none md:mt-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: 'solar:routing-3-bold', text: 'Fibra Óptica 100%' },
              { icon: 'solar:bolt-bold', text: 'Instalação Rápida' },
              { icon: 'solar:headphones-round-sound-bold', text: 'Suporte 24h' },
              { icon: 'solar:box-minimalistic-bold', text: 'Wi-Fi 6 Incluso' },
              { icon: 'solar:shield-check-bold', text: 'Homologado Anatel' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-800 font-bold text-sm md:text-base">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shadow-sm border border-slate-200">
                  <iconify-icon icon={item.icon} width="24" height="24"></iconify-icon>
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — Planos de Internet */}
      <section id="planos" className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nossos Planos</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Escolha a Velocidade Ideal</h2>
            <p className="text-lg text-slate-600 font-medium">Instalação, Roteador Wi-Fi e Suporte Técnico inclusos em todos os planos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planos.map((plano) => {
              const isPopular = plano.featured || plano.isPopular;
              const title = plano.title || plano.name || "Plano Fibra";
              const speed = plano.speed || plano.velocidade || "300 Mega";
              const price = plano.price || plano.preco || "Consulte";
              const featuresRaw = plano.features || plano.beneficios || [];
              const features = Array.isArray(featuresRaw) ? featuresRaw : String(featuresRaw).split(',').filter(Boolean);

              return (
                <div 
                  key={plano.id} 
                  className={clsx(
                    "relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2",
                    isPopular 
                      ? "bg-slate-900 text-white border-2 border-orange-500 shadow-xl shadow-orange-500/20 scale-105 z-10" 
                      : "bg-white text-slate-900 border border-slate-200 shadow-lg hover:shadow-xl"
                  )}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap shadow-md">
                      Mais Vendido
                    </div>
                  )}
                  
                  <div className="mb-6 border-b border-slate-200/20 pb-6">
                    <h3 className={clsx("text-xl font-bold mb-2", isPopular ? "text-slate-300" : "text-slate-500")}>
                      {title}
                    </h3>
                    <div className="text-5xl font-black tracking-tight">
                      {speed}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <iconify-icon icon="solar:check-circle-bold" width="22" height="22" className={clsx("shrink-0", isPopular ? "text-orange-400" : "text-emerald-500")}></iconify-icon>
                        <span className={clsx("text-sm font-medium leading-tight", isPopular ? "text-slate-200" : "text-slate-600")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <div className="text-3xl font-black">
                      {String(price).includes('R$') ? price : `R$ ${price}`}
                      <span className={clsx("text-base font-normal ml-1", isPopular ? "text-slate-400" : "text-slate-500")}>/mês</span>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/5577998444757" 
                    className={clsx(
                      "w-full py-4 rounded-xl font-bold text-center transition-all",
                      isPopular 
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30" 
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    )}
                  >
                    Assinar Agora
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — Banner de Streaming */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:tv-bold" width="48" height="48" className="text-amber-400 mb-6"></iconify-icon>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Internet + Entretenimento Completo</h2>
          <p className="text-xl font-medium mb-12 text-slate-300 max-w-2xl mx-auto">Streaming incluso nos planos a partir de 600 Mega. Mais de 10 mil horas de filmes, séries e esportes.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-3">
              <iconify-icon icon="solar:play-circle-bold" width="32" height="32" className="text-orange-500"></iconify-icon>
              <span className="text-2xl font-black tracking-wide">WATCH</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 flex items-center gap-3">
              <iconify-icon icon="solar:clapperboard-play-bold" width="32" height="32" className="text-blue-400"></iconify-icon>
              <span className="text-2xl font-black tracking-wide">Paramount+</span>
            </div>
          </div>

          <a href="#planos" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
            Ver Planos com Streaming
          </a>
        </div>
      </section>

      {/* SEÇÃO 5 — Aplicativo */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">App Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Controle Total na Palma da Mão</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Baixe o aplicativo Provider Mais Fibra e tenha acesso rápido a boletos, suporte técnico, teste de velocidade e muito mais, tudo pelo seu celular.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'solar:document-text-bold', title: '2ª Via de Boleto' },
                { icon: 'solar:speedometer-bold', title: 'Teste de Velocidade' },
                { icon: 'solar:user-bold', title: 'Área do Cliente' },
                { icon: 'solar:chat-round-line-bold', title: 'Suporte via App' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <iconify-icon icon={feature.icon} width="24" height="24"></iconify-icon>
                  </div>
                  <span className="font-bold text-slate-800">{feature.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                <iconify-icon icon="simple-icons:googleplay" width="28" height="28"></iconify-icon>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Disponível no</span>
                  <span className="block text-base font-bold leading-none mt-1">Google Play</span>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                <iconify-icon icon="simple-icons:apple" width="28" height="28"></iconify-icon>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Baixar na</span>
                  <span className="block text-base font-bold leading-none mt-1">App Store</span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[100px] z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" 
              alt="Pessoa usando smartphone" 
              className="relative z-10 w-full max-w-[320px] rounded-[2.5rem] shadow-2xl border-[12px] border-slate-900 object-cover aspect-[9/19]"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — Depoimentos */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
              <iconify-icon icon="logos:google-icon" width="20" height="20"></iconify-icon>
              <span className="text-sm font-bold text-slate-800">Avaliações Verificadas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">O Que Dizem Nossos Clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[1,2,3,4,5].map(star => <iconify-icon key={star} icon="solar:star-bold" width="22" height="22"></iconify-icon>)}
                </div>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  "{depoimento.texto || depoimento.text || depoimento.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {(depoimento.nome || depoimento.name || "C").charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{depoimento.nome || depoimento.name}</h4>
                    <span className="text-sm text-slate-500 font-medium">{depoimento.cidade || depoimento.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-slate-600">Tire suas dúvidas rapidamente sobre nossos serviços.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.id} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer">
                <summary className="flex items-center justify-between p-6 font-bold text-lg text-slate-900 list-none">
                  {faq.pergunta || faq.question}
                  <iconify-icon icon="solar:alt-arrow-down-bold" width="24" height="24" className="text-orange-500 group-open:rotate-180 transition-transform"></iconify-icon>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2">
                  {faq.resposta || faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — CTA Final */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Pronto para a Melhor Conexão?</h2>
          <p className="text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
            Fale com nossa equipe agora, agende sua instalação e comece a navegar hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/5577998444757" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1 transition-all">
              <iconify-icon icon="simple-icons:whatsapp" width="24" height="24"></iconify-icon>
              Assinar pelo WhatsApp
            </a>
            <a href="#planos" className="w-full sm:w-auto text-center border-2 border-slate-700 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">
              Ver Todos os Planos
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}