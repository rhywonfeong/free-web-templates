import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import { useEffect } from 'react';
import Button from '../components/Button';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Yazı Bulunamadı</h1>
        <p className="text-slate-500 mb-8">Aradığınız blog yazısı mevcut değil veya taşınmış olabilir.</p>
        <Button as={Link} to="/blog">Blog'a Dön</Button>
      </div>
    );
  }

  return (
    <article className="w-full bg-white pb-24">
      {/* Article Header */}
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-8 transition-colors group">
            <span className="transition-transform group-hover:-translate-x-1 flex">
              <iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
            </span>
            Tüm Yazılara Dön
          </Link>
          
          <div className="flex items-center justify-center gap-3 text-xs text-slate-500 mb-6 font-medium uppercase tracking-widest">
            <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{post.category}</span>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-slate prose-lg md:prose-xl max-w-none">
          {/* Since we have raw HTML in mock content, we dangerouslySetInnerHTML. In a real app with CMS, sanitize this! */}
          <div 
            className="text-slate-600 leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:tracking-tight [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-50 p-6 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
            OD
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-slate-900 mb-1">Oğulcan Demirer</h4>
            <p className="text-sm text-slate-500 mb-3">Kıdemli SEO Uzmanı & Kurucu</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Veri odaklı arama motoru optimizasyonu stratejileri geliştirerek markaların organik büyüme hedeflerine ulaşmasına yardımcı oluyorum.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;