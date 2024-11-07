import React from 'react';
import '../styles/adminPage.css'
import { useNavigate, useParams } from 'react-router-dom';

const EditTeamPage = () => {
  const navigate = useNavigate()
  const { teamId } = useParams()
  
  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/teams/${teamId}`)
  const handleTeamDelete = () => navigate(`/teams/${teamId}`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Editar equipo</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleBack}>
          <div className="mb-3">
            <h3>Ingresar datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" value={"Olimpo"}/>
          </div>
          <button type="submit" className="btn btn-primary">Editar</button>
          <div className="mb-3">
            <p>¿Eliminar equipo? <button onClick={handleTeamDelete}>Si, Eliminar</button></p>
          </div>
        </form>
      </div>
      <p>editando equipo con id: {teamId}</p>
    </section>
  );
}

export default EditTeamPage;