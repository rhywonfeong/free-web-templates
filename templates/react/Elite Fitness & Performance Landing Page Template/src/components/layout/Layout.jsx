import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808] text-white">
      <Header />
      <main className="flex-grow flex flex-col relative w-full pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;