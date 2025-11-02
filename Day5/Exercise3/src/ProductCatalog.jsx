import React, { useState } from 'react';

const ProductCatalog = () => {
  const products = [
    { name: 'Laptop', price: 450000, inStock: true, category: 'Electronics' },
    { name: 'Phone', price: 150000, inStock: false, category: 'Electronics' },
    { name: 'Jollof Rice', price: 1500, inStock: true, category: 'Food' },
    { name: 'T-Shirt', price: 3500, inStock: true, category: 'Clothing' },
    { name: 'Headphones', price: 25000, inStock: false, category: 'Electronics' },
    { name: 'Bread', price: 800, inStock: true, category: 'Food' },
    { name: 'Jeans', price: 8500, inStock: false, category: 'Clothing' },
  ];

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('None');

  const filteredProducts = products
    .filter(product => categoryFilter === 'All' || product.category === categoryFilter)
    .sort((a, b) => {
      if (sortOrder === 'LowToHigh') return a.price - b.price;
      if (sortOrder === 'HighToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h2>🛍️ Product Catalog</h2>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Filter:</strong>{' '}
        {['All', 'Electronics', 'Clothing', 'Food'].map(cat => (
          <button key={cat} onClick={() => setCategoryFilter(cat)} style={{ marginRight: '0.5rem' }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Sort by Price:</strong>{' '}
        <button onClick={() => setSortOrder('LowToHigh')}>Low to High</button>{' '}
        <button onClick={() => setSortOrder('HighToLow')}>High to Low</button>{' '}
        <button onClick={() => setSortOrder('None')}>Reset</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((product, index) => (
          <li
            key={index}
            style={{
              marginBottom: '1rem',
              color: product.inStock ? 'black' : 'gray',
              textDecoration: product.inStock ? 'none' : 'line-through',
            }}
          >
            {product.name} - ₦{product.price.toLocaleString()}
            <br />
            {product.inStock ? (
              <button style={{ marginTop: '0.5rem' }}>Add to Cart</button>
            ) : (
              <span style={{ color: 'red', fontWeight: 'bold' }}>OUT OF STOCK</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;