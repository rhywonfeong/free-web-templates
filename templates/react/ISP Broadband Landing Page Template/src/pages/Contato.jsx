export default function Contato() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:letter-bold" width="64" height="64" className="text-orange-500 mb-6"></iconify-icon>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Fale com a Gente</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Suporte técnico 24 horas, comercial e ouvidoria. Estamos sempre prontos para te atender com agilidade e respeito.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                <iconify-icon icon="simple-icons:whatsapp" width="32" height="32"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-600 mb-4">Atendimento rápido para vendas e suporte financeiro.</p>
                <a href="https://wa.me/5577998444757" className="text-emerald-600 font-bold text-lg hover:underline">(77) 99844-4757</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                <iconify-icon icon="solar:phone-bold" width="32" height="32"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Central de Atendimento</h3>
                <p className="text-slate-600 mb-4">Suporte técnico 24h por dia, 7 dias por semana.</p>
                <span className="text-blue-600 font-bold text-lg">0800 000 0000</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0">
                <iconify-icon icon="solar:map-point-bold" width="32" height="32"></iconify-icon>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Sede Principal</h3>
                <p className="text-slate-600">Rua da Tecnologia, 123 - Centro<br />Barreiras - BA, 47800-000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-3xl font-black text-slate-900 mb-8">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}