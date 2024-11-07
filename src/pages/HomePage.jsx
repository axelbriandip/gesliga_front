import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/homePage.css'

const HomePage = () => {
  return (
    <section className='containerHomePage'>
      <div className="hero">
        <img src={LogoGesliga} alt="Logo Gesliga" />
      </div>
      <div className="container-form">
        <form>
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
          <div className="mb-3">
            <p>¿No tenés cuenta? <a href="/signUp">Crear cuenta</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomePage;