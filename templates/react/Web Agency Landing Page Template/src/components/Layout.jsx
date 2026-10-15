import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundMesh from './BackgroundMesh';

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundMesh />
      <Navbar />
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}