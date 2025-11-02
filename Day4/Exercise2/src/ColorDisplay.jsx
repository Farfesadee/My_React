import React from 'react';

function ColorDisplay({ rgb }) {
  const { r, g, b } = rgb;
  const hex = `#${[r, g, b]
    .map((val) => val.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;

  const boxStyle = {
    width: '100%',
    height: '100px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    border: '1px solid #ccc',
    marginTop: '10px',
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex} to clipboard`);
  };

  return (
    <div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex}</p>
      <button onClick={copyToClipboard}>Copy Hex</button>
      <div style={boxStyle}></div>
    </div>
  );
}

export default ColorDisplay;