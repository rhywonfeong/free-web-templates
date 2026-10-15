export default function Sobre() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:users-group-rounded-bold" width="64" height="64" className="text-orange-500 mb-6"></iconify-icon>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Conectando Histórias</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Somos a Provider Mais Fibra. Nossa missão é levar internet de ultravelocidade e atendimento humano para todo o Oeste da Bahia.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&q=80" 
              alt="Equipe técnica trabalhando" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Nossa Trajetória</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nascemos com o propósito de acabar com as conexões lentas e os suportes robóticos. Investimos constantemente em infraestrutura de fibra óptica de ponta para garantir que sua casa ou empresa nunca fiquem offline.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mais do que cabos e roteadores, entregamos entretenimento, facilidade para home office e estabilidade para os gamers.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-orange-500 mb-2">+12</div>
                <div className="font-bold text-slate-800">Cidades Atendidas</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-orange-500 mb-2">99%</div>
                <div className="font-bold text-slate-800">Uptime da Rede</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}