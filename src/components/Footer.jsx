import { Container } from 'react-bootstrap'
import { Link } from 'react-router'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 className="h5 mb-2">
              <span role="img" aria-label="compass">🧭</span> Premed Compass
            </h2>
            <p className="text-secondary mb-0 small">
              Helping pre-med students navigate their medical school journey.
            </p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h3 className="h6 text-uppercase text-secondary mb-2">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="list-unstyled mb-0">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/explore" className="text-light text-decoration-none">Explore Schools</Link></li>
                <li><Link to="/favorites" className="text-light text-decoration-none">Favorites</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3">
            <h3 className="h6 text-uppercase text-secondary mb-2">Resources</h3>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about" className="text-light text-decoration-none">About This Project</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-3 border-secondary" />
        <div className="text-center text-secondary small">
          <p className="mb-0">© {currentYear} Premed Compass. Built for CS571.</p>
        </div>
      </Container>
    </footer>
  )
}
