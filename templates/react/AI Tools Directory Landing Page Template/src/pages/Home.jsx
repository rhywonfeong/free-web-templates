import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import ToolCard from '../components/ToolCard';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Home() {
  const { categories, getTrendingTools, getFeaturedTools, tools } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const trendingTools = getTrendingTools();
  const featuredTools = getFeaturedTools();

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 border border-blue-100 dark:border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Discover 5,000+ AI Tools Updated Daily
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
            Find the perfect AI tool <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">for your workflow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            The largest directory of artificial intelligence tools, curated and reviewed to help you work smarter, not harder.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <iconify-icon icon="solar:magnifer-linear" class="text-xl text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for 'video editing', 'copywriting', or tool name..."
              className="block w-full pl-12 pr-32 py-4 md:py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-base md:text-lg text-zinc-900 dark:text-white shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 transition-all outline-none"
            />
            <div className="absolute inset-y-2 right-2 flex items-center">
              <Button type="submit" variant="primary" className="h-full px-6 rounded-xl text-base">
                Search
              </Button>
            </div>
          </form>
          
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 flex-wrap">
            <span>Popular searches:</span>
            {['Chatbots', 'Image Generators', 'SEO', 'Voice AI'].map(term => (
              <button 
                key={term} 
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Browse by Category</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Explore tools tailored to your specific needs.</p>
          </div>
          <Link to="/categories" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline hidden sm:block">
            View all categories &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/categories?cat=${category.name}`}
              className="group p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-md dark:hover:border-blue-500/50 transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <iconify-icon icon={category.icon} class="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.name}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{category.count} tools</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 dark:bg-rose-500/20 rounded-lg text-rose-600 dark:text-rose-400">
              <iconify-icon icon="solar:fire-bold" class="text-xl block" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Trending This Week</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1">The most upvoted tools by the community.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} layout="grid" />
          ))}
        </div>
      </section>

      {/* Featured Listing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Promote your AI product</h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Get your tool in front of thousands of early adopters, founders, and creators looking for the next big thing in AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/submit">
                <Button variant="primary" className="bg-white text-zinc-900 hover:bg-zinc-100">
                  Submit Tool Free
                </Button>
              </Link>
              <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800">
                View Promotion Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
          <iconify-icon icon="solar:letter-bold" class="text-3xl" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Stay ahead of the AI curve
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
          Join 50,000+ readers getting the weekly rundown of the best new AI tools and insights. No spam, ever.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            icon="solar:letter-linear"
            className="h-12"
            required
          />
          <Button type="submit" variant="primary" className="h-12 px-8 whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}