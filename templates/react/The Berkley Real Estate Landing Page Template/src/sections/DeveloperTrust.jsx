import React from 'react'
import { useInView } from '../components/useInView'

const PILLARS = [
  { icon: 'solar:map-point-bold', text: 'Quỹ đất vàng cuối cùng tại Thảo Điền' },
  { icon: 'solar:star-bold', text: 'Tiêu chuẩn quản lý 5 sao quốc tế' },
  { icon: 'solar:buildings-bold', text: 'Thiết kế boutique giới hạn chỉ 85 căn' },
  { icon: 'solar:eye-bold', text: 'Tầm nhìn vĩnh cửu sông Sài Gòn & Landmark 81' },
]

export default function DeveloperTrust() {
  const [ref, inView] = useInView()

  return (
    <section id="developer-trust" style={{ background: '#F8F9FA', padding: 0, position: 'relative', overflow: 'hidden' }}>
      {/* Full bleed image with overlay */}
      <div style={{ position: 'relative', height: 480 }}>
        <img
          src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_ngoai_that.webp.webp"
          alt="The Berkley Exterior"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(11,45,114,0.6) 70%, rgba(11,45,114,0.9) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center', padding: '0 24px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>
            Sơn Kim Land — Kiến Tạo Di Sản
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>
            20+ năm kiến tạo những công trình biểu tượng tại TP.HCM
          </p>
        </div>
      </div>

      {/* Trust pillars strip */}
      <div ref={ref} style={{ background: '#fff', padding: '40px 24px', boxShadow: '0 -4px 20px rgba(11,45,114,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="trust-grid">
          {PILLARS.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease-out ${i * 0.1}s`
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(88,160,200,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <iconify-icon icon={p.icon} style={{ fontSize: '20px', color: '#58A0C8' }}></iconify-icon>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#0B2D72', fontWeight: 600, lineHeight: 1.5, paddingTop: 6 }}>{p.text}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button className="btn-outline-sky" style={{ padding: '10px 24px', borderRadius: 10, fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
            Tìm Hiểu Thêm Về Chủ Đầu Tư
          </button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.trust-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}