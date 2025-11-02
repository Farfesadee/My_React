import React from 'react';

function CelsiusInput({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>
        Celsius:
        <input type="number" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default CelsiusInput;