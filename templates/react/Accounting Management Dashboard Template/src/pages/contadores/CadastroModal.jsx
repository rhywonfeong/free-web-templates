import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useOnboarding } from '../../context/OnboardingContext';

export default function CadastroModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { state } = useOnboarding();
  const [selectedMethod, setSelectedMethod] = useState(null);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (selectedMethod === 'INDIVIDUAL') {
      navigate('/contadores/novo');
    } else if (selectedMethod === 'IMPORTACAO') {
      navigate('/contadores/importar');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="bg-[#FFFFFF] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.16)] p-10 max-w-[600px] w-full relative z-10 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#727272] hover:text-[#1E1E1E] transition-colors rounded-full hover:bg-[#F7F9FA]"
        >
          <iconify-icon icon="solar:close-circle-linear" style={{ fontSize: '24px' }}></iconify-icon>
        </button>
        
        <h2 className="text-[28px] font-semibold text-[#1E1E1E] tracking-tight text-center">
          Como deseja adicionar contadores?
        </h2>
        <p className="text-[15px] text-[#494949] text-center mt-2">
          Escolha o método que melhor se encaixa na sua situação.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* Card Option A */}
          <div 
            onClick={() => setSelectedMethod('INDIVIDUAL')}
            className={clsx(
              "flex flex-col items-center p-7 rounded-xl cursor-pointer transition-all duration-150 relative border-2",
              selectedMethod === 'INDIVIDUAL' 
                ? "border-[#10677F] bg-[#F1FBFD]" 
                : "border-[#C6C7C7] bg-[#FFFFFF] hover:border-[#37A5C3] hover:bg-[#F1FBFD]"
            )}
          >
            {selectedMethod === 'INDIVIDUAL' && (
              <div className="absolute top-3 right-3 bg-[#10677F] text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
                Selecionado
              </div>
            )}
            
            <iconify-icon icon="solar:user-plus-bold" style={{ fontSize: '48px', color: '#10677F', marginBottom: '16px' }}></iconify-icon>
            <h3 className="text-[18px] font-semibold text-[#1E1E1E]">Cadastrar um por um</h3>
            <p className="text-[13px] text-[#494949] text-center mt-2 leading-[18px]">
              Preencha os dados de cada contador individualmente. Ideal para equipes pequenas.
            </p>
            <div className="bg-[#F7F9FA] rounded-md px-3 py-1.5 mt-4">
              <span className="text-[12px] text-[#727272]">Formulário em ~2 minutos</span>
            </div>
          </div>

          {/* Card Option B */}
          <div 
            onClick={() => setSelectedMethod('IMPORTACAO')}
            className={clsx(
              "flex flex-col items-center p-7 rounded-xl cursor-pointer transition-all duration-150 relative border-2",
              selectedMethod === 'IMPORTACAO' 
                ? "border-[#10677F] bg-[#F1FBFD]" 
                : "border-[#C6C7C7] bg-[#FFFFFF] hover:border-[#37A5C3] hover:bg-[#F1FBFD]"
            )}
          >
            {selectedMethod === 'IMPORTACAO' && (
              <div className="absolute top-3 right-3 bg-[#10677F] text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
                Selecionado
              </div>
            )}
            
            <iconify-icon icon="solar:document-add-bold" style={{ fontSize: '48px', color: '#10677F', marginBottom: '16px' }}></iconify-icon>
            <h3 className="text-[18px] font-semibold text-[#1E1E1E]">Importar via planilha</h3>
            <p className="text-[13px] text-[#494949] text-center mt-2 leading-[18px]">
              Baixe o modelo, preencha todos os contadores e envie. Ideal para muitos membros.
            </p>
            <div className="bg-[#F1FBFD] border border-[#DCEBEF] rounded-md px-3 py-1.5 mt-4 flex items-center gap-1">
              <iconify-icon icon="solar:stars-linear" style={{ color: '#10677F', fontSize: '14px' }}></iconify-icon>
              <span className="text-[12px] text-[#116E88]">Cadastre vários de uma vez</span>
            </div>
          </div>
        </div>

        {/* Dynamic Context Block */}
        <div className="mt-5">
          {state.modelo === 'ESPECIALISTA' ? (
            <div className="bg-[#F1FBFD] border border-[#DCEBEF] rounded-lg p-3 flex gap-2 items-start">
              <iconify-icon icon="solar:info-circle-linear" style={{ color: '#10677F', fontSize: '18px', marginTop: '1px' }}></iconify-icon>
              <p className="text-[13px] text-[#116E88] leading-relaxed">
                Seu modelo é <strong className="font-semibold">Especialista</strong>. Cada contador precisará de uma área de atuação definida. Na planilha, a coluna 'Área de Atuação' será obrigatória.
              </p>
            </div>
          ) : (
            <div className="bg-[#F7F9FA] border border-[#E5E7EB] rounded-lg p-3 flex gap-2 items-start">
              <iconify-icon icon="solar:info-circle-linear" style={{ color: '#727272', fontSize: '18px', marginTop: '1px' }}></iconify-icon>
              <p className="text-[13px] text-[#494949] leading-relaxed">
                Seu modelo é <strong className="font-semibold">Generalista</strong>. O campo 'Área de Atuação' não se aplica ao cadastro dos contadores.
              </p>
            </div>
          )}
        </div>

        <button 
          onClick={handleContinue}
          disabled={!selectedMethod}
          className={clsx(
            "w-full h-12 rounded-lg font-medium text-[15px] mt-7 transition-colors",
            selectedMethod 
              ? "bg-[#10677F] hover:bg-[#044A5D] text-white" 
              : "bg-[#B4DAE4] text-white cursor-not-allowed"
          )}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}