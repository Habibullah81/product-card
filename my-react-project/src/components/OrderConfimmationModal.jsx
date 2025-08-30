import React from 'react';

const OrderConfirmation = ({ onClose, onStartNewOrder }) => (
  <div style={{
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      width: '320px',
      textAlign: 'center',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
    }}>
      <h2 style={{ color: '#4CAF50', marginBottom: '1rem' }}>Order Confirmed</h2>
      <p style={{ marginBottom: '2rem', color: '#555' }}>Thank you for your order!</p>
      <button onClick={onStartNewOrder} style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px'
      }}>Start New Order</button>
      <button onClick={onClose} style={{
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>Close</button>
    </div>
  </div>
);

export default OrderConfirmation;
