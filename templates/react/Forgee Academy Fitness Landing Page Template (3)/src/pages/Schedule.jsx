import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20 px-6">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors text-sm uppercase tracking-widest">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
          Voltar
        </Link>
        
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-4">
          Ação <br className="hidden md:block"/>Requer <span className="text-[#E8280D]">Compromisso.</span>
        </h1>
        <p className="text-xl text-neutral-400 mb-12">Agende sua visita gratuita e conheça o espaço desenhado para quem treina com intenção.</p>

        <div className="bg-[#131313] border border-white/10 p-8 md:p-12 rounded-3xl">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Nome Completo</label>
                <input 
                  type="text" 
                  className="bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8280D] transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-medium">WhatsApp</label>
                <input 
                  type="tel" 
                  className="bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8280D] transition-colors"
                  placeholder="(19) 90000-0000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Objetivo Principal</label>
              <select className="bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E8280D] transition-colors appearance-none">
                <option>Hipertrofia & Força</option>
                <option>Condicionamento & Emagrecimento</option>
                <option>Performance Esportiva</option>
                <option>Recuperação & Mobilidade</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Melhor horário para visita</label>
              <div className="grid grid-cols-3 gap-3">
                {['Manhã (06h-12h)', 'Tarde (12h-18h)', 'Noite (18h-22h)'].map(period => (
                  <button key={period} type="button" className="bg-[#0A0A0A] border border-white/10 hover:border-[#E8280D] text-xs md:text-sm py-3 rounded-lg transition-colors">
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-[#E8280D] hover:bg-[#CC1F00] text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,40,13,0.3)]">
              Confirmar Agendamento
            </button>
            <p className="text-center text-xs text-neutral-500 mt-2">Nossa equipe entrará em contato para confirmar o horário exato.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;