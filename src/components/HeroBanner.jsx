import { FiArrowRight, FiBookOpen } from 'react-icons/fi'
import { Link } from 'react-router'

export default function HeroBanner() {
  return (
    <section className="hero-banner bg-primary text-white py-5 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-7">
            <h1 className="display-4 fw-bold mb-3">
              Find Your Perfect Medical School
            </h1>
            <p className="lead mb-4">
              Compare MD and DO programs, filter by GPA and tuition, and build 
              your personalized school list. All the data you need in one place.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-light btn-lg d-inline-flex align-items-center gap-2" to="/explore">
                Start Exploring
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2" to="/about">
                <FiBookOpen aria-hidden="true" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
