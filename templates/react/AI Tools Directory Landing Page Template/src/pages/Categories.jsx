import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import ToolCard from '../components/ToolCard';
import Input from '../components/ui/Input';
import { clsx } from 'clsx';

export default function Categories() {
  const { tools, categories } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('cat') || 'All';
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCategory !== 'All') params.set('cat', activeCategory);
    if (searchQuery) params.set('search', searchQuery);
    setSearchParams(params, { replace: true });
  }, [activeCategory, searchQuery, setSearchParams]);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* 3D AI Working Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white dark:bg-zinc-950">
        {/* Perspective Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3b82f62a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f62a_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)_scale(2.5)_translateY(200px)] origin-bottom opacity-60 dark:opacity-40"
          style={{ maskImage: 'linear-gradient(to top, white 10%, transparent 90%)', WebkitMaskImage: 'linear-gradient(to top, white 10%, transparent 90%)' }}
        />
        
        {/* Scanning Energy Line */}
        <div className="absolute inset-0 [transform:perspective(1000px)_rotateX(60deg)_scale(2.5)_translateY(200px)] origin-bottom">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-[pulse_3s_ease-in-out_infinite]" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-[10%] w-[40vw] h-[40vw] max-w-lg max-h-lg bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-[10%] w-[40vw] h-[40vw] max-w-lg max-h-lg bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite_1s]" />

        {/* Floating Data Nodes (simulating AI computation) */}
        <div className="absolute inset-0 opacity-50 dark:opacity-70">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Browse AI Tools
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            Filter and discover exactly what you need from our comprehensive database of AI-powered applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:magnifer-linear" /> Search
              </h3>
              <Input 
                placeholder="Search tools..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur"
              />
            </div>

            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:tag-linear" /> Categories
              </h3>
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={clsx(
                    "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                    activeCategory === 'All' 
                      ? "bg-zinc-100/80 text-zinc-900 dark:bg-zinc-800/80 dark:text-white shadow-sm" 
                      : "text-zinc-600 hover:bg-zinc-50/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
                  )}
                >
                  <span>All Categories</span>
                  <span className="text-xs bg-zinc-200/50 dark:bg-zinc-700/50 px-2 py-0.5 rounded-full">{tools.length}</span>
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={clsx(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                      activeCategory === cat.name 
                        ? "bg-zinc-100/80 text-zinc-900 dark:bg-zinc-800/80 dark:text-white shadow-sm" 
                        : "text-zinc-600 hover:bg-zinc-50/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <iconify-icon icon={cat.icon} class="text-lg opacity-70" />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-xs bg-zinc-100/50 dark:bg-zinc-800/50 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:dollar-minimalistic-linear" /> Pricing Model
              </h3>
              <div className="space-y-3">
                {['Free', 'Freemium', 'Paid', 'Open Source'].map(price => (
                  <label key={price} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5 border border-zinc-300 dark:border-zinc-600 rounded bg-white/50 dark:bg-zinc-900/50 group-hover:border-blue-500 transition-colors">
                      <input type="checkbox" className="sr-only peer" />
                      <iconify-icon icon="solar:check-read-bold" class="opacity-0 peer-checked:opacity-100 text-blue-500 transition-opacity absolute" />
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 select-none group-hover:text-zinc-900 dark:group-hover:text-zinc-200">{price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50">
                Showing <span className="font-semibold text-zinc-900 dark:text-white">{filteredTools.length}</span> tools
                {activeCategory !== 'All' && <span> in {activeCategory}</span>}
              </p>

              <div className="flex items-center gap-2 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-1 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={clsx(
                    "p-1.5 rounded-lg transition-colors",
                    viewMode === 'grid' ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  )}
                  aria-label="Grid view"
                >
                  <iconify-icon icon="solar:widget-5-linear" class="text-xl block" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={clsx(
                    "p-1.5 rounded-lg transition-colors",
                    viewMode === 'list' ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  )}
                  aria-label="List view"
                >
                  <iconify-icon icon="solar:list-linear" class="text-xl block" />
                </button>
              </div>
            </div>

            {filteredTools.length > 0 ? (
              <div className={clsx(
                "grid gap-6",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              )}>
                {filteredTools.map(tool => (
                  <div key={tool.id} className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm rounded-2xl">
                    <ToolCard tool={tool} layout={viewMode} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <iconify-icon icon="solar:ghost-linear" class="text-3xl text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No tools found</h3>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">
                  Try adjusting your search or category filters to find what you're looking for.
                </p>
                <button 
                  className="px-5 py-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}