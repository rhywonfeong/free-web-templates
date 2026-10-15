import React, { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []

    const resize = () => {
      // Use parent's dimensions
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
        initParticles()
      }
    }

    const initParticles = () => {
      particles = []
      // Calculate density based on area
      const numParticles = Math.floor((canvas.width * canvas.height) / 8000)
      
      for (let i = 0; i < numParticles; i++) {
        // Bias y-position slightly upwards so there are fewer particles right in the brightest glow
        const yPos = Math.random() < 0.7 
          ? Math.random() * (canvas.height * 0.7) 
          : Math.random() * canvas.height

        particles.push({
          x: Math.random() * canvas.width,
          y: yPos,
          // Tiny radius for subtle stars
          radius: Math.random() * 1.2 + 0.1,
          // Extremely slow horizontal/vertical drift
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          alpha: Math.random(),
          // Twinkle speed
          dAlpha: (Math.random() - 0.5) * 0.015,
        })
      }
    }

    const draw = () => {
      // Clear with transparent black to leave trails if wanted, but clean clear for sharp stars
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(p => {
        // Move
        p.x += p.vx
        p.y += p.vy
        
        // Twinkle
        p.alpha += p.dAlpha

        // Screen wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Reverse twinkle direction at bounds
        if (p.alpha <= 0.05 || p.alpha >= 0.8) {
          p.dAlpha *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        // Icy pale blue color matching the reference palette
        ctx.fillStyle = `rgba(190, 225, 255, ${Math.max(0, p.alpha)})`
        ctx.fill()
      })
      
      animationFrameId = requestAnimationFrame(draw)
    }

    // Initialize
    window.addEventListener('resize', resize)
    resize()
    draw()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      aria-hidden="true"
    />
  )
}