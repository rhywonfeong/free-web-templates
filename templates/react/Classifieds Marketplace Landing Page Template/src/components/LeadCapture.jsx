import React from 'react';

export default function LeadCapture() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[280px]">
        
        {/* Email Form Block */}
        <div className="bg-white rounded-xl p-8 border border-[#D8DAE0] flex flex-col justify-center shadow-sm">
          <h3 className="text-xl font-semibold text-[#18181A] mb-6 tracking-tight leading-tight">
            Receba nossas ofertas no seu email
          </h3>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Informe seu Nome" 
              className="w-full bg-[#F5F5F6] border border-transparent focus:border-[#D8DAE0] focus:bg-white focus:outline-none rounded-md px-4 py-2.5 text-sm font-light text-[#18181A] transition-colors"
            />
            <input 
              type="email" 
              placeholder="Informe seu E-mail" 
              className="w-full bg-[#F5F5F6] border border-transparent focus:border-[#D8DAE0] focus:bg-white focus:outline-none rounded-md px-4 py-2.5 text-sm font-light text-[#18181A] transition-colors"
            />
            <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm py-2.5 rounded-md transition-colors mt-2">
              CADASTRAR
            </button>
          </form>
        </div>

        {/* Image Promo Block */}
        <div className="bg-[#6B3FA0] rounded-xl overflow-hidden relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80" 
            alt="Pessoa sorrindo com celular" 
            className="w-full h-full object-cover mix-blend-luminosity opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B3FA0] to-transparent mix-blend-multiply"></div>
          {/* Decorative Envelope floating */}
          <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#F5C518] rounded-lg rotate-[-12deg] shadow-lg flex items-center justify-center">
            <iconify-icon icon="solar:letter-bold" width="24" className="text-white"></iconify-icon>
          </div>
        </div>

        {/* Push Notification Block */}
        <div className="bg-[#F5C518] rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mb-4 text-[#A16207]">
              <iconify-icon icon="solar:bell-bing-bold" width="24"></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold text-[#18181A] mb-3 tracking-tight leading-tight">
              Receba promoções direto pelo seu celular.
            </h3>
            <p className="text-sm font-normal text-[#422006] leading-relaxed opacity-90">
              Clique no sininho flutuando no site e depois clique em permitir. Depois disso você vai estar pronto para receber as ofertas dos anunciantes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}