import { services } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Uzmanlık Alanlarımız</h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Dijital varlıklarınızı arama motorlarında üst sıralara taşımak için modern, veri odaklı ve etik SEO stratejileri uyguluyoruz. İhtiyacınıza özel çözümlerimizi inceleyin.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-16 bg-slate-50 flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          
          {/* CTA Module */}
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-indigo-600/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Hangi hizmetin size uygun olduğundan emin değil misiniz?</h2>
              <p className="text-indigo-100 mb-8">
                Mevcut durumunuzu analiz edelim ve size en uygun büyüme yol haritasını birlikte çıkaralım. İlk değerlendirme görüşmesi tamamen ücretsizdir.
              </p>
              <Button as={Link} to="/iletisim" variant="secondary" size="lg" className="text-indigo-600">
                Ücretsiz Görüşme Planla
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;