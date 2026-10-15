import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useOnboarding } from '../../context/OnboardingContext';

const availableAreas = [
  { id: 'Fiscal', icon: 'solar:bill-list-bold', desc: 'DCTF, SPED Fiscal, EFD-Contribuições, ICMS' },
  { id: 'Trabalhista', icon: 'solar:users-group-two-rounded-bold', desc: 'eSocial, EFD-REINF' },
  { id: 'Contábil', icon: 'solar:book-bookmark-bold', desc: 'Balancete, DRE, ECF, Balanço Patrimonial' },
  { id: 'Societário', icon: 'solar:buildings-bold', desc: 'Contratos, Alterações, Registros, NIRE' },
  { id: 'Departamento Pessoal', icon: 'solar:user-id-bold', desc: 'Folha de Pagamento, Férias, Rescisões' },
  { id: 'Legalização', icon: 'solar:diploma-bold', desc: 'Abertura, Alteração, Baixa de Empresas' }
];

export default function Step3Areas() {
  const navigate = useNavigate();
  const { state, updateState } = useOnboarding();
  
  const [selectedAreas, setSelectedAreas] = useState(state.areas || []);
  const [showModal, setShowModal] = useState(false);

  const toggleArea = (areaId) => {
    setSelectedAreas(prev => 
      prev.includes(areaId) 
        ? prev.filter(a => a !== areaId)
        : [...prev, areaId]
    );
  };

  const handleNextClick = () => {
    if (selectedAreas.length === 1) {
      setShowModal(true);
    } else {
      proceedToNext();
    }
  };

  const proceedToNext = () => {
    updateState({ areas: selectedAreas });
    navigate('/onboarding/step-4');
  };

  const handleBack = () => {
    navigate('/onboarding/step-2');
  };

  return (
    <div className="w-full max-w-[640px] mt-10 animate-in fade-in duration-500">
      <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight">
        Quais áreas de serviço seu escritório oferece?
      </h1>
      <p className="text-[16px] text-[#494949] mt-2 leading-relaxed">
        As áreas selecionadas estarão disponíveis em todos os fluxos de criação de demandas, tickets e documentos.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        {availableAreas.map((area) => {
          const isSelected = selectedAreas.includes(area.id);
          return (
            <div 
              key={area.id}
              onClick={() => toggleArea(area.id)}
              className={clsx(
                "rounded-xl p-5 cursor-pointer transition-all duration-200 border-[1.5px] relative overflow-hidden group",
                isSelected 
                  ? "border-[#10677F] bg-[#F1FBFD] shadow-sm" 
                  : "border-[#C6C7C7] bg-[#FFFFFF] hover:border-[#37A5C3] hover:bg-[#F7FCFE]"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={clsx(
                  "w-5 h-5 rounded border mt-0.5 flex items-center justify-center transition-colors flex-shrink-0",
                  isSelected ? "bg-[#10677F] border-[#10677F]" : "border-[#C6C7C7] bg-white group-hover:border-[#37A5C3]"
                )}>
                  {isSelected && <iconify-icon icon="solar:check-read-linear" style={{ color: 'white', fontSize: '14px' }}></iconify-icon>}
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <iconify-icon icon={area.icon} style={{ fontSize: '24px', color: isSelected ? '#10677F' : '#9B9B9B' }}></iconify-icon>
                    <span className="text-[16px] font-semibold text-[#1E1E1E]">{area.id}</span>
                  </div>
                  <span className="text-[12px] text-[#727272] leading-snug">{area.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-2 items-start text-[#727272] bg-[#F7F9FA] p-3 rounded-lg border border-[#E5E7EB]">
         <iconify-icon icon="solar:info-circle-linear" style={{ fontSize: '18px', marginTop: '2px', color: '#9B9B9B' }}></iconify-icon>
         <span className="text-[14px]">
           Caso a área de atuação não esteja listada, o gestor poderá criá-la após o onboarding em seu acesso.
         </span>
      </div>

      <div className="mt-6">
        <span className="text-[14px] font-medium text-[#10677F]">
          {selectedAreas.length} área(s) selecionada(s)
        </span>
        <div className="w-full h-1 bg-[#DCEBEF] rounded-full mt-2 overflow-hidden flex">
          <div 
            className="h-full bg-[#10677F] transition-all duration-300 rounded-full"
            style={{ width: `${(selectedAreas.length / availableAreas.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 border-t border-[#E5E7EB] pt-8">
        <button 
          onClick={handleBack}
          className="h-12 px-6 rounded-lg border border-[#C6C7C7] text-[#494949] font-medium flex items-center gap-2 hover:bg-[#FFFFFF] transition-colors"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" style={{ fontSize: '20px' }}></iconify-icon>
          Voltar
        </button>
        
        <button 
          onClick={handleNextClick}
          disabled={selectedAreas.length === 0}
          className={clsx(
            "h-12 px-6 rounded-lg font-medium flex items-center gap-2 transition-all",
            selectedAreas.length > 0 
              ? "bg-[#10677F] hover:bg-[#044A5D] text-white hover:scale-[1.02]" 
              : "bg-[#B4DAE4] text-white cursor-not-allowed"
          )}
        >
          Próximo — Pendências Padrão
          <iconify-icon icon="solar:alt-arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
        </button>
      </div>

      {/* Monoespecialista Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-[#FFFFFF] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-8 max-w-[480px] w-full relative z-10 animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-center mb-5">
              <iconify-icon icon="solar:danger-circle-bold" style={{ fontSize: '48px', color: '#D18100' }}></iconify-icon>
            </div>
            
            <h3 className="text-[24px] font-semibold text-[#1E1E1E] tracking-tight text-center">
              Você selecionou apenas uma área
            </h3>
            
            <p className="text-[16px] text-[#494949] text-center mt-3 leading-relaxed">
              Isso configura seu escritório como monoespecialista. Todos os fluxos serão restritos à área <strong className="text-[#10677F]">{selectedAreas[0]}</strong>. Você pode adicionar mais áreas depois nas configurações.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              <button 
                onClick={proceedToNext}
                className="w-full bg-[#10677F] hover:bg-[#044A5D] text-white h-12 rounded-lg font-medium text-[15px] transition-colors"
              >
                Confirmar — sou monoespecialista
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-white hover:bg-[#F1FBFD] border border-[#10677F] text-[#10677F] h-12 rounded-lg font-medium text-[15px] transition-colors"
              >
                Voltar e adicionar mais
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}