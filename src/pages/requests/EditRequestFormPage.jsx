import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditRequestFormPage = () => {
  const navigate = useNavigate()
  const { requestId } = useParams()

  const handleLogout = () => navigate("/")
  const handleBack = () => navigate(`/requests`)

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Editar solicitud</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleBack}>
          <div className="mb-3">
            <h3>Ingresar datos</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Tipo</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" value={"Axel Dip"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDNI" className="form-label">Jugador</label>
            <input type="text" className="form-control" id="exampleInputDNI" aria-describedby="DNIHelp" value={"39318614"}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBirth" className="form-label">Estado</label>
            <input type="text" className="form-control" id="exampleInputBirth" aria-describedby="birthHelp" value={"1994"}/>
          </div>
          <button type="submit" className="btn btn-primary">Editar</button>
        </form>
      </div>
      <p>editando request id: {requestId}</p>
    </section>
  );
}

export default EditRequestFormPage;