import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CitaDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cita, setCita] = useState(null)

  useEffect(() => {
    // Simular obtener datos de una API
    const citasSimuladas = [
      {
        id: 1,
        paciente: 'Juan Pérez',
        doctor: 'Dr. García',
        especialidad: 'Medicina General',
        fecha: '2024-01-15',
        hora: '10:00',
        estado: 'Confirmada',
        motivo: 'Chequeo general',
        observaciones: 'Paciente presenta síntomas leves de gripe',
        telefono: '555-1234',
        email: 'juan@email.com'
      },
      {
        id: 2,
        paciente: 'María González',
        doctor: 'Dra. Martínez',
        especialidad: 'Cardiología',
        fecha: '2024-01-16',
        hora: '14:30',
        estado: 'Pendiente',
        motivo: 'Control cardiológico',
        observaciones: 'Control de presión arterial',
        telefono: '555-5678',
        email: 'maria@email.com'
      },
      {
        id: 3,
        paciente: 'Carlos Rodríguez',
        doctor: 'Dr. López',
        especialidad: 'Pediatría',
        fecha: '2024-01-17',
        hora: '09:00',
        estado: 'Confirmada',
        motivo: 'Vacunación',
        observaciones: 'Aplicación de vacuna triple viral',
        telefono: '555-9012',
        email: 'carlos@email.com'
      },
      {
        id: 4,
        paciente: 'Ana Martínez',
        doctor: 'Dra. Sánchez',
        especialidad: 'Dermatología',
        fecha: '2024-01-18',
        hora: '16:00',
        estado: 'Cancelada',
        motivo: 'Consulta dermatológica',
        observaciones: 'Revisión de lesiones en piel',
        telefono: '555-3456',
        email: 'ana@email.com'
      }
    ]

    const citaEncontrada = citasSimuladas.find(c => c.id === parseInt(id))
    setCita(citaEncontrada)
  }, [id])

  const handleCancelar = () => {
    if (window.confirm('¿Estás seguro de cancelar esta cita?')) {
      alert('Cita cancelada exitosamente')
      navigate('/citas')
    }
  }

  if (!cita) {
    return (
      <div className="cita-detalle">
        <div className="not-found-message">
          <h2>❌ Cita no encontrada</h2>
          <p>La cita con ID {id} no existe</p>
          <Link to="/citas" className="btn-primary">
            Volver a Citas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cita-detalle">
      <div className="detalle-header">
        <button onClick={() => navigate('/citas')} className="btn-back">
          ← Volver
        </button>
        <h1>Detalle de la Cita</h1>
      </div>

      <div className="detalle-card">
        <div className="detalle-section">
          <h2>👤 Información del Paciente</h2>
          <div className="detalle-grid">
            <div className="detalle-item">
              <span className="label">Nombre:</span>
              <span className="value">{cita.paciente}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Teléfono:</span>
              <span className="value">{cita.telefono}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Email:</span>
              <span className="value">{cita.email}</span>
            </div>
          </div>
        </div>

        <div className="detalle-section">
          <h2>👨‍⚕️ Información Médica</h2>
          <div className="detalle-grid">
            <div className="detalle-item">
              <span className="label">Doctor:</span>
              <span className="value">{cita.doctor}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Especialidad:</span>
              <span className="value">{cita.especialidad}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Motivo:</span>
              <span className="value">{cita.motivo}</span>
            </div>
          </div>
        </div>

        <div className="detalle-section">
          <h2>📅 Fecha y Hora</h2>
          <div className="detalle-grid">
            <div className="detalle-item">
              <span className="label">Fecha:</span>
              <span className="value">{cita.fecha}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Hora:</span>
              <span className="value">{cita.hora}</span>
            </div>
            <div className="detalle-item">
              <span className="label">Estado:</span>
              <span className={`value estado-${cita.estado.toLowerCase()}`}>
                {cita.estado}
              </span>
            </div>
          </div>
        </div>

        <div className="detalle-section">
          <h2>📝 Observaciones</h2>
          <p className="observaciones">{cita.observaciones}</p>
        </div>

        <div className="detalle-actions">
          {cita.estado !== 'Cancelada' && (
            <>
              <button className="btn-editar">✏️ Editar Cita</button>
              <button className="btn-cancelar" onClick={handleCancelar}>
                ❌ Cancelar Cita
              </button>
            </>
          )}
          <Link to="/citas" className="btn-volver">
            Volver a Citas
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CitaDetalle