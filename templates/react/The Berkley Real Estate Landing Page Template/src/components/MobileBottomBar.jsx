import React from 'react'

export default function MobileBottomBar({ onOpenModal }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      zIndex: 99,
      background: 'linear-gradient(135deg, #0B2D72 0%, #1a4a9f 100%)',
      borderTop: '1px solid rgba(88,160,200,0.3)',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
      padding: '10px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}
    className="mobile-bottom-bar"
    >
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>The Berkley</div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(88,160,200,0.9)', fontFamily: "'Inter', sans-serif" }}>Còn 85 căn • Luxury Boutique</div>
      </div>
      <button onClick={onOpenModal} className="btn-primary" style={{
        padding: '10px 20px', borderRadius: 10, border: 'none',
        fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
        animation: 'pulse-ring 3s ease-out infinite'
      }}>Nhận Báo Giá</button>
    </div>
  )
}