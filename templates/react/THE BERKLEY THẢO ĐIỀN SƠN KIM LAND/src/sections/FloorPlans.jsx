import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';

export function FloorPlans() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(0);

  const plans = [
    {
      title: "Căn 2 Phòng Ngủ (Type C4)",
      area: "128.67 m²",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0a0d122-238b-44e8-b336-e174c9774a92_800w.jpg",
      desc: "Không gian mở hoàn hảo với loggia cực lớn kết nối trực tiếp với phòng khách, dễ dàng đón gió tự nhiên và ánh sáng trong trẻo. Khu vực Foyer riêng biệt tạo sự riêng tư tinh tế."
    },
    {
      title: "Căn 3 Phòng Ngủ (Type C2)",
      area: "161.91 m²",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6777bf9b-fc79-45ca-b9ba-f4760c0ac23c_800w.jpg",
      desc: "Thiết kế góc đắt giá mang lại tầm nhìn Panorama trực diện về phía Landmark 81. Diện tích sử dụng lớn cho phép linh hoạt bố trí phòng Study hoặc Utility theo ý thích."
    },
    {
      title: "Căn Sân Vườn (Tầng 3)",
      area: "72 - 129 m²",
      img: "https://storage.googleapis.com/stephen-hub.firebasestorage.app/the-berkley/theberkley_layout_2pn_c6_tang3.webp",
      desc: "Đặc quyền sở hữu khoảng sân vườn (PES) cực rộng lên đến hơn 139m². Không gian lý tưởng cho tiệc BBQ gia đình hay những khoảnh khắc thư giãn giữa mảng xanh tươi mát."
    }
  ];

  return (
    <section className="py-24 bg-[#0B2D72] relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <Reveal className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">Mặt Bằng Chi Tiết</h2>
          <p className="text-[#C0C0C0] text-lg">Thiết kế vuông vức, loggia rộng, foyer riêng biệt</p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={200} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {["2PN", "3PN + Study", "PES Sân Vườn"].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 text-sm font-medium transition-colors border ${
                activeTab === idx 
                  ? 'bg-[#58A0C8] border-[#58A0C8] text-white' 
                  : 'bg-transparent border-white/20 text-[#C0C0C0] hover:border-white/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </Reveal>

        {/* Content Area */}
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
          {/* Image Side */}
          <div className="w-full md:w-3/5 bg-[#F8F9FA] p-8 flex items-center justify-center border-r border-gray-100 relative group">
            <img 
              src={plans[activeTab].img} 
              alt={plans[activeTab].title} 
              className="max-h-[400px] w-auto object-contain transition-all duration-500 transform group-hover:scale-105 mix-blend-multiply"
              key={plans[activeTab].img} // force re-render for animation
              style={{ animation: 'fadeIn 0.5s ease-out' }}
            />
          </div>
          
          {/* Text Side */}
          <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white" key={`text-${activeTab}`}>
            <div style={{ animation: 'slideUp 0.5s ease-out' }}>
              <span className="inline-block bg-[#0B2D72]/5 text-[#0B2D72] px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4">
                {plans[activeTab].area}
              </span>
              <h3 className="font-serif text-3xl text-[#0B2D72] font-bold mb-6">{plans[activeTab].title}</h3>
              <p className="text-[#070F1E]/70 leading-relaxed text-sm mb-10">
                {plans[activeTab].desc}
              </p>
              <Button variant="outlineAccent" fullWidth onClick={() => openModal('Bản vẽ')}>Nhận Bản Vẽ Kỹ Thuật</Button>
            </div>
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </section>
  );
}