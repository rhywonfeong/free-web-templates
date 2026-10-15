import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<PlaceholderPage title="Store" />} />
          <Route path="/products" element={<PlaceholderPage title="Products" />} />
          <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/about" element={<PlaceholderPage title="About" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;