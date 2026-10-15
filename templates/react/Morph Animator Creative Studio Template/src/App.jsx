import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';

// --- MATH & GEOMETRY UTILITIES ---

const POINTS_PER_STROKE = 100;

const resampleStroke = (points, numPoints = POINTS_PER_STROKE) => {
  if (!points || points.length === 0) return [];
  if (points.length === 1) return Array(numPoints).fill({ ...points[0] });

  let totalLength = 0;
  const distances = [0];
  
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    totalLength += dist;
    distances.push(totalLength);
  }

  if (totalLength === 0) return Array(numPoints).fill({ ...points[0] });

  const resampled = [{ ...points[0] }];
  const step = totalLength / (numPoints - 1);
  let currentDist = 0;
  let origIdx = 1;

  for (let i = 1; i < numPoints - 1; i++) {
    currentDist += step;
    
    while (origIdx < points.length && distances[origIdx] < currentDist) {
      origIdx++;
    }
    
    if (origIdx >= points.length) {
      resampled.push({ ...points[points.length - 1] });
      continue;
    }

    const p0 = points[origIdx - 1];
    const p1 = points[origIdx];
    const d0 = distances[origIdx - 1];
    const d1 = distances[origIdx];

    const t = (currentDist - d0) / (d1 - d0);
    resampled.push({
      x: p0.x + (p1.x - p0.x) * t,
      y: p0.y + (p1.y - p0.y) * t
    });
  }
  
  resampled.push({ ...points[points.length - 1] });
  return resampled;
};

const getCentroid = (points) => {
  if (!points || points.length === 0) return { x: 0, y: 0 };
  const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
  return { x: sum.x / points.length, y: sum.y / points.length };
};

const getBBox = (points) => {
  if (!points || points.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0, cx: 0, cy: 0, w: 0, h: 0 };
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  return { minX, maxX, minY, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, w: maxX - minX, h: maxY - minY };
};

const distToSegmentSquared = (p, v, w) => {
  let l2 = (w.x - v.x) ** 2 + (w.y - v.y) ** 2;
  if (l2 === 0) return (p.x - v.x) ** 2 + (p.y - v.y) ** 2;
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return (p.x - (v.x + t * (w.x - v.x))) ** 2 + (p.y - (v.y + t * (w.y - v.y))) ** 2;
};

const findClickedStroke = (x, y, strokes) => {
  let bestDist = Infinity;
  let bestIdx = -1;
  strokes.forEach((stroke, idx) => {
    for (let i = 0; i < stroke.points.length - 1; i++) {
      let d = distToSegmentSquared({ x, y }, stroke.points[i], stroke.points[i + 1]);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = idx;
      }
    }
  });
  return bestDist < 144 ? bestIdx : -1; // ~12px radius hit tolerance
};

const getHitAction = (x, y, bbox) => {
  const hs = 12; // handle detection tolerance
  const check = (hx, hy) => Math.abs(x - hx) < hs && Math.abs(y - hy) < hs;
  
  // Make rotate handle hit area explicitly larger
  const rs = 20; // larger rotate handle detection tolerance
  if (Math.abs(x - bbox.cx) < rs && Math.abs(y - (bbox.minY - 30)) < rs) return 'rotate';
  
  if (check(bbox.minX, bbox.minY)) return 'scale_nw';
  if (check(bbox.maxX, bbox.minY)) return 'scale_ne';
  if (check(bbox.minX, bbox.maxY)) return 'scale_sw';
  if (check(bbox.maxX, bbox.maxY)) return 'scale_se';
  
  if (x >= bbox.minX - 5 && x <= bbox.maxX + 5 && y >= bbox.minY - 5 && y <= bbox.maxY + 5) {
    return 'translate';
  }
  return null;
};

// Easing functions for per-stroke morphing
const EASING_FUNCTIONS = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  elastic: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    const c4 = (2 * Math.PI) / 3;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
  bounce: t => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }
};

// Color utilities for smooth transitioning
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 255, b: 255 };
};

const interpolateColor = (color1, color2, t) => {
  if (!color1 || !color2) return color1 || color2 || '#ffffff';
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const clamp255 = v => Math.max(0, Math.min(255, Math.round(v)));
  const r = clamp255(rgb1.r + (rgb2.r - rgb1.r) * t);
  const g = clamp255(rgb1.g + (rgb2.g - rgb1.g) * t);
  const b = clamp255(rgb1.b + (rgb2.b - rgb1.b) * t);

  return `rgb(${r}, ${g}, ${b})`;
};

// --- MAIN COMPONENT ---

export default function App() {
  // State
  const [frames, setFrames] = useState([{ id: Date.now().toString(), strokes: [], morphToNext: true }]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  const [activeTool, setActiveTool] = useState('draw'); // 'draw' | 'select'
  const [selectedIdx, setSelectedIdx] = useState(null);

  const [brushColor, setBrushColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(4);
  const [onionSkin, setOnionSkin] = useState(true);

  // Refs
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawing = useRef(false);
  const currentRawPoints = useRef([]);
  const animationRef = useRef(null);
  
  const transformState = useRef({
    active: false,
    action: null,
    startX: 0,
    startY: 0,
    initialPoints: [],
    bbox: null
  });

  const colors = ['#ffffff', '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#a855f7'];

  // Handle keyboard deletion
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Backspace' || e.key === 'Delete') && selectedIdx !== null && activeTool === 'select' && !isPlaying) {
        setFrames(prev => {
          const newFrames = [...prev];
          newFrames[activeIdx].strokes = newFrames[activeIdx].strokes.filter((_, i) => i !== selectedIdx);
          return newFrames;
        });
        setSelectedIdx(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, activeTool, activeIdx, isPlaying]);

  // --- DRAWING ENGINE ---

  const drawStrokes = useCallback((ctx, strokes, alpha = 1) => {
    if (!strokes) return;
    strokes.forEach(stroke => {
      if (stroke.points.length === 0) return;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = alpha;
      ctx.stroke();
    });
    ctx.globalAlpha = 1.0;
  }, []);

  const refreshCanvas = useCallback(() => {
    if (isPlaying) return; // Let playback loop handle rendering
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill background with solid color so exported video has a proper background (matches zinc-900)
    ctx.fillStyle = '#18181b'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Onion Skin (previous frame)
    if (onionSkin && activeIdx > 0) {
      drawStrokes(ctx, frames[activeIdx - 1].strokes, 0.2);
    }

    // Draw Current Frame
    drawStrokes(ctx, frames[activeIdx].strokes, 1.0);

    // Draw Selection Overlay
    if (activeTool === 'select' && selectedIdx !== null && frames[activeIdx].strokes[selectedIdx]) {
      const stroke = frames[activeIdx].strokes[selectedIdx];
      const bbox = getBBox(stroke.points);
      
      ctx.save();
      ctx.strokeStyle = '#6366f1'; // indigo-500
      ctx.lineWidth = 1.5;
      
      // Bounding Box
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(bbox.minX, bbox.minY, bbox.w, bbox.h);
      
      // Line to Rotate Handle
      ctx.beginPath();
      ctx.moveTo(bbox.cx, bbox.minY);
      ctx.lineTo(bbox.cx, bbox.minY - 30);
      ctx.stroke();

      ctx.setLineDash([]);
      
      // Handles
      ctx.fillStyle = '#ffffff';
      const handleSize = 8;
      const drawHandle = (x, y) => {
        ctx.fillRect(x - handleSize/2, y - handleSize/2, handleSize, handleSize);
        ctx.strokeRect(x - handleSize/2, y - handleSize/2, handleSize, handleSize);
      };

      drawHandle(bbox.minX, bbox.minY); // nw
      drawHandle(bbox.maxX, bbox.minY); // ne
      drawHandle(bbox.minX, bbox.maxY); // sw
      drawHandle(bbox.maxX, bbox.maxY); // se

      // Rotate Handle (Made significantly larger for easier grabbing)
      const rotateHandleRadius = 8;
      ctx.beginPath();
      ctx.arc(bbox.cx, bbox.minY - 30, rotateHandleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    // Draw currently active stroke (not yet saved to frame)
    if (activeTool === 'draw' && isDrawing.current && currentRawPoints.current.length > 0) {
      ctx.beginPath();
      ctx.moveTo(currentRawPoints.current[0].x, currentRawPoints.current[0].y);
      for (let i = 1; i < currentRawPoints.current.length; i++) {
        ctx.lineTo(currentRawPoints.current[i].x, currentRawPoints.current[i].y);
      }
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  }, [frames, activeIdx, isPlaying, onionSkin, drawStrokes, brushColor, brushSize, activeTool, selectedIdx]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      refreshCanvas();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [refreshCanvas]);

  // Update canvas when state changes
  useEffect(() => {
    refreshCanvas();
  }, [refreshCanvas]);

  // --- POINTER EVENTS ---

  const getPointerPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handlePointerDown = (e) => {
    if (isPlaying || isExporting) return;
    const { x, y } = getPointerPos(e);

    if (activeTool === 'select') {
      // Check if we hit an existing selection's handles
      if (selectedIdx !== null && frames[activeIdx].strokes[selectedIdx]) {
        const stroke = frames[activeIdx].strokes[selectedIdx];
        const bbox = getBBox(stroke.points);
        const action = getHitAction(x, y, bbox);
        
        if (action) {
          transformState.current = {
            active: true,
            action,
            startX: x,
            startY: y,
            initialPoints: stroke.points.map(p => ({ ...p })), // Deep copy
            bbox
          };
          return;
        }
      }

      // Otherwise, attempt to select a stroke
      const hitIdx = findClickedStroke(x, y, frames[activeIdx].strokes);
      setSelectedIdx(hitIdx !== -1 ? hitIdx : null);
      refreshCanvas();
      
    } else {
      // Draw Mode
      isDrawing.current = true;
      currentRawPoints.current = [{ x, y }];
      setSelectedIdx(null);
      refreshCanvas();
    }
  };

  const handlePointerMove = (e) => {
    if (isPlaying || isExporting) return;
    const { x, y } = getPointerPos(e);

    if (activeTool === 'select' && transformState.current.active) {
      const ts = transformState.current;
      const newPoints = ts.initialPoints.map(p => ({ ...p })); // Reset to original before applying pure transform

      if (ts.action === 'translate') {
        const dx = x - ts.startX;
        const dy = y - ts.startY;
        newPoints.forEach(p => { p.x += dx; p.y += dy; });
        
      } else if (ts.action === 'rotate') {
        const cx = ts.bbox.cx;
        const cy = ts.bbox.cy;
        const startAngle = Math.atan2(ts.startY - cy, ts.startX - cx);
        const currentAngle = Math.atan2(y - cy, x - cx);
        const da = currentAngle - startAngle;
        const cosA = Math.cos(da);
        const sinA = Math.sin(da);
        
        newPoints.forEach(p => {
          const nx = cx + (p.x - cx) * cosA - (p.y - cy) * sinA;
          const ny = cy + (p.x - cx) * sinA + (p.y - cy) * cosA;
          p.x = nx; p.y = ny;
        });
        
      } else if (ts.action.startsWith('scale')) {
        let pivotX, pivotY;
        let scaleX = 1, scaleY = 1;
        const width = Math.max(0.1, ts.bbox.w);
        const height = Math.max(0.1, ts.bbox.h);

        if (ts.action === 'scale_nw') {
          pivotX = ts.bbox.maxX; pivotY = ts.bbox.maxY;
          scaleX = (pivotX - x) / width;
          scaleY = (pivotY - y) / height;
        } else if (ts.action === 'scale_ne') {
          pivotX = ts.bbox.minX; pivotY = ts.bbox.maxY;
          scaleX = (x - pivotX) / width;
          scaleY = (pivotY - y) / height;
        } else if (ts.action === 'scale_sw') {
          pivotX = ts.bbox.maxX; pivotY = ts.bbox.minY;
          scaleX = (pivotX - x) / width;
          scaleY = (y - pivotY) / height;
        } else if (ts.action === 'scale_se') {
          pivotX = ts.bbox.minX; pivotY = ts.bbox.minY;
          scaleX = (x - pivotX) / width;
          scaleY = (y - pivotY) / height;
        }

        newPoints.forEach(p => {
          p.x = pivotX + (p.x - pivotX) * scaleX;
          p.y = pivotY + (p.y - pivotY) * scaleY;
        });
      }

      setFrames(prev => {
        const newFrames = [...prev];
        const activeStrokes = [...newFrames[activeIdx].strokes];
        activeStrokes[selectedIdx] = {
          ...activeStrokes[selectedIdx],
          points: newPoints
        };
        newFrames[activeIdx] = { ...newFrames[activeIdx], strokes: activeStrokes };
        return newFrames;
      });
      
    } else if (activeTool === 'draw' && isDrawing.current) {
      currentRawPoints.current.push({ x, y });
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const pts = currentRawPoints.current;
      
      ctx.beginPath();
      ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  };

  const handlePointerUp = () => {
    if (isPlaying || isExporting) return;

    if (activeTool === 'select' && transformState.current.active) {
      transformState.current.active = false;
      transformState.current.action = null;
    } else if (activeTool === 'draw' && isDrawing.current) {
      isDrawing.current = false;
      if (currentRawPoints.current.length > 0) {
        const normalizedPoints = resampleStroke(currentRawPoints.current);
        const newStroke = {
          points: normalizedPoints,
          color: brushColor,
          width: brushSize,
          easing: 'easeInOutCubic',
        };

        setFrames(prev => {
          const newFrames = [...prev];
          newFrames[activeIdx] = {
            ...newFrames[activeIdx],
            strokes: [...newFrames[activeIdx].strokes, newStroke]
          };
          return newFrames;
        });
      }
      currentRawPoints.current = [];
    }
  };

  // --- ANIMATION & EXPORT LOGIC ---

  const playAnimation = (onComplete = null) => {
    if (frames.length < 2) return;
    setIsPlaying(true);
    setActiveIdx(0);
    setSelectedIdx(null); // Clear selection when playing

    const DURATION_PER_FRAME = 800; // ms
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const totalDuration = (frames.length - 1) * DURATION_PER_FRAME;
      
      if (elapsed >= totalDuration) {
        setIsPlaying(false);
        setActiveIdx(frames.length - 1);
        
        const frameA = frames[frames.length - 2];
        const frameB = frames[frames.length - 1];
        if (frameA && frameB) {
          renderInterpolatedFrame(frameB, frameB, 1);
        }

        if (typeof onComplete === 'function') {
          setTimeout(onComplete, 50);
        }
        return;
      }

      const currentAnimIndex = Math.floor(elapsed / DURATION_PER_FRAME);
      let rawT = (elapsed % DURATION_PER_FRAME) / DURATION_PER_FRAME;
      
      const frameA = frames[currentAnimIndex];
      const frameB = frames[currentAnimIndex + 1];

      if (frameA && frameB) {
        if (frameA.morphToNext !== false) {
          renderInterpolatedFrame(frameA, frameB, rawT);
        } else {
          // No morphing, just hold on the current frame until the duration is complete
          renderInterpolatedFrame(frameA, frameA, 0);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const exportVideo = () => {
    if (frames.length < 2) return;
    setIsExporting(true);
    setSelectedIdx(null);

    const canvas = canvasRef.current;
    
    try {
      const stream = canvas.captureStream(30);
      
      const mimeTypes = [
        'video/mp4',
        'video/mp4;codecs=avc1',
        'video/webm;codecs=h264',
        'video/webm;codecs=vp9',
        'video/webm'
      ];
      
      let selectedMimeType = '';
      for (const type of mimeTypes) {
        if (MediaRecorder.isTypeSupported(type)) {
          selectedMimeType = type;
          break;
        }
      }

      const options = selectedMimeType ? { mimeType: selectedMimeType } : {};
      const recorder = new MediaRecorder(stream, options);
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `morph-animation-${Date.now()}.mp4`;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          setIsExporting(false);
        }, 150);
      };

      recorder.start();
      
      playAnimation(() => {
        recorder.stop();
      });

    } catch (err) {
      console.error("Error exporting video:", err);
      alert("Video export failed or is not supported in this browser.");
      setIsExporting(false);
    }
  };

  const renderInterpolatedFrame = (frameA, frameB, rawT) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#18181b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const maxStrokes = Math.max(frameA.strokes.length, frameB.strokes.length);
    const interpolatedStrokes = [];

    for (let i = 0; i < maxStrokes; i++) {
      const strokeA = frameA.strokes[i];
      const strokeB = frameB.strokes[i];

      if (!strokeA && !strokeB) continue;

      // Extract easing for this specific stroke
      const easeName = (strokeA || strokeB)?.easing || 'easeInOutCubic';
      const easeFn = EASING_FUNCTIONS[easeName] || EASING_FUNCTIONS.easeInOutCubic;
      
      // Map global rawT (0 to 1) through the ease function with 10% safety margin on ends
      let t = 0;
      if (rawT < 0.1) t = 0;
      else if (rawT > 0.9) t = 1;
      else t = easeFn((rawT - 0.1) / 0.8);

      let ptsA, ptsB;
      let targetColor = strokeA?.color || '#ffffff';
      let targetWidth = strokeA?.width || 4;

      if (strokeA && strokeB) {
        ptsA = strokeA.points;
        ptsB = strokeB.points;
        targetColor = interpolateColor(strokeA.color, strokeB.color, t);
        targetWidth = strokeA.width + (strokeB.width - strokeA.width) * t;
      } else if (strokeA && !strokeB) {
        ptsA = strokeA.points;
        const centroid = getCentroid(ptsA);
        ptsB = Array(POINTS_PER_STROKE).fill(centroid);
        targetColor = strokeA.color;
        targetWidth = strokeA.width;
      } else if (!strokeA && strokeB) {
        ptsB = strokeB.points;
        const centroid = getCentroid(ptsB);
        ptsA = Array(POINTS_PER_STROKE).fill(centroid);
        targetColor = strokeB.color;
        targetWidth = strokeB.width;
      }

      const interpPoints = [];
      for (let p = 0; p < POINTS_PER_STROKE; p++) {
        interpPoints.push({
          x: ptsA[p].x + (ptsB[p].x - ptsA[p].x) * t,
          y: ptsA[p].y + (ptsB[p].y - ptsA[p].y) * t
        });
      }

      let alpha = 1.0;
      if (strokeA && !strokeB) alpha = 1 - Math.max(0, Math.min(1, t));
      if (!strokeA && strokeB) alpha = Math.max(0, Math.min(1, t));

      interpolatedStrokes.push({
        points: interpPoints,
        color: targetColor,
        width: Math.max(0.1, targetWidth), // Ensure width never goes negative (e.g. via elastic overshoot)
        alpha
      });
    }

    interpolatedStrokes.forEach(s => {
      ctx.beginPath();
      ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let i = 1; i < s.points.length; i++) {
        ctx.lineTo(s.points[i].x, s.points[i].y);
      }
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = s.alpha;
      ctx.stroke();
    });
    ctx.globalAlpha = 1.0;
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // --- FRAME ACTIONS ---

  const addFrame = () => {
    setFrames([...frames, { id: Date.now().toString(), strokes: [], morphToNext: true }]);
    setActiveIdx(frames.length);
    setSelectedIdx(null);
  };

  const duplicateFrame = () => {
    const currentStrokes = frames[activeIdx].strokes.map(stroke => ({
      ...stroke,
      points: stroke.points.map(p => ({ ...p }))
    }));
    const currentMorphToNext = frames[activeIdx].morphToNext;
    setFrames([...frames, { id: Date.now().toString(), strokes: currentStrokes, morphToNext: currentMorphToNext !== false }]);
    setActiveIdx(frames.length);
    setSelectedIdx(null);
  };

  const deleteFrame = () => {
    if (frames.length <= 1) return;
    const newFrames = frames.filter((_, i) => i !== activeIdx);
    setFrames(newFrames);
    setActiveIdx(Math.max(0, activeIdx - 1));
    setSelectedIdx(null);
  };

  const undoLastStroke = () => {
    setFrames(prev => {
      const newFrames = [...prev];
      newFrames[activeIdx].strokes = newFrames[activeIdx].strokes.slice(0, -1);
      return newFrames;
    });
    setSelectedIdx(null);
  };

  const clearFrame = () => {
    setFrames(prev => {
      const newFrames = [...prev];
      newFrames[activeIdx].strokes = [];
      return newFrames;
    });
    setSelectedIdx(null);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
      
      {/* Header / Top Toolbar */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <iconify-icon icon="solar:pen-new-square-bold-duotone" width="20"></iconify-icon>
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-zinc-100 mr-4">Morph Animator</h1>
        </div>

        <div className="flex items-center gap-4">
          
          {/* Tool Mode Toggles */}
          <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            <button
              disabled={isPlaying || isExporting}
              onClick={() => { setActiveTool('draw'); setSelectedIdx(null); }}
              className={clsx(
                "flex items-center justify-center w-10 h-8 rounded-md transition-all",
                activeTool === 'draw' ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              )}
              title="Draw Tool (Pen)"
            >
              <iconify-icon icon="solar:pen-linear" width="20"></iconify-icon>
            </button>
            <button
              disabled={isPlaying || isExporting}
              onClick={() => setActiveTool('select')}
              className={clsx(
                "flex items-center justify-center w-10 h-8 rounded-md transition-all",
                activeTool === 'select' ? "bg-zinc-800 text-indigo-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              )}
              title="Select Tool (Scale & Rotate)"
            >
              <iconify-icon icon="solar:cursor-square-linear" width="20"></iconify-icon>
            </button>
          </div>

          <div className="h-6 w-px bg-zinc-800 mx-1"></div>

          {/* Color Picker */}
          <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
            {colors.map(c => (
              <button
                key={c}
                disabled={isPlaying || isExporting || activeTool === 'select'}
                onClick={() => setBrushColor(c)}
                className={clsx(
                  "w-6 h-6 rounded-md transition-all duration-200 cursor-pointer hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed",
                  brushColor === c ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-900 scale-110" : ""
                )}
                style={{ backgroundColor: c }}
                title={`Color ${c}`}
              />
            ))}
          </div>

          <div className="h-6 w-px bg-zinc-800 mx-1"></div>

          {/* Tools */}
          <div className="flex items-center gap-2">
            <button
              disabled={isPlaying || isExporting || activeTool === 'select'}
              onClick={() => setBrushSize(prev => Math.max(1, prev - 2))}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50"
              title="Decrease Brush Size"
            >
              <iconify-icon icon="solar:minus-circle-linear" width="22"></iconify-icon>
            </button>
            <div className="w-8 text-center text-sm font-medium text-zinc-300">{brushSize}</div>
            <button
              disabled={isPlaying || isExporting || activeTool === 'select'}
              onClick={() => setBrushSize(prev => Math.min(40, prev + 2))}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50"
              title="Increase Brush Size"
            >
              <iconify-icon icon="solar:add-circle-linear" width="22"></iconify-icon>
            </button>
          </div>

          <div className="h-6 w-px bg-zinc-800 mx-1"></div>

          {/* Actions */}
          <div className="flex items-center gap-2">
             <button
              disabled={isPlaying || isExporting}
              onClick={() => setOnionSkin(!onionSkin)}
              className={clsx(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-2 disabled:opacity-50",
                onionSkin ? "bg-indigo-500/20 text-indigo-300" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              )}
              title="Toggle Onion Skin"
            >
              <iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
              Onion
            </button>
            <button
              disabled={isPlaying || isExporting}
              onClick={undoLastStroke}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50"
              title="Undo Last Stroke"
            >
              <iconify-icon icon="solar:undo-left-linear" width="22"></iconify-icon>
            </button>
            <button
              disabled={isPlaying || isExporting}
              onClick={clearFrame}
              className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-50"
              title="Clear Frame"
            >
              <iconify-icon icon="solar:trash-bin-trash-linear" width="22"></iconify-icon>
            </button>
          </div>

          {/* Morph Easing Dropdown (only visible when a stroke is selected) */}
          {activeTool === 'select' && selectedIdx !== null && (
            <>
              <div className="h-6 w-px bg-zinc-800 mx-1"></div>
              <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-lg border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                <iconify-icon icon="solar:routing-2-linear" width="18" className="text-indigo-400 pl-1"></iconify-icon>
                <select
                  value={frames[activeIdx].strokes[selectedIdx]?.easing || 'easeInOutCubic'}
                  onChange={(e) => {
                    setFrames(prev => {
                      const newFrames = [...prev];
                      const strokes = [...newFrames[activeIdx].strokes];
                      strokes[selectedIdx] = { ...strokes[selectedIdx], easing: e.target.value };
                      newFrames[activeIdx] = { ...newFrames[activeIdx], strokes };
                      return newFrames;
                    });
                  }}
                  className="bg-zinc-800 text-xs font-medium text-zinc-100 rounded px-2 py-1 outline-none border border-zinc-700 hover:border-zinc-600 focus:border-indigo-500 transition-colors cursor-pointer"
                  title="Easing Morph to Next Frame"
                >
                  <option value="linear">Linear</option>
                  <option value="easeIn">Ease In</option>
                  <option value="easeOut">Ease Out</option>
                  <option value="easeInOut">Ease In Out</option>
                  <option value="easeInOutCubic">Smooth (Cubic)</option>
                  <option value="elastic">Elastic</option>
                  <option value="bounce">Bounce</option>
                </select>
              </div>
            </>
          )}

        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportVideo}
            disabled={frames.length < 2 || isPlaying || isExporting}
            className="flex items-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full font-medium hover:bg-zinc-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-zinc-700"
          >
            <iconify-icon icon={isExporting ? "solar:video-library-bold" : "solar:video-frame-linear"} width="20"></iconify-icon>
            {isExporting ? 'Exporting...' : 'Export MP4'}
          </button>

          <button
            onClick={() => playAnimation()}
            disabled={frames.length < 2 || isPlaying || isExporting}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <iconify-icon icon={isPlaying && !isExporting ? "solar:stop-circle-bold" : "solar:play-circle-bold"} width="20"></iconify-icon>
            {isPlaying && !isExporting ? 'Playing...' : 'Play'}
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-8 bg-zinc-950/50 pattern-dots">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Helper Hint */}
        {activeTool === 'select' && !isPlaying && (
          <div className="absolute top-4 z-10 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg backdrop-blur animate-fade-in">
            <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
            {selectedIdx !== null ? "Drag handles to transform. Select morph easing above." : "Click a stroke to select it"}
          </div>
        )}

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl h-full max-h-[70vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden shadow-black/50"
          style={{ cursor: (isPlaying || isExporting) ? 'default' : activeTool === 'select' ? 'default' : 'crosshair' }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="absolute inset-0 w-full h-full touch-none"
          />

          {isPlaying && (
            <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-800 flex items-center gap-2 animate-pulse shadow-lg">
              <div className={clsx("w-2 h-2 rounded-full", isExporting ? "bg-red-500" : "bg-indigo-500")}></div>
              <span className={isExporting ? "text-red-400" : "text-indigo-400"}>
                {isExporting ? 'Recording Video...' : 'Playback Active'}
              </span>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Timeline */}
      <footer className="h-32 border-t border-zinc-800/50 bg-zinc-900/80 backdrop-blur-md p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center px-2">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Frames Timeline</span>
          <span className="text-xs text-zinc-500">{frames.length} Frame{frames.length !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="flex-1 flex gap-2 overflow-x-auto hide-scrollbar items-center px-2">
          {frames.map((frame, idx) => (
            <React.Fragment key={frame.id}>
              <div
                onClick={() => {
                  if (!isPlaying && !isExporting) {
                    setActiveIdx(idx);
                    setSelectedIdx(null);
                  }
                }}
                className={clsx(
                  "relative group flex-shrink-0 w-24 h-16 rounded-lg border-2 transition-all duration-200 overflow-hidden flex flex-col items-center justify-center bg-zinc-950",
                  (isPlaying || isExporting) ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                  activeIdx === idx 
                    ? "border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] opacity-100" 
                    : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 opacity-70 hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   <iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
                </div>
                <span className="absolute bottom-1 left-2 text-[10px] font-medium z-10 bg-black/50 px-1 rounded">
                  F {idx + 1}
                </span>
                <span className="absolute top-1 right-2 text-[9px] text-zinc-500 z-10">
                   {frame.strokes.length} st
                </span>

                {frames.length > 1 && !(isPlaying || isExporting) && (
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteFrame(idx); }}
                    className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 p-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500 hover:text-white transition-colors z-20"
                  >
                    <iconify-icon icon="solar:close-circle-bold" width="14"></iconify-icon>
                  </button>
                )}
              </div>

              {idx < frames.length - 1 && (
                <div className="flex flex-col items-center justify-center px-0.5">
                  <button
                    onClick={() => {
                      if (!isPlaying && !isExporting) {
                        setFrames(prev => {
                          const newFrames = [...prev];
                          newFrames[idx] = { ...newFrames[idx], morphToNext: newFrames[idx].morphToNext === false ? true : false };
                          return newFrames;
                        });
                      }
                    }}
                    disabled={isPlaying || isExporting}
                    className={clsx(
                      "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                      frame.morphToNext !== false 
                        ? "bg-indigo-500 text-white shadow-sm hover:scale-110" 
                        : "bg-zinc-800 text-zinc-500 border border-zinc-700 hover:text-zinc-300 hover:border-zinc-600"
                    )}
                    title={frame.morphToNext !== false ? "Morphing to next frame (Click to cut)" : "Cutting to next frame (Click to morph)"}
                  >
                    <iconify-icon icon={frame.morphToNext !== false ? "solar:magic-stick-3-bold" : "solar:arrow-right-linear"} width="12"></iconify-icon>
                  </button>
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="h-12 w-px bg-zinc-800 mx-2"></div>

          <button
            onClick={addFrame}
            disabled={isPlaying || isExporting}
            className="flex-shrink-0 w-16 h-16 rounded-lg border-2 border-dashed border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all flex flex-col items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Add Empty Frame"
          >
            <iconify-icon icon="solar:add-square-linear" width="24"></iconify-icon>
          </button>
          
          <button
            onClick={duplicateFrame}
            disabled={isPlaying || isExporting}
            className="flex-shrink-0 w-16 h-16 rounded-lg border-2 border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all flex flex-col items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Duplicate Current Frame"
          >
            <iconify-icon icon="solar:copy-linear" width="20"></iconify-icon>
            <span className="text-[9px]">Dup</span>
          </button>
        </div>
      </footer>
    </div>
  );
}