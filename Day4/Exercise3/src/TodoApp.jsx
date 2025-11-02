import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📝 My Todo List</h2>
      <TodoInput onAdd={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p>
        Total: {todos.length} tasks | Completed: {completedCount}
      </p>
      {completedCount > 0 && (
        <button onClick={clearCompleted} style={{ marginTop: '10px' }}>
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default TodoApp;