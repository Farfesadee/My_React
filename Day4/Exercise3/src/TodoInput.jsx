import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        style={{ padding: '5px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '5px 10px', marginLeft: '10px' }}>
        Add
      </button>
    </form>
  );
}

export default TodoInput;