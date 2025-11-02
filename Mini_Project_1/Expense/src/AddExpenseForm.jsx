import { useState } from 'react';

function AddExpenseForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || amount <= 0) return;
    onAdd({ description, amount: parseFloat(amount), category });

    // Clear form after adding
    setDescription('');
    setAmount('');
    setCategory('Food')
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Others</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
export default AddExpenseForm;