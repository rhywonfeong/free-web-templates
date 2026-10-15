export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col overflow-hidden w-full pt-20 relative justify-center">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4 bg-orange-600/20"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/4 bg-orange-900/10"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        
        <div className="lg:col-span-3 flex flex-col justify-between h-[60vh] order-2 lg:order-1">
          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-white/50"></div>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-gray-100">
              SOURCE OF<br />INNER LOGIC<span className="text-orange-500">/</span>
            </h2>
            <p className="text-base text-gray-400 max-w-[200px]">
              Where chaotic minds find structure and boundaries are erased.
            </p>
          </div>

          <div className="bg-gray-100 text-black p-6 rounded-3xl mt-auto w-full max-w-[240px] shadow-2xl hover:scale-105 transition-transform duration-500">
            <div className="flex justify-between items-start mb-8">
              <iconify-icon icon="solar:stars-linear" width="24" height="24" class="w-6 h-6"></iconify-icon>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Efficiency</span>
            </div>
            <div className="text-5xl font-medium tracking-tighter mb-1">85%</div>
            <div className="text-sm font-medium text-gray-600 leading-tight">Flow state retention</div>
          </div>
        </div>

        <div className="lg:col-span-9 relative order-1 lg:order-2">
          <div className="absolute top-0 right-0 z-20 text-right pointer-events-none mix-blend-overlay opacity-80 hidden lg:block">
            <h1 className="text-8xl xl:text-9xl font-medium tracking-tighter leading-[0.85]">
              DESIGN<br />YOUR OWN<br />COGNITION
            </h1>
          </div>

          <div className="aspect-[4/3] lg:aspect-[16/9] overflow-hidden group w-full rounded-sm relative">
            <div className="absolute bottom-0 right-0 p-8 z-30 lg:hidden text-right">
              <h1 className="text-5xl font-medium tracking-tighter leading-none mb-4">
                DESIGN<br />YOUR OWN<br />COGNITION
              </h1>
            </div>

            <div className="absolute bottom-8 left-8 z-30 hidden md:block">
              <div className="glass-panel p-6 rounded-2xl w-64 backdrop-blur-xl border-white/20">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-medium text-white">Reload<br />your process</span>
                  <iconify-icon icon="solar:settings-linear" width="20" height="20" class="w-5 h-5 text-white animate-spin-slow"></iconify-icon>
                </div>
                <p className="text-xs text-gray-300 mt-4 leading-relaxed">
                  We craft adaptive strategies built to grow with your neurodivergent needs.
                </p>
              </div>
            </div>
            
            <a href="#start" className="z-30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group w-20 h-20 border-white border rounded-full absolute right-12 bottom-1/3 -translate-x-1 translate-y-16">
              <iconify-icon icon="solar:arrow-right-up-linear" width="32" height="32" class="w-8 h-8 group-hover:rotate-45 transition-transform duration-300"></iconify-icon>
            </a>
          </div>

          <div className="absolute bottom-[-4rem] right-0 max-w-sm text-right hidden lg:block">
            <p className="text-lg text-gray-400 leading-relaxed">
              We craft bold identities that stand out. From strategy to visual DNA — we help minds redefine, not just refresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}