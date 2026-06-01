import { useState } from 'react'
import './Navbar.scss'

const navItems = [
  { label: 'Perspectives', href: '#perspectives' },
  { label: 'Research', href: '#research' },
  { label: 'Events', href: '#events' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'About', href: '#about' },
]

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Perspectives')

  const handleNavClick = (label) => {
    setActiveLink(label)
    setMobileMenuOpen(false)
  }

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
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`nav-link ${activeLink === label ? 'active' : ''}`}
              onClick={() => handleNavClick(label)}
            >
              {label}
            </a>
          ))}
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
