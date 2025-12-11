export default function FilterBar({ 
  typeFilter, 
  onTypeChange, 
  locationFilter, 
  onLocationChange, 
  locations,
  publicFilter,
  onPublicChange,
  tuitionMax,
  onTuitionChange,
  gpaMin,
  onGpaChange,
  mcatMin,
  onMcatChange
}) {
  return (
    <div className="filter-bar">
      {/* Row 1: Program Type and School Type toggles */}
      <div className="d-flex flex-wrap gap-2 mb-2">
        <fieldset className="d-flex align-items-center gap-2">
          <legend className="visually-hidden">Program Type</legend>
          <div className="btn-group" role="group" aria-label="Filter by program type">
            {['ALL', 'MD', 'DO'].map((type) => (
              <button
                key={type}
                type="button"
                className={`btn btn-sm btn-${typeFilter === type ? 'primary' : 'outline-primary'}`}
                onClick={() => onTypeChange(type)}
                aria-pressed={typeFilter === type}
              >
                {type === 'ALL' ? 'All' : type}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="d-flex align-items-center gap-2">
          <legend className="visually-hidden">School Type</legend>
          <div className="btn-group" role="group" aria-label="Filter by school type">
            {['ALL', 'PUBLIC', 'PRIVATE'].map((type) => (
              <button
                key={type}
                type="button"
                className={`btn btn-sm btn-${publicFilter === type ? 'secondary' : 'outline-secondary'}`}
                onClick={() => onPublicChange(type)}
                aria-pressed={publicFilter === type}
              >
                {type === 'ALL' ? 'All' : type.charAt(0) + type.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Row 2: Dropdowns for State, Tuition, GPA, MCAT */}
      <div className="d-flex flex-wrap gap-2 align-items-center">
        <div className="d-flex align-items-center gap-1">
          <label htmlFor="location-filter" className="form-label mb-0 text-nowrap small">
            State:
          </label>
          <select
            id="location-filter"
            className="form-select form-select-sm"
            style={{ width: 'auto', minWidth: '100px' }}
            value={locationFilter}
            onChange={(e) => onLocationChange(e.target.value)}
            aria-label="Filter by state"
          >
            <option value="ALL">All</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex align-items-center gap-1">
          <label htmlFor="tuition-filter" className="form-label mb-0 text-nowrap small">
            Tuition:
          </label>
          <select
            id="tuition-filter"
            className="form-select form-select-sm"
            style={{ width: 'auto', minWidth: '100px' }}
            value={tuitionMax}
            onChange={(e) => onTuitionChange(e.target.value)}
            aria-label="Filter by maximum tuition"
          >
            <option value="ALL">Any</option>
            <option value="30">Under $30k</option>
            <option value="40">Under $40k</option>
            <option value="50">Under $50k</option>
            <option value="60">Under $60k</option>
            <option value="70">Under $70k</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-1">
          <label htmlFor="gpa-filter" className="form-label mb-0 text-nowrap small">
            GPA:
          </label>
          <select
            id="gpa-filter"
            className="form-select form-select-sm"
            style={{ width: 'auto', minWidth: '80px' }}
            value={gpaMin}
            onChange={(e) => onGpaChange(e.target.value)}
            aria-label="Filter by minimum GPA"
          >
            <option value="ALL">Any</option>
            <option value="3.5">3.5+</option>
            <option value="3.6">3.6+</option>
            <option value="3.7">3.7+</option>
            <option value="3.8">3.8+</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-1">
          <label htmlFor="mcat-filter" className="form-label mb-0 text-nowrap small">
            MCAT:
          </label>
          <select
            id="mcat-filter"
            className="form-select form-select-sm"
            style={{ width: 'auto', minWidth: '80px' }}
            value={mcatMin}
            onChange={(e) => onMcatChange(e.target.value)}
            aria-label="Filter by minimum MCAT"
          >
            <option value="ALL">Any</option>
            <option value="500">500+</option>
            <option value="505">505+</option>
            <option value="510">510+</option>
            <option value="515">515+</option>
            <option value="520">520+</option>
          </select>
        </div>
      </div>
    </div>
  )
}
