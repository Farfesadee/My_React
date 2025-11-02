const categories = ['All', 'Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

function CategoryFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      {categories.map(cat => (
        <button
          key={cat}
          className={currentFilter === cat ? 'active' : ''}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;