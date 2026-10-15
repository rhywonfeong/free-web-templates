import React from 'react';

// Reusable word reveal component for GSAP integration
export const WordReveal = ({ children }) => {
  if (typeof children !== 'string') return children;
  return (
    <span className="inline-block reveal-section">
      {children.split(' ').map((word, i) => (
        <span key={i} className="gsap-reveal-wrapper inline-block mr-[0.25em] last:mr-0 relative" style={{ overflow: 'visible' }}>
          <span className="gsap-word-reveal inline-block will-change-[transform,filter,opacity]">{word}</span>
        </span>
      ))}
    </span>
  )
}

// Letter by letter drop animation
export const CharSlideDown = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <span key={i} className="char-clip-wrap">
          <span 
            className="char-slide-down" 
            style={{ animationDelay: `${delay + i * 0.03}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  )
}