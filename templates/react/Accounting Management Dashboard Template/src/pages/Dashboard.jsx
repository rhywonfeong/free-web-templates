import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { useOnboarding } from '../context/OnboardingContext';
import { useNavigate } from 'react-router-dom';
import CadastroModal from './contadores/CadastroModal';

export default function Dashboard() {
  const { state, markDashboardAccessed } = useOnboarding();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tickets em Andamento');
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

  useEffect(() => {
    if (state.isFirstDashboardAccess) {
      markDashboardAccessed();
    }
  }, []);

  const isParcial = state.onboardingStatus === 'PARCIAL';

  return (
    <div className="w-full flex flex-col bg-[#F7F9FA] min-h-[calc(100vh-64px)] animate-in fade-in duration-500">
      
      {/* Quick Access Bar */}
      <div className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-3 px-20 flex items-center sticky top-16 z-40">
        <span className="text-[14px] text-[#727272] mr-4">O que você gostaria de ver:</span>
        <div className="flex gap-2">
          {['Tickets em Andamento', 'Central de Pendências', 'Gestão de Documentos', 'Dashboard Analítico'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-[14px] font-medium transition-colors border",
                activeTab === tab 
                  ? "bg-[#10677F] text-white border-[#10677F]" 
                  : "bg-white text-[#494949] border-[#C6C7C7] hover:bg-[#F7F9FA]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-20 py-8">
        
        {/* PARCIAL Warning Banner */}
        {isParcial && (
          <div className="bg-[#FFF9F9] border border-[#FFC7C7] rounded-xl p-4 mb-8 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <iconify-icon icon="solar:danger-triangle-bold" style={{ color: '#C92B2B', fontSize: '24px' }}></iconify-icon>
              <span className="text-[15px] font-medium text-[#C92B2B]">Configuração incompleta — algumas funcionalidades estão bloqueadas.</span>
            </div>
            <button 
              onClick={() => navigate('/onboarding/step-1')}
              className="text-[14px] font-bold text-[#C92B2B] hover:underline"
            >
              Concluir configuração
            </button>
          </div>
        )}

        {/* Progress Tracker Module */}
        {!isParcial && (
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col xl:flex-row xl:items-center justify-between gap-8 relative overflow-hidden">
             
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#F1FBFD] to-transparent opacity-50 pointer-events-none"></div>

             {/* Left Text & Progress */}
             <div className="flex-1 max-w-md relative z-10">
               <h2 className="text-[20px] font-semibold text-[#1E1E1E] tracking-tight">Progresso de Configuração</h2>
               <p className="text-[14px] text-[#494949] mt-1 mb-5">
                 Você está quase lá! Conclua a edição da base para liberar 100% da plataforma.
               </p>
               
               <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] font-bold text-[#10677F] leading-none">2</span>
                    <span className="text-[16px] text-[#939393] font-medium">/ 5</span>
                  </div>
                  <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                     <div className="h-full bg-[#10677F] w-[40%] rounded-full transition-all duration-1000"></div>
                  </div>
                  <span className="text-[13px] font-medium text-[#727272] min-w-[110px]">Passos concluídos</span>
               </div>
             </div>

             {/* Right Steps Sequence */}
             <div className="flex flex-1 justify-between max-w-2xl relative z-10">
               {/* Steps Sequence... */}
               <div className="flex flex-col items-center flex-1 relative group">
                  <div className="w-9 h-9 rounded-full bg-[#2D8654] text-white flex items-center justify-center z-10 relative shadow-sm">
                     <iconify-icon icon="solar:check-read-bold" style={{ fontSize: '20px' }}></iconify-icon>
                  </div>
                  <div className="absolute top-[18px] left-1/2 w-full h-[2px] bg-[#2D8654] z-0"></div>
                  <span className="text-[12px] font-medium text-[#1E1E1E] mt-3 text-center px-1">Modelo & Áreas</span>
               </div>
               <div className="flex flex-col items-center flex-1 relative group">
                  <div className="w-9 h-9 rounded-full bg-[#2D8654] text-white flex items-center justify-center z-10 relative shadow-sm">
                     <iconify-icon icon="solar:check-read-bold" style={{ fontSize: '20px' }}></iconify-icon>
                  </div>
                  <div className="absolute top-[18px] left-1/2 w-full h-[2px] bg-[#E5E7EB] z-0"></div>
                  <span className="text-[12px] font-medium text-[#1E1E1E] mt-3 text-center px-1">Pendências</span>
               </div>
               <div className="flex flex-col items-center flex-1 relative group">
                  <div className="w-9 h-9 rounded-full bg-[#10677F] text-white flex items-center justify-center shadow-[0_0_0_4px_#DCEBEF] z-10 relative font-bold">
                     3
                  </div>
                  <div className="absolute top-[18px] left-1/2 w-full h-[2px] bg-[#E5E7EB] z-0"></div>
                  <span className="text-[12px] font-bold text-[#10677F] mt-3 text-center px-1">Contadores</span>
               </div>
               <div className="flex flex-col items-center flex-1 relative group">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-[#C6C7C7] text-[#939393] flex items-center justify-center z-10 relative font-bold">
                     4
                  </div>
                  <div className="absolute top-[18px] left-1/2 w-full h-[2px] bg-[#E5E7EB] z-0"></div>
                  <span className="text-[12px] font-medium text-[#727272] mt-3 text-center px-1">Clientes</span>
               </div>
               <div className="flex flex-col items-center flex-1 relative group">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-[#C6C7C7] text-[#939393] flex items-center justify-center z-10 relative font-bold">
                     5
                  </div>
                  <span className="text-[12px] font-medium text-[#727272] mt-3 text-center px-1">Operação</span>
               </div>
             </div>
          </div>
        )}

        {/* KPIs Section */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Clientes Ativos', value: '0', icon: 'solar:buildings-bold-duotone', emptyHint: 'Cadastre o primeiro cliente' },
            { label: 'Tickets Entregues', value: '0', icon: 'solar:ticket-bold-duotone', emptyHint: 'Sem tickets resolvidos' },
            { label: 'Demandas Entregues', value: '0', icon: 'solar:check-square-bold-duotone', emptyHint: 'Sem demandas' },
            { label: 'Taxa de Conclusão (SLA)', value: '—', icon: 'solar:graph-up-bold-duotone', emptyHint: 'Sem dados suficientes' }
          ].map((kpi, i) => (
            <div key={i} className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex justify-between items-start mb-2">
                 <iconify-icon icon={kpi.icon} style={{ color: '#10677F', fontSize: '28px' }}></iconify-icon>
                 <span className="text-[12px] font-medium text-[#939393] bg-[#F7F9FA] px-2 py-0.5 rounded">Hoje</span>
              </div>
              <p className="text-[12px] text-[#727272] mt-2">{kpi.label}</p>
              <h3 className="text-[32px] font-semibold text-[#1E1E1E] leading-none my-1">{kpi.value}</h3>
              <p className="text-[11px] text-[#939393] flex items-center gap-1 mt-2">
                <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                {kpi.emptyHint}
              </p>
            </div>
          ))}
        </div>

        {/* Section: Gestão de Contabilistas */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-[24px] font-semibold text-[#1E1E1E] tracking-tight">Gestão de Contabilistas</h2>
              <p className="text-[14px] text-[#727272]">Adicione os contadores da sua equipe para começar a operar</p>
            </div>
            <button 
              onClick={() => setIsCadastroModalOpen(true)}
              className="bg-[#10677F] hover:bg-[#044A5D] text-white px-5 py-3 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              <iconify-icon icon="solar:user-plus-bold" style={{ fontSize: '20px' }}></iconify-icon>
              + Cadastrar Contador
            </button>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 bg-[#F7F9FA] px-4 py-3 border-b border-[#E5E7EB] text-[12px] font-medium text-[#727272] uppercase tracking-wider">
              <div className="col-span-2">Contabilista</div>
              <div>Equipe / Área</div>
              <div>Clientes</div>
              <div>Abertas</div>
              <div>Em Atraso</div>
              <div>SLA</div>
              <div className="text-right">Ações</div>
            </div>
            
            {/* Empty State TELA 1 */}
            <div className="flex flex-col items-center justify-center py-16">
              <iconify-icon icon="solar:user-plus-linear" style={{ fontSize: '64px', color: '#B4DAE4', marginBottom: '20px' }}></iconify-icon>
              <h3 className="text-[18px] font-semibold text-[#494949]">Nenhum contador cadastrado ainda</h3>
              <p className="text-[14px] text-[#9B9B9B] mt-2 max-w-[400px] text-center">
                Adicione sua equipe individualmente ou importe via planilha Excel para agilizar o processo.
              </p>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setIsCadastroModalOpen(true)}
                  className="bg-[#10677F] hover:bg-[#044A5D] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors shadow-sm"
                >
                  Cadastrar individualmente
                </button>
                <button 
                  onClick={() => setIsCadastroModalOpen(true)}
                  className="bg-transparent hover:bg-[#F1FBFD] border border-[#10677F] text-[#10677F] px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2"
                >
                  <iconify-icon icon="solar:document-add-linear" style={{ fontSize: '18px' }}></iconify-icon>
                  Importar via planilha
                </button>
              </div>

              {state.modelo === 'ESPECIALISTA' && (
                <div className="mt-6 bg-[#F1FBFD] px-4 py-2 rounded-md flex items-center gap-2">
                  <iconify-icon icon="solar:info-circle-linear" style={{ color: '#10677F', fontSize: '14px' }}></iconify-icon>
                  <span className="text-[12px] text-[#116E88]">Cada contador precisa ter uma área de atuação definida no cadastro</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section: Demandas Controladas */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-[24px] font-semibold text-[#1E1E1E] tracking-tight">Demandas Controladas</h2>
              <p className="text-[14px] text-[#727272]">Gerencie demandas planejadas e recorrentes</p>
            </div>
            <button className="bg-[#10677F] hover:bg-[#044A5D] text-white px-4 py-2 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <iconify-icon icon="solar:document-add-bold" style={{ fontSize: '18px' }}></iconify-icon>
              Nova Demanda
            </button>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl shadow-sm h-[200px] flex flex-col items-center justify-center">
             <iconify-icon icon="solar:document-text-broken" style={{ fontSize: '56px', color: '#B4DAE4', marginBottom: '12px' }}></iconify-icon>
             <h3 className="text-[16px] font-semibold text-[#494949]">Sem demandas ativas</h3>
             <p className="text-[14px] text-[#9B9B9B] mt-1">
               As demandas recorrentes só podem ser criadas após cadastrar clientes e pendências.
             </p>
          </div>
        </div>

      </div>

      <CadastroModal 
        isOpen={isCadastroModalOpen} 
        onClose={() => setIsCadastroModalOpen(false)} 
      />
    </div>
  );
}