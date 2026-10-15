import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Booking() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success' });
    }, 1500);
  };

  if (formState.status === 'success') {
    return (
      <div className="flex-grow flex items-center justify-center py-24 px-5">
        <div className="max-w-md w-full text-center bg-[#F9F5EF] p-10 rounded-[20px] border border-[#D5C0A7] shadow-lg">
          <div className="w-20 h-20 bg-[#EDE6DA] rounded-full flex items-center justify-center mx-auto mb-6 text-[#6F725C]">
             <iconify-icon icon="solar:check-circle-linear" width="40"></iconify-icon>
          </div>
          <h2 className="font-editorial text-3xl font-medium text-[#2E2E2E] mb-4">Solicitação Enviada!</h2>
          <p className="font-ui text-[#4A4A4A] mb-8 leading-[1.6]">
            Nossa equipe recebeu seus dados e entrará em contato via WhatsApp em breve para confirmar o horário da sua aula experimental.
          </p>
          <Button to="/" variant="secondary">Voltar ao Início</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow py-16 md:py-24 px-5 max-w-[1000px] mx-auto w-full flex flex-col md:flex-row gap-16">
      
      {/* Informações */}
      <div className="md:w-5/12 flex flex-col">
        <SectionHeading title="Agende Sua Aula" subtitle="Dê o Primeiro Passo" align="left" className="mb-8" />
        <p className="font-ui text-[#4A4A4A] text-lg leading-[1.65] mb-8">
          Preencha o formulário ao lado para solicitar sua aula experimental gratuita ou agendar uma visita ao nosso estúdio.
        </p>
        
        <div className="bg-[#F9F5EF] p-8 rounded-[16px] border border-[#D5C0A7] mt-auto">
          <h4 className="font-editorial text-[#2E2E2E] text-xl mb-4">O que esperar?</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 font-ui text-[#4A4A4A] text-[15px]">
              <iconify-icon icon="solar:clipboard-check-linear" width="24" class="text-[#6F725C] shrink-0"></iconify-icon>
              <span>Avaliação postural rápida inicial.</span>
            </li>
            <li className="flex gap-3 font-ui text-[#4A4A4A] text-[15px]">
              <iconify-icon icon="solar:user-speak-linear" width="24" class="text-[#6F725C] shrink-0"></iconify-icon>
              <span>Bate-papo sobre seus objetivos e limites.</span>
            </li>
            <li className="flex gap-3 font-ui text-[#4A4A4A] text-[15px]">
              <iconify-icon icon="solar:stretching-linear" width="24" class="text-[#6F725C] shrink-0"></iconify-icon>
              <span>Uma aula prática adaptada para você sentir o método na pele.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Formulário */}
      <div className="md:w-7/12 bg-white p-8 md:p-10 rounded-[20px] shadow-sm border border-[#D5C0A7]/40">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-ui text-[#6F725C] text-[13px] font-medium tracking-wide">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              required
              className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-lg px-4 py-3 font-ui text-[#4A4A4A] placeholder:text-[#BEA88A] transition-colors"
              placeholder="Como prefere ser chamado?"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-ui text-[#6F725C] text-[13px] font-medium tracking-wide">WhatsApp</label>
              <input 
                type="tel" 
                id="phone" 
                required
                className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-lg px-4 py-3 font-ui text-[#4A4A4A] placeholder:text-[#BEA88A] transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-ui text-[#6F725C] text-[13px] font-medium tracking-wide">E-mail</label>
              <input 
                type="email" 
                id="email" 
                required
                className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-lg px-4 py-3 font-ui text-[#4A4A4A] placeholder:text-[#BEA88A] transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="goal" className="font-ui text-[#6F725C] text-[13px] font-medium tracking-wide">Qual seu principal objetivo?</label>
            <select 
              id="goal" 
              className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-lg px-4 py-3 font-ui text-[#4A4A4A] transition-colors appearance-none"
            >
              <option value="">Selecione uma opção...</option>
              <option value="alivio_dores">Alívio de dores</option>
              <option value="flexibilidade">Melhora da flexibilidade</option>
              <option value="fortalecimento">Fortalecimento muscular</option>
              <option value="gestacao">Pilates para gestantes</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
             <label htmlFor="message" className="font-ui text-[#6F725C] text-[13px] font-medium tracking-wide">Mensagem (Opcional)</label>
             <textarea 
               id="message" 
               rows="3"
               className="bg-[#F9F5EF] border border-[#D5C0A7] rounded-lg px-4 py-3 font-ui text-[#4A4A4A] placeholder:text-[#BEA88A] transition-colors resize-none"
               placeholder="Conte-nos um pouco mais sobre você..."
             ></textarea>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full mt-4"
            disabled={formState.status === 'submitting'}
          >
            {formState.status === 'submitting' ? 'Enviando...' : 'Solicitar Agendamento'}
          </Button>
          
          <p className="text-center font-ui text-[13px] text-[#6F725C] mt-2">
            Ao enviar, você concorda com nossos termos de privacidade.
          </p>
        </form>
      </div>
    </div>
  );
}