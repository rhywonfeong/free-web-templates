import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import clsx from 'clsx';

const faqs = [
  {
    q: 'BotShopEZ có can thiệp vào dòng tiền của tôi không?',
    a: 'Không. Khách hàng thanh toán trực tiếp vào tài khoản ngân hàng của bạn hoặc CTV. BotShopEZ chỉ nhận webhook xác nhận từ SePay để trigger giao hàng tự động. Chúng tôi không nắm giữ hay route bất kỳ khoản tiền nào.',
  },
  {
    q: 'Tôi cần biết lập trình để sử dụng không?',
    a: 'Hoàn toàn không. Bạn chỉ cần: (1) Tạo bot trên @BotFather để lấy token, (2) Nhập thông tin bank, (3) Copy webhook URL vào SePay. Tất cả chỉ mất 5 phút và không cần viết code.',
  },
  {
    q: 'Mô hình CTV hoạt động như thế nào?',
    a: 'Admin tạo shop và kho hàng, sau đó mời CTV. Mỗi CTV có bot Telegram riêng, bank riêng, tự set giá bán. Kho hàng dùng chung và đồng bộ stock real-time. Admin chọn Pre-pay (CTV nhập hàng trước) hoặc Post-pay (ký gửi, theo dõi công nợ).',
  },
  {
    q: 'BotShopEZ hỗ trợ những loại sản phẩm nào?',
    a: 'Ba loại: (1) Credential — tài khoản số tự động giao (Cursor, Netflix...), (2) Invite — mời qua email, (3) Preorder — đặt hàng trước. Credential được giao tự động trong 30 giây sau khi xác nhận thanh toán.',
  },
  {
    q: 'Khi nào tôi cần nâng cấp lên Pro hoặc Platinum?',
    a: 'Free phù hợp khi bạn bán một mình (1 bot, 50 đơn/tháng). Nâng lên Pro khi muốn tuyển CTV (2 CTV). Platinum cho team lớn (10 CTV) với analytics nâng cao, export reports, API access.',
  },
  {
    q: 'Nếu stock hết giữa chừng thì sao?',
    a: 'Bot sẽ tự động thông báo hết hàng và không tạo order mới. Admin nhận low stock alert khi stock dưới ngưỡng (configurable). Bạn chỉ cần import thêm credentials qua Excel để tiếp tục bán.',
  },
];

function FAQItem({ faq, isOpen, toggle, index, isInView }) {
  return (
    <div
      className={clsx(
        'border border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-500',
        isOpen ? 'bg-zinc-900/80 border-zinc-700/50' : 'bg-zinc-900/30 hover:bg-zinc-900/50',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80 + 200}ms` }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className={clsx('text-sm font-medium transition-colors', isOpen ? 'text-white' : 'text-zinc-300')}>
          {faq.q}
        </span>
        <iconify-icon
          icon="solar:alt-arrow-down-linear"
          width="16"
          style={{
            color: isOpen ? '#818cf8' : '#71717a',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s, color 0.3s',
          }}
        ></iconify-icon>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-5 pb-4">
          <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <iconify-icon icon="solar:question-circle-linear" width="14" style={{ color: '#fbbf24' }}></iconify-icon>
            <span className="text-xs font-medium text-amber-400">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}