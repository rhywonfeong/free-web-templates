import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
      <Link to={`/blog/${post.slug}`} className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full text-slate-800 shadow-sm">
          {post.category}
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <time>{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="flex items-center gap-1">
            <iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
            {post.readTime}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`} className="block mb-3">
          <h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 mt-auto hover:text-indigo-700 transition-colors group/link"
        >
          Devamını Oku
          <span className="transition-transform group-hover/link:translate-x-1 flex">
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;