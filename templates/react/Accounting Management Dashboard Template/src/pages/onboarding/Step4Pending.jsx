import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useOnboarding } from '../../context/OnboardingContext';

const TASK_DB = {
  'Fiscal': [
    { id: 'f1', label: 'DCTF', badge: 'Mensal' },
    { id: 'f2', label: 'EFD-Contribuições', badge: 'Mensal' },
    { id: 'f3', label: 'SPED Fiscal', badge: 'Mensal' },
    { id: 'f4', label: 'PGDAS-D', badge: 'Mensal' },
    { id: 'f5', label: 'DEFIS', badge: 'Anual' },
    { id: 'f6', label: 'Declaração de IR Pessoa Física', badge: 'Anual', preChecked: false },
  ],
  'Trabalhista': [
    { id: 't2', label: 'eSocial', badge: 'Mensal' },
    { id: 't3', label: 'EFD-REINF', badge: 'Mensal' },
    { id: 't4', label: 'FGTS', badge: 'Mensal' },
  ],
  'Contábil': [
    { id: 'c1', label: 'Balancete', badge: 'Mensal' },
    { id: 'c2', label: 'DRE', badge: 'Anual' },
  ],
  'Societário': [
    { id: 's1', label: 'Renovação de Alvará', badge: 'Anual' },
  ],
  'Departamento Pessoal': [
    { id: 'dp1', label: 'Fechamento de Folha', badge: 'Mensal' },
    { id: 'dp2', label: 'Férias', badge: 'Eventual', preChecked: false },
    { id: 'dp3', label: 'Rescisão', badge: 'Eventual', preChecked: false },
  ],
  'Legalização': [
    { id: 'l1', label: 'Alvará de Funcionamento', badge: 'Anual' },
    { id: 'l2', label: 'Emissão de Certidões', badge: 'Eventual' },
  ]
};

export default function Step4Pending() {
  const navigate = useNavigate();
  const { state, updateState } = useOnboarding();
  const { areas } = state;

  const [selectedTasks, setSelectedTasks] = useState(new Set());
  const [openSections, setOpenSections] = useState(new Set(areas));
  
  // Custom tasks management
  const [customTasks, setCustomTasks] = useState({});
  const [addingCustomTask, setAddingCustomTask] = useState(null); // stores area name
  const [newCustomLabel, setNewCustomLabel] = useState('');

  useEffect(() => {
    if (!areas || areas.length === 0) {
      navigate('/onboarding/step-3');
      return;
    }

    const initialTasks = new Set();
    areas.forEach(area => {
      const tasks = TASK_DB[area] || [];
      tasks.forEach(t => {
        if (t.preChecked !== false) initialTasks.add(t.id);
      });
    });
    setSelectedTasks(initialTasks);
  }, [areas, navigate]);

  const toggleTask = (taskId) => {
    setSelectedTasks(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return next;
    });
  };

  const toggleSection = (area) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });
  };

  const handleSaveCustomTask = (area) => {
    if (!newCustomLabel.trim()) {
      setAddingCustomTask(null);
      return;
    }
    
    const newId = `custom_${Date.now()}`;
    const newTask = { id: newId, label: newCustomLabel.trim(), badge: 'Personalizado' };
    
    setCustomTasks(prev => ({
      ...prev,
      [area]: [...(prev[area] || []), newTask]
    }));
    
    setSelectedTasks(prev => new Set([...prev, newId]));
    setAddingCustomTask(null);
    setNewCustomLabel('');
  };

  const handleSkip = () => {
    updateState({ pendencias: 'PULADO' });
    navigate('/onboarding/step-5');
  };

  const handleNext = () => {
    updateState({ pendencias: 'CONFIGURADO' });
    navigate('/onboarding/step-5');
  };

  const handleBack = () => {
    navigate('/onboarding/step-3');
  };

  return (
    <div className="w-full max-w-[720px] mt-10 animate-in fade-in duration-500">
      <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight">
        Configure as pendências que sua equipe poderá solicitar
      </h1>
      <p className="text-[16px] text-[#494949] mt-2 leading-relaxed">
        As pendências abaixo foram sugeridas com base nas áreas que você selecionou. Você pode desativar as que não se aplicam ou adicionar tipos personalizados.
      </p>

      <div className="bg-[#F1FBFD] border border-[#B4DAE4] rounded-lg p-3.5 mt-6 flex gap-2 items-start text-[#116E88]">
        <iconify-icon icon="solar:info-circle-linear" style={{ fontSize: '18px', marginTop: '2px' }}></iconify-icon>
        <span className="text-[13px] leading-snug font-medium">
          Você poderá editar ou adicionar mais pendências pós onboarding se preferir.
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {areas && areas.map(area => {
          const baseTasks = TASK_DB[area] || [];
          const areaCustomTasks = customTasks[area] || [];
          const allTasks = [...baseTasks, ...areaCustomTasks];
          
          if (allTasks.length === 0 && !addingCustomTask) return null;
          
          const isOpen = openSections.has(area);
          const selectedInArea = allTasks.filter(t => selectedTasks.has(t.id)).length;

          return (
            <div key={area} className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
              {/* Header */}
              <div 
                onClick={() => toggleSection(area)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-[#F7F9FA] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F1FBFD] flex items-center justify-center">
                    <iconify-icon icon="solar:folder-with-files-bold" style={{ color: '#10677F', fontSize: '18px' }}></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1E1E1E]">{area}</h3>
                    <span className="text-[12px] text-[#727272]">{selectedInArea} de {allTasks.length} selecionadas</span>
                  </div>
                </div>
                <iconify-icon 
                  icon={isOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} 
                  style={{ color: '#9B9B9B', fontSize: '20px' }}
                ></iconify-icon>
              </div>

              {/* Body */}
              {isOpen && (
                <div className="border-t border-[#E5E7EB] bg-[#FAFCFD]">
                  <div className="p-2 flex flex-col gap-1">
                    {allTasks.map(task => {
                      const isChecked = selectedTasks.has(task.id);
                      return (
                        <div 
                          key={task.id} 
                          onClick={() => toggleTask(task.id)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-[#F1FBFD] rounded-lg cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className={clsx("text-[14px]", isChecked ? "text-[#1E1E1E] font-medium" : "text-[#727272]")}>
                              {task.label}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="bg-[#F1FBFD] text-[#116E88] border border-[#B4DAE4] px-2 py-0.5 rounded text-[11px] font-medium uppercase tracking-wider min-w-[70px] text-center">
                              {task.badge}
                            </span>
                            
                            {/* Toggle Switch */}
                            <div className={clsx(
                              "w-[34px] h-[18px] rounded-full flex items-center px-0.5 transition-colors duration-200", 
                              isChecked ? "bg-[#2D8654]" : "bg-[#C6C7C7]"
                            )}>
                              <div className={clsx(
                                "w-3.5 h-3.5 bg-white rounded-full transition-transform duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)]", 
                                isChecked ? "translate-x-[16px]" : "translate-x-0"
                              )}></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Inline Add Custom Task */}
                  {addingCustomTask === area ? (
                    <div className="p-3 bg-[#F1FBFD] border-t border-[#E5E7EB] flex items-center gap-2">
                      <input
                        type="text"
                        autoFocus
                        className="flex-1 bg-white border border-[#B4DAE4] rounded px-3 py-1.5 text-[13px] outline-none focus:border-[#10677F] shadow-sm"
                        placeholder="Nome da nova pendência..."
                        value={newCustomLabel}
                        onChange={e => setNewCustomLabel(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') handleSaveCustomTask(area);
                          if (e.key === 'Escape') setAddingCustomTask(null);
                        }}
                      />
                      <button 
                        onClick={() => handleSaveCustomTask(area)} 
                        className="bg-[#10677F] text-white px-3 py-1.5 rounded text-[13px] font-medium hover:bg-[#044A5D] transition-colors"
                      >
                        Salvar
                      </button>
                      <button 
                        onClick={() => setAddingCustomTask(null)} 
                        className="text-[#727272] px-2 py-1.5 text-[13px] hover:text-[#1E1E1E]"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setAddingCustomTask(area); setNewCustomLabel(''); }}
                      className="w-full text-left px-4 py-3 text-[#10677F] text-[13px] font-medium hover:bg-[#F1FBFD] border-t border-[#E5E7EB] transition-colors flex items-center gap-2"
                    >
                      <iconify-icon icon="solar:add-circle-linear" style={{ fontSize: '16px' }}></iconify-icon>
                      Adicionar tipo personalizado
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedTasks.size === 0 && (
        <div className="bg-[#FFF9F9] border border-[#FFC7C7] rounded-lg p-3.5 mt-6 flex gap-2 items-start">
          <iconify-icon icon="solar:danger-triangle-bold" style={{ color: '#C92B2B', fontSize: '16px', marginTop: '2px' }}></iconify-icon>
          <span className="text-[13px] text-[#C92B2B] font-medium leading-snug">
            Sem pendências ativas, seus contadores não conseguirão criar demandas recorrentes para clientes nestas áreas.
          </span>
        </div>
      )}

      <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#E5E7EB]">
        <button 
          onClick={handleBack}
          className="h-12 px-6 rounded-lg border border-[#C6C7C7] text-[#494949] font-medium flex items-center gap-2 hover:bg-[#FFFFFF] transition-colors"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" style={{ fontSize: '20px' }}></iconify-icon>
          Voltar
        </button>
        
        <div className="flex gap-3">
          <button 
            onClick={handleSkip}
            className="h-12 px-6 rounded-lg text-[#727272] font-medium hover:bg-[#E5E7EB] transition-colors relative group"
          >
            Pular este passo
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-[#1E1E1E] text-white text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Você poderá configurar depois
            </div>
          </button>
          
          <button 
            onClick={handleNext}
            className="h-12 px-6 rounded-lg bg-[#10677F] hover:bg-[#044A5D] text-white font-medium flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            Próximo — Revisar configuração
            <iconify-icon icon="solar:alt-arrow-right-linear" style={{ fontSize: '20px' }}></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
}