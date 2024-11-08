import React from 'react';
import '../styles/components/cardOptionAdmin.css'
import { useNavigate } from 'react-router-dom';

const RowRequest = ({id, type, player, state}) => {
  const navigate = useNavigate()

  const handleViewUser = () => navigate(`/users/${id}/detail`)
  const handleEditUser = () => navigate(`/users/${id}/edit`)
  const handleDeleteUser = () => navigate(`/users/${id}/delete`)

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{type}</td>
        <td>{player}</td>
        <td>{state}</td>
        <td>
            <button onClick={handleViewUser}>Ver</button>
            <button onClick={handleEditUser}>Aceptar</button>
            <button onClick={handleDeleteUser}>Rechazar</button>
        </td>
    </tr>
  );
}

export default RowRequest;