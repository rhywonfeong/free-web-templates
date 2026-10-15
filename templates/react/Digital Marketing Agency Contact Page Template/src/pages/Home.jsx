import { Link } from 'react-router-dom';
import { services, testimonials } from '../data/mockData';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-white -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-8 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Yeni: Q3 Büyüme Raporu Yayında
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight">
            Büyümenizi hızlandıran <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              yeni nesil pazarlama.
            </span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl">
            Veriye dayalı stratejiler, performans odaklı kampanyalar ve modern tasarım anlayışıyla dijital varlığınızı bir üst seviyeye taşıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/iletisim"
              className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95"
            >
              Ücretsiz Analiz Alın
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </Link>
            <Link
              to="/hizmetler"
              className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              Hizmetlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 border-y border-gray-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium text-slate-400 mb-6 uppercase tracking-wider">
            Sektörün öncü markaları tarafından güveniliyor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <iconify-icon icon="simple-icons:vercel" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:stripe" width="48"></iconify-icon>
            <iconify-icon icon="simple-icons:linear" width="32"></iconify-icon>
            <iconify-icon icon="simple-icons:notion" width="36"></iconify-icon>
            <iconify-icon icon="simple-icons:spotify" width="36"></iconify-icon>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Ölçeklenebilir Büyüme Çözümleri
              </h2>
              <p className="text-slate-500">
                Tahminlere değil, verilere dayanıyoruz. Markanızın ihtiyaçlarına özel uçtan uca dijital pazarlama süreçleri tasarlıyoruz.
              </p>
            </div>
            <Link to="/hizmetler" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline underline-offset-4">
              Tümünü Gör <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="group flex flex-col p-8 rounded-3xl border border-gray-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-white">
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-slate-800 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon={service.icon} width="28"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <iconify-icon icon="solar:check-circle-linear" className="text-slate-400"></iconify-icon>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/hizmetler/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors mt-auto pt-4 border-t border-slate-100">
                  Detaylı İncele <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <iconify-icon icon="solar:quote-left-bold" width="32" className="text-slate-600 mb-6"></iconify-icon>
                <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-600 to-slate-400 flex items-center justify-center font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.author}</div>
                    <div className="text-slate-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Büyümeye Hazır Mısınız?
              </h2>
              <p className="text-slate-500 mb-6">
                Mevcut dijital stratejinizi analiz edelim ve size özel bir büyüme planı çıkaralım. Üstelik tamamen ücretsiz.
              </p>
              <ul className="space-y-3 mb-8 md:mb-0">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <iconify-icon icon="solar:check-circle-bold" className="text-slate-900"></iconify-icon>
                  Ücretsiz SEO Denetimi
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <iconify-icon icon="solar:check-circle-bold" className="text-slate-900"></iconify-icon>
                  Rakip Analizi
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <iconify-icon icon="solar:check-circle-bold" className="text-slate-900"></iconify-icon>
                  Büyüme Projeksiyonu
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <LeadForm context="home-cta" buttonText="Raporu İste" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}