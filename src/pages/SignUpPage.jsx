import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/SignUpPage.css'

const SignUpPage = () => {
  return (
    <section className='containerHomePage'>
      <div className="hero">
        <img src={LogoGesliga} alt="Logo Gesliga" />
      </div>
      <div className="container-form">
        <form>
          <div className="mb-3">
            <h3>Crear usuario</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre y apellido</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" value={"Axel Dip"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={"axel@gmail.com"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
            <input type="text" className="form-control" id="InputPassword" aria-describedby="passwordHelp" value={"axel123"}/>
          </div>
          <button type="submit" className="btn btn-primary">Crear</button>
          <div className="mb-3">
            <p>¿Ya tenés cuenta? <a href="/">Ingresar</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpPage;