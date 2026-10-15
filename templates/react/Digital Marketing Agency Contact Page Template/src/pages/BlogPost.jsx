import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple parser to make the fake markdown-like content look decent
  const renderContent = (content) => {
    return content.split('\n').map((paragraph, idx) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      if (trimmed.startsWith('###')) {
        return <h3 key={idx} className="text-2xl font-semibold tracking-tight mt-10 mb-4 text-slate-900">{trimmed.replace('###', '').trim()}</h3>;
      }
      
      return <p key={idx} className="mb-6 text-slate-600 leading-relaxed text-lg">{trimmed}</p>;
    });
  };

  return (
    <article className="animate-in fade-in duration-500 pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Bloga Dön
        </Link>

        <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-medium">{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-600">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-slate-900">{post.author}</div>
            <div className="text-xs text-slate-500">İçerik Yöneticisi</div>
          </div>
        </div>

        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Newsletter Box at end of article */}
        <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
          <iconify-icon icon="solar:letter-linear" width="32" className="text-slate-400 mb-4"></iconify-icon>
          <h4 className="text-xl font-medium text-slate-900 mb-2">Bültene Katılın</h4>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Yeni makaleler, SEO ipuçları ve pazarlama trendleri doğrudan kutunuza gelsin. Spam yok, sadece değer.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              required
            />
            <button type="submit" className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              Abone Ol
            </button>
          </form>
        </div>

      </div>
    </article>
  );
}