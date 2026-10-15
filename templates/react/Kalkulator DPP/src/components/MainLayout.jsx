import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import InteractionGuard from "./InteractionGuard";

export default function MainLayout() {
  return (
    <div className="page-shell no-copy text-slate-100">
      <InteractionGuard />
      <div className="fixed inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}