import React, { useState, useEffect } from 'react';

const DEFAULT_TITLE = 'React App';

const TitleUpdater = () => {
  const [customTitle, setCustomTitle] = useState('');
  const [title, setTitle] = useState(DEFAULT_TITLE);

  useEffect(() => {
    document.title = `${DEFAULT_TITLE} - ${customTitle}`;
  }, [customTitle]);

  const handleChange = (e) => {
    const value = e.target.value.slice(0, 60); // Enforce max 60 characters
    setCustomTitle(value);
  };

  const handleReset = () => {
    setCustomTitle('');
    setTitle(DEFAULT_TITLE);
    document.title = DEFAULT_TITLE;
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '1em' }}>
      <h2>📝 Document Title Updater</h2>
      <label>
        Custom Title:{' '}
        <input
          type="text"
          value={customTitle}
          onChange={handleChange}
          placeholder="Type here..."
          style={{ width: '300px' }}
        />
      </label>
      <div style={{ marginTop: '1em' }}>
        <strong>Preview:</strong> "{DEFAULT_TITLE} - {customTitle}"
      </div>
      <div style={{ marginTop: '0.5em', color: customTitle.length >= 60 ? 'red' : 'gray' }}>
        Character Count: {customTitle.length}/60
      </div>
      <button onClick={handleReset} style={{ marginTop: '1em' }}>
        Reset to Default
      </button>
    </div>
  );
};

export default TitleUpdater;