import React, { useEffect, useState } from 'react';
import Header from './components/Header';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfimmationModal';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const withId = data.map((item, idx) => ({ ...item, id: idx + 1 }));
        setProducts(withId);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increment = (id) => {
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  };

  const decrement = (id) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0)
    );
  };

  const confirmOrder = () => setShowModal(true);
  const startNewOrder = () => {
    setCartItems([]);
    setShowModal(false);
  };

  return (
    <>
      <Header cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} increment={increment} decrement={decrement} onConfirm={confirmOrder} />
      {showModal && <OrderConfirmation onClose={() => setShowModal(false)} onStartNewOrder={startNewOrder} />}
    </>
  );
}

export default App;
