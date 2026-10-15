import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useEditor } from '../context/EditorContext';

// Standard drawing canvas resolution
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

// --- High Performance Scanline Flood Fill Algorithm ---
const performFloodFill = (ctx, startX, startY, fillColorHex, canvasWidth, canvasHeight) => {
  startX = Math.floor(startX);
  startY = Math.floor(startY);
  
  if (startX < 0 || startX >= canvasWidth || startY < 0 || startY >= canvasHeight) return;

  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  const data = imageData.data;
  const startPos = (startY * canvasWidth + startX) * 4;

  const startR = data[startPos];
  const startG = data[startPos + 1];
  const startB = data[startPos + 2];
  const startA = data[startPos + 3];

  let hex = fillColorHex;
  if (hex.length === 4) {
    hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  const fillR = parseInt(hex.slice(1, 3), 16) || 0;
  const fillG = parseInt(hex.slice(3, 5), 16) || 0;
  const fillB = parseInt(hex.slice(5, 7), 16) || 0;
  const fillA = 255;

  if (startR === fillR && startG === fillG && startB === fillB && startA === fillA) {
    return;
  }

  const startIsEmpty = startA < 50;

  const matchStartColor = (pos) => {
    const r = data[pos], g = data[pos + 1], b = data[pos + 2], a = data[pos + 3];
    if (startIsEmpty) {
      return a < 50;
    }
    return Math.abs(r - startR) <= 30 &&
           Math.abs(g - startG) <= 30 &&
           Math.abs(b - startB) <= 30 &&
           Math.abs(a - startA) <= 30;
  };

  const colorPixel = (pos) => {
    data[pos] = fillR;
    data[pos + 1] = fillG;
    data[pos + 2] = fillB;
    data[pos + 3] = fillA;
  };

  const pixelStack = [[startX, startY]];

  while (pixelStack.length > 0) {
    const [x, y] = pixelStack.pop();
    let pos = (y * canvasWidth + x) * 4;
    let currentY = y;

    while (currentY >= 0 && matchStartColor(pos)) {
      currentY--;
      pos -= canvasWidth * 4;
    }
    
    currentY++;
    pos += canvasWidth * 4;

    let reachLeft = false;
    let reachRight = false;

    while (currentY < canvasHeight && matchStartColor(pos)) {
      colorPixel(pos);

      if (x > 0) {
        if (matchStartColor(pos - 4)) {
          if (!reachLeft) {
            pixelStack.push([x - 1, currentY]);
            reachLeft = true;
          }
        } else if (reachLeft) {
          reachLeft = false;
        }
      }

      if (x < canvasWidth - 1) {
        if (matchStartColor(pos + 4)) {
          if (!reachRight) {
            pixelStack.push([x + 1, currentY]);
            reachRight = true;
          }
        } else if (reachRight) {
          reachRight = false;
        }
      }

      currentY++;
      pos += canvasWidth * 4;
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

// Helper to draw an array of paths and images
const drawPaths = (ctx, paths, isOnionSkin = false, imageCache = null, dragState = null) => {
  paths.forEach((path, index) => {
    // Handle Text Objects
    if (path.tool === 'text') {
      let p = path;
      if (!isOnionSkin && dragState && dragState.index === index) {
        p = dragState.pathCopy;
      }

      const cx = p.x + p.width / 2;
      const cy = p.y + p.height / 2;
      const rot = p.rotation || 0;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      ctx.font = `bold ${p.size}px sans-serif`;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = isOnionSkin ? 0.25 : 1.0;
      ctx.textBaseline = 'top';

      ctx.fillText(p.text, -p.width / 2, -p.height / 2);

      // Draw selection outline and transform handles if selected
      if (!isOnionSkin && dragState && dragState.index === index) {
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.strokeRect(-p.width / 2, -p.height / 2, p.width, p.height);

        const drawHandle = (hx, hy) => {
          ctx.beginPath();
          ctx.arc(hx, hy, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.stroke();
        };

        // Rotation Handle
        ctx.beginPath();
        ctx.moveTo(0, -p.height / 2);
        ctx.lineTo(0, -p.height / 2 - 30);
        ctx.stroke();
        drawHandle(0, -p.height / 2 - 30);
      }

      ctx.restore();
      return;
    }

    // Handle Image Objects
    if (path.tool === 'image') {
      if (!imageCache) return;
      let img = imageCache.get(path.src);
      if (!img) {
        img = new Image();
        img.src = path.src;
        // The continuous requestAnimationFrame loop will naturally render it once loaded
        imageCache.set(path.src, img);
      }
      
      if (img.complete) {
        // Use dragged properties if it's currently selected and dragging
        let p = path;
        if (!isOnionSkin && dragState && dragState.index === index) {
          p = dragState.pathCopy;
        }
        
        let { x, y, width, height, rotation } = p;
        const cx = x + width / 2;
        const cy = y + height / 2;
        const rot = rotation || 0;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);

        ctx.globalAlpha = isOnionSkin ? 0.25 : 1.0;
        ctx.drawImage(img, -width / 2, -height / 2, width, height);

        // Draw selection outline and transform handles if selected
        if (!isOnionSkin && dragState && dragState.index === index) {
          ctx.strokeStyle = '#6366f1'; // indigo-500
          ctx.lineWidth = 2;
          ctx.strokeRect(-width / 2, -height / 2, width, height);

          ctx.fillStyle = '#ffffff';
          const drawHandle = (hx, hy) => {
            ctx.beginPath();
            ctx.arc(hx, hy, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          };

          // Resize Handles (4 Corners)
          drawHandle(-width / 2, -height / 2); // TL
          drawHandle(width / 2, -height / 2);  // TR
          drawHandle(-width / 2, height / 2);  // BL
          drawHandle(width / 2, height / 2);   // BR

          // Rotation Handle
          ctx.beginPath();
          ctx.moveTo(0, -height / 2);
          ctx.lineTo(0, -height / 2 - 30);
          ctx.stroke();
          drawHandle(0, -height / 2 - 30);
        }

        ctx.restore();
      }
      return;
    }

    if (path.tool === 'bucket') {
      if (isOnionSkin) return;
      performFloodFill(ctx, path.point.x, path.point.y, path.color, CANVAS_WIDTH, CANVAS_HEIGHT);
      return;
    }

    if (!path.points || path.points.length === 0) return;
    
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = path.size;
    ctx.globalAlpha = 1.0;
    
    if (path.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = path.color;
      
      if (path.tool === 'highlighter') {
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 0.4;
      } else if (path.tool === 'marker') {
        ctx.lineCap = 'square';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = 0.85;
      } else if (path.tool === 'pencil') {
        ctx.lineCap = 'square';
        ctx.lineWidth = Math.min(path.size, 8); 
      }
    }

    if (isOnionSkin) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.25;
    }

    ctx.moveTo(path.points[0].x, path.points[0].y);
    for (let i = 1; i < path.points.length; i++) {
      ctx.lineTo(path.points[i].x, path.points[i].y);
    }
    ctx.stroke();
  });
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1.0;
};

export default function CanvasArea() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imageCache = useRef(new Map());
  
  const { 
    frames, currentFrameIndex, 
    activeTool, setActiveTool, brushColor, brushSize,
    updateCurrentFramePaths, onionSkin,
    isPlaying
  } = useEditor();

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [scale, setScale] = useState(1);
  const [textInput, setTextInput] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const padding = 16;
      const scaleX = (width - padding) / CANVAS_WIDTH;
      const scaleY = (height - padding) / CANVAS_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTextCommit = useCallback(() => {
    setTextInput(prev => {
      if (!prev) return null;
      if (prev.text.trim()) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const fontSize = Math.max(brushSize * 2, 24);
        ctx.font = `bold ${fontSize}px sans-serif`;
        const metrics = ctx.measureText(prev.text);
        
        const newPath = {
          tool: 'text',
          text: prev.text,
          x: prev.x,
          y: prev.y - fontSize / 2,
          width: metrics.width,
          height: fontSize, 
          color: brushColor,
          size: fontSize,
          rotation: 0
        };

        const currentFramePaths = frames[currentFrameIndex].paths || [];
        updateCurrentFramePaths([...currentFramePaths, newPath]);
        setActiveTool('select');
      }
      return null;
    });
  }, [brushSize, brushColor, frames, currentFrameIndex, updateCurrentFramePaths, setActiveTool]);

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    if (onionSkin && currentFrameIndex > 0 && !isPlaying) {
      const prevFrame = frames[currentFrameIndex - 1];
      if (prevFrame && prevFrame.paths) {
        drawPaths(ctx, prevFrame.paths, true, imageCache.current, null);
      }
    }

    const currentFrame = frames[currentFrameIndex];
    if (currentFrame && currentFrame.paths) {
      drawPaths(ctx, currentFrame.paths, false, imageCache.current, dragState);
    }

    if (currentPath && isDrawing && activeTool !== 'select') {
      drawPaths(ctx, [currentPath], false, imageCache.current, null);
    }
  }, [frames, currentFrameIndex, onionSkin, isDrawing, currentPath, isPlaying, activeTool, dragState]);

  useEffect(() => {
    let animationFrameId;
    const loop = () => {
      renderCanvas();
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [renderCanvas]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    if (isPlaying) return;

    if (textInput) {
      handleTextCommit();
      return;
    }
    
    const coords = getCoordinates(e);

    if (activeTool === 'text') {
      setTextInput({ x: coords.x, y: coords.y, text: '' });
      return;
    }

    if (activeTool === 'select') {
      const currentFramePaths = frames[currentFrameIndex].paths || [];
      // Loop backwards to select the top-most object
      for (let i = currentFramePaths.length - 1; i >= 0; i--) {
        const p = currentFramePaths[i];
        if (p.tool === 'image' || p.tool === 'text') {
          const cx = p.x + p.width / 2;
          const cy = p.y + p.height / 2;
          const rot = p.rotation || 0;

          // Inverse transform pointer into unrotated local coordinate space
          const dx = coords.x - cx;
          const dy = coords.y - cy;
          const localX = dx * Math.cos(-rot) - dy * Math.sin(-rot) + cx;
          const localY = dx * Math.sin(-rot) + dy * Math.cos(-rot) + cy;

          const handleRadius = 12;

          // 1. Check Rotation Handle (drawn at top center relative to object)
          const rotHx = cx;
          const rotHy = p.y - 30; 
          if (Math.hypot(localX - rotHx, localY - rotHy) <= handleRadius) {
            setDragState({
              index: i,
              action: 'rotate',
              cx, cy,
              startAngle: Math.atan2(coords.y - cy, coords.x - cx),
              initialRot: rot,
              pathCopy: { ...p }
            });
            setIsDrawing(true);
            return;
          }

          // 2. Check Resize Handles (Corners) - Only for Images
          if (p.tool === 'image') {
            const corners = [
              { x: p.x, y: p.y }, // TL
              { x: p.x + p.width, y: p.y }, // TR
              { x: p.x, y: p.y + p.height }, // BL
              { x: p.x + p.width, y: p.y + p.height } // BR
            ];
            
            let hitCorner = false;
            for (const corner of corners) {
              if (Math.hypot(localX - corner.x, localY - corner.y) <= handleRadius) {
                hitCorner = true;
                break;
              }
            }

            if (hitCorner) {
              setDragState({
                index: i,
                action: 'resize',
                cx, cy,
                initialWidth: p.width,
                initialHeight: p.height,
                startDist: Math.hypot(coords.x - cx, coords.y - cy),
                pathCopy: { ...p }
              });
              setIsDrawing(true);
              return;
            }
          }

          // 3. Check Object Body for Move (Unrotated bounding box check)
          if (localX >= p.x && localX <= p.x + p.width && localY >= p.y && localY <= p.y + p.height) {
            setDragState({
              index: i,
              action: 'move',
              offsetX: coords.x - p.x,
              offsetY: coords.y - p.y,
              pathCopy: { ...p }
            });
            setIsDrawing(true);
            return;
          }
        }
      }
      return;
    }

    if (activeTool === 'bucket') {
      const newPath = {
        tool: 'bucket',
        color: brushColor,
        point: { x: Math.round(coords.x), y: Math.round(coords.y) }
      };
      const currentFramePaths = frames[currentFrameIndex].paths || [];
      updateCurrentFramePaths([...currentFramePaths, newPath]);
      return;
    }

    setIsDrawing(true);
    setCurrentPath({
      tool: activeTool,
      color: brushColor,
      size: brushSize,
      points: [coords]
    });
  };

  const draw = (e) => {
    if (!isDrawing || isPlaying) return;

    const coords = getCoordinates(e);

    if (activeTool === 'select' && dragState) {
      const newState = { ...dragState, pathCopy: { ...dragState.pathCopy } };
      
      if (dragState.action === 'move') {
        newState.pathCopy.x = coords.x - dragState.offsetX;
        newState.pathCopy.y = coords.y - dragState.offsetY;
      } 
      else if (dragState.action === 'resize' && dragState.pathCopy.tool === 'image') {
        const currentDist = Math.hypot(coords.x - dragState.cx, coords.y - dragState.cy);
        const scale = Math.max(0.1, currentDist / dragState.startDist); // Prevent inverting or going to 0
        
        newState.pathCopy.width = dragState.initialWidth * scale;
        newState.pathCopy.height = dragState.initialHeight * scale;
        // Keep the center point fixed during resize
        newState.pathCopy.x = dragState.cx - newState.pathCopy.width / 2;
        newState.pathCopy.y = dragState.cy - newState.pathCopy.height / 2;
      }
      else if (dragState.action === 'rotate') {
        const currentAngle = Math.atan2(coords.y - dragState.cy, coords.x - dragState.cx);
        const angleDiff = currentAngle - dragState.startAngle;
        newState.pathCopy.rotation = dragState.initialRot + angleDiff;
      }
      
      setDragState(newState);
      return;
    }

    if (!currentPath || activeTool === 'bucket' || activeTool === 'text') return;

    setCurrentPath(prev => ({
      ...prev,
      points: [...prev.points, coords]
    }));
  };

  const stopDrawing = () => {
    if (!isDrawing || isPlaying) return;
    
    setIsDrawing(false);

    if (activeTool === 'select' && dragState) {
      const currentFramePaths = [...(frames[currentFrameIndex].paths || [])];
      // Commit the transformed state to the frames history
      currentFramePaths[dragState.index] = dragState.pathCopy;
      updateCurrentFramePaths(currentFramePaths);
      setDragState(null);
      return;
    }

    if (currentPath && currentPath.points.length > 1 && activeTool !== 'bucket') {
      const currentFramePaths = frames[currentFrameIndex].paths || [];
      updateCurrentFramePaths([...currentFramePaths, currentPath]);
    }
    setCurrentPath(null);
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center relative touch-none"
    >
      <div 
        className="relative bg-white shadow-2xl overflow-hidden rounded-md transition-transform duration-200"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          cursor: activeTool === 'select'
            ? (isDrawing ? 'grabbing' : 'default')
            : activeTool === 'text'
              ? 'text'
              : activeTool === 'eraser' 
                ? 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'black\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><rect x=\'3\' y=\'3\' width=\'18\' height=\'18\' rx=\'2\' ry=\'2\'/></svg>") 8 8, auto' 
                : 'crosshair',
        }}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
          className="absolute inset-0 block w-full h-full touch-none"
          style={{ touchAction: 'none' }}
        />

        {textInput && (
          <input
            type="text"
            autoFocus
            value={textInput.text}
            onChange={(e) => setTextInput({ ...textInput, text: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTextCommit();
              if (e.key === 'Escape') setTextInput(null);
            }}
            onBlur={handleTextCommit}
            placeholder="Type..."
            className="absolute bg-transparent outline-none caret-indigo-500 whitespace-nowrap z-50 placeholder:text-gray-400/50"
            style={{
              left: textInput.x,
              top: textInput.y,
              color: brushColor,
              fontSize: `${Math.max(brushSize * 2, 24)}px`,
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              transform: 'translateY(-50%)',
              borderBottom: '2px dashed rgba(99, 102, 241, 0.5)',
              minWidth: '150px',
            }}
          />
        )}
        
        {isPlaying && (
          <div className="absolute inset-0 border-4 border-indigo-500/50 pointer-events-none rounded-md" />
        )}
      </div>
    </div>
  );
}