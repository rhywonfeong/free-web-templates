import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-stone-500 leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-3 shadow-sm rounded-sm text-stone-900 border border-stone-100">
                  <iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-stone-900 mb-1">{t('contact.email')}</h4>
                  <a href="mailto:hello@rajeshfashion.com" className="text-stone-500 hover:text-stone-900 transition-colors">
                    hello@rajeshfashion.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-3 shadow-sm rounded-sm text-stone-900 border border-stone-100">
                  <iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-stone-900 mb-1">{t('contact.call')}</h4>
                  <a href="tel:+31201234567" className="text-stone-500 hover:text-stone-900 transition-colors">
                    +31 20 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[#25D366] text-white p-3 shadow-sm rounded-sm">
                  <iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-stone-900 mb-1">{t('contact.wa')}</h4>
                  <a href="#" className="text-stone-500 hover:text-stone-900 transition-colors">
                    {t('contact.wa.desc')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-stone-200">
              <h4 className="text-sm font-medium uppercase tracking-widest text-stone-900 mb-4">{t('contact.shop')}</h4>
              <a 
                href="https://vinted.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-stone-100 border border-stone-200 px-6 py-4 rounded-sm hover:bg-white hover:border-stone-300 transition-all text-stone-900 font-medium"
              >
                <iconify-icon icon="simple-icons:vinted" width="24" className="text-[#09B1BA]"></iconify-icon>
                {t('contact.shop.btn')}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-sm">
              <h3 className="text-2xl font-serif text-stone-900 mb-8">{t('contact.form.title')}</h3>
              
              {isSubmitted ? (
                <div className="bg-stone-50 border border-stone-200 p-8 text-center rounded-sm">
                  <iconify-icon icon="solar:check-circle-linear" width="48" className="text-green-500 mb-4"></iconify-icon>
                  <h4 className="text-xl font-serif text-stone-900 mb-2">{t('contact.form.sent.title')}</h4>
                  <p className="text-stone-500">{t('contact.form.sent.desc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500 font-medium">{t('contact.form.name')}</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-stone-200 bg-transparent py-3 focus:outline-none focus:border-stone-900 transition-colors"
                        placeholder={t('contact.form.name.ph')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-500 font-medium">{t('contact.form.email')}</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-stone-200 bg-transparent py-3 focus:outline-none focus:border-stone-900 transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-stone-500 font-medium">{t('contact.form.subject')}</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 focus:outline-none focus:border-stone-900 transition-colors"
                      placeholder={t('contact.form.subject.ph')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone-500 font-medium">{t('contact.form.msg')}</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                      placeholder={t('contact.form.msg.ph')}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    {t('contact.form.btn')}
                    <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}