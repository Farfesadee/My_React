import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Jollof Rice', price: 1500, quantity: 2 },
    { id: 2, name: 'Plantain', price: 500, quantity: 1 },
    { id: 3, name: 'Suya', price: 1000, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <p>
              {item.name} - ₦{item.price} x {item.quantity} = ₦
              {item.price * item.quantity}
            </p>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₦{totalPrice}</h3>
      <button onClick={clearCart} style={styles.clearButton}>
        Clear Cart
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
  },
  item: {
    marginBottom: '10px',
  },

  button: {
    gap: '2px',
  },
  clearButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ShoppingCart;