import { useState, useMemo } from 'react';
import { useAuraCMSCollection } from '../lib/auraCms';
import { useLanguage } from '../context/LanguageContext';

export default function Collection() {
  const { items, loading } = useAuraCMSCollection('products');
  const [activeCategory, setActiveCategory] = useState('All');
  const { t } = useLanguage();

  // Extract unique categories from CMS data
  const categories = useMemo(() => {
    if (!items || items.length === 0) return ['All'];
    const cats = items.map(item => item.category).filter(Boolean);
    return ['All', ...new Set(cats)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter(item => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-stone-900 mb-6">
            {t('col.title')}
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            {t('col.desc')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-stone-200 pb-6 gap-6">
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest whitespace-nowrap transition-colors relative ${
                  activeCategory === cat ? 'text-stone-900 font-medium' : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {cat === 'All' ? t('col.cat.all') : cat}
                {activeCategory === cat && (
                  <span className="absolute -bottom-6 md:-bottom-[26px] left-0 w-full h-[1px] bg-stone-900"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-stone-500 w-full md:w-auto">
            <iconify-icon icon="solar:sort-linear" width="18"></iconify-icon>
            <span>{t('col.showing', { n: filteredItems?.length || 0 })}</span>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="bg-stone-200 aspect-[3/4] w-full rounded-sm mb-4"></div>
                <div className="h-4 bg-stone-200 w-3/4 rounded mb-2"></div>
                <div className="h-4 bg-stone-200 w-1/4 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm mb-4">
                  <img 
                    src={item.image || item.imageUrl || item.thumbnail} 
                    alt={item.title || item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] uppercase tracking-widest z-10">
                      {t('col.new')}
                    </span>
                  )}
                  {item.size && (
                    <span className="absolute top-3 right-3 bg-stone-900 text-white px-2 py-1 text-[10px] uppercase tracking-widest z-10">
                      {t('col.size')} {item.size}
                    </span>
                  )}
                  
                  {/* Actions overlay */}
                  <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
                    <a 
                      href={item.vintedUrl || "https://vinted.com"} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white text-stone-900 w-full py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors"
                    >
                      <iconify-icon icon="simple-icons:vinted" width="14"></iconify-icon>
                      {t('col.view_vinted')}
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide">
                      {item.title || item.name || "Boutique Item"}
                    </h3>
                    <p className="text-sm text-stone-500 mt-1 capitalize">
                      {item.category || "Apparel"}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-stone-900">
                    {item.price ? `€${item.price}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-sm border border-stone-100">
            <iconify-icon icon="solar:ghost-linear" width="48" className="text-stone-300 mb-4"></iconify-icon>
            <h3 className="text-xl font-serif text-stone-900 mb-2">{t('col.empty.title')}</h3>
            <p className="text-stone-500">{t('col.empty.desc')}</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-6 text-sm uppercase tracking-widest border-b border-stone-900 pb-1"
            >
              {t('col.empty.btn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}