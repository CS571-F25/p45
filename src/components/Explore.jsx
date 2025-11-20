import { useMemo, useState } from 'react'
import SchoolCard from './SchoolCard.jsx'

const featuredSchools = [
  {
    name: 'Lakeview College of Medicine',
    location: 'Chicago, IL',
    type: 'MD',
    gpa: 3.74,
    mcat: 512,
    tuition: 62,
    match: 94,
  },
  {
    name: 'Great Plains School of Osteopathy',
    location: 'Des Moines, IA',
    type: 'DO',
    gpa: 3.58,
    mcat: 506,
    tuition: 48,
    match: 89,
  },
  {
    name: 'Sierra Nevada University of Medicine',
    location: 'Reno, NV',
    type: 'MD',
    gpa: 3.67,
    mcat: 509,
    tuition: 54,
    match: 91,
  },
  {
    name: 'Lowcountry College of Medicine',
    location: 'Charleston, SC',
    type: 'MD',
    gpa: 3.7,
    mcat: 511,
    tuition: 58,
    match: 92,
  },
  {
    name: 'Frontier School of Osteopathic Medicine',
    location: 'Flagstaff, AZ',
    type: 'DO',
    gpa: 3.55,
    mcat: 504,
    tuition: 42,
    match: 86,
  },
  {
    name: 'Soundview University of Medicine',
    location: 'Seattle, WA',
    type: 'MD',
    gpa: 3.78,
    mcat: 514,
    tuition: 66,
    match: 96,
  },
]

const sorters = {
  name: (a, b) => a.name.localeCompare(b.name),
  tuition: (a, b) => a.tuition - b.tuition,
  match: (a, b) => b.match - a.match,
}

export default function Explore({ favorites, onToggleFavorite }) {
  const [typeFilter, setTypeFilter] = useState('ALL')
  const [sortKey, setSortKey] = useState('name')

  const schoolsToShow = useMemo(() => {
    const filtered =
      typeFilter === 'ALL' ? featuredSchools : featuredSchools.filter((school) => school.type === typeFilter)
    return [...filtered].sort(sorters[sortKey])
  }, [typeFilter, sortKey])

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
        <div>
          <h1 className="mb-1">Explore Schools</h1>
          <p className="text-muted mb-0">
            Toggle between MD/DO programs and try out the starter sorting controls while I wire up the full dataset.
          </p>
        </div>
        <div className="d-flex flex-column flex-sm-row gap-2">
          <div className="btn-group" role="group" aria-label="Filter by program type">
            {['ALL', 'MD', 'DO'].map((type) => (
              <button
                key={type}
                type="button"
                className={`btn btn-${typeFilter === type ? 'primary' : 'outline-primary'}`}
                onClick={() => setTypeFilter(type)}
              >
                {type === 'ALL' ? 'All Programs' : type}
              </button>
            ))}
          </div>
          <select
            className="form-select"
            aria-label="Sort schools"
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value)}
          >
            <option value="name">Sort A-Z</option>
            <option value="tuition">Lowest Tuition</option>
            <option value="match">Highest Match Rate</option>
          </select>
        </div>
      </div>
      <div className="row">
        {schoolsToShow.map((school) => (
          <SchoolCard
            key={school.name}
            school={school}
            isSaved={favorites.some((fav) => fav.name === school.name)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}
