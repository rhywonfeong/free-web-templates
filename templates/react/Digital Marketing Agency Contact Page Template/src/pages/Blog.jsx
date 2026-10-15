import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

export default function Blog() {
  return (
    <div className="animate-in fade-in duration-500 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
            Blog & İçgörüler
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Dijital pazarlama dünyasından son trendler, vaka çalışmaları ve büyüme stratejileri üzerine güncel yazılarımız.
          </p>
        </div>

        {/* Featured Post (First post) */}
        {blogPosts.length > 0 && (
          <div className="mb-16 group">
            <Link to={`/blog/${blogPosts[0].slug}`} className="block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-4 border border-slate-100 transition-all hover:shadow-md">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                    Öne Çıkan
                  </div>
                </div>
                <div className="p-4 md:pr-12">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="font-medium text-slate-900">{blogPosts[0].category}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-500 mb-6 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                    Makaleyi Oku <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col h-full">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="font-medium text-slate-900">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                {post.excerpt}
              </p>
              <div className="text-xs font-medium text-slate-400 mt-auto">
                {post.readTime}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}