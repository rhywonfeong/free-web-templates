import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-barlow selection:bg-[#E8151B] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#2C2C2C]">
        <a href="/" className="font-barlow-condensed font-black text-3xl tracking-tighter text-white no-underline">
          FORGEE<span className="text-[#E8151B]">.</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          <li><a href="/#about" className="text-[#AAAAAA] hover:text-white text-[13px] tracking-[0.12em] uppercase font-medium transition-colors">A Forja</a></li>
          <li><a href="/#protocol" className="text-[#AAAAAA] hover:text-white text-[13px] tracking-[0.12em] uppercase font-medium transition-colors">Protocolo</a></li>
          <li><a href="/#plans" className="text-[#AAAAAA] hover:text-white text-[13px] tracking-[0.12em] uppercase font-medium transition-colors">Planos</a></li>
        </ul>
        <button className="bg-[#E8151B] text-white border-none px-7 py-3 font-barlow-condensed font-bold text-[15px] tracking-[0.08em] uppercase cursor-pointer hover:opacity-85 transition-opacity">
          Matricule-se
        </button>
      </nav>
      
      <main className="w-full h-full mx-auto pt-[70px]">
        <Outlet />
      </main>
    </div>
  )
}