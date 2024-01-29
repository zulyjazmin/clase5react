import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const CambiarEstiloNavbar = ({isActive}) => isActive ? { color:'crimson', fontWeight:'bold'}: { color:'gold', fontWeight: 'bold'}
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Educacion IT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/productos" style={CambiarEstiloNavbar}>Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/nosotros" style={CambiarEstiloNavbar}>Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/contacto" style={CambiarEstiloNavbar}>Contacto</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar

