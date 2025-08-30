import React from 'react';

const Cart = ({ cartItems, increment, decrement, onConfirm }) => {
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h2>Cart ({totalItems})</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> :
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{
                marginBottom: '1rem',
                borderBottom: '1px solid #ddd',
                paddingBottom: '1rem'
              }}>
                <strong>{item.name}</strong>
                <div>
                  Quantity:
                  <button onClick={() => decrement(item.id)} style={{ margin: '0 5px' }}>–</button>
                  {item.quantity}
                  <button onClick={() => increment(item.id)} style={{ margin: '0 5px' }}>+</button>
                </div>
                <div>Price: ${item.price.toFixed(2)}</div>
                <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${total.toFixed(2)}</h3>
          <button onClick={onConfirm} style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Confirm Order
          </button>
        </>
      }
    </div>
  );
};

export default Cart;
