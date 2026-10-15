import React from 'react'

const Features = () => {
  return (
    <section id="funcionalidades" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">O que está incluído</span>
          <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
            UM SISTEMA.<br />PARA CADA<br />OPERAÇÃO.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Featured Card */}
          <div className="lg:col-span-2 bg-neutral-900 text-neutral-0 rounded-[24px] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-lime-400/5 transition-opacity group-hover:bg-lime-400/10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <div className="inline-block bg-lime-400 text-neutral-900 text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-6 tracking-wider">Destaque</div>
                <h3 className="text-2xl font-bold mb-4">02 — PREENCHIMENTO DE PRODUÇÃO</h3>
                <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                  Tela unificada para a equipe registrar produção e estoque ao final do turno. Cálculo automático de desperdício por linha. Alertas visuais imediatos — laranja se acima da meta aceitável, vermelho se crítico.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] uppercase text-neutral-500 font-bold tracking-wide mb-1">Para quem é</p>
                    <p className="text-sm font-medium">Staff da cozinha</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-neutral-500 font-bold tracking-wide mb-1">Tempo médio</p>
                    <p className="text-sm font-medium text-lime-400">3–5 min por turno</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 rounded-[16px] p-6 border border-neutral-700 shadow-2xl relative mt-8 md:mt-0 transform transition-transform group-hover:scale-[1.02]">
                {/* Mockup UI Inner */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-700">
                  <span className="font-bold text-sm">Registro de Sobras</span>
                  <span className="bg-orange-400/20 text-orange-400 text-[10px] font-bold px-2 py-1 rounded">Atenção</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-300">Contra Filé Grelhado</span>
                    <div className="flex gap-4">
                      <span className="text-neutral-500">Prod: 12kg</span>
                      <span className="text-red-400 font-bold">Sobra: 3.2kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-300">Arroz Branco</span>
                    <div className="flex gap-4">
                      <span className="text-neutral-500">Prod: 8kg</span>
                      <span className="text-green-500 font-bold">Sobra: 0.5kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-300">Salmão Assado</span>
                    <div className="flex gap-4">
                      <span className="text-neutral-500">Prod: 5kg</span>
                      <span className="text-orange-400 font-bold">Sobra: 1.1kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Cards */}
          <div className="bg-neutral-0 rounded-[24px] p-10 border border-neutral-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase">01 — DASHBOARD DE MARGEM</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Painel do dia com cards de Desperdício R$, CMV estimado, % de perda e alertas ativos. Sparkline dos últimos 7 dias para contexto de tendência.
              </p>
            </div>
            <div className="flex gap-8 border-t border-neutral-100 pt-6">
              <div>
                <p className="text-[10px] uppercase text-neutral-400 font-bold tracking-wide mb-1">Para quem é</p>
                <p className="text-xs font-medium text-neutral-900">Dono / gerente — visão de saúde</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-neutral-400 font-bold tracking-wide mb-1">Atualização</p>
                <p className="text-xs font-medium text-neutral-900">Após cada registro</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-0 rounded-[24px] p-10 border border-neutral-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase">03 — GESTÃO DE CARDÁPIO</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Cadastro de categorias e itens com custo unitário, unidade de medida e validade. Colunas customizadas por categoria para adaptar ao cardápio de cada restaurante.
            </p>
          </div>

          <div className="bg-neutral-0 rounded-[24px] p-10 border border-neutral-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase">04 — HISTÓRICO E RELATÓRIOS</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Histórico de produção com filtro por período, variação dia a dia e exportação CSV. Insumo para decisões de compra e avaliação de desempenho da equipe.
            </p>
          </div>

          <div className="bg-neutral-0 rounded-[24px] p-10 border border-neutral-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase">05 — GESTÃO DE EQUIPE</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Convite de colaboradores por e-mail, controle de acesso por papel (admin/staff) e revogação instantânea de acesso quando necessário.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features