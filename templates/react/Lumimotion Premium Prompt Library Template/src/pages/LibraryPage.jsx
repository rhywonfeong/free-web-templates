import React, { useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionFrame from '../components/ui/SectionFrame';
import PromptCard from '../components/library/PromptCard';

gsap.registerPlugin(ScrollTrigger);

// Extended dataset for the full library view
const LIBRARY_PROMPTS = [
  {
    id: 1,
    title: 'B2B SaaS Dashboard',
    category: 'Dashboard',
    desc: 'Structured system for complex data tables, metric cards, and sidebar navigation.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/decb0ab1-7420-4c4c-b697-91e7e54b28e5_1600w.png',
    tools: ['claude', 'googlegemini'],
    locked: false
  },
  {
    id: 2,
    title: 'Fintech Mobile App',
    category: 'Mobile',
    desc: 'Transaction history, wallet balance interactions, and quick send actions.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4536c204-9af4-4506-a136-7afb73bba7a4_1600w.png',
    tools: ['claude', 'openai'],
    locked: false
  },
  {
    id: 3,
    title: 'WebGL Marketing Hero',
    category: 'Hero',
    desc: 'Cinematic 3D hero section prompts with scroll-triggered animation structures.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8c88cbb-e881-4280-842d-ecafc3670d74_1600w.png',
    tools: ['claude'],
    locked: true
  },
  {
    id: 4,
    title: 'E-commerce Checkout',
    category: 'Web',
    desc: 'High-converting multi-step checkout flow with order summary and payment forms.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84b886a3-f823-458a-b79b-2b2818dfcdca_1600w.png',
    tools: ['googlegemini', 'openai'],
    locked: true
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    category: 'Component',
    desc: 'Conversational UI patterns, typing indicators, and structured message blocks.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d6b211-9e83-488c-8f3f-42a77b8e9532_1600w.png',
    tools: ['claude', 'googlegemini', 'openai'],
    locked: true
  },
  {
    id: 6,
    title: 'Editorial Blog Layout',
    category: 'Web',
    desc: 'Typography-heavy editorial design with pull quotes and reading progress.',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=80',
    tools: ['claude'],
    locked: true
  },
  {
    id: 7,
    title: 'Crypto Trading Terminal',
    category: 'Web',
    desc: 'Advanced charting layouts, order books, and real-time market data panels.',
    image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80',
    tools: ['claude'],
    locked: true
  },
  {
    id: 8,
    title: 'Settings Preference OS',
    category: 'Component',
    desc: 'Nested navigation, toggle switches, and tabbed interfaces for user settings.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80',
    tools: ['openai'],
    locked: false
  },
  {
    id: 9,
    title: 'Auth Wizard Flow',
    category: 'Web',
    desc: 'Multi-step onboarding wizard interfaces with progress indicators.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    tools: ['googlegemini'],
    locked: false
  },
  {
    id: 10,
    title: 'Kanban Project Board',
    category: 'Dashboard',
    desc: 'Drag-and-drop task boards, assignee avatars, and inline tag editing.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    tools: ['claude', 'openai'],
    locked: true
  },
  {
    id: 11,
    title: 'Healthcare Patient Portal',
    category: 'Web',
    desc: 'Accessible appointments, test results tables, and messaging views.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tools: ['openai'],
    locked: true
  },
  {
    id: 12,
    title: 'Fitness Tracking App',
    category: 'Mobile',
    desc: 'Activity rings, workout history graphs, and social feed layouts.',
    image: 'https://images.unsplash.com/photo-1526506115935-7c0147ebbe8a?w=800&q=80',
    tools: ['claude'],
    locked: true
  }
];

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = ['All', ...new Set(LIBRARY_PROMPTS.map(p => p.category))];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter prompts whenever activeFilter or search changes
  const filteredPrompts = useMemo(() => {
    return LIBRARY_PROMPTS.filter(prompt => {
      const matchesCategory = activeFilter === 'All' || prompt.category === activeFilter;
      const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prompt.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Re-trigger GSAP animations when the grid content updates
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for cards
      gsap.set('.scroll-fade-in', { opacity: 0, y: 40, filter: 'blur(12px)' });
      
      // Batch reveal as user scrolls
      ScrollTrigger.batch('.scroll-fade-in', {
        start: "top 90%",
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true
          });
        }
      });
    });

    return () => ctx.revert();
  }, [filteredPrompts]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. LIBRARY HEADER SECTION */}
      <SectionFrame className="pt-32 pb-16 px-6 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
          
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-geist font-light tracking-tighter text-white mb-4">
              Prompt Library
            </h1>
            <p className="text-base text-white/50 max-w-2xl font-geist tracking-tight">
              A meticulously curated collection of structural prompts designed to enforce perfect UI layouts across various product contexts.
            </p>
          </div>

          {/* Filtering and Search Controls */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
            
            {/* Search */}
            <div className="relative w-full md:w-72">
              <iconify-icon icon="solar:magnifer-linear" class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"></iconify-icon>
              <input 
                type="text" 
                placeholder="Search templates..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white text-xs pl-9 pr-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#c6f91f]/50 focus:bg-white/10 transition-colors font-geist tracking-tight"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((filter) => (
                <button 
                  key={filter} 
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs px-4 py-2 transition-all font-geist tracking-tight ${
                    activeFilter === filter 
                      ? 'border border-[#c6f91f] text-[#c6f91f] bg-[#c6f91f]/5 shadow-[0_0_15px_rgba(198,249,31,0.15)]' 
                      : 'border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>
      </SectionFrame>

      {/* 2. PROMPT GRID SECTION */}
      <SectionFrame className="py-16 px-6 bg-transparent relative z-10 flex-1 border-none" noBorderBottom>
        <div className="max-w-6xl mx-auto min-h-[50vh]">
          
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard key={prompt.id} prompt={prompt} index={index} />
              ))}
            </div>
          ) : (
            <div className="w-full py-24 flex flex-col items-center justify-center text-center border border-white/10 border-dashed bg-white/5">
              <iconify-icon icon="solar:folder-error-linear" class="text-4xl text-white/20 mb-4"></iconify-icon>
              <h3 className="text-lg text-white font-geist font-light tracking-tight mb-2">No templates found</h3>
              <p className="text-sm text-white/40 font-geist tracking-tight">Try adjusting your search criteria or selecting a different category.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                className="mt-6 px-4 py-2 bg-white/10 text-white/70 text-xs hover:bg-white/20 hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </SectionFrame>

      {/* 3. FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p className="text-[10px] text-white/40 font-geist tracking-tight">© {new Date().getFullYear()} Lumimotion. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}