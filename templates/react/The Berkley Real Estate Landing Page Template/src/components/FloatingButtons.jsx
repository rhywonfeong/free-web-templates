import React, { useEffect, useState } from 'react'

export default function FloatingButtons() {
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 1000)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 90, zIndex: 98,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}
    className="floating-buttons"
    >
      <a href="https://zalo.me/0902345678" target="_blank" rel="noopener noreferrer"
        style={{
          width: 48, height: 48, borderRadius: '50%',
          background: '#0068FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,104,255,0.4)',
          animation: bounce ? 'bounce-soft 1s ease-in-out' : 'none',
          transition: 'transform 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <iconify-icon icon="simple-icons:zalo" style={{ fontSize: '22px', color: '#fff' }}></iconify-icon>
      </a>
      <a href="tel:0902345678"
        style={{
          width: 48, height: 48, borderRadius: '50%',
          background: '#58A0C8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(88,160,200,0.4)',
          animation: bounce ? 'bounce-soft 1s ease-in-out 0.1s' : 'none',
          transition: 'transform 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <iconify-icon icon="solar:phone-bold" style={{ fontSize: '20px', color: '#fff' }}></iconify-icon>
      </a>
    </div>
  )
}