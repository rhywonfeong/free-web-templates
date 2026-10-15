const ContactSection = () => {
  return (
    <section id="contato" className="bg-[#F0EFF0] py-24 px-6 border-b border-[#E2E1E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Header & CTAs */}
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-[#E2E1E2] text-[#3D3C3D] text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Onde estamos
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0C0C0C] mb-6 leading-tight">
            100% DIGITAL.<br />SUPORTE<br />HUMANO.
          </h2>
          <p className="text-base text-[#8A898A] max-w-lg mb-10 leading-relaxed">
            Sistema acessível de qualquer lugar do Brasil. Suporte via WhatsApp em horário comercial — sem chatbot, sem ticket.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 text-sm font-semibold text-[#0C0C0C] bg-[#CEFE00] rounded-full hover:bg-[#DEFF4D] transition-colors flex items-center justify-center gap-2">
              <iconify-icon icon="solar:phone-bold" width="20"></iconify-icon>
              FALAR NO WHATSAPP
            </button>
            <button className="px-8 py-4 text-sm font-semibold text-[#0C0C0C] bg-transparent border-2 border-[#0C0C0C] rounded-full hover:bg-[#0C0C0C] hover:text-[#FCFBFC] transition-colors flex items-center justify-center gap-2">
              <iconify-icon icon="solar:letter-bold" width="20"></iconify-icon>
              ENVIAR E-MAIL
            </button>
          </div>

          {/* Contextual decorative image based on attached reference */}
          <div className="relative inline-block mt-4 lg:mt-12 opacity-90 hover:opacity-100 transition-opacity">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/ee49467f-443f-4ef2-993f-df3a37ac355b/37e596cb-80ec-4f5d-9786-5108b0f658ea-Sem-T-tulo-1-1-.png?v=1776570493948" 
              alt="Marca visual Rendiq" 
              className="max-w-[120px] md:max-w-[160px] object-contain drop-shadow-sm" 
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className="flex-1 flex flex-col sm:flex-row gap-8">
          
          {/* Canais */}
          <div className="flex-1 bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] h-fit">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C0C0C] mb-8 flex items-center gap-2">
              <iconify-icon icon="solar:link-minimalistic-bold" className="text-[#8A898A] text-lg"></iconify-icon>
              Canais
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">WhatsApp</span>
                <span className="text-base font-semibold text-[#0C0C0C]">(19) 99999-0000</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">E-mail</span>
                <span className="text-base font-semibold text-[#0C0C0C]">contato@rendiq.com.br</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">Instagram</span>
                <span className="text-base font-semibold text-[#0C0C0C]">@rendiq</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className="flex-1 bg-[#FCFBFC] p-8 rounded-2xl border border-[#E2E1E2] h-fit">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C0C0C] mb-8 flex items-center gap-2">
              <iconify-icon icon="solar:clock-circle-bold" className="text-[#8A898A] text-lg"></iconify-icon>
              Horários
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">Segunda a Sexta</span>
                <span className="text-base font-semibold text-[#0C0C0C]">08H00 – 18H00</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">Sábado</span>
                <span className="text-base font-semibold text-[#0C0C0C]">09H00 – 13H00</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-[#E2E1E2] pb-4 last:border-0 last:pb-0">
                <span className="text-xs text-[#8A898A] uppercase tracking-wider font-semibold">Domingo e Feriados</span>
                <span className="text-base font-semibold text-[#EF4948]">Fechado</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;