import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paint from './pages/Paint';
import Auction from './pages/Auction';

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/paint" element={<Paint />} />
              <Route path="/auction" element={<Auction />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;