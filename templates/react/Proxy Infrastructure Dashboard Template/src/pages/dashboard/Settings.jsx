import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../../components/ui/Modal';

// Simplified cities list for demonstration
const cities = [
  "Adana", "Ankara", "Antalya", "Bursa", "Diyarbakır", "Erzurum", "Eskişehir", 
  "Gaziantep", "İstanbul", "İzmir", "Kayseri", "Kocaeli", "Konya", "Mersin", 
  "Samsun", "Şanlıurfa", "Trabzon"
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Address Form State
  const [faturaTipi, setFaturaTipi] = useState('Kurumsal');
  const [unvan, setUnvan] = useState('');
  const [vergiNo, setVergiNo] = useState('');
  const [vergiDairesi, setVergiDairesi] = useState('');
  const [il, setIl] = useState('İstanbul');
  const [ilce, setIlce] = useState('');
  const [mahalle, setMahalle] = useState('');
  const [sokak, setSokak] = useState('');
  const [binaNo, setBinaNo] = useState('');

  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Ayarlar</h1>
          <p className="text-gray-400 text-sm">Abonelik detaylarınızı ve resmi fatura adresinizi yönetin.</p>
        </header>
        {activeTab === 'profil' && (
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 w-fit"
          >
            <iconify-icon icon="solar:pen-linear" width="18" height="18"></iconify-icon>
            Profili Düzenle
          </button>
        )}
      </div>

      <div className="bg-[#121212] rounded-xl border border-white/5 overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#0F0F0F]/50 flex flex-row md:flex-col overflow-x-auto">
          {[
            { id: 'profil', label: 'Profil Bilgileri', icon: 'solar:user-bold-duotone' },
            { id: 'abonelik', label: 'Abonelik Durumu', icon: 'solar:server-path-bold-duotone' },
            { id: 'fatura-adres', label: 'Fatura Adresi', icon: 'solar:buildings-bold-duotone' },
            { id: 'guvenlik', label: 'Güvenlik', icon: 'solar:lock-password-bold-duotone' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors shrink-0 md:shrink border-l-2 md:border-l-2 md:border-b-0",
                activeTab === tab.id 
                  ? "border-[#E1B552] bg-[#E1B552]/5 text-white" 
                  : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
              )}
            >
              <iconify-icon icon={tab.icon} width="20" height="20" className={activeTab === tab.id ? "text-[#E1B552]" : "text-gray-500"}></iconify-icon>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          {activeTab === 'profil' && (
            <div className="max-w-xl space-y-8 animate-[fadeIn_0.2s_ease-out]">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Temel Bilgiler</h3>
                <p className="text-sm text-gray-400 mb-6">Hesap sahibi bilgileri.</p>
              </div>
              
              <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E1B552] to-[#FFE082] flex items-center justify-center text-black font-bold text-3xl shadow-[0_0_20px_rgba(225,181,82,0.3)]">
                  MT
                </div>
                <div>
                  <button className="bg-[#1A1A1A] text-white text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 hover:border-[#E1B552]/50 transition-colors mb-2">Fotoğrafı Güncelle</button>
                  <p className="text-xs text-gray-500">Önerilen: 256x256px. Maksimum 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Ad Soyad</label>
                  <p className="text-white text-sm bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/5 font-medium">Mehmet Taşkın</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">E-posta Adresi</label>
                  <p className="text-white text-sm bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/5 font-medium">mehmet@ornek.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Telefon Numarası</label>
                  <p className="text-white text-sm bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/5 font-medium">+90 (555) 123 45 67</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'abonelik' && (
            <div className="max-w-xl space-y-8 animate-[fadeIn_0.2s_ease-out]">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Abonelik & Servis Durumu</h3>
                <p className="text-sm text-gray-400 mb-6">Mevcut planınız ve faturalandırma periyodunuz.</p>
              </div>

              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6">
                  <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Aktif
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Servis Tipi</p>
                    <div className="flex items-center gap-2">
                       <iconify-icon icon="solar:crown-bold-duotone" width="24" height="24" className="text-[#E1B552]"></iconify-icon>
                       <p className="text-xl font-bold text-white">REST API + Socket.IO (Kuyumcu Pro)</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Ödeme Döngüsü</p>
                      <p className="text-white font-medium">Aylık (Her ayın 1'i)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Sonraki Fatura</p>
                      <p className="text-white font-medium">01 Mayıs 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="text-[#E1B552] text-sm font-semibold hover:underline flex items-center gap-1">
                Planı Değiştir <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
              </button>
            </div>
          )}

          {activeTab === 'fatura-adres' && (
            <div className="space-y-8 animate-[fadeIn_0.2s_ease-out]">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Fatura Adresi Bilgileri</h3>
                <p className="text-sm text-gray-400 mb-6">Resmi e-fatura kesimi için eksiksiz doldurunuz.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Form Area */}
                <div className="lg:col-span-3 space-y-5">
                  <div className="flex items-center gap-4 bg-[#1A1A1A] p-1.5 rounded-lg border border-white/5 w-fit">
                    <button 
                      type="button"
                      onClick={() => setFaturaTipi('Bireysel')}
                      className={clsx("px-4 py-2 text-sm font-medium rounded-md transition-all", faturaTipi === 'Bireysel' ? "bg-[#E1B552] text-black shadow-sm" : "text-gray-400 hover:text-white")}
                    >
                      Bireysel / Şahıs
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFaturaTipi('Kurumsal')}
                      className={clsx("px-4 py-2 text-sm font-medium rounded-md transition-all", faturaTipi === 'Kurumsal' ? "bg-[#E1B552] text-black shadow-sm" : "text-gray-400 hover:text-white")}
                    >
                      Kurumsal / Tüzel
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Firma Ünvanı / Ad Soyad <span className="text-red-400">*</span></label>
                    <input 
                      type="text" 
                      value={unvan}
                      onChange={(e) => setUnvan(e.target.value)}
                      placeholder="Tam resmi ünvanı giriniz (min 10 karakter)" 
                      className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">{faturaTipi === 'Kurumsal' ? 'Vergi No' : 'TC Kimlik No'} <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        value={vergiNo}
                        onChange={(e) => setVergiNo(e.target.value)}
                        placeholder={faturaTipi === 'Kurumsal' ? "10 Haneli VKN" : "11 Haneli TCKN"} 
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600 font-mono" 
                      />
                    </div>
                    {faturaTipi === 'Kurumsal' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Vergi Dairesi <span className="text-red-400">*</span></label>
                        <input 
                          type="text" 
                          value={vergiDairesi}
                          onChange={(e) => setVergiDairesi(e.target.value)}
                          placeholder="Bağlı olunan VD" 
                          className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">İl <span className="text-red-400">*</span></label>
                      <select 
                        value={il}
                        onChange={(e) => setIl(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">İlçe <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        value={ilce}
                        onChange={(e) => setIlce(e.target.value)}
                        placeholder="Örn: Kadıköy" 
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Mahalle <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        value={mahalle}
                        onChange={(e) => setMahalle(e.target.value)}
                        placeholder="Örn: Caferağa Mah." 
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Sokak/Cadde <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        value={sokak}
                        onChange={(e) => setSokak(e.target.value)}
                        placeholder="Örn: Moda Cad." 
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Bina/Kapı No <span className="text-red-400">*</span></label>
                      <input 
                        type="text" 
                        value={binaNo}
                        onChange={(e) => setBinaNo(e.target.value)}
                        placeholder="Örn: No:14 D:2" 
                        className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600" 
                      />
                    </div>
                  </div>

                  <button type="button" className="bg-[#E1B552] text-[#000000] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#cfa548] transition-colors mt-4 w-full sm:w-auto shadow-[0_0_15px_rgba(225,181,82,0.2)]">
                    Adresi Kaydet
                  </button>
                </div>

                {/* Preview Area */}
                <div className="lg:col-span-2">
                  <div className="sticky top-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Otomatik Fatura Adresi</h4>
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-xl relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E1B552] to-[#FFE082]"></div>
                      
                      <p className="text-white font-bold mb-4 break-words">
                        {unvan || <span className="text-gray-600 italic">Ünvan/Ad Soyad Girilmedi</span>}
                      </p>
                      
                      <div className="space-y-2 mb-6 text-sm text-gray-300">
                        <p className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-500">{faturaTipi === 'Kurumsal' ? 'Vergi Dairesi:' : 'Tipi:'}</span> 
                          <span>{faturaTipi === 'Kurumsal' ? (vergiDairesi || '-') : 'Bireysel Fatura'}</span>
                        </p>
                        <p className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-500">{faturaTipi === 'Kurumsal' ? 'VKN:' : 'TCKN:'}</span> 
                          <span className="font-mono">{vergiNo || '----------'}</span>
                        </p>
                      </div>

                      <div className="text-sm text-gray-400 leading-relaxed bg-[#121212] p-4 rounded-lg border border-white/5">
                        <p>{mahalle ? `${mahalle} ` : ''}{sokak ? `${sokak} ` : ''}</p>
                        <p>{binaNo ? `${binaNo} ` : ''}</p>
                        <p className="mt-2 font-medium text-white">{ilce ? `${ilce} / ` : ''}{il}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guvenlik' && (
            <div className="max-w-md space-y-6 animate-[fadeIn_0.2s_ease-out]">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Şifre Değiştir</h3>
                <p className="text-sm text-gray-400 mb-6">Hesap güvenliğiniz için periyodik olarak şifrenizi yenileyin.</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Mevcut Şifre</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Yeni Şifre</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Yeni Şifre (Tekrar)</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all" />
                </div>
                <button type="button" className="bg-[#E1B552] text-[#000000] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#cfa548] transition-colors mt-4 w-full sm:w-auto">
                  Şifreyi Güncelle
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)}
        title="Profili Düzenle"
      >
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsEditModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Ad Soyad</label>
            <input 
              type="text" 
              defaultValue="Mehmet Taşkın"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">E-posta Adresi</label>
            <input 
              type="email" 
              defaultValue="mehmet@ornek.com"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Telefon</label>
            <input 
              type="tel" 
              defaultValue="+90 (555) 123 45 67"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all"
            />
          </div>
          <div className="pt-4 flex items-center justify-end gap-3">
            <button 
              type="button" 
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              İptal
            </button>
            <button 
              type="submit"
              className="bg-[#E1B552] text-[#000000] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#cfa548] transition-colors"
            >
              Kaydet
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}