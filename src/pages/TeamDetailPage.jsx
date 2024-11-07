import React from 'react';
import '../styles/adminPage.css'
import { useNavigate } from 'react-router-dom';

const TeamDetailPage = () => {
    const navigate = useNavigate()

    const handleLogout = () => navigate("/")
    const handleBack = () => navigate('/teams')

    return (
    <section className='adminPage'>
        <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button onClick={handleBack}>Volver</button>
        <h1>Team Detail Page</h1>
        </div>
        <div className="container-options">
        </div>
    </section>
    );
}

export default TeamDetailPage;