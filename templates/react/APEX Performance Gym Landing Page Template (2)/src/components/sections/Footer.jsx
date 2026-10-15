export default function Footer() {
  return (
    <footer className="bg-[#080808] pt-16 pb-8 border-t border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-fire flex items-center justify-center text-white font-display font-black text-2xl leading-none">
              A
            </div>
            <span className="font-display font-bold text-3xl tracking-wide uppercase text-white">APEX.</span>
          </div>

          <div className="flex gap-6">
            <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#B0B0B0] hover:text-[#FF4500] hover:border-[#FF4500] transition-all">
              <iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon>
            </a>
            <a href="https://wa.me/5541999999999" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#B0B0B0] hover:text-[#AAFF00] hover:border-[#AAFF00] transition-all">
              <iconify-icon icon="simple-icons:whatsapp" class="text-xl"></iconify-icon>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1A1A1A] text-sm text-[#666666]">
          <p>© 2025 APEX Performance. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <iconify-icon icon="solar:map-point-linear"></iconify-icon>
            Curitiba, PR · Batel
          </p>
        </div>

      </div>
    </footer>
  );
}