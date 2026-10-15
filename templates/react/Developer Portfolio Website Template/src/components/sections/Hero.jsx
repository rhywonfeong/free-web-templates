import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center relative pt-20">
      {/* Decorative tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#2b6cee]"></span>
        <span className="text-xs font-medium text-slate-300">Доступен для новых проектов</span>
      </div>

      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
        <span className="block text-slate-100">Назарий Шикир</span>
      </h1>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium tracking-tight mb-8 max-w-3xl">
        Full-Stack Engineer & Machine Learning Enthusiast
      </h2>

      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        «Превращаю сложные алгоритмы и ML-модели в красивые, быстрые и интуитивные интерфейсы.»
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a 
          href="#projects"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2b6cee] to-[#1e4eb8] text-white font-medium shadow-[0_0_20px_rgba(43,108,238,0.4)] hover:shadow-[0_0_30px_rgba(43,108,238,0.6)] hover:scale-[1.02] transition-all duration-300 border border-blue-400/30 flex items-center justify-center gap-2 group"
        >
          <span>Посмотреть проекты</span>
          <iconify-icon icon="solar:arrow-right-linear" class="text-xl group-hover:translate-x-1 transition-transform"></iconify-icon>
        </a>
        <a 
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel text-white font-medium hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Связаться со мной</span>
          <iconify-icon icon="solar:letter-linear" class="text-xl"></iconify-icon>
        </a>
      </div>
    </section>
  );
}