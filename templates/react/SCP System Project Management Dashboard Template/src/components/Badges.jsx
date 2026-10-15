import React from 'react';

export const StatusBadge = ({ status }) => {
  const config = {
    aberto: { label: 'PARADO', colorClass: 'bg-purple-500/15 text-purple-400 border border-purple-500/20' },
    em_execucao: { label: 'EXECUÇÃO', colorClass: 'bg-[#BFFF00]/15 text-[#BFFF00] border border-[#BFFF00]/20' },
    faturado: { label: 'NF EMITIDA', colorClass: 'bg-amber-500/15 text-amber-400 border border-amber-500/20' },
    pago: { label: 'PAGO', colorClass: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' },
  };

  const current = config[status] || config.aberto;

  return (
    <span className={`px-2.5 py-1 rounded-sm text-[10px] font-semibold tracking-wider ${current.colorClass}`}>
      {current.label}
    </span>
  );
};

export const Semaforo = ({ dias }) => {
  let color = 'bg-[#C8C8C8]'; // Sem prazo
  if (dias !== null) {
    if (dias > 10) color = 'bg-green-500';
    else if (dias > 0) color = 'bg-yellow-500';
    else color = 'bg-red-500';
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
      {dias !== null && <span className="text-xs text-muted">{dias}d</span>}
    </div>
  );
};