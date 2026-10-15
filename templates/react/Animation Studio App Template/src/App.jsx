import { Routes, Route } from 'react-router-dom';
import Editor from './pages/Editor';
import { EditorProvider } from './context/EditorContext';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black flex flex-col">
      {/* App Header */}
      <header className="h-14 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center px-6 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <iconify-icon icon="solar:pen-new-round-bold-duotone" width="20" style={{ color: 'white' }}></iconify-icon>
          </div>
          <h1 className="font-semibold tracking-tight text-white/90">Motion Studio</h1>
        </div>
        
        <div className="ml-auto flex items-center gap-4 text-sm font-medium text-gray-400">
          <button className="hover:text-white transition-colors flex items-center gap-2">
            <iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
            Projects
          </button>
          <button className="bg-white/10 hover:bg-white/15 text-white px-4 py-1.5 rounded-full transition-all flex items-center gap-2 border border-white/5 hover:scale-105 active:scale-95">
            <iconify-icon icon="solar:export-bold" width="16"></iconify-icon>
            Export
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden">
        <EditorProvider>
          <Routes>
            <Route path="/" element={<Editor />} />
          </Routes>
        </EditorProvider>
      </main>
    </div>
  );
}

export default App;