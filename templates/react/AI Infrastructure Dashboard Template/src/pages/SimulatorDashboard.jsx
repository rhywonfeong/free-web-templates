import { useState, useEffect, useRef } from 'react';
import NodeCard from '../components/NodeCard';
import Terminal from '../components/Terminal';
import NetworkOverlay from '../components/NetworkOverlay';

export default function SimulatorDashboard() {
  // State for server loads
  const [mainLoad, setMainLoad] = useState(30); // Starting with some base load
  const [assistantLoad, setAssistantLoad] = useState(10);
  
  // State for terminal logs
  const [logs, setLogs] = useState([
    { id: 1, time: new Date().toLocaleTimeString(), message: 'النظام يعمل بشكل طبيعي. وحدة LiteLLM جاهزة لتوجيه الطلبات.', type: 'info' }
  ]);

  // State for active animations
  const [activeRoutes, setActiveRoutes] = useState([]);

  const addLog = (message, type = 'info') => {
    setLogs(prev => [
      ...prev, 
      { id: Date.now(), time: new Date().toLocaleTimeString(), message, type }
    ].slice(-50)); // Keep last 50 logs
  };

  // Load decay mechanic
  useEffect(() => {
    const decayTimer = setInterval(() => {
      setMainLoad(prev => Math.max(0, prev - 1.5)); // Decay 1.5% per tick
      setAssistantLoad(prev => Math.max(0, prev - 1.5));
    }, 1000);
    return () => clearInterval(decayTimer);
  }, []);

  // Actions
  const handleInternalTask = () => {
    setMainLoad(prev => Math.min(100, prev + 40));
    addLog('تم تشغيل مسار داخلي للشركة: زيادة الضغط على العقل الرئيسي (+40%).', 'system');
  };

  const handleNPUMeeting = () => {
    setMainLoad(prev => Math.min(100, prev + 20));
    addLog('تسجيل اجتماع NPU: زيادة الضغط على العقل الرئيسي (+20%).', 'system');
  };

  const handleExternalRequest = () => {
    const isMainOverloaded = mainLoad >= 80;
    const target = isMainOverloaded ? 'assistant' : 'main';
    const routeId = Date.now();

    // Trigger Animation
    setActiveRoutes(prev => [...prev, { id: routeId, target }]);

    // Immediate log decision
    if (isMainOverloaded) {
      addLog(`LiteLLM: تحذير! Minisforum AI X1 مشغول (${Math.round(mainLoad)}%)، تم تحويل الطلب إلى Corsair AI.`, 'warning');
    } else {
      addLog(`LiteLLM: تم توجيه الطلب إلى Minisforum AI X1 (الحمل مستقر ${Math.round(mainLoad)}%).`, 'success');
    }

    // Apply load after animation delay (simulating network travel)
    setTimeout(() => {
      if (target === 'main') {
        setMainLoad(prev => Math.min(100, prev + 20));
      } else {
        setAssistantLoad(prev => Math.min(100, prev + 20));
      }
      // Clean up animation state
      setActiveRoutes(prev => prev.filter(r => r.id !== routeId));
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      
      {/* Simulation Area */}
      <div className="relative flex-1 min-h-[500px] glass-panel glass-panel-glow rounded-2xl p-8 flex flex-col">
        
        {/* Network Overlay (SVG Lines) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <NetworkOverlay activeRoutes={activeRoutes} />
        </div>

        {/* Nodes Grid */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center h-full">
          
          {/* Left Column: Gateway */}
          <div className="flex flex-col justify-center h-full max-w-sm w-full mx-auto">
            <NodeCard
              title="Minisforum MS-02 Ultra"
              subtitle="(البوابة)"
              icon="solar:shield-network-bold-duotone"
              color="blue"
            >
              <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-700/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <iconify-icon icon="solar:routing-2-bold-duotone" className="text-blue-400" width="24" height="24"></iconify-icon>
                  <h3 className="font-medium text-slate-200">LiteLLM (موزع الأحمال)</h3>
                </div>
                <button
                  onClick={handleExternalRequest}
                  className="w-full relative z-10 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-[0.98]"
                >
                  <iconify-icon icon="solar:rocket-bold-duotone" width="20" height="20"></iconify-icon>
                  إرسال طلب خارجي (من المهندسين)
                </button>
              </div>
            </NodeCard>
          </div>

          {/* Center Column: Switch */}
          <div className="flex flex-col items-center justify-center h-full mx-8">
            <div className="flex flex-col items-center gap-3">
              <div className="relative p-5 rounded-2xl glass-panel border-slate-600/50 flex items-center justify-center z-10 shadow-2xl">
                {/* Glowing status indicator */}
                <div className="absolute top-3 right-3 flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-75"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
                </div>
                <iconify-icon icon="solar:routing-3-bold-duotone" className="text-slate-300" width="48" height="48"></iconify-icon>
              </div>
              <div className="text-center px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-sm font-medium tracking-tight text-slate-300 backdrop-blur-md">
                Managed Switch 2.5Gbe
              </div>
            </div>
          </div>

          {/* Right Column: Brains */}
          <div className="flex flex-col justify-around h-full gap-8 max-w-sm w-full mx-auto">
            
            {/* Main Brain */}
            <NodeCard
              title="Minisforum AI X1 Pro-370"
              subtitle="(العقل الرئيسي)"
              icon="solar:cpu-bold-duotone"
              color={mainLoad >= 80 ? "red" : "cyan"}
              isActive={activeRoutes.some(r => r.target === 'main')}
            >
              <div className="mt-5 space-y-4">
                <LoadBar load={mainLoad} label="مستوى الضغط" />
                
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleInternalTask}
                    className="flex items-center text-sm justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 py-2.5 px-4 rounded-lg transition-all active:scale-[0.98]"
                  >
                    <iconify-icon icon="solar:database-bold-duotone" width="18" height="18"></iconify-icon>
                    تشغيل مسار داخلي للشركة
                  </button>
                  <button
                    onClick={handleNPUMeeting}
                    className="flex items-center text-sm justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 py-2.5 px-4 rounded-lg transition-all active:scale-[0.98]"
                  >
                    <iconify-icon icon="solar:video-frame-bold-duotone" width="18" height="18"></iconify-icon>
                    تسجيل اجتماع عبر وحدة NPU
                  </button>
                </div>
              </div>
            </NodeCard>

            {/* Assistant Brain */}
            <NodeCard
              title="Corsair AI Workstation 300"
              subtitle="(العقل المساعد)"
              icon="solar:cpu-bold-duotone"
              color={assistantLoad >= 80 ? "red" : "indigo"}
              isActive={activeRoutes.some(r => r.target === 'assistant')}
            >
              <div className="mt-5 space-y-4">
                <LoadBar load={assistantLoad} label="مستوى الضغط" />
                <div className="h-[92px] flex items-center justify-center rounded-lg border border-slate-800/50 bg-slate-900/30 text-slate-500 text-sm">
                  في وضع الاستعداد (Standby)
                </div>
              </div>
            </NodeCard>

          </div>
        </div>
      </div>

      {/* Terminal Section */}
      <Terminal logs={logs} />

    </div>
  );
}

// Subcomponent: Load Bar
function LoadBar({ load, label }) {
  const isOverloaded = load >= 80;
  const isWarning = load >= 60 && load < 80;
  
  const barColorClass = isOverloaded 
    ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
    : isWarning 
      ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
      : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]';

  return (
    <div>
      <div className="flex justify-between items-end mb-1.5">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
          isOverloaded ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
          isWarning ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 
          'bg-slate-800 text-slate-400 border border-slate-700'
        }`}>
          {Math.round(load)}%
          {isOverloaded && <iconify-icon icon="solar:danger-triangle-bold" width="12"></iconify-icon>}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
        <div 
          className={`h-full rounded-full transition-all duration-300 ease-out ${barColorClass}`}
          style={{ width: `${Math.min(100, Math.max(0, load))}%` }}
        ></div>
      </div>
    </div>
  );
}