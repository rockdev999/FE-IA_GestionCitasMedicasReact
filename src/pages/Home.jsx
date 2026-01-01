import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🏥 Bienvenido a Clínica Virtual</h1>
        <p className="subtitle">
          Gestiona tus citas médicas de forma fácil y rápida
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">📅</span>
          <h3>Agenda Citas</h3>
          <p>Reserva tu cita con especialistas de forma rápida</p>
          <Link to="/nueva-cita" className="btn-primary">
            Agendar Ahora
          </Link>
        </div>

        <div className="feature-card">
          <span className="feature-icon">👨‍⚕️</span>
          <h3>Ver Mis Citas</h3>
          <p>Consulta todas tus citas programadas</p>
          <Link to="/citas" className="btn-secondary">
            Ver Citas
          </Link>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⏰</span>
          <h3>Recordatorios</h3>
          <p>Recibe notificaciones de tus próximas citas</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h2>500+</h2>
          <p>Pacientes Atendidos</p>
        </div>
        <div className="stat-item">
          <h2>20+</h2>
          <p>Especialistas</p>
        </div>
        <div className="stat-item">
          <h2>1000+</h2>
          <p>Citas Realizadas</p>
        </div>
      </div>
    </div>
  )
}

export default Home