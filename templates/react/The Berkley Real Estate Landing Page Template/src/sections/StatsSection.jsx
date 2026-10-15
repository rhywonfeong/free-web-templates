import React, { useState, useEffect } from 'react'
import { useInView } from '../components/useInView'

const STATS = [
  { value: 85, suffix: '', label: 'Căn hộ', note: 'Phiên bản giới hạn độc bản', large: true },
  { value: 5, suffix: '', label: 'Căn/tầng', note: 'Đảm bảo tính riêng tư tuyệt đối', large: false },
  { value: 250, suffix: '', label: 'Triệu/m²', note: 'Đơn giá dự kiến (tham khảo)', large: false },
  { value: 22, suffix: '%', label: 'Thanh toán', note: 'Nhận nhà ngay lập tức', large: false },
]

function AnimatedStat({ value, suffix, duration = 1200 }) {
  const [display, setDisplay] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function StatsSection() {
  const [ref, inView] = useInView()

  return (
    <section id="stats" style={{ background: '#0B2D72', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative building silhouette */}
      <div style={{
        position: 'absolute', bottom: 0, right: '5%',
        width: 300, height: 400, opacity: 0.04,
        background: 'linear-gradient(to bottom, #C0C0C0, transparent)',
        clipPath: 'polygon(20% 100%, 20% 30%, 30% 30%, 30% 20%, 40% 20%, 40% 10%, 60% 10%, 60% 20%, 70% 20%, 70% 30%, 80% 30%, 80% 100%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 56,
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out'
        }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>CON SỐ</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Con Số Nói Lên Tất Cả
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(192,192,192,0.7)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>Sự hiếm có của The Berkley</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="stats-grid">
          {STATS.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '32px 16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(192,192,192,0.1)',
              borderRadius: 16,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: `all 0.7s ease-out ${0.1 + i * 0.1}s`,
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: stat.large ? 'clamp(3.5rem, 6vw, 5rem)' : 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 600, color: '#fff', lineHeight: 1,
                marginBottom: 4, letterSpacing: '-0.02em'
              }}>
                <AnimatedStat value={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ width: 40, height: 2, background: '#58A0C8', margin: '10px auto 10px', borderRadius: 1 }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#C0C0C0', fontWeight: 600, marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(88,160,200,0.8)', fontStyle: 'italic' }}>{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  )
}