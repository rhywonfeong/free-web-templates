import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/sections/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080808]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}