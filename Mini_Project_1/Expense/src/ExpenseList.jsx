import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="expense-list">
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
export default ExpenseList;