import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';

export default function Blog() {
  const { blogPosts } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Insights & Updates
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          Read the latest news, tutorials, and deep dives into the world of artificial intelligence.
        </p>
        
        <div className="max-w-md mx-auto relative">
          <Input placeholder="Search articles..." icon="solar:magnifer-linear" className="py-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <Link 
            key={post.id} 
            to="#" 
            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform w-fit">
                Read article <iconify-icon icon="solar:arrow-right-linear" class="ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-8 md:p-12 text-center border border-blue-100 dark:border-blue-800/30">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">Subscribe to our newsletter</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
          Get the latest AI news and tool reviews delivered straight to your inbox every week.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input type="email" placeholder="Enter your email" className="h-12 bg-white" required />
          <button type="submit" className="h-12 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}