import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import About from './components/About.jsx'
import Explore from './components/Explore.jsx'
import Favorites from './components/Favorites.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

const FAVORITES_KEY = 'premed-compass-favorites'

function App() {
  const [favorites, setFavorites] = useState(() => {
    // Initialize from localStorage
    try {
      const saved = localStorage.getItem(FAVORITES_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

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
      <Navbar />
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
      <Footer />
    </div>
  )
}

export default App
