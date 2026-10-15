import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-neutral-50 py-24 px-6 lg:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content Side */}
        <div className="lg:w-1/2 flex flex-col">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">Como funciona</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-6 leading-tight flex flex-col">
            <span>UM LOOP</span>
            <span>SIMPLES.</span>
            <span>TODO DIA.</span>
          </h2>
          
          <p className="text-sm md:text-base font-body text-neutral-700 mb-12">
            O Rendiq não exige mudança de cultura — exige apenas 5 minutos no final do turno.
          </p>

          <div className="flex flex-col gap-8">
            {[
              { id: '01', title: 'STAFF REGISTRA', desc: 'No final do turno, a equipe abre o app e preenche o que foi produzido e o que sobrou por item. Uma tela, dois campos por linha.' },
              { id: '02', title: 'SISTEMA CALCULA', desc: 'Desperdício em R$, CMV estimado e % de perda são calculados automaticamente com base nos custos cadastrados e nas metas do restaurante.' },
              { id: '03', title: 'DONO DECIDE', desc: 'O painel mostra verde (margem saudável) ou vermelho (ação necessária) — com contexto: melhorou ou piorou em relação a ontem?' }
            ].map((step) => (
              <div key={step.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-neutral-0 border border-neutral-100 flex items-center justify-center text-xs font-label text-neutral-900 z-10">
                    {step.id}
                  </div>
                  {step.id !== '03' && <div className="w-[1px] h-full bg-neutral-100 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="text-sm font-label text-neutral-900 mb-2 uppercase">{step.title}</h3>
                  <p className="text-sm font-body text-neutral-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup Side */}
        <div className="lg:w-1/2 flex justify-center w-full">
          <div className="relative w-[300px] h-[620px] bg-neutral-0 rounded-[32px] p-4 modal-shadow border-[6px] border-neutral-900 flex flex-col">
            {/* Fake status bar */}
            <div className="w-full flex justify-between items-center px-2 pt-1 pb-4">
              <span className="text-[10px] font-medium">9:41</span>
              <div className="flex gap-1">
                <iconify-icon icon="solar:signal-bold" class="text-[10px]"></iconify-icon>
                <iconify-icon icon="solar:wifi-bold" class="text-[10px]"></iconify-icon>
                <iconify-icon icon="solar:battery-charge-bold" class="text-[10px]"></iconify-icon>
              </div>
            </div>
            
            {/* Dashboard UI Mockup */}
            <div className="flex-1 overflow-hidden flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-h2 tracking-tight">Hoje</h4>
                <span className="bg-lime-100 text-green-500 text-[10px] font-label px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> AO VIVO
                </span>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                <span className="text-[10px] font-label text-neutral-500">Desperdício Estimado</span>
                <div className="text-2xl font-display text-neutral-900 mt-1">R$ 142,50</div>
                <div className="text-[10px] text-green-500 mt-2 flex items-center gap-1">
                  <iconify-icon icon="solar:arrow-down-linear"></iconify-icon> 12% vs ontem
                </div>
              </div>

              <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                 <span className="text-[10px] font-label text-red-400">Atenção Crítica</span>
                 <div className="flex justify-between items-end mt-2">
                   <div>
                     <div className="text-sm font-label text-neutral-900">Picanha Bovina</div>
                     <div className="text-xs text-neutral-700">Sobra: 2.4kg</div>
                   </div>
                   <div className="text-sm font-label text-red-400">R$ 96,00</div>
                 </div>
              </div>

              <div className="flex-1 bg-neutral-50 rounded-t-2xl border-t border-x border-neutral-100 p-4">
                <span className="text-[10px] font-label text-neutral-500 mb-3 block">Outros Itens</span>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Arroz Branco', value: 'R$ 4,50', status: 'green' },
                    { name: 'Feijão Preto', value: 'R$ 8,20', status: 'green' },
                    { name: 'Salmão Grelhado', value: 'R$ 32,00', status: 'orange' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-neutral-100 pb-2 last:border-0">
                      <span className="text-xs font-medium text-neutral-900">{item.name}</span>
                      <span className={`text-xs font-label ${item.status === 'green' ? 'text-green-500' : 'text-orange-400'}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Fake home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-neutral-900 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;