export default function SchoolCard({ school, onToggleFavorite, isSaved }) {
  const tuitionDisplay = school.tuition === 0 ? 'Free*' : `$${school.tuition}k`
  
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="flex-grow-1 me-2">
              <h2 className="h5 card-title mb-1">{school.name}</h2>
              <p className="text-muted small mb-0">{school.location}</p>
            </div>
            <div className="d-flex flex-column align-items-end gap-1">
              <span className={`badge ${school.type === 'MD' ? 'bg-primary' : 'bg-success'}`}>
                {school.type}
              </span>
              <span className={`badge ${school.isPublic ? 'bg-info' : 'bg-dark'}`}>
                {school.isPublic ? 'Public' : 'Private'}
              </span>
            </div>
          </div>
          <dl className="row mb-0 small">
            <dt className="col-6">Avg GPA</dt>
            <dd className="col-6 mb-1 text-end">{school.gpa.toFixed(2)}</dd>
            <dt className="col-6">Avg MCAT</dt>
            <dd className="col-6 mb-1 text-end">{school.mcat}</dd>
            <dt className="col-6">Tuition (annual)</dt>
            <dd className="col-6 mb-1 text-end">{tuitionDisplay}</dd>
            <dt className="col-6">Match Rate</dt>
            <dd className="col-6 text-end">{school.match}%</dd>
          </dl>
        </div>
        <div className="card-footer bg-transparent border-0">
          <button
            type="button"
            className={`btn w-100 ${isSaved ? 'btn-success' : 'btn-outline-primary'}`}
            onClick={() => onToggleFavorite?.(school)}
            aria-label={isSaved ? `Remove ${school.name} from favorites` : `Save ${school.name} to favorites`}
          >
            {isSaved ? 'Remove from Favorites' : 'Save to Favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}
