export default function FavoriteItem({ school, onRemove }) {
  const tuitionDisplay = school.tuition === 0 ? 'Free*' : `$${school.tuition}k`
  
  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
            <h2 className="h5 mb-0">{school.name}</h2>
            <span className={`badge ${school.type === 'MD' ? 'bg-primary' : 'bg-success'}`}>
              {school.type}
            </span>
            <span className={`badge ${school.isPublic ? 'bg-info' : 'bg-secondary'}`}>
              {school.isPublic ? 'Public' : 'Private'}
            </span>
          </div>
          <p className="text-muted mb-2 small">{school.location}</p>
          <div className="d-flex flex-wrap gap-3 small">
            <span>
              <strong>GPA:</strong> {school.gpa.toFixed(2)}
            </span>
            <span>
              <strong>MCAT:</strong> {school.mcat}
            </span>
            <span>
              <strong>Tuition:</strong> {tuitionDisplay}
            </span>
            <span>
              <strong>Match Rate:</strong> {school.match}%
            </span>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() => onRemove(school.name)}
          aria-label={`Remove ${school.name} from favorites`}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
