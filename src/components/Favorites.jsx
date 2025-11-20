export default function Favorites({ favorites, onRemoveFavorite }) {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Favorites</h1>
      <p className="text-muted">
        Eventually this page will let users persist their list and run side-by-side comparisons. For the check-in it
        reflects the current session so I can test the workflows.
      </p>
      {favorites.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No schools saved yet. Head to the Explore tab to add a few candidates.
        </div>
      ) : (
        <div className="list-group shadow-sm">
          {favorites.map((school) => (
            <div key={school.name} className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                  <h5 className="mb-1">{school.name}</h5>
                  <small className="text-muted">
                    {school.location} • Avg GPA {school.gpa} • Avg MCAT {school.mcat}
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onRemoveFavorite(school.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
