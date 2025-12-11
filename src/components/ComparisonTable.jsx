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
    { key: 'gpa', label: 'Average GPA', format: (val) => val.toFixed(2), lowerIsBetter: true },
    { key: 'mcat', label: 'Average MCAT', lowerIsBetter: true },
    { key: 'tuition', label: 'Tuition (annual)', format: (val) => val === 0 ? 'Free*' : `$${val}k`, lowerIsBetter: true },
    { key: 'match', label: 'Match Rate', format: (val) => `${val}%`, lowerIsBetter: false },
  ]

  // Find best and worst values for highlighting
  const stats = {
    gpa: { min: Math.min(...schools.map(s => s.gpa)), max: Math.max(...schools.map(s => s.gpa)) },
    mcat: { min: Math.min(...schools.map(s => s.mcat)), max: Math.max(...schools.map(s => s.mcat)) },
    tuition: { min: Math.min(...schools.map(s => s.tuition)), max: Math.max(...schools.map(s => s.tuition)) },
    match: { min: Math.min(...schools.map(s => s.match)), max: Math.max(...schools.map(s => s.match)) },
  }

  const getHighlight = (school, metric) => {
    if (!stats[metric.key]) return ''
    
    const value = school[metric.key]
    const { min, max } = stats[metric.key]
    
    // Don't highlight if all values are the same
    if (min === max) return ''
    
    if (metric.lowerIsBetter) {
      // Lower is better: lowest = green, highest = red
      if (value === min) return 'table-success fw-bold'
      if (value === max) return 'table-danger'
    } else {
      // Higher is better: highest = green, lowest = red
      if (value === max) return 'table-success fw-bold'
      if (value === min) return 'table-danger'
    }
    return ''
  }

  return (
    <div className="comparison-table">
      <h2 className="h4 mb-3">Side-by-Side Comparison</h2>
      <p className="text-muted small mb-3">
        <span className="text-success fw-bold">Green</span> = most favorable for applicants, 
        <span className="text-danger ms-2">Red</span> = most competitive/expensive
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
                  const highlight = getHighlight(school, metric)
                  return (
                    <td 
                      key={school.name}
                      className={highlight}
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
      {schools.some(s => s.tuition === 0) && (
        <div className="text-muted small mt-2">
          {schools.filter(s => s.tuition === 0).map(s => (
            <p key={s.name} className="mb-1">
              * <strong>{s.name}</strong>: {
                s.name.includes('Uniformed Services') 
                  ? 'Tuition-free military medical school with service commitment.'
                  : s.name.includes('Kaiser') 
                    ? 'Full-tuition scholarships for all students.'
                    : s.name.includes('NYU') 
                      ? 'Full-tuition scholarships for all students.'
                      : 'Tuition-free program.'
              }
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
