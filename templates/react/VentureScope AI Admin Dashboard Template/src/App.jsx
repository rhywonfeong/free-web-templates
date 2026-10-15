import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Overview, Directory, Embeddings, KnowledgeBase, Broadcasts, TechHealth } from './pages';

function SidebarItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${
          isActive 
            ? 'bg-zinc-800 text-white border-l-2 border-emerald-400' 
            : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border-l-2 border-transparent'
        }`
      }
    >
      <iconify-icon icon={icon} width="16" height="16"></iconify-icon>
      {label}
    </NavLink>
  );
}

function SidebarGroup({ title, children }) {
  return (
    <div className="mb-6">
      <div className="px-4 mb-2 flex items-center gap-2">
        <div className="h-[1px] flex-1 bg-zinc-800"></div>
        <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-500">{title}</span>
        <div className="h-[1px] flex-1 bg-zinc-800"></div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Overview';
      case '/directory': return 'Directory';
      case '/embeddings': return 'Embeddings Monitor';
      case '/knowledge': return 'Knowledge Base';
      case '/broadcasts': return 'Broadcasts';
      case '/health': return 'Technical Health';
      default: return 'Command Center';
    }
  };

  return (
    <div className="flex h-screen w-full bg-zinc-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[220px] flex-shrink-0 border-r border-zinc-800 bg-zinc-950 flex flex-col z-20">
        <div className="h-14 flex items-center px-4 border-b border-zinc-800 justify-between text-zinc-300">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <iconify-icon icon="solar:radar-linear" width="18" className="text-emerald-400"></iconify-icon>
            VentureScope
          </div>
          <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          <SidebarGroup title="Platform">
            <SidebarItem to="/" icon="solar:widget-5-linear" label="Overview" />
            <SidebarItem to="/directory" icon="solar:users-group-rounded-linear" label="Directory" />
            <SidebarItem to="/permissions" icon="solar:shield-keyhole-linear" label="Permissions" />
          </SidebarGroup>

          <SidebarGroup title="Data Pipeline">
            <SidebarItem to="/transcripts" icon="solar:document-text-linear" label="Transcripts" />
            <SidebarItem to="/embeddings" icon="solar:database-linear" label="Embeddings" />
            <SidebarItem to="/github" icon="simple-icons:github" label="GitHub Syncs" />
          </SidebarGroup>

          <SidebarGroup title="Intelligence">
            <SidebarItem to="/knowledge" icon="solar:brain-linear" label="Knowledge Base" />
            <SidebarItem to="/chat" icon="solar:chat-line-linear" label="Chat Logs" />
            <SidebarItem to="/prompt" icon="solar:pen-new-square-linear" label="Prompt Config" />
          </SidebarGroup>

          <SidebarGroup title="Communications">
            <SidebarItem to="/broadcasts" icon="solar:megaphone-linear" label="Broadcasts" />
            <SidebarItem to="/alerts" icon="solar:bell-linear" label="System Alerts" />
          </SidebarGroup>

          <SidebarGroup title="Infrastructure">
            <SidebarItem to="/health" icon="solar:bolt-linear" label="Worker Status" />
            <SidebarItem to="/vectordb" icon="solar:server-square-linear" label="Vector DB" />
            <SidebarItem to="/storage" icon="solar:cloud-linear" label="Storage" />
          </SidebarGroup>

          <SidebarGroup title="Settings">
            <SidebarItem to="/config" icon="solar:settings-linear" label="System Config" />
            <SidebarItem to="/auth" icon="solar:key-linear" label="Auth Providers" />
          </SidebarGroup>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm z-10 sticky top-0">
          <h1 className="text-sm font-semibold text-white tracking-tight">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <iconify-icon icon="solar:magnifier-linear" className="absolute left-2.5 top-1.5 text-zinc-500" width="14"></iconify-icon>
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-zinc-900 border border-zinc-800 rounded-md py-1 pl-8 pr-3 text-xs text-zinc-300 w-64 focus:outline-none focus:border-zinc-600 font-mono placeholder:font-sans"
              />
            </div>
            <div className="w-px h-4 bg-zinc-800"></div>
            <button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                SA
              </div>
              Super Admin
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/embeddings" element={<Embeddings />} />
              <Route path="/knowledge" element={<KnowledgeBase />} />
              <Route path="/broadcasts" element={<Broadcasts />} />
              <Route path="/health" element={<TechHealth />} />
              {/* Fallbacks for unstyled routes to keep demo unbroken */}
              <Route path="*" element={<div className="text-zinc-500 text-sm font-mono border border-zinc-800 border-dashed rounded-md p-8 text-center flex flex-col items-center gap-2"><iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>Module pending implementation</div>} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}