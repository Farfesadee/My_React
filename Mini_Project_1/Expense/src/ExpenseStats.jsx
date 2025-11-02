function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const highest = Math.max(...expenses.map(exp => exp.amount), 0);
  const breakdown = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    
    <div className="stats">
    
      <p>Total Spent: ₦{total.toLocaleString()}</p>
      <p>Number of Expenses: {expenses.length}</p>
      <p>Highest Expense: ₦{highest.toLocaleString()}</p>
      
        {Object.entries(breakdown).map(([cat, amt]) => (
         <card> <li key={cat}>{cat}: ₦{amt.toLocaleString()}</li></card>
        ))}
      
    </div>
    
  );
}
export default ExpenseStats;