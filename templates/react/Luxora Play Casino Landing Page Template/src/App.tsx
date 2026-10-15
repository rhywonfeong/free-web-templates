import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Promotions from "./pages/Promotions";
import Loyalty from "./pages/Loyalty";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <div className="aura-source-body text-white antialiased" style={{ background: "#0d0614", minHeight: "100vh" }}>
        {/* Background atmospheric lights */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 15% 0%, #3a1d6e 0%, #241145 42%, #0d0614 100%)" }}></div>
          <div className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,95,214,0.35), transparent 65%)", filter: "blur(40px)" }}></div>
          <div className="absolute top-1/3 -right-40 w-[48rem] h-[48rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,209,46,0.1), transparent 60%)", filter: "blur(50px)" }}></div>
        </div>

        <div className="flex min-h-screen">
          <Sidebar />
          
          <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8 flex flex-col gap-8 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/loyalty" element={<Loyalty />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform z-50 shadow-[0_10px_30px_rgba(255,209,46,0.3)]" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405" }}>
          <iconify-icon icon="solar:chat-round-dots-bold" width="26"></iconify-icon>
        </button>
      </div>
    </BrowserRouter>
  );
}
