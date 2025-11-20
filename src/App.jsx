import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Navigate, Route, Routes } from 'react-router'
import './App.css'
import About from './components/About.jsx'
import Explore from './components/Explore.jsx'
import Favorites from './components/Favorites.jsx'
import Home from './components/Home.jsx'

function App() {
  const [favorites, setFavorites] = useState([])

  const handleToggleFavorite = (school) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.name === school.name)) {
        return prev.filter((fav) => fav.name !== school.name)
      }
      return [...prev, school]
    })
  }

  const handleRemoveFavorite = (name) => {
    setFavorites((prev) => prev.filter((fav) => fav.name !== name))
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Premed Compass
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={<Explore favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="bg-light py-3 text-center border-top">
        <small className="text-muted">
          Draft content for the initial publish—more detailed features and data coming soon.
        </small>
      </footer>
    </div>
  )
}

export default App
