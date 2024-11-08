import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteUserPage = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/users`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Eliminar usuario</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleBack}>
          <div className="mb-3">
            <h3>Ingresar datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">¿Estas seguro que queres eliminar el usuario X?</label>
            <div className="form-check">
                <input 
                type="checkbox" 
                className="form-check-input" 
                id="confirmDelete" 
                />
                <label htmlFor="confirmDelete" className="form-check-label">
                Sí, estoy seguro
                </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Contraseña admin</label>
            <input type="text" className="form-control" id="exampleInputBirth" aria-describedby="birthHelp" value={"passw2312"}/>
          </div>
          <button type="submit" className="btn btn-primary">Eliminar</button>
        </form>
      </div>
      <p>delete user : {userId}</p>
    </section>
  );
}

export default DeleteUserPage;