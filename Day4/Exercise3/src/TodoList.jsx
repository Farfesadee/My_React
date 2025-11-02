import React from 'react';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginLeft: '8px',
            }}
          >
            {todo.text} {todo.completed && '(completed)'}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;