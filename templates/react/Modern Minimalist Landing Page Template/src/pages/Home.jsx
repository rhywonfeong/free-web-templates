import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import { services, blogPosts, clientLogos } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50 flex flex-col items-center justify-center min-h-[85vh]">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up text-xs font-medium text-slate-600">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Yeni Müşteri Alımına Açığız
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Veriye Dayalı SEO ile <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Organik Büyümeyi</span> Keşfedin
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Sıralama takıntısı yerine, gerçek iş hedeflerinize ulaşmanızı sağlayan şeffaf, sürdürülebilir ve ROI odaklı SEO stratejileri üretiyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button as={Link} to="/iletisim" size="lg" className="w-full sm:w-auto">
              Ücretsiz Analiz İste
              <iconify-icon icon="solar:arrow-right-linear" width="18" className="ml-2"></iconify-icon>
            </Button>
            <Button as={Link} to="/hizmetler" variant="secondary" size="lg" className="w-full sm:w-auto">
              Hizmetleri İncele
            </Button>
          </div>
        </div>
      </section>

      {/* Tool & Client Ticker Section */}
      <section className="py-10 border-y border-slate-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Kullanılan Araçlar & Uzmanlık</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                <iconify-icon icon={logo.icon} width="28"></iconify-icon>
                <span className="font-medium text-sm hidden sm:block">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Sıralamadan Ziyade Dönüşüm Odaklı Yaklaşım</h2>
              <p className="text-slate-500 text-lg">Web sitenizin teknik altyapısından içerik stratejisine kadar her yönünü ele alan kapsamlı çözümler.</p>
            </div>
            <Button as={Link} to="/hizmetler" variant="outline" className="shrink-0">Tüm Hizmetler</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Value Prop */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-slate-950 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Dark background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Tahmin Etmiyoruz,<br/>Verilerle Yönetiyoruz.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Her kararın arkasında sağlam bir veri analizi yatar. A/B testleri, rakip analizleri ve detaylı log incelemeleri ile büyüme stratejinizi sıfır riskle kurguluyoruz.
              </p>
              <ul className="space-y-4">
                {['Şeffaf Raporlama ve KPI Takibi', 'Modern SEO Araçları ile Derin Analiz', 'Sadece Beyaz Şapka (White-hat) Teknikleri'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative z-10 w-full lg:w-1/3 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-white mb-1">+150%</div>
                <div className="text-sm text-slate-400">Ortalama Trafik Artışı</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mt-8">
                <div className="text-3xl font-semibold text-white mb-1">5+</div>
                <div className="text-sm text-slate-400">Yıllık Uzmanlık Deneyimi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">SEO Kütüphanesi</h2>
            <Link to="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 group">
              Tüm Yazılar
              <span className="transition-transform group-hover:translate-x-1 flex">
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;