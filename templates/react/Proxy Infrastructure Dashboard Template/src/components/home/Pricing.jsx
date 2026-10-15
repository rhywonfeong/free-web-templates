import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    name: 'Geliştirici',
    description: 'Küçük projeler ve entegrasyon testleri için ideal.',
    price: 'Ücretsiz',
    period: '/aylık',
    features: [
      '10.000 API İstek Limiti',
      'Yalnızca REST API',
      'Standart Gecikme',
      'Topluluk Desteği',
    ],
    cta: 'API Anahtarı Al',
    popular: false,
  },
  {
    name: 'Kuyumcu Pro',
    description: 'Gerçek zamanlı ekranlar ve mağazalar için.',
    price: '₺499',
    period: '/aylık',
    features: [
      'Sınırsız REST API İsteği',
      'Socket.IO & WebSocket Erişimi',
      'Milisaniye Hassasiyeti',
      'Vitrin Ekranı Uyumlu',
      'Öncelikli E-posta Desteği',
    ],
    cta: 'Kayıt Ol',
    popular: true,
  },
  {
    name: 'Kurumsal',
    description: 'Döviz büroları ve finansal uygulamalar için.',
    price: 'Özel',
    period: '',
    features: [
      'Özel Sunucu & IP Tahsisi',
      'Sınırsız WebSocket Bağlantısı',
      'Geçmiş Veri (Historical Data)',
      'SLA Garantisi (%99.99)',
      '7/24 Telefon & WhatsApp Desteği',
    ],
    cta: 'Satışla İletişime Geç',
    popular: false,
  }
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto w-full" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Net ve Şeffaf Fiyatlandırma</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          İşletmenizin ölçeğine en uygun paketi seçin. Sürpriz ücretlendirmeler veya gizli kotalar yok.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div 
            key={tier.name}
            className={clsx(
              "relative bg-[#121212] rounded-2xl p-8 border transition-all duration-300 flex flex-col h-full",
              tier.popular 
                ? "border-[#E1B552] shadow-[0_0_30px_rgba(225,181,82,0.15)] transform md:-translate-y-4" 
                : "border-white/10 hover:border-white/30"
            )}
          >
            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E1B552] text-[#000000] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                En Çok Tercih Edilen
              </div>
            )}
            
            <div className="mb-8 mt-2">
              <h3 className="text-xl font-medium text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400 h-10">{tier.description}</p>
            </div>
            
            <div className="mb-8 flex items-baseline text-white">
              <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
              <span className="text-gray-500 ml-1">{tier.period}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <iconify-icon 
                    icon="solar:check-circle-bold" 
                    className={tier.popular ? "text-[#E1B552] shrink-0 mt-0.5" : "text-gray-500 shrink-0 mt-0.5"} 
                    width="18" 
                    height="18"
                  ></iconify-icon>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => navigate('/dashboard')}
              className={clsx(
                "w-full py-3 rounded-lg font-semibold transition-all duration-300",
                tier.popular 
                  ? "bg-[#E1B552] text-[#000000] hover:bg-[#cfa548] hover:shadow-[0_0_15px_rgba(225,181,82,0.4)]" 
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              )}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}