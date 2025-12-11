import { Link } from 'react-router'
import ComparisonTable from './ComparisonTable.jsx'
import FavoriteItem from './FavoriteItem.jsx'

export default function Favorites({ favorites, onRemoveFavorite }) {
  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="mb-2">Your Favorites</h1>
        <p className="text-muted mb-0">
          Keep track of schools you&apos;re interested in and compare them side by side.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <div className="display-1 mb-3" role="img" aria-label="Empty favorites">
            📋
          </div>
          <h2 className="h4">No schools saved yet</h2>
          <p className="text-muted mb-4">
            Start exploring and add schools to your favorites to see them here.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Explore Schools
          </Link>
        </div>
      ) : (
        <>
          <section className="mb-5">
            <h2 className="h4 mb-3">
              Saved Schools ({favorites.length})
            </h2>
            <div className="list-group shadow-sm">
              {favorites.map((school) => (
                <FavoriteItem
                  key={school.name}
                  school={school}
                  onRemove={onRemoveFavorite}
                />
              ))}
            </div>
          </section>

          <section>
            <ComparisonTable schools={favorites} />
          </section>
        </>
      )}
    </div>
  )
}
