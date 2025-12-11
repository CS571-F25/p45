export default function SearchBar({ searchQuery, onSearchChange }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Search is handled via onChange, form submission just prevents page reload
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar" role="search">
      <div className="input-group">
        <label htmlFor="school-search" className="visually-hidden">
          Search schools by name
        </label>
        <span className="input-group-text" aria-hidden="true">
          🔍
        </span>
        <input
          type="search"
          id="school-search"
          className="form-control"
          placeholder="Search schools..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search schools by name"
        />
        {searchQuery && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  )
}
