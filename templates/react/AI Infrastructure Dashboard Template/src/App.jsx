import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SimulatorDashboard from './pages/SimulatorDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#050B14] relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
        
        {/* Header */}
        <header className="relative z-10 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 flex">
              <iconify-icon icon="solar:server-square-bold-duotone" width="28" height="28"></iconify-icon>
            </div>
            <div>
              <h1 className="text-2xl font-medium tracking-tight text-white m-0">لوحة تحكم البنية التحتية للذكاء الاصطناعي</h1>
              <p className="text-sm text-slate-400 m-0">محاكي توجيه الأحمال الداخلي (LiteLLM Routing)</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            النظام متصل
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative z-10 p-6 md:p-8">
          <Routes>
            <Route path="/" element={<SimulatorDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;