import React from 'react';
import { useNavigate } from 'react-router-dom';

const RowRequest = ({id, type, player, state}) => {
  const navigate = useNavigate()

  const handleViewRequest = () => navigate(`/requests/${id}/detail`)
  const handleAcceptRequest = () => confirm("¿Seguro que deseas aceptar?")
  const handleRefusedRequest = () => confirm("¿Seguro que deseas rechazar?")

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{type}</td>
        <td>{player}</td>
        <td>{state}</td>
        <td>
            <button onClick={handleViewRequest}>Ver</button>
            <button onClick={handleAcceptRequest}>Aceptar</button>
            <button onClick={handleRefusedRequest}>Rechazar</button>
        </td>
    </tr>
  );
}

export default RowRequest;