import React from 'react';
import './StateCard.css';

const regionColors = {
  North: '#8B4513',
  South: '#008751',
  East: '#FFD700',
  West: '#4169E1',
};

const StateCard = ({ state, capital, region, population, children }) => {
  const backgroundColor = regionColors[region] || '#ccc';

  return (
    <div className="state-card" style={{ backgroundColor }}>
      <h2>{state} State</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      {children && (
        <div className="landmark">
          <strong>Landmark:</strong> {children}
        </div>
      )}
    </div>
  );
};

export default StateCard;