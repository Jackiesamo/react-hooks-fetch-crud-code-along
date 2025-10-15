
import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <label>Filter by Category:</label>
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Bakery">Bakery</option>
        <option value="Misc">Misc</option>
      </select>
    </div>
  );
}

export default Filter;
