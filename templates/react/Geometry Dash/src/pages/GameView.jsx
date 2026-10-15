import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameEngine from '../components/GameEngine';
import { MAIN_LEVELS } from '../data/levels';

const DEFAULT_AUDIO = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/e4e45bfb-4be1-45df-8c5c-1f0b210f8a57/1b1ead82-ce7f-4ddd-9e7e-da85e45a06d6-hawfaywfgiauyfawf.wav?v=1775137907097";

const LevelSelector = ({ onSelect, onBack }) => {
  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col z-50">
      <div className="h-24 px-8 flex items-center justify-between bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-xl shrink-0 z-10">
        <button 
          onClick={onBack} 
          className="flex items-center justify-center p-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700/50"
        >
          <iconify-icon icon="solar:arrow-left-bold" width="28" />
        </button>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase drop-shadow-md">Select Level</h1>
        <div className="w-14"></div>
      </div>
      
      <div className="flex-1 overflow-x-auto overflow-y-hidden flex items-center px-12 gap-8 custom-scrollbar pb-8 pt-4">
        {MAIN_LEVELS.map(lvl => {
          const best = localStorage.getItem(`gd_highscore_lvl_${lvl.id}`) || '0';
          return (
            <div 
              key={lvl.id} 
              onClick={() => onSelect(`/play?level=${lvl.id}`)}
              className={`shrink-0 w-80 h-[28rem] rounded-[2rem] bg-gradient-to-br ${lvl.color} p-1 shadow-2xl hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer relative group`}
            >
              <div className="w-full h-full bg-zinc-900 rounded-[30px] flex flex-col items-center justify-between p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center mt-4">
                  <h2 className="text-3xl font-black text-white text-center tracking-tight mb-4 uppercase leading-none drop-shadow-md">{lvl.name}</h2>
                  <span className="px-5 py-2 bg-zinc-800/90 rounded-full text-xs font-black text-zinc-300 uppercase tracking-widest border border-zinc-700/50 shadow-inner">
                    {lvl.difficulty}
                  </span>
                </div>
                
                <div className="flex gap-2 my-6">
                  {Array.from({length: lvl.stars}).map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]" width="36" />
                  ))}
                </div>
                
                <div className="w-full text-center mb-4">
                  <div className="text-xs text-zinc-500 font-bold uppercase mb-2 tracking-widest">Best Run</div>
                  <div className="text-5xl font-black text-white drop-shadow-lg tracking-tighter">{best}%</div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Endless Mode Card */}
        <div 
          onClick={() => onSelect(`/play?endless=true`)}
          className="shrink-0 w-80 h-[28rem] rounded-[2rem] bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-2xl hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)] transition-all duration-300 cursor-pointer relative group"
        >
          <div className="w-full h-full bg-zinc-900 rounded-[30px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <iconify-icon icon="solar:infinity-bold" className="text-pink-500 mb-8 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] group-hover:scale-110 transition-transform duration-500" width="80" />
            
            <h2 className="text-3xl font-black text-white text-center tracking-tight mb-4 uppercase drop-shadow-md">Endless</h2>
            <span className="px-5 py-2 bg-zinc-800/90 rounded-full text-xs font-black text-zinc-300 uppercase tracking-widest border border-zinc-700/50 shadow-inner">
              Procedural
            </span>
            
            <div className="w-full text-center mt-10">
              <div className="text-xs text-zinc-500 font-bold uppercase mb-2 tracking-widest">High Score</div>
              <div className="text-5xl font-black text-white drop-shadow-lg tracking-tighter">
                {Math.floor(parseInt(localStorage.getItem('gd_highscore') || '0', 10))}%
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { height: 12px; background: #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 6px; border: 3px solid #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
      `}} />
    </div>
  );
};

const GameView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const isCustomMode = searchParams.get('custom') === 'true';
  const isEndless = searchParams.get('endless') === 'true';
  const levelIdParam = searchParams.get('level');
  const levelId = levelIdParam ? parseInt(levelIdParam, 10) : null;
  
  // Show Level Selector if no specific mode/level is requested
  const isSelector = !isCustomMode && !isEndless && !levelId;

  const [gameState, setGameState] = useState('playing'); // 'playing', 'gameover'
  const [isWin, setIsWin] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const [activeLevelData, setActiveLevelData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [audioSrc, setAudioSrc] = useState(DEFAULT_AUDIO);
  const audioRef = useRef(null);

  // Initialize high score based on the mode
  useEffect(() => {
    if (levelId) {
      setHighScore(parseInt(localStorage.getItem(`gd_highscore_lvl_${levelId}`) || '0', 10));
    } else if (isEndless) {
      setHighScore(parseInt(localStorage.getItem('gd_highscore') || '0', 10));
    }
  }, [levelId, isEndless]);

  // Load level data and audio
  useEffect(() => {
    if (isSelector) return;

    const initLevel = async () => {
      setIsLoading(true);

      if (isCustomMode) {
        const savedLevel = localStorage.getItem('gd_custom_level');
        try {
          setActiveLevelData(savedLevel ? JSON.parse(savedLevel) : []);
        } catch(e) {
          setActiveLevelData([]);
        }

        try {
          const req = window.indexedDB.open('gd_db', 1);
          req.onsuccess = (e) => {
            const db = e.target.result;
            if (db.objectStoreNames.contains('audio')) {
              const tx = db.transaction('audio', 'readonly');
              const getReq = tx.objectStore('audio').get('customTrack');
              getReq.onsuccess = (ev) => {
                if (ev.target.result) setAudioSrc(URL.createObjectURL(ev.target.result));
                setIsLoading(false);
              };
              getReq.onerror = () => setIsLoading(false);
            } else {
              setIsLoading(false);
            }
          };
          req.onerror = () => setIsLoading(false);
        } catch(err) {
          console.warn("Could not load custom audio", err);
          setIsLoading(false);
        }
      } else if (levelId) {
        const lvl = MAIN_LEVELS.find(l => l.id === levelId);
        setActiveLevelData(lvl ? lvl.obstacles : []);
        setAudioSrc(lvl ? lvl.audio : DEFAULT_AUDIO);
        setIsLoading(false);
      } else if (isEndless) {
        setActiveLevelData(null);
        setAudioSrc(DEFAULT_AUDIO);
        setIsLoading(false);
      }
    };

    initLevel();
  }, [isCustomMode, levelId, isEndless, isSelector]);

  // Handle audio playback based on game state
  useEffect(() => {
    if (audioRef.current && !isLoading && !isSelector) {
      if (gameState === 'playing') {
        audioRef.current.play().catch(err => console.warn('Audio play prevented:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [gameState, isLoading, isSelector]);

  const handleGameOver = useCallback((finalScore, win = false) => {
    setScore(finalScore);
    setIsWin(win);
    setGameState('gameover');
    
    // Save highscores appropriately
    if (levelId) {
      if (finalScore > highScore) {
        setHighScore(finalScore);
        localStorage.setItem(`gd_highscore_lvl_${levelId}`, finalScore.toString());
      }
    } else if (isEndless) {
      if (finalScore > highScore) {
        setHighScore(finalScore);
        localStorage.setItem('gd_highscore', finalScore.toString());
      }
    }
  }, [highScore, levelId, isEndless]);

  const restartGame = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to the start
    }
    setGameState('playing');
    setIsWin(false);
    setScore(0);
  };

  const handleExit = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (isCustomMode) {
      navigate('/editor');
    } else {
      // Both main levels and endless mode return to the level selector
      navigate('/play');
    }
  };

  if (isSelector) {
    return <LevelSelector onSelect={(path) => navigate(path)} onBack={() => navigate('/')} />;
  }

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-white z-50">
        <div className="w-16 h-16 border-4 border-zinc-800 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
        <div className="text-xl font-bold tracking-widest text-zinc-400 uppercase">Loading Level</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col overflow-hidden bg-transparent">
      {/* Background Audio Track */}
      <audio 
        ref={audioRef}
        src={audioSrc}
        loop={!isCustomMode && !levelId}
        preload="auto"
      />

      {/* Top HUD */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <button 
            onClick={handleExit}
            className="flex items-center justify-center p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-700/50 backdrop-blur-sm shadow-lg"
          >
            <iconify-icon icon="solar:arrow-left-bold" width="24"></iconify-icon>
          </button>
        </div>
        
        <div className="flex flex-col items-end">
          {isCustomMode && <div className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-1 drop-shadow-md">Custom Level</div>}
          {levelId && <div className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-1 drop-shadow-md">Main Level {levelId}</div>}
          {isEndless && <div className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-1 drop-shadow-md">Endless Mode</div>}
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
            {Math.floor(score)}%
          </div>
          <div className="text-sm md:text-base font-semibold text-zinc-300 uppercase tracking-widest mt-1 drop-shadow-md">
            Progress
          </div>
        </div>
      </div>

      {/* Game Canvas Container */}
      <div className="flex-1 relative w-full h-full">
        {gameState === 'playing' && (
          <GameEngine 
            onGameOver={handleGameOver} 
            onScoreUpdate={setScore} 
            customLevel={activeLevelData}
          />
        )}
      </div>

      {/* Game Over Overlay */}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all animate-[slideUp_0.4s_ease-out]">
            <h2 className={`text-4xl font-black mb-2 tracking-tight ${isWin ? 'text-green-500' : 'text-red-500'}`}>
              {isWin ? 'LEVEL COMPLETED!' : 'ATTEMPT FAILED'}
            </h2>
            <div className="flex gap-8 my-6">
              <div className="text-center">
                <p className="text-zinc-500 text-sm font-medium uppercase mb-1">Score</p>
                <p className="text-3xl font-bold text-white">{Math.floor(score)}%</p>
              </div>
              {!isCustomMode && (
                <>
                  <div className="w-px bg-zinc-800"></div>
                  <div className="text-center">
                    <p className="text-zinc-500 text-sm font-medium uppercase mb-1">Best</p>
                    <p className="text-3xl font-bold text-cyan-400">{Math.floor(highScore)}%</p>
                  </div>
                </>
              )}
            </div>
            
            <div className="flex gap-4 mt-4">
              <button 
                onClick={restartGame}
                className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <iconify-icon icon="solar:restart-bold" width="24"></iconify-icon>
                RETRY
              </button>
              <button 
                onClick={handleExit}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-transform hover:scale-105 active:scale-95 border border-zinc-700 shadow-xl"
              >
                <iconify-icon icon="solar:hamburger-menu-bold" width="24"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
};

export default GameView;