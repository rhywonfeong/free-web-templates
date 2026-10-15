import React from 'react';

const Contact = () => {
  return (
    <section className="bg-neutral-0 py-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
          <span className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4 block">Onde estamos</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-neutral-900 mb-6 leading-tight flex flex-col">
            <span>100% DIGITAL.</span>
            <span>SUPORTE</span>
            <span>HUMANO.</span>
          </h2>
          <p className="text-sm md:text-base font-body text-neutral-700 mb-8">
            Sistema acessível de qualquer lugar do Brasil. Suporte via WhatsApp em horário comercial — sem chatbot, sem ticket.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-lime-400 text-neutral-900 text-sm font-label px-6 py-3 rounded-full hover:bg-lime-300 transition-colors flex items-center justify-center gap-2">
              <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon> FALAR NO WHATSAPP
            </button>
            <button className="bg-transparent border border-neutral-300 text-neutral-900 text-sm font-label px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors">
              ENVIAR E-MAIL
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div>
            <h3 className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4">Canais</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">WhatsApp</span>
                <span className="text-sm font-body text-neutral-900">(19) 99999-0000</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">E-mail</span>
                <span className="text-sm font-body text-neutral-900">contato@rendiq.com.br</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">Instagram</span>
                <span className="text-sm font-body text-neutral-900">@rendiq</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label text-neutral-500 uppercase tracking-widest mb-4">Horários</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">Segunda a Sexta</span>
                <span className="text-sm font-body text-neutral-900">08H00 – 18H00</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">Sábado</span>
                <span className="text-sm font-body text-neutral-900">09H00 – 13H00</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] font-label text-neutral-500">Domingo e Feriados</span>
                <span className="text-sm font-body text-neutral-900">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;