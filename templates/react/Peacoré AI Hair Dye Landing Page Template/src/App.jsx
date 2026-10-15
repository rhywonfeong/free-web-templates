import { useEffect, useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal-up');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-12', 'will-change-transform');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-rosegold/20 selection:text-white relative bg-black text-white">
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out">
        <div
          id="nav-container"
          className={`transition-all duration-500 flex items-center justify-between border-b w-full max-w-[1920px] mx-auto px-6 md:px-12 ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-xl border-charcoal py-4'
              : 'bg-transparent border-transparent py-6'
          }`}
        >
          {/* Logo */}
          <a href="#" className="font-semibold tracking-tight text-2xl text-rosegold transition-all duration-500">
            Peacoré
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#products" className="nav-link text-sm font-medium text-white transition-all">Sản phẩm</a>
            <a href="#ai-experience" className="nav-link text-sm font-medium text-white transition-all">Trải nghiệm AI</a>
            <a href="#testimonials" className="nav-link text-sm font-medium text-white transition-all">Đánh giá</a>
            <a href="#faq" className="nav-link text-sm font-medium text-white transition-all">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#ai-experience" className="border border-dustypink hover:bg-dustypink/10 text-white rounded-full px-6 py-2.5 transition-all duration-300 text-sm font-medium inline-flex items-center gap-2">
              Thử màu tóc ngay
            </a>
          </div>

          <button className="md:hidden text-white">
            <iconify-icon icon="solar:hamburger-menu-linear" width="28" stroke-width="1.5"></iconify-icon>
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="relative min-h-screen w-full flex items-center pt-24 pb-16 overflow-hidden bg-black z-10">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          
          {/* Text Column */}
          <div className="flex flex-col items-start text-left max-w-xl mx-auto lg:mx-0 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-xs font-medium text-dustypink tracking-widest uppercase mb-4">
              Tên thương hiệu: Peacoré
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-rosegold leading-[1.1] mb-6">
              Màu tóc chuẩn Salon, Công thức dành riêng cho chính bạn.
            </h1>
            
            <p className="text-base md:text-lg text-white font-normal leading-relaxed mb-10 opacity-90">
              Công nghệ AI phân tích sắc tố da và chất tóc để tạo ra công thức nhuộm cá nhân hóa. Đẹp rạng rỡ ngay tại nhà với chi phí chỉ bằng 1/5 tại tiệm.
            </p>
            
            <a href="#ai-experience" className="bg-hotpink hover:bg-hotpink/90 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,137,193,0.3)] hover:shadow-[0_0_40px_rgba(255,137,193,0.5)] hover:-translate-y-1 inline-flex items-center gap-2">
              Bắt đầu phân tích AI (Miễn phí)
              <iconify-icon icon="solar:arrow-right-linear" width="20" stroke-width="1.5"></iconify-icon>
            </a>
          </div>

          {/* Visual Elements (Split Image Concept) */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square animate-reveal-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              {/* Left: AI Smartphone */}
              <div className="relative rounded-3xl overflow-hidden border border-charcoal bg-charcoal/50">
                <img src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1000&auto=format&fit=crop" alt="AI Face Analysis" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                {/* AR Overlay Graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square border border-rosegold/50 rounded-full animate-float"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 aspect-square border border-dashed border-rosegold/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-2 w-full bg-charcoal rounded-full overflow-hidden">
                    <div className="h-full bg-rosegold w-[75%] rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-rosegold mt-2 uppercase tracking-widest text-center">Phân tích sắc tố...</p>
                </div>
              </div>
              
              {/* Right: Model Result */}
              <div className="relative rounded-3xl overflow-hidden border border-dustypink/30">
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop" alt="Glossy Hair Result" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-dustypink/20 to-transparent mix-blend-overlay"></div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-rosegold/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hotpink"></span>
                  <span className="text-[10px] text-white font-medium uppercase tracking-wider">Hoàn hảo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-charcoal border border-rosegold rounded-2xl p-8 floating-card reveal-on-scroll">
              <iconify-icon icon="solar:target-linear" className="text-rosegold text-4xl mb-6 block" stroke-width="1.5"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight text-dustypink mb-4">
                Độ chính xác tuyệt đối <span className="text-rosegold inline-block translate-y-1 ml-1"><iconify-icon icon="solar:sparkles-linear"></iconify-icon></span>
              </h3>
              <p className="text-sm font-normal text-white leading-relaxed opacity-90">
                AI phân tích nền tóc cũ để đưa ra công thức pha màu bù trừ, đảm bảo lên màu chuẩn 99%.
              </p>
            </div>

            <div className="bg-charcoal border border-rosegold rounded-2xl p-8 floating-card reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
              <iconify-icon icon="solar:clock-circle-linear" className="text-rosegold text-4xl mb-6 block" stroke-width="1.5"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight text-dustypink mb-4">
                Tiết kiệm & Tiện lợi <span className="text-rosegold inline-block translate-y-1 ml-1"><iconify-icon icon="solar:sparkles-linear"></iconify-icon></span>
              </h3>
              <p className="text-sm font-normal text-white leading-relaxed opacity-90">
                Không cần đặt lịch, không cần chờ đợi. Tự nhuộm dễ dàng chỉ trong 45 phút.
              </p>
            </div>

            <div className="bg-charcoal border border-rosegold rounded-2xl p-8 floating-card reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <iconify-icon icon="solar:heart-pulse-linear" className="text-rosegold text-4xl mb-6 block" stroke-width="1.5"></iconify-icon>
              <h3 className="text-xl font-semibold tracking-tight text-dustypink mb-4">
                Chăm sóc kép <span className="text-rosegold inline-block translate-y-1 ml-1"><iconify-icon icon="solar:sparkles-linear"></iconify-icon></span>
              </h3>
              <p className="text-sm font-normal text-white leading-relaxed opacity-90">
                Thuốc nhuộm tích hợp dưỡng chất, càng nhuộm tóc càng bóng khỏe nhờ quy trình dưỡng sau nhuộm được AI đề xuất.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="ai-experience" className="py-24 bg-black border-t border-charcoal relative">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">How it Works</h2>
          </div>
          
          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-charcoal before:via-dustypink/40 before:to-charcoal">
            
            {/* Step 1 */}
            <div className="relative flex items-start md:justify-center gap-6 md:gap-12 reveal-on-scroll">
              <div className="md:w-1/2 hidden md:block text-right pt-2">
                <span className="text-rosegold font-semibold text-lg tracking-tight">Bước 1 - Scan</span>
              </div>
              <div className="relative z-10 w-12 h-12 shrink-0 bg-black border border-rosegold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,177,196,0.2)]">
                <iconify-icon icon="solar:camera-linear" className="text-rosegold text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="md:w-1/2 pt-2 pb-8">
                <span className="md:hidden text-rosegold font-semibold text-lg tracking-tight block mb-2">Bước 1 - Scan</span>
                <p className="text-white text-sm font-normal opacity-90 leading-relaxed max-w-sm">Chụp ảnh hoặc upload hình ảnh dưới ánh sáng tự nhiên.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start md:justify-center gap-6 md:gap-12 reveal-on-scroll">
              <div className="md:w-1/2 hidden md:block text-right pt-2">
                <span className="text-rosegold font-semibold text-lg tracking-tight">Bước 2 - Analyze</span>
              </div>
              <div className="relative z-10 w-12 h-12 shrink-0 bg-black border border-rosegold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,177,196,0.2)]">
                <iconify-icon icon="solar:magic-stick-3-linear" className="text-rosegold text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="md:w-1/2 pt-2 pb-8">
                <span className="md:hidden text-rosegold font-semibold text-lg tracking-tight block mb-2">Bước 2 - Analyze</span>
                <p className="text-white text-sm font-normal opacity-90 leading-relaxed max-w-sm">AI phân tích tông da (Warm/Cool/Neutral) và tình trạng hư tổn của tóc.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start md:justify-center gap-6 md:gap-12 reveal-on-scroll">
              <div className="md:w-1/2 hidden md:block text-right pt-2">
                <span className="text-rosegold font-semibold text-lg tracking-tight">Bước 3 - Virtual Try-on</span>
              </div>
              <div className="relative z-10 w-12 h-12 shrink-0 bg-black border border-rosegold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,177,196,0.2)]">
                <iconify-icon icon="solar:user-id-linear" className="text-rosegold text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="md:w-1/2 pt-2 pb-8">
                <span className="md:hidden text-rosegold font-semibold text-lg tracking-tight block mb-2">Bước 3 - Virtual Try-on</span>
                <p className="text-white text-sm font-normal opacity-90 leading-relaxed max-w-sm">Thử hơn 50+ màu tóc xu hướng trên chính gương mặt bạn.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-start md:justify-center gap-6 md:gap-12 reveal-on-scroll">
              <div className="md:w-1/2 hidden md:block text-right pt-2">
                <span className="text-rosegold font-semibold text-lg tracking-tight">Bước 4 - Custom Kit</span>
              </div>
              <div className="relative z-10 w-12 h-12 shrink-0 bg-black border border-rosegold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,177,196,0.2)]">
                <iconify-icon icon="solar:box-linear" className="text-rosegold text-xl" stroke-width="1.5"></iconify-icon>
              </div>
              <div className="md:w-1/2 pt-2">
                <span className="md:hidden text-rosegold font-semibold text-lg tracking-tight block mb-2">Bước 4 - Custom Kit</span>
                <p className="text-white text-sm font-normal opacity-90 leading-relaxed max-w-sm">Nhận bộ dụng cụ và thuốc nhuộm theo công thức riêng được ship tận cửa. <span className="text-dustypink font-medium">#PeacoréBox</span></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRODUCT SHOWCASE SECTION */}
      <section id="products" className="py-32 bg-black border-t border-charcoal relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-rosegold mb-4">
                Cửa hàng Sản phẩm & Công thức AI của bạn
              </h2>
              <p className="text-sm font-normal text-white opacity-90">
                Từ bộ kit nhuộm cá nhân hóa đến những màu sắc 'hot' nhất và sản phẩm dưỡng tóc chuyên sâu.
              </p>
            </div>
            <a href="#" className="shrink-0 border border-rosegold text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-rosegold hover:text-black transition-colors inline-flex items-center gap-2">
              Xem thêm <iconify-icon icon="solar:arrow-right-linear" width="14" stroke-width="1.5"></iconify-icon>
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-charcoal border border-rosegold rounded-2xl overflow-hidden flex flex-col floating-card reveal-on-scroll">
              <div className="aspect-square bg-black relative p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/50"></div>
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" alt="Product Kit" className="w-2/3 object-contain relative z-10 filter grayscale mix-blend-screen opacity-80 border-b border-rosegold/30 pb-4" />
                <span className="absolute top-4 left-4 bg-dustypink/20 text-dustypink border border-dustypink text-[10px] uppercase tracking-wider px-2 py-1 rounded">AI Customized</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-3">Bộ Kit Nhuộm Tóc Thông Minh Peacoré</h3>
                <p className="text-sm text-white/80 font-normal leading-relaxed mb-6 flex-grow">
                  Bộ sản phẩm pha sẵn theo công thức AI duy nhất cho bạn. Bao gồm thuốc nhuộm, trợ nhuộm, dụng cụ & găng tay.
                </p>
                <button className="w-full bg-hotpink text-white font-semibold text-sm py-3 rounded-xl hover:bg-hotpink/80 transition-colors">
                  Tạo công thức của tôi
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-charcoal border border-rosegold rounded-2xl overflow-hidden flex flex-col floating-card reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-square bg-black relative p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/50"></div>
                 <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop" alt="Color Box" className="w-2/3 object-contain relative z-10 filter sepia-[.3] hue-rotate-[-30deg] saturate-50 opacity-90 border-b border-rosegold/30 pb-4" />
                <span className="absolute top-4 left-4 bg-hotpink/20 text-hotpink border border-hotpink text-[10px] uppercase tracking-wider px-2 py-1 rounded">Hot Collection</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-3">Màu Nâu Trà Sữa Ánh Khói</h3>
                <p className="text-sm text-white/80 font-normal leading-relaxed mb-6 flex-grow">
                  Sắc màu 'best-seller' tôn da, không lỗi mốt. Phù hợp cho cả sinh viên & nhân viên văn phòng.
                </p>
                <button className="w-full bg-hotpink text-white font-semibold text-sm py-3 rounded-xl hover:bg-hotpink/80 transition-colors">
                  Thử màu này ngay
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-charcoal border border-rosegold rounded-2xl overflow-hidden flex flex-col floating-card reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-black relative p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/50"></div>
                 <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" alt="Shampoo Combo" className="w-2/3 object-contain relative z-10 filter grayscale mix-blend-screen opacity-70 border-b border-rosegold/30 pb-4" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-3">Combo Phục Hồi Tóc Nhuộm Peacoré</h3>
                <p className="text-sm text-white/80 font-normal leading-relaxed mb-6 flex-grow">
                  Quy trình dưỡng chuyên sâu được AI đề xuất cho chất tóc của bạn. Giữ màu lâu phai, cấp ẩm tối ưu.
                </p>
                <button className="w-full bg-hotpink text-white font-semibold text-sm py-3 rounded-xl hover:bg-hotpink/80 transition-colors">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRENDING PALETTE SECTION */}
      <section className="py-24 bg-black border-t border-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-hotpink mb-4">
              Khám phá bảng màu đa sắc từ Peacoré
            </h2>
            <p className="text-sm font-normal text-white opacity-90 max-w-2xl mx-auto">
              Từ những tông màu công sở thanh lịch đến những sắc khói thời thượng.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 reveal-on-scroll">
            <button className="px-6 py-2 bg-hotpink text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,137,193,0.3)]">Tông Nâu</button>
            <button className="px-6 py-2 bg-transparent border border-rosegold text-white rounded-full text-xs font-medium uppercase tracking-wider hover:border-hotpink hover:text-hotpink transition-all">Tông Khói</button>
            <button className="px-6 py-2 bg-transparent border border-rosegold text-white rounded-full text-xs font-medium uppercase tracking-wider hover:border-hotpink hover:text-hotpink transition-all">Tông Nổi Bật</button>
            <button className="px-6 py-2 bg-transparent border border-rosegold text-white rounded-full text-xs font-medium uppercase tracking-wider hover:border-hotpink hover:text-hotpink transition-all">Tông Tự Nhiên</button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 reveal-on-scroll">
            {/* Swatch 1 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-full mb-4 bg-gradient-to-br from-[#8B5A2B] to-[#4A2F1D] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-charcoal group-hover:border-rosegold transition-colors relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity backdrop-blur-sm">
                  <span className="text-hotpink text-xs font-medium px-3 py-1 bg-black/80 rounded-full border border-hotpink">Thử màu này</span>
                </div>
              </div>
              <span className="text-hotpink font-medium text-sm">Nâu Tây</span>
            </div>

            {/* Swatch 2 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-full mb-4 bg-gradient-to-br from-[#808080] to-[#363636] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-charcoal group-hover:border-rosegold transition-colors relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity backdrop-blur-sm">
                  <span className="text-hotpink text-xs font-medium px-3 py-1 bg-black/80 rounded-full border border-hotpink">Thử màu này</span>
                </div>
              </div>
              <span className="text-hotpink font-medium text-sm">Xám Khói</span>
            </div>

            {/* Swatch 3 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-full mb-4 bg-gradient-to-br from-[#CFA1A8] to-[#8A5A66] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-charcoal group-hover:border-rosegold transition-colors relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity backdrop-blur-sm">
                  <span className="text-hotpink text-xs font-medium px-3 py-1 bg-black/80 rounded-full border border-hotpink">Thử màu này</span>
                </div>
              </div>
              <span className="text-hotpink font-medium text-sm">Hồng Khói</span>
            </div>

            {/* Swatch 4 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-full mb-4 bg-gradient-to-br from-[#2F3640] to-[#111418] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-charcoal group-hover:border-rosegold transition-colors relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity backdrop-blur-sm">
                  <span className="text-hotpink text-xs font-medium px-3 py-1 bg-black/80 rounded-full border border-hotpink">Thử màu này</span>
                </div>
              </div>
              <span className="text-hotpink font-medium text-sm">Than Chì</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-32 bg-black border-t border-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Quote Block */}
            <div className="relative reveal-on-scroll">
              <span className="text-8xl text-hotpink font-serif absolute -top-10 -left-6 opacity-30 leading-none">"</span>
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 relative z-10">
                Nhờ Peacoré mà mình có màu nâu trà sữa cực xinh, tóc vẫn mềm mượt!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-dustypink"></div>
                <span className="text-dustypink text-sm font-medium tracking-wide">- Hà My, 24 tuổi.</span>
              </div>
              
              <div className="mt-12 flex gap-6 items-center opacity-60">
                <iconify-icon icon="solar:star-fall-minimalistic-2-linear" className="text-white text-2xl" stroke-width="1.5"></iconify-icon>
                <iconify-icon icon="solar:shield-check-linear" className="text-dustypink text-2xl" stroke-width="1.5"></iconify-icon>
                <span className="text-xs text-white uppercase tracking-widest font-medium border border-white/20 px-2 py-1 rounded">Verified Buyer</span>
              </div>
            </div>

            {/* Visual */}
            <div className="flex gap-4 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="w-1/2 flex flex-col">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-rosegold mb-3">
                  <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover filter grayscale contrast-125" />
                </div>
                <span className="text-center text-xs text-white uppercase tracking-widest">Trước</span>
              </div>
              <div className="w-1/2 flex flex-col pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-rosegold mb-3 relative">
                  <div className="absolute inset-0 border-[4px] border-black z-10 rounded-2xl pointer-events-none"></div>
                  <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop" alt="After" className="w-full h-full object-cover filter sepia-[.2] hue-rotate-[-10deg]" />
                </div>
                <span className="text-center text-xs text-hotpink font-medium uppercase tracking-widest">Sau</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section id="faq" className="py-24 bg-black border-t border-charcoal">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-rosegold text-center mb-16 reveal-on-scroll">
            Câu hỏi thường gặp
          </h2>
          
          <div className="space-y-4 reveal-on-scroll">
            {/* Q1 */}
            <details className="group bg-charcoal border border-rosegold rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-rosegold hover:bg-black/20 transition-colors">
                <span className="text-sm md:text-base pr-4">Tự nhuộm ở nhà có bị loang lổ không?</span>
                <span className="shrink-0 transition-transform duration-300">
                  <iconify-icon icon="solar:add-circle-linear" className="icon-plus text-xl" stroke-width="1.5"></iconify-icon>
                  <iconify-icon icon="solar:minus-circle-linear" className="icon-minus text-xl" stroke-width="1.5"></iconify-icon>
                </span>
              </summary>
              <div className="text-white text-sm font-normal px-6 pb-6 pt-2 border-t border-charcoal opacity-90 leading-relaxed">
                Không, vì Peacoré cung cấp lược chuyên dụng và video hướng dẫn chi tiết.
              </div>
            </details>

            {/* Q2 */}
            <details className="group bg-charcoal border border-rosegold rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-rosegold hover:bg-black/20 transition-colors">
                <span className="text-sm md:text-base pr-4">Công thức AI có thực sự khác biệt?</span>
                <span className="shrink-0 transition-transform duration-300">
                  <iconify-icon icon="solar:add-circle-linear" className="icon-plus text-xl" stroke-width="1.5"></iconify-icon>
                  <iconify-icon icon="solar:minus-circle-linear" className="icon-minus text-xl" stroke-width="1.5"></iconify-icon>
                </span>
              </summary>
              <div className="text-white text-sm font-normal px-6 pb-6 pt-2 border-t border-charcoal opacity-90 leading-relaxed">
                Có, AI tính toán tỷ lệ trợ nhuộm dựa trên độ dày và độ xơ của tóc bạn.
              </div>
            </details>

            {/* Q3 */}
            <details className="group bg-charcoal border border-rosegold rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-rosegold hover:bg-black/20 transition-colors">
                <span className="text-sm md:text-base pr-4">Thuốc nhuộm có mùi hắc hay gây kích ứng không?</span>
                <span className="shrink-0 transition-transform duration-300">
                  <iconify-icon icon="solar:add-circle-linear" className="icon-plus text-xl" stroke-width="1.5"></iconify-icon>
                  <iconify-icon icon="solar:minus-circle-linear" className="icon-minus text-xl" stroke-width="1.5"></iconify-icon>
                </span>
              </summary>
              <div className="text-white text-sm font-normal px-6 pb-6 pt-2 border-t border-charcoal opacity-90 leading-relaxed">
                Không, công thức không chứa Ammonia, hương thơm dịu nhẹ và lành tính cho da đầu.
              </div>
            </details>

            {/* Q4 */}
            <details className="group bg-charcoal border border-rosegold rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-rosegold hover:bg-black/20 transition-colors">
                <span className="text-sm md:text-base pr-4">Tóc từng tẩy hoặc nhuộm đen thì AI có nhận diện được không?</span>
                <span className="shrink-0 transition-transform duration-300">
                  <iconify-icon icon="solar:add-circle-linear" className="icon-plus text-xl" stroke-width="1.5"></iconify-icon>
                  <iconify-icon icon="solar:minus-circle-linear" className="icon-minus text-xl" stroke-width="1.5"></iconify-icon>
                </span>
              </summary>
              <div className="text-white text-sm font-normal px-6 pb-6 pt-2 border-t border-charcoal opacity-90 leading-relaxed">
                Có, AI sẽ phân tích nền tóc thực tế để gợi ý công thức bóc màu hoặc nâng tông phù hợp.
              </div>
            </details>

            {/* Q5 */}
            <details className="group bg-charcoal border border-rosegold rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-rosegold hover:bg-black/20 transition-colors">
                <span className="text-sm md:text-base pr-4">Thời gian giữ màu là bao lâu?</span>
                <span className="shrink-0 transition-transform duration-300">
                  <iconify-icon icon="solar:add-circle-linear" className="icon-plus text-xl" stroke-width="1.5"></iconify-icon>
                  <iconify-icon icon="solar:minus-circle-linear" className="icon-minus text-xl" stroke-width="1.5"></iconify-icon>
                </span>
              </summary>
              <div className="text-white text-sm font-normal px-6 pb-6 pt-2 border-t border-charcoal opacity-90 leading-relaxed">
                Màu bền từ 4-8 tuần nếu kết hợp cùng bộ sản phẩm chăm sóc được AI đề xuất.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA SECTION */}
      <section className="border-y border-rosegold bg-black py-24 relative reveal-on-scroll">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-hotpink mb-6">
            Đừng để màu tóc cũ làm bạn mờ nhạt.
          </h2>
          <p className="text-lg text-white font-normal mb-10 max-w-xl mx-auto opacity-90">
            Khám phá công thức màu nhuộm độc bản của bạn chỉ trong 30 giây.
          </p>
          <button className="bg-hotpink hover:bg-hotpink/90 text-white font-semibold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,137,193,0.4)] hover:shadow-[0_0_50px_rgba(255,137,193,0.6)] hover:-translate-y-1">
            Phân tích tóc ngay
          </button>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-charcoal relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Col 1 */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-semibold tracking-tight text-2xl text-rosegold block mb-2">Peacoré</span>
              <p className="text-hotpink text-sm font-medium">
                Peacoré - Định nghĩa lại cách bạn nhuộm tóc tại nhà.
              </p>
              <p className="text-white/60 text-xs mt-6">
                Email: hello@peacore.vn<br />
                Hotline: 1800 xxxx
              </p>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-4">
              <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Hỗ trợ khách hàng</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white text-sm font-normal hover:text-rosegold transition-colors">Chính sách bảo hành</a></li>
                <li><a href="#" className="text-white text-sm font-normal hover:text-rosegold transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="text-white text-sm font-normal hover:text-rosegold transition-colors">Về chúng tôi</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Kết nối</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 border border-charcoal rounded-full flex items-center justify-center text-hotpink hover:bg-hotpink hover:text-white transition-all duration-300">
                  <iconify-icon icon="solar:video-frame-linear" width="20" stroke-width="1.5"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 border border-charcoal rounded-full flex items-center justify-center text-hotpink hover:bg-hotpink hover:text-white transition-all duration-300">
                  <iconify-icon icon="solar:camera-minimalistic-linear" width="20" stroke-width="1.5"></iconify-icon>
                </a>
                <a href="#" className="w-10 h-10 border border-charcoal rounded-full flex items-center justify-center text-hotpink hover:bg-hotpink hover:text-white transition-all duration-300">
                  <iconify-icon icon="solar:global-linear" width="20" stroke-width="1.5"></iconify-icon>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs font-normal">© 2026 Peacoré. Bảo lưu mọi quyền.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 text-xs hover:text-white transition-colors">Điều khoản</a>
              <a href="#" className="text-white/60 text-xs hover:text-white transition-colors">Bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;