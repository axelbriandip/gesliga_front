import React from 'react';
import '../styles/components/cardOptionAdmin.css'
import { useNavigate } from 'react-router-dom';

const RowUser = ({id, name, email, password, teamId}) => {
  const navigate = useNavigate()

  const handleViewUser = () => navigate(`/users/${id}/detail`)
  const handleEditUser = () => navigate(`/users/${id}/edit`)
  const handleDeleteUser = () => navigate(`/users/${id}/delete`)

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>
            <button onClick={handleViewUser}>Ver</button>
            <button onClick={handleEditUser}>Editar</button>
            <button onClick={handleDeleteUser}>Eliminar</button>
        </td>
    </tr>
  );
}

export default RowUser;