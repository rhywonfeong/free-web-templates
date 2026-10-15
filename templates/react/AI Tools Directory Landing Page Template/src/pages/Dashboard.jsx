import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { Link, Navigate } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import Button from '../components/ui/Button';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { tools, isBookmarked } = useApp();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Get saved tools
  const savedTools = tools.filter(t => isBookmarked(t.id));
  
  // Mock submitted tools
  const submittedTools = [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Hello, {user.name}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">{user.email}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/submit">
            <Button variant="primary" icon="solar:add-circle-linear">Submit Tool</Button>
          </Link>
          <Button variant="outline" onClick={logout} className="text-red-600 hover:bg-red-50 hover:border-red-200 dark:text-red-400">
            Log out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Saved Tools */}
          <section>
            <div className="flex items-center justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <iconify-icon icon="solar:bookmark-linear" class="text-blue-500" />
                Saved Tools
              </h2>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-sm font-medium">
                {savedTools.length}
              </span>
            </div>
            
            {savedTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} layout="list" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 border-dashed">
                <iconify-icon icon="solar:bookmark-circle-linear" class="text-4xl text-zinc-300 dark:text-zinc-700 mb-3 block mx-auto" />
                <h3 className="text-zinc-900 dark:text-white font-medium mb-1">No saved tools yet</h3>
                <p className="text-zinc-500 text-sm mb-4">Discover tools and bookmark them to access later.</p>
                <Link to="/categories">
                  <Button variant="outline" size="sm">Browse Tools</Button>
                </Link>
              </div>
            )}
          </section>

          {/* Submitted Tools */}
          <section>
            <div className="flex items-center justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <iconify-icon icon="solar:box-linear" class="text-violet-500" />
                My Submissions
              </h2>
            </div>
            
            {submittedTools.length > 0 ? (
               <div className="grid grid-cols-1 gap-4">
                {/* Render submitted tools */}
               </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 border-dashed">
                <iconify-icon icon="solar:ghost-linear" class="text-4xl text-zinc-300 dark:text-zinc-700 mb-3 block mx-auto" />
                <h3 className="text-zinc-900 dark:text-white font-medium mb-1">You haven't submitted any tools</h3>
                <p className="text-zinc-500 text-sm mb-4">Built an AI product? Submit it to get featured.</p>
                <Link to="/submit">
                  <Button variant="outline" size="sm">Submit a Tool</Button>
                </Link>
              </div>
            )}
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Account Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Status</span>
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">Active</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Role</span>
                <span className="text-zinc-900 dark:text-white font-medium capitalize">{user.role || 'Member'}</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-zinc-500 dark:text-zinc-400">Joined</span>
                <span className="text-zinc-900 dark:text-white font-medium">Oct 2023</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl p-6 text-white shadow-md">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <iconify-icon icon="solar:crown-star-bold" class="text-yellow-300" />
              Pro Creator
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Upgrade to promote your tools and get access to detailed analytics.
            </p>
            <Button variant="primary" className="bg-white text-zinc-900 hover:bg-zinc-100 w-full">
              Upgrade Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}