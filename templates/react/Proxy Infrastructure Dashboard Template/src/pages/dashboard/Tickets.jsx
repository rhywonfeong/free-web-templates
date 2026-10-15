import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../../components/ui/Modal';

export default function Tickets() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tickets = [
    { id: '#1042', title: 'Socket.IO Bağlantı Limitleri', date: 'Bugün, 14:30', status: 'Beklemede' },
    { id: '#1041', title: 'Kurumsal Fatura Adresi Değişikliği', date: 'Dün, 09:15', status: 'Kapalı' },
    { id: '#1038', title: 'Yeni Has Altın Sembolleri Talebi', date: '12 Nis 2024', status: 'Kapalı' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Açık': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'Beklemede': return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
      case 'Kapalı': return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Destek Taleplerim</h1>
          <p className="text-gray-400 text-sm">Teknik destek (API/Socket) veya finansal konular için ekibimize ulaşın.</p>
        </header>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#E1B552] text-[#000000] px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all flex items-center gap-2 w-fit"
        >
          <iconify-icon icon="solar:pen-new-square-bold-duotone" width="18" height="18"></iconify-icon>
          Yeni Talep Oluştur
        </button>
      </div>

      <div className="bg-[#121212] rounded-xl border border-white/5 overflow-hidden shadow-lg">
        <div className="divide-y divide-white/5">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#E1B552]/30 group-hover:bg-[#E1B552]/5 transition-all">
                  <iconify-icon icon="solar:ticket-bold-duotone" className="text-gray-400 group-hover:text-[#E1B552] transition-colors" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1 group-hover:text-[#E1B552] transition-colors">
                    {ticket.title} <span className="text-gray-500 font-mono text-xs ml-2 font-normal">{ticket.id}</span>
                  </h4>
                  <p className="text-xs text-gray-500">{ticket.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={clsx("px-2.5 py-1.5 rounded-md text-xs font-semibold", getStatusBadge(ticket.status))}>
                  {ticket.status}
                </span>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-gray-600 group-hover:text-white transition-colors" width="20" height="20"></iconify-icon>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yeni Destek Talebi"
      >
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Konu Başlığı</label>
            <input 
              type="text" 
              placeholder="Örn: Socket.IO üzerinden fiyatlar güncellenmiyor"
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Kategori</label>
            <select className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all appearance-none cursor-pointer">
              <option>Teknik Destek (API/WebSocket/Socket.IO)</option>
              <option>Muhasebe ve Fatura (E-Fatura)</option>
              <option>Sembol veya Kur Talebi</option>
              <option>Genel Bilgi ve Şikayet</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Detaylı Açıklama</label>
            <textarea 
              rows="4"
              placeholder="Sorununuzu detaylı bir şekilde açıklayın. Varsa hata kodunu ekleyin..."
              className="w-full bg-[#1A1A1A] border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#E1B552]/50 focus:border-[#E1B552] block p-2.5 outline-none transition-all placeholder-gray-600 resize-none"
            ></textarea>
          </div>
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/5">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              İptal
            </button>
            <button 
              type="submit"
              className="bg-[#E1B552] text-[#000000] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#cfa548] hover:shadow-[0_0_15px_rgba(225,181,82,0.3)] transition-all flex items-center gap-2"
            >
              Talebi Gönder
              <iconify-icon icon="solar:plain-2-bold" width="16" height="16"></iconify-icon>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}