import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>La página que buscas no existe</p>
        <Link to="/" className="btn-home">
          🏠 Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound