import React from 'react';
import '../styles/adminPage.css'
import { useNavigate, useParams } from 'react-router-dom';

const CreatePlayerFormPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/teams/${id}`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Crear jugador</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleBack}>
          <div className="mb-3">
            <h3>Ingresar datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" value={"Axel Dip"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDNI" className="form-label">DNI</label>
            <input type="text" className="form-control" id="exampleInputDNI" aria-describedby="DNIHelp" value={"39318614"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Nacimiento</label>
            <input type="text" className="form-control" id="exampleInputBirth" aria-describedby="birthHelp" value={"1994"}/>
          </div>
          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
      <p>Creando jugador para equipos: {id}</p>
    </section>
  );
}

export default CreatePlayerFormPage;