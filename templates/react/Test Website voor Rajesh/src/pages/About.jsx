import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="block text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">
              {t('about.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 mb-8 leading-tight">
              {t('about.title1')} <br /> {t('about.title2')}
            </h1>
            
            <div className="space-y-6 text-stone-600 font-light leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-serif text-stone-900">10+</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{t('about.stat.years')}</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-stone-200"></div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-serif text-stone-900">5k+</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{t('about.stat.clients')}</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1573556003592-1e967a329dc3?w=1000&q=80" 
                alt="Boutique owner arranging clothes" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl hidden md:block max-w-xs">
              <iconify-icon icon="solar:quote-left-linear" width="32" className="text-stone-300 mb-2"></iconify-icon>
              <p className="text-stone-800 font-serif italic mb-4 text-sm leading-relaxed">
                {t('about.quote')}
              </p>
              <p className="text-xs uppercase tracking-widest font-medium text-stone-500">{t('about.quote.author')}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}