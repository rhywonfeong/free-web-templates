import React, { useState } from 'react';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

export default function TrialForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="aula-experimental" className="relative py-24 border-y border-[#2B3045] overflow-hidden">
      {/* Background Image Setup mimicking requested reference style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80" 
          alt="Dojo Background" 
          className="w-full h-full object-cover object-center grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-[#0B0D14]/80"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <SectionLabel>Experimente Sem Compromisso</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
            Agende sua aula.<br/>
            É por nossa conta.
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed max-w-md">
            Não precisa ter experiência. Não precisa ter condicionamento físico. Só precisa aparecer com vontade. Nossa aula é 100% gratuita.
          </p>
          
          <ul className="space-y-4 text-sm font-semibold mb-10">
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#E8193C] text-xl"></iconify-icon> Aula completa sem custo</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#E8193C] text-xl"></iconify-icon> Kimono disponível para o dia</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#E8193C] text-xl"></iconify-icon> Avaliação com o professor</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#E8193C] text-xl"></iconify-icon> Sem pressão. Sem compromisso.</li>
          </ul>
        </div>

        {/* Right Form Card - Using solid dark styling as per rigid design system rules */}
        <div className="bg-[#12151F] border border-[#2B3045] p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#E8193C]"></div>
          
          <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-center">Reserve seu horário</h3>

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <iconify-icon icon="solar:check-circle-bold" className="text-6xl text-[#C5F500] mb-4"></iconify-icon>
              <h4 className="text-xl font-bold uppercase mb-2">Solicitação Enviada!</h4>
              <p className="text-[#94A3B8] text-sm">Nossa equipe entrará em contato via WhatsApp em até 2 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Nome Completo *</label>
                <input required type="text" className="w-full bg-[#0B0D14] border border-[#2B3045] px-4 py-3 text-white focus:outline-none focus:border-[#E8193C] transition-colors" placeholder="Digite seu nome" />
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">WhatsApp *</label>
                  <input required type="tel" className="w-full bg-[#0B0D14] border border-[#2B3045] px-4 py-3 text-white focus:outline-none focus:border-[#E8193C] transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Idade</label>
                  <select className="w-full bg-[#0B0D14] border border-[#2B3045] px-4 py-3 text-white focus:outline-none focus:border-[#E8193C] transition-colors appearance-none">
                    <option>Adulto (18+)</option>
                    <option>Adolescente (13-17)</option>
                    <option>Criança (5-12)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Modalidade de Interesse</label>
                <select className="w-full bg-[#0B0D14] border border-[#2B3045] px-4 py-3 text-white focus:outline-none focus:border-[#E8193C] transition-colors appearance-none">
                  <option>Não sei ainda / Indeciso</option>
                  <option>Taekwondo</option>
                  <option>Hapkido</option>
                  <option>Gumdo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">Unidade de Preferência</label>
                <select className="w-full bg-[#0B0D14] border border-[#2B3045] px-4 py-3 text-white focus:outline-none focus:border-[#E8193C] transition-colors appearance-none">
                  <option>Barreiros – São José</option>
                  <option>Lisboa – São José</option>
                  <option>Bela Vista – Palhoça</option>
                </select>
              </div>

              <Button variant="accent" size="lg" className="w-full mt-4" type="submit">
                Quero Minha Aula Gratuita
              </Button>
              
              <p className="text-center text-[#6B7280] text-xs mt-4">
                Retornamos em até 2 horas no horário comercial. Seus dados estão protegidos.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}