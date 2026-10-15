import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';
import { clsx } from 'clsx';

export default function Step5Summary() {
  const navigate = useNavigate();
  const { state, updateState } = useOnboarding();

  useEffect(() => {
    // Mark as complete once reaching the summary
    if (state.onboardingStatus !== 'CONCLUIDO') {
      updateState({ onboardingStatus: 'CONCLUIDO' });
    }
  }, []);

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-[720px] mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col items-center mb-8">
        <iconify-icon icon="solar:check-circle-bold" style={{ fontSize: '64px', color: '#2D8654', marginBottom: '16px' }}></iconify-icon>
        <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight">
          Configuração concluída!
        </h1>
        <p className="text-[16px] text-[#494949] mt-1">
          Sua plataforma está pronta. Confira o resumo abaixo.
        </p>
      </div>

      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
        <div className="bg-[#F7F9FA] px-6 py-4 border-b border-[#E5E7EB]">
          <span className="text-[14px] font-medium text-[#727272] uppercase tracking-wide">
            Resumo da sua configuração
          </span>
        </div>

        {/* Item 1: Model */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between hover:bg-[#FAFCFD] transition-colors">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[#727272]">Modelo de equipe</span>
            <div className="flex items-center gap-2 bg-[#F1FBFD] w-max px-3 py-1.5 rounded-full">
              <iconify-icon 
                icon={state.modelo === 'GENERALISTA' ? 'solar:users-group-rounded-bold' : 'solar:target-bold'} 
                style={{ color: '#116E88', fontSize: '16px' }}
              ></iconify-icon>
              <span className="text-[13px] font-medium text-[#116E88]">
                {state.modelo === 'GENERALISTA' ? 'Equipe Generalista' : 'Equipe Especialista'}
              </span>
            </div>
          </div>
          <button className="text-[12px] font-medium text-[#10677F] hover:underline" onClick={() => navigate('/onboarding/step-2')}>
            Editar
          </button>
        </div>

        {/* Item 2: Areas */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between hover:bg-[#FAFCFD] transition-colors">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[#727272]">Áreas ativas</span>
            <div className="flex gap-2 flex-wrap">
              {state.areas.map(area => (
                <span key={area} className="bg-[#F1FBFD] text-[#116E88] text-[13px] font-medium px-3 py-1.5 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <button className="text-[12px] font-medium text-[#10677F] hover:underline" onClick={() => navigate('/onboarding/step-3')}>
            Editar
          </button>
        </div>

        {/* Item 3: Pendencias */}
        <div className="px-6 py-4 flex items-center justify-between hover:bg-[#FAFCFD] transition-colors">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[#727272]">Pendências padrão</span>
            {state.pendencias === 'CONFIGURADO' ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D8654]"></span>
                <span className="text-[13px] font-medium text-[#2D8654]">Configuradas e ativas</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D18100]"></span>
                <span className="text-[13px] font-medium text-[#D18100]">Não configuradas (Ignorado)</span>
              </div>
            )}
          </div>
          {state.pendencias !== 'CONFIGURADO' && (
             <button className="text-[12px] font-medium text-[#D18100] hover:underline" onClick={() => navigate('/onboarding/step-4')}>
               Configurar agora
             </button>
          )}
        </div>
      </div>

      {/* Next Steps Cards */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Card A */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#C6C7C7] hover:border-[#10677F] hover:shadow-md rounded-xl p-6 transition-all group flex flex-col justify-between">
          <div>
            <iconify-icon icon="solar:user-plus-bold-duotone" style={{ fontSize: '40px', color: '#10677F', marginBottom: '12px' }}></iconify-icon>
            <h3 className="text-[18px] font-semibold text-[#1E1E1E]">Cadastrar contadores</h3>
            <p className="text-[14px] text-[#494949] mt-1 leading-snug">
              Adicione sua equipe e configure as áreas e cartilhas de atendimento.
            </p>
            {state.modelo === 'ESPECIALISTA' && (
              <div className="bg-[#F1FBFD] rounded px-2 py-1.5 mt-3 inline-block">
                <span className="text-[12px] text-[#116E88] leading-tight">
                  💡 Você precisará definir a área de cada contador
                </span>
              </div>
            )}
          </div>
          <button className="w-full mt-6 bg-[#10677F] text-white h-10 rounded-lg font-medium text-[14px] transition-transform group-hover:bg-[#044A5D]">
            Cadastrar agora
          </button>
        </div>

        {/* Card B */}
        <div className="bg-[#FFFFFF] border-[1.5px] border-[#C6C7C7] hover:border-[#10677F] hover:shadow-md rounded-xl p-6 transition-all group flex flex-col justify-between">
          <div>
            <iconify-icon icon="solar:buildings-bold-duotone" style={{ fontSize: '40px', color: '#10677F', marginBottom: '12px' }}></iconify-icon>
            <h3 className="text-[18px] font-semibold text-[#1E1E1E]">Cadastrar clientes</h3>
            <p className="text-[14px] text-[#494949] mt-1 leading-snug">
              Importe ou cadastre manualmente os clientes do escritório.
            </p>
            <div className="mt-3">
               <span className="text-[12px] text-[#116E88]">
                 Pode vincular contadores durante o cadastro
               </span>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#10677F] text-white h-10 rounded-lg font-medium text-[14px] transition-transform group-hover:bg-[#044A5D]">
            Cadastrar agora
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button 
          onClick={handleGoToDashboard}
          className="flex items-center gap-2 text-[#10677F] font-medium text-[15px] hover:text-[#044A5D] hover:underline transition-all"
        >
          Ir para o Dashboard
          <iconify-icon icon="solar:alt-arrow-right-linear" style={{ fontSize: '18px' }}></iconify-icon>
        </button>
      </div>

    </div>
  );
}