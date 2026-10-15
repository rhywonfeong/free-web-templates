import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { useEditor } from '../context/EditorContext';

const PRESET_COLORS = [
  '#ffffff', '#a1a1aa', '#ef4444', '#f97316', 
  '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6',
  '#ec4899', '#000000'
];

const COLORABLE_TOOLS = ['brush', 'pencil', 'marker', 'highlighter', 'bucket', 'text'];

export default function Toolbar() {
  const { 
    activeTool, setActiveTool, 
    brushColor, setBrushColor,
    brushSize, setBrushSize,
    clearCurrentFrame,
    undo, undoStack,
    frames, currentFrameIndex, updateCurrentFramePaths
  } = useEditor();

  const fileInputRef = useRef(null);

  const handleImageImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target.result;
      const img = new Image();
      img.onload = () => {
        // Downscale image to max 1200px to avoid memory issues in the undo stack
        const canvas = document.createElement('canvas');
        let w = img.width;
        let h = img.height;
        const maxD = 1200;
        
        if (w > maxD || h > maxD) {
          if (w > h) { h = (maxD / w) * h; w = maxD; }
          else { w = (maxD / h) * w; h = maxD; }
        }
        
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        
        const resizedSrc = canvas.toDataURL('image/jpeg', 0.85);
        
        const newPath = {
          tool: 'image',
          src: resizedSrc,
          x: (1920 - w) / 2, // Center on canvas
          y: (1080 - h) / 2,
          width: w,
          height: h
        };
        
        const currentFramePaths = frames[currentFrameIndex].paths || [];
        updateCurrentFramePaths([...currentFramePaths, newPath]);
        setActiveTool('select'); // Auto-switch to select tool to allow immediate moving
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input to allow importing the same file again
  };

  const ToolButton = ({ tool, icon, label }) => (
    <button
      onClick={() => setActiveTool(tool)}
      className={clsx(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group relative shrink-0",
        activeTool === tool 
          ? "bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10" 
          : "text-gray-400 hover:text-white hover:bg-white/5"
      )}
      title={label}
    >
      <iconify-icon icon={icon} width="22"></iconify-icon>
      <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity border border-white/10 z-50">
        {label}
      </span>
    </button>
  );

  return (
    <>
      {/* Tools */}
      <div className="flex flex-col gap-2 w-full px-3 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <ToolButton tool="select" icon="solar:cursor-bold" label="Select/Move Tool (V)" />
        <ToolButton tool="brush" icon="solar:pen-bold" label="Brush Tool (B)" />
        <ToolButton tool="pencil" icon="lucide:pencil" label="Pencil Tool" />
        <ToolButton tool="marker" icon="lucide:pen-tool" label="Marker Tool" />
        <ToolButton tool="highlighter" icon="lucide:highlighter" label="Highlighter Tool" />
        <ToolButton tool="text" icon="lucide:type" label="Text Tool (T)" />
        <div className="w-full h-px bg-white/5 my-1" />
        <ToolButton tool="eraser" icon="solar:eraser-bold" label="Eraser Tool (E)" />
        <ToolButton tool="bucket" icon="lucide:paint-bucket" label="Bucket Tool (G)" />
        <div className="w-full h-px bg-white/5 my-1" />
        
        {/* Import Image Action */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group relative shrink-0 text-gray-400 hover:text-white hover:bg-white/5"
        >
          <iconify-icon icon="solar:gallery-add-bold" width="22"></iconify-icon>
          <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity border border-white/10 z-50">
            Import Image
          </span>
        </button>
        <input 
          type="file" 
          accept="image/*" 
          ref={fileInputRef} 
          onChange={handleImageImport} 
          className="hidden" 
        />
      </div>

      <div className="w-10 h-px bg-white/10 shrink-0" />

      {/* Brush Size Controls */}
      <div className="flex flex-col items-center gap-2 w-full px-2 shrink-0">
        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Size</div>
        
        <div className="w-10 h-10 bg-black/30 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
          <div 
            className="rounded-full bg-white transition-all"
            style={{ width: Math.min(brushSize, 40), height: Math.min(brushSize, 40) }}
          />
        </div>
        
        <div className="w-full flex flex-col items-center gap-1 mt-1">
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={brushSize} 
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
          />
          <span className="text-[10px] text-gray-400 font-mono mt-1">{brushSize}px</span>
        </div>
      </div>

      <div className="w-10 h-px bg-white/10 shrink-0" />

      {/* Colors */}
      <div className="flex flex-col items-center gap-3 w-full px-3 flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold shrink-0">Color</div>
        <div className="grid grid-cols-2 gap-2 pb-2">
          {PRESET_COLORS.map((color) => (
            <button
              key={color}
              onClick={() => {
                setBrushColor(color);
                if (!COLORABLE_TOOLS.includes(activeTool)) {
                  setActiveTool('brush');
                }
              }}
              className={clsx(
                "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
                brushColor === color && COLORABLE_TOOLS.includes(activeTool) ? "border-white scale-110" : "border-transparent shadow-sm"
              )}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2 w-full px-3 pb-4 shrink-0">
        <button
          onClick={undo}
          disabled={undoStack.length === 0}
          className={clsx(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors group relative",
            undoStack.length === 0 
              ? "text-white/20 cursor-not-allowed" 
              : "text-gray-400 hover:bg-white/10 hover:text-white"
          )}
        >
          <iconify-icon icon="solar:undo-left-round-bold" width="20"></iconify-icon>
          {undoStack.length > 0 && (
            <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity border border-white/10 z-50">
              Undo (Ctrl+Z)
            </span>
          )}
        </button>

        <button
          onClick={clearCurrentFrame}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors group relative"
        >
          <iconify-icon icon="solar:trash-bin-trash-bold" width="20"></iconify-icon>
          <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity border border-white/10 z-50">
            Clear Frame
          </span>
        </button>
      </div>
    </>
  );
}