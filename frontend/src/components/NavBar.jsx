import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`} role="navigation">
      <div className="nav-logo">
        <Link to="/">
          <img src="../../public/slike/logo-copy.png" alt="Olive Garden Logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/galerija">Galerija</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
