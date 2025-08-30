import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div style={{ padding: '1rem 2rem' }}>
    <h2>Products</h2>
    <ul style={{
      listStyle: 'none', padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '1rem'
    }}>
      {products.map(product => (
        <li key={product.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <img
            src={product.image.thumbnail}
            alt={product.name}
            style={{ width: '100%', borderRadius: '6px' }}
          />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)} style={{
            padding: '8px 12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
