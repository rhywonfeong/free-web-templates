import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;