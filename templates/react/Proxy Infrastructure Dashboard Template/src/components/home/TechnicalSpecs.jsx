import React from 'react';

export default function TechnicalSpecs() {
  const specs = [
    {
      icon: 'solar:bolt-bold-duotone',
      title: 'Milisaniyelik Hassasiyet',
      desc: 'Altın fiyatlarındaki her tick anında sisteminize yansır. Gecikmelere tahammülü olmayan kuyumcular için optimize edilmiştir.'
    },
    {
      icon: 'solar:transfer-horizontal-bold-duotone',
      title: 'Socket.IO & WebSocket',
      desc: 'REST API sınırlarına takılmadan, kalıcı bağlantılar ile gerçek zamanlı (push) veri akışı sağlayın.'
    },
    {
      icon: 'solar:shield-check-bold-duotone',
      title: '%99.99 Uptime Garantisi',
      desc: 'Dağıtık ve yedekli sunucu mimarimiz ile piyasalar açıkken asla veri akışınız kesilmez.'
    }
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Teknik Üstünlük</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Hasfiyat altyapısı, finansal doğruluk ve hız ilkelerine dayanarak sıfırdan inşa edilmiştir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specs.map((spec, idx) => (
          <div key={idx} className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:border-[#E1B552]/30 hover:bg-white/[0.02] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-[#E1B552]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <iconify-icon icon={spec.icon} width="32" height="32" className="text-[#E1B552]"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{spec.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {spec.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}