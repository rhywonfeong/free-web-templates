export default function Vision() {
  return (
    <section id="vision" className="py-32 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-orange-500">01 — The Gap</span>
            <h3 className="text-5xl font-medium tracking-tight text-white mb-6">
              Intuition meets <br />
              <span className="text-gray-500">Intelligence.</span>
            </h3>
          </div>
          <div className="lg:w-2/3 space-y-12">
            <p className="text-2xl lg:text-3xl text-gray-300 font-light leading-snug">
              Traditional productivity tools force linear thinking on non-linear minds. <span className="text-white font-medium">SoulShell</span> adapts to you. It's an exoskeleton for your creativity, providing the structure you need without stifling the chaos you love.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="border-l border-white/20 pl-6 transition-colors duration-300 hover:border-orange-500">
                <iconify-icon icon="solar:cpu-linear" width="32" height="32" class="mb-4 w-8 h-8 text-orange-500"></iconify-icon>
                <h4 className="text-xl font-medium text-white mb-2">Neuro-Adaptive</h4>
                <p className="text-lg text-gray-400">The interface morphs based on your energy levels and focus state.</p>
              </div>
              <div className="border-l border-white/20 pl-6 transition-colors duration-300 hover:border-orange-500">
                <iconify-icon icon="solar:layers-linear" width="32" height="32" class="mb-4 w-8 h-8 text-orange-500"></iconify-icon>
                <h4 className="text-xl font-medium text-white mb-2">Contextual Memory</h4>
                <p className="text-lg text-gray-400">AI that remembers the 'why' behind your ideas, not just the 'what'.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}