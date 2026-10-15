import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FlowCanvas({ containerRef, startNodeId, centerNodeId, endNodeId }) {
  const canvasRef = useRef(null);
  const [observeRef, isVisible] = useScrollReveal({ threshold: 0.1, triggerOnce: false });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lineProgress = 0;

    const resizeCanvas = () => {
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
    };

    const animateFlowLines = () => {
      if (!isVisible) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const startNode = document.getElementById(startNodeId);
      const centerNode = document.getElementById(centerNodeId);
      const endNode = document.getElementById(endNodeId);
      const secRect = containerRef.current.getBoundingClientRect();

      if (startNode && centerNode && endNode) {
        const r1 = startNode.getBoundingClientRect();
        const r2 = centerNode.getBoundingClientRect();
        const r3 = endNode.getBoundingClientRect();

        const p1 = { x: r1.left + r1.width/2 - secRect.left, y: r1.top + r1.height/2 - secRect.top };
        const p2 = { x: r2.left + r2.width/2 - secRect.left, y: r2.top + r2.height/2 - secRect.top };
        const p3 = { x: r3.left + r3.width/2 - secRect.left, y: r3.top + r3.height/2 - secRect.top };

        // Style glowing line
        ctx.strokeStyle = '#ccff00';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ccff00';
        ctx.setLineDash([4, 8]);

        lineProgress += 0.5;
        ctx.lineDashOffset = -lineProgress;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animateFlowLines);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    if (isVisible) {
      animateFlowLines();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, containerRef, startNodeId, centerNodeId, endNodeId]);

  return (
    <div ref={observeRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}