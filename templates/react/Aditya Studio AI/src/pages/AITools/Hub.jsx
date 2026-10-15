import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';

const tools = [
  {
    title: 'SEO Checker',
    description: 'Analyze your titles, descriptions, and tags for optimal search ranking.',
    icon: 'solar:text-square-linear',
    path: '/ai-tools/seo-checker',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Thumbnail Predictor',
    description: 'Upload thumbnails to get AI-predicted Click-Through Rates (CTR) before publishing.',
    icon: 'solar:gallery-bold-duotone',
    path: '/ai-tools/thumbnail-checker',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'View Prediction',
    description: 'Forecast potential views based on topic trends, channel history, and length.',
    icon: 'solar:graph-up-linear',
    path: '/ai-tools/view-prediction',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'AI Image Generator',
    description: 'Create unique, copyright-free assets and background plates for your videos.',
    icon: 'solar:magic-stick-3-linear',
    path: '/ai-tools/image-generator',
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'AI Video Generator',
    description: 'Generate B-roll and full short-form videos from text prompts.',
    icon: 'solar:video-frame-play-linear',
    path: '/ai-tools/video-generator',
    color: 'from-amber-500 to-orange-500',
    isPro: true
  }
];

export default function Hub() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2 flex items-center gap-2">
          <iconify-icon icon="solar:stars-linear" class="text-indigo-400"></iconify-icon>
          AI Creator Hub
        </h1>
        <p className="text-[#a1a1aa] max-w-2xl text-base">
          Supercharge your workflow with our suite of AI-powered tools designed specifically for content creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.title} to={tool.path} className="group block h-full">
            <Card className="h-full hover:border-[#3f3f46] hover:shadow-lg hover:shadow-black/50 transition-all duration-300 relative overflow-hidden bg-[#171717]/80 backdrop-blur-sm">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`}></div>
              
              <Card.Body className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} p-0.5`}>
                    <div className="w-full h-full bg-[#171717] rounded-[10px] flex items-center justify-center">
                      <iconify-icon icon={tool.icon} width="24" height="24" class="text-white"></iconify-icon>
                    </div>
                  </div>
                  {tool.isPro && (
                    <span className="text-[10px] font-bold tracking-wider bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded shadow-lg">
                      PRO
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] flex-1">
                  {tool.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                  Try Tool <iconify-icon icon="solar:arrow-right-linear" class="ml-1" width="16"></iconify-icon>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}