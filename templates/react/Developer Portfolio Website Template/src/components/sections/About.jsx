import React from 'react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Обо мне</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            
            <p className="text-lg text-slate-300 leading-relaxed relative z-10">
              Я — инженер-разработчик с экспертизой в создании сложных архитектур, интеграций и Telegram-ботов. 
              За свою карьеру я успешно реализовал автоматизацию для агробизнеса, создавал персонализированных ботов 
              для известных медиа-личностей (Telegram Stars) и разрабатывал инфраструктурные решения для колледжа.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mt-4 relative z-10">
              В последнее время я сфокусирован на финансовых алгоритмах, торговых ботах и машинном обучении. 
              Я искренне верю, что за <span className="text-white font-medium">мощным бэкендом</span> всегда должен стоять <span className="text-blue-400 font-medium">интуитивный красивый UI</span>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          {/* Abstract visual representation of data/code turning into UI */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 perspective-1000">
            <div className="absolute inset-0 glass-panel rounded-3xl transform rotate-y-12 rotate-x-12 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out flex items-center justify-center p-6 shadow-2xl">
              <div className="w-full h-full border border-white/10 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden">
                <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                <div className="w-full h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mt-auto border border-white/10 flex items-center justify-center">
                  <iconify-icon icon="solar:code-circle-bold-duotone" class="text-4xl text-blue-400/70"></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}