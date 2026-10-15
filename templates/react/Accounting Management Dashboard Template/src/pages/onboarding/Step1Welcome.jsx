import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/OnboardingContext';

export default function Step1Welcome() {
  const navigate = useNavigate();
  const { updateState } = useOnboarding();

  const handleStart = () => {
    navigate('/onboarding/step-2');
  };

  const handleSkip = () => {
    updateState({ onboardingStatus: 'PARCIAL' });
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-[640px] mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#FFFFFF] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-12 flex flex-col items-center">
        
        <div className="w-16 h-16 bg-[#F1FBFD] rounded-2xl flex items-center justify-center mb-6 text-[#10677F]">
          <iconify-icon icon="solar:settings-bold" style={{ fontSize: '32px' }}></iconify-icon>
        </div>

        <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight mb-2 text-center">
          Sua conta está criada.
        </h1>
        
        <p className="text-[18px] text-[#494949] text-center max-w-md leading-relaxed">
          Agora vamos configurar como sua equipe vai funcionar dentro da plataforma.
        </p>

        {/* Info Blocks */}
        <div className="w-full bg-[#F1FBFD] rounded-lg p-5 mt-8 flex border border-[#DCEBEF]">
          <div className="flex-1 flex flex-col items-center text-center border-r border-[#DCEBEF] px-2">
            <iconify-icon icon="solar:clock-circle-linear" style={{ fontSize: '24px', color: '#10677F' }}></iconify-icon>
            <span className="text-[14px] font-semibold text-[#1E1E1E] mt-2 mb-0.5">~5 minutos</span>
            <span className="text-[12px] text-[#727272]">Tempo estimado</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center border-r border-[#DCEBEF] px-2">
            <iconify-icon icon="solar:checklist-linear" style={{ fontSize: '24px', color: '#10677F' }}></iconify-icon>
            <span className="text-[14px] font-semibold text-[#1E1E1E] mt-2 mb-0.5">5 passos</span>
            <span className="text-[12px] text-[#727272]">Configuração guiada</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-2">
            <iconify-icon icon="solar:lock-unlocked-linear" style={{ fontSize: '24px', color: '#10677F' }}></iconify-icon>
            <span className="text-[14px] font-semibold text-[#1E1E1E] mt-2 mb-0.5">Acesso completo</span>
            <span className="text-[12px] text-[#727272]">Ao concluir</span>
          </div>
        </div>

        {/* Warning Block */}
        <div className="w-full bg-[#FFF6E8] border border-[#FFE6BE] rounded-lg p-4 mt-6 flex gap-3 items-start">
          <iconify-icon icon="solar:danger-triangle-linear" style={{ fontSize: '20px', color: '#D18100', marginTop: '2px' }}></iconify-icon>
          <p className="text-[14px] text-[#494949] leading-snug">
            Você pode configurar depois, mas algumas funcionalidades ficarão bloqueadas até a conclusão.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-8 w-full max-w-[280px]">
          <button 
            onClick={handleStart}
            className="w-full bg-[#10677F] hover:bg-[#044A5D] text-white h-12 rounded-lg font-medium text-[15px] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
          >
            Começar configuração
            <iconify-icon icon="solar:alt-arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
          </button>
          
          <button 
            onClick={handleSkip}
            className="w-full bg-transparent hover:bg-[#F7F9FA] text-[#727272] h-12 rounded-lg font-medium text-[15px] transition-colors"
          >
            Configurar depois
          </button>
        </div>

      </div>
    </div>
  );
}