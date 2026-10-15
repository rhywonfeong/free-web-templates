import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', website: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pb-24 min-h-[80vh] bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-6">
              <iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
              İletişime Geçin
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
              Projenizi Birlikte <br className="hidden md:block"/>Büyütelim.
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-md">
              Mevcut SEO durumunuzu analiz etmek, yeni hedefler belirlemek veya sadece tanışmak için aşağıdaki formu doldurabilirsiniz. Size 24 saat içinde dönüş yapacağız.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                  <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-1">E-posta</h3>
                  <a href="mailto:hello@ogulcandemirer.com" className="text-slate-500 hover:text-indigo-600 transition-colors">hello@ogulcandemirer.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                  <iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-1">Konum</h3>
                  <p className="text-slate-500">İstanbul, Türkiye<br/>(Global Online Hizmet)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Ücretsiz Analiz Formu</h2>
            
            {isSuccess ? (
              <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium mb-2">Mesajınız Alındı!</h3>
                <p className="text-emerald-700/80 text-sm">Web sitenizi incelemeye başlıyoruz. En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 block">Ad Soyad</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 outline-none"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 block">E-posta</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 outline-none"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-slate-700 block">Web Sitesi</label>
                  <input 
                    type="url" 
                    id="website" 
                    name="website" 
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 outline-none"
                    placeholder="https://www.siteniz.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 block">Proje Detayları / Notunuz</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 outline-none resize-none"
                    placeholder="Mevcut durumunuzdan veya hedeflerinizden kısaca bahsedin..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <iconify-icon icon="solar:spinner-linear" className="animate-spin"></iconify-icon>
                      Gönderiliyor...
                    </span>
                  ) : 'Gönder ve Analiz İste'}
                </Button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  Bilgileriniz üçüncü şahıslarla kesinlikle paylaşılmaz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;