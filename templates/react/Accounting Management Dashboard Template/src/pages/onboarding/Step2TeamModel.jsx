import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useOnboarding } from '../../context/OnboardingContext';

export default function Step2TeamModel() {
  const navigate = useNavigate();
  const { state, updateState } = useOnboarding();
  const selectedModel = state.modelo;

  const handleSelect = (model) => {
    updateState({ modelo: model });
  };

  const handleNext = () => {
    if (selectedModel) navigate('/onboarding/step-3');
  };

  const handleBack = () => {
    navigate('/onboarding/step-1');
  };

  return (
    <div className="w-full max-w-[800px] mt-10 animate-in fade-in duration-500">
      <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight text-center">
        Como sua equipe está organizada?
      </h1>
      <p className="text-[16px] text-[#494949] text-center max-w-[560px] mx-auto mt-2 leading-relaxed">
        Essa configuração define como os atendimentos, demandas e clientes serão distribuídos. Você pode alterar isso nas configurações avançadas depois.
      </p>

      <div className="flex gap-6 mt-10">
        
        {/* Card A - Generalista */}
        <div 
          onClick={() => handleSelect('GENERALISTA')}
          className={clsx(
            "flex-1 rounded-xl p-8 cursor-pointer transition-all duration-200 relative",
            selectedModel === 'GENERALISTA' 
              ? "bg-[#F1FBFD] border-2 border-[#10677F] shadow-sm" 
              : "bg-[#FFFFFF] border-2 border-[#C6C7C7] hover:border-[#37A5C3] hover:bg-[#F7FCFE]"
          )}
        >
          {selectedModel === 'GENERALISTA' && (
            <div className="absolute top-4 right-4 bg-[#10677F] text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
              Selecionado
            </div>
          )}
          
          <iconify-icon icon="solar:users-group-rounded-linear" style={{ fontSize: '40px', color: '#10677F', marginBottom: '16px' }}></iconify-icon>
          <h2 className="text-[18px] font-bold text-[#1E1E1E]">A — Equipe Única, Generalista</h2>
          
          <div className="bg-[#F7F9FA] border-l-4 border-[#37A5C3] rounded p-3 mt-4 mb-5">
            <p className="text-[14px] text-[#494949] italic leading-snug">
              "Minha equipe trabalha de forma integrada. Todos os contadores atendem todos os clientes e todas as áreas sem distinção."
            </p>
          </div>

          <div className="h-[1px] bg-[#E5E7EB] w-full my-5"></div>

          <ul className="flex flex-col gap-2.5">
            {[
              "Campo 'Área' preenchido manualmente em cada fluxo",
              "Todos os contadores atendem todos os clientes",
              "Cartilha de clientes sem restrição de área"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-[#494949] leading-snug">
                <iconify-icon icon="solar:check-circle-linear" style={{ color: '#2D8654', fontSize: '16px', minWidth: '16px', marginTop: '2px' }}></iconify-icon>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#D9EDF2] rounded-lg p-3 mt-5 flex gap-2 items-start">
            <iconify-icon icon="solar:info-circle-linear" style={{ color: '#10677F', fontSize: '14px', marginTop: '2px' }}></iconify-icon>
            <span className="text-[12px] text-[#116E88] leading-tight">O campo 'Área' será obrigatório e manual em cada demanda criada</span>
          </div>
        </div>

        {/* Card B - Especialista */}
        <div 
          onClick={() => handleSelect('ESPECIALISTA')}
          className={clsx(
            "flex-1 rounded-xl p-8 cursor-pointer transition-all duration-200 relative",
            selectedModel === 'ESPECIALISTA' 
              ? "bg-[#F1FBFD] border-2 border-[#10677F] shadow-sm" 
              : "bg-[#FFFFFF] border-2 border-[#C6C7C7] hover:border-[#37A5C3] hover:bg-[#F7FCFE]"
          )}
        >
          {selectedModel === 'ESPECIALISTA' && (
            <div className="absolute top-4 right-4 bg-[#10677F] text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
              Selecionado
            </div>
          )}

          <iconify-icon icon="solar:target-linear" style={{ fontSize: '40px', color: '#10677F', marginBottom: '16px' }}></iconify-icon>
          <h2 className="text-[18px] font-bold text-[#1E1E1E]">B — Equipe Dividida por Área</h2>
          
          <div className="bg-[#F7F9FA] border-l-4 border-[#37A5C3] rounded p-3 mt-4 mb-5">
            <p className="text-[14px] text-[#494949] italic leading-snug">
              "Minha equipe é organizada por áreas. Tenho contadores dedicados a cada área (Fiscal, Trabalhista, Contábil, Societário)."
            </p>
          </div>

          <div className="h-[1px] bg-[#E5E7EB] w-full my-5"></div>

          <ul className="flex flex-col gap-2.5">
            {[
              "Campo 'Área' preenchido no cadastro do contador pelo gestor",
              "Área pré-selecionada automaticamente em todos os fluxos",
              "Cartilha de clientes restrita à área do contador"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-[#494949] leading-snug">
                <iconify-icon icon="solar:check-circle-linear" style={{ color: '#2D8654', fontSize: '16px', minWidth: '16px', marginTop: '2px' }}></iconify-icon>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#D9EDF2] rounded-lg p-3 mt-5 flex gap-2 items-start">
            <iconify-icon icon="solar:info-circle-linear" style={{ color: '#10677F', fontSize: '14px', marginTop: '2px' }}></iconify-icon>
            <span className="text-[12px] text-[#116E88] leading-tight">A área será preenchida pelo gestor ao cadastrar cada contador — não pode ser editada pelo contador</span>
          </div>
        </div>

      </div>

      <div className="w-full bg-[#FFF6E8] border border-[#FFE6BE] rounded-lg p-4 mt-6 flex gap-3 items-start">
        <iconify-icon icon="solar:danger-triangle-linear" style={{ fontSize: '20px', color: '#D18100', marginTop: '2px' }}></iconify-icon>
        <p className="text-[14px] text-[#494949]">
          Contadores que atuam em mais de uma área, mas não em todas, podem ser vinculados às suas áreas específicas no cadastro individual de cada contador, após o onboarding.
        </p>
      </div>

      <div className="flex justify-between items-center mt-10">
        <button 
          onClick={handleBack}
          className="h-12 px-6 rounded-lg border border-[#C6C7C7] text-[#494949] font-medium flex items-center gap-2 hover:bg-[#FFFFFF] transition-colors"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" style={{ fontSize: '20px' }}></iconify-icon>
          Voltar
        </button>
        
        <button 
          onClick={handleNext}
          disabled={!selectedModel}
          className={clsx(
            "h-12 px-6 rounded-lg font-medium flex items-center gap-2 transition-all",
            selectedModel 
              ? "bg-[#10677F] hover:bg-[#044A5D] text-white hover:scale-[1.02]" 
              : "bg-[#B4DAE4] text-white cursor-not-allowed"
          )}
        >
          Próximo — Áreas de Atuação
          <iconify-icon icon="solar:alt-arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
        </button>
      </div>

    </div>
  );
}