import { Link } from 'react-router-dom'
import { useState } from 'react'

function Citas() {
  const [citas] = useState([
    {
      id: 1,
      paciente: 'Juan Pérez',
      doctor: 'Dr. García',
      especialidad: 'Medicina General',
      fecha: '2024-01-15',
      hora: '10:00',
      estado: 'Confirmada'
    },
    {
      id: 2,
      paciente: 'María González',
      doctor: 'Dra. Martínez',
      especialidad: 'Cardiología',
      fecha: '2024-01-16',
      hora: '14:30',
      estado: 'Pendiente'
    },
    {
      id: 3,
      paciente: 'Carlos Rodríguez',
      doctor: 'Dr. López',
      especialidad: 'Pediatría',
      fecha: '2024-01-17',
      hora: '09:00',
      estado: 'Confirmada'
    },
    {
      id: 4,
      paciente: 'Ana Martínez',
      doctor: 'Dra. Sánchez',
      especialidad: 'Dermatología',
      fecha: '2024-01-18',
      hora: '16:00',
      estado: 'Cancelada'
    }
  ])

  const getEstadoClass = (estado) => {
    switch(estado) {
      case 'Confirmada': return 'estado-confirmada'
      case 'Pendiente': return 'estado-pendiente'
      case 'Cancelada': return 'estado-cancelada'
      default: return ''
    }
  }

  return (
    <div className="citas-page">
      <div className="page-header">
        <h1>📋 Mis Citas Médicas</h1>
        <Link to="/nueva-cita" className="btn-nueva-cita">
          ➕ Nueva Cita
        </Link>
      </div>

      {citas.length === 0 ? (
        <div className="no-citas">
          <p>No tienes citas programadas</p>
          <Link to="/nueva-cita" className="btn-primary">
            Agendar Primera Cita
          </Link>
        </div>
      ) : (
        <div className="citas-lista">
          {citas.map((cita) => (
            <div key={cita.id} className="cita-card">
              <div className="cita-header">
                <h3>{cita.paciente}</h3>
                <span className={`estado ${getEstadoClass(cita.estado)}`}>
                  {cita.estado}
                </span>
              </div>
              
              <div className="cita-body">
                <div className="cita-info">
                  <span className="info-label">👨‍⚕️ Doctor:</span>
                  <span>{cita.doctor}</span>
                </div>
                <div className="cita-info">
                  <span className="info-label">🏥 Especialidad:</span>
                  <span>{cita.especialidad}</span>
                </div>
                <div className="cita-info">
                  <span className="info-label">📅 Fecha:</span>
                  <span>{cita.fecha}</span>
                </div>
                <div className="cita-info">
                  <span className="info-label">⏰ Hora:</span>
                  <span>{cita.hora}</span>
                </div>
              </div>

              <div className="cita-footer">
                <Link to={`/cita/${cita.id}`} className="btn-ver-detalle">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Citas