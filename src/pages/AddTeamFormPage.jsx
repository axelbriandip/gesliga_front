import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/adminPage.css'
import CardOptionAdmin from '../components/CardOptionAdmin';
import { useNavigate } from 'react-router-dom';

const AddTeamFormPage = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    navigate("/")
  }

  const handleBack = () => {
    navigate('/teams')
  }

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Crear equipo</h1>
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
          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    </section>
  );
}

export default AddTeamFormPage;