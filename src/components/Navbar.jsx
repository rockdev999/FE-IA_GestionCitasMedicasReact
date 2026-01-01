import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🏥 Clínica Virtual
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/citas" 
              className={location.pathname === '/citas' ? 'active' : ''}
            >
              Ver Citas
            </Link>
          </li>
          <li>
            <Link 
              to="/nueva-cita" 
              className={location.pathname === '/nueva-cita' ? 'active' : ''}
            >
              Nueva Cita
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar