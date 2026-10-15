import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const EditorContext = createContext();

export const useEditor = () => useContext(EditorContext);

export const EditorProvider = ({ children }) => {
  // Animation State
  const [frames, setFrames] = useState([ { id: Date.now(), paths: [] } ]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  
  // History State (Undo)
  const [undoStack, setUndoStack] = useState([]);
  
  // Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [fps, setFps] = useState(12);
  const [onionSkin, setOnionSkin] = useState(true);
  
  // Tool State
  const [activeTool, setActiveTool] = useState('brush'); // 'brush' or 'eraser'
  const [brushColor, setBrushColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(4);

  // Playback Loop
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
      }, 1000 / fps);
    }
    return () => clearInterval(interval);
  }, [isPlaying, fps, frames.length]);

  // History Helper
  const saveState = (currentFrames, currentIndex) => {
    setUndoStack(prev => {
      const newState = {
        frames: JSON.parse(JSON.stringify(currentFrames)),
        currentFrameIndex: currentIndex
      };
      // Keep last 50 actions to prevent massive memory usage
      return [...prev, newState].slice(-50);
    });
  };

  const undo = useCallback(() => {
    setUndoStack(prev => {
      if (prev.length === 0) return prev;
      const newStack = [...prev];
      const prevState = newStack.pop();
      setFrames(prevState.frames);
      setCurrentFrameIndex(prevState.currentFrameIndex);
      return newStack;
    });
  }, []);

  // Keyboard Shortcut (Ctrl+Z / Cmd+Z)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (!e.shiftKey) { // Prevent triggering on Redo (Ctrl+Shift+Z)
          e.preventDefault();
          undo();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo]);

  // Actions
  const addFrame = () => {
    saveState(frames, currentFrameIndex);
    const newFrame = { id: Date.now(), paths: [] };
    const newFrames = [...frames];
    // Insert after current frame
    newFrames.splice(currentFrameIndex + 1, 0, newFrame);
    setFrames(newFrames);
    setCurrentFrameIndex(currentFrameIndex + 1);
  };

  const duplicateFrame = () => {
    saveState(frames, currentFrameIndex);
    const currentPaths = JSON.parse(JSON.stringify(frames[currentFrameIndex].paths));
    const newFrame = { id: Date.now(), paths: currentPaths };
    const newFrames = [...frames];
    newFrames.splice(currentFrameIndex + 1, 0, newFrame);
    setFrames(newFrames);
    setCurrentFrameIndex(currentFrameIndex + 1);
  };

  const deleteFrame = (index) => {
    saveState(frames, currentFrameIndex);
    if (frames.length <= 1) {
      // Clear it if it's the last one
      setFrames([{ id: Date.now(), paths: [] }]);
      setCurrentFrameIndex(0);
      return;
    }
    const newFrames = frames.filter((_, i) => i !== index);
    setFrames(newFrames);
    if (currentFrameIndex >= newFrames.length) {
      setCurrentFrameIndex(newFrames.length - 1);
    }
  };

  const updateCurrentFramePaths = (newPaths) => {
    saveState(frames, currentFrameIndex);
    setFrames(prev => {
      const updated = [...prev];
      updated[currentFrameIndex] = { ...updated[currentFrameIndex], paths: newPaths };
      return updated;
    });
  };

  const clearCurrentFrame = () => {
    updateCurrentFramePaths([]);
  };

  const value = {
    frames, setFrames,
    currentFrameIndex, setCurrentFrameIndex,
    isPlaying, setIsPlaying,
    fps, setFps,
    onionSkin, setOnionSkin,
    activeTool, setActiveTool,
    brushColor, setBrushColor,
    brushSize, setBrushSize,
    addFrame, duplicateFrame, deleteFrame,
    updateCurrentFramePaths, clearCurrentFrame,
    undo, undoStack
  };

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
};