import React, { useRef } from 'react'

const VIDEOS = [
  {
    id: 'video_1',
    poster: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_landmark81_thucte.webp',
    label: 'Tổng quan dự án',
    placeholder: 'Video sẽ được cập nhật sớm'
  },
  {
    id: 'video_2',
    poster: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_thietke_bancong_sanvuon_thucte.webp',
    label: 'Không gian tiện ích',
    placeholder: 'Video sẽ được cập nhật sớm'
  },
  {
    id: 'video_3',
    poster: 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/the_berkley_tienich_hoboi_rooftop_thucte.webp',
    label: 'Cuộc sống cư dân',
    placeholder: 'Video sẽ được cập nhật sớm'
  }
]

export default function VideoSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section id="video" style={{
      background: 'linear-gradient(135deg, #0B2D72 0%, #58A0C8 100%)',
      padding: '80px 0'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 12 }}>VIDEO</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Khám Phá The Berkley
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', fontFamily: "'Inter', sans-serif", fontStyle: 'italic' }}>Trải nghiệm không gian sống và tiện ích đẳng cấp</p>
        </div>

        {/* Carousel nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
          <button onClick={() => scroll(-1)} style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <iconify-icon icon="solar:arrow-left-bold" style={{ fontSize: '16px' }}></iconify-icon>
          </button>
          <button onClick={() => scroll(1)} style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <iconify-icon icon="solar:arrow-right-bold" style={{ fontSize: '16px' }}></iconify-icon>
          </button>
        </div>

        {/* Video carousel */}
        <div ref={scrollRef} style={{
          display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory',
          paddingBottom: 8, scrollbarWidth: 'none', msOverflowStyle: 'none',
          justifyContent: 'center'
        }}>
          {VIDEOS.map((v) => (
            <div key={v.id} style={{
              flexShrink: 0, width: 280, scrollSnapAlign: 'center',
              borderRadius: 16, overflow: 'hidden',
              background: 'rgba(11,45,114,0.6)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}>
              {/* 9:16 aspect */}
              <div style={{ position: 'relative', aspectRatio: '9/16', width: '100%' }}>
                <img src={v.poster} alt={v.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,45,114,0.45)' }} />
                {/* Play icon */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 60, height: 60, borderRadius: '50%',
                  background: 'rgba(88,160,200,0.85)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'; e.currentTarget.style.background = '#58A0C8' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'; e.currentTarget.style.background = 'rgba(88,160,200,0.85)' }}
                >
                  <iconify-icon icon="solar:play-bold" style={{ fontSize: '24px', color: '#fff', marginLeft: 3 }}></iconify-icon>
                </div>
                {/* Placeholder text */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(11,45,114,0.9), transparent)',
                  padding: '24px 14px 14px'
                }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{v.placeholder}</div>
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#fff', fontWeight: 600 }}>{v.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}