import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Schedule() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    objective: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(3); // Success step
    }, 800);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-md w-full">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-[#888888] hover:text-white text-sm uppercase tracking-widest mb-8 transition-colors"
        >
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Voltar
        </button>

        <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Agendar Visita</h1>
            <p className="text-[#AAAAAA] text-sm">Venha conhecer a estrutura sem compromisso. Preencha os dados abaixo.</p>
          </div>

          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="flex flex-col gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888888] mb-2">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E53935] transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888888] mb-2">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E53935] transition-colors"
                  placeholder="(11) 90000-0000"
                />
              </div>
              <Button type="submit" className="w-full mt-4">Continuar</Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888888] mb-2">Melhor data</label>
                <input 
                  required
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E53935] transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888888] mb-2">Objetivo Principal</label>
                <select 
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E53935] transition-colors appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option value="hipertrofia">Hipertrofia / Força</option>
                  <option value="emagrecimento">Emagrecimento / Condicionamento</option>
                  <option value="saude">Saúde / Qualidade de Vida</option>
                  <option value="performance">Performance Esportiva</option>
                </select>
              </div>
              <div className="flex gap-3 mt-4">
                <Button type="button" variant="secondary" onClick={() => setStep(1)} className="px-4">
                  <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                </Button>
                <Button type="submit" className="flex-grow">Confirmar Agendamento</Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#22C55E]/15 text-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-6">
                <iconify-icon icon="solar:check-circle-bold" class="text-4xl"></iconify-icon>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Agendado!</h2>
              <p className="text-[#AAAAAA] text-sm mb-8">
                Recebemos sua solicitação. Nosso time entrará em contato via WhatsApp para confirmar o horário.
              </p>
              <Button to="/" variant="secondary" className="w-full">Voltar para o Início</Button>
            </div>
          )}

          {/* Progress Indicator */}
          {step < 3 && (
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1A1A1A]">
              <div 
                className="h-full bg-[#E53935] transition-all duration-300"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}