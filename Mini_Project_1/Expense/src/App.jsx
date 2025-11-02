import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddExpenseForm from './AddExpenseForm';
import CategoryFilter from './CategoryFilter';
import ExpenseStats from './ExpenseStats';
import ExpenseList from './ExpenseList';
import './ExpenseTracker.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');


  
  // Load from localStorage
  // useEffect(() => {
  //   const storedExpenses = localStorage.getItem('expenses');
  //   if (storedExpenses) {
  //     setExpenses(JSON.parse(storedExpenses));
  //   }
  // }, []);

    // Save to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(exp => exp.id === id ? { ...exp, ...updatedExpense } : exp));
  };

  const filteredExpenses = filter === 'All' ? expenses : expenses.filter(exp => exp.category === filter);

  return (
    <div className="tracker-container">
      <Header />
      <AddExpenseForm onAdd={addExpense} />
      <CategoryFilter currentFilter={filter} onFilterChange={setFilter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense} />
      <button className='clear-all' onClick={() => setExpenses([])}>Clear All Expenses</button>
    </div>
    
  );
}

export default App;