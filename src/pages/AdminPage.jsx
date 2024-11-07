import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/adminPage.css'
import CardOptionAdmin from '../components/CardOptionAdmin';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    navigate("/")
  }

  return (
    <section className='adminPage'>
      <div className="header">
        <h1>Panel de admin</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <div className="container-options">
        <CardOptionAdmin title="Equipos" text="texto de equipos"/>
        <CardOptionAdmin title="Usuarios" text="texto de usuarios"/>
        <CardOptionAdmin title="Solicitudes" text="texto de solicitudes"/>
        <CardOptionAdmin title="Mi perfil" text="texto de mi perfil"/>
      </div>
    </section>
  );
}

export default AdminPage;