import React from 'react'
import { useInView } from '../components/useInView'

const MILESTONES = [
  { label: 'Hoàn thiện mặt ngoài', date: 'Q1/2026', status: 'completed', image: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp' },
  { label: 'Bàn giao nội thất thực tế', date: 'Q2/2026', status: 'completed', image: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_sanhlounge_thucte_noithat.webp' },
  { label: 'Vận hành & Quản lý 5 sao', date: 'Hiện tại', status: 'in_progress', image: null },
  { label: 'Nhận nhà & Khai thác', date: 'Ngay sau thanh toán', status: 'upcoming', image: null },
]

const STATUS_CONFIG = {
  completed: { color: '#22c55e', label: '✓ Hoàn thành', bg: 'rgba(34,197,94,0.15)' },
  in_progress: { color: '#F59E0B', label: '⟳ Đang thực hiện', bg: 'rgba(245,158,11,0.15)' },
  upcoming: { color: '#58A0C8', label: '◷ Sắp tới', bg: 'rgba(88,160,200,0.15)' },
}

export default function ConstructionProgress({ onOpenModal }) {
  const [ref, inView] = useInView()

  return (
    <section id="construction-progress" style={{ background: '#0B2D72', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>TIẾN ĐỘ</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Đã Hoàn Thiện. Sẵn Sàng Khai Thác.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(192,192,192,0.7)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>Cập nhật tiến độ thực tế T04/2026</p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 10, padding: '10px 20px' }}>
            <iconify-icon icon="solar:shield-check-bold" style={{ fontSize: '20px', color: '#22c55e' }}></iconify-icon>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#22c55e', fontWeight: 600 }}>Tiến độ hoàn thành: 100%</span>
          </div>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="milestone-grid">
          {MILESTONES.map((m, i) => {
            const sc = STATUS_CONFIG[m.status]
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(192,192,192,0.12)',
                borderLeft: `3px solid ${sc.color}`,
                borderRadius: 14, overflow: 'hidden',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease-out ${i * 0.12}s`
              }}>
                {m.image ? (
                  <div style={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                    <img src={m.image} alt={m.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,45,114,0.3)' }} />
                    <div style={{ position: 'absolute', top: 10, right: 10, background: sc.bg, border: `1px solid ${sc.color}`, borderRadius: 6, padding: '3px 8px', fontSize: '0.68rem', color: sc.color, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{sc.label}</div>
                  </div>
                ) : (
                  <div style={{ height: 80, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: sc.bg, border: `1px solid ${sc.color}`, borderRadius: 6, padding: '5px 12px', fontSize: '0.72rem', color: sc.color, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{sc.label}</div>
                  </div>
                )}
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#fff', fontWeight: 600, marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(192,192,192,0.6)' }}>{m.date}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button onClick={onOpenModal} className="btn-primary" style={{ padding: '12px 28px', borderRadius: 10, border: 'none', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
            Nhận Hồ Sơ Hoàn Thiện
          </button>
          <p style={{ marginTop: 12, fontSize: '0.75rem', color: 'rgba(192,192,192,0.5)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>
            Hình ảnh thi công và bàn giao thực tế — The Berkley đã hoàn thiện và sẵn sàng khai thác.
          </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.milestone-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  )
}