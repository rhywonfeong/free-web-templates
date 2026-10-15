import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="selection:bg-[#F4E7C4] selection:text-black flex flex-col min-h-screen text-zinc-200">
      {/* Navigation */}
      <nav className="fixed flex transition-all duration-300 z-50 bg-black/10 mix-blend-difference w-full pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-sm items-center justify-between">
        <Link to="/" className="cursor-pointer hover:scale-[1.02] transition-transform duration-300 origin-left text-xl font-semibold text-[#F4E7C4] tracking-tight font-space-grotesk">
          MINH HOÀNG
        </Link>

        <div className="hidden lg:flex xl:space-x-8 uppercase text-xs font-medium text-zinc-400 tracking-widest space-x-6">
          <Link to="/" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 cursor-pointer font-geist">TRANG CHỦ</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/service" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 cursor-pointer font-geist">DỊCH VỤ</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/the-company" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 cursor-pointer font-geist">VỀ CÔNG TY</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/product" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 cursor-pointer font-geist">SẢN PHẨM</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/process" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 cursor-pointer font-geist">QUY TRÌNH</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="group pt-2 pb-2 relative">
            <span className="group-hover:text-white transition-colors duration-300 font-geist">LIÊN HỆ</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F4E7C4] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex gap-x-2 gap-y-2 items-center">
          <button 
            className="hidden lg:flex uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(244,231,196,0.4)] transition-all duration-300 active:scale-95 gap-2 group cursor-pointer text-xs font-semibold text-black tracking-widest font-geist bg-[#F4E7C4] rounded-sm pt-2.5 pr-6 pb-2.5 pl-6 items-center"
            onClick={() => navigate('/contact')}
          >
            BÁO GIÁ NGAY
          </button>

          <button 
            className="lg:hidden hover:text-white hover:bg-[#F4E7C4]/10 hover:border-[#F4E7C4] active:scale-90 transition-all duration-300 group overflow-hidden z-50 text-zinc-300 border-zinc-700 border rounded-sm pt-2 pr-2 pb-2 pl-2 relative flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <iconify-icon 
              icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              width="24" 
              height="24" 
              class={`transition-transform duration-300 group-hover:text-[#F4E7C4] ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
              style={{ color: 'rgb(244, 231, 196)' }}
            ></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col pt-32 px-6 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col gap-6 text-xl font-space-grotesk font-semibold tracking-widest uppercase items-center text-center">
          <Link to="/" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2 border-b border-zinc-800/50">TRANG CHỦ</Link>
          <Link to="/service" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2 border-b border-zinc-800/50">DỊCH VỤ</Link>
          <Link to="/the-company" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2 border-b border-zinc-800/50">VỀ CÔNG TY</Link>
          <Link to="/product" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2 border-b border-zinc-800/50">SẢN PHẨM</Link>
          <Link to="/process" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2 border-b border-zinc-800/50">QUY TRÌNH</Link>
          <Link to="/contact" className="hover:text-[#F4E7C4] transition-colors duration-300 w-full py-2">LIÊN HỆ</Link>
        </div>
        <div className="mt-auto pb-12 w-full max-w-sm mx-auto">
          <button 
            className="w-full uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(244,231,196,0.4)] transition-all duration-300 active:scale-95 flex gap-2 group cursor-pointer text-sm font-semibold text-black tracking-widest font-geist bg-[#F4E7C4] rounded-sm py-4 items-center justify-center"
            onClick={() => { toggleMobileMenu(); navigate('/contact'); }}
          >
            BÁO GIÁ NGAY
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 pt-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Layer */}
        <div className="bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53c7d7ce-1e90-48fb-974a-f7e55742f37e_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute inset-0 bg-[#0A0A0A]/60 mix-blend-multiply z-10"></div>
          <div className="z-10 absolute top-0 right-0 bottom-0 left-0"></div>
        </div>

        <div className="relative z-20 max-w-screen-2xl w-full mx-auto">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            <div className="w-12 h-[1px] bg-[#F4E7C4]"></div>
            <p className="uppercase text-xs font-medium text-[#F4E7C4] tracking-[0.2em]">THÀNH LẬP NĂM 2006- CHẤT LƯỢNG NHÀ MÁY</p>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter leading-[0.85] text-white mb-16 select-none">
            <span className="block hover:translate-x-4 transition-transform duration-700 ease-out cursor-crosshair drop-shadow-2xl">TÁO BẠO.</span>
            <span className="block hover:translate-x-8 transition-transform duration-700 ease-out delay-75 cursor-crosshair text-[#F4E7C4] drop-shadow-2xl">CHÍNH XÁC.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-5 flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/contact')}>
              <button className="relative overflow-hidden bg-[#F4E7C4] text-black text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300">
                <span className="flex items-center gap-2 z-10 relative">YÊU CẦU GỬI MẪU</span>
                <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>
              </button>
              <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-white backdrop-blur-sm hover:border-[#F4E7C4] hover:bg-[#F4E7C4]/10 transition-all duration-300 group-hover:scale-110">
                <iconify-icon icon="solar:arrow-down-linear" width="20" height="20" class="group-hover:translate-y-1 transition-transform duration-300"></iconify-icon>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 border-l border-zinc-800 pl-6 lg:pl-8">
              <p className="lg:text-lg leading-relaxed hover:text-zinc-200 transition-colors duration-500 text-base font-light text-zinc-400">Vượt xa tiêu chuẩn sản xuất thông thường, chúng tôi mang đến những giải pháp in ấn giàu cảm giác, chạm là thấy, dành cho các thương hiệu đề cao uy tín và theo đuổi sự tinh xảo không thỏa hiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="lg:py-48 lg:px-12 bg-[#111111] pt-32 pr-6 pb-32 pl-6 relative">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="leading-[0.9] uppercase sticky md:text-6xl lg:text-7xl sm:text-5xl text-5xl font-semibold text-slate-300 tracking-tighter font-space-grotesk mb-8 top-32">NGHỆ THUẬT IN ẤN. <br /></h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center space-y-16 lg:space-y-24">
            <p className="md:text-2xl lg:text-3xl leading-relaxed text-xl font-light text-zinc-300 tracking-tight">MINH HOÀNG ngoài là một đơn vị cung cấp dịch vụ chúng tôi là đối tác công nghiệp, mang đến những giải pháp in ấn được chế tác với độ chính xác, chiều sâu cảm giác và tiêu chuẩn không thỏa hiệp dành cho các thương hiệu đòi hỏi vị thế.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#F4E7C4] rounded-full group-hover:scale-[2] transition-transform duration-300"></div>
                  <h3 className="uppercase group-hover:translate-x-2 transition-transform duration-300 text-xs font-medium text-[#F4E7C4] tracking-[0.15em]">01 / phân tích nhu cầu</h3>
                </div>
                <p className="leading-relaxed text-base font-light text-zinc-400 pl-4.5">Mỗi dự án đều được bắt đầu bằng sự am hiểu tường tận về vấn đề mà khách hàng gặp phải cùng với việc tư vấn nhiệt tình của đội ngũ nhân viên</p>
              </div>

              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#F4E7C4] rounded-full group-hover:scale-[2] transition-transform duration-300"></div>
                  <h3 className="uppercase group-hover:translate-x-2 transition-transform duration-300 text-xs font-medium text-[#F4E7C4] tracking-[0.15em]">02 / in ấn chính xác</h3>
                </div>
                <p className="leading-relaxed text-base font-light text-zinc-400 pl-4.5">Đảm bảo sản phẩm đầu ra đạt được màu sắc đồng đều và chất lượng cao. Đem lại trải nghiệm tốt nhất cho khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="lg:py-48 lg:px-12 w-full max-w-screen-2xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24">
          <div>
            <p className="uppercase flex items-center gap-2 text-xs font-medium text-[#F4E7C4] tracking-[0.2em] mb-4"><span className="w-8 h-[1px] bg-[#F4E7C4]"></span> sản phẩm in ấn / 2024</p>
            <h2 className="md:text-6xl uppercase text-5xl font-semibold text-white tracking-tighter">ấn phẩm tiêu biểu</h2>
          </div>
          <Link to="/product" className="group flex items-center gap-3 md:mt-0 uppercase hover:text-[#F4E7C4] transition-colors duration-300 text-xs font-medium text-zinc-400 tracking-widest mt-8 pt-2 pb-2">
            <span>xem tất cả ấn phẩm</span>
            <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-[#F4E7C4] transition-colors">
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </div>
          </Link>
        </div>

        {/* Complex Grid Layout */}
        <div className="h-[1200px] lg:h-[800px] flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Large Card */}
          <div className="flex-1 lg:w-1/2 overflow-hidden group cursor-pointer bg-center bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62dc35c8-a03a-4fdf-8bd2-eb7f748d3622_1600w.png)] bg-cover border-zinc-600/50 border rounded-sm relative">
            <div className="bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
              <p className="uppercase text-xs font-medium text-[#F4E7C4] tracking-widest mb-3">in số nhảy/ cán màng</p>
              <h3 className="lg:text-4xl flex justify-between items-center text-3xl font-semibold text-white tracking-tight font-space-grotesk">
                Xem mẫu in 
                <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24" class="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-[#F4E7C4]"></iconify-icon>
              </h3>
            </div>
          </div>

          {/* Right Column Layout */}
          <div className="flex-1 lg:w-1/2 flex flex-col gap-4 lg:gap-6">
            {/* Top Right Card */}
            <div className="flex-1 overflow-hidden group cursor-pointer bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da591447-4517-49b9-8d73-16164e54378f_1600w.png)] bg-cover bg-center border-zinc-800/50 border rounded-sm relative">
              <div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
              <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-[#F4E7C4] rounded-full shadow-[0_0_10px_#F4E7C4]"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="flex justify-between items-center text-2xl font-semibold text-white tracking-tight font-space-grotesk">
                  In ấn túi giấy 
                  <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20" class="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-[#F4E7C4]"></iconify-icon>
                </h3>
              </div>
            </div>

            {/* Bottom Right Split */}
            <div className="flex-1 flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="flex-1 overflow-hidden group cursor-pointer bg-center bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f04cf1d-42ba-49a7-9155-2ff8dfee1f58_800w.png)] bg-cover border-zinc-800/50 border rounded-sm relative">
                <div className="bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="uppercase text-lg font-semibold text-white tracking-tight">Folded Hang Tag </h3>
                </div>
              </div>

              <div className="flex-1 bg-[#F4E7C4] p-8 flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors duration-500 rounded-sm relative overflow-hidden" onClick={() => navigate('/product')}>
                {/* Abstract texture graphic */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-[#111] transition-all duration-300">
                  <iconify-icon icon="solar:printer-linear" width="20" height="20" class="text-[#F4E7C4]"></iconify-icon>
                </div>

                <div className="relative z-10 mt-auto">
                  <p className="uppercase leading-tight group-hover:text-[#111] transition-colors text-sm font-semibold text-black tracking-widest mb-4">Muốn xem thêm về những sản phẩm của công ty?</p>
                  <div 
                    className="flex gap-2 text-xs font-medium text-black tracking-wider items-center cursor-pointer"
                    role="button"
                  >
                    Khám phá
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="lg:py-40 w-full max-w-screen-2xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-zinc-800 to-transparent"></div>

        <h4 className="uppercase flex items-center justify-center gap-4 text-xs font-medium text-zinc-500 tracking-[0.3em] text-center mb-24 pt-12">
          <span className="w-12 h-[1px] bg-zinc-800"></span> khách hàng nói gì?<span className="w-12 h-[1px] bg-zinc-800"></span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="group cursor-default relative pl-6 border-l border-zinc-800/50 hover:border-[#F4E7C4]/50 transition-colors duration-500">
            <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 bg-[#F4E7C4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="lg:text-xl leading-relaxed text-lg font-light italic text-zinc-300 mb-8">"Đến hiện tại Minh Hoàng đã đồng hành với tôi khoảng thời gian 4 năm trên con đường xây dựng thương hiệu của tôi. Các bạn rất biết lắng nghe, tiếp thu ý kiến khách hàng. Càng ngày các sản phẩm của các bạn khiến chúng tôi hài lòng"</p>
            <p className="uppercase group-hover:text-[#F4E7C4] transition-colors duration-300 text-xs font-semibold text-zinc-500 tracking-widest">giám đốc / Sài gòn paper</p>
          </div>

          <div className="group cursor-default relative pl-6 border-l border-zinc-800/50 hover:border-[#F4E7C4]/50 transition-colors duration-500">
            <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 bg-[#F4E7C4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="lg:text-xl leading-relaxed text-lg font-light italic text-zinc-300 mb-8">"Tôi thực sự hài lòng với dịch vụ của Minh Hoàng. Đội ngũ tư vấn luôn nhiệt tình, kiên nhẫn hỗ trợ tôi ngay cả khi tôi thay đổi tên thương hiệu nhiều lần. Các ý tưởng mà họ đề xuất đều được xây dựng dựa trên sự nghiên cứu kỹ lưỡng về thị trường và sản phẩm của tôi, nhờ đó tôi gần như không phải chỉnh sửa nhiều mà đã hài lòng ngay từ những thiết kế đầu tiên."</p>
            <p className="uppercase group-hover:text-[#F4E7C4] transition-colors duration-300 text-xs font-semibold text-zinc-500 tracking-widest">Giám đốc / Đại lục</p>
          </div>

          <div className="group cursor-default hover:border-[#F4E7C4]/50 transition-colors duration-500 border-zinc-800/50 border-l pl-6 relative">
            <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 bg-[#F4E7C4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="lg:text-xl leading-relaxed text-lg font-light italic text-zinc-300 mb-8">"Làm việc với Minh Hoàng không chỉ là in ấn, mà là một quá trình đồng hành thực sự—từ tư vấn, triển khai đến hoàn thiện, mọi chi tiết đều được xử lý chỉn chu và vượt mong đợi của chúng tôi."</p>
            <p className="uppercase group-hover:text-[#F4E7C4] transition-colors duration-300 text-xs font-semibold text-zinc-500 tracking-widest">giám đốc / kim đức</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:py-64 overflow-hidden flex flex-col bg-[#050505] mt-auto pt-40 pr-6 pb-40 pl-6 relative items-center justify-center">
        {/* Massive Background Text Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden mix-blend-screen">
          <span className="text-[30vw] font-bold text-zinc-900/30 tracking-tighter uppercase whitespace-nowrap transform -rotate-2 scale-110">
            INKED
          </span>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-semibold tracking-tighter uppercase leading-[0.85] mb-8 group cursor-default">
            <span className="block group-hover:scale-105 transition-transform duration-500 ease-out text-white">đã có ý tưởng</span>
            <span className="block group-hover:scale-105 transition-transform duration-500 ease-out delay-75 text-[#F4E7C4]">Báo giá ngay!</span>
          </h2>

          <p className="lg:text-lg leading-relaxed text-base font-light text-zinc-400 max-w-xl mr-auto mb-16 ml-auto">Chúng tôi sẵn sàng phục vụ bạn cho dù là đơn hàng nhỏ nhất. Liên hệ ngay để được tư vấn thiết kế!</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              className="sm:w-auto uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(244,231,196,0.2)] hover:-translate-y-1 active:translate-y-0 overflow-hidden group cursor-pointer text-sm font-semibold text-black tracking-widest bg-[#F4E7C4] w-full rounded-sm pt-5 pr-10 pb-5 pl-10 relative"
              onClick={() => navigate('/contact')}
            >
              <span className="flex items-center justify-center gap-3 z-10 relative cursor-pointer">tạo một dự án</span>
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-[shine_1s]"></div>
            </button>

            <button 
              className="sm:w-auto uppercase hover:border-[#F4E7C4] hover:bg-[#F4E7C4]/5 transition-all duration-300 group flex gap-3 cursor-pointer text-sm font-semibold text-white tracking-widest w-full border-zinc-700 border rounded-sm pt-5 pr-10 pb-5 pl-10 backdrop-blur-md items-center justify-center"
              onClick={() => navigate('/process')}
            >
              quy trình của chúng tôi
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 bg-[#000000] relative z-10">
        <div className="max-w-sm">
          <div className="text-white font-semibold tracking-tight text-xl mb-4">
            THE MASTER PRESS
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed uppercase tracking-widest">
            Industrial grade solutions for the creative elite. Manufactured in
            Detroit, MI.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-8 lg:gap-6 w-full lg:w-auto">
          <div className="grid grid-cols-2 sm:flex gap-x-12 gap-y-4 text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <a href="#" className="hover:text-[#F4E7C4] transition-colors duration-300 flex items-center gap-2 group">
              Instagram
              <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" class="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></iconify-icon>
            </a>
            <a href="#" className="hover:text-[#F4E7C4] transition-colors duration-300 flex items-center gap-2 group">
              LinkedIn
              <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" class="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></iconify-icon>
            </a>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy
            </Link>
          </div>
          <div className="w-full lg:w-auto h-[1px] bg-zinc-900 my-2 lg:hidden"></div>
          <p className="text-[#F4E7C4] text-[10px] uppercase tracking-[0.2em] opacity-80">
            © 2024 The Master Press. Industrial Precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;