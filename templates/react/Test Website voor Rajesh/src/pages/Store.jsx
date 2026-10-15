import { useLanguage } from '../context/LanguageContext';

export default function Store() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 mb-4">
            {t('store.title')}
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            {t('store.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-sm border border-stone-100 rounded-sm overflow-hidden">
          
          <div className="h-64 lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1000&q=80" 
              alt="Rajesh Fashion Store Interior" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <iconify-icon icon="solar:map-point-linear" width="24" className="text-stone-400"></iconify-icon>
                <h3 className="text-xl font-serif text-stone-900">{t('store.loc.title')}</h3>
              </div>
              <address className="not-italic text-stone-600 pl-9 leading-relaxed">
                123 Fashion Avenue<br />
                Amsterdam, 1012 AB<br />
                The Netherlands
              </address>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <iconify-icon icon="solar:clock-circle-linear" width="24" className="text-stone-400"></iconify-icon>
                <h3 className="text-xl font-serif text-stone-900">{t('store.hours.title')}</h3>
              </div>
              <ul className="space-y-2 text-stone-600 pl-9">
                <li className="flex justify-between max-w-xs">
                  <span>{t('store.hours.mf')}</span>
                  <span>10:00 - 18:00</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>{t('store.hours.sat')}</span>
                  <span>10:00 - 17:00</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>{t('store.hours.sun')}</span>
                  <span>12:00 - 17:00</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-stone-100">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors"
              >
                {t('store.btn')}
                <iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}