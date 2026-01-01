import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NuevaCita() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    paciente: '',
    doctor: '',
    especialidad: '',
    fecha: '',
    hora: '',
    motivo: '',
    telefono: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Nueva cita:', formData)
    alert('¡Cita agendada exitosamente!')
    navigate('/citas')
  }

  return (
    <div className="nueva-cita">
      <h1>📅 Agendar Nueva Cita</h1>

      <form onSubmit={handleSubmit} className="form-cita">
        <div className="form-group">
          <label>Nombre del Paciente *</label>
          <input
            type="text"
            name="paciente"
            value={formData.paciente}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Especialidad *</label>
            <select
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una especialidad</option>
              <option value="Medicina General">Medicina General</option>
              <option value="Cardiología">Cardiología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Dermatología">Dermatología</option>
              <option value="Oftalmología">Oftalmología</option>
            </select>
          </div>

          <div className="form-group">
            <label>Doctor *</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un doctor</option>
              <option value="Dr. García">Dr. García</option>
              <option value="Dra. Martínez">Dra. Martínez</option>
              <option value="Dr. López">Dr. López</option>
              <option value="Dra. Sánchez">Dra. Sánchez</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Fecha *</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Hora *</label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            placeholder="555-1234"
          />
        </div>

        <div className="form-group">
          <label>Motivo de la Consulta *</label>
          <textarea
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Describe el motivo de tu consulta..."
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/citas')} className="btn-cancelar-form">
            Cancelar
          </button>
          <button type="submit" className="btn-agendar">
            Agendar Cita
          </button>
        </div>
      </form>
    </div>
  )
}

export default NuevaCita