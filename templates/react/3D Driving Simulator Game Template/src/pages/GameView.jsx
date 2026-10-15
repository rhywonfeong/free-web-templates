import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Engine } from '../game/Engine';
import GameUI from '../components/game/GameUI';

export default function GameView() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const navigate = useNavigate();
  
  const [gameState, setGameState] = useState({
    score: 0,
    fuel: 100,
    isGameOver: false,
    distance: 0,
    isLoading: true
  });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Initialize 2D Game Engine
    const engine = new Engine(canvasRef.current, (state) => {
      setGameState({
        score: Math.floor(state.distance / 100),
        fuel: state.fuel,
        isGameOver: state.gameOver,
        distance: state.distance,
        isLoading: false
      });
    });

    engineRef.current = engine;
    
    // Handle Window Resize
    const handleResize = () => {
      if (engineRef.current) {
        engineRef.current.resize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Init and start game
    engine.init().then(() => {
      engine.start();
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.stop();
    };
  }, []);

  const handleRestart = () => {
    if (engineRef.current) {
      engineRef.current.reset();
    }
  };

  const handleQuit = () => {
    navigate('/');
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {gameState.isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <p className="text-cyan-400 font-medium tracking-tight animate-pulse">Initializing Environment...</p>
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full cursor-none outline-none"
      />

      {!gameState.isLoading && (
        <GameUI 
          gameState={gameState} 
          onRestart={handleRestart}
          onQuit={handleQuit}
        />
      )}
    </div>
  );
}