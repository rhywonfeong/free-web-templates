import React from 'react'

/**
 * Wraps sections to provide the consistent editorial grid styling,
 * top/bottom borders, and precision dots at corners.
 */
export default function SectionFrame({ children, id, className = '', noBorderBottom = false }) {
  return (
    <section id={id} className={`relative w-full ${!noBorderBottom ? 'border-b border-white/10' : ''} ${className}`}>
      {children}
      
      {/* Corner Dots - Top */}
      <div className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-white/20 rounded-full z-10" />
      <div className="absolute -top-[2px] -right-[2px] w-[3px] h-[3px] bg-white/20 rounded-full z-10" />
      
      {/* Corner Dots - Bottom */}
      {!noBorderBottom && (
        <>
          <div className="absolute -bottom-[2px] -left-[2px] w-[3px] h-[3px] bg-white/20 rounded-full z-10" />
          <div className="absolute -bottom-[2px] -right-[2px] w-[3px] h-[3px] bg-white/20 rounded-full z-10" />
        </>
      )}
    </section>
  )
}