import { useState } from 'react';
import clsx from 'clsx';

export default function LeadForm({ context = 'general', buttonText = 'Gönder', fullForm = false }) {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      
      // Reset success message after a while
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <iconify-icon icon="solar:check-read-linear" width="32" className="text-green-500"></iconify-icon>
        </div>
        <h3 className="text-xl font-medium text-slate-900 mb-2">Talebiniz Alındı!</h3>
        <p className="text-sm text-slate-500">
          Size en kısa sürede {formData.email || 'e-posta adresiniz'} üzerinden ulaşacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {fullForm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-slate-700">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all"
              placeholder="Örn: Ali Yılmaz"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-slate-700">Şirket/Web Sitesi</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all"
              placeholder="Örn: sirketim.com"
            />
          </div>
        </div>
      )}

      {/* If not full form, just show a simple name field alongside email */}
      {!fullForm && (
        <div className="space-y-1.5">
          <label htmlFor="name-short" className="text-xs font-medium text-slate-700">Ad Soyad</label>
          <input
            type="text"
            id="name-short"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all"
            placeholder="Adınız Soyadınız"
          />
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium text-slate-700">İş E-postası</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all"
          placeholder="isim@sirket.com"
        />
      </div>

      {fullForm && (
        <>
          <div className="space-y-1.5">
            <label htmlFor="budget" className="text-xs font-medium text-slate-700">Aylık Pazarlama Bütçesi</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all text-slate-700"
            >
              <option value="" disabled>Seçiniz</option>
              <option value="10k-50k">10.000₺ - 50.000₺</option>
              <option value="50k-100k">50.000₺ - 100.000₺</option>
              <option value="100k+">100.000₺ Üzeri</option>
              <option value="notsure">Emin Değilim</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-700">Hedefleriniz Neler?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent focus:bg-white transition-all resize-none"
              placeholder="Kısaca bahseder misiniz?"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={clsx(
          "w-full mt-2 bg-slate-900 text-white rounded-lg px-4 py-3 text-sm font-medium transition-all flex items-center justify-center gap-2",
          status === 'submitting' ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-800 active:scale-[0.98] shadow-sm hover:shadow-md"
        )}
      >
        {status === 'submitting' ? (
          <>
            <iconify-icon icon="solar:spinner-linear" className="animate-spin"></iconify-icon>
            Gönderiliyor...
          </>
        ) : (
          buttonText
        )}
      </button>
      
      <p className="text-[10px] text-slate-400 text-center mt-2">
        Bilgileriniz güvende. Gizlilik politikamızı kabul etmiş sayılırsınız.
      </p>
    </form>
  );
}