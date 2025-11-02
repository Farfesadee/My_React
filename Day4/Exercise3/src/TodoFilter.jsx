import React from 'react';

function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div style={{ marginBottom: '10px' }}>
      Filter:{' '}
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            marginRight: '10px',
            fontWeight: currentFilter === f ? 'bold' : 'normal',
          }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;