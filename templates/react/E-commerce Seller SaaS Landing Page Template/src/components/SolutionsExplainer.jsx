import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolutionsExplainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Gestão de Anúncios",
      content: "Centralize todos os seus anúncios do Mercado Livre, Shopee e Amazon em um único painel. Edite em massa, duplique e acompanhe performance facilmente."
    },
    {
      title: "IA Copilot",
      content: "IA que otimiza títulos, sugere descrições, detecta fichas incompletas e aumenta seu Score de anúncio automaticamente para você vender mais."
    },
    {
      title: "Controle de Estoque",
      content: "Gerencie o estoque por canal em tempo real. Alertas automáticos de ruptura antes que você perca vendas ou afete sua reputação."
    },
    {
      title: "Central de Pedidos",
      content: "Todos os pedidos de todos os canais em uma timeline unificada. Histórico, rastreamento e atualização de status com um único clique."
    },
    {
      title: "Analytics Unificado",
      content: "Dashboard inteligente com faturamento, ticket médio, taxa de conversão e performance por canal. Decida com dados, não com intuição."
    },
    {
      title: "Multi-marketplace",
      content: "Conecte Mercado Livre, Shopee, Amazon e outros simultaneamente. Sincronização de preço e estoque em tempo real entre todos os canais."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 sticky top-32">
            <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">Nosso Posicionamento</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
              Não somos ERP.<br/>Não somos só IA.<br/>Não somos consultoria.
            </h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-semibold text-slate-800 text-sm">ERP:</p>
                <p className="text-slate-600 font-light text-sm">Complexo, caro e sem inteligência própria.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Só IA:</p>
                <p className="text-slate-600 font-light text-sm">Automatiza processos mas sem estratégia por trás.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Consultoria:</p>
                <p className="text-slate-600 font-light text-sm">Fornece o plano, mas não executa o dia a dia.</p>
              </div>
            </div>

            <p className="text-lg font-medium text-slate-800 mb-8 p-4 bg-orange-100 rounded-xl border border-orange-200">
              Nós somos a Decola Seller. Tecnologia + IA + time humano em um único produto feito para quem quer crescer de verdade.
            </p>

            <Link to="#" className="bg-orange-500 text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-orange-600 transition-all inline-flex items-center gap-2 shadow-sm">
              Criar conta grátis
              <iconify-icon icon="solar:alt-arrow-right-linear" width="18" height="18"></iconify-icon>
            </Link>
          </div>

          {/* Right Accordion/List */}
          <div className="w-full lg:w-7/12">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Tudo que um seller precisa</h4>
              <p className="text-slate-500 font-light">Do controle unificado de anúncios até uma Inteligência Artificial que otimiza sua operação automaticamente 24h por dia.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-orange-500">100+</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">Recursos</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-orange-500">5</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">Marketplaces</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">IA Ativa</div>
              </div>
            </div>

            <div className="space-y-4">
              {tabs.map((tab, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${activeTab === idx ? 'border-orange-500 shadow-lg shadow-orange-500/10 bg-white' : 'border-gray-200 bg-white hover:bg-slate-50 cursor-pointer'}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h4 className={`text-lg font-semibold ${activeTab === idx ? 'text-orange-600' : 'text-slate-800'}`}>
                      {tab.title}
                    </h4>
                    <iconify-icon 
                      icon={activeTab === idx ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
                      width="24" 
                      className={activeTab === idx ? 'text-orange-500' : 'text-slate-400'}
                    ></iconify-icon>
                  </div>
                  <div 
                    className={`px-6 pb-6 text-slate-600 font-light transition-all duration-300 ${activeTab === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                  >
                    <p>{tab.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pricing Section Injected Here */}
        <div className="mt-40 pt-20 border-t border-slate-200" id="planos">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">Planos</h2>
            <h3 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Planos simples. Sem surpresas.</h3>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Escolha o plano ideal para você decolar. Cancele quando quiser, sem taxas abusivas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Start Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">Start</h4>
              <p className="text-sm text-slate-500 mb-8 min-h-[40px]">Para quem quer sair do básico e começar a organizar.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Até 500 anúncios ativos', '2 marketplaces conectados', 'Dashboard básico', 'IA Copilot essencial', 'Suporte por e-mail'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <iconify-icon icon="solar:check-circle-bold" className="text-orange-500 mt-0.5" width="18"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to="#" className="w-full text-center py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                Começar agora
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-orange-900/20 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Mais Escolhido
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">Pro</h4>
              <p className="text-sm text-slate-400 mb-8 min-h-[40px]">Para quem quer crescer com estratégia e escalar.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Anúncios ilimitados', 'Todos os marketplaces', 'IA Copilot completo', 'Dashboard avançado', 'Gestão de campanhas', 'Suporte via WhatsApp'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 font-medium text-sm">
                    <iconify-icon icon="solar:check-circle-bold" className="text-orange-400 mt-0.5" width="18"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to="#" className="w-full text-center py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Começar agora
              </Link>
            </div>

            {/* Scale Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h4 className="text-2xl font-semibold text-slate-900 mb-2">Scale</h4>
              <p className="text-sm text-slate-500 mb-8 min-h-[40px]">Para grandes operações que precisam de dedicação total.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Tudo do Pro', 'Time dedicado', 'Relatórios personalizados', 'SLA garantido', 'Onboarding premium', 'Gerente de conta exclusivo'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <iconify-icon icon="solar:check-circle-bold" className="text-slate-800 mt-0.5" width="18"></iconify-icon>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to="#" className="w-full text-center py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                Começar agora
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsExplainer;