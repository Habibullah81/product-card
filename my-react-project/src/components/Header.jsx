import React from 'react';

const Header = ({ cartCount }) => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }}>
    <h1>My Dessert Shop</h1>
    <div>🛒 Cart: {cartCount}</div>
  </header>
);

export default Header;
