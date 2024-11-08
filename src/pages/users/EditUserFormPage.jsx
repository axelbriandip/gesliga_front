import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUserFormPage = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/users`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Editar usuario</h1>
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
            <label htmlFor="exampleInputDNI" className="form-label">correo</label>
            <input type="text" className="form-control" id="exampleInputDNI" aria-describedby="DNIHelp" value={"39318614"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">contraseña</label>
            <input type="text" className="form-control" id="exampleInputBirth" aria-describedby="birthHelp" value={"1994"}/>
          </div>
          <button type="submit" className="btn btn-primary">Editar</button>
        </form>
      </div>
      <p>editando user id: {userId}</p>
    </section>
  );
}

export default EditUserFormPage;