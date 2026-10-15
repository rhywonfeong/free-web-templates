import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { easings } from '../utils/easings';

const DrawingBoard = forwardRef(({ onContentChange, strokeColor, strokeWidth, disabled }, ref) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Ref-based state to avoid re-renders during high-frequency drawing
  const drawingState = useRef({
    isDrawing: false,
    strokes: [], // Array of arrays: [ [ {x,y,t}, ... ], ... ]
    currentStroke: [],
    globalStartTime: null,
    totalTime: 0,
    ctx: null
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize and handle resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  // Update canvas context when dimensions or styles change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    // Handle high DPI displays for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.scale(dpr, dpr);
    
    // Style settings
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    
    // Add subtle glow effect for premium feel
    ctx.shadowBlur = 8;
    ctx.shadowColor = strokeColor + '80'; // Add transparency to hex

    drawingState.current.ctx = ctx;

    // Redraw existing strokes on resize to prevent clearing
    redrawStatic(drawingState.current.strokes);
  }, [dimensions, strokeColor, strokeWidth]);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    clearCanvas: () => {
      const state = drawingState.current;
      state.strokes = [];
      state.currentStroke = [];
      state.globalStartTime = null;
      state.totalTime = 0;
      if (state.ctx) {
        state.ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      }
    },
    playAnimation: (easingType, durationMs, onComplete) => {
      playAnimation(easingType, durationMs, onComplete, false);
    },
    exportVideo: (easingType, durationMs, onComplete) => {
      exportVideo(easingType, durationMs, onComplete);
    }
  }));

  const getCoordinates = (e) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    if (disabled) return;
    const state = drawingState.current;
    state.isDrawing = true;
    
    if (!state.globalStartTime) {
      state.globalStartTime = performance.now();
    }
    
    const { x, y } = getCoordinates(e);
    const t = performance.now() - state.globalStartTime;
    
    state.currentStroke = [{ x, y, t }];
    
    state.ctx.beginPath();
    state.ctx.moveTo(x, y);
    
    // Draw a dot immediately for taps
    state.ctx.lineTo(x, y);
    state.ctx.stroke();
  };

  const draw = (e) => {
    const state = drawingState.current;
    if (!state.isDrawing || disabled) return;
    
    e.preventDefault(); // Prevent scrolling on touch
    
    const { x, y } = getCoordinates(e);
    const t = performance.now() - state.globalStartTime;
    
    state.currentStroke.push({ x, y, t });
    
    state.ctx.lineTo(x, y);
    state.ctx.stroke();
  };

  const stopDrawing = () => {
    const state = drawingState.current;
    if (!state.isDrawing) return;
    
    state.isDrawing = false;
    
    if (state.currentStroke.length > 0) {
      state.strokes.push([...state.currentStroke]);
      // Update max time recorded
      const lastPoint = state.currentStroke[state.currentStroke.length - 1];
      state.totalTime = Math.max(state.totalTime, lastPoint.t);
      onContentChange(true);
    }
    state.currentStroke = [];
  };

  // Static redraw (used on resize or color change)
  const redrawStatic = (strokesToDraw, isExporting = false) => {
    const state = drawingState.current;
    if (!state.ctx) return;
    
    if (isExporting) {
      state.ctx.fillStyle = '#09090b'; // zinc-950 for standard background fill
      state.ctx.fillRect(0, 0, dimensions.width, dimensions.height);
    } else {
      state.ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    }
    
    strokesToDraw.forEach(stroke => {
      if (stroke.length === 0) return;
      state.ctx.beginPath();
      state.ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        state.ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      state.ctx.stroke();
    });
  };

  const exportVideo = (easingType, durationMs, onComplete) => {
    const canvas = canvasRef.current;
    const state = drawingState.current;
    if (!canvas || !state.ctx || state.strokes.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    // Set initial background frame to avoid black flashes
    state.ctx.fillStyle = '#09090b';
    state.ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // Prepare media recorder
    const stream = canvas.captureStream(60); // 60 FPS
    let mimeType = 'video/mp4';
    
    try {
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm'; // Fallback for unsupported browsers (e.g. Firefox without specific flags)
      }
    } catch(e) {
      mimeType = 'video/webm';
    }

    const recorder = new MediaRecorder(stream, { 
      mimeType, 
      videoBitsPerSecond: 8000000 // High quality
    });
    
    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      
      const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';
      a.download = `motion-draw-export.${ext}`;
      
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        // Clean up background post-export
        redrawStatic(state.strokes, false);
        if (onComplete) onComplete();
      }, 150);
    };

    recorder.start();

    // Small delay to ensure recorder spins up fully before animating
    setTimeout(() => {
      playAnimation(easingType, durationMs, () => {
        // Delay stop to ensure the final frame settles in the capture stream
        setTimeout(() => {
          recorder.stop();
        }, 200);
      }, true);
    }, 100);
  };

  // Advanced Animation Loop
  const playAnimation = (easingType, durationMs, onComplete, isExporting = false) => {
    const state = drawingState.current;
    if (!state.ctx || state.strokes.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    const startRealTime = performance.now();
    const easingFn = easings[easingType] || easings.linear;
    const maxRecordedTime = state.totalTime;

    const animateFrame = (currentRealTime) => {
      const elapsed = currentRealTime - startRealTime;
      // Progress 0 to 1
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Apply easing to progress
      const easedProgress = easingFn(progress);
      
      // Map eased progress back to the recorded timeline
      const targetTime = easedProgress * maxRecordedTime;

      // Clear or paint background for this frame
      if (isExporting) {
        state.ctx.fillStyle = '#09090b';
        state.ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      } else {
        state.ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      }

      // Redraw up to targetTime
      for (const stroke of state.strokes) {
        if (stroke.length === 0) continue;
        
        // If the stroke hasn't started yet in our animation timeline, skip it
        if (stroke[0].t > targetTime) continue;

        state.ctx.beginPath();
        state.ctx.moveTo(stroke[0].x, stroke[0].y);

        let drewFullStroke = true;

        for (let i = 1; i < stroke.length; i++) {
          const pt = stroke[i];
          const prevPt = stroke[i-1];

          if (pt.t <= targetTime) {
            // Point is fully within the timeframe
            state.ctx.lineTo(pt.x, pt.y);
          } else {
            // Target time falls between prevPt and pt. Interpolate for smoothness!
            const timeDiff = pt.t - prevPt.t;
            if (timeDiff > 0) {
              const ratio = (targetTime - prevPt.t) / timeDiff;
              const interpX = prevPt.x + (pt.x - prevPt.x) * ratio;
              const interpY = prevPt.y + (pt.y - prevPt.y) * ratio;
              state.ctx.lineTo(interpX, interpY);
            }
            drewFullStroke = false;
            break; // Don't draw subsequent points in this stroke
          }
        }
        state.ctx.stroke();
        
        // Optimization: if we didn't finish this stroke, subsequent strokes haven't started
        if (!drewFullStroke) break; 
      }

      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        // Ensure final state is perfectly drawn (in case of easing overshoot artifacts)
        redrawStatic(state.strokes, isExporting);
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animateFrame);
  };

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full relative ${disabled ? 'cursor-not-allowed opacity-90' : 'cursor-crosshair'} canvas-grid`}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
        className="absolute inset-0 touch-none"
      />
      {/* Empty state instruction overlay */}
      {!disabled && drawingState.current.strokes.length === 0 && (
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="bg-zinc-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 flex flex-col items-center shadow-2xl animate-pulse">
               <iconify-icon icon="solar:pen-linear" class="text-4xl text-zinc-600 mb-2"></iconify-icon>
               <p className="text-zinc-500 font-medium tracking-wide">Draw something to begin</p>
            </div>
         </div>
      )}
    </div>
  );
});

DrawingBoard.displayName = 'DrawingBoard';

export default DrawingBoard;