function FilterSortControls({
  filterCategory,
  setFilterCategory,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="controls">
      <label>
        Filter by Category:
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </label>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    </div>
  );
}

export default FilterSortControls;
