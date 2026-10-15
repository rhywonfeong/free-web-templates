import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hizmetler" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-semibold tracking-tight mb-4">404 - Sayfa Bulunamadı</h1>
            <p className="text-gray-500">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;