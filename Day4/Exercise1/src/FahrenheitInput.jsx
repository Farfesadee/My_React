import React from 'react';

function FahrenheitInput({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>
        Fahrenheit:
        <input type="number" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default FahrenheitInput;