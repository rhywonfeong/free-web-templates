import React from 'react';

const links = {
  'Sản phẩm': [
    { label: 'Tính năng', href: '#features' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'Cách hoạt động', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ],
  'Hỗ trợ': [
    { label: 'Tài liệu hướng dẫn', href: '#' },
    { label: 'API Documentation', href: '#' },
    { label: 'Liên hệ', href: '#' },
    { label: 'Trạng thái hệ thống', href: '#' },
  ],
  'Pháp lý': [
    { label: 'Điều khoản sử dụng', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <iconify-icon icon="solar:bot-linear" width="18" style={{ color: '#fff' }}></iconify-icon>
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                BotShop<span className="text-indigo-400">EZ</span>
              </span>
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              Nền tảng SaaS cho phép shop online tại Việt Nam tạo và vận hành Telegram bot bán hàng tự động.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'simple-icons:telegram', href: '#' },
                { icon: 'simple-icons:facebook', href: '#' },
                { icon: 'simple-icons:github', href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="Social link"
                >
                  <iconify-icon icon={social.icon} width="14"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © 2026 BotShopEZ. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Made with <span className="text-red-500">♥</span> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}