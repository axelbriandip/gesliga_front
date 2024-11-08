import React from 'react';
import LogoGesliga from '../assets/imgs/1.png'
import '../styles/adminPage.css'
import CardOptionAdmin from '../components/CardOptionAdmin';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate()
  const sessionUserId = 18
  const urlMyProfile = `/users/${sessionUserId}/detail`
  
  const handleLogout = () => {
    navigate("/")
  }

  return (
    <section className='adminPage'>
      <div className="header">
        <button onClick={handleLogout}>Cerrar sesión</button>
        <h1>Panel de admin</h1>
      </div>
      <div className="container-options">
        <CardOptionAdmin title="Equipos" text="texto de equipos" to="/teams"/>
        <CardOptionAdmin title="Usuarios" text="texto de usuarios" to="/users"/>
        <CardOptionAdmin title="Solicitudes" text="texto de solicitudes" to="/requests"/>
        <CardOptionAdmin title="Mi perfil" text="texto de mi perfil" to={urlMyProfile}/>
      </div>
    </section>
  );
}

export default AdminPage;