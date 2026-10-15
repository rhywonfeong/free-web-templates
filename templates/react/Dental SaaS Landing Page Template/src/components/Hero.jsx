export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
          <iconify-icon icon="solar:stars-linear"></iconify-icon>
          <span>A plataforma que redefine a gestão clínica</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 text-balance mx-auto max-w-5xl leading-tight">
          Deixe o caos para trás. <br className="hidden md:block" />
          <span className="text-blue-600">Assuma o controle profissional.</span>
        </h1>
        
        <p className="mt-6 text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-normal text-balance">
          O ServyOdonto não é apenas uma agenda digital. É um sistema operacional odontológico completo, construído para organizar sua rotina, elevar a experiência do paciente e escalar a sua clínica com previsibilidade.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demo" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center justify-center gap-2">
            Agendar demonstração
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </a>
          <a href="#tour" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <iconify-icon icon="solar:play-circle-linear"></iconify-icon>
            Ver como funciona
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-400 font-medium">Sem necessidade de cartão de crédito • Implantação guiada</p>

        {/* Hero Mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-b from-slate-200/50 to-transparent rounded-[2rem] blur-sm"></div>
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[400px] lg:h-[600px]">
            {/* Mockup Header */}
            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="w-48 h-6 bg-white border border-slate-200 rounded-md shadow-sm"></div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                <div className="w-6 h-6 rounded-full bg-blue-100"></div>
              </div>
            </div>
            {/* Mockup Body */}
            <div className="flex flex-1 overflow-hidden bg-slate-50/30">
              {/* Sidebar */}
              <div className="hidden md:flex w-16 lg:w-48 border-r border-slate-100 bg-white flex-col py-4 gap-2 px-2 lg:px-4">
                <div className="w-full h-8 bg-blue-50 rounded-md border border-blue-100"></div>
                <div className="w-full h-8 bg-slate-50 rounded-md"></div>
                <div className="w-full h-8 bg-slate-50 rounded-md"></div>
                <div className="w-full h-8 bg-slate-50 rounded-md"></div>
              </div>
              {/* Main Content area */}
              <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                <div className="flex justify-between items-center">
                  <div className="w-32 lg:w-48 h-8 bg-slate-200 rounded-lg"></div>
                  <div className="w-24 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm h-32 flex flex-col justify-between">
                    <div className="w-8 h-8 bg-blue-50 rounded-full"></div>
                    <div className="w-24 h-6 bg-slate-200 rounded-md"></div>
                  </div>
                  <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm h-32 flex flex-col justify-between">
                    <div className="w-8 h-8 bg-emerald-50 rounded-full"></div>
                    <div className="w-24 h-6 bg-slate-200 rounded-md"></div>
                  </div>
                  <div className="hidden lg:flex bg-white border border-slate-100 p-4 rounded-xl shadow-sm h-32 flex-col justify-between">
                    <div className="w-8 h-8 bg-amber-50 rounded-full"></div>
                    <div className="w-24 h-6 bg-slate-200 rounded-md"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-slate-100 rounded-xl shadow-sm p-4">
                  <div className="w-full h-8 bg-slate-100 rounded-md mb-4"></div>
                  <div className="space-y-3">
                    <div className="w-full h-10 bg-slate-50 rounded-md border border-slate-100"></div>
                    <div className="w-full h-10 bg-slate-50 rounded-md border border-slate-100"></div>
                    <div className="w-full h-10 bg-slate-50 rounded-md border border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}