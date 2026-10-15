import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ToolCard from '../components/ToolCard';

export default function ToolDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getToolBySlug, tools, toggleUpvote, toggleBookmark, isUpvoted, isBookmarked } = useApp();
  
  const tool = getToolBySlug(slug);

  // Scroll to top on mount/slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tool) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Tool not found</h1>
        <p className="text-zinc-500 mb-8">The tool you are looking for does not exist or has been removed.</p>
        <Button onClick={() => navigate('/categories')}>Browse Tools</Button>
      </div>
    );
  }

  const similarTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  const upvoted = isUpvoted(tool.id);
  const bookmarked = isBookmarked(tool.id);

  return (
    <div className="pb-20">
      {/* Header Banner */}
      <div className="h-64 md:h-80 w-full relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent z-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-24 md:-mt-32">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-10 shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-start">
          
          {/* Logo / Icon representation */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shrink-0 bg-white dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-lg overflow-hidden flex items-center justify-center">
            <img src={tool.image} alt="logo" className="w-full h-full object-cover opacity-90" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                    {tool.name}
                    {tool.verified && (
                      <iconify-icon icon="solar:verified-check-bold" class="text-blue-500 text-xl" title="Verified Tool" />
                    )}
                  </h1>
                  <Badge variant="primary">{tool.category}</Badge>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">{tool.tagline}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button 
                  variant="outline" 
                  onClick={() => toggleBookmark(tool.id)}
                  className={bookmarked ? "text-blue-600 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/20" : ""}
                >
                  <iconify-icon icon={bookmarked ? "solar:bookmark-bold" : "solar:bookmark-linear"} />
                  {bookmarked ? 'Saved' : 'Save'}
                </Button>
                <Button 
                  variant={upvoted ? "primary" : "outline"}
                  onClick={() => toggleUpvote(tool.id)}
                  className={upvoted ? "bg-blue-600 hover:bg-blue-700 text-white border-transparent" : ""}
                >
                  <iconify-icon icon={upvoted ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-up-linear"} />
                  {tool.upvotes.toLocaleString()}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 mb-8 border-t border-zinc-100 dark:border-zinc-800 pt-4 mt-4">
              <div className="flex items-center gap-1.5">
                <iconify-icon icon="solar:star-bold" class="text-amber-400 text-lg" />
                <span className="font-medium text-zinc-900 dark:text-white">{tool.rating}</span>
                <span>({tool.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <iconify-icon icon="solar:tag-price-linear" class="text-lg" />
                <span className="font-medium text-zinc-900 dark:text-white">{tool.pricing}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <iconify-icon icon="solar:calendar-date-linear" class="text-lg" />
                <span>Added {new Date(tool.addedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={tool.website} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-8" icon="solar:global-linear">
                  Visit Website
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">About {tool.name}</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>{tool.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Pricing Details</h2>
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <iconify-icon icon="solar:wallet-money-linear" class="text-2xl text-zinc-700 dark:text-zinc-300 block" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">{tool.pricing} Model</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">{tool.priceDetails}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-8">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Share this tool</h3>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" icon="simple-icons:x" aria-label="Share on X"></Button>
              <Button variant="outline" className="flex-1" icon="simple-icons:linkedin" aria-label="Share on LinkedIn"></Button>
              <Button variant="outline" className="flex-1" icon="solar:link-circle-linear" aria-label="Copy link"></Button>
            </div>
          </div>

          {similarTools.length > 0 && (
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-lg">Similar Tools</h3>
              <div className="space-y-4">
                {similarTools.map(t => (
                  <Link 
                    key={t.id} 
                    to={`/tool/${t.slug}`}
                    className="flex gap-3 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                  >
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white text-sm line-clamp-1">{t.name}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">{t.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}