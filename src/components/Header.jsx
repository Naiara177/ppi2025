import React from 'react';
import '../styles/header.css';

export default function Header({ cartCount, onCartClick, onShopClick }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <button className="logo" onClick={onShopClick}>TJA Megastore</button>
        <div className="search-box">
          <input type="search" placeholder="Search products..." />
          <button className="btn-clear">CLEAR</button>
        </div>
        <div className="header-links">
          <button>Sign In</button>
          <button>Register</button>
          <button className="theme-toggle">🌙</button>
          <div style={{ position: 'relative' }}>
            <button onClick={onCartClick} style={{ fontSize: '18px' }}>
              🛒
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
