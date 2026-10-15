import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [sales, setSales] = useState(1450);

  // Simulated live ticking orders
  useEffect(() => {
    const interval = setInterval(() => {
      setSales(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white clip-diagonal">
      {/* Background Graphic */}
      <div className="hero-canvas absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -rotate-6 transform origin-left"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -rotate-6 transform origin-left"></div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-none lg:col-span-6 xl:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6 font-medium text-sm text-orange-700 bg-orange-100 inline-flex px-3 py-1 rounded-full border border-orange-200">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Por que criamos a Decola Seller?</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-[68px] font-semibold tracking-tight text-slate-900 leading-[1.05] mb-8 text-balance">
              Cansado de pagar caro e continuar sozinho?
            </h1>
            
            {/* Subheadline */}
            <p className="text-[19px] leading-relaxed text-slate-600 font-light mb-10 max-w-xl">
              A Decola Seller une plataforma, IA e time especializado para ajudar sua operação a vender mais, ganhar eficiência e crescer com estratégia nos marketplaces.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link 
                to="#" 
                className="group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full py-3.5 px-8 relative shadow-lg"
              >
                <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
                <span className="relative flex items-center gap-2 text-[15px]">
                  Quero decolar
                  <iconify-icon icon="solar:rocket-bold" width="18" height="18"></iconify-icon>
                </span>
              </Link>
              
              <Link to="#" className="bg-white text-slate-700 text-[15px] font-medium px-6 py-3.5 rounded-full hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm border border-slate-200 hover:-translate-y-0.5">
                <iconify-icon icon="solar:play-circle-bold-duotone" width="20" height="20" className="text-orange-500"></iconify-icon>
                Demo rápida de 2 minutos
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1.5">
              <iconify-icon icon="solar:check-circle-bold" width="14" height="14" className="text-green-500"></iconify-icon>
              Sem cartão de crédito necessário
            </p>
          </div>

          {/* Right Demo UI */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 justify-end relative">
            <div className="relative w-full max-w-[420px]">
              
              {/* Main Dark Card */}
              <section className="w-full overflow-hidden bg-slate-900 border-slate-800 border rounded-[2.2rem] relative shadow-2xl hover:-translate-y-1 transition-transform duration-500 z-10">
                {/* Status bar */}
                <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-slate-300 border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2 font-semibold">
                    <iconify-icon icon="solar:rocket-bold-duotone" className="text-orange-500" width="16" height="16"></iconify-icon>
                    Painel Decola Seller
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="font-sans font-medium">Sincronizado</span>
                  </div>
                </div>

                {/* Hero image / Chart Area */}
                <div className="relative mt-3 mx-3 rounded-[1.8rem] overflow-hidden bg-slate-950 border border-slate-800 p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <p className="text-[11px] text-slate-400 font-sans font-medium uppercase tracking-wider">
                        Vendas Hoje
                      </p>
                      <p className="text-3xl text-white font-semibold tabular-nums-tight">
                        <span className="text-slate-500 text-xl mr-1">R$</span>4.820,50
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded-md text-xs font-medium">
                      <iconify-icon icon="solar:trend-up-bold" width="14"></iconify-icon>
                      +18.2%
                    </div>
                  </div>

                  {/* Mock Bar Chart */}
                  <div className="h-24 flex items-end gap-2 mt-4">
                    {[30, 45, 25, 60, 40, 85, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-orange-500/20 hover:bg-orange-500/40 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-orange-300 bg-slate-800 px-1.5 rounded">
                          {h * 12}
                        </div>
                        {h > 50 && <div className="absolute bottom-0 left-0 w-full bg-orange-500 rounded-t-sm" style={{ height: '40%' }}></div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content under hero */}
                <div className="mt-4 px-6 pb-6 space-y-5">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.1em] font-sans flex items-center gap-1.5">
                      <iconify-icon icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
                      IA Copilot · Sugestões
                    </p>
                  </div>

                  {/* Action items */}
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex items-center justify-between hover:bg-slate-800 transition cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                          <iconify-icon icon="solar:tag-price-bold-duotone" width="16"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-sm text-slate-200 font-medium font-sans">Ajuste de Preço</p>
                          <p className="text-[11px] text-slate-400 font-sans">Mercado Livre • Concorrência alta</p>
                        </div>
                      </div>
                      <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-orange-600 transition">Aplicar</button>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex items-center justify-between hover:bg-slate-800 transition cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <iconify-icon icon="solar:text-bold-duotone" width="16"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-sm text-slate-200 font-medium font-sans">Otimizar Título</p>
                          <p className="text-[11px] text-slate-400 font-sans">Shopee • Score Baixo (42/100)</p>
                        </div>
                      </div>
                      <button className="text-xs bg-slate-700 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-slate-600 transition">Revisar</button>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/70 pt-4">
                    <div className="flex items-center gap-1.5">
                      <iconify-icon icon="simple-icons:mercadolivre" width="14"></iconify-icon>
                      <span>Conectado</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <iconify-icon icon="simple-icons:amazon" width="14"></iconify-icon>
                      <span>Conectado</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <iconify-icon icon="simple-icons:shopee" width="14"></iconify-icon>
                      <span>Conectado</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Floating Light Mode Card */}
              <div className="absolute -bottom-10 -left-16 w-[320px] z-20 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] shadow-2xl shadow-orange-900/10 p-6 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-inner">
                      <iconify-icon icon="solar:box-bold-duotone" width="24" height="24"></iconify-icon>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Novo Pedido</p>
                      <p className="text-[11px] text-slate-500 font-medium">Agora mesmo via Shopee</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-slate-400 font-medium text-lg">R$</span>
                    <p className="text-3xl font-semibold tracking-tight text-slate-800 tabular-nums-tight">289,90</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center overflow-hidden">
                      <iconify-icon icon="solar:t-shirt-bold-duotone" width="14" className="text-orange-500"></iconify-icon>
                    </div>
                    <p className="text-xs text-slate-500">Camiseta Premium Algodão...</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono tracking-tight">PED-{(sales + 1400).toString()}</span>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-1">
                    Imprimir Etiqueta
                    <iconify-icon icon="solar:printer-minimalistic-bold" width="14" height="14"></iconify-icon>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;