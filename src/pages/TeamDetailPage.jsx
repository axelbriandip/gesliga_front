import React from 'react';
import '../styles/adminPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import RowPlayer from '../components/RowPlayer';

const TeamDetailPage = () => {
    const navigate = useNavigate()

    const { id } = useParams()

    const handleLogout = () => navigate("/")
    const handleBack = () => navigate('/teams')
    const handleAddPlayer = () => navigate(`/team/${id}/createPlayer`)

    return (
    <section className='adminPage'>
        <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Team Detail Page - Club id {id}</h1>
        <p>Delegado: Daniel Rodríguez</p>
        <button onClick={handleAddPlayer}>Agregar jugador</button>
        </div>
        <div className="list-players">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Nacimiento</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <RowPlayer id="1" dni="12312333" name="dani perez" birth="1976"/>
                    <RowPlayer id="2" dni="32132442" name="claudio ramos" birth="1992"/>
                    <RowPlayer id="3" dni="45353462" name="jorge diaz" birth="2001"/>
                    <RowPlayer id="4" dni="12987398" name="martin lopez" birth="2002"/>
                    <RowPlayer id="5" dni="98239782" name="alfredo cortez" birth="1994"/>
                    <RowPlayer id="6" dni="28428292" name="martin liberman" birth="1990"/>
                    <RowPlayer id="7" dni="61819878" name="pedro bozoa" birth="1998"/>
                </tbody>
            </table>
        </div>
    </section>
    );
}

export default TeamDetailPage;