import React from 'react';
import { useNavigate } from 'react-router-dom';
import RowUser from '../../components/RowUser';

const UsersAdminPage = () => {
    const navigate = useNavigate()

    const handleLogout = () => navigate("/")
    const handleBack = () => navigate('/adminPage')
    const handleAddUser = () => navigate("/users/create")

  return (
    <section className='teamsAdminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Usuarios</h1>
        <button onClick={handleAddUser}>Agregar usuario</button>
      </div>
      <div className="container-teams">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <RowUser id="1" email="joacoparedes@gmail.com" name="Joaquin paredes" password="tomi213"/>
                <RowUser id="2" email="clauramos@gmail.com" name="claudio ramos" password="javi411"/>
                <RowUser id="3" email="danit123@gmail.com" name="dani torres" password="pass123"/>
                <RowUser id="4" email="alefanta@gmail.com" name="ale fantino" password="kevin5435"/>
                <RowUser id="5" email="jonacampos@gmail.com" name="jona campos" password="brian122"/>
                <RowUser id="6" email="mauri@gmail.com" name="mauri vargas" password="melash123"/>
                <RowUser id="7" email="gabo@gmail.com" name="gabi sandez" password="ash4443"/>
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default UsersAdminPage;