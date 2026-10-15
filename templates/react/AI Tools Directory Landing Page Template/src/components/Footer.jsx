import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 group mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <iconify-icon icon="solar:cpu-bolt-bold" class="text-white text-xl" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
                NexAI
              </span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto md:mx-0">
              Discover, review, and organize the best artificial intelligence tools to supercharge your workflow.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start text-zinc-400">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <iconify-icon icon="simple-icons:x" class="text-xl" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <iconify-icon icon="simple-icons:linkedin" class="text-xl" />
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:github" class="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/categories" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Browse Categories</Link></li>
              <li><Link to="/submit" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Submit a Tool</Link></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing for Creators</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">AI Newsletter</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Glossary</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {currentYear} NexAI Directory. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Built with React</span>
            <iconify-icon icon="solar:heart-bold" class="text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}