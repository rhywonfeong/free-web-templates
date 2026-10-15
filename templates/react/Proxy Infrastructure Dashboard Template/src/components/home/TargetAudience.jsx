import React from 'react';

export default function TargetAudience() {
  const audiences = [
    {
      title: 'Kuyumcular',
      icon: 'solar:shop-bold-duotone',
      features: ['Vitrin Ekranı Entegrasyonu', 'Anlık Kur Hesaplamaları', 'Has ve İşçilikli Fiyatlar']
    },
    {
      title: 'Döviz Büroları',
      icon: 'solar:dollar-bold-duotone',
      features: ['Canlı Tabela Beslemesi', 'Arbitraj Takibi', 'Güvenilir Spread Oranları']
    },
    {
      title: 'Finansal Uygulamalar',
      icon: 'solar:smartphone-update-bold-duotone',
      features: ['Mobil Uygulama APISi', 'Portföy Yönetimi', 'Tarihsel Grafik Verileri']
    }
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#E1B552]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 lg:pr-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Sektörünüz İçin Özel Olarak Geliştirildi</h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            İster vitrin ekranınızı canlı tutmak isteyen bir kuyumcu olun, ister yüz binlerce kullanıcısı olan bir finans uygulamasının yöneticisi. Hasfiyat, tüm ölçeklerdeki veri ihtiyaçlarını karşılar.
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col gap-4">
          {audiences.map((aud, idx) => (
            <div key={idx} className="bg-[#121212]/80 backdrop-blur border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:border-[#E1B552]/40 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0">
                <iconify-icon icon={aud.icon} width="32" height="32" className="text-[#E1B552]"></iconify-icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{aud.title}</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                  {aud.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <iconify-icon icon="solar:check-circle-bold" className="text-[#E1B552]" width="14" height="14"></iconify-icon>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}