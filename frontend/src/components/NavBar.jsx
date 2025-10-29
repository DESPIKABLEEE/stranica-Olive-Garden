import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import scrollStore from '../stores/ScrollStore'
import { List, X } from "@phosphor-icons/react"

const NavBar = observer(() => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('nav-bar') && scrollStore.mobileMenuOpen) {
      scrollStore.closeMobileMenu()
    }
  }

  return (
    <nav 
      className={`nav-bar ${scrollStore.scrolled ? 'scrolled' : ''}`} 
      role="navigation"
      onClick={handleOverlayClick}
    >
      <div className="nav-logo">
        <Link to="/" onClick={scrollStore.closeMobileMenu}>
          <img src="../../public/slike/logo-copy.png" alt="Olive Garden Logo" />
        </Link>
      </div>
      
      <button 
        className="mobile-menu-toggle" 
        onClick={scrollStore.toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {scrollStore.mobileMenuOpen ? <X size={28} /> : <List size={28} />}
      </button>

      <ul className={scrollStore.mobileMenuOpen ? 'mobile-menu-open' : ''}>
        <li><Link to="/" onClick={scrollStore.closeMobileMenu}>Home</Link></li>
        <li><Link to="/galerija" onClick={scrollStore.closeMobileMenu}>Galerija</Link></li>
        <li><Link to="/kontakt" onClick={scrollStore.closeMobileMenu}>Kontakt</Link></li>
      </ul>
    </nav>
  )
})

export default NavBar
