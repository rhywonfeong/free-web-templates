import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Charge 5",
    category: "Advanced Tracker",
    price: "$149.95",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Versa 3",
    category: "Smartwatch",
    price: "$229.95",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
    tag: "New"
  },
  {
    id: 3,
    name: "Luxe",
    category: "Fashion Tracker",
    price: "$129.95",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    tag: null
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Featured Products</h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            Discover our most popular devices designed to help you reach your health and fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/products`}
              className="group flex flex-col bg-[#0f0f0f] border border-white/[0.03] rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:shadow-black transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-[#141414] relative overflow-hidden flex items-center justify-center p-8">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">
                  {product.category}
                </span>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-white tracking-tight">{product.name}</h3>
                  <span className="text-lg font-semibold text-white">{product.price}</span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-medium text-neutral-400 group-hover:text-orange-500 transition-colors">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" class="ml-2 text-lg"></iconify-icon>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;