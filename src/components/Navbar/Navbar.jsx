import { useState } from 'react'
import './Navbar.scss'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          athenaInstitute
        </div>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#perspectives" className="nav-link active">Perspectives</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#innovation" className="nav-link">Innovation</a>
          <a href="#about" className="nav-link">About</a>
          <div className="navbar-mobile-actions">
            <a href="#back" className="btn-secondary">Back to athenahealth</a>
          </div>
        </nav>

        <div className="navbar-actions">
          <a href="#back" className="btn-secondary">Back to athenahealth</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
