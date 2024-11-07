import React from 'react';
import '../styles/components/cardOptionAdmin.css'
import { Link, useNavigate } from 'react-router-dom';

const RowPlayer = ({id, name, dni, birth, teamId}) => {
  const navigate = useNavigate()

  const handlePass = () => {
    navigate(`/generateRequest/team/${teamId}/player/${id}`)
  }

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{dni}</td>
        <td>{birth}</td>
        <td><button onClick={handlePass}>Pase</button></td>
    </tr>
  );
}

export default RowPlayer;