export default function ProgramsSplit() {
  return (
    <section className="bg-[#F5F5F5] py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 px-4">
          <div>
            <span className="text-xs font-bold text-black uppercase tracking-[0.15em] block mb-4">O que oferecemos</span>
            <h2 className="font-display text-black text-6xl md:text-8xl leading-[0.85] tracking-tighter uppercase m-0">
              DOIS CAMINHOS<br />PARA O TOPO
            </h2>
          </div>
          <p className="text-black font-medium text-lg max-w-sm md:text-right">
            Treine de forma autônoma com nossa estrutura premium ou trabalhe lado a lado com um de nossos coaches.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row min-h-[700px] shadow-2xl shadow-black/10">
          
          {/* Left Side: Yellow */}
          <div className="flex-1 bg-[#CCFF00] relative p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden group">
            {/* Background Word */}
            <div className="absolute font-display text-[20rem] md:text-[30rem] leading-none text-black opacity-10 uppercase tracking-tighter select-none rotate-[-15deg] transform scale-150">
              SOLO
            </div>
            
            {/* Image Card */}
            <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden rotate-[-4deg] group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
                alt="Treino Solo" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay CTA */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                FORGEE STRENGTH
                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-sm"></iconify-icon>
                </span>
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-8 left-8 right-8 text-black text-center md:text-left">
              <p className="font-semibold text-sm uppercase tracking-wider">Acesso total ao espaço • Planilha base</p>
            </div>
          </div>

          {/* Right Side: Black */}
          <div className="flex-1 bg-[#0A0A0A] relative p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden group">
            {/* Background Word */}
            <div className="absolute font-display text-[20rem] md:text-[30rem] leading-none text-white opacity-5 uppercase tracking-tighter select-none rotate-[15deg] transform scale-150">
              COACH
            </div>
            
            {/* Image Card */}
            <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden rotate-[4deg] group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" 
                alt="Personal Training" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay CTA */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                PERSONAL TRAINING
                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-sm"></iconify-icon>
                </span>
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-8 left-8 right-8 text-white text-center md:text-right">
              <p className="font-medium text-[#888888] text-sm uppercase tracking-wider">Sessões 1:1 • Protocolo customizado</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}