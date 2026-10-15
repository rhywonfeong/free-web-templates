import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { playSuccessSound, playSwishSound, playCashSound } from '../utils/sound';

export type Painting = {
  id: string;
  dataUrl: string;
  title: string;
  status: 'gallery' | 'auction' | 'sold';
  currentBid: number;
  frameStyle: 'wood' | 'gold' | 'modern' | 'vintage';
  lastBidder?: string;
};

type GameContextType = {
  balance: number;
  paintings: Painting[];
  addPainting: (dataUrl: string, title: string) => void;
  sendToAuction: (id: string) => void;
  acceptBid: (id: string) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const paintingsRef = useRef(paintings);

  useEffect(() => {
    paintingsRef.current = paintings;
  }, [paintings]);

  useEffect(() => {
    const interval = setInterval(() => {
      let bidIncreased = false;
      const bidders = ['Art Collector Bob', 'Mysterious Billionaire', 'Museum Curator', 'Trendy Hipster', 'Duchess of York', 'Tech Bro', 'Anonymous Bidder', 'Sir Reginald'];

      const nextPaintings = paintingsRef.current.map((p) => {
        if (p.status === 'auction') {
          // Fluctuate the bid
          const change = Math.floor(Math.random() * 80) - 20; // -20 to +60
          const newBid = Math.max(10, p.currentBid + change);
          let newBidder = p.lastBidder;
          
          if (newBid > p.currentBid) {
            bidIncreased = true;
            newBidder = bidders[Math.floor(Math.random() * bidders.length)];
          }
          return { ...p, currentBid: newBid, lastBidder: newBidder };
        }
        return p;
      });

      if (bidIncreased) {
        playCashSound();
      }

      setPaintings(nextPaintings);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const addPainting = (dataUrl: string, title: string) => {
    playSuccessSound();
    const frames: ('wood' | 'gold' | 'modern' | 'vintage')[] = ['wood', 'gold', 'modern', 'vintage'];
    const randomFrame = frames[Math.floor(Math.random() * frames.length)];

    const newPainting: Painting = {
      id: Math.random().toString(36).substr(2, 9),
      dataUrl,
      title,
      status: 'gallery',
      currentBid: 0,
      frameStyle: randomFrame,
    };
    setPaintings((prev) => [...prev, newPainting]);
  };

  const sendToAuction = (id: string) => {
    playSwishSound();
    setPaintings((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: 'auction', currentBid: Math.floor(Math.random() * 50) + 10 } : p
      )
    );
  };

  const acceptBid = (id: string) => {
    playCashSound();
    setPaintings((prev) => {
      let finalBid = 0;
      const newPaintings = prev.map((p) => {
        if (p.id === id) {
          finalBid = p.currentBid;
          return { ...p, status: 'sold' };
        }
        return p;
      });
      if (finalBid > 0) {
        setBalance((b) => b + finalBid);
      }
      return newPaintings;
    });
  };

  return (
    <GameContext.Provider value={{ balance, paintings, addPainting, sendToAuction, acceptBid }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};