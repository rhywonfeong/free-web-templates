import React from 'react'
import { useInView } from '../components/useInView'

const CARDS = [
  {
    type: '2 Phòng Ngủ',
    area: '72 - 129 m²',
    price: 'Từ 18 - 32 tỷ',
    rental: '3.000$/tháng',
    image: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_layout_c4_143m2_2pn.webp',
    features: ['Loggia cực rộng nối liền phòng khách', 'Khu vực Foyer riêng biệt', 'Thiết kế vuông vức, tối ưu công năng']
  },
  {
    type: '3 Phòng Ngủ + Study',
    area: '161.91 m²',
    price: 'Từ 40 tỷ',
    rental: '4.000$/tháng',
    image: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_layout_3pn_typec2.webp.webp',
    features: ['Căn góc đắt giá nhất dự án', 'View trực diện Landmark 81', 'Phòng Study & Utility riêng'],
    featured: true
  },
  {
    type: 'Phiên Bản Đặc Biệt',
    area: '80 - 139 m²',
    price: 'Liên hệ',
    rental: 'Thỏa thuận',
    image: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_layout_2pn_c6_tang3.webp',
    features: ['Căn có sân vườn riêng (PES) tầng 3', 'Bồn tắm nằm Bathtub sang trọng tầng 4', 'Khoảng lùi Sky Garden tầng 10 & 11']
  }
]

export default function PricingSection({ onOpenModal }) {
  const [ref, inView] = useInView()

  return (
    <section id="pricing" style={{ background: '#F8F9FA', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>GIÁ BÁN</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#0B2D72', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Chính Sách Giá — Cơ Hội Sở Hữu Độc Bản
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', fontFamily: "'Inter', sans-serif", fontStyle: 'italic', marginBottom: 10 }}>Cập nhật T04/2026</p>
          <p style={{ maxWidth: 680, margin: '0 auto', fontSize: '0.9rem', color: '#4a5568', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Chính sách bán hàng đột phá: Sở hữu ngay căn hộ hạng sang với số vốn siêu thấp. Thanh toán 22% nhận nhà ngay (trả chậm 1.5 năm) hoặc thanh toán 50% nhận nhà.
          </p>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }} className="pricing-grid">
          {CARDS.map((card, i) => (
            <div key={i} className="pricing-card" style={{
              background: '#fff',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(11,45,114,0.08)',
              border: card.featured ? '2px solid #58A0C8' : '1px solid rgba(192,192,192,0.3)',
              position: 'relative',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s ease-out ${i * 0.12}s`
            }}>
              {card.featured && (
                <div style={{ position: 'absolute', top: 14, right: 14, background: '#58A0C8', color: '#fff', borderRadius: 6, padding: '3px 10px', fontSize: '0.68rem', fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '0.05em', zIndex: 2 }}>
                  PHỔ BIẾN NHẤT
                </div>
              )}
              {/* Floor plan image */}
              <div style={{ height: 180, overflow: 'hidden', background: '#f8f9fa', borderBottom: '4px solid #0B2D72' }}>
                <img src={card.image} alt={card.type} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }} />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0B2D72', fontWeight: 600, marginBottom: 4 }}>{card.type}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>{card.area}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#58A0C8', fontWeight: 600, marginBottom: 4 }}>{card.price}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', fontFamily: "'Inter', sans-serif", marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <iconify-icon icon="solar:home-bold" style={{ fontSize: '13px', color: '#58A0C8' }}></iconify-icon>
                  Cho thuê từ {card.rental}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                  {card.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <iconify-icon icon="solar:check-circle-bold" style={{ fontSize: '14px', color: '#58A0C8', marginTop: 2, flexShrink: 0 }}></iconify-icon>
                      <span style={{ fontSize: '0.8rem', color: '#4a5568', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={onOpenModal} className={card.featured ? 'btn-primary' : 'btn-outline-sky'} style={{ width: '100%', padding: '10px', borderRadius: 9, border: card.featured ? 'none' : '1.5px solid #58A0C8', fontSize: '0.78rem', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                  Nhận Báo Giá Chi Tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onOpenModal} className="btn-primary" style={{ padding: '11px 24px', borderRadius: 10, border: 'none', fontSize: '0.875rem' }}>
            Nhận Báo Giá Chi Tiết
          </button>
          <button onClick={onOpenModal} className="btn-outline-sky" style={{ padding: '11px 24px', borderRadius: 10, fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
            Tính Toán Lợi Nhuận Cho Thuê
          </button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.pricing-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}