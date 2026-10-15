export default function OndeEstamos() {
  const cities = [
    "Barreiras", "Luís Eduardo Magalhães", "São Desidério", 
    "Formosa do Rio Preto", "Santa Maria da Vitória", "Correntina",
    "Bom Jesus da Lapa", "Riachão das Neves", "Cotegipe", "Cristópolis"
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <iconify-icon icon="solar:map-point-bold" width="64" height="64" className="text-orange-500 mb-6"></iconify-icon>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Nossa Cobertura</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A Provider Mais Fibra está em constante expansão. Confira as cidades onde já entregamos a melhor conexão do Oeste da Bahia.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Cidades Atendidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-default">
                  <iconify-icon icon="solar:routing-3-bold" width="24" height="24" className="text-orange-500"></iconify-icon>
                  <span className="font-bold text-slate-800">{city}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-8 bg-slate-900 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Sua cidade não está na lista?</h3>
              <p className="text-slate-300 mb-6">Entre em contato para saber sobre nossa expansão ou consultar viabilidade em áreas rurais.</p>
              <a href="https://wa.me/5577998444757" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" width="20" height="20"></iconify-icon>
                Consultar Viabilidade
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}