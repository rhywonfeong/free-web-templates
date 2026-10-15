import { useEffect, useRef } from 'react'

/**
 * A lightweight 2D canvas implementation to simulate a network/WebGL effect
 * without adding heavy 3D dependencies to the project.
 */
export default function ParticleCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Particles setup
    let particles = []
    const particleCount = 40

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.2
        })
      }
    }

    const drawGrid = (time) => {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)'
      ctx.lineWidth = 1
      
      const gridSize = 40
      const offset = (time * 0.02) % gridSize

      ctx.beginPath()
      // Horizontal lines moving down
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      
      // Vertical perspective lines
      const centerX = canvas.width / 2
      for (let x = -canvas.width; x < canvas.width * 2; x += gridSize * 2) {
        ctx.moveTo(centerX, canvas.height)
        ctx.lineTo(x, 0)
      }
      ctx.stroke()
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawGrid(time)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.fill()

        // Draw connecting lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 * (1 - dist / 80)})`
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className={`block w-full h-full ${className}`} 
    />
  )
}