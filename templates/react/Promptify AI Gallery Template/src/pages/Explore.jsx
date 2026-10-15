import { useState } from 'react';
import { promptsData, categories } from '../data/prompts';
import PromptCard from '../components/PromptCard';
import { clsx } from 'clsx';

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrompts = promptsData.filter(prompt => {
    const matchesCategory = activeCategory === 'All' || prompt.category === activeCategory;
    const matchesSearch = prompt.promptText.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Explore Hub</h1>
          <p className="text-zinc-400 max-w-2xl">
            Discover the perfect prompt for your next creation. Click any image to reveal the magic behind it.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === category 
                    ? "bg-white text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 group">
            <iconify-icon 
              icon="solar:magnifer-linear" 
              class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-white transition-colors"
            ></iconify-icon>
            <input 
              type="text" 
              placeholder="Search prompts or tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} promptData={prompt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-white/10 border-dashed rounded-3xl bg-white/5">
            <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4">
               <iconify-icon icon="solar:ghost-linear" width="32" class="text-white/50"></iconify-icon>
            </div>
            <h3 className="text-xl font-medium mb-2">No prompts found</h3>
            <p className="text-zinc-400 text-sm">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}