export default function FilterBar({ typeFilter, onTypeChange, locationFilter, onLocationChange, locations }) {
  return (
    <div className="filter-bar d-flex flex-wrap gap-3 align-items-center">
      <fieldset className="d-flex align-items-center gap-2">
        <legend className="visually-hidden">Program Type</legend>
        <div className="btn-group" role="group" aria-label="Filter by program type">
          {['ALL', 'MD', 'DO'].map((type) => (
            <button
              key={type}
              type="button"
              className={`btn btn-${typeFilter === type ? 'primary' : 'outline-primary'}`}
              onClick={() => onTypeChange(type)}
              aria-pressed={typeFilter === type}
            >
              {type === 'ALL' ? 'All Programs' : type}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="d-flex align-items-center gap-2">
        <label htmlFor="location-filter" className="form-label mb-0 text-nowrap">
          Location:
        </label>
        <select
          id="location-filter"
          className="form-select"
          value={locationFilter}
          onChange={(e) => onLocationChange(e.target.value)}
          aria-label="Filter by state"
        >
          <option value="ALL">All States</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
