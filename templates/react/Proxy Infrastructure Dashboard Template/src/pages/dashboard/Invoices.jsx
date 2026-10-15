import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../../components/ui/Modal';

export default function Invoices() {
  const [activeTab, setActiveTab] = useState('gecmis');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const payments = [
    { id: 'PAY-2023-112', date: '01 NİS 2024', amount: '₺499,00', status: 'Ödendi', method: 'Kredi Kartı (**** 4242)' },
    { id: 'PAY-2023-111', date: '01 MAR 2024', amount: '₺499,00', status: 'Ödendi', method: 'Kredi Kartı (**** 4242)' },
    { id: 'PAY-2023-108', date: '01 ŞUB 2024', amount: '₺499,00', status: 'Ödendi', method: 'Kredi Kartı (**** 4242)' },
  ];

  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Ödemelerim</h1>
          <p className="text-gray-400 text-sm">Geçmiş işlem geçmişinizi görüntüleyin ve bakiye yükleyin.</p>
        </header>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#E1B552] text-[#000000] px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all flex items-center gap-2 w-fit"
        >
          <iconify-icon icon="solar:wallet-add-bold-duotone" width="18" height="18"></iconify-icon>
          Bakiye Yükle
        </button>
      </div>

      <div className="bg-[#121212] rounded-xl border border-white/5 overflow-hidden shadow-lg">
        <div className="flex items-center gap-6 px-6 border-b border-white/5">
          {[
            { id: 'gecmis', label: 'İşlem Geçmişi' },
            { id: 'kartlar', label: 'Kayıtlı Kartlar' }
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

        <div className="p-0">
          {activeTab === 'gecmis' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0A0A0A] text-gray-400 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4 font-medium">İşlem No</th>
                    <th className="px-6 py-4 font-medium">Tarih</th>
                    <th className="px-6 py-4 font-medium">Yöntem</th>
                    <th className="px-6 py-4 font-medium">Tutar</th>
                    <th className="px-6 py-4 font-medium">Durum</th>
                    <th className="px-6 py-4 font-medium text-right">Fatura</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {payments.map((pay) => (
                     <tr key={pay.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4 font-mono text-gray-300">{pay.id}</td>
                      <td className="px-6 py-4 text-gray-400 font-medium">{pay.date}</td>
                      <td className="px-6 py-4 text-gray-400">{pay.method}</td>
                      <td className="px-6 py-4 text-white font-semibold">{pay.amount}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                          {pay.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-500 hover:text-[#E1B552] transition-colors p-1.5 rounded-lg hover:bg-[#E1B552]/10">
                          <iconify-icon icon="solar:document-download-bold-duotone" width="22" height="22"></iconify-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'kartlar' && (
            <div className="p-6">
              <div className="max-w-md bg-[#1A1A1A] border border-white/5 rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden group hover:border-[#E1B552]/30 transition-all">
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md flex items-center justify-center border border-white/10 shadow-inner">
                    <iconify-icon icon="solar:card-bold-duotone" width="24" height="24" className="text-[#E1B552]"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white tracking-widest">•••• •••• •••• 4242</p>
                    <p className="text-xs text-gray-500 mt-0.5">Son Kullanma: 12/28</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#000000] bg-[#E1B552] px-2.5 py-1 rounded-md relative z-10 shadow-sm">Varsayılan</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Bakiye Yükle"
      >
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Yüklenecek Tutar (₺)</label>
            <input 
              type="number" 
              placeholder="0.00"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600 font-mono"
            />
          </div>
          <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#E1B552]/20 flex items-start gap-3">
             <iconify-icon icon="solar:info-circle-bold-duotone" width="20" height="20" className="text-[#E1B552] shrink-0 mt-0.5"></iconify-icon>
             <p className="text-xs text-gray-300 leading-relaxed">Ödeme, varsayılan kredi kartınızdan tahsil edilecektir. Yüklenen bakiye anında hesabınıza yansır.</p>
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
              Ödemeyi Tamamla
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}