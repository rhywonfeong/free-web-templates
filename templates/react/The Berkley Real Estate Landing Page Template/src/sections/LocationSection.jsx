import React from 'react'
import { useInView } from '../components/useInView'

const PROXIMITY = [
  { label: 'Ga Metro An Phú', time: '~2 phút', icon: 'solar:routing-bold' },
  { label: 'Landmark 81', time: '~5 phút', icon: 'solar:buildings-bold' },
  { label: 'Khu đô thị Thủ Thiêm', time: '~7 phút', icon: 'solar:city-bold' },
  { label: 'Trung tâm Quận 1', time: '~10 phút', icon: 'solar:map-point-bold' },
  { label: 'Sân bay Tân Sơn Nhất', time: '~20 phút', icon: 'solar:plain-bold' },
]

export default function LocationSection() {
  const [ref, inView] = useInView()

  return (
    <section id="location" style={{ background: '#F8F9FA', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center'
        }}
        className="split-grid"
        >
          {/* Map image */}
          <div style={{
            borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(11,45,114,0.15)',
            opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'all 0.7s ease-out'
          }}>
            <img
              src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_vitri_bandovitri_tienich_metro.webp"
              alt="Bản đồ vị trí The Berkley"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', maxHeight: 480 }}
            />
          </div>

          {/* Content */}
          <div style={{
            opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(32px)',
            transition: 'all 0.7s ease-out 0.15s'
          }}>
            <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>VỊ TRÍ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#0B2D72', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 14 }}>
              Vị Trí Vàng Cuối Cùng Tại Thảo Điền
            </h2>
            <div style={{ fontSize: '1.05rem', color: '#0B2D72', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', marginBottom: 16, fontWeight: 500 }}>
              Mặt tiền Xa Lộ Hà Nội – Kề Metro An Phú
            </div>
            <p style={{ fontSize: '0.9rem', color: '#4a5568', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, marginBottom: 28 }}>
              Tọa lạc tại tâm điểm Thảo Điền, mặt tiền Xa Lộ Hà Nội và liền kề tuyến Metro Bến Thành - Suối Tiên, The Berkley sở hữu vị trí vàng hiếm hoi còn sót lại. Tầm nhìn vĩnh cửu hướng về sông Sài Gòn và Landmark 81 không chỉ khẳng định vị thế độc tôn mà còn mang lại tiềm năng gia tăng giá trị trường tồn theo thời gian.
            </p>

            {/* Proximity tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {PROXIMITY.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: '#fff',
                  borderLeft: '3px solid #58A0C8',
                  borderRadius: '0 10px 10px 0',
                  padding: '10px 16px',
                  boxShadow: '0 2px 8px rgba(11,45,114,0.06)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(24px)',
                  transition: `all 0.5s ease-out ${0.3 + i * 0.08}s`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <iconify-icon icon={item.icon} style={{ fontSize: '16px', color: '#58A0C8' }}></iconify-icon>
                    <span style={{ fontSize: '0.875rem', color: '#0B2D72', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#58A0C8', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.split-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}