import React from 'react'
import { useInView } from '../components/useInView'

const TABLE_DATA = [
  { field: 'Tên dự án', value: 'The Berkley' },
  { field: 'Vị trí', value: '177 Xa Lộ Hà Nội, Thảo Điền, Quận 2, TP. Thủ Đức' },
  { field: 'Chủ đầu tư', value: 'Sơn Kim Land' },
  { field: 'Đơn vị phát triển', value: 'Sơn Kim Land' },
  { field: 'Số tháp / Khu', value: '1 tòa tháp độc lập' },
  { field: 'Số tầng', value: '21 tầng' },
  { field: 'Số sản phẩm', value: '85 căn hộ dịch vụ' },
  { field: 'Loại hình', value: 'Căn hộ hạng sang (Luxury Boutique)' },
  { field: 'Năm bàn giao', value: 'Đã hoàn thiện (Sẵn sàng khai thác)' },
  { field: 'Tiêu chuẩn bàn giao', value: 'Hoàn thiện nội thất cơ bản theo tiêu chuẩn Sơn Kim Land' },
  { field: 'Mật độ thang máy', value: '4 thang máy / 5 căn hộ mỗi tầng' },
  { field: 'Pháp lý', value: 'Căn hộ dịch vụ (Thời hạn theo chính sách CĐT)' },
  { field: 'Đơn giá tham khảo', value: 'Từ 250 triệu/m²' },
]

export default function OverviewSection() {
  const [ref, inView] = useInView()

  return (
    <section id="overview" style={{ background: '#F8F9FA', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', overflow: 'hidden'
      }}>
        <img src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_facade_thucte_metro.webp.webp"
          alt="" style={{ width: '60%', opacity: 0.03, objectFit: 'contain' }} />
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>DỰ ÁN</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#0B2D72', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Tổng Quan Dự Án
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6b7280', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>Thông tin chi tiết về The Berkley</p>
        </div>

        <div ref={ref} style={{
          background: '#fff',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(11,45,114,0.1)',
          border: '1px solid rgba(192,192,192,0.3)'
        }}>
          {TABLE_DATA.map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1.6fr',
              borderBottom: i < TABLE_DATA.length - 1 ? '1px solid rgba(192,192,192,0.2)' : 'none',
              background: i % 2 === 0 ? '#fff' : 'rgba(88,160,200,0.04)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transition: `all 0.4s ease-out ${i * 0.06}s`
            }}>
              <div style={{
                padding: '13px 20px',
                fontSize: '0.82rem', color: '#0B2D72',
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                borderRight: '2px solid rgba(88,160,200,0.2)',
                display: 'flex', alignItems: 'center'
              }}>{row.field}</div>
              <div style={{
                padding: '13px 20px',
                fontSize: '0.875rem', color: '#374151',
                fontFamily: "'Inter', sans-serif"
              }}>{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}