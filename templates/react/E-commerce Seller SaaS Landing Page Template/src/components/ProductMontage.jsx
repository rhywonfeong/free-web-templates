import React from 'react';
import { Link } from 'react-router-dom';

const ProductMontage = () => {
  return (
    <section className="overflow-hidden clip-diagonal-reverse -mt-20 lg:pt-48 lg:-mt-32 lg:pb-0 bg-slate-50 z-10 pt-40 pb-32 relative">
      <div className="max-w-[1080px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">Tudo o que você precisa</h2>
          <h3 className="text-4xl font-semibold text-slate-900 mb-6 tracking-tight">O painel que todo seller precisava para crescer de verdade.</h3>
          <p className="text-lg font-light text-slate-600">
            Gerencie anúncios, controle estoque, acompanhe pedidos e deixe a IA trabalhar enquanto você foca em vender mais.
          </p>
        </div>

        {/* Adapted Component Widgets Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: AI Copilot Assistant */}
          <div className="md:col-span-5 flex justify-center w-full">
            <section className="flex-1 overflow-hidden hover:-translate-y-1 transition-transform duration-500 bg-slate-900 w-full max-w-md border-slate-800 border rounded-[2.2rem] relative shadow-2xl">
              
              {/* Status bar */}
              <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-slate-300 border-b border-slate-800/70 pb-3">
                <span className="font-sans flex items-center gap-1.5 font-medium">
                  <iconify-icon icon="solar:magic-stick-3-bold" className="text-orange-400"></iconify-icon>
                  Copilot IA
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <iconify-icon icon="solar:wifi-bold-duotone" width="14" height="14"></iconify-icon>
                  <span className="font-sans">Online</span>
                </div>
              </div>

              {/* Hero Chat Interface */}
              <div className="overflow-hidden rounded-[1.8rem] mt-3 mr-3 ml-3 relative bg-slate-950 p-4 border border-slate-800">
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-800/60 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Identifiquei que 12 anúncios no Mercado Livre estão com a ficha técnica incompleta, o que reduz sua exposição.
                    </p>
                  </div>
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl rounded-tr-sm p-3 max-w-[85%] self-end">
                    <p className="text-xs text-orange-100 leading-relaxed font-sans">
                      Pode preencher e atualizar para mim?
                    </p>
                  </div>
                  <div className="bg-slate-800/60 rounded-2xl rounded-tl-sm p-3 max-w-[85%] flex flex-col gap-2">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Feito! Fichas completas com base na descrição original. Score dos anúncios aumentou de 78 para 95.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium flex items-center gap-1"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> Sucesso</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900 border border-slate-700 rounded-full flex items-center px-4 py-2 opacity-80 pointer-events-none">
                  <span className="text-xs text-slate-500">Escreva um comando...</span>
                  <iconify-icon icon="solar:microphone-3-bold" className="ml-auto text-slate-500" width="14"></iconify-icon>
                </div>
              </div>

              {/* Content under hero */}
              <div className="mt-6 pr-6 pb-6 pl-6 space-y-6">
                <div className="space-y-1 border-b border-slate-800/70 pb-4">
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.1em] font-sans">
                    AUTOMAÇÃO ATIVA
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-white font-sans">
                    Sua operação no piloto automático
                  </h2>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed mt-1.5">
                    Otimiza títulos, descrições, ajusta preços dinamicamente e responde perguntas de clientes 24 horas por dia.
                  </p>
                </div>

                {/* Action buttons circle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="h-11 w-11 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition outline-none" type="button">
                      <iconify-icon icon="solar:play-bold" width="20" height="20" className="translate-x-[1px]"></iconify-icon>
                    </button>
                    <div className="text-xs">
                      <p className="text-slate-200 font-semibold font-sans">
                        Ativar Robô
                      </p>
                      <p className="text-slate-500 font-sans">
                        Respostas Automáticas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <button className="flex hover:bg-slate-700 transition outline-none bg-slate-800 w-10 h-10 rounded-full items-center justify-center" type="button">
                      <iconify-icon icon="solar:settings-bold-duotone" width="16" height="16"></iconify-icon>
                    </button>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* Right Column: Glassmorphic Status Card & Bar Chart */}
          <div className="md:col-span-7 flex flex-col gap-8 w-full">
            
            {/* Glassmorphic Dashboard Widget */}
            <div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-slate-900 rounded-[1.5rem] shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-[1.5rem] border border-white/10" style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }}></div>
              <div className="absolute inset-0 border-white/5 border rounded-[1.5rem]" style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(249,115,22,0.1),transparent_60%)]"></div>
              
              <div className="flex flex-col h-full p-6 pb-7 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-3/4">
                    <h1 className="text-[26px] leading-tight tracking-tight font-sans font-semibold text-white">Performance Geral</h1>
                    <p className="text-slate-400 text-sm font-light mt-1 font-sans">Todos os Marketplaces • Últimos 30 dias</p>
                  </div>
                  <div className="w-1/4 text-right">
                    <div className="text-[20px] font-semibold font-sans text-white tracking-tight">ATIVO</div>
                    <div className="flex items-center justify-end gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(74, 222, 128, 0.4)' }}></div>
                      <span className="text-xs text-green-400 font-sans tracking-wider font-medium">SINCRONIZANDO</span>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto w-full mb-5 mt-4">
                  <div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-xl bg-slate-950/80 ring-1 ring-white/5 blur-[0.3px]"></div>
                  <div className="relative rounded-xl bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,8,23,0.95))] ring-1 ring-white/10 overflow-hidden shadow-inner p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">GMV Total</p>
                        <p className="text-xl font-bold text-white tabular-nums-tight">R$ 48.2k</p>
                        <p className="text-xs text-green-400 font-medium mt-1 flex items-center gap-1"><iconify-icon icon="solar:trend-up-bold"></iconify-icon>+12.4%</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Pedidos</p>
                        <p className="text-xl font-bold text-white tabular-nums-tight">1.240</p>
                        <p className="text-xs text-green-400 font-medium mt-1 flex items-center gap-1"><iconify-icon icon="solar:trend-up-bold"></iconify-icon>+8.2%</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Conversão</p>
                        <p className="text-xl font-bold text-white tabular-nums-tight">3.8%</p>
                        <p className="text-xs text-orange-400 font-medium mt-1 flex items-center gap-1"><iconify-icon icon="solar:trend-up-bold"></iconify-icon>+1.1%</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Margem</p>
                        <p className="text-xl font-bold text-white tabular-nums-tight">22%</p>
                        <p className="text-xs text-slate-400 font-medium mt-1 flex items-center gap-1">Estável</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 mt-2"></div>
                
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_12px_rgba(249,115,22,0.2)] font-sans">
                    <iconify-icon icon="solar:box-bold-duotone" width="14" height="14"></iconify-icon>
                    ESTOQUE SINCRONIZADO
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] font-sans">
                    <iconify-icon icon="solar:tag-price-bold-duotone" width="14" height="14"></iconify-icon>
                    PRECIFICAÇÃO INTELIGENTE
                  </span>
                </div>
                
                <div className="mt-auto flex justify-between w-full pt-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-slate-400 flex items-center gap-2 text-[11px] font-semibold tracking-wide">
                      <iconify-icon icon="simple-icons:mercadolivre" width="14" height="14"></iconify-icon>
                      <span className="font-sans">MERCADO LIVRE</span>
                    </span>
                    <span className="text-slate-500 flex items-center gap-2 text-[11px] font-semibold tracking-wide">
                      <iconify-icon icon="simple-icons:shopee" width="14" height="14"></iconify-icon>
                      <span className="font-sans">SHOPEE</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2 justify-end">
                    <Link to="#" className="text-[12px] text-orange-400 font-semibold flex items-center gap-1.5 cursor-pointer hover:text-orange-300 transition-colors">
                      <span className="font-sans">Ver Analytics Completo</span>
                      <iconify-icon icon="solar:arrow-right-linear" width="14" height="14"></iconify-icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Plan Widget */}
            <section className="flex flex-col shadow-xl shadow-slate-200/50 bg-white border-slate-200 border rounded-3xl p-6 w-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Evolução</p>
                  <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-slate-900">Faturamento Mensal</h2>
                </div>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition border border-slate-200 text-slate-600">
                  <iconify-icon icon="solar:refresh-circle-bold-duotone" width="20" height="20"></iconify-icon>
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {/* Months scale */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 font-medium">
                  <span>Jan</span><span>Fev</span><span>Mar</span><span className="font-bold text-orange-600">Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
                </div>
                
                {/* Bars */}
                <div className="mt-1 grid grid-cols-12 gap-2 h-32 items-end">
                  <div className="rounded-t-full bg-slate-100 h-[26%] w-full hover:bg-slate-200 transition-colors"></div>
                  <div className="rounded-t-full bg-slate-100 h-[32%] w-full hover:bg-slate-200 transition-colors"></div>
                  <div className="rounded-t-full bg-slate-100 h-[45%] w-full hover:bg-slate-200 transition-colors"></div>
                  <div className="rounded-t-full bg-orange-500 h-[68%] shadow-md shadow-orange-500/30 border-t border-orange-400 w-full relative group cursor-pointer">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-orange-600 whitespace-nowrap bg-orange-100 px-1.5 py-0.5 rounded">R$ 48.2k</div>
                  </div>
                  <div className="rounded-t-full bg-orange-100 h-[74%] w-full"></div>
                  <div className="rounded-t-full bg-orange-100 h-[80%] w-full"></div>
                  <div className="rounded-t-full bg-orange-100 h-[92%] w-full"></div>
                  <div className="rounded-t-full bg-orange-100 h-[100%] w-full"></div>
                  <div className="rounded-t-full bg-slate-100 h-[77%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[60%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[40%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[34%] w-full"></div>
                </div>

                {/* Range + percentage */}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex-1 max-w-[140px]">
                    <p className="text-[11px] text-slate-500 mb-1.5 font-medium">Mês atual</p>
                    <button className="w-full flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                      <span>Abril</span>
                      <iconify-icon icon="solar:alt-arrow-down-bold-duotone" width="14" height="14" className="text-slate-400"></iconify-icon>
                    </button>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[11px] text-slate-500 mb-0.5 font-medium">Meta de Faturamento</p>
                    <p className="text-2xl font-bold tracking-tight text-slate-900">114%</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductMontage;