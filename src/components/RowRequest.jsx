import React from 'react';
import { useNavigate } from 'react-router-dom';

const RowRequest = ({id, type, player, state}) => {
  const navigate = useNavigate()

  const handleViewRequest = () => navigate(`/requests/${id}/detail`)
  const handleEditRequest = () => navigate(`/requests/${id}/edit`)
  const handleDeleteRequest = () => navigate(`/requests/${id}/delete`)

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{type}</td>
        <td>{player}</td>
        <td>{state}</td>
        <td>
            <button onClick={handleViewRequest}>Ver</button>
            <button onClick={handleEditRequest}>Aceptar</button>
            <button onClick={handleDeleteRequest}>Rechazar</button>
        </td>
    </tr>
  );
}

export default RowRequest;