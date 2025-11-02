import React, { useState } from 'react';
import RGBSlider from './RGBSlider';
import ColorDisplay from './ColorDisplay';

function ColorPicker() {
  const [rgb, setRgb] = useState({ r: 255, g: 100, b: 50 });

  const handleChange = (channel, value) => {
    setRgb((prev) => ({
      ...prev,
      [channel]: parseInt(value, 10),
    }));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px' }}>
      <h2>🎨 Color Picker</h2>
      <RGBSlider label="Red" value={rgb.r} onChange={(val) => handleChange('r', val)} />
      <RGBSlider label="Green" value={rgb.g} onChange={(val) => handleChange('g', val)} />
      <RGBSlider label="Blue" value={rgb.b} onChange={(val) => handleChange('b', val)} />
      <ColorDisplay rgb={rgb} />
    </div>
  );
}

export default ColorPicker;