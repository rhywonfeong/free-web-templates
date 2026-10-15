import React from 'react';

const MetricsBar = () => {
  const metrics = [
    { label: 'Horário', value: '05H–23H', icon: 'solar:clock-circle-linear' },
    { label: 'Dias', value: '7 DIAS', icon: 'solar:calendar-linear' },
    { label: 'Área', value: '1.800M²', icon: 'solar:ruler-cross-pen-linear' },
    { label: 'Alunos', value: '+1.2K', icon: 'solar:users-group-two-rounded-linear' },
    { label: 'Desde', value: '2018', icon: 'solar:flag-linear' },
  ];

  return (
    <div className="border-y border-white/5 bg-[#0A0A0A] py-8 relative z-20 -mt-10 mx-4 md:mx-8 rounded-2xl md:rounded-none md:mx-0 md:mt-0 backdrop-blur-md md:border-y md:border-x-0 border-white/10 bg-[#131313]/80 md:bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-4 overflow-x-auto hide-scrollbar">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <iconify-icon icon={metric.icon} class="text-[#E8280D] text-lg"></iconify-icon>
                <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">{metric.label}</span>
              </div>
              <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsBar;