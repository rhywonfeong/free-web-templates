export default function Trabalhe() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:case-minimalistic-bold" width="64" height="64" className="text-orange-500 mb-6"></iconify-icon>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Trabalhe Conosco</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Venha fazer parte do time que mais cresce no Oeste da Bahia. Buscamos talentos apaixonados por tecnologia e excelência no atendimento.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Vagas em Destaque</h2>
            <div className="space-y-4">
              {[
                { title: "Técnico de Instalação", city: "Barreiras - BA", type: "Tempo Integral" },
                { title: "Atendente de Suporte N1", city: "Híbrido / Barreiras", type: "Tempo Integral" },
                { title: "Vendedor Externo", city: "Luís Eduardo Magalhães", type: "Tempo Integral / Comissionado" }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                    <p className="text-slate-500 font-medium">{job.city} • {job.type}</p>
                  </div>
                  <button className="bg-orange-100 text-orange-600 font-bold px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                    Candidatar-se
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl font-black mb-4">Não encontrou a vaga ideal?</h3>
              <p className="text-slate-300 mb-8 text-lg">
                Envie seu currículo para nosso banco de talentos. Estamos sempre em busca de profissionais incríveis para novas oportunidades.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                />
                <button type="submit" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap shadow-lg">
                  Enviar Currículo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}