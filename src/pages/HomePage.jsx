import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/homePage.css'
import { Navigate, useNavigate } from 'react-router-dom'


const HomePage = () => {
  const navigate = useNavigate()
  
  const handleSubmit = () => {
    navigate('/adminPage')
  }

  return (
    <section className='containerHomePage'>
      <div className="hero">
        <img src={LogoGesliga} alt="Logo Gesliga" />
      </div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3>Ingresar al sistema</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={"axel@gmail.com"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
            <input type="text" className="form-control" id="InputPassword" aria-describedby="passwordHelp" value={"axel123"}/>
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default HomePage;