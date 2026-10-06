import React from "react";
import {
  CATEGORIES,
  DIFFICULTIES,
  STATUSES,
} from "../../hooks/useQuestionForm";

const fieldStyle =
  "w-full rounded-input border-2 border-border bg-surface-soft px-4 py-3 text-sm font-bold text-ink outline-none transition focus:border-primary focus:bg-white";

const FilterBar = ({
  search,
  onSearchChange,
  filters,
  onFilterChange,
  onClear,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]">
      <div className="relative col-span-2 lg:col-span-1">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
          🔍
        </span>
        <input
          className={`${fieldStyle} pl-12 placeholder:font-semibold placeholder:text-muted`}
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <select
        className={`${fieldStyle} cursor-pointer`}
        name="category"
        value={filters.category}
        onChange={onFilterChange}
      >
        <option value="All">🗂️ All Categories</option>
        {CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        className={`${fieldStyle} cursor-pointer`}
        name="status"
        value={filters.status}
        onChange={onFilterChange}
      >
        <option value="All">🚦 All Status</option>
        {STATUSES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        className={`${fieldStyle} cursor-pointer`}
        name="difficulty"
        value={filters.difficulty}
        onChange={onFilterChange}
      >
        <option value="All">🔥 All Difficulty</option>
        {DIFFICULTIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        className="rounded-input bg-coral-soft px-5 py-3 text-sm font-bold text-coral-ink transition hover:bg-coral-ink hover:text-white"
        onClick={onClear}
      >
        🧹 Clear
      </button>
    </div>
  );
};

export default FilterBar;
