import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route to home for demo purposes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;