import React from 'react';

const Pricing = () => {
  return (
    <section id="planos" className="bg-neutral-50 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">Investimento</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-6 leading-tight flex flex-col items-center">
            <span>SEM CONTRATO.</span>
            <span>SEM TAXA DE</span>
            <span>IMPLANTAÇÃO.</span>
          </h2>
          <p className="text-sm md:text-base font-body text-neutral-700 max-w-lg mx-auto">
            Cancele quando quiser com 30 dias de aviso. Troque de plano a qualquer momento. Sem justificativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Plano Básico */}
          <div className="bg-neutral-0 rounded-2xl p-8 border border-neutral-100 flex flex-col">
            <div className="mb-8">
              <h3 className="text-lg font-h2 text-neutral-900 mb-2">BÁSICO</h3>
              <div className="text-3xl font-display text-neutral-900">R$ 97<span className="text-sm font-body text-neutral-500">/mês</span></div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-4 mb-8">
              {['Dashboard de margem diária', 'Preenchimento de produção', 'Gestão de categorias e itens', 'App mobile (PWA)', 'Até 2 usuários'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-neutral-700">
                  <iconify-icon icon="solar:check-circle-linear" class="text-neutral-900 text-lg"></iconify-icon> {feat}
                </li>
              ))}
              {['Usuários ilimitados', 'Histórico + exportação CSV', 'Colunas customizadas', 'Alertas de validade', 'Metas configuráveis', 'Suporte prioritário WhatsApp'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-neutral-300">
                  <span className="w-[18px] text-center">—</span> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full bg-neutral-0 border border-neutral-300 text-neutral-900 text-sm font-label py-3 rounded-full hover:bg-neutral-50 transition-colors">
              COMEÇAR GRÁTIS
            </button>
          </div>

          {/* Plano PRO */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-400 text-neutral-900 text-[10px] font-label px-3 py-1 rounded-full uppercase tracking-wider">
              Mais Escolhido
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-h2 text-white mb-2">PRO</h3>
              <div className="text-3xl font-display text-white">R$ 197<span className="text-sm font-body text-neutral-400">/mês</span></div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-4 mb-8">
              {['Dashboard de margem diária', 'Preenchimento de produção', 'Gestão de categorias e itens', 'App mobile (PWA)', 'Usuários ilimitados', 'Histórico + exportação CSV', 'Colunas customizadas', 'Alertas de validade', 'Metas configuráveis'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-neutral-300">
                  <iconify-icon icon="solar:check-circle-linear" class="text-lime-400 text-lg"></iconify-icon> {feat}
                </li>
              ))}
              {['Suporte prioritário WhatsApp', 'Onboarding assistido (1h)'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-neutral-600">
                  <span className="w-[18px] text-center">—</span> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full bg-lime-400 text-neutral-900 text-sm font-label py-3 rounded-full hover:bg-lime-300 transition-colors">
              COMEÇAR GRÁTIS
            </button>
          </div>

          {/* Plano Premium */}
          <div className="bg-neutral-0 rounded-2xl p-8 border border-neutral-100 flex flex-col">
             <div className="mb-8">
              <h3 className="text-lg font-h2 text-neutral-900 mb-2">PREMIUM</h3>
              <div className="text-3xl font-display text-neutral-900">R$ 347<span className="text-sm font-body text-neutral-500">/mês</span></div>
            </div>
            
            <ul className="flex-1 flex flex-col gap-4 mb-8">
              {['Dashboard de margem diária', 'Preenchimento de produção', 'Gestão de categorias e itens', 'App mobile (PWA)', 'Usuários ilimitados', 'Histórico + exportação CSV', 'Colunas customizadas', 'Alertas de validade', 'Metas configuráveis', 'Suporte prioritário WhatsApp', 'Onboarding assistido (1h)', 'Relatório mensal consolidado'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-neutral-700">
                  <iconify-icon icon="solar:check-circle-linear" class="text-neutral-900 text-lg"></iconify-icon> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full bg-neutral-0 border border-neutral-300 text-neutral-900 text-sm font-label py-3 rounded-full hover:bg-neutral-50 transition-colors">
              FALAR COM A GENTE
            </button>
          </div>

        </div>

        <div className="text-center text-xs font-body text-neutral-500 mb-12">
          Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 20% de desconto
        </div>

        <div className="bg-lime-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-label text-neutral-900 uppercase mb-1">Teste Grátis: 14 Dias</div>
            <div className="text-sm font-body text-neutral-700">Sem cartão de crédito · Acesso completo ao plano PRO</div>
          </div>
          <button className="w-full md:w-auto whitespace-nowrap bg-neutral-900 text-white text-sm font-label px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors">
            COMEÇAR AGORA
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;