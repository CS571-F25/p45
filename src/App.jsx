import { Link, Navigate, Route, Routes } from 'react-router'
import './App.css'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Premed Compass
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
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
