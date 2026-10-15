export default function IPTV() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:tv-bold" width="64" height="64" className="text-orange-500 mb-6 drop-shadow-lg"></iconify-icon>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Sua TV por Assinatura Digital</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transforme sua sala em um verdadeiro cinema. Com nossos planos de IPTV, você tem acesso a centenas de canais, filmes e séries para toda a família.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                <iconify-icon icon="solar:videocamera-record-bold" width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">+ de 100 Canais</h3>
              <p className="text-slate-600">Esportes, notícias, documentários e canais infantis em alta definição.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <iconify-icon icon="solar:smartphone-update-bold" width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-telas</h3>
              <p className="text-slate-600">Assista na Smart TV, celular, tablet ou computador. Você escolhe onde e como assistir.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <iconify-icon icon="solar:clapperboard-play-bold" width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Filmes On Demand</h3>
              <p className="text-slate-600">Catálogo atualizado com os melhores lançamentos do cinema para assistir quando quiser.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="https://wa.me/5577998444757" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Consultar Pacotes de IPTV
              <iconify-icon icon="solar:arrow-right-bold" width="20" height="20"></iconify-icon>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}