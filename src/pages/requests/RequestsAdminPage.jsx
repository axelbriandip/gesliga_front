import React from 'react';
import { useNavigate } from 'react-router-dom';
import RowRequest from '../../components/RowRequest';

const RequestsAdminPage = () => {
    const navigate = useNavigate()

    const handleLogout = () => navigate("/")
    const handleBack = () => navigate('/adminPage')
    const handleAddUser = () => navigate("/users/create")

  return (
    <section className='teamsAdminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Solicitudes</h1>
      </div>
      <div className="container-teams">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Jugador</th>
                <th scope="col">Estado</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <RowRequest id="1" type="transfer" player="Joaquin paredes" state="pending"/>
                <RowRequest id="2" type="free" player="claudio ramos" state="refused"/>
                <RowRequest id="3" type="transfer" player="dani torres" state="pending"/>
                <RowRequest id="4" type="loan" player="ale fantino" state="pending"/>
                <RowRequest id="5" type="transfer" player="jona campos" state="accepted"/>
                <RowRequest id="6" type="transfer" player="mauri vargas" state="pending"/>
                <RowRequest id="7" type="loan" player="gabi sandez" state="accepted"/>
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default RequestsAdminPage;