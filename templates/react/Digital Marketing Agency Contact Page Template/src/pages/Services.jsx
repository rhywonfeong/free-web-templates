import { services } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Header */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
            Uzmanlık <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800">Alanlarımız</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Tahminlere ve varsayımlara yer yok. Veriye dayalı süreçlerimizle, markanızın dijitalde sürdürülebilir bir şekilde ölçeklenmesini sağlayan hizmetlerimizle tanışın.
          </p>
        </div>
      </section>

      {/* Services Grid (Directory View) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-500"
              >
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-900">
                    <iconify-icon icon={service.icon} width="24"></iconify-icon>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <iconify-icon icon="solar:check-circle-bold" className="text-slate-300"></iconify-icon>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/hizmetler/${service.slug}`} 
                    className="inline-flex justify-center items-center gap-2 w-full bg-slate-50 text-slate-900 py-3.5 rounded-xl font-medium group-hover:bg-slate-900 group-hover:text-white transition-all active:scale-[0.98]"
                  >
                    Detaylı İncele <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                İhtiyacınız olan her şey tek bir planda.
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Hedeflerinize yönelik özel bir strateji haritası çıkaralım. Markanıza özel çözümleri keşfetmek için ücretsiz analiz toplantısı ayarlayın.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  to="/iletisim"
                  className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 hover:scale-105 transition-all shadow-lg"
                >
                  Ücretsiz Analiz Alın
                  <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex justify-center items-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-700 transition-colors"
                >
                  Vaka Çalışmalarını Oku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}