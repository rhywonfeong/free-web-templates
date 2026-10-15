import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="relative mt-32 border-t border-white/10 bg-[#0b0f19]/80 backdrop-blur-3xl overflow-hidden py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Давайте создадим что-то крутое
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
          Открыт для новых вызовов, интересных проектов и коллабораций. Свяжитесь со мной удобным для вас способом.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a 
            href="https://t.me/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel flex items-center justify-center gap-3 text-white font-medium hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(43,108,238,0.2)] group"
          >
            <iconify-icon icon="simple-icons:telegram" class="text-2xl text-blue-400 group-hover:scale-110 transition-transform"></iconify-icon>
            <span>Написать в Telegram</span>
          </a>
          
          <a 
            href="mailto:contact@example.com" 
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel flex items-center justify-center gap-3 text-white font-medium hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] group"
          >
            <iconify-icon icon="solar:letter-bold-duotone" class="text-2xl text-slate-300 group-hover:scale-110 transition-transform"></iconify-icon>
            <span>Email</span>
          </a>
          
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-4 rounded-2xl glass-panel flex items-center justify-center text-white hover:-translate-y-1 transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <iconify-icon icon="simple-icons:github" class="text-2xl text-slate-300 group-hover:text-white transition-colors"></iconify-icon>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Назарий Шикир. Все права защищены.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Сделано с <iconify-icon icon="solar:heart-bold" class="text-blue-500"></iconify-icon> и React
          </p>
        </div>
      </div>
    </footer>
  );
}