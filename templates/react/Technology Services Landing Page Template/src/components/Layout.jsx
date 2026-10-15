import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col flex-grow">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}