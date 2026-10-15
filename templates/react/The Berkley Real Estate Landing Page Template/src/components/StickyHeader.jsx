import React from 'react'

export default function StickyHeader({ scrolled, onOpenModal }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        opacity: scrolled ? 1 : 0,
        background: 'rgba(11, 45, 114, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(192,192,192,0.15)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: '#58A0C8',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: '1rem', color: '#fff'
          }}>B</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1 }}>The Berkley</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: 'rgba(192,192,192,0.8)', lineHeight: 1.2, marginTop: 2 }}>Sơn Kim Land • Thảo Điền</div>
          </div>
        </div>

        {/* Nav - desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="desktop-nav">
          {[['location','Vị trí'],['pricing','Giá'],['floor-plans','Mặt bằng'],['contact','Liên hệ']].map(([id, label]) => (
            <button key={id} onClick={() => scrollToSection(id)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
              cursor: 'pointer', fontSize: '0.85rem', fontFamily: "'Inter', sans-serif",
              fontWeight: 500, transition: 'color 0.2s', padding: '4px 0'
            }}
            onMouseEnter={e => e.target.style.color = '#58A0C8'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
            >{label}</button>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="tel:0902345678" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: '#58A0C8', textDecoration: 'none',
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem'
          }}>
            <iconify-icon icon="solar:phone-bold" style={{ fontSize: '16px' }}></iconify-icon>
            <span className="hotline-text" style={{ display: 'inline' }}>090 234 5678</span>
          </a>
          <button onClick={onOpenModal} className="btn-primary" style={{
            padding: '8px 20px', borderRadius: 8, border: 'none',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em'
          }}>Nhận Tư Vấn</button>
        </div>
      </div>
    </header>
  )
}