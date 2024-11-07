import React from 'react';
import '../styles/adminPage.css'
import { useNavigate, useParams } from 'react-router-dom';

const GenerateRequestFormPage = () => {
  const navigate = useNavigate()
  const { playerId, teamId } = useParams()
  
  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/teams/${teamId}`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Generar solicitud</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleBack}>
          <div className="mb-3">
            <h3>Ingresar datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" value={"Axel Dip"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDNI" className="form-label">DNI</label>
            <input type="text" className="form-control" id="exampleInputDNI" aria-describedby="DNIHelp" value={"39318614"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Nacimiento</label>
            <input type="text" className="form-control" id="exampleInputBirth" aria-describedby="birthHelp" value={"1994"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Tipo</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccionar una opción</option>
              <option value="1">Traspaso</option>
              <option value="2">Préstamo</option>
              <option value="3">Libertad de acción</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Destino</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccionar un equipo</option>
              <option value="1">Equipo A</option>
              <option value="2">Equipo B</option>
              <option value="3">Equipo C</option>
              <option value="4">Equipo D</option>
              <option value="5">Equipo H</option>
              <option value="6">Equipo G</option>
              <option value="7">Equipo F</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Generar</button>
        </form>
      </div>
      <p>Generando solicitud para jugador: {playerId}</p>
      <p>Generando solicitud de club: {teamId}</p>
    </section>
  );
}

export default GenerateRequestFormPage;