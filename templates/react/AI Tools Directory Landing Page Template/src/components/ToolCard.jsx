import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Badge from './ui/Badge';
import { clsx } from 'clsx';

export default function ToolCard({ tool, layout = 'grid' }) {
  const { toggleUpvote, toggleBookmark, isUpvoted, isBookmarked } = useApp();
  const navigate = useNavigate();

  const handleUpvote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleUpvote(tool.id);
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(tool.id);
  };

  const upvoted = isUpvoted(tool.id);
  const bookmarked = isBookmarked(tool.id);

  if (layout === 'list') {
    return (
      <Link 
        to={`/tool/${tool.slug}`}
        className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-zinc-700"
      >
        <div className="h-24 w-24 sm:h-auto sm:w-32 shrink-0 rounded-lg overflow-hidden border border-zinc-100 dark:border-zinc-800">
          <img src={tool.image} alt={tool.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 truncate pr-4">
              {tool.name}
              {tool.verified && (
                <iconify-icon icon="solar:verified-check-bold" class="text-blue-500 ml-1.5 text-sm align-middle" />
              )}
            </h3>
            <button 
              onClick={handleUpvote}
              className={clsx(
                "flex flex-col items-center justify-center p-1.5 rounded-lg border transition-colors shrink-0",
                upvoted 
                  ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" 
                  : "border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              )}
            >
              <iconify-icon icon={upvoted ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-up-linear"} class="text-lg" />
              <span className="text-[10px] font-medium leading-none mt-1">{tool.upvotes}</span>
            </button>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
            {tool.tagline}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="primary">{tool.category}</Badge>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 px-1">•</span>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">{tool.pricing}</span>
            <div className="ml-auto flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                <iconify-icon icon="solar:star-bold" class="text-amber-400" />
                <span>{tool.rating}</span>
              </div>
              <button 
                onClick={handleBookmark}
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <iconify-icon icon={bookmarked ? "solar:bookmark-bold" : "solar:bookmark-linear"} class="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid layout (default)
  return (
    <Link 
      to={`/tool/${tool.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80"
    >
      <div className="relative h-48 w-full overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
           <Badge variant="default" className="bg-white/90 backdrop-blur shadow-sm dark:bg-zinc-900/90 text-xs py-1">
            {tool.category}
          </Badge>
        </div>
        <button 
          onClick={handleBookmark}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur shadow-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <iconify-icon icon={bookmarked ? "solar:bookmark-bold" : "solar:bookmark-linear"} class="text-lg" />
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 line-clamp-1">
            {tool.name}
            {tool.verified && (
              <iconify-icon icon="solar:verified-check-bold" class="text-blue-500 ml-1.5 text-[15px] align-text-bottom" />
            )}
          </h3>
          <div className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-300 shrink-0 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-md">
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-sm" />
            {tool.rating}
          </div>
        </div>
        
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4 flex-1">
          {tool.tagline}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
            {tool.pricing}
          </span>
          <button 
            onClick={handleUpvote}
            className={clsx(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium",
              upvoted 
                ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" 
                : "border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <iconify-icon icon={upvoted ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-up-linear"} class="text-sm" />
            {tool.upvotes.toLocaleString()}
          </button>
        </div>
      </div>
    </Link>
  );
}