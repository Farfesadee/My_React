// import React, { useState } from 'react';
// import RGBSlider from './RGBSlider';
// import ColorDisplay from './ColorDisplay';

// function ColorPicker() {
//   const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

//   const handleChange = (channel, value) => {
//     setRgb((prev) => ({
//       ...prev,
//       [channel]: parseInt(value, 10),
//     }));
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h2>🎨 RGB Color Picker</h2>
//       <RGBSlider label="Red" value={rgb.r} onChange={(val) => handleChange('r', val)} />
//       <RGBSlider label="Green" value={rgb.g} onChange={(val) => handleChange('g', val)} />
//       <RGBSlider label="Blue" value={rgb.b} onChange={(val) => handleChange('b', val)} />
//       <ColorDisplay rgb={rgb} />
//     </div>
//   );
// }

// export default ColorPicker;