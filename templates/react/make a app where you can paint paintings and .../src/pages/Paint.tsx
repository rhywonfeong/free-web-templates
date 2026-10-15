import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { playPopSound, playSwishSound } from '../utils/sound';
import { Paintbrush, Eraser, SprayCan, Trash2 } from 'lucide-react';

const Paint: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { addPainting } = useGame();
  const navigate = useNavigate();
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState<'brush' | 'eraser' | 'spray'>('brush');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (tool === 'eraser') {
          ctx.strokeStyle = '#ffffff';
        } else {
          ctx.strokeStyle = color;
        }
        ctx.lineWidth = brushSize;
      }
    }
  }, [color, brushSize, tool]);

  const sprayRef = useRef<number | null>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    playPopSound();
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let x, y;
    
    if ('touches' in e) {
      x = (e.touches[0].clientX - rect.left) * scaleX;
      y = (e.touches[0].clientY - rect.top) * scaleY;
    } else {
      x = (e.clientX - rect.left) * scaleX;
      y = (e.clientY - rect.top) * scaleY;
    }

    setIsDrawing(true);

    if (tool === 'spray') {
      const spray = () => {
        for (let i = 0; i < 20; i++) {
          const offsetX = (Math.random() - 0.5) * brushSize * 2;
          const offsetY = (Math.random() - 0.5) * brushSize * 2;
          ctx.fillStyle = color;
          ctx.fillRect(x + offsetX, y + offsetY, 1, 1);
        }
        sprayRef.current = requestAnimationFrame(spray);
      };
      sprayRef.current = requestAnimationFrame(spray);
    } else {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let x, y;
    
    if ('touches' in e) {
      x = (e.touches[0].clientX - rect.left) * scaleX;
      y = (e.touches[0].clientY - rect.top) * scaleY;
    } else {
      x = (e.clientX - rect.left) * scaleX;
      y = (e.clientY - rect.top) * scaleY;
    }

    if (tool === 'spray') {
       if (sprayRef.current) cancelAnimationFrame(sprayRef.current);
       const spray = () => {
        for (let i = 0; i < 20; i++) {
          const offsetX = (Math.random() - 0.5) * brushSize * 2;
          const offsetY = (Math.random() - 0.5) * brushSize * 2;
          ctx.fillStyle = color;
          ctx.fillRect(x + offsetX, y + offsetY, 2, 2);
        }
        sprayRef.current = requestAnimationFrame(spray);
      };
      sprayRef.current = requestAnimationFrame(spray);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (sprayRef.current) {
      cancelAnimationFrame(sprayRef.current);
      sprayRef.current = null;
    }
  };

  const clearCanvas = () => {
    playSwishSound();
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleSave = () => {
    if (!title.trim()) {
      alert('Please enter a title for your painting!');
      return;
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      addPainting(dataUrl, title);
      navigate('/');
    }
  };

  return (
    <div className="page studio-page">
      <header className="page-header">
        <h1>Art Studio</h1>
        <p>Create a new masterpiece.</p>
      </header>

      <div className="studio-container">
        <div className="toolbar">
          <div className="tool-selector">
            <button 
              className={`tool-btn ${tool === 'brush' ? 'active' : ''}`} 
              onClick={() => setTool('brush')}
              title="Brush"
            >
              <Paintbrush size={20} />
            </button>
            <button 
              className={`tool-btn ${tool === 'eraser' ? 'active' : ''}`} 
              onClick={() => setTool('eraser')}
              title="Eraser"
            >
              <Eraser size={20} />
            </button>
            <button 
              className={`tool-btn ${tool === 'spray' ? 'active' : ''}`} 
              onClick={() => setTool('spray')}
              title="Spray Can"
            >
              <SprayCan size={20} />
            </button>
          </div>

          <div className="tool-group">
            <label htmlFor="color-picker">Color</label>
            <input
              id="color-picker"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              disabled={tool === 'eraser'}
            />
          </div>
          
          <div className="tool-group">
            <label htmlFor="brush-size">Size: {brushSize}px</label>
            <input
              id="brush-size"
              type="range"
              min="1"
              max="100"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
            />
          </div>

          <button className="btn btn-outline" onClick={clearCanvas} title="Clear Canvas">
            <Trash2 size={20} />
          </button>
        </div>

        <div className="canvas-container">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>

        <div className="save-section">
          <input
            type="text"
            placeholder="Name your masterpiece..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
          <button className="btn btn-primary" onClick={handleSave}>
            Save to Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paint;