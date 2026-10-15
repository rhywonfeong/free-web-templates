import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <iconify-icon icon="solar:chart-square-bold-duotone" width="24" height="24" style={{ color: '#E1B552' }}></iconify-icon>
            <span className="font-semibold tracking-tight text-lg text-white">HasFiyat</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Küresel piyasalara ait gerçek zamanlı, yüksek doğruluklu fiyat veri API'si. Sürekli güncellenen finansal verilere anında erişin.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4 text-sm">Ürünler</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Kripto Fiyatları</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Döviz Kurları (Forex)</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Emtia Verileri</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Fiyatlandırma</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4 text-sm">Geliştiriciler</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Dokümantasyon</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">API Referansı</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Sistem Durumu</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4 text-sm">Şirket</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">Kariyer</a></li>
            <li><a href="#" className="hover:text-[#E1B552] transition-colors">İletişim</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} HasFiyat Inc. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:discord" width="16" height="16"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}