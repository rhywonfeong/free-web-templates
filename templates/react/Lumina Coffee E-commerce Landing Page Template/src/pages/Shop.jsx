import React from 'react';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

// Extended product list for the shop page
const PRODUCTS = [
  { id: 1, name: "Display Coffee Mug", price: 89.99, image: "https://images.unsplash.com/photo-1565452329774-0610f607c37d?w=800&q=80", category: "Hardware" },
  { id: 2, name: "Smart Tea Infuser", price: 129.99, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", category: "Hardware" },
  { id: 3, name: "Tumbler 40oz Max", price: 45.00, image: "https://images.unsplash.com/photo-1628147131709-ebcb1b181298?w=800&q=80", category: "Drinkware" },
  { id: 4, name: "Pour Over Kettle", price: 65.00, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", category: "Hardware" },
  { id: 5, name: "Ethiopian Yirgacheffe", price: 22.00, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80", category: "Beans" },
  { id: 6, name: "Ceramic Dripper", price: 28.00, image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80", category: "Accessories" },
];

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <h1 className="text-5xl font-black tracking-tighter uppercase text-stone-900 mb-4">All Products</h1>
             <p className="text-stone-500 font-medium">Tools and beans for the perfect cup.</p>
           </div>
           <div className="flex gap-4">
              <select className="bg-white border border-stone-200 px-4 py-2 rounded-xl text-sm font-semibold outline-none">
                 <option>Filter: All Categories</option>
                 <option>Hardware</option>
                 <option>Drinkware</option>
                 <option>Beans</option>
              </select>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-stone-50 rounded-2xl mb-6 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-600"
                >
                  <iconify-icon icon="solar:cart-plus-linear" width="24"></iconify-icon>
                </button>
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{product.category}</span>
                <div className="flex justify-between items-start mt-2">
                  <h3 className="font-bold text-xl tracking-tight text-stone-900">{product.name}</h3>
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}