import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/homePage.css'
import { Navigate, useNavigate } from 'react-router-dom'
import RowTeam from '../components/RowTeam';


const TeamsAdminPage = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
    navigate("/")
    }

    const handleBack = () => {
    navigate(-1)
    }

    const handleAddTeam = () => {
        alert("Agregar team")
    }

  return (
    <section className='teamsAdminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Equipos</h1>
        <button onClick={handleAddTeam}>Agregar equipo</button>
      </div>
      <div className="container-teams">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Escudo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Delegado</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <RowTeam id="1" shield="H" name="Holder fc" delegate="tomi"/>
                <RowTeam id="2" shield="I" name="India club" delegate="javi"/>
                <RowTeam id="3" shield="C" name="Cardenas fc" delegate="-"/>
                <RowTeam id="4" shield="J" name="joel a.c." delegate="kevin"/>
                <RowTeam id="5" shield="E" name="eiffel atletic" delegate="brian"/>
                <RowTeam id="6" shield="F" name="ferrigno pana" delegate="-"/>
                <RowTeam id="7" shield="G" name="gregory f.c." delegate="ash"/>
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default TeamsAdminPage;