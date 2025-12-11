import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap'
import { FiCompass } from 'react-icons/fi'
import { Link, useLocation } from 'react-router'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <BSNavbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <FiCompass size={20} aria-hidden="true" />
          <span>Premed Compass</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="primary-nav" aria-label="Toggle navigation" />
        <BSNavbar.Collapse id="primary-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={isActive('/') ? 'active' : ''}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/explore"
              className={isActive('/explore') ? 'active' : ''}
              aria-current={isActive('/explore') ? 'page' : undefined}
            >
              Explore
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favorites"
              className={isActive('/favorites') ? 'active' : ''}
              aria-current={isActive('/favorites') ? 'page' : undefined}
            >
              Favorites
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={isActive('/about') ? 'active' : ''}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}
