import React, { useState } from 'react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'hipertrofia',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-[#0A0A0A]">
        <div className="max-w-md w-full glass-panel p-10 rounded-2xl text-center border border-[#00F9E4]/30 shadow-[0_0_50px_rgba(0,249,228,0.1)]">
          <div className="w-20 h-20 bg-[#00F9E4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <iconify-icon icon="solar:check-circle-bold" class="text-5xl text-[#00F9E4]"></iconify-icon>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">Visita Solicitada!</h2>
          <p className="text-[#9A9A9A] mb-8">
            Nossa equipe entrará em contato pelo WhatsApp em até 2 horas para confirmar seu horário.
          </p>
          <Link to="/">
            <Button variant="secondary" className="w-full">VOLTAR PARA HOME</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#0A0A0A] relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1C1C1C] to-transparent z-0"></div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-[#9A9A9A] hover:text-[#00F9E4] transition-colors mb-12 text-sm font-medium">
            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 uppercase">
            Sua vaga no <span className="text-[#00F9E4]">espaço.</span>
          </h1>
          <p className="text-[#9A9A9A] text-lg mb-12">
            Agende uma visita para conhecer a estrutura, entender nossa metodologia e fazer um treino experimental gratuito. Sem compromisso, apenas treino.
          </p>

          <div className="space-y-8 hidden md:block">
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
                 <iconify-icon icon="solar:user-speak-rounded-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
               </div>
               <div>
                 <h4 className="text-white font-medium mb-1">Avaliação Rápida</h4>
                 <p className="text-[#6B6B6B] text-sm">Conversa de 10 min para entender seu histórico e objetivos.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
                 <iconify-icon icon="solar:dumbbell-linear" class="text-xl text-[#00F9E4]"></iconify-icon>
               </div>
               <div>
                 <h4 className="text-white font-medium mb-1">Treino Guiado</h4>
                 <p className="text-[#6B6B6B] text-sm">Sinta o equipamento e a atmosfera na prática.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#121212] p-8 md:p-10 rounded-xl border border-[#2A2A2A]">
          <h3 className="text-xl font-semibold text-white mb-6">Preencha seus dados</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#9A9A9A] mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9E4] transition-colors"
                placeholder="Ex: João Silva"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#9A9A9A] mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9E4] transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#9A9A9A] mb-2">Data de Preferência</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-[#9A9A9A] focus:text-white focus:outline-none focus:border-[#00F9E4] transition-colors"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-[#9A9A9A] mb-2">Principal Objetivo</label>
              <select 
                id="goal" 
                name="goal" 
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9E4] transition-colors appearance-none"
              >
                <option value="hipertrofia">Ganho de Massa (Hipertrofia)</option>
                <option value="emagrecimento">Emagrecimento / Definição</option>
                <option value="condicionamento">Condicionamento Físico</option>
                <option value="saude">Saúde e Longevidade</option>
              </select>
            </div>

            <Button 
              type="submit" 
              className="w-full mt-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon>
                  ENVIANDO...
                </span>
              ) : 'CONFIRMAR AGENDAMENTO'}
            </Button>
            
            <p className="text-center text-[#6B6B6B] text-xs mt-4">
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;