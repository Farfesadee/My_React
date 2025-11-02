Main Project: Build an Expense Tracker

Now that you've seen a complete Task Manager example, build your own **Expense Tracker** application.

**Requirements:**

### **Core Features (Must Have):**
1. **Add Expenses**
   - Input fields: description, amount, category
   - Categories: Food, Transport, Bills, Entertainment, Others
   - Validation: Don't allow empty description or zero amount

2. **Display Expenses**
   - Show all expenses in a list
   - Each expense shows: description, amount (₦), category, date
   - Different background colors for different categories

3. **Expense Actions**
   - Delete button for each expense
   - Edit functionality (click to edit description/amount)

**Filter by Category**
   - Buttons: All, Food, Transport, Bills, Entertainment, Others
   - Show only expenses matching selected category

5. **Statistics Display**
   - Total amount spent
   - Number of expenses
   - Highest single expense
   - Spending breakdown by category

6. **Professional Styling**
   - Clean, modern design
   - Responsive layout
   - Nigerian Naira (₦) formatting
   - Color-coded categories

Component Structure You Should Have:**

```
App.jsx (main - holds all state)
├── Header.jsx (title, date)
├── AddExpenseForm.jsx (form to add expenses)
├── CategoryFilter.jsx (filter buttons)
├── ExpenseStats.jsx (statistics display)
├── ExpenseList.jsx (maps through expenses)
│   └── ExpenseItem.jsx (individual expense)
└── ExpenseTracker.css (all styles)
```

### **Sample Data Structure:**
```javascript
{
  id: 1,
  description: "Lunch at Mama Put",
  amount: 1500,
  category: "Food",
  date: "2025-01-15"
}