export default function SortDropdown({ sortKey, onSortChange }) {
  return (
    <div className="sort-dropdown d-flex align-items-center gap-2">
      <label htmlFor="sort-select" className="form-label mb-0 text-nowrap">
        Sort by:
      </label>
      <select
        id="sort-select"
        className="form-select"
        value={sortKey}
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Sort schools by"
      >
        <option value="name">Name (A-Z)</option>
        <option value="tuition">Lowest Tuition</option>
        <option value="match">Highest Match Rate</option>
        <option value="gpa">Highest GPA</option>
        <option value="mcat">Highest MCAT</option>
      </select>
    </div>
  )
}
