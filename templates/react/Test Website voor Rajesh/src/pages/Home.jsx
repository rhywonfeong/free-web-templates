import { Link } from 'react-router-dom';
import { useAuraCMSCollection } from '../lib/auraCms';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { items, featuredItems, loading } = useAuraCMSCollection('products');
  const { t } = useLanguage();
  
  // Use featured items if available, otherwise fallback to standard items.
  const displayItems = featuredItems?.length > 0 
    ? featuredItems.slice(0, 4) 
    : items?.slice(0, 4) || [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-stone-100 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=80" 
            alt="Editorial fashion look" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <span className="block text-stone-200 text-sm tracking-[0.2em] uppercase mb-4">
              {t('home.hero.subtitle')}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.1] mb-6">
              {t('home.hero.title1')}<br /> {t('home.hero.title2')}
            </h1>
            <p className="text-stone-200 text-lg mb-10 leading-relaxed font-light">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection" 
                className="bg-white text-stone-900 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-stone-100 transition-colors text-center"
              >
                {t('home.hero.btn_col')}
              </Link>
              <a 
                href="https://vinted.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-transparent border border-white text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <iconify-icon icon="simple-icons:vinted" width="18"></iconify-icon>
                {t('home.hero.btn_vinted')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-stone-900 mb-4">
              {t('home.feat.title')}
            </h2>
            <p className="text-stone-500 max-w-md">
              {t('home.feat.desc')}
            </p>
          </div>
          <Link 
            to="/collection" 
            className="text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors flex items-center gap-2 group pb-1 border-b border-stone-900 hover:border-stone-500 w-max"
          >
            {t('home.feat.see_all')} 
            <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="animate-pulse flex flex-col gap-4">
                <div className="bg-stone-200 aspect-[3/4] w-full rounded-sm"></div>
                <div className="h-4 bg-stone-200 w-2/3 rounded"></div>
                <div className="h-4 bg-stone-200 w-1/3 rounded"></div>
              </div>
            ))}
          </div>
        ) : displayItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm mb-4">
                  <img 
                    src={item.image || item.imageUrl || item.thumbnail} 
                    alt={item.title || item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
                  
                  {/* Vinted Quick Action */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <a 
                      href={item.vintedUrl || "https://vinted.com"} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white/95 backdrop-blur-sm text-stone-900 w-full py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <iconify-icon icon="simple-icons:vinted" width="14"></iconify-icon>
                      {t('home.feat.view_vinted')}
                    </a>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide">
                  {item.title || item.name || "Boutique Item"}
                </h3>
                <p className="text-sm text-stone-500 mt-1">
                  {item.price ? `€${item.price}` : t('home.feat.check_vinted')}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-50 border border-stone-100">
            <iconify-icon icon="solar:hanger-linear" width="48" className="text-stone-300 mb-4"></iconify-icon>
            <p className="text-stone-500">{t('home.feat.empty')}</p>
          </div>
        )}
      </section>

      {/* Brand Value Proposition */}
      <section className="bg-stone-900 text-stone-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <iconify-icon icon="solar:star-fall-minimalistic-linear" width="42" className="text-stone-400 mb-8"></iconify-icon>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8 leading-tight">
            {t('home.value.title1')} <br /> {t('home.value.title2')}
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            {t('home.value.desc')}
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-stone-500 pb-1 hover:text-white hover:border-white transition-colors"
          >
            {t('home.value.read_story')}
          </Link>
        </div>
      </section>
    </div>
  );
}