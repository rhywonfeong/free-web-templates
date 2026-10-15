import React from 'react'

const Pricing = () => {
  return (
    <section id="planos" className="py-32 bg-neutral-0 border-y border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Investimento</span>
          <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
            SEM CONTRATO.<br />SEM TAXA DE<br />IMPLANTAÇÃO.
          </h2>
          <p className="text-base text-neutral-500">
            Cancele quando quiser com 30 dias de aviso. Troque de plano a qualquer momento. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          
          {/* BÁSICO */}
          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">BÁSICO</h3>
              <p className="font-display text-4xl text-neutral-900 mb-1">R$ 97</p>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">/mês</p>
            </div>
            
            <div className="flex-grow space-y-4 text-sm text-neutral-700 mb-8">
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Dashboard de margem diária</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Preenchimento de produção</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Gestão de categorias e itens</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> App mobile (PWA)</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Até 2 usuários (admin + 1 staff)</div>
              <div className="flex items-center gap-3 opacity-30"><iconify-icon icon="solar:close-circle-linear" class="text-neutral-500"></iconify-icon> Usuários ilimitados</div>
              <div className="flex items-center gap-3 opacity-30"><iconify-icon icon="solar:close-circle-linear" class="text-neutral-500"></iconify-icon> Histórico + exportação CSV</div>
            </div>

            <button className="w-full bg-neutral-0 border-2 border-neutral-100 text-neutral-900 font-bold py-4 rounded-full hover:border-neutral-900 transition-colors text-sm uppercase tracking-wide mt-auto">
              COMEÇAR GRÁTIS
            </button>
          </div>

          {/* PRO (MAIS ESCOLHIDO) */}
          <div className="bg-neutral-900 rounded-[24px] p-8 md:-my-4 shadow-2xl relative flex flex-col h-full transform transition-transform hover:scale-[1.02] z-10 border border-neutral-700">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-neutral-900 text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-sm">
              MAIS ESCOLHIDO
            </div>
            
            <div className="mb-8 mt-2">
              <h3 className="text-lg font-bold text-neutral-0 mb-2">PRO</h3>
              <p className="font-display text-4xl text-lime-400 mb-1">R$ 197</p>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">/mês</p>
            </div>
            
            <div className="flex-grow space-y-4 text-sm text-neutral-300 mb-8">
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Dashboard de margem diária</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Preenchimento de produção</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Gestão de categorias e itens</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> App mobile (PWA)</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Usuários ilimitados</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Histórico + exportação CSV</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Colunas customizadas por categoria</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Alertas de validade de estoque</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-lime-400"></iconify-icon> Metas de desperdício configuráveis</div>
            </div>

            <button className="w-full bg-lime-400 text-neutral-900 font-bold py-4 rounded-full hover:bg-lime-300 transition-colors text-sm uppercase tracking-wide mt-auto">
              COMEÇAR GRÁTIS
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">PREMIUM</h3>
              <p className="font-display text-4xl text-neutral-900 mb-1">R$ 347</p>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">/mês</p>
            </div>
            
            <div className="flex-grow space-y-4 text-sm text-neutral-700 mb-8">
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Tudo do plano PRO</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Suporte prioritário via WhatsApp</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Onboarding assistido (1h)</div>
              <div className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" class="text-neutral-900"></iconify-icon> Relatório mensal consolidado</div>
            </div>

            <button className="w-full bg-transparent border-2 border-neutral-100 text-neutral-900 font-bold py-4 rounded-full hover:border-neutral-900 transition-colors text-sm uppercase tracking-wide mt-auto">
              FALAR COM A GENTE
            </button>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs text-neutral-500 mb-6">
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 20% de desconto
          </p>
          <div className="bg-lime-100/50 rounded-[16px] p-6 border border-lime-400/20 inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="text-left">
              <p className="font-bold text-sm text-neutral-900 uppercase tracking-wide">TESTE GRÁTIS: 14 DIAS</p>
              <p className="text-xs text-neutral-600 mt-1">Sem cartão de crédito · Acesso completo ao plano PRO</p>
            </div>
            <button className="bg-neutral-900 text-lime-400 font-bold px-6 py-2 rounded-full text-xs uppercase tracking-wide hover:bg-neutral-700 transition-colors whitespace-nowrap">
              COMEÇAR AGORA
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing