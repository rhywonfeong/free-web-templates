import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/mockData';
import LeadForm from '../components/LeadForm';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Dynamic Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${service.heroImage})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/hizmetler" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-10 transition-colors group">
            <iconify-icon icon="solar:arrow-left-linear" className="group-hover:-translate-x-1 transition-transform"></iconify-icon> Tüm Hizmetler
          </Link>
          
          <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium mb-6 shadow-xl">
                <iconify-icon icon={service.icon} width="18" className="text-blue-400"></iconify-icon> {service.title} Uzmanlığı
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                {service.title.split(' (')[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Çözümleri.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl font-light">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#proje-baslat" className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  Projeyi Başlatın <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                </a>
              </div>
            </div>
            
            {/* Hero Stat Box */}
            <div className="w-full md:w-[340px] bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[2rem] shrink-0 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
               <div className="relative z-10">
                 <div className="text-6xl font-bold tracking-tight text-white mb-3">{service.stat.value}</div>
                 <div className="text-slate-300 text-sm font-medium tracking-wide uppercase">{service.stat.label}</div>
                 <div className="mt-8 pt-6 border-t border-white/10 flex justify-center text-emerald-400 gap-2 items-center text-sm font-medium">
                    <iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon> Kanıtlanmış Büyüme
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Description */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-slate-50 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Neden Bizi Seçmelisiniz?</h2>
              <p className="text-lg text-slate-500 leading-relaxed">{service.longDescription}</p>
           </div>

           {/* Detailed Features Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.detailedFeatures.map((feat, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-100 p-8 md:p-10 rounded-3xl hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6 shadow-sm group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <iconify-icon icon={feat.icon} width="28"></iconify-icon>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">{feat.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">Nasıl Çalışıyoruz?</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-[16.66%] w-[66.66%] h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10"></div>
              
              {service.process.map((step, idx) => (
                <div key={idx} className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-white/5">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Specific Service Lead Form CTA */}
      <section id="proje-baslat" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-200 shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden">
            
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50/50 pointer-events-none"></div>

            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Ücretsiz Danışmanlık
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                {service.title.split(' (')[0]} stratejinizi belirleyelim.
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                Markanızın mevcut durumunu analiz edelim ve sadece size özel bir büyüme reçetesi çıkaralım. Formu doldurun, 24 saat içinde dönüş yapalım.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                    <iconify-icon icon="solar:check-read-linear" width="28"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 tracking-tight">Detaylı Analiz</h4>
                    <p className="text-sm text-slate-500">Mevcut kampanyalarınızın / sitenizin incelenmesi.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                    <iconify-icon icon="solar:pie-chart-2-linear" width="28"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 tracking-tight">Strateji Sunumu</h4>
                    <p className="text-sm text-slate-500">Rakip analizi ve aksiyon planı içeren toplantı.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[420px] bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 relative z-10">
              <LeadForm context={`service-${service.slug}`} buttonText="Strateji Görüşmesi Talep Et" fullForm={true} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}