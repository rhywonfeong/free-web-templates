import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Custom WebGL-like Canvas Background Simulation
  // Features: Fine line lattice, breathing pulse, sparse anchors, pointer parallax
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let time = 0

    const resize = () => {
      // DPR Clamp and Antialias effect handled via scale
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX
      targetMouse.y = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()

    const drawLineLattice = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
      // Pointer parallax interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.05
      mouse.y += (targetMouse.y - mouse.y) * 0.05

      const gridSpacing = 40
      const offsetX = (mouse.x - window.innerWidth / 2) * -0.05
      const offsetY = (mouse.y - window.innerHeight / 2) * -0.05

      // Breathing pulse alpha
      const baseAlpha = 0.05 + Math.sin(time * 0.5) * 0.02
      const isDark = document.documentElement.classList.contains('dark')
      
      ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${baseAlpha})` : `rgba(20, 184, 166, ${baseAlpha * 1.5})`
      ctx.lineWidth = 1

      // Draw Grid with slow orbital drift
      const driftX = Math.sin(time * 0.2) * 20
      const driftY = Math.cos(time * 0.2) * 20

      ctx.beginPath()
      for (let x = (driftX + offsetX) % gridSpacing; x < window.innerWidth; x += gridSpacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, window.innerHeight)
      }
      for (let y = (driftY + offsetY) % gridSpacing; y < window.innerHeight; y += gridSpacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(window.innerWidth, y)
      }
      ctx.stroke()

      // Sparse anchors (points at intersections)
      ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${baseAlpha * 3})` : `rgba(20, 184, 166, ${baseAlpha * 4})`
      for (let x = (driftX + offsetX) % gridSpacing; x < window.innerWidth; x += gridSpacing * 3) {
        for (let y = (driftY + offsetY) % gridSpacing; y < window.innerHeight; y += gridSpacing * 3) {
           ctx.beginPath()
           ctx.arc(x, y, 1.5, 0, Math.PI * 2)
           ctx.fill()
        }
      }

      time += 0.01
      animationFrameId = requestAnimationFrame(drawLineLattice)
    }

    drawLineLattice()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative pt-16 pb-24 md:pt-28 md:pb-40 px-6 overflow-hidden bg-slate-50 dark:bg-[#0F172A]">
      {/* WebGL Field Fallback */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Foreground Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-[12px] font-medium text-slate-600 dark:text-slate-300 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Velocity AI 2.0 Architecture
          </div>
          
          <h1 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.025em] text-slate-900 dark:text-white leading-[1.1] mb-6">
            Accelerate Growth with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 dark:to-teal-300">Intelligent</span> Systems.
          </h1>
          
          <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-[24px] font-normal">
            We architect high-conversion digital experiences, layering human creativity over machine intelligence to scale your business predictably.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 w-full">
            <button className="px-8 py-4 bg-teal-500 text-white text-[14px] font-medium rounded-full hover:bg-teal-600 hover:shadow-[0_8px_10px_-6px_rgba(20,184,166,0.3)] transition-all duration-300 flex items-center gap-2 group">
              Start Project
              <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </button>
            <button className="px-8 py-4 bg-white/50 text-slate-900 dark:bg-white/5 dark:text-white text-[14px] font-medium rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 flex items-center gap-2">
              <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
              How it works
            </button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative w-full h-[450px] md:h-[600px] group">
          {/* Outer Gradient Border Shell */}
          <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-slate-700/40 dark:via-slate-700/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] h-full w-full">
            <div className="relative w-full h-full rounded-[31px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Technical Architecture" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
              />
              {/* Glass Overlays */}
              <div className="absolute top-6 left-6 p-4 rounded-[16px] bg-white/80 dark:bg-slate-900/60 backdrop-blur-[12px] border border-white/20 dark:border-slate-700/50 shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                      <iconify-icon icon="solar:buildings-2-linear"></iconify-icon>
                    </div>
                    <div className="text-[12px] font-medium dark:text-white text-slate-900">System Scale</div>
                 </div>
                 <div className="text-[24px] font-semibold tracking-[-0.025em] dark:text-white text-slate-900">Enterprise</div>
              </div>

              <div className="absolute bottom-6 right-6 p-4 rounded-[16px] bg-white/80 dark:bg-slate-900/60 backdrop-blur-[12px] border border-white/20 dark:border-slate-700/50 shadow-sm flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border border-teal-500 p-0.5 relative">
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-full h-full rounded-full object-cover" alt="User" />
                 </div>
                 <div>
                   <div className="text-[12px] text-slate-500 dark:text-slate-300">AI Analysis Complete</div>
                   <div className="text-[14px] font-medium dark:text-white text-slate-900">Architecture Ready</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}