import React from 'react';

const workflowSteps = [
  { 
    icon: "solar:phone-calling-linear", 
    title: "Cały czas na łączach", 
    desc: "Masz pod sobą dedykowany zespół programistów. Jesteśmy dostępni, aby na bieżąco omawiać postępy i reagować na twoje potrzeby." 
  },
  { 
    icon: "solar:document-text-linear", 
    title: "Cotygodniowe raporty", 
    desc: "Co tydzień otrzymujesz od nas jasny raport z postępów prac. Od razu widzisz efekty naszego kodowania na serwerach testowych." 
  },
  { 
    icon: "solar:calendar-mark-linear", 
    title: "Klarowny harmonogram", 
    desc: "Mówimy wprost o każdych terminach, kiedy i co wdrażamy. Mamy spójną i przejrzystą ścieżkę naszej współpracy." 
  },
  { 
    icon: "solar:tuning-square-linear", 
    title: "Elastyczność", 
    desc: "Jesteśmy gotowi modyfikować aplikację w trakcie jej budowy, jeśli zmienią się potrzeby twojego biznesu. Pamiętaj jednak, że każda dodatkowa modyfikacja wykraczająca poza pierwotny plan może wiązać się z przesunięciem terminu wdrożenia." 
  }
];

const MarketingGrid = () => {
  return (
    <section className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            5. Przejrzystość projektu: Jak pracujemy?
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Dla nas ten projekt to nie jest "zlecenie i zapomnij". Od momentu startu i analizy całej logistyki twojej sieci, jesteśmy w kontakcie 24/7.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 whitespace-nowrap">
          <iconify-icon icon="solar:shield-check-linear"></iconify-icon>
          Pełna transparentność działań
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workflowSteps.map((step, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-2xl hover:bg-zinc-800/40 transition-colors border-white/5 group flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-colors">
              <iconify-icon icon={step.icon} width="24"></iconify-icon>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingGrid;