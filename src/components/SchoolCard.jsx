export default function SchoolCard({ school, onToggleFavorite, isSaved }) {
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h5 className="card-title mb-0">{school.name}</h5>
              <small className="text-muted">{school.location}</small>
            </div>
            <span className="badge text-bg-primary">{school.type}</span>
          </div>
          <dl className="row mb-0 small">
            <dt className="col-6">Avg GPA</dt>
            <dd className="col-6 mb-1 text-end">{school.gpa}</dd>
            <dt className="col-6">Avg MCAT</dt>
            <dd className="col-6 mb-1 text-end">{school.mcat}</dd>
            <dt className="col-6">Tuition</dt>
            <dd className="col-6 mb-1 text-end">${school.tuition}k</dd>
            <dt className="col-6">Match Rate</dt>
            <dd className="col-6 text-end">{school.match}%</dd>
          </dl>
        </div>
        <div className="card-footer bg-transparent border-0">
          <button
            type="button"
            className={`btn w-100 ${isSaved ? 'btn-success' : 'btn-outline-primary'}`}
            onClick={() => onToggleFavorite?.(school)}
          >
            {isSaved ? 'Remove from Favorites' : 'Save to Favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}
