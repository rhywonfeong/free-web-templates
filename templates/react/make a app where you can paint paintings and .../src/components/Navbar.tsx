import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { Image, Palette, Gavel } from 'lucide-react';

const Navbar: React.FC = () => {
  const { balance } = useGame();

  return (
    <nav className="navbar">
      <div className="nav-brand">Art Tycoon</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <Image size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Gallery
        </NavLink>
        <NavLink to="/paint" className={({ isActive }) => (isActive ? 'active' : '')}>
          <Palette size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Studio
        </NavLink>
        <NavLink to="/auction" className={({ isActive }) => (isActive ? 'active' : '')}>
          <Gavel size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Auction
        </NavLink>
      </div>
      <div className="nav-balance">
        Balance: <span className="money">${balance.toLocaleString()}</span>
      </div>
    </nav>
  );
};

export default Navbar;