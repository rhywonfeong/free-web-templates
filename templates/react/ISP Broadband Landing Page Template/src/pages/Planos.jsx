import { useAuraCMSCollection } from '../lib/auraCms';
import clsx from 'clsx';

export default function Planos() {
  const { items: cmsPlanos, loading } = useAuraCMSCollection('planos', { publishedOnly: true });

  const fallbackPlanos = [
    { id: 1, title: 'Start', speed: '400 MEGA', price: '79,90', features: ['Wi-Fi 6 Incluso', 'Instalação Grátis', 'Suporte 24h'], isPopular: false },
    { id: 2, title: 'Família', speed: '600 MEGA', price: '99,90', features: ['Wi-Fi 6 Incluso', 'Instalação Grátis', 'Paramount+', 'Suporte 24h'], isPopular: true },
    { id: 3, title: 'Gamer', speed: '800 MEGA', price: '119,90', features: ['Rotas Otimizadas', 'Wi-Fi 6 Incluso', 'Watch Brasil', 'Suporte VIP'], isPopular: false },
    { id: 4, title: 'Ultra HD', speed: '1 GIGA', price: '149,90', features: ['2 Roteadores Mesh', 'Telecine & Paramount+', 'Atendimento Exclusivo'], isPopular: false },
  ];

  const planos = cmsPlanos?.length > 0 ? cmsPlanos : fallbackPlanos;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Planos Feitos Para Você</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Escolha a velocidade perfeita para sua casa ou negócio. Todos os planos incluem instalação gratuita e roteador Wi-Fi de alta performance.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planos.map((plano) => {
              const isPopular = plano.featured || plano.isPopular;
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
                      {plano.title || plano.name || "Plano Fibra"}
                    </h3>
                    <div className="text-5xl font-black tracking-tight">
                      {plano.speed || plano.velocidade || "Consulte"}
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
                      {String(plano.price || plano.preco).includes('R$') ? plano.price || plano.preco : `R$ ${plano.price || plano.preco}`}
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
    </div>
  );
}