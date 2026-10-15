export default function Features() {
  return (
    <section className="bg-[#080808] pt-32 pr-6 pb-32 pl-6" id="features">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-none">
            Structure for the <br />
            <span className="gradient-text">Unstructured.</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-md mt-6 md:mt-0">
            A suite of tools designed to catch ideas before they dissolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-10 relative overflow-hidden group">
            <div className="bg-gradient-to-b from-transparent to-black/80 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a53fc7e2-81f3-46b4-af93-f9e485b7714d_1600w.png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Flow" />
            
            <div className="z-20 flex flex-col h-full relative justify-between">
              <div className="w-full flex justify-between">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">CORE ENGINE</span>
                <iconify-icon icon="solar:bolt-linear" width="24" height="24" class="text-white w-6 h-6"></iconify-icon>
              </div>
              <div>
                <h4 className="text-3xl font-medium text-white mb-3">Fluid Workspaces</h4>
                <p className="text-xl text-gray-300 max-w-lg">
                  Canvases that expand infinitely. Connect notes, tasks, and moods in a spatial environment that mimics your neural pathways.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
            <iconify-icon icon="solar:cpu-linear" width="40" height="40" class="w-10 h-10 mb-6 text-orange-500"></iconify-icon>
            <div>
              <h4 className="text-2xl font-medium text-white mb-2">AI Mirror</h4>
              <p className="text-lg text-gray-400">Reflects your thoughts back to you with added clarity and actionable steps.</p>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden bg-orange-600">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <iconify-icon icon="solar:shield-check-linear" width="40" height="40" class="text-black w-10 h-10 mb-6 relative z-10"></iconify-icon>
            <div className="relative z-10">
              <h4 className="text-2xl font-medium text-black mb-2">Dopamine Guard</h4>
              <p className="text-lg text-black/70">Gamified completion systems that reward progress without burnout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}