import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import LeadCapture from '../components/LeadCapture';
import { productsSection1, productsSection2, productsSection3, productsSection4 } from '../data/mockData';

const TABS = [
  { id: 'indica', label: 'Feira Indica', icon: 'solar:star-fall-linear' },
  { id: 'vagas', label: 'Vagas de Emprego', icon: 'solar:case-linear' },
  { id: 'tvs', label: 'TVs e vídeo', icon: 'solar:tv-linear' },
  { id: 'produtos', label: 'Produtos', icon: 'solar:box-linear' },
  { id: 'onibus', label: 'Ônibus', icon: 'solar:bus-linear' },
  { id: 'motos', label: 'Motos', icon: 'solar:scooter-linear' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('indica');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // In a real app, this would navigate to /search?q=searchQuery
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F6]">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-[#D8DAE0] pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#18181A] leading-tight tracking-tight mb-6">
            Anuncie <span className="font-semibold text-[#DF3333]">Grátis</span> sua bicicleta no feira do rolo de Vitória da Conquista
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex -space-x-3">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="User" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-600">+</div>
            </div>
            <p className="text-sm font-normal text-[#58585E]">Mais de <span className="font-semibold text-[#18181A]">1.000</span> negociações por dia</p>
          </div>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative flex items-center shadow-sm">
            <input 
              type="text" 
              placeholder="Busque seu produto" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-16 py-4 rounded-full border border-[#D8DAE0] focus:border-[#DF3333] focus:ring-1 focus:ring-[#DF3333] outline-none text-base transition-all bg-white"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-2 bottom-2 aspect-square bg-[#DF3333] text-white rounded-full flex items-center justify-center hover:bg-[#c22b2b] transition-colors"
              aria-label="Buscar"
            >
              <iconify-icon icon="solar:search-linear" width="20"></iconify-icon>
            </button>
          </form>
        </div>
      </section>

      {/* Categories Tabs */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-3">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-normal whitespace-nowrap transition-all
                ${activeTab === tab.id 
                  ? 'bg-white border-2 border-[#DF3333] text-[#DF3333] shadow-sm' 
                  : 'bg-white border border-[#D8DAE0] text-[#58585E] hover:bg-gray-50 hover:text-[#18181A]'
                }`}
            >
              <iconify-icon icon={tab.icon} width="18" className={activeTab === tab.id ? 'text-[#DF3333]' : ''}></iconify-icon>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Areas */}
      <main className="max-w-7xl mx-auto px-4 pb-12 space-y-16 mt-8">
        
        {/* Section 1: Mais produtos na feira */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:rhombus-bold" width="16" className="text-[#DF3333]"></iconify-icon>
            <h2 className="text-xl font-medium text-[#18181A] tracking-tight">Mais produtos na feira</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productsSection1.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#DF3333] hover:bg-[#c22b2b] text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md">
              Ver mais Lojas
            </button>
          </div>
        </section>

        {/* Section 2: Melhores lojas */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:rhombus-bold" width="16" className="text-[#DF3333]"></iconify-icon>
            <h2 className="text-xl font-medium text-[#18181A] tracking-tight">Melhores lojas para você economizar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productsSection2.map((product, index) => (
              <div key={product.id} className={`${index >= 4 ? 'hidden xl:block' : ''}`}>
                <ProductCard {...product} />
              </div>
            ))}
            {/* The prompt asked for 6 items in a grid (4 in first row, 2 in second). 
                To maintain a clean grid without gaps, I'll use cols-3 on large screens, cols-4 on extra large, 
                and hide the last 2 on cols-4 if they don't fill the row, or adjust. 
                Let's simplify to a standard grid flow showing all 6. */}
          </div>
           {/* Mobile override to show all 6 properly in flow */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:hidden mt-4">
              {productsSection2.slice(4, 6).map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
           </div>
        </section>

        {/* Section 3: Mais produtos */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:rhombus-bold" width="16" className="text-[#DF3333]"></iconify-icon>
            <h2 className="text-xl font-medium text-[#18181A] tracking-tight">Mais produtos na feira</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productsSection3.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#DF3333] hover:bg-[#c22b2b] text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md">
              Ver mais anúncios
            </button>
          </div>
        </section>

        {/* Section 4: Mais produtos */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:rhombus-bold" width="16" className="text-[#DF3333]"></iconify-icon>
            <h2 className="text-xl font-medium text-[#18181A] tracking-tight">Mais produtos na feira</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productsSection4.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#DF3333] hover:bg-[#c22b2b] text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md">
              Ver mais anúncios
            </button>
          </div>
        </section>

      </main>

      <LeadCapture />
    </div>
  );
}