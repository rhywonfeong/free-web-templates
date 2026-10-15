import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../../components/ui/Modal';

export default function Overview() {
  const [activeTab, setActiveTab] = useState('hesap');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const ipList = [
    { ip: '192.168.1.1', label: 'Ana Mağaza IP', type: 'Üretim', status: 'Aktif' },
    { ip: '10.0.0.5', label: 'Şube Ekranı', type: 'Üretim', status: 'Aktif' },
    { ip: '172.16.0.2', label: 'Test Sunucusu', type: 'Geliştirici', status: 'Pasif' },
  ];

  const filteredIps = ipList.filter(row => 
    row.ip.includes(searchTerm) || row.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Genel Bakış</h1>
        <p className="text-gray-400 text-sm">Hasfiyat API hizmet durumunuzu ve kota bilgilerinizi buradan takip edebilirsiniz.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Cari Bakiye', value: '₺0,00', sub: 'Ödenmemiş bakiye', icon: 'solar:wallet-money-bold-duotone', color: 'text-green-400' },
          { title: 'Servis Tipi', value: 'Kuyumcu Pro', sub: 'Aktif Plan', icon: 'solar:server-square-bold-duotone', color: 'text-[#E1B552]' },
          { title: 'Ödeme Döngüsü', value: 'Aylık', sub: '15 Gün Kaldı', icon: 'solar:calendar-bold-duotone', color: 'text-blue-400' },
          { title: 'Aktif IP Sayısı', value: '3', sub: 'Beyaz Listede', icon: 'solar:network-bold-duotone', color: 'text-purple-400' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#121212] p-5 rounded-xl border border-white/5 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-400">{stat.title}</span>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                <iconify-icon icon={stat.icon} width="22" height="22" className={stat.color}></iconify-icon>
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white tracking-tight mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 font-medium">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Area */}
      <div className="bg-[#121212] border-l-4 border-[#E1B552] rounded-r-xl p-4 flex items-center justify-between border-y border-r border-y-white/5 border-r-white/5 shadow-[0_0_20px_rgba(225,181,82,0.05)]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#E1B552]/10 border border-[#E1B552]/20 flex items-center justify-center shrink-0">
            <iconify-icon icon="solar:ticket-bold-duotone" className="text-[#E1B552]" width="20" height="20"></iconify-icon>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Son Destek Talebi: Socket.IO Bağlantı Limitleri</h4>
            <p className="text-xs text-gray-400 mt-0.5">Durum: <span className="text-[#E1B552] font-medium">Beklemede</span> - Teknik ekibimiz incelemeye aldı.</p>
          </div>
        </div>
        <button className="text-sm text-[#000000] bg-[#E1B552] font-semibold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all">Görüntüle</button>
      </div>

      {/* Tabbed Interface */}
      <div className="bg-[#121212] rounded-xl border border-white/5 overflow-hidden shadow-lg">
        <div className="flex items-center gap-6 px-6 border-b border-white/5">
          {[
            { id: 'hesap', label: 'Hesap Bilgileri' },
            { id: 'ip', label: 'IP Adresleri' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "py-4 text-sm font-medium transition-colors relative",
                activeTab === tab.id ? "text-[#E1B552]" : "text-gray-400 hover:text-gray-200"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E1B552] rounded-t-full shadow-[0_-2px_10px_rgba(225,181,82,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'hesap' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-white mb-4">API Kota Durumu</h4>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-gray-400">Aylık REST İstek Kotası</span>
                        <span className="text-white">Sınırsız</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div className="bg-[#E1B552] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-gray-400">Eşzamanlı Socket Bağlantısı</span>
                        <span className="text-white">3 / 5 Cihaz</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-4">Hızlı Erişim</h4>
                  <div className="bg-[#0A0A0A] p-4 rounded-xl flex items-center justify-between border border-white/5">
                    <div>
                       <p className="text-xs text-gray-400 mb-1">Socket.IO Anahtarı</p>
                       <code className="text-sm text-[#E1B552] font-mono">sk_live_****a7x</code>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg border border-white/10 hover:border-white/20">
                      <iconify-icon icon="solar:copy-linear" width="18" height="18"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ip' && (
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <iconify-icon icon="solar:magnifer-linear" width="16" height="16"></iconify-icon>
                  </div>
                  <input 
                    type="text" 
                    placeholder="IP veya etiket ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block pl-10 p-2.5 outline-none transition-all placeholder-gray-500"
                  />
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-[#E1B552] text-[#000000] text-sm font-semibold px-4 py-2.5 rounded-lg hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  <iconify-icon icon="solar:add-circle-bold" width="18" height="18"></iconify-icon>
                  Yeni IP Ekle
                </button>
              </div>
              
              <div className="overflow-x-auto rounded-lg border border-white/5">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#0A0A0A] text-gray-400 text-xs uppercase border-b border-white/5">
                    <tr>
                      <th className="px-4 py-3.5 font-medium">IP Adresi</th>
                      <th className="px-4 py-3.5 font-medium">Etiket</th>
                      <th className="px-4 py-3.5 font-medium">Bağlantı Tipi</th>
                      <th className="px-4 py-3.5 font-medium text-right">Durum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-[#121212]">
                    {filteredIps.length > 0 ? (
                      filteredIps.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 font-mono text-gray-300">{row.ip}</td>
                          <td className="px-4 py-3 text-gray-400 font-medium">{row.label}</td>
                          <td className="px-4 py-3 text-gray-500">{row.type}</td>
                          <td className="px-4 py-3 text-right">
                            <span className={clsx(
                              "px-2.5 py-1 rounded text-xs font-semibold",
                              row.status === 'Aktif' ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                            )}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="px-4 py-8 text-center text-gray-500 text-sm">Arama kriterlerine uygun IP bulunamadı.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yeni IP Beyaz Listesi Ekle"
      >
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">IP Adresi</label>
            <input 
              type="text" 
              placeholder="Örn: 192.168.1.10"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Etiket</label>
            <input 
              type="text" 
              placeholder="Örn: Merkez Şube Ekranı"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600"
            />
          </div>
          <div className="pt-4 flex items-center justify-end gap-3">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              İptal
            </button>
            <button 
              type="submit"
              className="bg-[#E1B552] text-[#000000] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#cfa548] hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all"
            >
              IP Ekle
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}