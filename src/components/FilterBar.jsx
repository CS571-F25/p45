import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function FilterBar({ 
  typeFilter, 
  onTypeChange, 
  locationFilter, 
  onLocationChange, 
  locations,
  publicFilter,
  onPublicChange,
  tuitionRange,
  onTuitionChange,
  gpaRange,
  onGpaChange,
  mcatRange,
  onMcatChange
}) {
  return (
    <div className="filter-bar">
      {/* Row 1: Program Type and School Type toggles */}
      <div className="d-flex flex-wrap gap-2 mb-3">
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
                className={`btn btn-sm btn-${publicFilter === type ? 'info' : 'outline-info'}`}
                onClick={() => onPublicChange(type)}
                aria-pressed={publicFilter === type}
              >
                {type === 'ALL' ? 'All' : type.charAt(0) + type.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </fieldset>

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
      </div>

      {/* Row 2: Range Sliders for Tuition, GPA, MCAT */}
      <div className="row g-4 mt-1">
        {/* Tuition Range */}
        <div className="col-12 col-md-4">
          <div className="slider-group">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label mb-0 small fw-medium">Tuition</label>
              <span className="badge bg-light text-dark">
                ${tuitionRange[0]}k – {tuitionRange[1] >= 100 ? '$100k+' : `$${tuitionRange[1]}k`}
              </span>
            </div>
            <Slider
              range
              min={0}
              max={100}
              step={5}
              value={tuitionRange}
              onChange={onTuitionChange}
              allowCross={false}
              styles={{
                track: { backgroundColor: '#0d6efd', height: 6 },
                handle: { 
                  borderColor: '#0d6efd', 
                  backgroundColor: '#fff',
                  opacity: 1,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  width: 18,
                  height: 18,
                  marginTop: -6
                },
                rail: { backgroundColor: '#e9ecef', height: 6 }
              }}
            />
          </div>
        </div>

        {/* GPA Range */}
        <div className="col-12 col-md-4">
          <div className="slider-group">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label mb-0 small fw-medium">GPA</label>
              <span className="badge bg-light text-dark">
                {gpaRange[0].toFixed(1)} – {gpaRange[1].toFixed(1)}
              </span>
            </div>
            <Slider
              range
              min={3.0}
              max={4.0}
              step={0.05}
              value={gpaRange}
              onChange={onGpaChange}
              allowCross={false}
              styles={{
                track: { backgroundColor: '#198754', height: 6 },
                handle: { 
                  borderColor: '#198754', 
                  backgroundColor: '#fff',
                  opacity: 1,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  width: 18,
                  height: 18,
                  marginTop: -6
                },
                rail: { backgroundColor: '#e9ecef', height: 6 }
              }}
            />
          </div>
        </div>

        {/* MCAT Range */}
        <div className="col-12 col-md-4">
          <div className="slider-group">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label mb-0 small fw-medium">MCAT</label>
              <span className="badge bg-light text-dark">
                {mcatRange[0]} – {mcatRange[1]}
              </span>
            </div>
            <Slider
              range
              min={490}
              max={528}
              step={1}
              value={mcatRange}
              onChange={onMcatChange}
              allowCross={false}
              styles={{
                track: { backgroundColor: '#6f42c1', height: 6 },
                handle: { 
                  borderColor: '#6f42c1', 
                  backgroundColor: '#fff',
                  opacity: 1,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  width: 18,
                  height: 18,
                  marginTop: -6
                },
                rail: { backgroundColor: '#e9ecef', height: 6 }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
