import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const GRID_SIZE = 40;
const CANVAS_WIDTH = 20000;
const CANVAS_HEIGHT = 600;
const GROUND_HEIGHT = 60;
const PLAYABLE_HEIGHT = CANVAS_HEIGHT - GROUND_HEIGHT;

const TOOLS = [
  { id: 'block', name: 'Block', icon: 'solar:box-minimalistic-bold' },
  { id: 'spike', name: 'Spike', icon: 'solar:danger-triangle-bold' },
  { id: 'sawblade', name: 'Sawblade', icon: 'solar:settings-bold' },
  { id: 'portal_ship', name: 'Ship Portal', icon: 'solar:rocket-bold' },
  { id: 'portal_cube', name: 'Cube Portal', icon: 'solar:box-bold' },
  { id: 'eraser', name: 'Eraser', icon: 'solar:eraser-bold' },
];

const LevelEditorView = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [obstacles, setObstacles] = useState([]);
  const [activeTool, setActiveTool] = useState('block');
  const [hasAudio, setHasAudio] = useState(false);

  useEffect(() => {
    // Load previously saved level
    const savedLevel = localStorage.getItem('gd_custom_level');
    if (savedLevel) {
      try { setObstacles(JSON.parse(savedLevel)); } catch(e) {}
    }

    // Check if custom audio exists
    try {
      const req = window.indexedDB.open('gd_db', 1);
      req.onsuccess = (e) => {
        const db = e.target.result;
        if (db.objectStoreNames.contains('audio')) {
          const tx = db.transaction('audio', 'readonly');
          const getReq = tx.objectStore('audio').get('customTrack');
          getReq.onsuccess = (ev) => {
            if (ev.target.result) setHasAudio(true);
          };
        }
      };
    } catch(err) { console.warn("IndexedDB check failed", err) }
  }, []);

  const handleCanvasClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    
    // Convert click coordinates to snapped grid values
    const gridX = Math.floor(x / GRID_SIZE) * GRID_SIZE;
    const gridY = Math.floor(y / GRID_SIZE) * GRID_SIZE;

    // Prevent placing on or below the ground
    if (y >= PLAYABLE_HEIGHT && activeTool !== 'eraser') return;

    if (activeTool === 'eraser') {
      setObstacles(prev => prev.filter(o => {
        return !(x >= o.x && x <= o.x + o.width && y >= o.y && y <= o.y + o.height);
      }));
      return;
    }

    let type, width, height, yPos;
    if (activeTool === 'block') { type = 'block'; width = 40; height = 40; yPos = gridY; }
    else if (activeTool === 'spike') { type = 'spike'; width = 30; height = 30; yPos = gridY + 10; }
    else if (activeTool === 'sawblade') { type = 'sawblade'; width = 44; height = 44; yPos = gridY - 2; }
    else if (activeTool === 'portal_ship') { type = 'portal_ship'; width = 70; height = 120; yPos = gridY - 80; }
    else if (activeTool === 'portal_cube') { type = 'portal_cube'; width = 70; height = 120; yPos = gridY - 80; }

    const newObs = { type, x: gridX, y: yPos, width, height };

    // Prevent stacking exact duplicates
    setObstacles(prev => {
      const filtered = prev.filter(o => !(o.x === gridX && o.y === yPos && o.type === type));
      return [...filtered, newObs];
    });
  };

  const handleSaveAndPlay = () => {
    localStorage.setItem('gd_custom_level', JSON.stringify(obstacles));
    navigate('/play?custom=true');
  };

  const handleAudioImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const req = window.indexedDB.open('gd_db', 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('audio')) db.createObjectStore('audio');
      };
      req.onsuccess = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('audio')) {
           // Provide fallback path for schema miss
           const upgradedReq = window.indexedDB.open('gd_db', 2);
           upgradedReq.onupgradeneeded = (e2) => { e2.target.result.createObjectStore('audio'); }
           upgradedReq.onsuccess = (e2) => {
              e2.target.result.transaction('audio', 'readwrite').objectStore('audio').put(file, 'customTrack');
              setHasAudio(true);
           }
           return;
        }
        
        const tx = db.transaction('audio', 'readwrite');
        tx.objectStore('audio').put(file, 'customTrack');
        tx.oncomplete = () => setHasAudio(true);
      };
    } catch(err) {
      alert("Failed to access secure local storage for audio.");
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col bg-zinc-950 z-20">
      {/* Top Header */}
      <div className="h-20 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md px-6 flex items-center justify-between shadow-lg z-30">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors border border-zinc-700/50"
          >
            <iconify-icon icon="solar:arrow-left-bold" width="24"></iconify-icon>
          </button>
          <h1 className="text-2xl font-black tracking-tight uppercase">Level Editor</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 mr-4 border-r border-zinc-800 pr-6">
            <input type="file" accept="audio/*" ref={fileInputRef} className="hidden" onChange={handleAudioImport} />
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all border ${hasAudio ? 'bg-purple-500/20 text-purple-400 border-purple-500/50' : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'}`}
            >
              <iconify-icon icon="solar:music-note-bold" width="20"></iconify-icon>
              {hasAudio ? 'Audio Loaded' : 'Import Audio'}
            </button>
          </div>
          
          <button 
            onClick={() => setObstacles([])}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold transition-colors border border-zinc-700/50"
          >
            Clear
          </button>
          
          <button 
            onClick={handleSaveAndPlay}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold transition-transform hover:scale-105 shadow-lg shadow-green-500/20"
          >
            <iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
            Save & Play
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 w-full overflow-auto relative custom-scrollbar bg-zinc-950">
        <div 
          className="relative select-none"
          style={{ width: `${CANVAS_WIDTH}px`, height: `${CANVAS_HEIGHT}px` }}
        >
          {/* Background Grid Layer */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #71717a 1px, transparent 1px), linear-gradient(to bottom, #71717a 1px, transparent 1px)`,
              backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`
            }}
          />

          {/* Ground Layer */}
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-zinc-900 border-t-4 border-purple-500 pointer-events-none" />
          
          {/* Interactive Layer for Placing */}
          <div 
            className="absolute inset-0 cursor-crosshair"
            onClick={handleCanvasClick}
          />

          {/* Render Placed Obstacles */}
          {obstacles.map((obs, i) => {
            let style = { position: 'absolute', left: obs.x, top: obs.y, width: obs.width, height: obs.height, pointerEvents: 'none' };
            let renderObj = null;

            if (obs.type === 'block') {
              renderObj = <div style={style} className="bg-zinc-200 border border-zinc-400 rounded-sm" />;
            } else if (obs.type === 'spike') {
              renderObj = <div style={style} className="bg-red-500" style={{...style, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />;
            } else if (obs.type === 'sawblade') {
              renderObj = <div style={style} className="bg-zinc-800 border-4 border-zinc-600 rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-zinc-950 rounded-full" /></div>;
            } else if (obs.type === 'portal_ship') {
              renderObj = <div style={style} className="border-8 border-pink-500 rounded-[35px] shadow-[0_0_15px_rgba(236,72,153,0.5)]" />;
            } else if (obs.type === 'portal_cube') {
              renderObj = <div style={style} className="border-8 border-green-500 rounded-[35px] shadow-[0_0_15px_rgba(34,197,94,0.5)]" />;
            }

            return <React.Fragment key={i}>{renderObj}</React.Fragment>;
          })}
        </div>
      </div>

      {/* Floating Toolbar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-700 shadow-2xl z-40">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`flex flex-col items-center justify-center p-3 w-16 h-16 rounded-xl transition-all duration-200 ${
              activeTool === tool.id 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 scale-110 shadow-lg' 
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent'
            }`}
          >
            <iconify-icon icon={tool.icon} width="28"></iconify-icon>
            <span className="text-[10px] uppercase font-bold mt-1 opacity-80">{tool.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { height: 16px; background: #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 8px; border: 4px solid #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
      `}} />
    </div>
  );
};

export default LevelEditorView;