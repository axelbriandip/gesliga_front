import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const handleLogout = () => navigate("/")
  const handleSubmit = () => navigate(`/users/${userId}/edit`)
  const handleBack = () => navigate(`/users`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Detalle usuario</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3>Datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">ID</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="namehHelp" value={"216"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="namehHelp" value={"Axel Brian Dip"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Correo</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="namehHelp" value={"axel@gmail.com"} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputName" aria-describedby="namehHelp" value={"pass834438"} disabled/>
          </div>
          <button type="submit" className="btn btn-primary">Editar</button>
        </form>
      </div>
      <p>viendo user : {userId}</p>
    </section>
  );
}

export default UserDetailPage;