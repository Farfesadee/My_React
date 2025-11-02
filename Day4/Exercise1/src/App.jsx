import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

function TemperatureApp() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 'c' for Celsius, 'f' for Fahrenheit

  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale('f');
  };

  const celsius = scale === 'f' ? toCelsius(parseFloat(temperature)) : parseFloat(temperature);
  const fahrenheit = scale === 'c' ? toFahrenheit(parseFloat(temperature)) : parseFloat(temperature);

  return (
    <div>
      <h2>🌡️ Temperature Converter</h2>
      <CelsiusInput value={isNaN(celsius) ? '' : celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={isNaN(fahrenheit) ? '' : fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureApp;