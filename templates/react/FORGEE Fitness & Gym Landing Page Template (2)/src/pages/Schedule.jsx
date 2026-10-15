import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Schedule() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#111111] pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#E8400A]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <iconify-icon icon="solar:check-read-linear" class="text-[#E8400A] text-4xl"></iconify-icon>
          </div>
          <h2 className="font-display font-black text-4xl uppercase tracking-tighter text-white mb-4">Visita Agendada</h2>
          <p className="text-[#B0B0B0] text-[15px] mb-8 leading-relaxed">
            Seu horário foi reservado. Nossa equipe entrará em contato via WhatsApp para confirmar os detalhes. Traga roupa de treino e tênis adequado.
          </p>
          <Link to="/">
            <Button variant="outline" fullWidth>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-white uppercase tracking-widest text-xs font-bold transition-colors mb-8">
            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Voltar
          </Link>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter text-white mb-4 leading-[1]">
            O Primeiro Passo <span className="text-[#E8400A]">Acontece Aqui.</span>
          </h1>
          <p className="text-[#B0B0B0] text-lg">
            Agende uma visita gratuita, conheça a estrutura e faça um treino experimental.
          </p>
        </div>

        <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#B0B0B0]">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-[#E8400A] transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#B0B0B0]">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-[#E8400A] transition-colors"
                  placeholder="(19) 90000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-[#B0B0B0]">Objetivo Principal</label>
              <select className="w-full bg-[#111111] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-[#E8400A] transition-colors appearance-none">
                <option value="">Selecione um objetivo</option>
                <option value="hypertrophy">Hipertrofia / Ganho de Massa</option>
                <option value="weightloss">Emagrecimento / Condicionamento</option>
                <option value="health">Saúde e Mobilidade</option>
                <option value="performance">Performance Esportiva</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#B0B0B0]">Data de Preferência</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-[#111111] border border-[#2A2A2A] text-[#B0B0B0] px-4 py-3 focus:outline-none focus:border-[#E8400A] transition-colors"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#B0B0B0]">Horário</label>
                <select className="w-full bg-[#111111] border border-[#2A2A2A] text-[#B0B0B0] px-4 py-3 focus:outline-none focus:border-[#E8400A] transition-colors appearance-none">
                  <option value="">Selecione o período</option>
                  <option value="morning">Manhã (06h - 12h)</option>
                  <option value="afternoon">Tarde (12h - 18h)</option>
                  <option value="night">Noite (18h - 22h)</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2A2A]">
              <Button type="submit" variant="primary" fullWidth className="py-5 text-sm">
                Confirmar Agendamento
              </Button>
              <p className="text-center text-[#6B6B6B] text-[11px] mt-4 uppercase tracking-wider">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}