import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar" role="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Galerija</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
