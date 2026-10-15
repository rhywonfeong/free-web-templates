import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const imgRef = useRef(null)
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovered || !containerRef.current || !imgRef.current) return
      
      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25

      imgRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateY(${y * 0.5}px)`
    }

    const handleMouseLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  return (
    <section className="pt-40 pb-0 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]" ref={containerRef}>
          {/* Left Column - Content */}
          <div className="flex flex-col items-start z-10 max-w-xl">
            <div className="bg-neutral-0 border border-neutral-100 rounded-full px-4 py-1.5 text-xs font-bold text-neutral-900 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>
              Inteligência que não sobra.
            </div>
            
            <h1 className="font-display text-5xl md:text-[clamp(50px,5.8vw,72px)] leading-[1.05] tracking-tight-display text-neutral-900 mb-6 flex flex-col">
              <span>SEM ACHISMO.</span>
              <span>SEM PLANILHA.</span>
              <span>SEM DESPERDÍCIO.</span>
            </h1>

            <p className="text-xl font-bold text-neutral-900 mb-3">
              Controle de estoque e margem em tempo real para restaurantes por quilo.
            </p>
            
            <p className="text-base text-neutral-700 leading-relaxed mb-8 max-w-md">
              Você sabia que restaurantes por quilo perdem em média 18% do faturamento em desperdício invisível? O Rendiq torna esse número visível — e controlável — em menos de 5 segundos por dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-lime-400 text-neutral-900 font-bold px-8 py-4 rounded-[8px] hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide w-full sm:w-auto">
                COMEÇAR GRÁTIS
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
              </button>
              <button className="bg-transparent border-2 border-neutral-100 text-neutral-900 font-bold px-8 py-4 rounded-[8px] hover:border-neutral-900 transition-colors text-sm uppercase tracking-wide w-full sm:w-auto bg-neutral-0">
                VER COMO FUNCIONA
              </button>
            </div>
          </div>

          {/* Right Column - Image area */}
          <div className="relative flex justify-center items-center h-full w-full"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            
            {/* Background Blob/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime-100/30 rounded-full blur-[100px] -z-10"></div>

            {/* Main Image Container */}
            <div 
              ref={imgRef}
              className={`relative z-10 w-full max-w-md rounded-[16px] border-[4px] border-neutral-0 shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden transform-gpu transition-transform duration-[400ms] ease-out ${!isHovered ? 'animate-float' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                alt="Comida de restaurante por quilo com foco em carnes e acompanhamentos" 
                className="w-full h-auto aspect-[4/5] object-cover animate-img-breathe origin-center"
              />
              
              {/* Overlay Mockup Element */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-0/95 backdrop-blur-sm rounded-[12px] p-4 shadow-lg border border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Status de Hoje</p>
                  <p className="text-sm font-bold text-neutral-900">Margem Segura</p>
                </div>
                <div className="bg-lime-100 text-green-500 p-2 rounded-full flex items-center justify-center">
                  <iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
                </div>
              </div>
            </div>

            {/* Floating Leaves Decor */}
            <div className="absolute top-10 right-10 text-lime-400 animate-leaf-sway" style={{ animationDelay: '0s' }}>
              <iconify-icon icon="solar:leaf-bold-duotone" width="48"></iconify-icon>
            </div>
            <div className="absolute bottom-20 left-4 text-lime-400 animate-leaf-sway" style={{ animationDelay: '1s' }}>
              <iconify-icon icon="solar:leaf-bold-duotone" width="32"></iconify-icon>
            </div>
            <div className="absolute -top-4 left-20 text-lime-400 animate-leaf-sway opacity-60" style={{ animationDelay: '2s' }}>
              <iconify-icon icon="solar:leaf-bold" width="24"></iconify-icon>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-neutral-0 border-y border-neutral-100 mt-16 relative z-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-neutral-100">
            
            <div className="p-8 flex flex-col items-center justify-center text-center group">
              <span className="font-display text-4xl text-neutral-900 group-hover:scale-105 transition-transform duration-300">&lt; 5 MIN/DIA</span>
              <span className="text-xs font-bold text-neutral-500 mt-2 uppercase tracking-wide">Tempo médio de registro</span>
            </div>
            
            <div className="p-8 flex flex-col items-center justify-center text-center group">
              <span className="font-display text-4xl text-green-500 group-hover:scale-105 transition-transform duration-300">ATÉ 40%</span>
              <span className="text-xs font-bold text-neutral-500 mt-2 uppercase tracking-wide">Redução de desperdício</span>
            </div>
            
            <div className="p-8 flex flex-col items-center justify-center text-center group">
              <span className="font-display text-4xl text-neutral-900 group-hover:scale-105 transition-transform duration-300">+120</span>
              <span className="text-xs font-bold text-neutral-500 mt-2 uppercase tracking-wide">Restaurantes ativos</span>
            </div>
            
            <div className="p-8 flex flex-col items-center justify-center text-center group">
              <span className="font-display text-4xl text-neutral-900 group-hover:scale-105 transition-transform duration-300">14 DIAS</span>
              <span className="text-xs font-bold text-neutral-500 mt-2 uppercase tracking-wide">Teste grátis</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero