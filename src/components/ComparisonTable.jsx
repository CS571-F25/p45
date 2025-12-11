export default function ComparisonTable({ schools }) {
  if (schools.length < 2) {
    return (
      <div className="alert alert-info" role="status">
        <strong>Tip:</strong> Add at least 2 schools to your favorites to compare them side by side.
      </div>
    )
  }

  const metrics = [
    { key: 'type', label: 'Program Type' },
    { key: 'location', label: 'Location' },
    { key: 'isPublic', label: 'Public/Private', format: (val) => val ? 'Public' : 'Private' },
    { key: 'gpa', label: 'Average GPA', format: (val) => val.toFixed(2) },
    { key: 'mcat', label: 'Average MCAT' },
    { key: 'tuition', label: 'Tuition (annual)', format: (val) => val === 0 ? 'Free*' : `$${val}k` },
    { key: 'match', label: 'Match Rate', format: (val) => `${val}%` },
  ]

  // Find best values for highlighting
  const bestValues = {
    gpa: Math.max(...schools.map(s => s.gpa)),
    mcat: Math.max(...schools.map(s => s.mcat)),
    tuition: Math.min(...schools.map(s => s.tuition)),
    match: Math.max(...schools.map(s => s.match)),
  }

  const isBest = (school, key) => {
    if (key === 'gpa') return school.gpa === bestValues.gpa
    if (key === 'mcat') return school.mcat === bestValues.mcat
    if (key === 'tuition') return school.tuition === bestValues.tuition
    if (key === 'match') return school.match === bestValues.match
    return false
  }

  return (
    <div className="comparison-table">
      <h2 className="h4 mb-3">Side-by-Side Comparison</h2>
      <p className="text-muted small mb-3">
        <span className="text-success fw-bold">Green highlighted</span> values indicate the best among your selected schools.
      </p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <caption className="visually-hidden">
            Comparison of {schools.length} selected medical schools
          </caption>
          <thead className="table-dark">
            <tr>
              <th scope="col">Metric</th>
              {schools.map((school) => (
                <th key={school.name} scope="col" className="text-wrap" style={{ minWidth: '150px' }}>
                  {school.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.key}>
                <th scope="row">{metric.label}</th>
                {schools.map((school) => {
                  const value = school[metric.key]
                  const displayValue = metric.format ? metric.format(value) : value
                  const highlight = isBest(school, metric.key)
                  return (
                    <td 
                      key={school.name}
                      className={highlight ? 'table-success fw-bold' : ''}
                    >
                      {displayValue}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-muted small mt-2">
        * Kaiser Permanente School of Medicine offers full-tuition scholarships to all students in early cohorts.
      </p>
    </div>
  )
}
