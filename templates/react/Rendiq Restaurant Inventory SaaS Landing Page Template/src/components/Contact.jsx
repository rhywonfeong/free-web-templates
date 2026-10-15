import React from 'react'

const Contact = () => {
  return (
    <section className="py-32 bg-neutral-50 relative">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Onde estamos</span>
            <h2 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6 leading-[1.1]">
              100% DIGITAL.<br />SUPORTE<br />HUMANO.
            </h2>
            <p className="text-base text-neutral-500 max-w-md mb-8">
              Sistema acessível de qualquer lugar do Brasil. Suporte via WhatsApp em horário comercial — sem chatbot, sem ticket.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-neutral-900 text-lime-400 font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                <iconify-icon icon="simple-icons:whatsapp" width="18"></iconify-icon>
                FALAR NO WHATSAPP
              </button>
              <button className="bg-transparent border border-neutral-300 text-neutral-900 font-bold px-6 py-3 rounded-full hover:border-neutral-900 transition-colors text-sm uppercase tracking-wide">
                ENVIAR E-MAIL
              </button>
            </div>
          </div>

          <div className="bg-neutral-0 rounded-[24px] p-10 border border-neutral-100 shadow-sm flex flex-col gap-10">
            
            <div>
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Canais de Contato</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-50 pb-4">
                  <span className="text-sm text-neutral-500 font-medium">WhatsApp</span>
                  <span className="text-sm font-bold text-neutral-900">(19) 99999-0000</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-50 pb-4">
                  <span className="text-sm text-neutral-500 font-medium">E-mail</span>
                  <span className="text-sm font-bold text-neutral-900">contato@rendiq.com.br</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500 font-medium">Instagram</span>
                  <span className="text-sm font-bold text-neutral-900">@rendiq</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Horário de Suporte</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-50 pb-4">
                  <span className="text-sm text-neutral-500 font-medium">Segunda a Sexta</span>
                  <span className="text-sm font-bold text-neutral-900">08H00 – 18H00</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-50 pb-4">
                  <span className="text-sm text-neutral-500 font-medium">Sábado</span>
                  <span className="text-sm font-bold text-neutral-900">09H00 – 13H00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500 font-medium">Domingo e Feriados</span>
                  <span className="text-sm font-bold text-neutral-400">Fechado</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact