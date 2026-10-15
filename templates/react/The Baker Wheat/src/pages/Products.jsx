import { useState } from 'react';
import { useAuraCMSCollection } from '../lib/auraCms';
import ScrollReveal from '../components/ScrollReveal';

export default function Products() {
  const { items: products, loading } = useAuraCMSCollection('products');
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Artisan Loaves', 'Buns & Rolls', 'Pastries'];

  // Safe filtering logic expecting realistic category names or defaulting to All
  const displayedProducts = products?.filter(p => {
    if (activeFilter === 'All') return true;
    const cat = (p.category || '').toLowerCase();
    const filter = activeFilter.toLowerCase();
    return cat.includes(filter) || filter.includes(cat);
  }) || [];

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <section className="bg-[#133875] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal variant="up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Our Product Range</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Discover our complete selection of premium par-baked and frozen goods, engineered for professional kitchens.
            </p>
          </ScrollReveal>

          {/* Decorative Search & Filters */}
          <ScrollReveal variant="up" delay={100}>
            <div className="max-w-xl mx-auto relative mb-8">
              <iconify-icon icon="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></iconify-icon>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-white rounded-full py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-soft"
                readOnly
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                    activeFilter === filter 
                      ? 'bg-[#D4AF37] text-[#133875]' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
             [...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-2xl overflow-hidden shadow-soft aspect-square"></div>
            ))
          ) : displayedProducts.length > 0 ? (
            displayedProducts.map((product, i) => (
              <ScrollReveal key={product.id || i} variant="up" delay={(i % 4) * 50}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover-lift h-full flex flex-col border border-gray-100">
                  <div className="aspect-square relative overflow-hidden bg-slate-100">
                    <img 
                      src={product.image || product.thumbnail || product.imageUrl || 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80'} 
                      alt={product.title || product.name || 'Product'} 
                      className="w-full h-full object-cover hover-zoom"
                    />
                    {product.isHalal !== false && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-sm">
                        Halal
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2">
                      {product.category || 'Bakery'}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight">
                      {product.title || product.name || 'Artisan Product'}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
                      {product.description || product.excerpt || 'Perfect for high-volume service without compromising on quality.'}
                    </p>
                    <a href="/contact" className="text-[#133875] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto border-t border-gray-100 pt-4">
                      Request Sample <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500 text-lg">
              No products found matching your filter.
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <ScrollReveal variant="up" className="mt-20">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#133875] rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/4"></div>
            <h3 className="text-3xl font-extrabold text-white mb-4 relative z-10">Need Something Custom?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
              We specialize in bespoke formulations. From custom burger bun sizes to proprietary pastry recipes, our R&D team can match your exact specifications.
            </p>
            <a href="/contact" className="inline-block bg-[#133875] text-white px-8 py-3 rounded-lg font-bold btn-press relative z-10 hover:bg-[#102e60] transition-colors">
              Speak to Our Master Baker
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}