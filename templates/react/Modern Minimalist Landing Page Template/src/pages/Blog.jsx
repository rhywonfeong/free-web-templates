import { useState } from 'react';
import { blogPosts } from '../data/mockData';
import BlogCard from '../components/BlogCard';
import { clsx } from 'clsx';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  // Extract unique categories
  const categories = ['Tümü', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="flex flex-col w-full pb-24 min-h-screen">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">SEO Blog</h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Arama motoru optimizasyonu, içerik pazarlaması ve dijital büyüme stratejileri üzerine güncel makaleler, rehberler ve sektör analizleri.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pt-12 bg-slate-50 flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  activeCategory === category 
                    ? "bg-slate-900 text-white border-slate-900" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200">
              <div className="text-slate-400 mb-4 flex justify-center">
                <iconify-icon icon="solar:document-text-linear" width="48"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">İçerik Bulunamadı</h3>
              <p className="text-slate-500">Bu kategoride henüz bir yazı yayınlanmamış.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;