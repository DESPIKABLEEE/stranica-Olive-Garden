import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import scrollStore from '../stores/ScrollStore'

const NavBar = observer(() => {
  return (
    <nav className={`nav-bar ${scrollStore.scrolled ? 'scrolled' : ''}`} role="navigation">
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
})

export default NavBar
