import React from 'react';

function RGBSlider({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>
        {label}: [{value}]
        <input
          type="range"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>
    </div>
  );
}

export default RGBSlider;