import { useState } from 'react';

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

  const handleSave = () => {
    onEdit(expense.id, { description: desc, amount: parseFloat(amt) });
    setEditing(false);
  };

  const categoryColors = {
    Food: '#a914c0ff',
    Transport: '#1bc03fff',
    Bills: '#dc940eff',
    Entertainment: '#15a08c74',
    Others: '#219dbc'
  };

  return (
    <div className="expense-item" style={{ backgroundColor: categoryColors[expense.category] }}>
      {isEditing ? (
        <>
          <input value={desc} onChange={e => setDesc(e.target.value)} />
          <input type="number" value={amt} onChange={e => setAmt(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p><strong>{expense.description}</strong></p>
          <p>₦{expense.amount.toLocaleString()}</p>
          <p>{expense.category}</p>
          <p>{expense.date}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}
export default ExpenseItem;