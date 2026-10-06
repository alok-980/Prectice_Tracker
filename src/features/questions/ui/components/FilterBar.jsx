import React from "react";
import {
  CATEGORIES,
  DIFFICULTIES,
  STATUSES,
} from "../../hooks/useQuestionForm";

const FilterBar = ({
  search,
  onSearchChange,
  filters,
  onFilterChange,
  onClear,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        name="category"
        value={filters.category}
        onChange={onFilterChange}
      >
        <option value="All">All Categories</option>
        {CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select name="status" value={filters.status} onChange={onFilterChange}>
        <option value="All">All Status</option>
        {STATUSES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="difficulty"
        value={filters.difficulty}
        onChange={onFilterChange}
      >
        <option value="All">All Difficulty</option>
        {DIFFICULTIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button onClick={onClear}>Clear Filters</button>
    </div>
  );
};

export default FilterBar;
