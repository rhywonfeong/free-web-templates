import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-32 bg-neutral-0 border-y border-neutral-100 relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-neutral-50 rounded-l-[100px] -z-10 hidden lg:block opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          <div className="lg:col-span-2">
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Como funciona</span>
            <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
              UM LOOP<br />SIMPLES.<br />TODO DIA.
            </h2>
            <p className="text-base text-neutral-500">
              O Rendiq não exige mudança de cultura — exige apenas 5 minutos no final do turno.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-12 relative">
            
            {/* Connecting Line */}
            <div className="absolute left-[28px] top-[40px] bottom-[40px] w-px bg-neutral-100 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-6 relative group">
              <div className="w-14 h-14 bg-neutral-0 border-2 border-neutral-100 rounded-full flex items-center justify-center font-display text-xl text-neutral-300 z-10 group-hover:border-lime-400 group-hover:text-neutral-900 transition-colors shrink-0">
                01
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">STAFF REGISTRA</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  No final do turno, a equipe abre o app e preenche o que foi produzido e o que sobrou por item. Uma tela, dois campos por linha.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 relative group">
              <div className="w-14 h-14 bg-neutral-0 border-2 border-neutral-100 rounded-full flex items-center justify-center font-display text-xl text-neutral-300 z-10 group-hover:border-lime-400 group-hover:text-neutral-900 transition-colors shrink-0">
                02
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">SISTEMA CALCULA</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Desperdício em R$, CMV estimado e % de perda são calculados automaticamente com base nos custos cadastrados e nas metas do restaurante.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 relative group">
              <div className="w-14 h-14 bg-neutral-900 border-2 border-neutral-900 rounded-full flex items-center justify-center font-display text-xl text-lime-400 z-10 shrink-0">
                03
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">DONO DECIDE</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  O painel mostra verde (margem saudável) ou vermelho (ação necessária) — com contexto: melhorou ou piorou em relação a ontem?
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks