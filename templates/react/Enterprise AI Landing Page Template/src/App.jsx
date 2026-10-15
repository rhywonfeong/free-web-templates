import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Investors from './pages/Investors'
import News from './pages/News'
import NotFound from './pages/NotFound'

function App() {
  const { pathname, hash } = useLocation();

  // Handle scrolling to sections when navigating via hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Slight delay to ensure render is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="investors" element={<Investors />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App