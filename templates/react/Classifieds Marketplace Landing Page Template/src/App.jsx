import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/categories" element={<Search />} />
            <Route path="/stores" element={<Search />} />
            <Route path="/contact" element={<Search />} />
            <Route path="/login" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;