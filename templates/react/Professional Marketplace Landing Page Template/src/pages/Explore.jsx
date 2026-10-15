import React, { useState } from 'react';
import { PROFESSIONALS, CATEGORIES } from '../data/mockData';
import { ProfessionalCard } from '../components/ProfessionalCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPros = PROFESSIONALS.filter(pro => {
    const matchesSearch = pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pro.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || pro.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Find Professionals</h1>
        <p className="text-slate-500">Discover top talent for your next big project.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Search</h3>
            <Input 
              placeholder="Name or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<iconify-icon icon="solar:magnifer-linear"></iconify-icon>}
            />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === 'all' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-3 ${
                    activeCategory === cat.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <iconify-icon icon={cat.icon}></iconify-icon>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Hourly Rate</h3>
            <div className="space-y-4">
              <input type="range" min="10" max="200" className="w-full accent-indigo-600" />
              <div className="flex justify-between text-sm text-slate-500 font-medium">
                <span>$10/hr</span>
                <span>$200+/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-sm font-medium text-slate-500">
              Showing <span className="text-slate-900">{filteredPros.length}</span> professionals
            </span>
            <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2 focus:ring-indigo-500 outline-none">
              <option>Recommended</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {filteredPros.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPros.map(pro => (
                <ProfessionalCard key={pro.id} professional={pro} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <iconify-icon icon="solar:ghost-linear" width="32"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No professionals found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
              <Button variant="ghost" className="mt-4" onClick={() => {setSearchTerm(''); setActiveCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}