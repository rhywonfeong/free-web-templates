import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950">
      <header className="h-16 border-b border-white/10 flex items-center px-6 shrink-0 backdrop-blur-md bg-zinc-950/50 z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
             <iconify-icon icon="solar:pen-new-square-linear" class="text-white text-lg"></iconify-icon>
          </div>
          <h1 className="font-semibold tracking-tight text-lg text-white">MotionDraw</h1>
        </div>
        <div className="ml-auto flex items-center gap-4 text-sm font-medium text-zinc-400">
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <iconify-icon icon="solar:folder-with-files-linear" class="text-lg"></iconify-icon>
            Library
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
             <iconify-icon icon="solar:settings-linear" class="text-lg"></iconify-icon>
             Settings
          </span>
        </div>
      </header>
      <main className="flex-1 flex overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}