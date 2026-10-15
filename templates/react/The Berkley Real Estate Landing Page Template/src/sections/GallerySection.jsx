import React, { useState } from 'react'
import { useInView } from '../components/useInView'

const GALLERY = [
  { src: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_landmark81_thucte.webp', label: 'Hồ bơi vô cực – Landmark 81', hero: true },
  { src: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_rooftop_thucte.webp', label: 'Hồ bơi Rooftop', hero: false },
  { src: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_bancong_sanvuon_thucte.webp', label: 'Ban công sân vườn', hero: false },
  { src: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_sanhlounge_thucte_noithat.webp', label: 'Sảnh Lounge', hero: false },
  { src: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tongquan_tamnhin_bancong_landmark81.webp.webp', label: 'Tầm nhìn Panorama Landmark 81', hero: false },
]

export default function GallerySection() {
  const [ref, inView] = useInView()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" style={{ background: '#070F1E', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', color: '#58A0C8', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>THƯ VIỆN ẢNH</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Không Gian Sống & Tiện Ích Đỉnh Cao
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(192,192,192,0.7)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>Sky Facilities tại tầng 20-21 dành riêng cho 85 chủ nhân</p>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 16 }} className="gallery-grid-layout">
          {/* Hero cell — spans 2 rows */}
          <div onClick={() => setLightbox(GALLERY[0].src)} style={{
            gridRow: '1 / 3', gridColumn: '1 / 2', borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
            height: 480, position: 'relative',
            opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease-out 0s'
          }} className="gallery-img">
            <img src={GALLERY[0].src} alt={GALLERY[0].label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease-out' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(7,15,30,0.8), transparent)', padding: '20px 16px 14px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#fff', fontStyle: 'italic', color: 'rgba(192,192,200,0.9)' }}>{GALLERY[0].label}</div>
            </div>
          </div>

          {/* 4 smaller cells */}
          {GALLERY.slice(1).map((img, i) => (
            <div key={i} onClick={() => setLightbox(img.src)} style={{
              borderRadius: 16, overflow: 'hidden', cursor: 'pointer', position: 'relative', height: 230,
              opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s ease-out ${0.1 + i * 0.1}s`
            }} className="gallery-img">
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease-out' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(7,15,30,0.7), transparent)', padding: '14px 12px 10px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'rgba(192,192,200,0.9)' }}>{img.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(192,192,192,0.6)', fontSize: '0.875rem', marginBottom: 16 }}>
            Hệ thống tiện ích nội khu phân bổ thông minh từ mặt đất lên đỉnh tòa nhà, với tổ hợp Sky Facilities tại tầng 20 & 21.
          </p>
          <button className="btn-outline-sky" style={{ padding: '10px 24px', borderRadius: 10, fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
            Khám Phá Toàn Bộ Bộ Sưu Tập
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 300,
          background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, cursor: 'zoom-out'
        }}>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }} />
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
            width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem'
          }}>×</button>
        </div>
      )}

      <style>{`
        .gallery-img:hover img { transform: scale(1.02); }
        @media(max-width:768px){.gallery-grid-layout{grid-template-columns:1fr!important; grid-template-rows:auto!important;} .gallery-grid-layout>div{grid-row:auto!important;grid-column:auto!important;height:220px!important;}}
      `}</style>
    </section>
  )
}