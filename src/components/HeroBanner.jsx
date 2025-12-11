import { Link } from 'react-router'

export default function HeroBanner() {
  return (
    <section className="hero-banner bg-primary text-white py-5 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">
              Find Your Perfect Medical School
            </h1>
            <p className="lead mb-4">
              Compare MD and DO programs, filter by GPA and tuition, and build 
              your personalized school list. All the data you need in one place.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-light btn-lg" to="/explore">
                Start Exploring
              </Link>
              <Link className="btn btn-outline-light btn-lg" to="/about">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block text-center">
            <div className="hero-icon display-1" role="img" aria-label="Medical symbol">
              🩺
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
