import React from 'react';

const GreetingCard = ({ name, message, color = 'lightgray' }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    textAlign: 'center',
    margin: '10px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
};

export default GreetingCard;